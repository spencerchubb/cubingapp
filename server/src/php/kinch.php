<?php

// The kinch score is calculated as follows:
// Compute average ratio for each event, where the ratio is the competitor score divided by world record score.
// Take the better score between:  
//     - FMC single and FMC average  
//     - 3bld single and 3bld average  
//     - 4bld single and 4bld average  
//     - 5bld single and 5bld average  
// See the original explanation for more: https://www.speedsolving.com/threads/all-round-rankings-kinchranks.53353/
// Returns a list of arrays, where each array has eventId, score, result, and type.
// TODO: Refactor to make output easier to use instead of arbitrary array.
function calcKinchScores($results) {
    $scores = array();
    foreach ($results as $result) {
        $eventId = $result["eventId"];
        $single = $result["single"] ?? 0;
        $average = $result["average"] ?? 0;
        $bestSingle = $result["bestSingle"];
        $bestAverage = $result["bestAverage"];

        if ($eventId === "333mbf") {
            $personalScore = mbldScore($single);
            $recordScore = mbldScore($bestSingle);

            // If nobody has a score, use 100
            if (!$recordScore) {
                array_push($scores, array($eventId, 100, null, "single"));
                continue;
            }

            array_push($scores, array($eventId, $personalScore / $recordScore * 100, $single, "single"));
            continue;
        }

        if ($eventId === "333fm" || $eventId === "333bf" || $eventId === "444bf" || $eventId === "555bf") {
            // If no single use 0. If no single, they also don't have an average.
            if (!$single) {
                array_push($scores, array($eventId, 0, null, "single"));
                continue;
            }

            // This can happen if a person has multiple countryIds and one of the countries has no result for the event.
            if (!$bestSingle || !$bestAverage) {
                array_push($scores, array($eventId, 100, null, "single"));
                continue;
            }

            // If no average, using single
            if (!$average) {
                array_push($scores, array($eventId, $bestSingle / $single * 100, $single, "single"));
                continue;
            }

            // If there is an average, use the better of the two
            $singleScore = $bestSingle / $single * 100;
            $averageScore = $bestAverage / $average * 100;
            if ($singleScore > $averageScore) {
                array_push($scores, array($eventId, $singleScore, $single, "single"));
            } else {
                array_push($scores, array($eventId, $averageScore, $average, "average"));
            }
            continue;
        }

        if (!$average) {
            array_push($scores, array($eventId, 0, null, "single"));
            continue;
        }

        // This can happen if a person has multiple countryIds and one of the countries has no result for the event.
        if (!$bestAverage) {
            array_push($scores, array($eventId, 100, null, "single"));
            continue;
        }

        array_push($scores, array($eventId, $bestAverage / $average * 100, $average, "average"));
    }
    return $scores;
}

function calcAverageKinchScore($scores) {
    $sum = 0;
    $count = 0;
    foreach ($scores as $score) {
        $sum += $score[1];
        $count++;
    }
    return $sum / $count;
}

// Takes in the encoded integer and returns the score
function mbldScore($value) {
    if (!$value) return 0;

    $seconds = floor($value / 100) % 1e5;
    $points = 99 - (floor($value / 1e7) % 100);
    $centiseconds = $seconds === 99999 ? null : $seconds * 100;

    $proportionOfHourLeft = 1 - $centiseconds / 360000;
    $score = $points + $proportionOfHourLeft;
    return max($score, 0);
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