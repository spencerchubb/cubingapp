<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Find cubing competitions near you by entering your location. There are competitions all around the world, and this is the easiest way to find some nearby.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Cubing Competitions Near Me</title>
</head>

<style>
#placesDiv {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    gap: 8px;

    & a {
        border: solid 1px #555;
        border-radius: 4px;
        padding: 4px;
        background: #181818;
        color: #ddd;

        &:hover {
            background: #444;
        }
    }
}

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


<script>
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
        <?php
            include "../php/event_utils.php";

            $name = $_GET["name"];
            $lat = $_GET["lat"];
            $lon = $_GET["lon"];

            // Array of event ids.
            $events = $_GET["events"] ? explode("-", $_GET["events"]) : [];
        ?>
        <h1>Cubing Competitions Near Me</h1>
        <p style="color: #ccc; font-size: 15px; margin-top: 8px;">
            Your location is: <?php echo $name ?? "Unknown" ?>
        </p>
        <?php
            if ($name) echo "<p style='font-weight: bold; margin-top: 8px;'>Bookmark to save your location!</p>";
        ?>
        <div style="display: flex; gap: 8px; margin-top: 32px;">
            <input
                type="text"
                id="placeInput"
                placeholder="Name of place"
            />
            <button id="findButton">Find</button>
        </div>
        <p style="color: #ccc; font-size: 15px; margin-top: 8px;">Give details for best accuracy. Name, Address, City, State/Province, Zip Code, Country</p>
        <div id="placesDiv"></div>
        <div style="margin-top: 32px;"></div>
        <?php
        // For each eventIdToName, render a button
        echo "<div style='display: flex; flex-wrap: wrap; gap: 8px;'>";
        foreach ($eventIdToName as $eventId => $eventName) {
            if ($eventId == "Kinch" || $eventId == "Sum of Ranks") continue;
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

<script>
function renderPlaces(places) {
    placesDiv.innerHTML = "";
    if (places.length === 0) {
        placesDiv.innerHTML = "<p>No places found. 1) Check spelling 2) Try another place 3) Add more details</p>";
        return;
    }
    places.forEach(place => {
        const lat = place["lat"];
        const lon = place["lon"];
        const name = place["display_name"];

        // Set search params in this fashion to deal with spaces and special characters.
        const url = new URL(location.href);
        url.searchParams.set("lat", lat);
        url.searchParams.set("lon", lon);
        url.searchParams.set("name", name);
        placesDiv.innerHTML += `<a href=${url}>${name}</a>`;
    });
}

findButton.onclick = () => {
    fetch(`https://geocode.maps.co/search?q=${placeInput.value}&api_key=678a635a5efbd709855403bsn03f239`)
        .then(res => res.json())
        .then(data => {
            renderPlaces(data);
        });
}
</script>

<?php include "../php/gtag.php" ?>

</html>
