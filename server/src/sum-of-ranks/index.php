<?php
$wcaId = $_GET["wcaId"] ?? null;
$region = $_GET["region"] ?? "World";
$page = $_GET["page"] ?? 1;
$type = $_GET["type"] ?? "Single";
$perPage = 20;

error_reporting(E_ALL);
ini_set("display_errors", 1);
$db = new SQLite3("/wca.db");

if (!$db) {
    die("Error connecting to the database: " . $db->lastErrorMsg());
}

$name = "";
if ($wcaId) {
    $stmt = $db->prepare("SELECT name FROM Persons WHERE id = :wcaId");
    $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
    $rows = $stmt->execute();
    $row = $rows->fetchArray(SQLITE3_ASSOC);
    $name = $row["name"];
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Sum of ranks leaderboard and calculator based on World Cube Association data">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title><?php echo $name ? "$name: Sum of Ranks" : "Sum of Ranks"; ?></title>
</head>

<script>
function setUrlParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams.toString();
}

function goToPage(page, pages) {
    page = Math.max(1, page);
    page = Math.min(pages, page);
    setUrlParam('page', page);
}
</script>

<body>
<?php include_once "../php/menu.php"; ?>

<main>
    <h1 style="text-align: center; margin-bottom: 8px;">
        <?php echo $name ? "$name: Sum of Ranks" : "Sum of Ranks"; ?>
    </h1>
    <?php include "../php/wca_attribution.php"; ?>

    <?php if ($wcaId) { ?>
        <div style="margin-top: 2rem; display: flex; flex-direction: column; align-items: center;">
            <a class="link" href="/sum-of-ranks">View leaderboard</a>
            <div style="margin-top: 1rem;"></div>
            <?php
                include "../php/search/element.php";
                renderSearchElement("/sum-of-ranks", $wcaId);
            ?>
            <select
                id="selectType"
                style="margin-top: 1rem; width: 100%; max-width: 300px;"
            >
                <option value="Single" <?php echo $type === "Single" ? "selected" : "" ?>>Single</option>
                <option value="Average" <?php echo $type === "Average" ? "selected" : "" ?>>Average</option>
            </select>
            <script>
                selectType.onchange = event => setUrlParam("type", event.target.value);
            </script>
        </div>
        <?php

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
    } else { ?>
        <div style="margin-top: 2rem; display: flex; flex-direction: column; align-items: center;">
            <?php
                include "../php/search/element.php";
                renderSearchElement("/sum-of-ranks", $wcaId);
            ?>
            <div style="margin-top: 1rem; width: 100%; max-width: 300px;"><?php include "../php/select_region.php" ?></div>
            <select
                id="selectType"
                style="margin-top: 1rem; width: 100%; max-width: 300px;"
            >
                <option value="Single" <?php echo $type === "Single" ? "selected" : "" ?>>Single</option>
                <option value="Average" <?php echo $type === "Average" ? "selected" : "" ?>>Average</option>
            </select>
            <script>
                selectRegion.onchange = event => setUrlParam("region", event.target.value);
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

        function buildPagesStatement($db, $region, $perPage) {
            $worldQuery = "
            SELECT CEIL(COUNT(*) / $perPage) as pages
            FROM Persons;
            ";
            $continentQuery = "
            SELECT CEIL(COUNT(*) / $perPage) as pages
            FROM Persons p
            JOIN Countries c ON c.id = p.countryId AND c.continentId = :regionId;
            ";
            $countryQuery = "
            SELECT CEIL(COUNT(*) / $perPage) as pages
            FROM Persons
            WHERE countryId = :regionId;
            ";

            $strings = explode("-", $region);
            if ($strings[0] === "continent") {
                $stmt = $db->prepare($continentQuery);
                // Continents start with underscore in the database
                $stmt->bindValue(":regionId", "_" . $strings[1], SQLITE3_TEXT);
                return $stmt;
            } else if ($strings[0] === "country") {
                $stmt = $db->prepare($countryQuery);
                $stmt->bindValue(":regionId", $strings[1], SQLITE3_TEXT);
                return $stmt;
            }
            
            $stmt = $db->prepare($worldQuery);
            return $stmt;
        }

        $stmt = buildPagesStatement($db, $region, $perPage);
        $rows = $stmt->execute();
        $row = $rows->fetchArray(SQLITE3_ASSOC);
        $pages = $row["pages"];

        $pageStart = max(1, $page - 2);
        $pageEnd = min($pages, $page + 2);
        $previousPage = max(1, $page - 1);
        $nextPage = min($pages, $page + 1);
        echo "<div class='page-selector-box' style='margin-top: 1rem;'>";
        echo "<button class='page-button' onclick='goToPage($previousPage, $pages)'>◀</button>";
        for ($i = $pageStart; $i <= $pageEnd; $i++) {
            $class = ($i == $page) ? 'page-button page-button-active' : 'page-button';
            echo "<button class='$class' onclick='goToPage($i, $pages)'>$i</button>";
        }
        echo "<button class='page-button' onclick='goToPage($nextPage, $pages)'>▶</button>";
        echo "<input type='number' placeholder='Go to page' style='width: 150px; margin-left: 8px;' onchange='goToPage(this.value, $pages)' />";
        echo "</div>";

        function buildRanksStatement($db, $type, $region, $page, $perPage) {
            $worldQuery = "
            SELECT name, id, worldSor$type as sum
            FROM Persons
            ORDER BY worldSor$type
            LIMIT $perPage OFFSET :offset;
            ";
            $continentQuery = "
            SELECT p.name, p.id, p.continentSor$type as sum
            FROM Persons p
            JOIN Countries c ON c.id = p.countryId AND c.continentId = :regionId
            ORDER BY continentSor$type
            LIMIT $perPage OFFSET :offset;
            ";
            $countryQuery = "
            SELECT name, id, countrySor$type as sum
            FROM Persons
            WHERE countryId = :regionId
            ORDER BY countrySor$type
            LIMIT $perPage OFFSET :offset;
            ";

            $strings = explode("-", $region);
            if ($strings[0] === "continent") {
                $stmt = $db->prepare($continentQuery);
                // Continents start with underscore in the database
                $stmt->bindValue(":regionId", "_" . $strings[1], SQLITE3_TEXT);
                $stmt->bindValue(":offset", ($page-1)*$perPage, SQLITE3_TEXT);
                return $stmt;
            } else if ($strings[0] === "country") {
                $stmt = $db->prepare($countryQuery);
                $stmt->bindValue(":regionId", $strings[1], SQLITE3_TEXT);
                $stmt->bindValue(":offset", ($page-1)*$perPage, SQLITE3_TEXT);
                return $stmt;
            }
            
            $stmt = $db->prepare($worldQuery);
            $stmt->bindValue(":offset", ($page-1)*$perPage, SQLITE3_TEXT);
            return $stmt;
        }

        $stmt = buildRanksStatement($db, $type, $region, $page, $perPage);
        $rows = $stmt->execute();
        
        if (!$rows) {
            die("Error executing the query.");
        }
        
        echo "<div class='table-wrapper' style='margin: 1rem auto;'><table>";
        echo "<tr>
            <th>#</th>
            <th>Name</th>
            <th>Sum</th>
        </tr>";

        $index = ($page - 1) * $perPage + 1;
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            $name = $row["name"];
            $id = $row["id"];
            $sum = round($row["sum"], 2);
            echo "<tr>
                <td>$index</td>
                <td><a href='/sum-of-ranks?wcaId=$id' class='link'>$name</a></td>
                <td>$sum</td>
            </tr>";

            $index++;
        }

        $db->close();

        echo "</table></div>";

    } // end if-else
    ?>
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
            If you want to know your Kinch score, you can visit our <a class="link" href="/kinch-ranks">Kinch Ranks</a> page as well.
        </p>
        <p>
            Different methods will have different tradeoffs, and not everyone agrees on which is better.
            That's why we provide multiple ways to measure your all-round abilities.
        </p>
    </div>
    <div style="margin-top: 96px;"></div>
</main>
</body>

<style>
    .page-selector-box {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 12px 0;
    }

    .page-button {
        padding: 12px 8px;
        background: transparent;
    }

    .page-button:hover {
        background: var(--gray-900);
    }

    .page-button-active {
        background: var(--gray-900);
        outline: solid 1px var(--gray-600);
    }

    .table-wrapper {
        max-width: 100%;
        width: fit-content;
        overflow-x: auto;
    }

    table tr:nth-child(even) {
        background: var(--gray-900);
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
