<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>Sarah Intermediate Trainer</title>
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
$subsets = ["1 Trigger", "2 Triggers", "3 Triggers"];
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

const algSet = {"puzzle":"Skewb","diagramType":"2D","gray":["F","R","B","L","FUL","FRU","RUF","RBU","BUR","BLU","LUB","LFU"],"subsets":["1 Trigger","2 Triggers","3 Triggers"],"texts":["Sarah's Intermediate is a skewb method for solvers who recently learned the beginner method and want to get faster. It is a great choice for cubers who don't want to put in a ton of effort, because there are only ten cases.","The steps for Sarah's Intermediate method are as follows: 1) Solve the first side. 2) Solve the opposite side. 3) Solve the centers.","The first and third steps are done the same way as in Sarah's Beginner method. Step 2 is done with some combination of sledgehammers (R' F R F') and hedgeslammers (F R' F' R). At most you will need 3 triggers.","Sarah Strong created this method, so the information on this page is credited to her."],"cases":{"Sledgehammer":{"subset":"1 Trigger","algs":{"R' F R F'":{}}},"Hedgeslammer":{"subset":"1 Trigger","algs":{"F R' F' R":{}}},"Double Sledge":{"subset":"2 Triggers","algs":{"(R' F R F') (R' F R F')":{},"y2 (F R' F' R) (F R' F' R)":{}}},"Sledge y Sledge":{"subset":"2 Triggers","algs":{"(R' F R F') y (R' F R F')":{}}},"Sledge y' Sledge":{"subset":"2 Triggers","algs":{"(R' F R F') y' (R' F R F')":{}}},"Hedge y Hedge":{"subset":"2 Triggers","algs":{"(F R' F' R) y (F R' F' R)":{}}},"Hedge y' Hedge":{"subset":"2 Triggers","algs":{"(F R' F' R) y' (F R' F' R)":{}}},"Sledge y Hedge y Hedge":{"subset":"3 Triggers","algs":{"(R' F R F') y (F R' F' R) y (F R' F' R)":{}}},"Sledge y Hedge y' Hedge":{"subset":"3 Triggers","algs":{"(R' F R F') y (F R' F' R) y' (F R' F' R)":{}}},"Sledge y' Hedge y Hedge":{"subset":"3 Triggers","algs":{"(R' F R F') y' (F R' F' R) y (F R' F' R)":{}}}}};
const before = undefined;
const after = undefined;
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
