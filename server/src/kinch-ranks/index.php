<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Kinch ranks leaderboard based on World Cube Association data">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Kinch Ranks Leaderboard</title>
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
    return `/calculate-kinch?wcaId=${wcaId}`;
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
</script>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main>
        <h1 style="text-align: center;">Kinch Ranks Leaderboard</h1>
        <?php
            $region = $_GET["region"] ?? "World";
            $page = $_GET["page"] ?? 1;

            $perPage = 20;
        ?>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-top: 1rem;">
            <?php include "../php/wca_attribution.php" ?>
            <?php include "../php/search/element.php" ?>
            <div style="width: 100%; max-width: 300px;"><?php include "../php/select_region.php" ?></div>
            <script>q("#select-region").addEventListener("change", onChangeRegion)</script>
        </div>
        <div style="margin-top: 2rem;"></div>
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
            FROM Persons;";
            $continentQuery = "
            SELECT CEIL(COUNT(*) / $perPage) as pages
            FROM Persons p
            JOIN Countries c ON c.id = p.countryId AND c.continentId = :regionId;";
            $countryQuery = "
            SELECT CEIL(COUNT(*) / $perPage) as pages
            FROM Persons
            WHERE countryId = :regionId;";

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
        echo "<div class='page-selector-box'>";
        echo "<button class='page-button' onclick='goToPage($previousPage, $pages)'>◀</button>";
        for ($i = $pageStart; $i <= $pageEnd; $i++) {
            $class = ($i == $page) ? 'page-button page-button-active' : 'page-button';
            echo "<button class='$class' onclick='goToPage($i, $pages)'>$i</button>";
        }
        echo "<button class='page-button' onclick='goToPage($nextPage, $pages)'>▶</button>";
        echo "<input type='number' placeholder='Go to page' style='width: 150px; margin-left: 8px;' onchange='goToPage(this.value, $pages)' />";
        echo "</div>";

        function buildKinchStatement($db, $region, $page, $perPage) {
            $worldQuery = "
            SELECT name, id, worldKinch as score
            FROM Persons
            ORDER BY worldKinch DESC
            LIMIT $perPage OFFSET :offset;";
            $continentQuery = "
            SELECT p.name, p.id, p.continentKinch as score
            FROM Persons p
            JOIN Countries c ON c.id = p.countryId AND c.continentId = :regionId
            ORDER BY continentKinch DESC
            LIMIT $perPage OFFSET :offset;";
            $countryQuery = "
            SELECT name, id, countryKinch as score
            FROM Persons
            WHERE countryId = :regionId
            ORDER BY countryKinch DESC
            LIMIT $perPage OFFSET :offset;";

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

        $stmt = buildKinchStatement($db, $region, $page, $perPage);
        $rows = $stmt->execute();
        
        echo "<div class='table-wrapper' style='margin: 1rem auto;'><table>";
        echo "<tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
        </tr>";

        $index = ($page - 1) * $perPage + 1;
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            $name = $row["name"];
            $id = $row["id"];
            $score = round($row["score"], 2);
            echo "<tr>
                <td>$index</td>
                <td>
                    <a href='/calculate-kinch?wcaId=$id&region=$region' class='link'>$name</a>
                </td>
                <td>$score</td>
            </tr>";

            $index++;
        }

        $db->close();

        echo "</table></div>";
        ?>
        <div class="info-div">
            <h2>What is Kinch?</h2>
            <p>
                The Kinch system is one way of measuring a cuber's overall performance rather than measuring just one event.
                To compute a Kinch Score, we compute the average of each event ratio, where an event ratio is your personal record divided by the world record.
            </p>
            <p>
                The Multi-blind score is calculated by summing the points and the proportion of the hour left. That means the time is also incorporated into the Kinch Score.
            </p>
            <p>
                There is one more special rule about calculating the Kinch Score. We take your better score between:
            </p>
            <ul>
                <li>FMC single and average</li>
                <li>3BLD single and average</li>
                <li>4BLD single and average</li>
                <li>5BLD single and average</li>
            </ul>
            <h2>What does my Kinch Score mean?</h2>
            <p>
                Higher scores are better. The maximum you can get is 100, assuming you hold the world record in every event.
            </p>
            <p>
                For example, the best Kinch Score in the world (at the time of writing) is Stanley Chapel with a score of 74.
            </p>
            <h2>What is the origin of Kinch?</h2>
            <p>
                It was introduced on speedsolving.com by kinch2002 in
                <a href="https://www.speedsolving.com/threads/all-round-rankings-kinchranks.53353/" class="link">this post</a>
                😊
            </p>
            <h2>Why use Kinch?</h2>
            <p>
                Kinch and Sum of Ranks are both ways to measure the all-round performance of a cuber, and each has pros and cons.
                Here are a few reasons why kinch2002 devised the system.
            </p>
            <ul>
                <li>Kinch combines the singles and averages</li>
                <li>You are not penalized as heavily for not having competed in an event</li>
                <li>Avoids event biases - For example, you have to be <b>really</b> good at 3x3 to have a good Sum of Ranks</li>
                <li>In Sum of Ranks, there is no incentive for the world record holder to improve that event</li>
            </ul>
            <h2>Alternatives to Kinch</h2>
            <p>
                As mentioned before, Kinch is just one way to measure the all-round abilities of a cuber. If you want to know your Sum of Ranks, you can visit our <a class="link" href="/calculate-sum-of-ranks">Sum of Ranks Calculator</a> as well.
            </p>
            <p>
                Different aggregation methods will have different tradeoffs, and some will debate which methods are better. That's why we provide multiple ways to measure your all-round abilities.
            </p>
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

    tr:nth-child(even) {
        background: var(--gray-900);
    }
</style>

<?php include "../php/gtag.php" ?>

</html>
