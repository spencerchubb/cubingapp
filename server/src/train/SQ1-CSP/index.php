<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>SQ1 CSP Trainer</title>
</head>

<?php
include_once "../style.php";
?>

<style>
#leftArrow {
  width: 0; 
  height: 0; 
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent; 
  border-right: 18px solid var(--gray-300);
  cursor: pointer;

  &:hover {
    border-right-color: var(--gray-400);
  }
}

#rightArrow {
  width: 0; 
  height: 0; 
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 18px solid var(--gray-300);
  cursor: pointer;
  
  &:hover {
    border-left-color: var(--gray-400);
  }
}

#nameText {
    font-size: 15px;
    color: var(--gray-300);
}

#scrambleText {
    margin-top: 16px;
    font-size: 20px;
    line-height: 28px;
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
$subsets = ["1 Slash", "2 Slashes", "3 Slashes", "4 Slashes", "5 Slashes", "6 Slashes", "7 Slashes"];
?>

<main style="overflow-y: auto; padding: 0;">
    <div style="padding: 16px 16px 0 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div id="leftArrow"></div>
            <p id="nameText">&nbsp;</p>
            <div id="rightArrow"></div>
        </div>
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

const algSet = {"puzzle":"SQ1","subsets":["1 Slash","2 Slashes","3 Slashes","4 Slashes","5 Slashes","6 Slashes","7 Slashes"],"before":"() => randElement([\"1,0 / 3,3 / 6,-3 / -1,0\", \"0,-1 / -3,3 / 3,6 / 0,1\", \"1,0 / -,3 / 3,6 / -1,0\", \"0,-1 / -3,6 / 3,-3 / 0,1\"])","after":"() => randElement([\"0,0\", \"6,0\", \"0,6\", \"6,6\"])","texts":["\"Cubeshape Parity, as the name suggests, involves fixing parity errors on the Square-1 during the cubeshape step. The main advantage to this method is that checking for parity occurs during inspection, which isn't factored into your final time.\" - <a href='http://brandonlin.com/cubing/csp.html' class='link'>Brandon Lin</a>"],"cases":{"Left 4-2 / Paired Edges (Odd)":{"algs":{"0,-2 / -2,0 / -1,-2 / -3,-3 /":{}},"subset":"4 Slashes"},"Left 4-2 / Paired Edges (Even)":{"algs":{"-2,-4 / 2,-2 / 0,-1 / 3,3 /":{}},"subset":"4 Slashes"},"Right 4-2 / Paired Edges (Odd)":{"algs":{"2,-4 / -2,2 / 0,1 / 3,3 /":{}},"subset":"4 Slashes"},"Right 4-2 / Paired Edges (Even)":{"algs":{"0,6 / 2,0 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"4-1-1 / Paired Edges (Odd)":{"algs":{"0,-2 / -4,0 / -1,4 / -3,0 /":{}},"subset":"4 Slashes"},"4-1-1 / Paired Edges (Even)":{"algs":{"2,2 / 0,4 / 4,-1 / -3,0 / -1,1":{}},"subset":"4 Slashes"},"3-3 / Paired Edges (Odd)":{"algs":{"-1,4 / 0,2 / -3,0 / -2,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"3-3 / Paired Edges (Even)":{"algs":{"-1,0 / 0,-2 / 3,0 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"3-1-2 / Paired Edges (Odd)":{"algs":{"0,-2 / 0,-5 / 3,-2 / -2,-1 / 0,-3 / -1,1":{},"3,0 / 0,-4 / 0,-2 / 4,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"3-1-2 / Paired Edges (Even)":{"algs":{"-3,2 / 2,0 / 0,-2 / 0,1 / 0,3 /":{}},"subset":"5 Slashes"},"3-2-1 / Paired Edges (Odd)":{"algs":{"3,0 / 5,0 / -3,2 / -2,-1 / 0,-3 / -1,1":{},"/ 4,0 / 0,2 / 4,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"3-2-1 / Paired Edges (Even)":{"algs":{"0,2 / -2,0 / 0,2 / 0,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Scallop / Shield (Odd)":{"algs":{"4,-4 / 0,-2 / 2,0 / -2,-1 / 3,3 /":{}},"subset":"5 Slashes"},"Scallop / Shield (Even)":{"algs":{"2,0 / 0,2 / -2,0 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Scallop / Left Fist (Odd)":{"algs":{"-2,-2 / 2,-3 / -2,3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Scallop / Left Fist (Even)":{"algs":{"-4,0 / 0,3 / 2,-3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Scallop / Right Fist (Odd)":{"algs":{"2,2 / 3,-2 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Scallop / Right Fist (Even)":{"algs":{"4,0 / -3,0 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Shield / Left Fist (Odd)":{"algs":{"-2,3 / 0,1 / -2,0 / 4,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Shield / Left Fist (Even)":{"algs":{"-2,3 / -2,-1 / 2,0 / -1,4 / -3,0 /":{}},"subset":"5 Slashes"},"Shield / Right Fist (Odd)":{"algs":{"-2,3 / 2,1 / -2,0 / 4,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Shield / Right Fist (Even)":{"algs":{"-2,3 / 0,-1 / 2,0 / -1,4 / -3,0 /":{}},"subset":"5 Slashes"},"6 / Paired Edges (Odd)":{"algs":{"2,0 / 0,4 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"6 / Paired Edges (Even)":{"algs":{"0,-2 / -4,0 / -1,-2 / -3,-3 /":{}},"subset":"4 Slashes"},"Left 5-1 / Paired Edges (Odd)":{"algs":{"3,2 / 3,0 / 2,-2 / 0,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Left 5-1 / Paired Edges (Even)":{"algs":{"3,2 / 3,-2 / 2,1 / 0,3 /":{}},"subset":"4 Slashes"},"Right 5-1 / Paired Edges (Odd)":{"algs":{"3,2 / -3,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"4 Slashes"},"Right 5-1 / Paired Edges (Even)":{"algs":{"3,2 / -3,0 / -2,2 / 0,-2 / 2,1 / 0,3 /":{}},"subset":"6 Slashes"},"Left Fist / Right Fist (Odd)":{"algs":{"0,3 / 0,3 /":{}},"subset":"2 Slashes"},"Left Fist / Right Fist (Even)":{"algs":{"-2,-4 / 2,-2 / -2,2 / -4,1 / 3,0 /":{}},"subset":"5 Slashes"},"Left 4-2 / Perpendicular Edges (Odd)":{"algs":{"0,2 / -3,2 / -3,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Left 4-2 / Perpendicular Edges (Even)":{"algs":{"2,0 / 3,0 / 3,-2 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"Right 4-2 / Perpendicular Edges (Odd)":{"algs":{"-2,2 / -3,0 / -3,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Right 4-2 / Perpendicular Edges (Even)":{"algs":{"/ 3,-2 / 3,-2 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"4-1-1 / Perpendicular Edges (Odd)":{"algs":{"3,2 / 0,-2 / 2,1 / 0,3 /":{}},"subset":"4 Slashes"},"4-1-1 / Perpendicular Edges (Even)":{"algs":{"5,0 / 0,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"4 Slashes"},"Muffin / Right Fist (Odd)":{"algs":{"1,0 / 0,4 / 1,2 / 0,-2 / -1,4 / -3,0 /":{},"1,-4 / 1,-2 / 2,1 / 2,-2 / 1,0 / -3,-3 /":{},"1,2 / 1,-2 / 2,-3 / 3,-2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Muffin / Right Fist (Even)":{"algs":{"1,0 / 0,4 / -1,0 / 0,2 / 4,-1 / 0,-3 / -1,1":{},"1,-4 / 1,-2 / 0,-1 / 0,2 / -1,-2 / -3,-3 /":{},"1,2 / -3,2 / 3,0 / -3,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Muffin / Left Fist (Odd)":{"algs":{"/ -4,0 / 1,0 / -2,0 / -4,1 / 3,0 /":{},"0,4 / 2,-1 / 0,1 / -2,0 / -2,-1 / 3,3 /":{},"0,-2 / -2,3 / -3,0 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Muffin / Left Fist (Even)":{"algs":{"/ -4,0 / -1,-2 / 2,0 / 4,-1 / -3,0 / -1,1":{},"0,4 / 2,-1 / -2,-1 / 2,-2 / -1,0 / -3,-3 /":{},"0,-2 / 2,-1 / -2,3 / 2,-3 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Kite / Right Fist (Odd)":{"algs":{"0,2 / 0,2 / 3,-2 / 0,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Kite / Right Fist (Even)":{"algs":{"0,2 / 0,2 / 1,0 / 0,-2 / 2,1 / 0,3 /":{}},"subset":"6 Slashes"},"Kite / Left Fist (Odd)":{"algs":{"0,-2 / -2,0 / -3,2 / -2,0 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Kite / Left Fist (Even)":{"algs":{"0,-2 / -2,0 / -1,0 / 2,0 / -2,-1 / -3,0 / -1,1":{}},"subset":"6 Slashes"},"Barrel / Right Fist (Odd)":{"algs":{"2,-3 / 0,2 / 0,1 / 0,-2 / -2,-1 / 3,3 /":{}},"subset":"6 Slashes"},"Barrel / Right Fist (Even)":{"algs":{"2,-3 / 0,2 / -2,-1 / -2,2 / -1,0 / -3,-3 /":{}},"subset":"6 Slashes"},"Barrel / Left Fist (Odd)":{"algs":{"-2,-3 / 0,-2 / 0,-1 / 0,2 / -1,-2 / -3,-3 /":{}},"subset":"6 Slashes"},"Barrel / Left Fist (Even)":{"algs":{"-2,-3 / 0,-2 / 2,1 / 2,-2 / 1,0 / -3,-3 /":{}},"subset":"6 Slashes"},"6 / Perpendicular Edges (Odd)":{"algs":{"2,-4 / -2,-3 / -3,2 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"6 / Perpendicular Edges (Even)":{"algs":{"/ 3,2 / 3,-2 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"Scallop / Right Pawn (Odd)":{"algs":{"0,4 / -1,-2 / -3,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Scallop / Right Pawn (Even)":{"algs":{"-4,0 / 2,3 / 2,-3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Scallop / Left Pawn (Odd)":{"algs":{"4,0 / -3,-2 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Scallop / Left Pawn (Even)":{"algs":{"0,-4 / 2,1 / 3,-2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Scallop / Muffin (Odd)":{"algs":{"2,0 / 0,-2 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Scallop / Muffin (Even)":{"algs":{"-2,1 / 2,0 / 2,-3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Left Pawn / Shield (Odd)":{"algs":{"2,-2 / 0,-2 / 1,0 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Left Pawn / Shield (Even)":{"algs":{"2,-4 / 1,0 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Right Pawn / Shield (Odd)":{"algs":{"4,-2 / 0,2 / -1,0 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"6 Slashes"},"Right Pawn / Shield (Even)":{"algs":{"4,0 / -1,0 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Right Pawn / Right Fist (Odd)":{"algs":{"-2,2 / 0,2 / -2,0 / 4,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Right Pawn / Right Fist (Even)":{"algs":{"-2,2 / -2,0 / 2,0 / -1,4 / -3,0 /":{}},"subset":"5 Slashes"},"Left Pawn / Left Fist (Odd)":{"algs":{"2,-2 / 0,2 / -2,0 / -4,1 / 3,0 /":{}},"subset":"5 Slashes"},"Left Pawn / Left Fist (Even)":{"algs":{"2,-2 / -2,0 / 2,0 / 4,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Shield / Kite (Odd)":{"algs":{"4,0 / 0,-2 / 2,0 / 0,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Shield / Kite (Even)":{"algs":{"-2,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1":{}},"subset":"5 Slashes"},"Shield / Barrel (Odd)":{"algs":{"-2,2 / 0,2 / -2,0 / -2,-1 / 3,3 /":{}},"subset":"5 Slashes"},"Shield / Barrel (Even)":{"algs":{"-2,-2 / 0,-2 / 2,0 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Left 5-1 / Perpendicular Edges (Odd)":{"algs":{"0,-4 / -4,0 / -1,-2 / -3,0 /":{}},"subset":"4 Slashes"},"Left 5-1 / Perpendicular Edges (Even)":{"algs":{"0,2 / -2,4 / -2,0 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Right 5-1 / Perpendicular Edges (Odd)":{"algs":{"/ 0,4 / -2,-1 / 0,-3 / -1,1":{}},"subset":"4 Slashes"},"Right 5-1 / Perpendicular Edges (Even)":{"algs":{"6,0 / 2,4 / 2,0 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"3-3 / Perpendicular Edges (Odd)":{"algs":{"0,2 / 0,-2 / -1,4 / -3,0 /":{}},"subset":"4 Slashes"},"3-3 / Perpendicular Edges (Even)":{"algs":{"-2,0 / 0,2 / 4,-1 / 0,-3 / -1,1":{}},"subset":"4 Slashes"},"3-1-2 / Perpendicular Edges (Odd)":{"algs":{"4,0 / 0,2 / 0,-1 / 0,-3 / -1,1":{}},"subset":"4 Slashes"},"3-1-2 / Perpendicular Edges (Even)":{"algs":{"-2,2 / 0,-4 / -2,0 / 0,1 / 3,0 /":{}},"subset":"5 Slashes"},"3-2-1 / Perpendicular Edges (Odd)":{"algs":{"-1,-4 / -2,0 / 0,1 / 3,0 /":{}},"subset":"4 Slashes"},"3-2-1 / Perpendicular Edges (Even)":{"algs":{"-1,0 / 0,4 / 2,0 / 0,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Scallop / Barrel (Odd)":{"algs":{"4,2 / -4,0 / 2,0 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Scallop / Barrel (Even)":{"algs":{"/ 4,0 / -1,0 / -3,-3 /":{}},"subset":"4 Slashes"},"Right Pawn / Left Fist (Odd)":{"algs":{"/ 0,1 / -1,0 / -3,0 /":{}},"subset":"4 Slashes"},"Right Pawn / Left Fist (Even)":{"algs":{"-2,-2 / 4,0 / -4,0 / 4,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Left Pawn / Right Fist (Odd)":{"algs":{"/ -1,0 / 1,0 / 0,3 / -1,1":{}},"subset":"4 Slashes"},"Left Pawn / Right Fist (Even)":{"algs":{"2,2 / 0,-4 / 4,0 / 4,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Shield / Muffin (Odd)":{"algs":{"0,6 / 0,-3 / -1,-2 / -3,0 /":{}},"subset":"4 Slashes"},"Shield / Muffin (Even)":{"algs":{"-2,1 / 4,0 / 2,0 / 0,-3 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Scallop / Kite (Odd)":{"algs":{"/ -1,-2 / -3,0 /":{}},"subset":"3 Slashes"},"Scallop / Kite (Even)":{"algs":{"2,0 / 2,-2 / 2,0 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Right Fist / Right Fist (Odd)":{"algs":{"0,-4 / -4,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1":{}},"subset":"6 Slashes"},"Right Fist / Right Fist (Even)":{"algs":{"2,6 / 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /":{}},"subset":"6 Slashes"},"Left Fist / Left Fist (Odd)":{"algs":{"6,-2 / 4,0 / -2,0 / 2,0 / -1,0 / -3,0 /":{}},"subset":"6 Slashes"},"Left Fist / Left Fist (Even)":{"algs":{"4,0 / -2,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1":{}},"subset":"6 Slashes"},"Scallop / Scallop (Odd)":{"algs":{"/ -1,-2 / -3,-3 /":{}},"subset":"3 Slashes"},"Scallop / Scallop (Even)":{"algs":{"2,-2 / -2,2 / -1,-2 / -3,-3 /":{}},"subset":"4 Slashes"},"Shield / Shield (Odd)":{"algs":{"/ -1,0 / -3,-3 /":{}},"subset":"3 Slashes"},"Shield / Shield (Even)":{"algs":{"4,-2 / -4,2 / -1,0 / -3,-3 /":{}},"subset":"4 Slashes"},"Muffin / Kite (Odd)":{"algs":{"0,3 / 2,1 / 0,-2 / 2,0 / -1,-2 / -3,-3 /":{}},"subset":"6 Slashes"},"Muffin / Kite (Even)":{"algs":{"0,3 / 2,-1 / 0,2 / -2,0 / -2,-1 / 3,3 /":{}},"subset":"6 Slashes"},"Muffin / Barrel (Odd)":{"algs":{"0,-2 / -2,0 / 0,2 / 2,-3 / -2,-1 / -3,0 / -1,1":{},"1,0 / 3,-2 / 2,0 / 0,-2 / 1,0 / 0,3 / -1,1":{}},"subset":"6 Slashes"},"Muffin / Barrel (Even)":{"algs":{"0,-2 / 2,-1 / -2,0 / -2,3 / -2,-1 / -3,0 / -1,1":{},"/ 2,-3 / -2,0 / 2,0 / -1,0 / -3,0 /":{}},"subset":"6 Slashes"},"4-1-1 / Parallel Edges (Odd)":{"algs":{"-3,0 / -3,2 / 0,-4 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"4-1-1 / Parallel Edges (Even)":{"algs":{"-1,0 / 3,-2 / 0,4 / -2,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Right Pawn / Muffin (Odd)":{"algs":{"-2,1 / 2,1 / -2,2 / 1,0 / -3,-3 /":{}},"subset":"5 Slashes"},"Right Pawn / Muffin (Even)":{"algs":{"-2,1 / 0,-1 / 2,0 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Left Pawn / Muffin (Odd)":{"algs":{"2,0 / -1,-2 / 2,-2 / 0,-1 / 3,3 /":{}},"subset":"5 Slashes"},"Left Pawn / Muffin (Even)":{"algs":{"2,0 / 1,0 / -2,0 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Right Pawn / Kite (Odd)":{"algs":{"4,0 / -1,-2 / 2,0 / -2,-1 / -3,0 / -1,1":{},"-2,3 / -2,-1 / 2,0 / -1,-2 / -3,-3":{}},"subset":"5 Slashes"},"Right Pawn / Kite (Even)":{"algs":{"-2,0 / 0,1 / 2,0 / -1,0 / -3,0 /":{},"4,0 / -3,0 / -2,0 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Left Pawn / Kite (Odd)":{"algs":{"-4,0 / 2,1 / -2,0 / -2,-1 / -3,0 / -1,1":{},"2,-3 / 1,2 / -2,0 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Left Pawn / Kite (Even)":{"algs":{"2,0 / -1,0 / -2,0 / 0,1 / 3,0 /":{},"-4,0 / 0,3 / 2,0 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Right Pawn / Barrel (Odd)":{"algs":{"-2,-2 / 2,-1 / 2,-3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Right Pawn / Barrel (Even)":{"algs":{"0,2 / 2,0 / 3,-2 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"6 Slashes"},"Left Pawn / Barrel (Odd)":{"algs":{"2,2 / 1,-2 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Left Pawn / Barrel (Even)":{"algs":{"0,-2 / 0,-2 / -3,2 / 3,-2 / 2,1 / 0,3 /":{}},"subset":"6 Slashes"},"Left 4-2 / Parallel Edges (Odd)":{"algs":{"-4,0 / 3,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"4 Slashes"},"Left 4-2 / Parallel Edges (Even)":{"algs":{"/ 0,-4 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Right 4-2 / Parallel Edges (Odd)":{"algs":{"/ 0,4 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Right 4-2 / Parallel Edges (Even)":{"algs":{"4,0 / -3,-2 / 2,1 / 0,3 /":{}},"subset":"4 Slashes"},"Left Pawn / Right Pawn (Odd)":{"algs":{"2,-2 / -2,2 / -4,1 / 3,0 /":{}},"subset":"4 Slashes"},"Left Pawn / Right Pawn (Even)":{"algs":{"/ -4,1 / 3,0 /":{}},"subset":"3 Slashes"},"Kite / Barrel (Odd)":{"algs":{"/ 4,2 / -2,2 / -2,2 / 4,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Kite / Barrel (Even)":{"algs":{"/ 0,3 / 0,3 /":{}},"subset":"3 Slashes"},"Left Fist / Square (Odd)":{"algs":{"-2,0 / 0,4 / -1,-2 / 0,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Left Fist / Square (Even)":{"algs":{"-2,0 / 0,-2 / 0,1 / 0,2 / -1,0 / 0,-3 /":{}},"subset":"6 Slashes"},"Right Fist / Square (Odd)":{"algs":{"2,1 / 2,0 / 0,-1 / -2,0 / 1,0 / 3,0 / -1,1":{}},"subset":"6 Slashes"},"Right Fist / Square (Even)":{"algs":{"2,1 / -4,0 / 1,2 / -2,0 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"6 / Parallel Edges (Odd)":{"algs":{"/ 0,-4 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"6 / Parallel Edges (Even)":{"algs":{"-4,0 / 0,4 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Left 5-1 / Parallel Edges (Odd)":{"algs":{"/ 3,0 / 0,4 / -2,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Left 5-1 / Parallel Edges (Even)":{"algs":{"-4,0 / -1,4 / 2,-2 / 0,-1 / 3,3 /":{}},"subset":"5 Slashes"},"Right 5-1 / Parallel Edges (Odd)":{"algs":{"-2,0 / 1,-4 / -2,2 / 0,1 / 3,3 /":{}},"subset":"5 Slashes"},"Right 5-1 / Parallel Edges (Even)":{"algs":{"6,0 / -3,0 / 0,-4 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"3-3 / Parallel Edges (Odd)":{"algs":{"-2,0 / 1,0 / -1,0 / 0,2 / -2,-1 / 3,3 /":{}},"subset":"6 Slashes"},"3-3 / Parallel Edges (Even)":{"algs":{"/ -1,0 / 1,0 / 0,-2 / -1,-2 / -3,-3":{}},"subset":"5 Slashes"},"3-1-2 / Parallel Edges (Odd)":{"algs":{"3,0 / 0,2 / 1,0 / -3,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"3-1-2 / Parallel Edges (Even)":{"algs":{"6,0 / 1,-4 / -2,0 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"3-2-1 / Parallel Edges (Odd)":{"algs":{"6,0 / 0,-2 / -1,0 / 3,1 / 0,3 /":{}},"subset":"5 Slashes"},"3-2-1 / Parallel Edges (Even)":{"algs":{"3,0 / -1,4 / 2,0 / -2,-1 / 3,3":{}},"subset":"4 Slashes"},"Scallop / Square (Odd)":{"algs":{"2,1 / 0,2 / -2,0 / -1,-2 / -3,0 /":{},"-4,1 / 2,0 / -2,0 / -2,-2 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Scallop / Square (Even)":{"algs":{"-2,0 / -2,0 / 2,0 / -1,-2 / -3,0 /":{},"4,0 / 0,-2 / 2,0 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"2-2-2 / Paired Edges (Odd)":{"algs":{"-2,0 / 0,2 / 0,-1 / 3,3 /":{}},"subset":"4 Slashes"},"2-2-2 / Paired Edges (Even)":{"algs":{"0,-2 / -2,0 / 0,1 / 3,3 /":{}},"subset":"4 Slashes"},"Shield / Square (Odd)":{"algs":{"0,1 / -1,0 / -3,0 /":{}},"subset":"3 Slashes"},"Shield / Square (Even)":{"algs":{"0,1 / 0,-4 / -2,2 / -2,2 / 4,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Kite / Square (Odd)":{"algs":{"3,0 / 1,0 / -2,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1":{}},"subset":"7 Slashes"},"Kite / Square (Even)":{"algs":{"3,1 / -1,0 / 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /":{}},"subset":"7 Slashes"},"7-1 / Star (Odd)":{"algs":{"0,2 / 0,-2 / -1,-2 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"6 Slashes"},"7-1 / Star (Even)":{"algs":{"/ 0,-2 / -1,-2 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"6 Slashes"},"5-3 / Star (Odd)":{"algs":{"1,2 / 4,0 / 1,0 / 3,-2 / 2,1 / 0,3 /":{},"-4,2 / 2,-2 / -3,-2 / -2,3 / -1,-2 / -3,0 /":{},"-5,0 / 0,4 / 1,0 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"5-3 / Star (Even)":{"algs":{"1,0 / 4,0 / 1,0 / 3,-2 / 2,1 / 0,3 /":{},"-4,0 / 2,-2 / -3,-2 / -2,3 / -1,-2 / -3,0 /":{},"-5,2 / 0,4 / 1,0 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"2-2-2 / Perpendicular Edges (Odd)":{"algs":{"/ -1,0 / 2,0 / 0,-2 / 0,1 / 0,3 /":{}},"subset":"6 Slashes"},"2-2-2 / Perpendicular Edges (Even)":{"algs":{"0,2 / 1,0 / -2,0 / 0,2 / 0,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Barrel / Square (Odd)":{"algs":{"0,1 / 2,0 / 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /":{}},"subset":"7 Slashes"},"Barrel / Square (Even)":{"algs":{"/ -2,0 / -2,0 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1":{}},"subset":"7 Slashes"},"Right Pawn / Right Pawn (Odd)":{"algs":{"-2,-2 / 0,1 / 2,2 / -1,0 / -3,-3 /":{}},"subset":"5 Slashes"},"Right Pawn / Right Pawn (Even)":{"algs":{"-2,-2 / 0,-1 / 2,2 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Left Pawn / Left Pawn (Odd)":{"algs":{"2,2 / -1,0 / -2,-2 / 0,1 / 3,3 /":{}},"subset":"5 Slashes"},"Left Pawn / Left Pawn (Even)":{"algs":{"2,2 / 1,0 / -2,-2 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Right Pawn / Square (Odd)":{"algs":{"-2,1 / 0,-1 / 2,0 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Right Pawn / Square (Even)":{"algs":{"-2,1 / 2,-3 / -2,0 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Left Pawn / Square (Odd)":{"algs":{"2,0 / 1,0 / -2,0 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Left Pawn / Square (Even)":{"algs":{"2,0 / 3,-2 / 2,0 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"8 / Star (Odd)":{"algs":{"/ 2,4 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"8 / Star (Even)":{"algs":{"0,2 / 2,4 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"6-2 / Star (Odd)":{"algs":{"/ 2,4 / 4,-1 / -3,0 / -1,1":{}},"subset":"4 Slashes"},"6-2 / Star (Even)":{"algs":{"0,2 / 2,4 / 4,-1 / -3,0 / -1,1":{}},"subset":"4 Slashes"},"Muffin / Muffin (Odd)":{"algs":{"6,0 / 1,0 / 2,-2 / -2,2 / -1,-2 / -3,-3 /":{}},"subset":"6 Slashes"},"Muffin / Muffin (Even)":{"algs":{"6,0 / 0,-2 / -3,-3 /":{}},"subset":"3 Slashes"},"Muffin / Square (Odd)":{"algs":{"/ -2,0 / -3,0 / -1,1":{}},"subset":"3 Slashes"},"Muffin / Square (Even)":{"algs":{"1,1 / 5,0 / -2,2 / 2,-2 / 4,-1 / -3,0 / -1,1":{}},"subset":"6 Slashes"},"Barrel / Barrel (Odd)":{"algs":{"-3,0 / -3,-3 /":{}},"subset":"2 Slashes"},"Barrel / Barrel (Even)":{"algs":{"-2,2 / 2,-2 / -2,2 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Kite / Kite (Odd)":{"algs":{"-3,3 / -2,-1 / 2,-2 / -2,2 / -1,-2 / -3,-3 /":{}},"subset":"6 Slashes"},"Kite / Kite (Even)":{"algs":{"0,6 /":{}},"subset":"1 Slash"},"4-4 / Star (Odd)":{"algs":{"/ -2,-2 / 0,1 / 3,3 /":{},"-2,2 / 2,2 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"4-4 / Star (Even)":{"algs":{"0,2 / -2,-2 / 0,1 / 3,3 /":{},"-2,0 / 2,2 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"2-2-2 / Parallel Edges (Odd)":{"algs":{"-2,0 / 3,0 / 0,2 / 0,-2 / 0,1 / 0,3 /":{}},"subset":"6 Slashes"},"2-2-2 / Parallel Edges (Even)":{"algs":{"-2,0 / -3,0 / 0,-2 / 0,2 / 0,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Square / Square (Odd)":{"algs":{"/ 3,3 / 1,2 / 2,-2 / -2,2 / -1,-2 / -3,-3 /":{}},"subset":"7 Slashes"}}};
const before = () => randElement(["1,0 / 3,3 / 6,-3 / -1,0", "0,-1 / -3,3 / 3,6 / 0,1", "1,0 / -,3 / 3,6 / -1,0", "0,-1 / -3,6 / 3,-3 / 0,1"]);
const after = () => randElement(["0,0", "6,0", "0,6", "6,6"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
