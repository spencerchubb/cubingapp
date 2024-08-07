<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Sum of ranks leaderboard based on World Cube Association data">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Sum of Ranks Leaderboard</title>
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

function searchResultHref(wcaId) {
    return `/calculate-sum-of-ranks?wcaId=${wcaId}`;
}

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

function onChangeRegion(event) {
    setUrlParam('region', event.target.value);
}

function onChangeType(event) {
    setUrlParam("type", event.target.value);
}
</script>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main>
        <h1 style="text-align: center;">Sum of Ranks Leaderboard</h1>
        <?php
            $region = $_GET["region"] ?? "World";
            $page = $_GET["page"] ?? 1;
            $type = $_GET["type"] ?? "Single";

            $perPage = 20;
        ?>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-top: 1rem;">
            <?php include "../php/wca_attribution.php" ?>
            <?php include "../php/search/element.php" ?>
            <div style="width: 100%; max-width: 300px;"><?php include "../php/select_region.php" ?></div>
            <select
                id="select-type"
                style="width: 100%; max-width: 300px;"
            >
                <option value="Single" <?php echo $type === "Single" ? "selected" : "" ?>>Single</option>
                <option value="Average" <?php echo $type === "Average" ? "selected" : "" ?>>Average</option>
            </select>
            <script>
                q("#select-region").addEventListener("change", onChangeRegion);
                q("#select-type").addEventListener("change", onChangeType);
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
        echo "<div class='page-selector-box' style='margin-top: 2rem;'>";
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
            // style='min-width: 0; text-wrap: nowrap; text-overflow: ellipsis;'
            echo "<tr>
                <td>$index</td>
                <td><a href='/calculate-sum-of-ranks?wcaId=$id' class='link'>$name</a></td>
                <td>$sum</td>
            </tr>";

            $index++;
        }

        $db->close();

        echo "</table></div>";
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
