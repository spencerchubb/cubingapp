<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>4x4 PLL Parity Trainer</title>
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
$subsets = [];
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

const algSet = {"puzzle":"4x4","diagramType":"2D","texts":["When you are solving a 4x4, PLL parity can significantly slow down a solve. Luckily, there are some tricks you can use to minimize the damage without learning too mamny new algorithms.","Some algorithms in this set are similar to PLL algorithms you already know, except there is a parity algorithm mixed in. By doing the parity algorithm strategically, you can turn a slow PLL into a fast PLL."],"cases":{"OPP Parity":{"algs":{"2R2 U2 2R2 Uw2 2R2 Uw2":{}}},"Adj Parity":{"algs":{"R' U R U' 2R2 U2' 2R2 Uw2' 2R2 Uw2' U' R' U' R":{}}},"CwO":{"algs":{"M2 U M2 U M' U2 M2 U2 M' U 2L2 U2 2L2 Uw2 2L2 Uw2":{}}},"CcwO":{"algs":{"Uw2 2L2 Uw2 2L2 U2 3Rw' Rw2 R' U2 M2 U2 M' U M2 U M2":{}}},"W":{"algs":{"R' U R' U' R' U' R' U R U Rw2 U2 2R2 Uw2 2R2 Uw2":{}}},"Pj":{"algs":{"R U R' U' R' F R2 U' R' U' R U R' F' U' 2L2 U2 2L2 Uw2 2L2 Uw2":{}}},"Ba":{"algs":{"x' Rw2 U2 Rw2 Uw2 2R2 Uw2 F 3Rw U' R U2 L' U R'":{}}},"Bb":{"algs":{"U x Rw2 U2 Rw2 Uw2 2R2 Uw2 B 3Rw' U R' U2 L U' R":{}}},"Ca":{"algs":{"U2 Uw2 2R2 Uw2 2R2 U2 Rw2 F R U R U' R' F' R U2 R' U2 R":{}}},"Cb":{"algs":{"U R' U2 R U2 R' F R U R' U' R' F' Rw2 U2 2R2 Uw2 2R2 Uw2":{}}},"Da":{"algs":{"R' U L' U2 R U' 3Rw B Rw2 U2 Rw2 Uw2 2R2 Uw2 x'":{}}},"Db":{"algs":{"R U R' F' R U R' U' R' F R2 U' R' u2 2R2 u2 2R2 U2 2R2":{}}},"Ka":{"algs":{"U 3Lw' U R' D2 R U' R' D2 x' Rw2 U2 2R2 Uw2 2R2 Uw2":{}}},"Kb":{"algs":{"U' 3Rw U' L D2 L' U L D2 x' Lw2 U2 2L2 Uw2 2L2 Uw2":{}}},"M":{"algs":{"U2 Rw2 F2 U2 2R2 U R' U' R U R' D R D' R F2 U Rw2":{}}},"Pa":{"algs":{"R U R' F' R U R' U' R' F R2 U' R' U' 2R2 U2 2R2 u2 2R2 u2":{}}},"Pb":{"algs":{"2R2 U2 2R2 u2 2R2 u2 R U R' F' R U R' U' R' F R2 U' R'":{}}},"Diag C":{"algs":{"F R U' R' U' R U R' F' U' 2R2 U2 2R2 u2 2R2 u2 U' R U R' U' R' F R F'":{}}},"Q":{"algs":{"z Rw2 Uw2' R2' Uw2' F R U R' U' R U R' U' R U R' U' F' U2' R2 Uw2' Rw2' z'":{}}},"Sa":{"algs":{"F R U' R' U' R U R' F' R U R' U' R' F R F' U' 2R2 U2 2R2 u2 2R2 u2":{}}},"Sb":{"algs":{"F R U' R' U' R U R' F' R U R' U' R' F R F' 2R2 U2 2R2 u2 2R2 u2":{}}},"X":{"algs":{"Rw2 F2 U2 Rw2 F' U' R' U R U' R' U R U' R' U R F R2 U2 F2 Rw2":{}}}}};
const before = undefined;
const after = undefined;
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
