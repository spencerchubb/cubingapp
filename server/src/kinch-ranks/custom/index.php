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
.table-wrapper {
    max-width: 100%;
    width: fit-content;
    overflow-x: auto;
}

table tr:nth-child(even) {
    background: var(--gray-900);
}

/* Less padding so rows aren't too tall */
tr td:nth-child(3) {
    padding: 0 16px 0 8px;
}

h2 {
    margin-top: 24px;
    font-size: 18px;
}

input {
    width: 100%;
    padding: 4px;
    border-radius: 4px;
    background: none;
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

    $customResults = json_decode($_GET["results"] ?? "{}", true);

    // Empty defaults in case no custom results are provided
    $kinchOutput = array(
        array(
            "type" => "average",
            "eventId" => "222",
            "label" => "2x2 Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "333",
            "label" => "3x3 Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "single",
            "eventId" => "333bf",
            "label" => "3BLD Single",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "333bf",
            "label" => "3BLD Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "single",
            "eventId" => "333fm",
            "label" => "FMC Single",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "333fm",
            "label" => "FMC Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "single",
            "eventId" => "333mbf",
            "label" => "Multiblind",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "333oh",
            "label" => "OH Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "444",
            "label" => "4x4 Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "single",
            "eventId" => "444bf",
            "label" => "4BLD Single",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "444bf",
            "label" => "4BLD Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "555",
            "label" => "5x5 Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "single",
            "eventId" => "555bf",
            "label" => "5BLD Single",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "555bf",
            "label" => "5BLD Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "666",
            "label" => "6x6 Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "777",
            "label" => "7x7 Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "clock",
            "label" => "Clock Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "minx",
            "label" => "Mega Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "pyram",
            "label" => "Pyra Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "skewb",
            "label" => "Skewb Avg",
            "result" => "",
            "score" => "",
        ),
        array(
            "type" => "average",
            "eventId" => "sq1",
            "label" => "SQ1 Avg",
            "result" => "",
            "score" => "",
        ),
    );
    $averageScore = "";

    if ($customResults) {
        include "../../php/event_utils.php";
        include "../../php/kinch.php";

        $calcKinchInput = array();

        // The GROUP BY ensures we only get one row per event.
        // Sometimes people are tied for first place.
        $query = "
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
        $stmt = $db->prepare($query);
        $rows = $stmt->execute();

        // Format to fit what calcKinch expects
        while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {

            $eventId = $row["eventId"];
            $customResult = $customResults[$eventId];

            // Populate bestSingle and bestAverage
            $calcKinchInput[$eventId] = array(
                "eventId" => $eventId,
                "bestSingle" => $row["bestSingle"],
                "bestAverage" => $row["bestAverage"],
            );

            // Populate single and average if they exist
            foreach ($customResult as $singleOrAvg => $result) {
                if ($singleOrAvg === "single") {
                    $calcKinchInput[$eventId]["single"] = $result;
                } else if ($singleOrAvg === "average") {
                    $calcKinchInput[$eventId]["average"] = $result;
                }
            }
        }

        $kinchOutput = calcKinch($calcKinchInput);
        $averageScore = calcAverageKinchScore($kinchOutput);

        for ($i = 0; $i < count($kinchOutput); $i++) {
            $eventName = $eventIdToName[$kinchOutput[$i]["eventId"]];

            if ($kinchOutput[$i]["type"] === "single") {
                $kinchOutput[$i]["label"] = $eventName . " Single";
            } else if ($kinchOutput[$i]["type"] === "average") {
                $kinchOutput[$i]["label"] = $eventName . " Avg";
            } else {
                $kinchOutput[$i]["label"] = $eventName;
            }
        }
    }

    $db->close();
    ?>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Score</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Overall</td>
                    <td><?php echo $averageScore; ?></td>
                    <td></td>
                </tr>
                <?php foreach ($kinchOutput as $row) { ?>
                    <tr>
                        <td><?php echo $row["label"] ?></td>
                        <td><?php echo $row["score"] ?></td>
                        <td>
                            <input
                                placeholder="<?php echo $row["label"] ?>"
                                data-type="<?php echo $row["type"] ?>"
                                data-event="<?php echo $row["eventId"] ?>"
                                value="<?php echo $row["result"] ?>"
                            />
                        </td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
    
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

    let results = {};
    document.querySelectorAll("input").forEach(input => {
        const eventId = input.dataset.event;
        const type = input.dataset.type;

        if (!results[eventId]) results[eventId] = {};

        if (eventId === "333mbf") {

            // Validate mbld
            if (input.value) {
                const regex = /(\d+)\/(\d+) (\d+):(\d+):(\d+)/;
                if (!regex.test(input.value)) {
                    alert("Multiblind format should be \"Solved/Attempted HH:MM:SS\"");
                    return;
                } else {
                    const [_, solved, attempted, hours, minutes, seconds] = input.value.match(regex);
                    results[eventId]["single"] = encodeMbld(parseInt(solved), parseInt(attempted), parseInt(hours), parseInt(minutes), parseInt(seconds));
                }
            } else {
                results[eventId]["single"] = 0;
            }
        } else if (eventId === "333fm" && type === "single") {
            results[eventId]["single"] = parseInt(input.value);
        } else {
            results[eventId][type] = input.value * 100;
        }
    });
    // console.log(results);

    // let customResults = {
    //     "222": { "average": average2x2.value * 100 },
    //     "333": { "average": average3x3.value * 100 },
    //     "333bf": { "single": single3bld.value * 100, "average": average3bld.value * 100 },
    //     "333fm": { "single": parseInt(single3fm.value), "average": average3fm.value * 100 },
    //     "333mbf": { "single": multiEncoded },
    //     "333oh": { "average": average333oh.value * 100 },
    //     "444": { "average": average4x4.value * 100 },
    //     "444bf": { "single": single4bld.value * 100, "average": average4bld.valu * 100 },
    //     "555": { "average": average5x5.value * 100 },
    //     "555bf": { "single": single5bld.value * 100, "average": average5bld.value * 100 },
    //     "666": { "average": average6x6.value * 100 },
    //     "777": { "average": average7x7.value * 100 },
    //     "clock": { "average": clock.value * 100 },
    //     "minx": { "average": megaminx.value * 100 },
    //     "pyram": { "average": pyraminx.value * 100 },
    //     "skewb": { "average": skewb.value * 100 },
    //     "sq1": { "average": square1.value * 100 },
    // };

    const url = new URL(window.location.href);
    url.searchParams.set("results", JSON.stringify(results));
    location.href = url;
}
</script>

</body>

<?php include "../../php/gtag.php" ?>

</html>
