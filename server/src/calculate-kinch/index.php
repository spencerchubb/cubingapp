<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Best tool for speedcubers to calculate their Kinch score.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Calculate Kinch</title>
</head>

<script>
function setUrlParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams.toString();
}

function onChangeRegion(event) {
    setUrlParam('region', event.target.value);
}
</script>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main class="col">
        <?php
            $wcaId = $_GET["wcaId"] ?? null;
            $region = $_GET["region"] ?? "World";
        ?>
        <h1 style="text-align: center; width: 100%;">Calculate Kinch</h1>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="margin-top: 1rem;"></div>
            <?php include "../php/wca_attribution.php" ?>
            <div style="margin-top: 1rem;"></div>
            <a href="/kinch-ranks" class="link">Go to Kinch leaderboard</a>
            <div style="margin-top: 1.5rem;"></div>
            <?php
            include "../php/search/element.php";
            renderSearchElement("/calculate-kinch", $wcaId);
            ?>
            <div style="margin-top: 1.5rem;"></div>
            <div style="width: 100%; max-width: 300px;"><?php include "../php/select_region.php" ?></div>
            <script>document.querySelector("#select-region").addEventListener("change", onChangeRegion)</script>
        </div>
        <?php if ($wcaId): ?>
            <div style="margin-top: 1rem;"></div>
            <?php
            error_reporting(E_ALL);
            ini_set("display_errors", 1);
            $db = new SQLite3("/wca.db");

            if (!$db) {
                die("Error connecting to the database: " . $db->lastErrorMsg());
            }

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

            $stmt = buildKinchStatement($db, $wcaId, $region);
            $rows = $stmt->execute();
            
            $results = array();
            while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
                array_push($results, $row);
            }

            echo "<table style='margin-top: 1rem;'>";
            echo "<tr>
                <th>Event</th>
                <th>Score</th>
            </tr>";

            include "../php/kinch.php";
            $scores = calcKinchScores($results);
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
                $rounded = round($percent, 2);
                return "<td style='color: " . $textColor . ";'>" . $rounded . "</td>";
            }

            echo "<tr>
                <td>Rank</td>
                <td>$rank</td>
            </tr>";

            echo "<tr>";
            echo "<td>Overall</td>";
            echo renderCell($averageScore);
            echo "</tr>";

            foreach ($scores as $score) {
                echo "<tr>";
                echo "<td>" . $score[0] . "</td>";
                echo renderCell($score[1]);
                echo "</tr>";
            }

            echo "</table>";
            ?>
        <?php endif; ?>
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
        <div style="margin-top: 64px;">
            <?php include "../php/cool_calculators.php" ?>
        </div>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<style>
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
