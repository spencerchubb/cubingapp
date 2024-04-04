<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="See how you compare against cubers with your name">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Name Ranks</title>
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

function goToPage(page, pages) {
    page = Math.max(1, page);
    page = Math.min(pages, page);
    setUrlParam('page', page);
}
</script>

<body style="display: flex; flex-direction: column; width: 100%; height: 100%;">
    <nav>
        <?php include_once "../php/menu/menuIcon.php" ?>
        <?php include_once "../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; align-items: center; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">Name Ranks</h1>
        <p style="text-align: center; margin-top: 16px;">See how you compare against cubers with your name</p>
        <?php
            include_once "../php/option.php";

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

            $name = $_GET["name"];
            $event = $_GET["event"] ?? "333";
            $type = $_GET["type"] ?? "Single";
            $page = $_GET["page"] ?? 1;
            $perPage = 20;
        ?>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-top: 2rem;">
            <input id="name" type="string" placeholder="Name" value="<?php echo $name ?>" style="width: 100%; max-width: 300px;" />
            <select id="event" style="width: 100%; max-width: 300px;">
                <?php
                    foreach ($eventIdToName as $eventId => $eventName) {
                        echo createOption($eventId, $eventName, $event);
                    }
                ?>
            </select>
            <select id="type" style="width: 100%; max-width: 300px;">
                <?php
                    foreach (["Single", "Average"] as $t) {
                        echo createOption($t, $t, $type);
                    }
                ?>
            </select>
            <script>
                q("#name").addEventListener("change", (event) => setUrlParam("name", event.target.value));
                q("#event").addEventListener("change", (event) => setUrlParam("event", event.target.value));
                q("#type").addEventListener("change", (event) => setUrlParam("type", event.target.value));
            </script>
        </div>
        <div style="margin-top: 24px;"></div>
        <?php
        if (!$name) {
            return;
        }

        include_once "../php/wca_attribution.php";

        error_reporting(E_ALL);
        ini_set("display_errors", 1);
        $db = new SQLite3("/wca.db");

        if (!$db) {
            die("Error connecting to the database: " . $db->lastErrorMsg());
        }

        $query = "select personId, name, best
            from Ranks$type
            where name like :name and eventId = :event
            limit 1000;";
        $stmt = $db->prepare($query);
        $stmt->bindValue(":name", "%$name%", SQLITE3_TEXT);
        $stmt->bindValue(":event", $event, SQLITE3_TEXT);

        $rows = $stmt->execute();

        echo "<div class='table-wrapper' style='margin: 1rem auto;'><table>";
        echo "<tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
        </tr>";

        function timeToStr($centiseconds) {
            $h = 360000;
            $m = 6000;
            $hours = floor($centiseconds / $h);
            $minutes = floor(($centiseconds % $h) / $m);
            $seconds = floor((($centiseconds % $h) % $m) / 100);
            $milliseconds = $centiseconds % 100;
        
            // 02d means 2 digits with leading zeros if necessary.
            if ($hours) {
                return sprintf('%d:%02d:%02d.%02d', $hours, $minutes, $seconds, $milliseconds);
            } else if ($minutes) {
                return sprintf('%d:%02d.%02d', $minutes, $seconds, $milliseconds);
            }
            return sprintf('%d.%02d', $seconds, $milliseconds);
        }

        $fmcScoreToStr = [
            "Single" => function ($score) {
                return $score;
            },
            "Average" => function ($score) {
                return $score / 100;
            },
        ][$type];

        function mbldScoreToStr($value) {
            $seconds = floor($value / 100) % 1e5;
            $centiseconds = $seconds === 99999 ? null : $seconds * 100;
            
            $points = 99 - (floor($value / 1e7) % 100);
            $missed = $value % 100;
            $solved = $points + $missed;
            $attempted = $solved + $missed;
            return sprintf('%d/%d %s', $solved, $attempted, timeToStr($centiseconds));
        }

        $scoreToStrFunction = [
            "333" => "timeToStr",
            "222" => "timeToStr",
            "444" => "timeToStr",
            "555" => "timeToStr",
            "666" => "timeToStr",
            "777" => "timeToStr",
            "333bf" => "timeToStr",
            "333fm" => $fmcScoreToStr,
            "333oh" => "timeToStr",
            "clock" => "timeToStr",
            "minx" => "timeToStr",
            "pyram" => "timeToStr",
            "skewb" => "timeToStr",
            "sq1" => "timeToStr",
            "444bf" => "timeToStr",
            "555bf" => "timeToStr",
            "333mbf" => "mbldScoreToStr",
        ][$event];

        $i = 1;
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            $personId = $row["personId"];
            $name = $row["name"];
            $best = $scoreToStrFunction($row["best"]);

            echo "<tr>
                <td>$i</td>
                <td>
                    <a class='link' href='https://worldcubeassociation.org/persons/$personId'>$name</a>
                </td>
                <td>$best</td>
            </tr>";
            $i++;
        }

        $db->close();

        echo "</table></div>";
        ?>
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
</style>

<?php include "../php/gtag.php" ?>

</html>
