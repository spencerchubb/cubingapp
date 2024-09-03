<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>SQ1 CP Trainer</title>
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

#resetButton, #deleteLastButton {
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
$subsets = ["Top Adj", "Top Opp", "Top Solved"];
?>

<main style="overflow-y: auto; padding: 0;">
    <div style="padding: 16px 16px 0 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div id="leftArrow"></div>
            <p id="nameText">&nbsp;</p>
            <div id="rightArrow"></div>
        </div>
        <p id="scrambleText">&nbsp;</p>
        <div id="solutionExpandable" class="expandable" style="margin-top: 16px; border: solid 1px var(--gray-500);">
            <button id="solutionButton" class="expandableButton">
                <p>Solution</p>
                <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92"></path></svg>
            </button>
            <div id="solutionDiv" class="expandableChild" style="padding: 8px;"></div>
        </div>
        <div style="margin-top: 16px; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <p>Frequency:</p>
            <input type="number" id="frequencyInput" min="0" style="width: 80px;" />
            <button id="frequencyQuestionButton" style="background: none; border: solid 2px #888; border-radius: 50%; padding: 0; width: 32px; height: 32px; display: flex; justify-content: center; align-items: center;">?</button>
        </div>
    </div>

    <div id="subsetsDiv" style="margin-top: 16px;"></div>

    <div style="min-height: 80px;"></div>
</main>

</body>

<script>
function randElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

const algSet = {"puzzle":"SQ1","gray":[],"subsets":["Top Adj","Top Opp","Top Solved"],"before":"() => randElement([\"/ 3,-3 / -3,3 /\", \"/ -3,3 / 3,-3 /\", \"/ 0,-3 / 3,3 / -3,0 /\", \"/ -3,0 / 3,3 / 0,-3 /\"])","after":"() => randElement([\"0,0\", \"6,0\", \"0,6\", \"6,6\"])","texts":["CP stands for Corner Permutation. Before this step, you have to complete Cube Shape, Corner Orientation, and Edge Orientation."],"cases":{"Adj / Adj":{"algs":{"/ -3,0 / 3,3 / 0,-3 /":{}},"subset":"Top Adj"},"Adj / Opp":{"algs":{"/ 0,-3 / 0,3 / 0,-3 / 0,3 /":{}},"subset":"Top Adj"},"Adj / Solved":{"algs":{"/ 3,-3 / -3,0 / 0,3 / 0,-3 / 0,3 /":{}},"subset":"Top Adj"},"Opp / Opp":{"algs":{"/ 3,-3 / -3,3 / ":{}},"subset":"Top Opp"},"Opp / Adj":{"algs":{"/ -3,0 / 3,0 / -3,0 / 3,0 / ":{}},"subset":"Top Opp"},"Opp / Solved":{"algs":{"/ -3,-3 / -3,0 / -3,-3 / -3,0 / -3,-3 / ":{}},"subset":"Top Opp"},"Solved / Adj":{"algs":{"/ 3,-3 / 0,3 / -3,0 / 3,0 / -3,0 / ":{}},"subset":"Top Solved"},"Solved / Opp":{"algs":{"/ 3,3 / 0,3 / 3,3 / 0,3 / 3,3 / ":{}},"subset":"Top Solved"}}};
const before = () => randElement(["/ 3,-3 / -3,3 /", "/ -3,3 / 3,-3 /", "/ 0,-3 / 3,3 / -3,0 /", "/ -3,0 / 3,3 / 0,-3 /"]);
const after = () => randElement(["0,0", "6,0", "0,6", "6,6"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
