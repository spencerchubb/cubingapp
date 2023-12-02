<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Learn whether you are sub-x in speedcubing.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Am I Sub-X?</title>
</head>

<style>
    .subheader {
        margin-top: 32px;
    }
    
    .bodytext {
        align-self: start;
        line-height: 1.5rem;
        margin-top: 16px;
    }
</style>

<body style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "php/menu/menuIcon.php" ?>
        <?php include_once "php/menu/menu.php" ?>
    </nav>

    <main class="col" style="height: 100%; overflow-y: auto; padding: 0 16px;">
        <div class="col" style="width: 100%; max-width: 600px;">
            <h2 class="subheader">How do I know if I'm sub-X?</h2>
            <p class="bodytext">
                Have you ever wondered if you are sub-10, sub-15, sub-20, etc?
                Typically cubers say that an average of 100 solves is enough to know if you are sub-X.
            </p>
            <p class="bodytext">
                The right number of solves is a matter of opinion.
                Some people say that you need 500 or even 1000 solves to be sure.
            </p>
            <h2 class="subheader">A better way</h2>
            <p class="bodytext">
                This tool uses a statistical formula called 'confidence intervals'.
            </p>
            <p class="bodytext">
                In any average, there is a chance that you got lucky or unlucky, so we can never know the "true" average with 100% confidence.
                The confidence score tells us how confident we are that the "true" average is sub-X.
            </p>
            <div style="margin-top: 32px;"></div>
            <div id="upload-timer-data"></div>
            <div class="row" style="margin-top: 16px; gap: 16px;">
                <p style="margin: 0; font-weight: bold; align-self: center;">Solves</p>
                <input
                    id="num-solves-input"
                    type="number"
                    min="1"
                />
            </div>
        </div>
        <div id="confidence-data-div"></div>
        <div style="margin-top: 32px;">
            <?php include "php/cool_calculators.php" ?>
        </div>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<script type="module">
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

    import { parseTimerData } from "./js/timerData/index.js";

    let state = {
        filename: "No file chosen",
        data: undefined,
        numSolves: 100,
    };

    function displayFilePicker(callback) {
        const input = document.createElement("input");
        input.type = "file";
        input.onchange = () => {
            if (!input.files) return;
            const file = input.files[0];
            if (file) {
                state.filename = file.name;

                const reader = new FileReader();
                reader.onload = () => {
                    const result = reader.result;
                    const timerData = parseTimerData(result);
                    console.log(timerData);

                    callback(timerData);
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }

    function renderUploadBox(callback) {
        return E("div", {
            className: "col",
            style: "align-items: start; padding: 16px; border-radius: 8px; border: solid 1px var(--gray-600);",
        }, [
            E("p", { textContent: "Supported timers:" }),
            E("ul", { style: "margin-top: 8px;" }, [
                E("li", { textContent: "csTimer" }),
                E("li", { textContent: "CubeDesk" }),
                E("li", { textContent: "Other (tell me and I'll add it)" }),
            ]),
            E("div", { className: "row", style: "gap: 16px; margin-top: 24px;" }, [
                E("button", {
                    textContent: "Upload file",
                    onclick: () => displayFilePicker(callback),
                }),
                E("p", { id: "filename", textContent: state.filename }),
            ]),
        ]);
    }

    function calcAvg(nums) {
        return nums.reduce((a, b) => a + b, 0) / nums.length;
    }

    function calcStd(nums, avg) {
        return Math.sqrt(nums.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b, 0) / nums.length);
    }

    function computeConfidenceIntervals(data, numSolves) {
        return data.map(session => {
            const times = session
                .solves
                .slice(session.solves.length - numSolves) // take last n solves
                .map(solve => solve.timeInMs / 1000);

            const avg = calcAvg(times);
            const std = calcStd(times, avg);

            const upperBound = z => avg + z * std / Math.sqrt(times.length);

            const eighty = upperBound(1.282);
            const ninety = upperBound(1.645);
            const ninetyFive = upperBound(1.96);
            const ninetyNine = upperBound(2.576);

            return {
                name: session.sessionName,
                eighty: eighty.toFixed(2),
                ninety: ninety.toFixed(2),
                ninetyFive: ninetyFive.toFixed(2),
                ninetyNine: ninetyNine.toFixed(2),
            };
        });
    }

    function renderConfidenceData() {
        const confidenceIntervals = computeConfidenceIntervals(state.data, state.numSolves);

        const div = document.querySelector("#confidence-data-div");
        div.innerHTML = "";
        div.appendChild(E("table", { style: "margin-top: 32px;" }, [
            E("thead", {}, [
                E("tr", {}, [
                    E("th", { textContent: "Session" }),
                    E("th", { textContent: "80%" }),
                    E("th", { textContent: "90%" }),
                    E("th", { textContent: "95%" }),
                    E("th", { textContent: "99%" }),
                ]),
            ]),
            E("tbody", {}, confidenceIntervals.map(interval => E("tr", {}, [
                E("td", { textContent: interval.name }),
                E("td", { textContent: interval.eighty }),
                E("td", { textContent: interval.ninety }),
                E("td", { textContent: interval.ninetyFive }),
                E("td", { textContent: interval.ninetyNine }),
            ]))),
        ]));
    }

    const uploadBox = document.querySelector("#upload-timer-data");
    uploadBox.appendChild(renderUploadBox(
        data => {
            state.data = data;
            document.querySelector("#filename").textContent = state.filename;
            renderConfidenceData();
        }),
    );

    const numSolvesInput = document.querySelector("#num-solves-input");
    numSolvesInput.value = 100;
    numSolvesInput.onchange = event => {
        state.numSolves = event.target.value;
        renderConfidenceData();
    }
</script>

<?php include "php/gtag.php" ?>

</html>