<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Enter your location to see World Cube Association (WCA) Competitions sorted by distance.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>WCA Comps sorted by distance</title>
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
</script>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main>
        <h1 style="text-align: center;">WCA Comps sorted by distance</h1>
        <?php
            include "../php/event_utils.php";

            $lat = $_GET["lat"];
            $lon = $_GET["lon"];

            // Array of event ids.
            $events = $_GET["events"] ? explode("-", $_GET["events"]) : [];
        ?>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-top: 1rem;">
            <a class="link" href="https://www.latlong.net/" target="_blank" style="margin-top: 16px;">Get latitude & longitude here</a>
            <input id="lat" type="number" placeholder="Latitude" value="<?php echo $lat ?>" style="width: 100%; max-width: 300px;" />
            <input id="lon" type="number" placeholder="Longitude" value="<?php echo $lon ?>" style="width: 100%; max-width: 300px;" />
            <?php if ($lat && $lon) { ?>
                <p>Bookmark the page to save your latitude and longitude!</p>
            <?php } ?>
            <script>
                q("#lat").addEventListener("change", (event) => setUrlParam("lat", event.target.value));
                q("#lon").addEventListener("change", (event) => setUrlParam("lon", event.target.value));
            </script>
        </div>
        <div style="margin-top: 2rem;"></div>
        <?php
        // For each eventIdToName, render a button
        echo "<div style='display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;'>";
        foreach ($eventIdToName as $eventId => $eventName) {
            $selected = in_array($eventId, $events) ? "event-button-selected" : "";
            $onclick = "onClickEventButton('$eventId')";
            echo "<button class='event-button $selected' data-event='$eventId'>$eventName</button>";
        }
        echo "
            <script>
                let events = new URLSearchParams(window.location.search).get('events');
                if (events) events = events.split('-');
                else events = [];

                function onClickEventButton(event) {
                    console.log(event);
                    const eventId = event.target.getAttribute('data-event');
                    if (!events.includes(eventId)) {
                        events.push(eventId);
                    } else {
                        events.splice(events.indexOf(eventId), 1);
                    }
                    setUrlParam('events', events.join('-'));
                }
                document.querySelectorAll('.event-button').forEach(b => b.addEventListener('click', onClickEventButton))
            </script>
        </div>";

        error_reporting(E_ALL);
        ini_set("display_errors", 1);
        $db = new SQLite3("/wca.db");

        if (!$db) {
            die("Error connecting to the database: " . $db->lastErrorMsg());
        }

        $currentDate = date("Y-m-d");
        $query = "select id, name, latitude, longitude, eventSpecs, month, day, endMonth, endDay
            from Competitions
            where startDate >= '$currentDate';";
        $stmt = $db->prepare($query);
        $rows = $stmt->execute();

        function numToMonth($num) {
            return [
                1 => "Jan",
                2 => "Feb",
                3 => "Mar",
                4 => "Apr",
                5 => "May",
                6 => "Jun",
                7 => "Jul",
                8 => "Aug",
                9 => "Sep",
                10 => "Oct",
                11 => "Nov",
                12 => "Dec"
            ][$num];
        }

        // Show as a range if the dates are different, just once if dates are the same.
        function formatDateRange($month, $day, $endMonth, $endDay) {
            if ($month === $endMonth && $day === $endDay) {
                $month = numToMonth($month);
                return "$month $day";
            }
            $month = numToMonth($month);
            $endMonth = numToMonth($endMonth);
            return "$month $day-$endMonth $endDay";
        }

        function haversineDistanceKm($lat1, $lon1, $lat2, $lon2) {
            $earthRadius = 6371.0;
        
            $lat1 = deg2rad($lat1);
            $lon1 = deg2rad($lon1);
            $lat2 = deg2rad($lat2);
            $lon2 = deg2rad($lon2);
        
            $dLat = $lat2 - $lat1;
            $dLon = $lon2 - $lon1;
        
            $angle = 2 * asin(sqrt(pow(sin($dLat / 2), 2) + cos($lat1) * cos($lat2) * pow(sin($dLon / 2), 2)));
            return $angle * $earthRadius;
        }
        
        echo "<div class='table-wrapper' style='margin: 1rem auto;'><table>";
        echo "<tr>
            <th>Date</th>
            <th>km</th>
            <th>mi</th>
            <th>Name</th>
            <th>Events</th>
        </tr>";

        $array = array();
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            $array[] = $row;
        }

        // If events specified, filter by events.
        if ($events) {
            $array = array_filter($array, function($row) use ($events) {
                $eventSpecs = explode(" ", $row["eventSpecs"]);
                foreach ($events as $event) {
                    if (!in_array($event, $eventSpecs)) {
                        return false;
                    }
                }
                return true;
            });
        }

        if ($lat && $lon) {
            foreach ($array as &$row) {
                // Divide by 1000000 because database stores them as integers.
                $row["km"] = haversineDistanceKm($lat, $lon, $row["latitude"] / 1000000, $row["longitude"] / 1000000);
                $row["mi"] = $row["km"] * 0.621371;
            }
            usort($array, function($a, $b) {
                return $a["km"] - $b["km"];
            });
        }

        foreach ($array as $row) {
            $id = $row["id"];
            $dateRange = formatDateRange($row["month"], $row["day"], $row["endMonth"], $row["endDay"]);
            $km = round($row["km"] ?? 0);
            $name = $row["name"];
            $eventSpecs = $row["eventSpecs"];

            // Split $eventSpecs by space, map to name, join with space.
            $eventSpecs = implode(" ", array_map(function($event) use ($eventIdToName) {
                return $eventIdToName[$event];
            }, explode(" ", $eventSpecs)));

            echo "<tr>
                <td>$dateRange</td>
                <td>$km</td>
                <td>" . round($km * 0.621371) . "</td>
                <td>
                    <a class='link' href='https://www.worldcubeassociation.org/competitions/$id'>$name</a>
                </td>
                <td class='cubing-icons events-cell'>$eventSpecs</td>
            </tr>";
        }

        $db->close();

        echo "</table></div>";
        ?>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<style>
    .event-button {
        background: transparent;
        outline: solid 1px var(--gray-600);
    }

    .event-button:hover {
        background: var(--gray-600);
    }

    .event-button-selected {
        outline: solid 2px var(--lightBlue-300);
    }

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
