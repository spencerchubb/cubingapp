<?php
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

include_once "option.php";
function selectEvent($selectedEvent, $eventIdToName) {
    echo "<select id='selectEvent' style='width: 100%;'>";
    foreach ($eventIdToName as $id => $name) {
        echo createOption($id, $name, $selectedEvent);
    }
    echo "</select>";
}

function formatResult($event, $type, $result) {
    if ($event === "333mbf") {
        return formatMbld($result);
    } else if ($event === "333fm"  && $type === "single") {
        return $result;
    }
    return $result / 100;
}

function formatMbld($value) {
    if (!$value) return null;

    $missed = $value % 100;
    $points = 99 - floor($value / 1e7) % 100;
    $solved = $points + $missed;
    $attempted = $solved + $missed;
    $seconds = floor($value / 100) % 1e5;
    $points = 99 - (floor($value / 1e7) % 100);
    $centiseconds = $seconds === 99999 ? null : $seconds * 100;
    $hours = floor($centiseconds / 360000);
    $minutes = floor(($centiseconds % 360000) / 6000);
    $seconds = floor(($centiseconds % 6000) / 100);

    $proportionOfHourLeft = 1 - $centiseconds / 360000;

    return "$solved/$attempted $hours:$minutes:$seconds";
}
?>