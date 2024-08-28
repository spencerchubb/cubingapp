<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Calculate a Kinch score with custom results">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Kinch Custom Calculator</title>
</head>

<script>
function setUrlParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams.toString();
}

function goToPage(page, pages) {
    page = Math.max(1, page);
    page = Math.min(pages, page);
    setUrlParam('page', page);
}

function onChangeRegion(event) {
    setUrlParam('region', event.target.value);
}
</script>

<style>
h2 {
    margin-top: 24px;
    font-size: 18px;
}

input {
    margin-top: 8px;
    width: 100%;
}

#calculateButton {
    margin-top: 24px;
    font-size: 20px;
    width: 100%;
}
</style>

<body>
<?php include_once "../../php/menu.php"; ?>

<main>
    <h1 style="text-align: center; margin-bottom: 8px;">Kinch Custom Calculator</h1>

    <?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    $db = new SQLite3("/wca.db");

    if (!$db) {
        die("Error connecting to the database: " . $db->lastErrorMsg());
    }

    function buildKinchStatement($db) {
        // The GROUP BY ensures we only get one row per event.
        // Sometimes people are tied for first place.
        $worldQuery = "
        SELECT
            e.id as eventId,
            rs2.best AS bestSingle,
            ra2.best AS bestAverage
        FROM Events e
        LEFT JOIN RanksSingle rs2 ON e.id = rs2.eventId AND rs2.worldRank = 1
        LEFT JOIN RanksAverage ra2 ON e.id = ra2.eventId AND ra2.worldRank = 1
        WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
        GROUP BY e.id;
        ";
        $stmt = $db->prepare($worldQuery);
        return $stmt;
    }
    
    $customResults = json_decode($_GET["results"] ?? "{}", true);
    $formattedResults = array(
        "222" => array("single" => null, "average" => null),
        "333" => array("single" => null, "average" => null),
        "333bf" => array("single" => null, "average" => null),
        "333fm" => array("single" => null, "average" => null),
        "333mbf" => array("single" => null, "average" => null),
        "333oh" => array("single" => null, "average" => null),
        "444" => array("single" => null, "average" => null),
        "444bf" => array("single" => null, "average" => null),
        "555" => array("single" => null, "average" => null),
        "555bf" => array("single" => null, "average" => null),
        "666" => array("single" => null, "average" => null),
        "777" => array("single" => null, "average" => null),
        "clock" => array("single" => null, "average" => null),
        "minx" => array("single" => null, "average" => null),
        "pyram" => array("single" => null, "average" => null),
        "skewb" => array("single" => null, "average" => null),
        "sq1" => array("single" => null, "average" => null),
    );

    if ($customResults) {
        include "../../php/kinch.php";

        // Fetch official results from the database
        $stmt = buildKinchStatement($db);
        $rows = $stmt->execute();

        $results = array();
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
            array_push($results, $row);
        }

        foreach ($results as $index => $row) {
            $eventId = $row["eventId"];
            $customResult = $customResults[$eventId];

            if (isset($customResult["single"])) $results[$index]["single"] = $customResult["single"];
            else $results[$index]["single"] = null;
            
            if (isset($customResult["average"])) $results[$index]["average"] = $customResult["average"];
            else $results[$index]["average"] = null;

            if ($eventId == "333mbf") $formattedResults[$eventId] = array(
                "single" => formatMbld($customResult["single"]), // either formatMbld is wrong or encodeMbld is wrong
            );
            else if ($eventId == "333fm" || $eventId == "333bf" || $eventId == "444bf" || $eventId == "555bf") $formattedResults[$eventId] = array(
                "single" => $customResult["single"],
                "average" => $customResult["average"],
            );
            else $formattedResults[$eventId] = array(
                "average" => $customResult["average"],
            );
        }

        $scores = calcKinchScores($results);
        $averageScore = calcAverageKinchScore($scores);
        $averageScore = round($averageScore, 2);

        echo "<p style='margin-top: 16px;'>Kinch Score: $averageScore</p>";
    }

    $db->close();
    ?>
    
    <h2>2x2 Average</h2>
    <input id="average2x2" type="number" placeholder="2x2 Average" value="<?php echo $formattedResults["222"]["average"] / 100 ?>" />

    <h2>3x3 Average</h2>
    <input id="average3x3" type="number" placeholder="3x3 Average" value="<?php echo $formattedResults["333"]["average"] / 100 ?>" />

    <h2>3x3 Blind Single</h2>
    <input id="single3bld" type="number" placeholder="3x3 Blind Single" value="<?php echo $formattedResults["333bf"]["single"] / 100 ?>" />

    <h2>3x3 Blind Average</h2>
    <input id="average3bld" type="number" placeholder="3x3 Blind Average" value="<?php echo $formattedResults["333bf"]["average"] / 100 ?>" />

    <h2>3x3 Fewest Moves Single</h2>
    <input id="single3fm" type="number" placeholder="3x3 Fewest Moves Single" value="<?php echo $formattedResults["333fm"]["single"] ?>" />

    <h2>3x3 Fewest Moves Average</h2>
    <input id="average3fm" type="number" placeholder="3x3 Fewest Moves Average" value="<?php echo $formattedResults["333fm"]["average"] / 100 ?>" />

    <h2>3x3 Multiblind</h2>
    <input id="multi" type="text" placeholder="solved/attempted HH:MM:SS" value="<?php echo $formattedResults["333mbf"]["single"] ?>" />

    <h2>3x3 One-Handed Average</h2>
    <input id="average333oh" type="number" placeholder="3x3 One-Handed Average" value="<?php echo $formattedResults["333oh"]["average"] / 100 ?>" />

    <h2>4x4 Average</h2>
    <input id="average4x4" type="number" placeholder="4x4 Average" value="<?php echo $formattedResults["444"]["average"] / 100 ?>" />

    <h2>4x4 Blind Single</h2>
    <input id="single4bld" type="number" placeholder="4x4 Blind Single" value="<?php echo $formattedResults["444bf"]["single"] / 100 ?>" />

    <h2>4x4 Blind Average</h2>
    <input id="average4bld" type="number" placeholder="4x4 Blind Average" value="<?php echo $formattedResults["444bf"]["average"] / 100 ?>" />

    <h2>5x5 Average</h2>
    <input id="average5x5" type="number" placeholder="5x5 Average" value="<?php echo $formattedResults["555"]["average"] / 100 ?>" />

    <h2>5x5 Blind Single</h2>
    <input id="single5bld" type="number" placeholder="5x5 Blind Single" value="<?php echo $formattedResults["555bf"]["single"] / 100 ?>" />

    <h2>5x5 Blind Average</h2>
    <input id="average5bld" type="number" placeholder="5x5 Blind Average" value="<?php echo $formattedResults["555bf"]["average"] / 100 ?>" />

    <h2>6x6 Average</h2>
    <input id="average6x6" type="number" placeholder="6x6 Average" value="<?php echo $formattedResults["666"]["average"] / 100 ?>" />

    <h2>7x7 Average</h2>
    <input id="average7x7" type="number" placeholder="7x7 Average" value="<?php echo $formattedResults["777"]["average"] / 100 ?>" />

    <h2>Clock Average</h2>
    <input id="clock" type="number" placeholder="Clock Average" value="<?php echo $formattedResults["clock"]["average"] / 100 ?>" />

    <h2>Megaminx Average</h2>
    <input id="megaminx" type="number" placeholder="Megaminx Average" value="<?php echo $formattedResults["minx"]["average"] / 100 ?>" />

    <h2>Pyraminx Average</h2>
    <input id="pyraminx" type="number" placeholder="Pyraminx Average" value="<?php echo $formattedResults["pyram"]["average"] / 100 ?>" />

    <h2>Skewb Average</h2>
    <input id="skewb" type="number" placeholder="Skewb Average" value="<?php echo $formattedResults["skewb"]["average"] / 100 ?>" />
    
    <h2>Square-1 Average</h2>
    <input id="square1" type="number" placeholder="Square-1 Average" value="<?php echo $formattedResults["sq1"]["average"] / 100 ?>" />

    <button id="calculateButton">Calculate</button>

    <div style="margin-top: 150px;"></div>
</main>

<script>
function encodeMbld(solved, attempted, hours, minutes, seconds) {
    let centiseconds = (hours * 3600 + minutes * 60 + seconds) * 100;
    if (centiseconds <= 0) return centiseconds;

    centiseconds = centiseconds || 9999900;

    const missed = attempted - solved;
    const points = solved - missed;
    seconds = Math.round(centiseconds / 100);
    return (99 - points) * 1e7 + seconds * 1e2 + missed;
}

calculateButton.onclick = () => {

    // Validate mbld
    let multiEncoded;
    if (multi.value) {
        const regex = /(\d+)\/(\d+) (\d+):(\d+):(\d+)/;
        if (!regex.test(multi.value)) {
            alert("Multiblind format should be \"Solved/Attempted HH:MM:SS\"");
            return;
        } else {
            const [_, solved, attempted, hours, minutes, seconds] = multi.value.match(regex);
            multiEncoded = encodeMbld(parseInt(solved), parseInt(attempted), parseInt(hours), parseInt(minutes), parseInt(seconds));
        }
    } else {
        multiEncoded = null;
    }

    let customResults = {
        "222": { "average": average2x2.value * 100 },
        "333": { "average": average3x3.value * 100 },
        "333bf": { "single": single3bld.value * 100, "average": average3bld.value * 100 },
        "333fm": { "single": parseInt(single3fm.value), "average": average3fm.value * 100 },
        "333mbf": { "single": multiEncoded },
        "333oh": { "average": average333oh.value * 100 },
        "444": { "average": average4x4.value * 100 },
        "444bf": { "single": single4bld.value * 100, "average": average4bld.valu * 100 },
        "555": { "average": average5x5.value * 100 },
        "555bf": { "single": single5bld.value * 100, "average": average5bld.value * 100 },
        "666": { "average": average6x6.value * 100 },
        "777": { "average": average7x7.value * 100 },
        "clock": { "average": clock.value * 100 },
        "minx": { "average": megaminx.value * 100 },
        "pyram": { "average": pyraminx.value * 100 },
        "skewb": { "average": skewb.value * 100 },
        "sq1": { "average": square1.value * 100 },
    };

    const url = new URL(window.location.href);
    url.searchParams.set("results", JSON.stringify(customResults));
    location.href = url;
}
</script>

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

    .page-selector-box {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 12px 0;
    }

    .page-button {
        padding: 12px 8px;
        background: transparent;
    }

    .page-button:hover {
        background: var(--gray-900);
    }

    .page-button-active {
        background: var(--gray-900);
        outline: solid 1px var(--gray-600);
    }

    tr:nth-child(even) {
        background: var(--gray-900);
    }
</style>

<?php include "../../php/gtag.php" ?>

</html>
