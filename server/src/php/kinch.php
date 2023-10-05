<?php

// The kinch score is calculated as follows:
// Compute average ratio for each event, where the ratio is the competitor score divided by world record score.
// Take the better score between:  
//     - FMC single and FMC average  
//     - 3bld single and 3bld average  
//     - 4bld single and 4bld average  
//     - 5bld single and 5bld average  
// See the original explanation for more: https://www.speedsolving.com/threads/all-round-rankings-kinchranks.53353/
function calcKinchScores($results) {
    $scores = array();
    foreach ($results as $result) {
        $eventId = $result["eventId"];
        $single = $result["single"];
        $average = $result["average"];
        $bestSingle = $result["bestSingle"];
        $bestAverage = $result["bestAverage"];

        if ($eventId === "333mbf") {
            $personalScore = mbldScore($single);
            $recordScore = mbldScore($bestSingle);

            // If nobody has a score, use 100
            if (!$recordScore) {
                array_push($scores, array($eventId, 100));
                continue;
            }

            array_push($scores, array($eventId, $personalScore / $recordScore * 100));
            continue;
        }

        if ($eventId === "333fm" || $eventId === "333bf" || $eventId === "444bf" || $eventId === "555bf") {
            // If neither single nor average, use 0
            if (!$single && !$average) {
                array_push($scores, array($eventId, 0));
                continue;
            }

            // If no average, using single
            if (!$average) {
                array_push($scores, array($eventId, $bestSingle / $single * 100));
                continue;
            }

            // If there is an average, use the better of the two
            array_push($scores, array($eventId, max(
                $bestSingle / $single * 100,
                $bestAverage / $average * 100
            )));
            continue;
        }

        if (!$average) {
            array_push($scores, array($eventId, 0));
            continue;
        }

        array_push($scores, array($eventId, $bestAverage / $average * 100));
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

?>