<?php
$wcaId = $_GET["wcaId"] ?? null;
$region = $_GET["region"] ?? "World";
$page = $_GET["page"] ?? 1;
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
    <meta name="description" content="Kinch Ranks leaderboard and calculator based on World Cube Association data">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title><?php echo $name ? "$name: Kinch Rank" : "Kinch Ranks"; ?></title>
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
</style>

<body>
<?php include_once "../php/menu.php"; ?>

<main>
    <h1 style="text-align: center; margin-bottom: 8px;">
        <?php echo $name ? "$name: Kinch Rank" : "Kinch Ranks"; ?>
    </h1>
    <?php include "../php/wca_attribution.php" ?>

    <?php if ($wcaId) { ?>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="margin-top: 2rem;"></div>
            <a href="/kinch-ranks" class="link">View leaderboard</a>
            <div style="margin-top: 1rem;"></div>
            <?php
            include "../php/search/element.php";
            renderSearchElement("/kinch-ranks", $wcaId);
            ?>
            <div style="margin-top: 1rem;"></div>
            <div style="width: 100%; max-width: 300px;"><?php include "../php/select_region.php" ?></div>
            <script>
                selectRegion.onchange = event => setUrlParam('region', event.target.value);
            </script>
        </div>
        <div style="margin-top: 1rem;"></div>
        <?php

        function buildKinchStatement($db, $wcaId, $region) {
            // The GROUP BY ensures we only get one row per event.
            // Sometimes people are tied for first place.
            $worldQuery = "
            SELECT
                e.id as eventId,
                rs1.best AS single,
                ra1.best AS average,
                rs2.best AS bestSingle,
                ra2.best AS bestAverage
            FROM Events e
            LEFT JOIN RanksSingle rs1 ON e.id = rs1.eventId AND rs1.personId = :wcaId
            LEFT JOIN RanksAverage ra1 ON e.id = ra1.eventId AND ra1.personId = :wcaId
            LEFT JOIN RanksSingle rs2 ON e.id = rs2.eventId AND rs2.worldRank = 1
            LEFT JOIN RanksAverage ra2 ON e.id = ra2.eventId AND ra2.worldRank = 1
            WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
            GROUP BY e.id;
            ";
            $continentQuery = "
            SELECT
                e.id as eventId,
                rs1.best AS single,
                ra1.best AS average,
                rs2.best AS bestSingle,
                ra2.best AS bestAverage
            FROM Events e
            LEFT JOIN RanksSingle rs1 ON e.id = rs1.eventId AND rs1.personId = :wcaId
            LEFT JOIN RanksAverage ra1 ON e.id = ra1.eventId AND ra1.personId = :wcaId
            LEFT JOIN RanksSingle rs2
                ON e.id = rs2.eventId
                    AND rs2.continentId = :regionId
                    AND rs2.continentRank = 1
            LEFT JOIN RanksAverage ra2
                ON e.id = ra2.eventId
                    AND ra2.continentId = :regionId
                    AND ra2.continentRank = 1
            WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
            GROUP BY e.id;
            ";
            $countryQuery = "
            SELECT
                e.id as eventId,
                rs1.best AS single,
                ra1.best AS average,
                rs2.best AS bestSingle,
                ra2.best AS bestAverage
            FROM Events e
            LEFT JOIN RanksSingle rs1 ON e.id = rs1.eventId AND rs1.personId = :wcaId
            LEFT JOIN RanksAverage ra1 ON e.id = ra1.eventId AND ra1.personId = :wcaId
            LEFT JOIN RanksSingle rs2
                ON e.id = rs2.eventId
                    AND rs2.countryId = :regionId
                    AND rs2.countryRank = 1
            LEFT JOIN RanksAverage ra2
                ON e.id = ra2.eventId
                    AND ra2.countryId = :regionId
                    AND ra2.countryRank = 1
            WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
            GROUP BY e.id;
            ";

            $strings = explode("-", $region);
            if ($strings[0] === "continent") {
                $stmt = $db->prepare($continentQuery);
                $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
                // Continents start with underscore in the database
                $stmt->bindValue(":regionId", "_" . $strings[1], SQLITE3_TEXT);
                return $stmt;
            } else if ($strings[0] === "country") {
                $stmt = $db->prepare($countryQuery);
                $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
                $stmt->bindValue(":regionId", $strings[1], SQLITE3_TEXT);
                return $stmt;
            }
            
            $stmt = $db->prepare($worldQuery);
            $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
            return $stmt;
        }
        
        // Fetch official results from the database
        $stmt = buildKinchStatement($db, $wcaId, $region);
        $rows = $stmt->execute();

        $results = array();
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            array_push($results, $row);
        }

        echo "<div class='table-wrapper' style='margin: 1rem auto;'><table>";
        echo "<tr>
            <th>Event</th>
            <th>Score</th>
            <th>Result</th>
        </tr>";

        include "../php/kinch.php";
        include "../php/event_utils.php";
        $scores = calcKinch($results);
        $averageScore = calcAverageKinchScore($scores);

        function buildRankStatement($db, $averageScore, $wcaId, $region) {
            $worldQuery = "
            SELECT COUNT() AS count FROM Persons p1
            JOIN Persons p2 ON p2.id = :wcaId AND p1.worldKinch > p2.worldKinch;";
            $continentQuery = "
            SELECT COUNT() AS count FROM Persons p1
            JOIN Persons p2 ON p2.id = :wcaId AND p1.continentId = p2.continentId AND p1.continentKinch > p2.continentKinch;";
            $countryQuery = "
            SELECT COUNT() AS count FROM Persons p1
            JOIN Persons p2 ON p2.id = :wcaId AND p1.countryId = p2.countryID AND p1.countryKinch > p2.countryKinch;";

            $strings = explode("-", $region);
            if ($strings[0] === "continent") {
                $stmt = $db->prepare($continentQuery);
                // Continents start with underscore in the database
                $stmt->bindValue(":regionId", "_" . $strings[1], SQLITE3_TEXT);
                $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
                return $stmt;
            } else if ($strings[0] === "country") {
                $stmt = $db->prepare($countryQuery);
                $stmt->bindValue(":regionId", $strings[1], SQLITE3_TEXT);
                $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
                return $stmt;
            }
            
            $stmt = $db->prepare($worldQuery);
            $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
            return $stmt;
        }

        $stmt = buildRankStatement($db, $averageScore, $wcaId, $region);
        $rows = $stmt->execute();
        $row = $rows->fetchArray(SQLITE3_ASSOC);
        $rank = $row["count"] + 1;

        $db->close();

        function renderCell($percent) {
            // This brings h closer to 100 to make the color more green
            $h = 58.5 * log10(0.5 * $percent + 1);
            $textColor = "hsl(" . $h . "deg 100% 50%)";
            $percent = round($percent, 2);
            return "<td style='color: " . $textColor . ";'>" . $percent . "</td>";
        }

        echo "<tr>
            <td>Rank</td>
            <td>$rank</td>
            <td></td>
        </tr>";

        echo "<tr>";
        echo "<td>Overall</td>";
        echo renderCell($averageScore);
        echo "<td></td>";
        echo "</tr>";

        foreach ($scores as $row) {
            $eventName = $eventIdToName[$row["eventId"]];
            echo "<tr>";
            echo "<td>$eventName</td>";
            echo renderCell($row["score"]);
            echo "<td>$row[result]</td>";
            echo "</tr>";
        }

        echo "</table></div>";
    } else { ?>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-top: 2rem;">
            <?php
            include "../php/search/element.php";
            renderSearchElement("/kinch-ranks", $wcaId);
            ?>
            <div style="width: 100%; max-width: 300px;"><?php include "../php/select_region.php" ?></div>
            <script>
                selectRegion.onchange = event => setUrlParam('region', event.target.value);
            </script>
        </div>
        <div style="margin-top: 1rem;"></div>
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
                    <a href='/kinch-ranks?wcaId=$id&region=$region' class='link'>$name</a>
                </td>
                <td>$score</td>
            </tr>";

            $index++;
        }

        $db->close();

        echo "</table></div>";
        ?>
    <?php } ?>

    <div class="info-div">
        <h2>What is Kinch Ranks?</h2>
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
        <h2>How did Kinch Ranks start?</h2>
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
            As mentioned before, Kinch is just one way to measure the all-round abilities of a cuber. If you want to know your Sum of Ranks, you can visit our <a class="link" href="/sum-of-ranks">Sum of Ranks</a> page as well.
        </p>
        <p>
            Different aggregation methods will have different tradeoffs, and some will debate which methods are better. That's why we provide multiple ways to measure your all-round abilities.
        </p>
    </div>
    <div style="margin-top: 96px;"></div>
</main>

</body>

<?php include "../php/gtag.php" ?>

</html>
