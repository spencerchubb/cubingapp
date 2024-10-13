<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Have you ever wondered 'If I am rank n in 3x3, how fast is that in other events?' This page lets you compare a rank across all events.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Event Comparisons</title>
</head>

<script>
function q(selector) {
    return document.querySelector(selector);
}

function E(name, props, children) {
    const ele = document.createElement(name);
    for (const [key, value] of Object.entries(props)) {
        ele[key] = value;
    }

    children = children || [];
    for (const child of children) {
        ele.appendChild(child);
    }
    return ele;
}

function setUrlParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    if (value) urlParams.set(key, value);
    else urlParams.delete(key);
    window.location.search = urlParams.toString();
}
</script>

<?php
$rank = $_GET["rank"] ?? 1;
$region = $_GET["region"] ?? "World";
$type = $_GET["type"] ?? "Single";
?>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main>
        <h1>Event Comparisons</h1>
        <?php
        echo "<div style='margin-top: 8px; display: flex;'>";
        include_once "../php/wca_attribution.php";
        echo "</div>";
        ?>
        
        <p style="margin-top: 24px;">Have you ever wondered "If I am rank n in 3x3, how fast is that in other events?"</p>
        <p style="margin-top: 8px;">This page lets you compare a rank across all events.</p>

        <input id="rankInput" type="number" placeholder="Rank" value="<?php echo $rank ?>" style="margin-top: 32px; width: 100%; max-width: 300px;" />
        <div style="margin-top: 16px; width: 100%; max-width: 300px;">
            <?php include "../php/select_region.php" ?>
        </div>
        <select
            id="selectType"
            style="margin-top: 16px; width: 100%; max-width: 300px;"
        >
            <option value="Single" <?php echo $type === "Single" ? "selected" : "" ?>>Single</option>
            <option value="Average" <?php echo $type === "Average" ? "selected" : "" ?>>Average</option>
        </select>
        <script>
            rankInput.onchange = event => setUrlParam("rank", event.target.value);
            selectRegion.onchange = event => setUrlParam("region", event.target.value);
            selectType.onchange = event => setUrlParam("type", event.target.value);
        </script>
        
        <?php

        $eventIdToName = [
            "333" => "3x3",
            "222" => "2x2",
            "444" => "4x4",
            "555" => "5x5",
            "666" => "6x6",
            "777" => "7x7",
            "333bf" => "3BLD",
            "333fm" => "FMC",
            "333oh" => "OH",
            "clock" => "Clock",
            "minx" => "Mega",
            "pyram" => "Pyra",
            "skewb" => "Skewb",
            "sq1" => "SQ1",
            "444bf" => "4BLD",
            "555bf" => "5BLD",
            "333mbf" => "MBLD",
        ];

        error_reporting(E_ALL);
        ini_set("display_errors", 1);
        $db = new SQLite3("/wca.db");

        if (!$db) {
            die("Error connecting to the database: " . $db->lastErrorMsg());
        }

        // There are a lot of ties, so we have to get record >= rank, and then group by eventId.
        if (strpos($region, "continent-") !== false) {
            $continent = substr($region, strlen("continent-"));
            $query = "SELECT eventId, best AS result, name
                FROM Ranks$type
                WHERE continentRank >= :rank AND continentId = :continentId AND eventId <> '333ft' AND eventId <> '333mbo' AND eventId <> 'magic' AND eventId <> 'mmagic'
                GROUP BY eventId;";
            $stmt = $db->prepare($query);
            $stmt->bindValue(":continentId", "_" . $continent, SQLITE3_TEXT);
        } else if (strpos($region, "country-") !== false) {
            $country = substr($region, strlen("country-"));
            $query = "SELECT eventId, best AS result, name
                FROM Ranks$type
                WHERE countryRank >= :rank AND  countryId = :countryId AND eventId <> '333ft' AND eventId <> '333mbo' AND eventId <> 'magic' AND eventId <> 'mmagic'
                GROUP BY eventId;";
            $stmt = $db->prepare($query);
            $stmt->bindValue(":countryId", $country, SQLITE3_TEXT);
        } else {
            // If we got to this point, region should be "World"
            $query = "SELECT eventId, best AS result, name
                FROM Ranks$type
                WHERE worldRank >= :rank AND eventId <> '333ft' AND eventId <> '333mbo' AND eventId <> 'magic' AND eventId <> 'mmagic'
                GROUP BY eventId;";
            $stmt = $db->prepare($query);
        }

        $stmt->bindValue(":rank", $rank, SQLITE3_TEXT);
        $rows = $stmt->execute();

        echo "<div class='table-wrapper' style='margin-top: 16px;'><table>";
        echo "<tr>
            <th>Event</th>
            <th>Result</th>
            <th>Name</th>
        </tr>";

        include_once "../php/event_utils.php";

        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            echo "<tr>
                <td>" . $eventIdToName[$row["eventId"]] . "</td>
                <td>" . formatResult($row["eventId"], $type, $row["result"]) . "</td>
                <td>$row[name]</td>
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
