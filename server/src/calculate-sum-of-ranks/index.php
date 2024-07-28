<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Enter a WCA ID to calculate the Sum of Ranks for that competitor.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Calculate Sum of Ranks (SoR)</title>
</head>

<script>
function setUrlParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams.toString();
}

function onChangeType(event) {
    setUrlParam("type", event.target.value);
}
</script>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main>
        <h1 style="text-align: center;">Calculate Sum of Ranks (SoR)</h1>
        <?php
            $wcaId = $_GET["wcaId"] ?? null;
            $type = $_GET["type"] ?? "Single";
        ?>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="margin-top: 1rem;"></div>
            <?php include "../php/wca_attribution.php" ?>
            <div style="margin-top: 1rem;"></div>
            <a href="/sum-of-ranks" class="link">Go to Sum of Ranks leaderboard</a>
            <div style="margin-top: 1.5rem;"></div>
            <?php
            include "../php/search/element.php";
            renderSearchElement("/calculate-sum-of-ranks", $wcaId);
            ?>
            <div style="margin-top: 1.5rem;"></div>
            <select
                id="select-type"
                style="width: 100%; max-width: 300px;"
            >
                <option value="Single" <?php echo $type === "Single" ? "selected" : "" ?>>Single</option>
                <option value="Average" <?php echo $type === "Average" ? "selected" : "" ?>>Average</option>
            </select>
            <script>document.querySelector("#select-type").addEventListener("change", onChangeType)</script>
        </div>
        <?php if ($wcaId): ?>
            <?php
            error_reporting(E_ALL);
            ini_set("display_errors", 1);
            $db = new SQLite3("/wca.db");

            if (!$db) {
                die("Error connecting to the database: " . $db->lastErrorMsg());
            }

            $query = "
            WITH User AS (
                SELECT p.countryId, c.continentId
                FROM Persons p
                JOIN Countries c ON c.id = p.countryId AND p.id = :wcaId
            )
            SELECT
                e.id AS eventId,
                r.worldRank,
                (SELECT COUNT(*) FROM Ranks$type r WHERE r.eventId = e.id) AS maxWorldRank,
                r.continentRank,
                (SELECT COUNT(*) FROM Ranks$type r WHERE r.continentId = (SELECT continentId FROM User) AND r.eventId = e.id) AS maxContinentRank,
                r.countryRank,
                (SELECT COUNT(*) FROM Ranks$type r WHERE r.countryId = (SELECT countryId FROM User) AND r.eventId = e.id) AS maxCountryRank
            FROM Events e
            LEFT JOIN Ranks$type r ON e.id = r.eventId AND r.personId = :wcaId
            WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
            ";

            $stmt = $db->prepare($query);
            $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
            $result = $stmt->execute();

            echo "<div class='table-wrapper' style='margin: 2rem auto;'><table>";
            echo "<tr>
                <th>Event</th>
                <th>World</th>
                <th>Continent</th>
                <th>Country</th>
            </tr>";
            $rows = array();
            $worldSum = 0;
            $continentSum = 0;
            $countrySum = 0;
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $row["worldRank"] = $row["worldRank"] ?? $row["maxWorldRank"];
                $row["continentRank"] = $row["continentRank"] ?? $row["maxContinentRank"];
                $row["countryRank"] = $row["countryRank"] ?? $row["maxCountryRank"];
                $worldSum += $row["worldRank"];
                $continentSum += $row["continentRank"];
                $countrySum += $row["countryRank"];
                // append row to rows
                $rows[] = $row;
            }

            // Get user's ranking in country, continent, and world based on their sum of ranks.
            $stmt = $db->prepare("
            SELECT
                (SELECT COUNT(*) FROM Persons p2
                    WHERE countrySor$type < $countrySum AND p2.countryId = p1.countryId) AS countryCount,
                (SELECT COUNT(*) FROM Persons p2
                    WHERE continentSor$type < $continentSum AND p2.continentId = p1.continentId) AS continentCount,
                (SELECT COUNT(*) FROM Persons
                    WHERE worldSor$type < $worldSum) AS worldCount
            FROM Persons p1 WHERE id = :wcaId;
            ");
            $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
            $result = $stmt->execute();
            $row = $result->fetchArray(SQLITE3_ASSOC);
            $countryRank = $row["countryCount"] + 1;
            $continentRank = $row["continentCount"] + 1;
            $worldRank = $row["worldCount"] + 1;

            $db->close();

            echo "<tr>
                <td>Rank</td>
                <td>$worldRank</td>
                <td>$continentRank</td>
                <td>$countryRank</td>
            </tr>
            <tr>
                <td>Sum</td>
                <td>$worldSum</td>
                <td>$continentSum</td>
                <td>$countrySum</td>
            </tr>";

            function renderCell($value, $maxValue) {
                if ($maxValue == 0) {
                    return "<td>N/A</td>";
                }
                $percent = $value / $maxValue * 100;
                $textColor = "hsl(" . (100 - $percent) . "deg 100% 50%)";
                return "<td style='color: " . $textColor . ";'>" . $value . "</td>";
            }

            foreach ($rows as $row) {
                echo "<tr>";
                echo "<td>" . $row["eventId"] . "</td>";
                echo renderCell($row["worldRank"], $row["maxWorldRank"]);
                echo renderCell($row["continentRank"], $row["maxContinentRank"]);
                echo renderCell($row["countryRank"], $row["maxCountryRank"]);
                echo "</tr>";
            }
            
            echo "</table></div>";
            ?>
        <?php endif; ?>
        <div class="info-div">
            <h2>What is Sum of Ranks (SoR)?</h2>
            <p>
                Sum of Ranks is one way of measuring a cuber's overall
                performance rather than measuring just one event. To compute a
                Sum of Ranks, we simply add up the cuber's rank in each event.
                It is possible to compute a cuber's Sum of Ranks at a global
                level, continental level, and national level.
            </p>
            <h2>What does my Sum of Ranks mean?</h2>
            <p>
                Lower scores are better. For example, since the world record
                holder is ranked 1st in the world, their rank for that event is
                1.
            </p>
            <h2>Alternatives to Sum of Ranks</h2>
            <p>
                Sum of Ranks is just one way to measure the all-round abilities of a cuber.
                If you want to know your Kinch score, you can visit our <a class="link" href="/calculate-kinch">Kinch Calculator</a> as well.
            </p>
            <p>
                Different methods will have different tradeoffs, and not everyone agrees on which is better.
                That's why we provide multiple ways to measure your all-round abilities.
            </p>
        </div>
        <div style="margin: 64px auto; width: fit-content;">
            <?php include "../php/cool_calculators.php" ?>
        </div>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<style>
    .table-wrapper {
        max-width: 100%;
        width: fit-content;
        overflow-x: auto;
    }

    .info-div {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 600px;
        gap: 16px;
        margin: 0 auto;
    }

    .info-div h2 {
        margin-top: 32px;
    }

    .info-div p, .info-div ul, .info-div li {
        align-self: start;
        line-height: 1.5rem;
    }
</style>

<?php include "../php/gtag.php" ?>

</html>
