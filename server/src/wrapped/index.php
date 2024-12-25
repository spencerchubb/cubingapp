<?php
include "../php/event_utils.php";

$wcaId = isset($_GET["wcaId"]) ? $_GET["wcaId"] : null;

error_reporting(E_ALL);
ini_set("display_errors", 1);
$db = new SQLite3("/wca.db");

if ($wcaId) {
    $stmt = $db->prepare("SELECT name FROM Persons WHERE id=:personId;");
    $stmt->bindValue(":personId", $wcaId, SQLITE3_TEXT);
    $rows = $stmt->execute();
    $person = $rows->fetchArray(SQLITE3_ASSOC);
    $name = $person["name"];

    // Get singles
    $stmt = $db->prepare("SELECT * FROM RanksSingle WHERE personId=:wcaId;");
    $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
    $rows = $stmt->execute();
    $singles = [];
    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        $singles[$row["eventId"]] = $row;
    }

    // Get averages
    $stmt = $db->prepare("SELECT * FROM RanksAverage WHERE personId=:wcaId;");
    $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
    $rows = $stmt->execute();
    $averages = [];
    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        $averages[$row["eventId"]] = $row;
    }

    // Get results from 2024
    $stmt = $db->prepare("SELECT pos, roundTypeId, competitionId, eventId, best, average, regionalSingleRecord, regionalAverageRecord FROM Results WHERE personId=:wcaId AND competitionId LIKE '%2024';");
    $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
    $rows = $stmt->execute();
    $competitions = [];
    $results = [];
    $events = [];
    $personalBests = [];
    $podiums = ["Gold" => 0, "Silver" => 0, "Bronze" => 0];
    $records = ["World" => 0, "Continental" => 0, "National" => 0];
    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        $competitions[$row["competitionId"]] = true;
        $results[] = $row;

        if (!isset($events[$row["eventId"]])) {
            $events[$row["eventId"]] = 1;
        } else {
            $events[$row["eventId"]] += 1;
        }

        if ($row["best"] == $singles[$row["eventId"]]["best"]) {
            $eventId = $row["eventId"];
            $result = formatResult($eventId, "single", $row["best"]);
            $personalBests[] = "$eventIdToName[$eventId] Single: $result";
        }
        if ($row["average"] == $averages[$row["eventId"]]["best"]) {
            $eventId = $row["eventId"];
            $result = formatResult($eventId, "average", $row["average"]);
            $personalBests[] = "$eventIdToName[$eventId] Average: $result";
        }

        if ($row["roundTypeId"] == "f" || $row["roundTypeId"] == "c") {
            if ($row["pos"] == 1) $podiums["Gold"]++;
            if ($row["pos"] == 2) $podiums["Silver"]++;
            if ($row["pos"] == 3) $podiums["Bronze"]++;
        }

        // If it equals "NR" it's national.
        // If it equals "WR" it's world.
        // If it's a non-empty string, it's continental. Examples: NAR, ER, etc.
        if ($row["regionalSingleRecord"] == "NR") $records["National"]++;
        else if ($row["regionalAverageRecord"] == "NR") $records["National"]++;
        else if ($row["regionalSingleRecord"] == "WR") $records["World"]++;
        else if ($row["regionalAverageRecord"] == "WR") $records["World"]++;
        else if ($row["regionalSingleRecord"]) $records["Continental"]++;
        else if ($row["regionalAverageRecord"]) $records["Continental"]++;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2024 Cubing Wrapped for <?php echo $person["name"] ?></title>
</head>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main>
    <?php if ($wcaId): ?>
        <h1>2024 Cubing Wrapped for <a href="/persons?wcaId=<?php echo $wcaId ?>" class="link"><?php echo $person["name"] ?></a></h1>
        <p style="margin-top: 16px; max-width: 600px;">
            2024 has been a record-breaking year for cubing.
            This year had the most competitions of any year in the history of the WCA: 2,145 competitions.
            That's a 27% increase compared to 2023!
        </p>
        <p style="margin-top: 16px; max-width: 600px;">
            Cubing has also been reaching more and more people each year.
            31,667 new people competed in WCA competitions. 
            I am grateful to the WCA for bringing cubing to more people.
        </p>
        <p style="margin-top: 16px; max-width: 600px;">
            2024 has had its fair share of cubing controversies, but I hope we can take a moment to reflect on the good times (pun intended).
            To wrap up 2024, here are some 2024 highlights for <a href="/persons?wcaId=<?php echo $wcaId ?>" class="link"><?php echo $person["name"] ?></a>.
        </p>

        <p style="margin-top: 16px;"><b>Number of competitions:</b> <?php echo count($competitions) ?></p>
        <p style="margin-top: 16px;"><b>Number of rounds:</b> <?php echo count($results) ?></p>
        <p style="margin-top: 16px;"><b>PBs achieved:</b></p>
        <ul>
            <?php
                foreach ($personalBests as $personalBest) {
                    echo "<li>$personalBest</li>";
                }
            ?>
        </ul>
        <p style="margin-top: 16px;"><b>Most common events:</b></p>
        <ul>
            <?php
                arsort($events);
                for ($i = 0; $i < min(5, count($events)); $i++) {
                    $eventId = array_keys($events)[$i];
                    echo "<li>$eventIdToName[$eventId] (Competed $events[$eventId] times)</li>";
                }
            ?>
        </ul>
        <p style="margin-top: 16px;"><b>Podiums:</b></p>
        <ul>
            <li>Gold: <?php echo $podiums["Gold"] ?></li>
            <li>Silver: <?php echo $podiums["Silver"] ?></li>
            <li>Bronze: <?php echo $podiums["Bronze"] ?></li>
        </ul>
        <p style="margin-top: 16px;"><b>Records:</b></p>
        <ul>
            <li>World: <?php echo $records["World"] ?></li>
            <li>Continental: <?php echo $records["Continental"] ?></li>
            <li>National: <?php echo $records["National"] ?></li>
        </ul>
    <?php else: ?>
        <h1>Cubing Wrapped</h1>
    <?php endif; ?>
    <div style="min-height: 100px;"></div>
    </main>
</body>

<?php include "../php/gtag.php" ?>

</html>
