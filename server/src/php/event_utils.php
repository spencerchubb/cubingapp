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
    "Kinch" => "Kinch",
    "Sum of Ranks" => "Sum of Ranks",
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
    } else if ($event === "333fm"  && strtolower($type) === "single") {
        return $result;
    } else if ($event === "Kinch") {
        return sprintf("%.2f", $result);
    } else if ($event === "Sum of Ranks") {
        return $result;
    }
    return timeToStr($result);
}

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

function formatMbld($value) {
    if (!$value) return null;

    $missed = $value % 100;
    $points = 99 - floor($value / 1e7) % 100;
    $solved = $points + $missed;
    $attempted = $solved + $missed;
    $seconds = floor($value / 100) % 1e5;
    $points = 99 - (floor($value / 1e7) % 100);
    $centiseconds = $seconds === 99999 ? null : $seconds * 100;

    $time = timeToStr($centiseconds);
    return "$solved/$attempted $time";
}
?>