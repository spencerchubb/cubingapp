<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>2x2 EG2 Trainer</title>
</head>

<?php
include_once "../style.php";
?>

<style>
#scrambleText {
    font-size: 20px;
    text-align: center;
}

#time {
    margin-top: 16px;
    padding: 32px;
    width: 100%;
    border: solid 1px var(--gray-500);
    font-family: monospace;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    transition: none;
    background: transparent;

    &:hover {
        background: var(--gray-600);
    }
}

#resetButton, #deleteLastButton, #allButton, #noneButton {
    padding: 4px 8px;
    background: none;
    border: solid 1px var(--gray-500);

    &:hover {
        background: var(--gray-600);
    }
}
</style>

<body>
<?php
include_once "../../php/menu.php";
$subsets = ["AS", "H", "L", "Pi", "S", "T", "U"];
?>

<main style="overflow-y: auto; padding: 0;">
    <div style="padding: 16px 16px 0 16px;">
        <p id="scrambleText">&nbsp;</p>
        <button id="time">0.00</button>
        <div id="solutionExpandable" class="expandable" style="margin-top: 16px; border: solid 1px var(--gray-500);">
            <button class="expandableButton">
                <p>Solution</p>
                <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92"></path></svg>
            </button>
            <div id="solutionDiv" class="expandableChild" style="padding: 8px;"></div>
        </div>
        <div style="margin-top: 16px; display: flex; align-items: center; gap: 8px;">
            <p>times</p>
            <button id="resetButton">reset</button>
            <button id="deleteLastButton">delete last</button>
        </div>
    </div>

    <div style="margin-top: 16px; padding: 0 16px; display: flex; align-items: center; gap: 8px;">
        <p id="numCasesSelected" style="color: var(--gray-300);"></p>
        <div style="flex-grow: 1;"></div>
        <button id="allButton">all</button>
        <button id="noneButton">none</button>
    </div>

    <div id="subsetsDiv"></div>

    <div style="min-height: 80px;"></div>
</main>

</body>

<script>
function randElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

const algSet = {"puzzle":"2x2","diagramType":"2D","subsets":["AS","H","L","Pi","S","T","U"],"before":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["EG2 is commonly learned after EG1. CLL, EG1, and EG2 go hand in hand. These three algorithm sets will allow you to solve the entire cube after solving one face.","CLL: First layer is solved. This occurs 1/6th of the time<br> EG1: First layer has an adjacent swap. This occurs 4/6th of the time<br> EG2: First layer has a diagonal swap. This occurs 1/6th of the time"],"cases":{"EG2 AS 1":{"algs":{"F R2 U R' U2 R U R2 U F'":{},"U2 R' U2 R2 U' R' U R' F R F R2":{},"x U' R2 F R2 F' U R' U2 R' U x'":{},"R U2 R' F R' F' R U' R U' R F2 R2":{}},"subset":"AS"},"EG2 AS 2":{"algs":{"U2 R' F' R U' R' F2 R' F2 R2":{},"U2 L' U' L U' L' U2 L' F2 R2":{},"U R U2 R' U' R U' R B2 R2":{},"R' U' R U' R' U2 R' F2 R2":{}},"subset":"AS"},"EG2 AS 3":{"algs":{"U2 R' F R F' R U R B2 R2":{},"U2 R' F R F' R U R F2 R2":{},"U2 L' U L F' R U R B2 R2":{},"U2 L' U L F2 L2 F R U R'":{}},"subset":"AS"},"EG2 AS 4":{"algs":{"U2 F' L F L' U2 L' U2 L' B2 L2":{},"U' R' U R' F R2 F R2 F'":{},"U2 F' R U R' U2 R' F2 R' F2 R2":{},"U' R' U L' U R2 U R2 U'":{}},"subset":"AS"},"EG2 AS 5":{"algs":{"R' U' R U' R' U' R' F2 R F' R":{},"U2 F R F' U R2 F' R U' R":{},"U2 R U2 R' U2 R' F R F R2 F2":{}},"subset":"AS"},"EG2 AS 6":{"algs":{"U2 R2 F2 R F R F' R U R'":{},"R2 F2 R U L U' R U L'":{},"U2 L' U' L U L F' L' F L' U' L U' L' U2 L' B2 L2":{},"U R U R2 F' R F R U' R2 F R' F2 R2":{}},"subset":"AS"},"EG2 H 1":{"algs":{"R2 F U2 F2 R2 F' R2":{},"R U' R' F R' F' R2 U' R' F R' F' R' F2 R2":{},"U F R U R' U' R U R' U' R U R' U' F' R2 F2 R2 U'":{},"U F2 R U2 R2 F2 R' F2":{}},"subset":"H"},"EG2 H 2":{"algs":{"U R2 B2 U2 R' U2 R2":{},"U R2 U2 R' U2 B2 R2":{},"U R2 U2 R' U2 F2 R2":{}},"subset":"H"},"EG2 H 3":{"algs":{"R' U' R U2 R2 F' R U' F R":{},"U2 R U R' U R U R' F R' F' R' F2 R2":{},"U R' U' F R U' R U R' U2 R' F":{}},"subset":"H"},"EG2 H 4":{"algs":{"U' R U2 B2 R' U R U' B R'":{},"U2 F R2 U' R2 U' R2 U R2 F R2 F2":{},"U2 F R2 U' R2 U' R2 U R2 F B2 R2 F2 R2 U2":{},"U R U' R' F U2 R2 F' R F' R":{}},"subset":"H"},"EG2 L 1":{"algs":{"U L2 B2 L U' L' U L F' L F":{},"U R2 B2 R2 F R' F' R U R U' R'":{},"U R' U' R' F' R U' R U' R' F R":{},"U F U' R U R U' R' U R F'":{}},"subset":"L"},"EG2 L 2":{"algs":{"U2 F2 R2 F R U R' U' R' F R":{},"U2 R2 B2 R' U R U' R' F R' F'":{},"R U' R' U R U' R' F R' F' R2 U R B2 R2":{}},"subset":"L"},"EG2 L 3":{"algs":{"U2 R2 U' R U2 R' U2 R U' F2 R2":{},"U R' U' F2 R U2 R' U2 F R":{},"U2 R2 F2 R U R' U2 R U' R' U R U' R2":{},"U' R U R' U R U' R' U R U' R' U R U2 R B2 R2":{}},"subset":"L"},"EG2 L 4":{"algs":{"U' R' U L' U2 R' F R U' R' U' F' x2":{},"U R U2 R2 F R F' R U2 R B2 R2":{},"U' R' U' R U R' F' R U R' U' R' F' R2":{}},"subset":"L"},"EG2 L 5":{"algs":{"U F R' F' R U R U' R B2 R2":{},"U F R' F' R U R U' R F2 R2":{}},"subset":"L"},"EG2 L 6":{"algs":{"U2 F' R U R' U' R' F R' F2 R2":{},"R U R U' R' F R' F R2 B2":{},"U F R U' R' U' R U R' F R2 B2":{}},"subset":"L"},"EG2 Pi 1":{"algs":{"F U' R U2 R U' R' U R' F'":{},"U' R' U' R' F R F' R U' R' U2 R' F2 R2":{},"U' F2 U' F2 R U2 R F2 U' R2":{},"R' F' U' F U' R U R' U R' F2 R2 U'":{}},"subset":"Pi"},"EG2 Pi 2":{"algs":{"R U2 R2 U R' F2 R2 F'":{},"R U' R2 U R2 U R2 U' R' F2 R2":{},"R' U2 R2 U' R' F2 R2 F'":{},"R' U R2 U' R2 U' R2 U R B2 R2":{}},"subset":"Pi"},"EG2 Pi 3":{"algs":{"U F R2 U' R2 U R2 U R2 F R2 F2 U2":{},"U2 R' F' U R' F R2 U2 R' U R":{},"U' R U' R U' R' U R' F R2 F R2 F2":{},"U' R U' R U' R' U R' F R2 F' R2 F2 R2":{}},"subset":"Pi"},"EG2 Pi 4":{"algs":{"U2 R' F R F' R U' R' U' R U' R F2 R2":{},"U R U' F U' F' R F2 U2 R' U":{},"R U' R' F L' U L U R' F R' F2 R2":{},"R U' R' F R' F R U R' F R' F2 R2 U2":{}},"subset":"Pi"},"EG2 Pi 5":{"algs":{"U' R' F' R' F2 R2 U R' U2 R U":{},"U' R' F' R' F2 R2 U R' U2 R":{},"U F U R U' R' U R U' R2 F' R U R U' R F2 R2 U'":{},"U F R' F' R U2 R U' R' U R U2 R B2 R2":{}},"subset":"Pi"},"EG2 Pi 6":{"algs":{"U R' U2 R U' R2 F2 R F R U'":{},"U R' U2 R U' R2 F2 R F R":{},"R U2 R' U' R U R' U2 R' F R F' R2 F2 R2":{},"R U2 R' U' R U R' U2 R' F R F' R2 B2 R2":{}},"subset":"Pi"},"EG2 S 1":{"algs":{"U' F U' R2 U' R' U2 R U' R2 F' U'":{},"R2 F2 R U R U' R' F R' F' R2 U R' U' R":{},"U' R' F R2 F' U' R' U' R2 U R B2 R2":{},"U' R' F R2 F' U' R' U' R2 U R F2 R2":{}},"subset":"S"},"EG2 S 2":{"algs":{"U' R2 F2 R U2 R U R' U R":{},"R U R' U R U2 R B2 R2":{},"R2 B2 R' U R' U R U2 R'":{},"U' R' U2 R U R' U R' F2 R2":{}},"subset":"S"},"EG2 S 3":{"algs":{"R U' R' F R' F' R' F2 R2":{},"R U' R' F2 R2 F' L' U' L":{}},"subset":"S"},"EG2 S 4":{"algs":{"F R' F' R U2 R U2 R B2 R2":{},"U F R2 F' R2 F' R U' R":{}},"subset":"S"},"EG2 S 5":{"algs":{"R' U R' F R2 U' F R' F'":{},"U2 R' F R' F2 R U R U R' U R":{},"R' U R' F R2 D' R U' R'":{},"R' F2 R U2 R U' R' F R2 F2 R2":{}},"subset":"S"},"EG2 S 6":{"algs":{"R2 B2 R' U' R' F R' F' R":{},"R2 F2 R' U' R' F R' F' R":{},"U2 R U' R U' R' U R' U' F R' F' R2 B2 R2":{},"R U R' U' R' F R F' R U R' U R U2 R B2 R2":{}},"subset":"S"},"EG2 T 1":{"algs":{"U R' F' R U R U' R' F' R2 B2 U":{},"U R' F' R U R U' R' F' R2 F2":{},"U' F R F' R U R' U' R B2 R2":{},"U' F R F' U' R' U' R' F2 R2":{}},"subset":"T"},"EG2 T 2":{"algs":{"U F R' U2 R' U' R U2 F'":{},"U' R U R' U' R' F R F' R2 F2 R2":{},"U F R' U2 R' U' R U2 F' U":{},"U x U' R' F R' F' R U R' U2 R2":{}},"subset":"T"},"EG2 T 3":{"algs":{"R' U R U2 R2 F' R U' R":{},"U R' U R' F U' R U R2":{},"R U2 R' U' R U' R2 U2 R U R' U R' F2 R2 U'":{},"U2 R' U R' U2 R U2 R' U R2 U' R B2 R2":{}},"subset":"T"},"EG2 T 4":{"algs":{"R2 F2 R U' F R' F' R U R":{},"U R U2 R2 F R F' R U' R' U R U2 R F2 R2 U":{},"U2 R2 B2 R2 F R U R' U' F'":{},"F2 R2 F U' R' F R F":{}},"subset":"T"},"EG2 T 5":{"algs":{"U' R' U2 R U' R' F R' F R F' R":{},"R' U R U2 R2 F R F' R' F2 R2":{},"U R' F2 R U' R' U R' F R U' R":{}},"subset":"T"},"EG2 T 6":{"algs":{"U R' U2 R' F2 R F2 R":{},"U R' U2 R' F2 R F2 R U":{},"U z' U' R2 U' R2 U R2 U R2 z":{},"U2 F R U R' U' R U' R' U' R U R' F' R2 B2 R2":{}},"subset":"T"},"EG2 U 1":{"algs":{"R2 U2 R U R' U F' R U' R":{},"U' F U' R U2 R U' R' U2 R' U' F'":{},"U' R' U R' F U' R U' R U2 R2":{},"U' R' U R' F U' R U' R' U2 R2":{}},"subset":"U"},"EG2 U 2":{"algs":{"U' F R U R' U' F R2 B2":{},"U' F R U R' U' F R2 B2 U'":{},"U F U R U' R' F R2 F2":{},"U' F R U R' U' F R2 F2":{}},"subset":"U"},"EG2 U 3":{"algs":{"R' F' U' R U2 R' U F R":{},"U2 R' U' R U R' F2 R U' R' U R":{},"R U R' U' R B2 R' U R U' R'":{},"U' F R' F' R U' R U' R' U2 R U' R F2 R2":{}},"subset":"U"},"EG2 U 4":{"algs":{"R' F' U' F U2 L' U2 R U' L":{},"U' R2 F2 R U R U2 R2 F R F' R":{},"F R U R' U' F R U R' U' F R U R F2 R2 U2":{},"U2 F R U R' U2 F' R U' R' F' R2 B2":{}},"subset":"U"},"EG2 U 5":{"algs":{"U2 R2 B2 R' U R' U' R' F R F'":{},"U2 R2 B2 R' U R' U' R' F R F' U2":{},"R' F R2 U' R' F R' F' R U R' F' R' F2 R2":{},"R' U R' F R F' R U2 R' U R' F2 R2":{}},"subset":"U"},"EG2 U 6":{"algs":{"U2 R2 F2 R F' R U L F' L' F":{},"U2 R2 B2 R2 F R F' R U R' U' R'":{},"R U' R2 F R F' R U R' U' R U R F2 R2":{},"U2 R2 F2 R F' R U R U' R' F U2":{}},"subset":"U"}}};
const before = () => randElement(["", "U", "U'", "U2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
