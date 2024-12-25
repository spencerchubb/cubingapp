<?php
// include "../wca_sign_in/get_authenticated_person.php";
// $authenticatedPerson = getAuthenticatedPerson();

include "../php/event_utils.php";

$wcaId = isset($_GET["wcaId"]) ? $_GET["wcaId"] : null;
$ranks = [];

error_reporting(E_ALL);
ini_set("display_errors", 1);
$db = new SQLite3("/wca.db");

if ($wcaId) {
    $stmt = $db->prepare("
        SELECT name, countryId, worldKinch, continentKinch, countryKinch, worldSorSingle, continentSorSingle, countrySorSingle, worldSorAverage, continentSorAverage, countrySorAverage
        FROM Persons WHERE id=:personId;");
    $stmt->bindValue(":personId", $wcaId, SQLITE3_TEXT);
    $rows = $stmt->execute();
    $person = $rows->fetchArray(SQLITE3_ASSOC);
    $name = $person["name"];
    foreach (["worldKinch", "continentKinch", "countryKinch", "worldSorSingle", "continentSorSingle", "countrySorSingle", "worldSorAverage", "continentSorAverage", "countrySorAverage"] as $key) {
        $person[$key] = round(str_pad($person[$key], 2, "0", STR_PAD_LEFT), 2);
    }

    $stmt = $db->prepare("SELECT * FROM RanksSingle WHERE personId=:personId AND eventId <> '333ft' AND eventId <> '333mbo' AND eventId <> 'magic' AND eventId <> 'mmagic';");
    $stmt->bindValue(":personId", $wcaId, SQLITE3_TEXT);
    $rows = $stmt->execute();
    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        $eventId = $row["eventId"];
        $eventName = $eventIdToName[$eventId];
        if (!isset($ranks[$eventName])) {
            $ranks[$eventName] = ["singleBest" => null, "singleWR" => null, "singleCR" => null, "singleNR" => null, "averageBest" => null, "averageWR" => null, "averageCR" => null, "averageNR" => null];
        }
        $ranks[$eventName]["singleBest"] = formatResult($eventId, "single", $row["best"]);
        $ranks[$eventName]["singleWR"] = $row["worldRank"];
        $ranks[$eventName]["singleCR"] = $row["continentRank"];
        $ranks[$eventName]["singleNR"] = $row["countryRank"];
    }

    $stmt = $db->prepare("SELECT * FROM RanksAverage WHERE personId=:personId AND eventId <> '333ft' AND eventId <> '333mbo' AND eventId <> 'magic' AND eventId <> 'mmagic';");
    $stmt->bindValue(":personId", $wcaId, SQLITE3_TEXT);
    $rows = $stmt->execute();
    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        $eventId = $row["eventId"];
        $eventName = $eventIdToName[$eventId];
        if (!isset($ranks[$eventName])) {
            $ranks[$eventName] = ["singleBest" => null, "singleWR" => null, "singleCR" => null, "singleNR" => null, "averageBest" => null, "averageWR" => null, "averageCR" => null, "averageNR" => null];
        }
        $ranks[$eventName]["averageBest"] = formatResult($eventId, "average", $row["best"]);
        $ranks[$eventName]["averageWR"] = $row["worldRank"];
        $ranks[$eventName]["averageCR"] = $row["continentRank"];
        $ranks[$eventName]["averageNR"] = $row["countryRank"];
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title><?php if ($wcaId) echo "$person[name] | CubingApp"; else echo "Persons | CubingApp"; ?></title>
</head>

<style>
.table-wrapper {
    max-width: 100%;
    width: fit-content;
    overflow-x: auto;
}

table tr:nth-child(even) {
    background: var(--gray-900);
}

th:nth-child(1), td:nth-child(1), th:nth-child(5), td:nth-child(5) {
    border-right: solid 1px #555;
}
</style>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main>
    <?php if ($wcaId): ?>
        <!-- <div style="padding: 8px; background: var(--gray-900);">
            <?php if ($authenticatedPerson): ?>
                <p>Signed in as <?php echo $authenticatedPerson["name"] ?></p>
                <button id="editButton" style="margin-top: 12px;">Edit profile</button>
                <script>
                    editButton.onclick = (event) => {
                        const url = "/persons/edit";
                        if (event.ctrlKey) window.open(url);
                        else window.location.href = url;
                    }
                </script>
            <?php else: ?>
                <p>Want to spice up your CubingApp page? You can show off your PBs, main puzzles, and methods.</p>
                <button id="wcaSignInButton" style="margin-top: 12px;">Sign in with WCA</button>
                <script>
                    wcaSignInButton.onclick = (event) => {
                        const url = `/wca_sign_in?goto=${encodeURIComponent(window.location.href)}`;
                        if (event.ctrlKey) window.open(url);
                        else window.location.href = url;
                    }
                </script>
            <?php endif; ?>
        </div> -->

        <h1><?php echo $person["name"] ?></h1>
        <p style="margin-top: 6px;">Country: <?php echo $person["countryId"] ?></p>
        <p style="margin-top: 6px;">WCA ID: <?php echo $wcaId ?></p>

        <?php
            echo "<div class='table-wrapper'><table style='margin-top: 16px;'>";
            echo "<tr>
                <th>Event</th>
                <th>Single</th>
                <th>WR</th>
                <th>CR</th>
                <th>NR</th>
                <th>Average</th>
                <th>WR</th>
                <th>CR</th>
                <th>NR</th>
            </tr>";

            foreach ($ranks as $eventId => $ranks) {
                echo "<tr>
                    <td>$eventId</td>
                    <td>$ranks[singleBest]</td>
                    <td>$ranks[singleWR]</td>
                    <td>$ranks[singleCR]</td>
                    <td>$ranks[singleNR]</td>
                    <td>$ranks[averageBest]</td>
                    <td>$ranks[averageWR]</td>
                    <td>$ranks[averageCR]</td>
                    <td>$ranks[averageNR]</td>
                </tr>";
            }

            echo "<tr>
                <td>Kinch</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>$person[worldKinch]</td>
                <td>$person[continentKinch]</td>
                <td>$person[countryKinch]</td>
            </tr>";
            echo "<tr>
                <td>Sum of Ranks</td>
                <td></td>
                <td>$person[worldSorSingle]</td>
                <td>$person[continentSorSingle]</td>
                <td>$person[countrySorSingle]</td>
                <td></td>
                <td>$person[worldSorAverage]</td>
                <td>$person[continentSorAverage]</td>
                <td>$person[countrySorAverage]</td>
            </tr>";

            echo "</table></div>";
        ?>
    <?php else: ?>
        <h1>Persons</h1>
    <?php endif; ?>
    <div style="min-height: 100px;"></div>
    </main>
</body>

<?php include "../php/gtag.php" ?>

</html>
