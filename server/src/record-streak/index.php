<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Tool for speedcubers to calculate their personal record streak at WCA competitions">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Record Streak Calculator for Cubing</title>
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
    return `/record-streak?wcaId=${wcaId}`;
}
</script>

<body style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../php/menu/menuIcon.php" ?>
        <?php include_once "../php/menu/menu.php" ?>
    </nav>
    <main class="col" style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="margin-top: 0.25rem;">Record Streak Calculator</h1>
        <?php
            $wcaId = $_GET["wcaId"] ?? null;
        ?>
        <div style="margin-top: 24px; width: 100%; max-width: 300px;">
            <?php include "../php/search/element.php" ?>
        </div>
        <?php if ($wcaId): ?>
            <div style="margin-top: 3rem;"></div>
            <?php include "../php/wca_attribution.php" ?>
            <?php
            error_reporting(E_ALL);
            ini_set("display_errors", 1);
            $db = new SQLite3("/wca.db");

            if (!$db) {
                die("Error connecting to the database: " . $db->lastErrorMsg());
            }

            function buildStatement($db, $wcaId) {
                $query = "
                SELECT r.competitionId, r.eventId, r.best, r.average
                FROM Results r
                JOIN Competitions c ON r.competitionId = c.id
                WHERE personId = :wcaId;
                ";
                
                $stmt = $db->prepare($query);
                $stmt->bindValue(":wcaId", $wcaId, SQLITE3_TEXT);
                return $stmt;
            }

            $stmt = buildStatement($db, $wcaId);
            $rows = $stmt->execute();
            
            if (!$rows) {
                die("Error executing the query.");
            }

            $bestSingles = array();
            $bestAverages = array();
            $currentStreak = array();
            $longestStreak = array();

            $competitions = array();
            
            while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
                $competitionId = $row["competitionId"];
                $eventId = $row["eventId"];
                $best = $row["best"];
                $average = $row["average"];

                // Group by competitionId
                if (!array_key_exists($competitionId, $competitions)) {
                    $competitions[$competitionId] = array();
                }
                $competitions[$competitionId][] = array(
                    "eventId" => $eventId,
                    "best" => $best,
                    "average" => $average
                );
            }

            $db->close();

            function is_record($eventId, $result, $records) {
                if ($result == 0 || $result == -1) {
                    return false;
                }
                
                if (!array_key_exists($eventId, $records)) {
                    return true;
                }

                return $result <= $records[$eventId];
            }

            // Iterate over competitions
            foreach ($competitions as $competitionId => $results) {
                $record_attained = false;

                // Iterate over results
                foreach ($results as $result) {
                    $eventId = $result["eventId"];
                    $best = $result["best"];
                    $average = $result["average"];


                    if (is_record($eventId, $best, $bestSingles)) {
                        $bestSingles[$eventId] = $best;
                        $record_attained = true;
                    }

                    if (is_record($eventId, $average, $bestAverages)) {
                        $bestAverages[$eventId] = $average;
                        $record_attained = true;
                    }
                }

                if ($record_attained) {
                    $currentStreak[] = $competitionId;
                    if (count($currentStreak) > count($longestStreak)) {
                        $longestStreak = $currentStreak;
                    }
                } else {
                    $currentStreak = array();
                }
            }

            echo "<div style='display: flex; flex-wrap: wrap; justify-content: center; margin-top: 32px; gap: 32px;'>
            <div class='card'>";
                echo "<h2>Current streak - " . count($currentStreak) . "</h2>";
                echo "<ul>";
                for ($i = 0; $i < count($currentStreak); $i++) {
                    echo "<li>" . $currentStreak[$i] . "</li>";
                }
                echo "</ul>";
            echo "</div>";

            echo "<div class='card'>";
                echo "<h2>Longest streak - " . count($longestStreak) . "</h2>";
                echo "<ul>";
                for ($i = 0; $i < count($longestStreak); $i++) {
                    echo "<li>" . $longestStreak[$i] . "</li>";
                }
                echo "</ul>";
            echo "</div>
            </div>";

            ?>
        <?php endif; ?>
        <div class="info-div">
            <h2>What is this?</h2>
            <p>
                This tool calculates personal record streaks at WCA competitions.
                Just search for a WCA competitor, and we will calculate the record streak.
            </p>
            <p>
                We calculate two metrics. In some cases, they may be the same!
            </p>
            <ul>
                <li>Current streak</li>
                <li>Longest streak</li>
            </ul>
            <h2>How does it work?</h2>
            <p>
                First we fetch all the competitions that a cubers has participated in.
                Then we go through each competition and check: Have they set or tied a personal record in at least one event?
                If so, their streak continues.
            </p>
        </div>
        <div style="margin-top: 64px;">
            <?php include "../php/cool_calculators.php" ?>
        </div>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<style>
    .card {
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 2px 12px -2px var(--gray-500);
        flex-grow: 1;
    }

    .card li {
        margin-top: 8px;
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
