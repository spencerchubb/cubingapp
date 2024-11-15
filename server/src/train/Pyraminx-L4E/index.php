<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>Pyraminx L4E Trainer</title>
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
$subsets = ["Down Edge Solved", "Down Edge Flipped", "Upper Edge Solved", "Upper Edge Flipped", "Nothing Placed"];
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

const algSet = {"puzzle":"Pyraminx","subsets":["Down Edge Solved","Down Edge Flipped","Upper Edge Solved","Upper Edge Flipped","Nothing Placed"],"texts":["Last 4 Edges (L4E) is an advanced Pyraminx method with two steps: 1) Make a V on the bottom. 2) Solve the last 4 edges, thereby solving the rest of the puzzle.","This is faster than the beginner Layer By Layer method, because it only requires solving a V instead of an entire layer.","Algorithms sourced from: <a href='https://cubing.mikeg.me.uk/cubing-algs/html/l4e.html' class='link'>https://cubing.mikeg.me.uk/cubing-algs/html/l4e.html</a>"],"cases":{"Sune":{"subset":"Down Edge Solved","algs":{"(R U R') U (R U R')":{}}},"Antisune":{"subset":"Down Edge Solved","algs":{"(R U' R') U' (R U' R')":{}}},"2-flip":{"subset":"Down Edge Solved","algs":{"(L R' L' R) (U' R U R')":{}}},"R' unsexy R":{"subset":"Down Edge Solved","algs":{"R' (U' L' U L) R":{}}},"L unsexy L'":{"subset":"Down Edge Solved","algs":{"L (U R U' R') L'":{}}},"Down Edge Flipped #1":{"subset":"Down Edge Flipped","algs":{"(R' L R L') U (R' L R L') U (R' L R L')":{}}},"Down Edge Flipped #2":{"subset":"Down Edge Flipped","algs":{"(L R' L' R) U (L R' L' R)":{}}},"Down Edge Flipped #3":{"subset":"Down Edge Flipped","algs":{"(R' L R L') U' (R' L R L')":{}}},"Down Edge Flipped #4":{"subset":"Down Edge Flipped","algs":{"U' (R' L R L') (R U' R')":{},"U (L R' L' R) (L' U L)":{}}},"Down Edge Flipped #5":{"subset":"Down Edge Flipped","algs":{"U' (R U' R') (L' U' L)":{}}},"Down Edge Flipped #6":{"subset":"Down Edge Flipped","algs":{"U (L' U L) (R U R')":{}}},"Upper Edge Solved #1":{"subset":"Upper Edge Solved","algs":{"U L' U' L":{}}},"Upper Edge Solved #2":{"subset":"Upper Edge Solved","algs":{"U' R U R'":{}}},"Upper Edge Solved #3":{"subset":"Upper Edge Solved","algs":{"U' R U R'":{}}},"Upper Edge Solved #4":{"subset":"Upper Edge Solved","algs":{"R' L R L'":{}}},"Upper Edge Solved #5":{"subset":"Upper Edge Solved","algs":{"R' L R L2' U L":{}}},"Upper Edge Solved #6":{"subset":"Upper Edge Solved","algs":{"L R' L' R2 U' R'":{}}},"Upper Edge Solved #7":{"subset":"Upper Edge Solved","algs":{"R U' R'":{}}},"Upper Edge Solved #8":{"subset":"Upper Edge Solved","algs":{"L' U L":{}}},"Upper Edge Flipped #1":{"subset":"Upper Edge Flipped","algs":{"(R U R') U (R' L R L')":{}}},"Upper Edge Flipped #2":{"subset":"Upper Edge Flipped","algs":{"(L' U' L) U' (L R' L' R)":{}}},"Upper Edge Flipped #3":{"subset":"Upper Edge Flipped","algs":{"U (L' U L) U' (R U R')":{}}},"Upper Edge Flipped #4":{"subset":"Upper Edge Flipped","algs":{"U' (R U' R') U (L' U' L)":{}}},"Upper Edge Flipped #5":{"subset":"Upper Edge Flipped","algs":{"(R U R') U (L' U L)":{}}},"Upper Edge Flipped #6":{"subset":"Upper Edge Flipped","algs":{"(L' U' L) U' (R U' R')":{}}},"Upper Edge Flipped #7":{"subset":"Upper Edge Flipped","algs":{"U (R' L R L') U (L' U L)":{}}},"Upper Edge Flipped #8":{"subset":"Upper Edge Flipped","algs":{"U' (L R' L' R) U' (R U' R')":{}}},"Nothing Placed #1":{"subset":"Nothing Placed","algs":{"U R U' R2' L R L'":{}}},"Nothing Placed #2":{"subset":"Nothing Placed","algs":{"U' L' U L2 R' L' R":{}}},"Nothing Placed #3":{"subset":"Nothing Placed","algs":{"U' (L' U' L) U (R U R')":{}}},"Nothing Placed #4":{"subset":"Nothing Placed","algs":{"U (R U R') U' (L' U' L)":{}}},"Nothing Placed #5":{"subset":"Nothing Placed","algs":{"U (R U' R') U' (R U R')":{}}},"Nothing Placed #6":{"subset":"Nothing Placed","algs":{"U' (L' U L) U (L' U' L)":{}}},"Nothing Placed #7":{"subset":"Nothing Placed","algs":{"U' (L' U L) (R U' R')":{}}},"Nothing Placed #8":{"subset":"Nothing Placed","algs":{"U (R U' R') (L' U L)":{}}}}};
const before = undefined;
const after = undefined;
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
