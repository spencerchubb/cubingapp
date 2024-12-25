<?php

function getWcaAccessToken() {
    session_start();
    if (isset($_SESSION["wca_access_token"]) && isset($_SESSION["wca_expires_in"]) && isset($_SESSION["wca_created_at"])) {
        $accessToken = $_SESSION["wca_access_token"];
        $expiresIn = $_SESSION["wca_expires_in"];
        $createdAt = $_SESSION["wca_created_at"];
        $expiresAt = $createdAt + $expiresIn;
        if ($expiresAt > time()) {
            return $accessToken;
        }
    }

    return null;
}

function getAuthenticatedPerson() {
    $token = getWcaAccessToken();
    if (!$token) return null;

    $curl = curl_init("https://www.worldcubeassociation.org/api/v0/me");
    curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer $token"]);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    return json_decode($response, true)["me"];
}

$authenticatedPerson = getAuthenticatedPerson();

include "../../php/event_utils.php";

$ranks = [];

error_reporting(E_ALL);
ini_set("display_errors", 1);
$db = new SQLite3("/wca.db");

if ($authenticatedPerson) {
    $stmt = $db->prepare("
        SELECT name, countryId, worldKinch, continentKinch, countryKinch, worldSorSingle, continentSorSingle, countrySorSingle, worldSorAverage, continentSorAverage, countrySorAverage
        FROM Persons WHERE id=:personId;");
    $stmt->bindValue(":personId", $authenticatedPerson["wca_id"], SQLITE3_TEXT);
    $rows = $stmt->execute();
    $person = $rows->fetchArray(SQLITE3_ASSOC);
    $name = $person["name"];

    $stmt = $db->prepare("SELECT * FROM RanksSingle WHERE personId=:personId AND eventId <> '333ft' AND eventId <> '333mbo' AND eventId <> 'magic' AND eventId <> 'mmagic';");
    $stmt->bindValue(":personId", $authenticatedPerson["wca_id"], SQLITE3_TEXT);
    $rows = $stmt->execute();
    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        $eventId = $row["eventId"];
        $eventName = $eventIdToName[$eventId];
        if (!isset($ranks[$eventName])) {
            $ranks[$eventName] = ["singleBest" => null, "singleWR" => null, "singleCR" => null, "singleNR" => null, "averageBest" => null, "averageWR" => null, "averageCR" => null, "averageNR" => null];
        }
        $ranks[$eventName]["singleBest"] = formatResult($eventId, "single", $row["best"]);
        $ranks[$eventName]["singleWR"] = $row["worldRank"];
        $ranks[$eventName]["singleCR"] = $row["continentRank"];
        $ranks[$eventName]["singleNR"] = $row["countryRank"];
    }

    $stmt = $db->prepare("SELECT * FROM RanksAverage WHERE personId=:personId AND eventId <> '333ft' AND eventId <> '333mbo' AND eventId <> 'magic' AND eventId <> 'mmagic';");
    $stmt->bindValue(":personId", $authenticatedPerson["wca_id"], SQLITE3_TEXT);
    $rows = $stmt->execute();
    while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
        $eventId = $row["eventId"];
        $eventName = $eventIdToName[$eventId];
        if (!isset($ranks[$eventName])) {
            $ranks[$eventName] = ["singleBest" => null, "singleWR" => null, "singleCR" => null, "singleNR" => null, "averageBest" => null, "averageWR" => null, "averageCR" => null, "averageNR" => null];
        }
        $ranks[$eventName]["averageBest"] = formatResult($eventId, "average", $row["best"]);
        $ranks[$eventName]["averageWR"] = $row["worldRank"];
        $ranks[$eventName]["averageCR"] = $row["continentRank"];
        $ranks[$eventName]["averageNR"] = $row["countryRank"];
    }
}

function integerRegex() {
    return "^[0-9]+$";
}

// Event ID, single hint, average hint, single regex, average regex
$events = [
    ["222",    "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["333",    "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["444",    "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["555",    "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["666",    "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["777",    "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["333oh",  "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["pyram",  "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["minx",   "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["skewb",  "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["sq1",    "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["clock",  "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["333fm",  "0",           "0.00",     "^[0-9]+$",                                   "^[0-9]+\.[0-9]{2}$"],
    ["333bf",  "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["444bf",  "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["555bf",  "00:00.00",    "00:00.00", "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$",            "^(?:[0-5]?\d:)?[0-5]?\d\.\d{2}$"],
    ["333mbf", "0/0 0:00:00", null,       "^[0-9]+/[0-9]+ [0-9]{2}:[0-9]{2}:[0-9]{2}$", null],
];

$methodOptions = [
    "333" => ["LBL", "CFOP", "Roux", "ZZ", "ZB", "Petrus"],
    "222" => ["LBL", "Ortega", "CLL", "EG"],
    "444" => ["Redux", "Yau", "Meyer", "Hoya"],
    "555" => ["Redux", "Yau", "Meyer", "Hoya"],
    "666" => ["Redux", "Yau", "Meyer", "Hoya"],
    "777" => ["Redux", "Yau", "Meyer", "Hoya"],
    "333bf" => ["OP", "Orozco", "3-style", "M2/OP", "M2/Orozco"],
    "333fm" => ["Blockbuilding", "DR/HTR"],
    "333oh" => ["Beginner", "CFOP", "Roux", "ZZ", "Petrus"],
    "clock" => ["Flip", "Sheerin", "7-Simul Flip", "7-Simul"],
    "minx" => ["Beginner", "4LLL", "3LLL", "2LLL"],
    "pyram" => ["LBL", "L4E"],
    "skewb" => ["Sarah Beginner", "Sarah Intermediate", "Sarah Advanced", "NS"],
    "sq1" => ["Vandenbergh", "Lin"],
    "444bf" => ["OP", "3-style"],
    "555bf" => ["OP", "3-style"],
    "333mbf" => ["OP", "Orozco", "3-style", "M2/OP", "M2/Orozco"],
];

// Populate method selects
// Object.entries(methodOptions).forEach(([eventId, options]) => {
//     options = ["None", ...options, "Other"];
//     const select = document.querySelector(`.methodSelect[data-event='${eventId}']`);
//     options.forEach(option => {
//         const optionElement = document.createElement("option");
//         optionElement.value = option;
//         optionElement.innerText = option;
//         select.appendChild(optionElement);
//     });
// });

// for ($methodOptions as $eventId => $options) {
//     // $options = ["None", ...$options, "Other"];
//     $select = document.querySelector(`.methodSelect[data-event='${$eventId}']`);
//     foreach ($options as $option) {
//         $optionElement = document.createElement("option");
//         $optionElement.value = $option;
//         $optionElement.innerText = $option;
//         $select.appendChild($optionElement);
//     }
// }
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title><?php if ($authenticatedPerson) echo "Editing Profile"; else echo "Edit Profile"; ?></title>
</head>

<style>
    td, th {
        font-size: 15px;
        padding: 6px 10px 6px 6px;
    }

    th:nth-child(1), td:nth-child(1), th:nth-child(5), td:nth-child(5), th:nth-child(9), td:nth-child(9) {
        border-right: solid 1px #555;
    }

    .events-container {
        display: flex;

        /* Direct child */
        & > * {
            margin-top: 8px;
        }

        & input, & select {
            margin-top: 4px;
            width: 120px;
        }
    }
</style>

<body>
    <?php include_once "../../php/menu.php"; ?>

    <main>
    <?php if ($authenticatedPerson): ?>
        <h1 style="font-size: 20px;">Editing Profile</h1>

        <h2 style="margin-top: 32px; font-size: 20px;">PB Single</h2>
        <div class="events-container">
        <?php
            foreach ($events as $event) {
                $eventId = $event[0];
                $hint = $event[1];
                $regex = $event[3];
                echo "<div>
                    <p>$eventIdToName[$eventId]</p>
                    <input class='pbSingleInput' data-event='$eventId' data-regex='$regex' type='text' placeholder='$hint' />
                </div>";
            }
        ?>
        </div>
        
        <h2 style="margin-top: 32px; font-size: 20px;">PB Average</h2>
        <div class="events-container">
        <?php
            foreach ($events as $event) {
                $eventId = $event[0];
                $hint = $event[2];
                $regex = $event[4];
                if ($eventId === "333mbf") continue;
                echo "<div>
                    <p>$eventIdToName[$eventId]</p>
                    <input class='pbAverageInput' data-event='$eventId' data-regex='$regex' type='text' placeholder='$hint' />
                </div>";
            }
        ?>
        </div>

        <h2 style="margin-top: 32px; font-size: 20px;">Main Puzzle</h2>
        <div class="events-container">
        <?php
            foreach ($events as $event) {
                $eventId = $event[0];
                echo "<div>
                    <p>$eventIdToName[$eventId]</p>
                    <input class='mainInput' data-event='$eventId' type='text' placeholder='$eventIdToName[$eventId] Puzzle' />
                </div>";
            }
        ?>
        </div>

        <h2 style="margin-top: 32px; font-size: 20px;">Method</h2>
        <div class="events-container">
        <?php
            foreach ($events as $event) {
                $eventId = $event[0];
                echo "<div>
                    <p>$eventIdToName[$eventId]</p>
                    <select class='methodSelect' data-event='$eventId'>";
                        echo "<option value='None'>None</option>";
                        foreach ($methodOptions[$eventId] as $option) {
                            echo "<option value='$option'>$option</option>";
                        }
                        echo "<option value='Other'>Other</option>
                    </select>
                </div>";
            }
        ?>
        </div>

        <div style="margin-top: 150px;"></div>

        <button id="saveButton" style="position: fixed; bottom: 32px; right: 32px; font-size: 20px; padding: 12px 20px;">Save</button>

    <?php else: ?>
        <p>Not signed in</p>
    <?php endif; ?>
    </main>
</body>

<script>
const eventIdToName = {
    "333": "3x3",
    "222": "2x2",
    "444": "4x4",
    "555": "5x5",
    "666": "6x6",
    "777": "7x7",
    "333bf": "3BLD",
    "333fm": "FMC",
    "333oh": "OH",
    "clock": "Clock",
    "minx": "Mega",
    "pyram": "Pyra",
    "skewb": "Skewb",
    "sq1": "SQ1",
    "444bf": "4BLD",
    "555bf": "5BLD",
    "333mbf": "MBLD",
};

function encodeMbld(solved, attempted, hours, minutes, seconds) {
    let centiseconds = (hours * 3600 + minutes * 60 + seconds) * 100;
    if (centiseconds <= 0) return centiseconds;

    centiseconds = centiseconds || 9999900;

    const missed = attempted - solved;
    const points = solved - missed;
    seconds = Math.round(centiseconds / 100);
    return (99 - points) * 1e7 + seconds * 1e2 + missed;
}

function parseHoursMinutesSeconds(time) {
    const parts = time.split(':').reverse();
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    // Process each part: seconds, minutes, hours
    if (parts[0]) {
        const secParts = parts[0].split('.');
        seconds += parseFloat(secParts[0] || 0); // Whole seconds
        if (secParts[1]) {
            seconds += parseFloat(`0.${secParts[1]}`); // Fractional seconds
        }
    }
    if (parts[1]) {
        minutes += parseInt(parts[1]); // Minutes
    }
    if (parts[2]) {
        hours += parseInt(parts[2]); // Hours
    }

    return [hours, minutes, seconds];
}

function toSeconds(timeString) {
    const [hours, minutes, seconds] = parseHoursMinutesSeconds(timeString);
    return hours * 3600 + minutes * 60 + seconds;
}
// Example usage of toSeconds:
// console.log(toSeconds("1:00:00.00")); // 3600
// console.log(toSeconds("10:00.00"));   // 600
// console.log(toSeconds("10:00"));      // 600
// console.log(toSeconds("1.00"));       // 1
// console.log(toSeconds("0.10"));       // 0.1

function encodeResult(result, eventId, type) {
    if (eventId === "333mbf") {
        const [solvedOverAttempted, time] = result.split(" ");
        const [hours, minutes, seconds] = parseHoursMinutesSeconds(time);
        const [solved, attempted] = solvedOverAttempted.split("/");
        solved = parseInt(solved);
        attempted = parseInt(attempted);
        return encodeMbld(solved, attempted, hours, minutes, seconds);
    }
    else if (eventId === "333fm" && type === "single") {
        return parseInt(result);
    }
    return toSeconds(result) * 100;
}

function save() {
    const data = {};
    for (const input of document.querySelectorAll(".pbSingleInput")) {
        if (!data[input.dataset.event]) data[input.dataset.event] = {};
        if (input.value.match(input.dataset.regex)) {
            data[input.dataset.event]["pbSingle"] = encodeResult(input.value, eventId, "single");
        } else if (input.value.length > 0) {
            alert(`Format error for ${eventIdToName[input.dataset.event]} PB Single.\nThe format should be like ${input.placeholder}`);
            return;
        }
    }

    for (const input of document.querySelectorAll(".pbAverageInput")) {
        if (!data[input.dataset.event]) data[input.dataset.event] = {};
        if (input.value.match(input.dataset.regex)) {
            data[input.dataset.event]["pbAverage"] = encodeResult(input.value, eventId, "average");
        } else if (input.value.length > 0) {
            alert(`Format error for ${eventIdToName[input.dataset.event]} PB Average.\nThe format should be like ${input.placeholder}`);
            return;
        }
    }
    
    for (const input of document.querySelectorAll(".mainInput")) {
        if (!data[input.dataset.event]) data[input.dataset.event] = {};
        if (input.value.length > 0) {
            data[input.dataset.event]["main"] = input.value;
        }
    }

    for (const input of document.querySelectorAll(".methodSelect")) {
        if (!data[input.dataset.event]) data[input.dataset.event] = {};
        if (input.value !== "None") {
            data[input.dataset.event]["method"] = input.value;
        }
    }

    console.log(data);
}

saveButton.onclick = save;
</script>

<?php include "../../php/gtag.php" ?>

</html>
