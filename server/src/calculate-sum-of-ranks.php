<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Enter a WCA ID to calculate the Sum of Ranks for that competitor.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Sum of Ranks (SoR) Calculator</title>
</head>
<body style="width: 100%; height: 100%;">
    <nav>
        <?php include "php/menu/menuIcon.php" ?>
        <?php include "php/menu/menu.php" ?>
    </nav>
    <main class="col" style="width: 100%; height: 100%; align-items: center; padding: 16px; overflow-y: auto;">
        <h1 style="margin-top: 0.25rem;">Sum of Ranks (SoR) Calculator</h1>
        <?php
            $wcaId = $_GET["wcaId"] ?? null;
            $type = $_GET["type"] ?? "Single";
        ?>
        <form
            action="calculate-sum-of-ranks.php"
            method="GET"
            style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr auto; gap: 24px 16px;"
        >
            <p>WCA ID</p>
            <input
                type="text"
                value="<?php echo $wcaId; ?>"
                name="wcaId"
                placeholder="Enter WCA ID"
            />
            <p>Type</p>
            <select name="type">
                <option value="Single" <?php if ($type === "Single") echo "selected"; ?>>Single</option>
                <option value="Average" <?php if ($type === "Average") echo "selected"; ?>>Average</option>
            </select>
            <button
                type="submit"
                style="grid-column: 1 / 3; margin-top: 0.5rem;"
            >
                Calculate
            </button>
        </form>
        <?php if ($wcaId): ?>
            <div style="margin-top: 3rem;"></div>
            <?php include "php/wca_attribution.php" ?>
            <?php
            error_reporting(E_ALL);
            ini_set("display_errors", 1);
            $db = new SQLite3("wca.db");

            if (!$db) {
                die("Error connecting to the database: " . $db->lastErrorMsg());
            }

            $singleQuery = "
            WITH User AS (
                SELECT p.countryId, c.continentId
                FROM Persons p
                JOIN Countries c ON c.id = p.countryId AND p.id = :wcaId
            )
            SELECT
                e.id AS eventId,
                r.worldRank,
                (SELECT COUNT(*) FROM RanksSingle r WHERE r.eventId = e.id) AS maxWorldRank,
                r.continentRank,
                (SELECT COUNT(*) FROM RanksSingle r WHERE r.continentId = (SELECT continentId FROM User) AND r.eventId = e.id) AS maxContinentRank,
                r.countryRank,
                (SELECT COUNT(*) FROM RanksSingle r WHERE r.countryId = (SELECT countryId FROM User) AND r.eventId = e.id) AS maxCountryRank
            FROM Events e
            LEFT JOIN RanksSingle r ON e.id = r.eventId AND r.personId = :wcaId
            WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
            ";
            $averageQuery = "
            WITH User AS (
                SELECT p.countryId, c.continentId
                FROM Persons p
                JOIN Countries c ON c.id = p.countryId AND p.id = :wcaId
            )
            SELECT
                e.id AS eventId,
                r.worldRank,
                (SELECT COUNT(*) FROM RanksAverage r WHERE r.eventId = e.id) AS maxWorldRank,
                r.continentRank,
                (SELECT COUNT(*) FROM RanksAverage r WHERE r.continentId = (SELECT continentId FROM User) AND r.eventId = e.id) AS maxContinentRank,
                r.countryRank,
                (SELECT COUNT(*) FROM RanksAverage r WHERE r.countryId = (SELECT countryId FROM User) AND r.eventId = e.id) AS maxCountryRank
            FROM Events e
            LEFT JOIN RanksAverage r ON e.id = r.eventId AND r.personId = :wcaId
            WHERE e.id <> '333ft' AND e.id <> '333mbf' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
            ";

            $query = $type === "Single" ? $singleQuery : $averageQuery;
            $stmt = $db->prepare($query);
            $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
            $result = $stmt->execute();

            if (!$result) {
                die("Error executing the query.");
            }
            echo "<table style='margin-top: 1rem;'>";
            echo "<tr>
                <th>Event</th>
                <th>World Rank</th>
                <th>Continent Rank</th>
                <th>Country Rank</th>
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

            $db->close();

            echo "<tr>";
            echo "<td>Sum</td>";
            echo "<td>" . $worldSum . "</td>";
            echo "<td>" . $continentSum . "</td>";
            echo "<td>" . $countrySum . "</td>";
            echo "</tr>";

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
            
            echo "</table>";
            ?>
        <?php endif; ?>
        <div class="col" style="width: 100%; max-width: 600px; gap: 16px;">
            <h2>What is Sum of Ranks (SoR)?</h2>
            <p style="margin-top: 0.8rem;">
                Sum of Ranks is one way of measuring a cuber's overall
                performance rather than measuring just one event. To compute a
                Sum of Ranks, we simply add up the cuber's rank in each event.
                It is possible to compute a cuber's Sum of Ranks at a global
                level, continental level, and national level.
            </p>
            <h2>What does my Sum of Ranks mean?</h2>
            <p style="margin-top: 0.8rem;">
                Lower scores are better. For example, since the world record
                holder is ranked 1st in the world, their rank for that event is
                1.
            </p>
            <h2>Alternatives to Sum of Ranks</h2>
            <p style="margin-top: 0.8rem;">
                As mentioned before, Sum of Ranks is just one way to measure the
                all-round abilities of a cuber. If you want to know your Kinch
                Score, you can visit our <a
                    class="link"
                    href="/calculate-kinch">Kinch Calculator</a
                > as well.
            </p>
            <p style="margin-top: 0.8rem;">
                Different aggregation methods will have different tradeoffs, and
                some will debate which methods are better. That's why we provide
                multiple ways to measure your all-round abilities.
            </p>
        </div>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<style>
    h2 {
        margin-top: 32px;
    }

    h2, p {
        max-width: 600px;
    }
</style>

</html>
