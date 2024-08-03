<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>SQ1 Cube Shape Trainer</title>
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

const algSet = {"puzzle":"SQ1","before":"() => randElement([\"1,0 / 3,3 / 6,-3 / -1,0\", \"0,-1 / -3,3 / 3,6 / 0,1\", \"1,0 / -,3 / 3,6 / -1,0\", \"0,-1 / -3,6 / 3,-3 / 0,1\"])","after":"() => randElement([\"0,0\", \"6,0\", \"0,6\", \"6,6\"])","texts":["There are a variety of methods for solving the Square-1, but the first step is always Cube Shape (sometimes abbreviated as SQ1 CS). The goal of this step is to make the puzzle shaped like a cube."],"cases":{"Kite & Kite":{"algs":{"/":{}}},"Barrel & Barrel":{"algs":{"/ 3,3 /":{},"/ -3,-3 /":{}}},"Left Fist & Right Fist":{"algs":{"/ 3,0 / -1,1":{},"/ -3,0 / -1,1":{}}},"Right Fist & Left Fist":{"algs":{"/ 3,0 /":{},"/ -3,0 /":{}}},"Square & Shield":{"algs":{"/ 0,1 / 0,3 /":{}}},"Shield & Square":{"algs":{"/ -1,0 / -3,0 /":{}}},"Muffin & Square":{"algs":{"/ 2,0 / 3,0 /":{}}},"Square & Muffin":{"algs":{"/ 0,-2 / 0,-3 /":{}}},"Left Pawn & Right Pawn":{"algs":{"/ -1,4 / -3,0 /":{}}},"Right Pawn & Left Pawn":{"algs":{"/ -4,1 / 3,0 /":{}}},"Scallop & Scallop":{"algs":{"/ 1,2 / -3,-3 /":{},"/ -2,-1 / 3,3 /":{}}},"Kite & Scallop":{"algs":{"/ 2,1 / 0,3 /":{}}},"Barrel & Kite":{"algs":{"/ -3,0 / -3,0 /":{}}},"Muffin & Muffin":{"algs":{"/ -2,0 / 3,3 /":{}}},"Shield & Shield":{"algs":{"/ 1,0 / -3,-3 /":{}}},"Kite & Barrel":{"algs":{"/ 0,3 / 0,3 /":{}}},"Scallop & Kite":{"algs":{"/ -1,-2 / -3,0 /":{}}},"Pair & 4-2 Right":{"algs":{"/ -2,0 / 1,2 / -3,-3 /":{}}},"Pair & 2-2-2":{"algs":{"/ 0,2 / -1,0 / -3,-3 /":{}}},"4-2 Left & Pair":{"algs":{"/ 2,0 / -2,-1 / 3,3 /":{}}},"2-2-2 & Pair":{"algs":{"/ -2,0 / 0,1 / 3,3 /":{}}},"Pair & 4-1-1":{"algs":{"/ -4,0 / 4,-1 / -3,0 / -1,1":{}}},"4-1-1 & Pair":{"algs":{"/ 0,4 / 4,-1 / -3,0 / -1,1":{}}},"Pair & 5-1 Left":{"algs":{"/ -2,3 / -2,-1 / -3,0  / -1,1":{}}},"5-1 Left & Pair":{"algs":{"/ -3,2 / -2,-1 / 0,-3 / -1,1":{}}},"8 Edges & Star":{"algs":{"/ 2,4 / -2,-1 / 3,3 /":{}}},"5-1 Right & Pair":{"algs":{"/ 3,-2 / -1,-2 / 0,-3 /":{}}},"Pair & 5-1 Right":{"algs":{"/ -2,3 / -2,-1 / -3,0 / -1,1":{}}},"Pair & 4-2 Left":{"algs":{"/ 0,2 / 2,1 / 3,3 /":{}}},"4-2 Right & Pair":{"algs":{"/ 0,4 / 1,0 / -3,-3 /":{}}},"Shield & Muffin":{"algs":{"/ 0,-3 / 2,1 / 3,0 /":{}}},"Star & 6-2":{"algs":{"/ 2,4 / -4,1 / 0,3 /":{}}},"6-2 & Star":{"algs":{"/ -4,-2 / -1,4 / -3,0 /":{}}},"Right Pawn & Right Pawn":{"algs":{"/ -1,2 / 2,2 / 0,-1 / 3,3 /":{}}},"Left Fist & Right Pawn":{"algs":{"/ -1,0 / 0,1 / 0,3 /":{}}},"Left Pawn & Right Fist":{"algs":{"/ 4,0 / -1,0 / -3,0 /":{}}},"Right Fist & Left Pawn":{"algs":{"/ 0,-4 / 0,1 / 0,3 /":{}}},"Star & 8 Edges":{"algs":{"/ -4,-2 / 1,2 / -3,-3 /":{}}},"Right Pawn & Left Fist":{"algs":{"/ 0,1 / -1,0 / -3,0 /":{}}},"Pair & 6":{"algs":{"/ -4,0 / -2,-1 / 3,3 /":{}}},"6 & Pair":{"algs":{"/ 0,4 / 1,2 / -3,-3 /":{}}},"Muffin & Shield":{"algs":{"/ 3,0 / -1,-2 / 0,-3 /":{}}},"5-1 Left & Arrow":{"algs":{"/ 0,4 / 1,2 / 0,3 / -1,1":{}}},"5-1 Right & Arrow":{"algs":{"/ 0,-4 / 2,1 / 0,3 /":{}}},"3-2-1 Right & Arrow":{"algs":{"/ -1,-2 / 0,1 / 0,3 /":{}}},"Scallop & Barrel":{"algs":{"/ 4,0 / -1,0 / -3,-3 /":{}}},"Barrel & Scallop":{"algs":{"/ 0,-4 / 0,1 / 3,3 /":{}}},"Star & 4-4":{"algs":{"/ -2,-2 / 1,0 / -3,-3 /":{}}},"Crown & 4-2 Right":{"algs":{"/ -3,-2 / 1,2 / 0,3 / -1,1":{}}},"Crown & 4-2 Left":{"algs":{"/ 0,-4 / 3,-2 / -1,-2 / 0,-3 /":{}}},"4-2 Left & Crown":{"algs":{"/ 2,3 / -2,-1 / -3,0 /":{}}},"4-4 & Star":{"algs":{"/ 2,2 / 0,-1 / 3,3 /":{}}},"Arrow & 5-1 Right":{"algs":{"/ -4,0 / -2,-1 / -3,0 / -1,1":{}}},"Arrow & 5-1 Left":{"algs":{"/ 4,0 / -1,-2 / -3,0 /":{}}},"Arrow & 3-2-1 Right":{"algs":{"/ 2,0 / -1,0 / -3,0 /":{}}},"3-3 & Arrow":{"algs":{"/ 0,-2 / -1,4 / -3,0 /":{}}},"4-2 Right & Crown":{"algs":{"/ -2,-3 / -1,-2 / -3,0 /":{}}},"Arrow & 3-2-1 Left":{"algs":{"/ 2,1 / -1,0 / -3,0 /":{}}},"3-2-1 Left & Arrow":{"algs":{"/ 0,-2 / 0,1 / 0,3 /":{}}},"Arrow & 3-3":{"algs":{"/ -2,0 / -5,2 / 0,3 / -1,1":{}}},"4-1-1 & Arrow":{"algs":{"/ 2,0 / -1,-2 / -3,0 /":{}}},"Arrow & 4-1-1":{"algs":{"/ 0,-2 / 2,1 / 0,3 /":{}}},"Kite & Right Pawn":{"algs":{"/ -1,0 / 0,-2 / 0,1 / 0,3 /":{}}},"Scallop & Right Fist":{"algs":{"/ 0,1 / -4,0 / 4,-1 / -3,0 / -1,1":{}}},"Left Pawn & Scallop":{"algs":{"/ 3,2 / -3,2 / 1,2 / 0,3 / -1,1":{}}},"Shield & Left Fist":{"algs":{"/ 0,1 / -2,0 / -2,5 / -3,0 / -1,1":{}}},"Kite & Left Pawn":{"algs":{"/ 1,0 / -1,-2 / 0,1 / 0,3 /":{}}},"Scallop & Left Pawn":{"algs":{"/ -2,-3 / -2,3 / -2,-1 / -3,0 / -1,1":{}}},"Right Pawn & Scallop":{"algs":{"/ -3,-2 / 3,-2 / -1,-2 / 0,-3 /":{}}},"Right Fist & Scallop":{"algs":{"/ -1,0 / 0,4 / 1,-4 / 0,3 / -1,1":{}}},"Right Pawn & Kite":{"algs":{"/ 0,-1 / 2,1 / -1,0 / -3,0 /":{}}},"Scallop & Left Fist":{"algs":{"/ 0,-1 / 4,0 / -4,1 / 3,0 /":{}}},"Shield & Kite":{"algs":{"/ 0,-2 / -1,-2 / 0,1 / 0,3 /":{}}},"Left Fist & Scallop":{"algs":{"/ 1,0 / 0,-4 / -1,4 / 0,-3 /":{}}},"Muffin & Scallop":{"algs":{"/ 0,2 / -3,4 / 1,2 / 0,3 / -1,1":{}}},"Kite & Shield":{"algs":{"/ -2,0 / 2,0 / -1,0 / -3,0 /":{}}},"Scallop & Muffin":{"algs":{"/ -2,0 / -4,3 / -2,-1 / -3,0 / -1,1":{}}},"Scallop & Right Pawn":{"algs":{"/ 2,3 / 2,-3 / 2,1 / 3,0 /":{}}},"Barrel & Left Pawn":{"algs":{"/ 1,-2 / -3,4 / 1,2 / 0,3 / -1,1":{}}},"Left Pawn & Barrel":{"algs":{"/ 2,-1 / -4,3 / -2,-1 / -3,0 / -1,1":{}}},"Square & Scallop":{"algs":{"/ 0,-2 / 0,4 / -2,-1 / 0,-3 / -1,1":{}}},"Barrel & Right Pawn":{"algs":{"/ 1,-2 / 4,-3 / -2,-1 / -3,0 / -1,1":{}}},"Shield & Barrel":{"algs":{"/ -2,0 / 2,0 / -1,0 / -3,-3 /":{}}},"Barrel & Shield":{"algs":{"/ 0,2 / 0,-2 / 0,1 / 3,3 /":{}}},"Left Pawn & Kite":{"algs":{"/ 0,1 / 2,0 / -1,0 / -3,0 /":{}}},"Square & Left Pawn":{"algs":{"/ 3,-2 / 0,2 / 1,2 / 0,3 / -1,1":{}}},"Right Pawn & Barrel":{"algs":{"/ 2,-1 / 3,-4 / 1,2 / 0,3 / -1,1":{}}},"Left Pawn & Square":{"algs":{"/ 2,-3 / -2,0 / -2,-1 / -3,0 / -1,1":{}}},"Square & Right Pawn":{"algs":{"1,0 / 0,-1 / 0,2 / 2,1 / 0,3 /":{}}},"Right Pawn & Square":{"algs":{"0,-1 / 1,0 / -2,0 / -1,-2 / -3,0 /":{}}},"Scallop & Shield":{"algs":{"/ -2,0 / 4,0 / 2,1 / 3,3 /":{}}},"Scallop & Square":{"algs":{"/ 2,0 / -4,0 / 1,2 / 3,0 / -1,1":{}}},"4-1-1 & Crown":{"algs":{"/ 3,-2 / 0,4 / 1,2 / 0,3 / -1,1":{}}},"Left Pawn & Shield":{"algs":{"/ 0,-1 / 2,-3 / -1,-2 / -3,0 /":{}}},"4-2 Right & Arrow":{"algs":{"/ -4,3 / -3,2 / -1,-2 / 0,-3 /":{}}},"Arrow & 4-2 Right":{"algs":{"/ -4,3 / -3,2 / -1,-2 / 0,-3 /":{}}},"4-2 Left & Arrow":{"algs":{"/ -3,4 / -2,3 / -1,-2 / -3,0 /":{}}},"Arrow & 4-2 Left":{"algs":{"/ 0,-3 / -4,3 / -2,-1 / -3,0 / -1,1":{}}},"6 & Arrow":{"algs":{"/ -3,-4 / -2,3 / -1,-2 / -3,0 /":{}}},"Arrow & 6":{"algs":{"/ -3,-2 / 2,-3 / -2,-1 / -3,0 / -1,1":{}}},"3-2-1 Right & Pair":{"algs":{"/ 0,-5 / -3,4 / -1,-2 / 0,-3 /":{}}},"3-2-1 Left & Pair":{"algs":{"/ 0,5 / -3,2 / -1,-2 / 0,-3 /":{}}},"Crown & 5-1 Right":{"algs":{"/ 0,3 / 4,0 / -1,-2 / -3,0 /":{}}},"5-1 Right & Crown":{"algs":{"/ 3,0 / 0,4 / 1,2 / 0,3 / -1,1":{}}},"Crown & 5-1 Left":{"algs":{"/ -4,1 / 0,-4 / 0,-1 / 3,3 /":{}}},"Crown & 4-1-1":{"algs":{"/ -2,3 / 4,0 / -1,-2 / -3,0 /":{}}},"Crown & 6":{"algs":{"/ 3,2 / 2,4 / 1,2 / -3,-3 /":{}}},"3-2-1 Left & Crown":{"algs":{"/ 4,0 / 2,-3 / -1,-2 / -3,0 /":{}}},"Crown & 3-2-1 Left":{"algs":{"/ -3,-2 / 1,2 / 0,3 / -1,1":{}}},"3-2-1 Right & Crown":{"algs":{"/ 2,3 / -2,-1 / -3,0 / -1,1":{}}},"Crown & 3-2-1 Right":{"algs":{"/ 3,2 / -1,-2 / 0,-3 /":{}}},"3-3 & Crown":{"algs":{"/ -2,1 / -2,0 / 1,2 / -3,-3 /":{}}},"Crown & 3-3":{"algs":{"/ 1,-2 / 0,-2 / -1,-2 / -3,-3 /":{}}},"5-1 Left & Crown":{"algs":{"/ -3,0 / 0,-4 / -1,-2 / 0,-3 /":{}}},"Pair & 3-2-1 Left":{"algs":{"/ -5,0 / -2,3 / 2,1 / 3,0 /":{}}},"Pair & 3-2-1 Right":{"algs":{"0,2 / -2,2 / 0,-4 / 2,1 / 0,3 /":{}}},"Muffin & Right Pawn":{"algs":{"/ 0,-1 / 0,2 / 1,2 / -3,-3 /":{}}},"Left Fist & Shield":{"algs":{"/ -1,0 / 0,2 / -5,2 / 0,3 / -1,1":{}}},"Left Pawn & Muffin":{"algs":{"/ 1,0 / -2,0 / 2,1 / 3,3 /":{}}},"Muffin & Left Pawn":{"algs":{"/ 0,-1 / 0,2 / -1,-2 / -3,-3 /":{}}},"6 & Crown":{"algs":{"/ 3,2 / 2,4 / 1,2 / -3,-3 /":{}}},"Shield & Left Pawn":{"algs":{"/ 1,0 / 3,-2 / 2,1 / 0,3 /":{}}},"Right Pawn & Shield":{"algs":{"/ 1,0 / -2,3 / -1,-2 / -3,0 /":{}}},"Shield & Right Pawn":{"algs":{"/ 0,-1 / -3,2 / 2,1 / 0,3 /":{}}},"Right Fist & Shield":{"algs":{"/ -1,-2 / 0,2 / -5,2 / 0,3 / -1,1":{}}},"Right Pawn & Muffin":{"algs":{"/ -1,0 / 2,0 / -2,-1 / 3,3 /":{}}},"Shield & Right Fist":{"algs":{"/ -1,-2 / 0,2 / -5,2 / 0,3 / -1,1":{}}},"Left Fist & Left Pawn":{"algs":{"/ 0,2 / 0,-4 / 5,-2 / -3,0 /":{}}},"Right Pawn & Right Fist":{"algs":{"/ 0,2 / 0,1 / 0,3 /":{}}},"3-3 & Pair":{"algs":{"/ 0,-2 / 3,0 / -1,-2 / 0,-3 /":{}}},"Right Fist & Right Pawn":{"algs":{"/ -2,0 / -1,0 / -3,0 /":{}}},"Left Pawn & Left Fist":{"algs":{"/ -2,0 / 4,0 / 2,-5 / 0,3 /":{}}},"Pair & 3-3":{"algs":{"/ 2,0 / 0,-3 / 2,1 / 3,0 /":{}}},"Left Pawn & Left Pawn":{"algs":{"/ 1,0 / -2,-2 / -1,-2 / -3,-3 /":{}}},"Shield & Scallop":{"algs":{"/ 0,2 / 0,-4 / -1,-2 / -3,-3 /":{}}},"Barrel & Square":{"algs":{"/ 2,2 / -2,-1 / 2,2 / -1,0 / -3,-3 /":{}}},"Square & Right Fist":{"algs":{"1,0 / -1,0 / 0,-4 / 1,2 / 0,-2 / 2,1 / 0,3 /":{}}},"Kite & Right Fist":{"algs":{"/ 0,2 / 1,0 / 0,-2 / 2,1 / 0,3 /":{}}},"Observatory & Star":{"algs":{"1,0 / 0,-2 / -1,-2 /  2,-3 / -2,-1 / -3,0 / -1,1":{}}},"Square & Barrel":{"algs":{"/ 2,2 / -1,2 / 2,2 / 0,-1 / 3,3 /":{}}},"Star & 5-3":{"algs":{"0,3 / -4,0 / -2,-1 / -3,2 / 2,1 / 0,3 /":{}}},"5-3 & Star":{"algs":{"/ 0,4 / 1,2 / -2,3 / -1,-2 / -3,0 /":{}}},"Star & Observatory":{"algs":{"/ -2,0 / -2,-1 / -3,2 / -1,-2 / 0,-3 /":{}}},"Right Fist & Square":{"algs":{"0,-1 / 0,1 / 4,0 / -2,-1 / 2,0 / -1,-2 / -3,0 /":{}}},"Square & Left Fist":{"algs":{"/ 0,4 / -2,-1 / 0,2 / 2,1 / 0,3 /":{}}},"Left Fist & Square":{"algs":{"/ -4,0 / 1,2 / -2,0 / -1,-2 / -3,0 /":{}}},"Right Fist & Barrel":{"algs":{"/ -2,0 / -1,0 / 2,0 / 1,2 / -3,-3 /":{}}},"Left Fist & Left Fist":{"algs":{"/ 0,-2 / 0,2 / 0,-2 / 0,1 / 0,3 /":{}}},"Arrow & 2-2-2":{"algs":{"/ 0,-1 / 0,2 / 2,1 / -1,0 / -3,0 /":{}}},"Muffin & Left Fist":{"algs":{"/ 0,-4 / 1,0 / 0,-2 / -4,1 / 0,3 /":{}}},"Left Fist & Muffin":{"algs":{"/ 4,0 / 0,-1 / 2,0 / -1,4 / -3,0 /":{}}},"Muffin & Right Fist":{"algs":{"/ 0,-4 / 1,2 / 0,-2 / -4,1 / 0,3 /":{}}},"Right Fist & Muffin":{"algs":{"/ 4,0 / -2,-1 / 2,0 / -1,4 / -3,0 /":{}}},"Right Fist & Right Fist":{"algs":{"/ 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /":{}}},"2-2-2 & Crown":{"algs":{"/ 6,-3 / 2,0 / 2,1 / -1,0 / -3,0 /":{}}},"2-2-2 & Arrow":{"algs":{"/ -1,0 / 2,0 / 0,-2 / 0,1 / 0,3 /":{}}},"Barrel & Right Fist":{"algs":{"/ 0,2 / 0,1 / 0,-2 / -2,-1 / 3,3 /":{}}},"Left Fist & Barrel":{"algs":{"/ 2,0 / 1,0 / -2,0 / -1,-2 / -3,-3 /":{}}},"Kite & Muffin":{"algs":{"/ 3,2 / 0,-2 / 0,2 / 0,-1 / 3,3 /":{}}},"Muffin & Kite":{"algs":{"/ 2,3 / -2,0 / 2,0 / -1,0 / -3,-3 /":{}}},"Right Fist & Kite":{"algs":{"/ -2,0 / 0,-1 / 2,0 / -1,-2 / -3,0 /":{}}},"Kite & Left Fist":{"algs":{"/ 0,2 / 1,0 / 0,-2 / -1,-2 / 0,-3 /":{}}},"Left Fist & Kite":{"algs":{"/ -2,0 / 0,-1 / 2,0 / -1,-2 / -3,0 /":{}}},"Barrel & Muffin":{"algs":{"/ -3,-2 / 0,-2 / 0,2 / 0,-1 / 0,-3 / -1,1":{}}},"Muffin & Barrel":{"algs":{"/ 2,3 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1":{}}},"Barrel & Left Fist":{"algs":{"/ 0,-2 / 0,-1 / 0,2 / 2,1 / 3,3 /":{}}},"Crown & 2-2-2":{"algs":{"/ 0,3 / 2,0 / 2,1 / -1,0 / -3,0 /":{}}},"Kite & Square":{"algs":{"/ -1,0 / 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /":{}}},"Square & Kite":{"algs":{"/ 0,1 / 0,-2 / 0,2 / 0,-2 / 0,1 / 0,3 /":{}}},"Square & Square":{"algs":{"":{}}}}};
const before = () => randElement(["1,0 / 3,3 / 6,-3 / -1,0", "0,-1 / -3,3 / 3,6 / 0,1", "1,0 / -,3 / 3,6 / -1,0", "0,-1 / -3,6 / 3,-3 / 0,1"]);
const after = () => randElement(["0,0", "6,0", "0,6", "6,6"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
