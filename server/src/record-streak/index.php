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
        <form
            action="/record-streak"
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
            <button
                type="submit"
                style="grid-column: 1 / 3; margin-top: 0.5rem;"
            >
                Calculate
            </button>
        </form>
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

                return $result < $records[$eventId];
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
</style>

<?php include "../php/gtag.php" ?>

</html>
