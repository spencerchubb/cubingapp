<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Ranks based on World Cube Association (WCA) data">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Contributor Ranks</title>
</head>

<script>
function setUrlParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams.toString();
}
</script>

<?php
$event = $_GET["event"] ?? "333";
$type = $_GET["type"] ?? "Single";
?>

<body>
<?php include_once "../php/menu.php"; ?>

<main>
    <h1 style="margin-bottom: 8px;">Contributor Ranks</h1>
    <div style="display: flex;"><?php include "../php/wca_attribution.php"; ?></div>
    <p style="margin-top: 16px; max-width: 600px;">This page ranks the WCA Contributors. This includes delegates, translators, committee members, Officers, and Board members.
    <p style="margin-top: 16px; max-width: 600px;">Thank you to the WCA for everything you do! The people on this page have helped the cubing community tremendously.</p>
    <div style="margin-top: 24px; display: flex; flex-direction: column;">
        <div style="width: 100%; max-width: 300px;">  
            <?php
                include "../php/event_utils.php";
                selectEvent($event, $eventIdToName);
            ?>
        </div>
        <select
            id="selectType"
            style="margin-top: 16px; width: 100%; max-width: 300px;"
        >
            <option value="Single" <?php echo $type === "Single" ? "selected" : "" ?>>Single</option>
            <option value="Average" <?php echo $type === "Average" ? "selected" : "" ?>>Average</option>
        </select>
        <script>
            selectEvent.onchange = event => setUrlParam("event", event.target.value);
            selectType.onchange = event => setUrlParam("type", event.target.value);
        </script>
    </div>
    <?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    $db = new SQLite3("/wca.db");

    if (!$db) {
        die("Error connecting to the database: " . $db->lastErrorMsg());
    }

    $stmt = $db->prepare("SELECT personId, name, best, countryId, Staff.group_name, Staff.group_type
        FROM Ranks$type ranks
        JOIN Staff ON staff.wca_id = personId AND eventId = :eventId
        ORDER BY worldRank");
    $stmt->bindValue(":eventId", $event, SQLITE3_TEXT);
    $rows = $stmt->execute();

    // personId => row
    $tableRows = array();

    // Contributors may have more than one title, so we need to group by personId.
    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        if (!isset($tableRows[$row["personId"]])) {
            $tableRows[$row["personId"]] = $row;
            $tableRows[$row["personId"]]["titles"] = array();
        }

        $group_name = $row["group_name"];
        $group_type = $row["group_type"];
        if ($group_type === "translators") {
            $tableRows[$row["personId"]]["titles"][] = "Translator for " . $group_name;
        } else if ($group_type === "delegate_regions") {
            $tableRows[$row["personId"]]["titles"][] = "Delegate";
        } else if ($group_type === "teams_committees") {
            $tableRows[$row["personId"]]["titles"][] = "Member of " . $group_name;
        } else if ($group_type === "officers") {
            $tableRows[$row["personId"]]["titles"][] = "Member of WCA Officers";
        } else if ($group_type === "board") {
            $tableRows[$row["personId"]]["titles"][] = "Member of WCA Board";
        }
    }

    echo "<div class='table-wrapper' style='margin-top: 24px;'><table>";
    echo "<tr>
        <th>#</th>
        <th>Name</th>
        <th>Result</th>
        <th>Country</th>
        <th>Title</th>
    </tr>";

    $rank = 0;
    $numTied = 1;
    $previousBest = null;
    foreach ($tableRows as $id => $row) {
        $name = $row["name"];
        $best = formatResult($event, $type, $row["best"]);
        $country = $row["countryId"];

        if ($previousBest === $row["best"]) {
            $numTied++;
        } else {
            $previousBest = $row["best"];
            $rank += $numTied;
            $numTied = 1;
        }

        $joinedTitles = join(", ", $row["titles"]);
        echo "<tr>
            <td>$rank</td>
            <td>$name</td>
            <td>$best</td>
            <td>$country</td>
            <td>$joinedTitles</td>
        </tr>";
    }

    $db->close();

    echo "</table></div>";
    ?>
    <div style="margin-top: 150px;"></div>
</main>
</body>

<style>
    .table-wrapper {
        max-width: 100%;
        width: fit-content;
        overflow-x: auto;
    }

    table tr:nth-child(even) {
        background: var(--gray-900);
    }
</style>

<?php include "../php/gtag.php" ?>

</html>
