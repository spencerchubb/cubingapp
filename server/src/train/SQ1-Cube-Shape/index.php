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

const algSet = {"puzzle":"SQ1","subsets":["1 Slash","2 Slashes","3 Slashes","4 Slashes","5 Slashes","6 Slashes","7 Slashes"],"before":"() => randElement([\"1,0 / 3,3 / 6,-3 / -1,0\", \"0,-1 / -3,3 / 3,6 / 0,1\", \"1,0 / -,3 / 3,6 / -1,0\", \"0,-1 / -3,6 / 3,-3 / 0,1\"])","after":"() => randElement([\"0,0\", \"6,0\", \"0,6\", \"6,6\"])","texts":["There are a variety of methods for solving the Square-1, but the first step is always Cube Shape (sometimes abbreviated as SQ1 CS). The goal of this step is to make the puzzle shaped like a cube."],"cases":{"Kite / Kite":{"algs":{"/":{}},"subset":"1 Slash"},"Barrel / Barrel":{"algs":{"/ 3,3 /":{},"/ -3,-3 /":{}},"subset":"2 Slashes"},"Left Fist / Right Fist":{"algs":{"/ 3,0 / -1,1":{},"/ -3,0 / -1,1":{}},"subset":"2 Slashes"},"Right Fist / Left Fist":{"algs":{"/ 3,0 /":{},"/ -3,0 /":{}},"subset":"2 Slashes"},"Square / Shield":{"algs":{"/ 0,1 / 0,3 /":{}},"subset":"3 Slashes"},"Shield / Square":{"algs":{"/ -1,0 / -3,0 /":{}},"subset":"3 Slashes"},"Muffin / Square":{"algs":{"/ 2,0 / 3,0 /":{}},"subset":"3 Slashes"},"Square / Muffin":{"algs":{"/ 0,-2 / 0,-3 /":{}},"subset":"3 Slashes"},"Left Pawn / Right Pawn":{"algs":{"/ -1,4 / -3,0 /":{}},"subset":"3 Slashes"},"Right Pawn / Left Pawn":{"algs":{"/ -4,1 / 3,0 /":{}},"subset":"3 Slashes"},"Scallop / Scallop":{"algs":{"/ 1,2 / -3,-3 /":{},"/ -2,-1 / 3,3 /":{}},"subset":"3 Slashes"},"Kite / Scallop":{"algs":{"/ 2,1 / 0,3 /":{}},"subset":"3 Slashes"},"Barrel / Kite":{"algs":{"/ -3,0 / -3,0 /":{}},"subset":"3 Slashes"},"Muffin / Muffin":{"algs":{"/ -2,0 / 3,3 /":{}},"subset":"3 Slashes"},"Shield / Shield":{"algs":{"/ 1,0 / -3,-3 /":{}},"subset":"3 Slashes"},"Kite / Barrel":{"algs":{"/ 0,3 / 0,3 /":{}},"subset":"3 Slashes"},"Scallop / Kite":{"algs":{"/ -1,-2 / -3,0 /":{}},"subset":"3 Slashes"},"Pair / 4-2 Right":{"algs":{"/ -2,0 / 1,2 / -3,-3 /":{}},"subset":"4 Slashes"},"Pair / 2-2-2":{"algs":{"/ 0,2 / -1,0 / -3,-3 /":{}},"subset":"4 Slashes"},"4-2 Left / Pair":{"algs":{"/ 2,0 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"2-2-2 / Pair":{"algs":{"/ -2,0 / 0,1 / 3,3 /":{}},"subset":"4 Slashes"},"Pair / 4-1-1":{"algs":{"/ -4,0 / 4,-1 / -3,0 / -1,1":{}},"subset":"4 Slashes"},"4-1-1 / Pair":{"algs":{"/ 0,4 / 4,-1 / -3,0 / -1,1":{}},"subset":"4 Slashes"},"Pair / 5-1 Left":{"algs":{"/ -2,3 / -2,-1 / -3,0  / -1,1":{}},"subset":"4 Slashes"},"5-1 Left / Pair":{"algs":{"/ -3,2 / -2,-1 / 0,-3 / -1,1":{}},"subset":"4 Slashes"},"8 Edges / Star":{"algs":{"/ 2,4 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"5-1 Right / Pair":{"algs":{"/ 3,-2 / -1,-2 / 0,-3 /":{}},"subset":"4 Slashes"},"Pair / 5-1 Right":{"algs":{"/ -2,3 / -2,-1 / -3,0 / -1,1":{}},"subset":"4 Slashes"},"Pair / 4-2 Left":{"algs":{"/ 0,2 / 2,1 / 3,3 /":{}},"subset":"4 Slashes"},"4-2 Right / Pair":{"algs":{"/ 0,4 / 1,0 / -3,-3 /":{}},"subset":"4 Slashes"},"Shield / Muffin":{"algs":{"/ 0,-3 / 2,1 / 3,0 /":{}},"subset":"4 Slashes"},"Star / 6-2":{"algs":{"/ 2,4 / -4,1 / 0,3 /":{}},"subset":"4 Slashes"},"6-2 / Star":{"algs":{"/ -4,-2 / -1,4 / -3,0 /":{}},"subset":"4 Slashes"},"Right Pawn / Right Pawn":{"algs":{"/ -1,2 / 2,2 / 0,-1 / 3,3 /":{}},"subset":"5 Slashes"},"Left Fist / Right Pawn":{"algs":{"/ -1,0 / 0,1 / 0,3 /":{}},"subset":"4 Slashes"},"Left Pawn / Right Fist":{"algs":{"/ 4,0 / -1,0 / -3,0 /":{}},"subset":"4 Slashes"},"Right Fist / Left Pawn":{"algs":{"/ 0,-4 / 0,1 / 0,3 /":{}},"subset":"4 Slashes"},"Star / 8 Edges":{"algs":{"/ -4,-2 / 1,2 / -3,-3 /":{}},"subset":"4 Slashes"},"Right Pawn / Left Fist":{"algs":{"/ 0,1 / -1,0 / -3,0 /":{}},"subset":"4 Slashes"},"Pair / 6":{"algs":{"/ -4,0 / -2,-1 / 3,3 /":{}},"subset":"4 Slashes"},"6 / Pair":{"algs":{"/ 0,4 / 1,2 / -3,-3 /":{}},"subset":"4 Slashes"},"Muffin / Shield":{"algs":{"/ 3,0 / -1,-2 / 0,-3 /":{}},"subset":"4 Slashes"},"5-1 Left / Arrow":{"algs":{"/ 0,4 / 1,2 / 0,3 / -1,1":{}},"subset":"4 Slashes"},"5-1 Right / Arrow":{"algs":{"/ 0,-4 / 2,1 / 0,3 /":{}},"subset":"4 Slashes"},"3-2-1 Right / Arrow":{"algs":{"/ -1,-2 / 0,1 / 0,3 /":{}},"subset":"4 Slashes"},"Scallop / Barrel":{"algs":{"/ 4,0 / -1,0 / -3,-3 /":{}},"subset":"4 Slashes"},"Barrel / Scallop":{"algs":{"/ 0,-4 / 0,1 / 3,3 /":{}},"subset":"4 Slashes"},"Star / 4-4":{"algs":{"/ -2,-2 / 1,0 / -3,-3 /":{}},"subset":"4 Slashes"},"Crown / 4-2 Right":{"algs":{"/ -3,-2 / 1,2 / 0,3 / -1,1":{}},"subset":"4 Slashes"},"Crown / 4-2 Left":{"algs":{"/ 0,-4 / 3,-2 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"4-2 Left / Crown":{"algs":{"/ -2,-3 / -1,-2 / -3,0 /":{}},"subset":"4 Slashes"},"4-4 / Star":{"algs":{"/ 2,2 / 0,-1 / 3,3 /":{}},"subset":"4 Slashes"},"Arrow / 5-1 Right":{"algs":{"/ -4,0 / -2,-1 / -3,0 / -1,1":{}},"subset":"4 Slashes"},"Arrow / 5-1 Left":{"algs":{"/ 4,0 / -1,-2 / -3,0 /":{}},"subset":"4 Slashes"},"Arrow / 3-2-1 Right":{"algs":{"/ 2,0 / -1,0 / -3,0 /":{}},"subset":"4 Slashes"},"3-3 / Arrow":{"algs":{"/ 0,-2 / -1,4 / -3,0 /":{}},"subset":"4 Slashes"},"4-2 Right / Crown":{"algs":{"/ -2,-3 / -1,-2 / -3,0 /":{}},"subset":"4 Slashes"},"Arrow / 3-2-1 Left":{"algs":{"/ 2,1 / -1,0 / -3,0 /":{}},"subset":"4 Slashes"},"3-2-1 Left / Arrow":{"algs":{"/ 0,-2 / 0,1 / 0,3 /":{}},"subset":"4 Slashes"},"Arrow / 3-3":{"algs":{"/ -2,0 / -5,2 / 0,3 / -1,1":{}},"subset":"4 Slashes"},"Arrow / 4-1-1":{"algs":{"/ 2,0 / -1,-2 / -3,0 /":{}},"subset":"4 Slashes"},"4-1-1 / Arrow":{"algs":{"/ 0,-2 / 2,1 / 0,3 /":{}},"subset":"4 Slashes"},"Kite / Right Pawn":{"algs":{"/ -1,0 / 0,-2 / 0,1 / 0,3 /":{}},"subset":"5 Slashes"},"Scallop / Right Fist":{"algs":{"/ 0,1 / -4,0 / 4,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Left Pawn / Scallop":{"algs":{"/ 3,2 / -3,2 / 1,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Shield / Left Fist":{"algs":{"/ 0,1 / -2,0 / -2,5 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Kite / Left Pawn":{"algs":{"/ 1,0 / -1,-2 / 0,1 / 0,3 /":{}},"subset":"5 Slashes"},"Scallop / Left Pawn":{"algs":{"/ -2,-3 / -2,3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Right Pawn / Scallop":{"algs":{"/ -3,-2 / 3,-2 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"Right Fist / Scallop":{"algs":{"/ -1,0 / 0,4 / 1,-4 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Right Pawn / Kite":{"algs":{"/ 0,-1 / 2,1 / -1,0 / -3,0 /":{}},"subset":"5 Slashes"},"Scallop / Left Fist":{"algs":{"/ 0,-1 / 4,0 / -4,1 / 3,0 /":{}},"subset":"5 Slashes"},"Shield / Kite":{"algs":{"/ 0,-2 / -1,-2 / 0,1 / 0,3 /":{}},"subset":"5 Slashes"},"Left Fist / Scallop":{"algs":{"/ 1,0 / 0,-4 / -1,4 / 0,-3 /":{}},"subset":"5 Slashes"},"Muffin / Scallop":{"algs":{"/ 0,2 / -3,4 / 1,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Kite / Shield":{"algs":{"/ -2,0 / 2,0 / -1,0 / -3,0 /":{}},"subset":"5 Slashes"},"Scallop / Muffin":{"algs":{"/ -2,0 / -4,3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Scallop / Right Pawn":{"algs":{"/ 2,3 / 2,-3 / 2,1 / 3,0 /":{}},"subset":"5 Slashes"},"Barrel / Left Pawn":{"algs":{"/ 1,-2 / -3,4 / 1,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Left Pawn / Barrel":{"algs":{"/ 2,-1 / -4,3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Square / Scallop":{"algs":{"/ 0,-2 / 0,4 / -2,-1 / 0,-3 / -1,1":{}},"subset":"5 Slashes"},"Barrel / Right Pawn":{"algs":{"/ 1,-2 / 4,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Shield / Barrel":{"algs":{"/ -2,0 / 2,0 / -1,0 / -3,-3 /":{}},"subset":"5 Slashes"},"Barrel / Shield":{"algs":{"/ 0,2 / 0,-2 / 0,1 / 3,3 /":{}},"subset":"5 Slashes"},"Left Pawn / Kite":{"algs":{"/ 0,1 / 2,0 / -1,0 / -3,0 /":{}},"subset":"5 Slashes"},"Square / Left Pawn":{"algs":{"/ 3,-2 / 0,2 / 1,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Right Pawn / Barrel":{"algs":{"/ 2,-1 / 3,-4 / 1,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Left Pawn / Square":{"algs":{"/ 2,-3 / -2,0 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Square / Right Pawn":{"algs":{"1,0 / 0,-1 / 0,2 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"Right Pawn / Square":{"algs":{"0,-1 / 1,0 / -2,0 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Scallop / Shield":{"algs":{"/ -2,0 / 4,0 / 2,1 / 3,3 /":{}},"subset":"5 Slashes"},"Scallop / Square":{"algs":{"/ 2,0 / -4,0 / 1,2 / 3,0 / -1,1":{}},"subset":"5 Slashes"},"4-1-1 / Crown":{"algs":{"/ 3,-2 / 0,4 / 1,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Left Pawn / Shield":{"algs":{"/ 0,-1 / 2,-3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"4-2 Right / Arrow":{"algs":{"/ -4,3 / -3,2 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"Arrow / 4-2 Right":{"algs":{"/ -4,3 / -3,2 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"4-2 Left / Arrow":{"algs":{"/ -3,4 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Arrow / 4-2 Left":{"algs":{"/ 0,-3 / -4,3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"6 / Arrow":{"algs":{"/ -3,-4 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Arrow / 6":{"algs":{"/ -3,-2 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"3-2-1 Right / Pair":{"algs":{"/ 0,-5 / -3,4 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"3-2-1 Left / Pair":{"algs":{"/ 0,5 / -3,2 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"Crown / 5-1 Right":{"algs":{"/ 0,3 / 4,0 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"5-1 Right / Crown":{"algs":{"/ 3,0 / 0,4 / 1,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Crown / 5-1 Left":{"algs":{"/ -4,1 / 0,-4 / 0,-1 / 3,3 /":{}},"subset":"5 Slashes"},"Crown / 4-1-1":{"algs":{"/ -2,3 / 4,0 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Crown / 6":{"algs":{"/ 3,2 / 2,4 / 1,2 / -3,-3 /":{}},"subset":"5 Slashes"},"3-2-1 Left / Crown":{"algs":{"/ 4,-1 / 2,0 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Crown / 3-2-1 Left":{"algs":{"/ -1,4 / 0,2 / -2,-1 / -3,-3 / -1,1":{}},"subset":"5 Slashes"},"3-2-1 Right / Crown":{"algs":{"/ 0,-3 / -3,0 / 2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"5 Slashes"},"Crown / 3-2-1 Right":{"algs":{"/ -3,0 / 0,-3 / -3,2 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"3-3 / Crown":{"algs":{"/ -2,1 / -2,0 / 1,2 / -3,-3 /":{}},"subset":"5 Slashes"},"Crown / 3-3":{"algs":{"/ 1,-2 / 0,-2 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"5-1 Left / Crown":{"algs":{"/ -3,0 / 0,-4 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"Pair / 3-2-1 Left":{"algs":{"/ -5,0 / -2,3 / 2,1 / 3,0 /":{}},"subset":"5 Slashes"},"Pair / 3-2-1 Right":{"algs":{"0,2 / -2,2 / 0,-4 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"Muffin / Right Pawn":{"algs":{"/ 0,-1 / 0,2 / 1,2 / -3,-3 /":{}},"subset":"5 Slashes"},"Left Fist / Shield":{"algs":{"/ -1,0 / 0,2 / -5,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Left Pawn / Muffin":{"algs":{"/ 1,0 / -2,0 / 2,1 / 3,3 /":{}},"subset":"5 Slashes"},"Muffin / Left Pawn":{"algs":{"/ 0,-1 / 0,2 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"6 / Crown":{"algs":{"/ 3,2 / 2,4 / 1,2 / -3,-3 /":{}},"subset":"5 Slashes"},"Shield / Left Pawn":{"algs":{"/ 1,0 / 3,-2 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"Right Pawn / Shield":{"algs":{"/ 1,0 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Shield / Right Pawn":{"algs":{"/ 0,-1 / -3,2 / 2,1 / 0,3 /":{}},"subset":"5 Slashes"},"Right Fist / Shield":{"algs":{"/ -1,-2 / 0,2 / -5,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Right Pawn / Muffin":{"algs":{"/ -1,0 / 2,0 / -2,-1 / 3,3 /":{}},"subset":"5 Slashes"},"Shield / Right Fist":{"algs":{"/ -1,-2 / 0,2 / -5,2 / 0,3 / -1,1":{}},"subset":"5 Slashes"},"Left Fist / Left Pawn":{"algs":{"/ 0,2 / 0,-4 / 5,-2 / -3,0 /":{}},"subset":"5 Slashes"},"Right Pawn / Right Fist":{"algs":{"/ 0,2 / 0,1 / 0,3 /":{}},"subset":"4 Slashes"},"3-3 / Pair":{"algs":{"/ 0,-2 / 3,0 / -1,-2 / 0,-3 /":{}},"subset":"5 Slashes"},"Right Fist / Right Pawn":{"algs":{"/ -2,0 / -1,0 / -3,0 /":{}},"subset":"4 Slashes"},"Left Pawn / Left Fist":{"algs":{"/ -2,0 / 4,0 / 2,-5 / 0,3 /":{}},"subset":"5 Slashes"},"Pair / 3-3":{"algs":{"/ 2,0 / 0,-3 / 2,1 / 3,0 /":{}},"subset":"5 Slashes"},"Left Pawn / Left Pawn":{"algs":{"/ 1,0 / -2,-2 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Shield / Scallop":{"algs":{"/ 0,2 / 0,-4 / -1,-2 / -3,-3 /":{}},"subset":"5 Slashes"},"Barrel / Square":{"algs":{"/ 2,2 / -2,-1 / 2,2 / -1,0 / -3,-3 /":{}},"subset":"6 Slashes"},"Square / Right Fist":{"algs":{"1,0 / -1,0 / 0,-4 / 1,2 / 0,-2 / 2,1 / 0,3 /":{}},"subset":"7 Slashes"},"Kite / Right Fist":{"algs":{"/ 0,2 / 1,0 / 0,-2 / 2,1 / 0,3 /":{}},"subset":"6 Slashes"},"Observatory / Star":{"algs":{"1,0 / 0,-2 / -1,-2 /  2,-3 / -2,-1 / -3,0 / -1,1":{}},"subset":"6 Slashes"},"Square / Barrel":{"algs":{"/ 2,2 / -1,2 / 2,2 / 0,-1 / 3,3 /":{}},"subset":"6 Slashes"},"Star / 5-3":{"algs":{"0,3 / -4,0 / -2,-1 / -3,2 / 2,1 / 0,3 /":{}},"subset":"6 Slashes"},"5-3 / Star":{"algs":{"/ 0,4 / 1,2 / -2,3 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Star / Observatory":{"algs":{"/ -2,0 / -2,-1 / -3,2 / -1,-2 / 0,-3 /":{}},"subset":"6 Slashes"},"Right Fist / Square":{"algs":{"0,-1 / 0,1 / 4,0 / -2,-1 / 2,0 / -1,-2 / -3,0 /":{}},"subset":"7 Slashes"},"Square / Left Fist":{"algs":{"/ 0,4 / -2,-1 / 0,2 / 2,1 / 0,3 /":{}},"subset":"6 Slashes"},"Left Fist / Square":{"algs":{"/ -4,0 / 1,2 / -2,0 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Right Fist / Barrel":{"algs":{"/ -2,0 / -1,0 / 2,0 / 1,2 / -3,-3 /":{}},"subset":"6 Slashes"},"Left Fist / Left Fist":{"algs":{"/ 0,-2 / 0,2 / 0,-2 / 0,1 / 0,3 /":{}},"subset":"6 Slashes"},"Arrow / 2-2-2":{"algs":{"/ 0,-1 / 0,2 / 2,1 / -1,0 / -3,0 /":{}},"subset":"6 Slashes"},"Muffin / Left Fist":{"algs":{"/ 0,-4 / 1,0 / 0,-2 / -4,1 / 0,3 /":{}},"subset":"6 Slashes"},"Left Fist / Muffin":{"algs":{"/ 4,0 / 0,-1 / 2,0 / -1,4 / -3,0 /":{}},"subset":"6 Slashes"},"Muffin / Right Fist":{"algs":{"/ 0,-4 / 1,2 / 0,-2 / -4,1 / 0,3 /":{}},"subset":"6 Slashes"},"Right Fist / Muffin":{"algs":{"/ 4,0 / -2,-1 / 2,0 / -1,4 / -3,0 /":{}},"subset":"6 Slashes"},"Right Fist / Right Fist":{"algs":{"/ 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /":{}},"subset":"6 Slashes"},"2-2-2 / Crown":{"algs":{"/ 6,-3 / 2,0 / 2,1 / -1,0 / -3,0 /":{}},"subset":"6 Slashes"},"2-2-2 / Arrow":{"algs":{"/ -1,0 / 2,0 / 0,-2 / 0,1 / 0,3 /":{}},"subset":"6 Slashes"},"Barrel / Right Fist":{"algs":{"/ 0,2 / 0,1 / 0,-2 / -2,-1 / 3,3 /":{}},"subset":"6 Slashes"},"Left Fist / Barrel":{"algs":{"/ 2,0 / 1,0 / -2,0 / -1,-2 / -3,-3 /":{}},"subset":"6 Slashes"},"Kite / Muffin":{"algs":{"/ 3,2 / 0,-2 / 0,2 / 0,-1 / 3,3 /":{}},"subset":"6 Slashes"},"Muffin / Kite":{"algs":{"/ 2,3 / -2,0 / 2,0 / -1,0 / -3,-3 /":{}},"subset":"6 Slashes"},"Right Fist / Kite":{"algs":{"/ -2,0 / 0,-1 / 2,0 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Kite / Left Fist":{"algs":{"/ 0,2 / 1,0 / 0,-2 / -1,-2 / 0,-3 /":{}},"subset":"6 Slashes"},"Left Fist / Kite":{"algs":{"/ -2,0 / 0,-1 / 2,0 / -1,-2 / -3,0 /":{}},"subset":"6 Slashes"},"Barrel / Muffin":{"algs":{"/ -3,-2 / 0,-2 / 0,2 / 0,-1 / 0,-3 / -1,1":{}},"subset":"6 Slashes"},"Muffin / Barrel":{"algs":{"/ 2,3 / 2,0 / -2,0 / 1,0 / 3,0 / -1,1":{}},"subset":"6 Slashes"},"Barrel / Left Fist":{"algs":{"/ 0,-2 / 0,-1 / 0,2 / 2,1 / 3,3 /":{}},"subset":"6 Slashes"},"Crown / 2-2-2":{"algs":{"/ 0,3 / 2,0 / 2,1 / -1,0 / -3,0 /":{}},"subset":"6 Slashes"},"Kite / Square":{"algs":{"/ -1,0 / 2,0 / -2,0 / 2,0 / -1,0 / -3,0 /":{}},"subset":"7 Slashes"},"Square / Kite":{"algs":{"/ 0,1 / 0,-2 / 0,2 / 0,-2 / 0,1 / 0,3 /":{}},"subset":"7 Slashes"}}};
const before = () => randElement(["1,0 / 3,3 / 6,-3 / -1,0", "0,-1 / -3,3 / 3,6 / 0,1", "1,0 / -,3 / 3,6 / -1,0", "0,-1 / -3,6 / 3,-3 / 0,1"]);
const after = () => randElement(["0,0", "6,0", "0,6", "6,6"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
