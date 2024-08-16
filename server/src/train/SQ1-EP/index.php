<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>SQ1 EP Trainer</title>
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
$subsets = ["Bottom Solved", "Top Opp", "Top Adj", "Top Ua", "Top Ub", "Top H", "Top Z", "Top Solved"];
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

const algSet = {"puzzle":"SQ1","subsets":["Bottom Solved","Top Opp","Top Adj","Top Ua","Top Ub","Top H","Top Z","Top Solved"],"before":"() => randElement([\"0,0\", \"6,0\", \"0,6\", \"6,6\"])","after":"() => randElement([\"0,0\", \"6,0\", \"0,6\", \"6,6\"])","texts":["EP stands for Edge Permutation. This algorithm set is for permuting the edges of the Square-1."],"cases":{"Opp & Solved":{"algs":{"/ 3,3 / -1,0 / 2,-4 / 4,-2 / 0,-2 / -4,2 / 1,-5 / 3,0 / 3,3 / 3,0":{}},"subset":"Bottom Solved"},"O+ & Solved":{"algs":{"0,-1 / -2,-2 / 2,0 / -3,-3 / 0,1 / -2,-2 / 0,-2 / 2,2 / 0,-1 / 3,3 / 3,3":{}},"subset":"Bottom Solved"},"O- & Solved":{"algs":{"/ -3,-3 / 0,1 / -2,-2 / 0,2 / 2,2 / 0,-1 / 3,3 / -2,0 / 2,2 / -3,-2":{}},"subset":"Bottom Solved"},"W & Solved":{"algs":{"0,-1 / 1,-2 / -4,0 / 0,3 / 1,0 / 3,-2 / -4,0 / -4,0 / -2,2 / -1,0 / 0,-3 / -3,0":{}},"subset":"Bottom Solved"},"Opp & Opp":{"algs":{"1,0 / 5,-1 / -5,1 / -1,0":{}},"subset":"Top Opp"},"Opp & Adj":{"algs":{"0,-1 / 0,-3 / 0,3 / 1,-2 / -1,-1 / 0,3 / 0,-3 / 0,3 / 0,1":{}},"subset":"Top Opp"},"Opp & Z":{"algs":{"/ -3,-3 / 0,-1 / -4,2 / 4,-2 / -4,0 / -2,-2 / -3,0 / -3,-3 / -3,0":{}},"subset":"Top Opp"},"Opp & H":{"algs":{"/ -3,-3 / 0,-1 / -4,2 / 4,-2 / 0,-2 / -3,-3 / 0,3 / -3,-3 / 0,-3":{}},"subset":"Top Opp"},"Opp & Ub":{"algs":{"/ 0,-3 / 0,3 / 0,-3 / -3,0 / 0,-1 / -2,0 / 0,-4 / 4,0 / 0,-2 / -5,0 / -3,-3 / 3,0":{}},"subset":"Top Opp"},"Adj & Solved":{"algs":{"/ -3,0 / 0,3 / 0,-3 / 0,3 / 2,0 / 0,2 / -2,0 / 4,0 / 0,-2 / 0,2 / -1,4 / 0,-3 / 0,3":{}},"subset":"Top Adj"},"Adj & Adj":{"algs":{"-2,0 / 0,3 / -1,-1 / 1,-2 / 2,0":{}},"subset":"Top Adj"},"Adj & Opp":{"algs":{"1,0 / -1,0 / -3,0 / 0,-1 / 6,0 / 1,0 / 3,0 / 0,1 / 5,0":{}},"subset":"Top Adj"},"Adj & Z":{"algs":{"/ 0,3 / -3,-3 / 0,-3 / 0,-1 / -4,2 / 4,-2 / -3,1 / -3,0 / 3,3 / 0,3":{}},"subset":"Top Adj"},"Adj & H":{"algs":{"/ 0,3 / -3,-3 / 0,-3 / 0,-1 / -4,2 / 4,-2 / -4,0 / -2,1 / 3,3 / 0,3":{}},"subset":"Top Adj"},"Adj & Ua":{"algs":{"/ 3,3 / 5,0 / -2,0 / -4,0 / -4,0 / 0,-4 / 0,-2 / 0,1 / 3,3 / -3,0":{}},"subset":"Top Adj"},"Adj & Ub":{"algs":{"/ -3,-3 / 0,-1 / 0,2 / 0,4 / 4,0 / 4,0 / 2,0 / -5,0 / -3,-3 / 3,0":{}},"subset":"Top Adj"},"Ua & Solved":{"algs":{"1,0 / -3,0 / -1,0 / 0,3 / 1,0 / 3,0 / -1,0 / 0,-3 /":{}},"subset":"Top Ua"},"Ua & Ua":{"algs":{"-2,-0 / 5,-1 / -2,1 / -1,-1 / 3,0 / -2,1 / -1,-1 / -2,1 / -1,0":{}},"subset":"Top Ua"},"Ua & Ub":{"algs":{"1,0 / 3,0 / -1,-1 / 3,0 / -5,1 / -1,0":{}},"subset":"Top Ua"},"Ua & Adj":{"algs":{"/ -3,-3 / 0,-5 / 0,2 / 0,4 / 0,4 / 4,0 / 2,0 / -1,0 / -3,-3 / 0,3":{}},"subset":"Top Ua"},"Ua & Opp":{"algs":{"/ 3,3 / 5,0 / 0,2 / -4,0 / 0,4 / 2,0 / 0,1 / 3,0 / 0,3 / 0,-3 / 0,3 / -3,0":{}},"subset":"Top Ua"},"Ub & Opp":{"algs":{"/ -3,-3 / 0,-5 / -2,0 / 0,4 / -4,0 / 0,-2 / -1,0 / 0,-3 / -3,0 / 3,0 / -3,0 / 0,3":{},"/ 3,0 / -3,0 / 3,0 / 0,3 / 1,0 / 0,2 / 4,0 / 0,-4 / 2,0 / 0,5 / 3,3 / 0,-3":{}},"subset":"Top Ub"},"Ub & Solved":{"algs":{"/ 0,3 / 1,0 / -3,0 / -1,0 / 0,-3 / 1,0 / 3,0 / -1,0":{}},"subset":"Top Ub"},"Ub & Ua":{"algs":{"1,0 / 5,-1 / -2,1 / -1,-1 / -2,1 / -1,0":{}},"subset":"Top Ub"},"Ub & Ub":{"algs":{"-2,0 / 3,0 / -1,-1 / 3,0 / -2,1 / -1,-1 / 3,0 / -5,1 / -1,0":{}},"subset":"Top Ub"},"Ub & Adj":{"algs":{"/ 3,3 / 1,0 / -2,0 / -4,0 / 0,-4 / 0,-4 / 0,-2 / 0,5 / 3,3 / 0,-3":{}},"subset":"Top Ub"},"H & H":{"algs":{"/ 3,-3 / -3,3 / 1,-1 / 3,-3 / -3,3 / -1,1":{}},"subset":"Top H"},"H & Solved":{"algs":{"/ 3,-3 / 3,-3 / 0,1 / -3,3 / -3,3 / -1,0":{}},"subset":"Top H"},"H & Adj":{"algs":{"/ -3,0 / 3,3 / 3,0 / 1,0 / -2,4 / 2,-4 / 0,4 / -1,2 / -3,-3 / -3,0":{}},"subset":"Top H"},"H & Opp":{"algs":{"/ -3,-3 / 3,0 / -3,-3 / -2,0 / -2,4 / 2,-4 / -1,0 / -3,-3 / -3,0":{}},"subset":"Top H"},"Z & Z":{"algs":{"-2,0 / 0,3 / -1,-1 / 4,-2 / -1,-1 / -2,1 / -1,0":{}},"subset":"Top Z"},"Z & Adj":{"algs":{"/ -3,0 / 3,3 / 3,0 / 1,0 / -2,4 / 2,-4 / -1,3 / 0,3 / -3,-3 / -3,0":{}},"subset":"Top Z"},"Z & Solved":{"algs":{"1,0 / -1,-1 / -3,0 / 1,1 / 3,0 / -1,-1 / 0,1":{}},"subset":"Top Z"},"Z & Opp":{"algs":{"/ -3,-3 / 0,-3 / -2,-2 / 2,0 / -2,4 / -4,2 / -1,0 / -3,-3 / -3,0":{}},"subset":"Top Z"},"Solved & Adj":{"algs":{"/ 0,3 / -3,0 / 3,0 / -3,0 / 0,-2 / -2,0 / 0,2 / 0,-4 / 2,0 / -2,0 / -4,1 / 3,0 / -3,0":{}},"subset":"Top Solved"},"Solved & Opp":{"algs":{"/ -3,-3 / 0,-1 / 2,2 / 0,2 / -2,-2 / 2,0 / 1,1 / -3,0 / 3,3 / 0,-1 / -2,-2 / 2,0":{}},"subset":"Top Solved"},"Solved & Ua":{"algs":{"0,-1 / 3,0 / 0,1 / 0,-3 / 0,-1 / -3,0 / 0,1 / 0,3 /":{}},"subset":"Top Solved"},"Solved & Ub":{"algs":{"/ 0,-3 / 0,-1 / 3,0 / 0,1 / 0,3 / 0,-1 / -3,0 / 0,1":{}},"subset":"Top Solved"},"Solved & Z":{"algs":{"0,-1 / 1,1 / 0,3 / -1,-1 / 0,-3 / 1,1 / -1,0":{}},"subset":"Top Solved"},"Solved & H":{"algs":{"/ 3,-3 / 3,-3 / -1,0 / -3,3 / -3,3 / 0,1":{}},"subset":"Top Solved"}}};
const before = () => randElement(["0,0", "6,0", "0,6", "6,6"]);
const after = () => randElement(["0,0", "6,0", "0,6", "6,6"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
