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

    .output-card {
        width: 300px;
        font-size: 1.5rem;
        line-height: 2rem;
        border: solid 1px var(--gray-500);
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 2px 8px -2px var(--gray-500);
    }
</style>

<body style="width: 100%; height: 100%;">
    <?php include_once "../php/menu.php"; ?>

    <main class="col">
        <div class="col" style="width: 100%; max-width: 600px;">
            <h2 class="subheader">How do I know if I'm sub-X?</h2>
            <p class="bodytext">
                Have you ever wondered if you are sub-10, sub-15, sub-20, etc?
                Is 100 solves enough to know if you are sub-X?
            </p>
            <p class="bodytext">
                Some people say that you need 100, 500 or even 1000 solves to be sure.
                There is a better way to know if you are sub-X on the Rubik's Cube.
                This tool uses statistics to calculate confidence.
            </p>
            <div style="margin-top: 32px;"></div>
            <div id="upload-timer-data"></div>
            <p style="margin-top: 32px; font-weight: bold; align-self: center;">Number of Solves</p>
            <input
                style="margin-top: 8px; width: 250px;"
                id="num-solves-input"
                type="number"
                min="1"
            />
        </div>
        <div id="outputs" style="
            margin-top: 32px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;"></div>
        <div class="col" style="width: 100%; max-width: 600px;">
            <h2 class="subheader">How does this tool work?</h2>
            <p class="bodytext">
                This tool uses a statistical formula called 'confidence intervals' to determine how confident we are in determing your true average.
            <p>
            <p class="bodytext">
                In a Rubik's Cube solve, there is some variability.
                Sometimes you get lucky and get a good scramble, and sometimes you get a bad PLL case.
                This can make it difficult to know your true average.
            </p>
            <p class="bodytext">
                Confidence intervals tell us how confident we are that the true average is below a certain number.
                Due to the variability in solves, we can never be 100% confident.
            </p>
            <p class="bodytext">
                Including more solves in the calculation can make us more confident.
                However, most solvers improve over time, so we allow you to choose how many of your recent solves to include.
            </p>
            <p class="bodytext">
                I hope this tool helps you, since asking "Am I sub-X?" is one of the most common questions cubers have!
            </p>
        </div>
        <div style="margin-top: 64px;">
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

    import { parseTimerData } from "../js/timerData/index.js";

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
                E("li", { textContent: "Twisty Timer" }),
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

            const z = 1.64; // 95% of the standard normal distribution is below 1.64

            return {
                name: session.sessionName,
                upper: avg + z * std / Math.sqrt(times.length),
            };
        });
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return "NaN";
        if (seconds < 60) return seconds.toFixed(2);
        else if (seconds < 3600) {
            const minutes = Math.floor(seconds / 60);
            const secondsLeft = seconds % 60;
            return `${minutes}:${secondsLeft.toFixed(2).padStart(5, "0")}`;
        }
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secondsLeft = seconds % 60;
        return `${hours}:${minutes.toFixed(0).padStart(2, "0")}:${secondsLeft.toFixed(2).padStart(5, "0")}`;
    }

    function renderConfidenceData() {
        const confidenceIntervals = computeConfidenceIntervals(state.data, state.numSolves);
        console.log(confidenceIntervals)
        const div = document.querySelector("#outputs");
        div.innerHTML = "";
        confidenceIntervals.forEach(interval => {
            div.appendChild(E("p", { className: "output-card" }, [
                E("p", {
                    textContent: `${interval.name}: 95% confident your average is below ${formatTime(interval.upper)}`,
                })
            ]));
        });
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
    numSolvesInput.value = state.numSolves;
    numSolvesInput.onchange = event => {
        state.numSolves = event.target.value;
        renderConfidenceData();
    }
</script>

<?php include "../php/gtag.php" ?>

</html>