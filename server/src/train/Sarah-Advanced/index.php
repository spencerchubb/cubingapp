<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>Sarah Advanced Trainer</title>
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
$subsets = ["Pi to Vertical U Perm", "Pi to CW U Perm", "Pi to CCW U Perm", "Pi to Triple Sledge", "Pi + U Perm", "Pi + Z Perm Conjugate", "Pi + Swirl Perm", "Pi + Wat Perm", "Pure Pi + U Perm", "Peanut", "Peanut to Pure Pi", "Peanut + U Perm", "Peanut + Z Perm Conjugate", "Peanut + Wat Perm", "Peanut + Swirl Perm", "Miscellaneous"];
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

const algSet = {"puzzle":"Skewb","diagramType":"2D","gray":["FUL","FRU","RUF","RBU","BUR","BLU","LUB","LFU"],"subsets":["Pi to Vertical U Perm","Pi to CW U Perm","Pi to CCW U Perm","Pi to Triple Sledge","Pi + U Perm","Pi + Z Perm Conjugate","Pi + Swirl Perm","Pi + Wat Perm","Pure Pi + U Perm","Peanut","Peanut to Pure Pi","Peanut + U Perm","Peanut + Z Perm Conjugate","Peanut + Wat Perm","Peanut + Swirl Perm","Miscellaneous"],"texts":["Sarah's Advanced is a skewb method for solvers who want to get pretty serious about skewb. It's not quite as fast as NS, but it's a step up from Sarah's Intermediate.","This method is fast because there are only two steps: 1) Solve the first side. 2) Solve the rest.","There are 134 cases for step 2. Most of them can be done with sledgehammers (R' F R F') and hedgeslammers (F R' F' R). Some of the cases are so inefficient, that we recommend","Sarah's Advanced is not to be confused with NS. Instead of using sledges and hedges, NS uses speed-optimal algorithms. If you want to learn some NS but don't want to learn <i>every</i> alg, the Last 5 Center cases and 5 Trigger cases are good to start with. Those are particularly slow in Sarah's Advanced method.","Note: Sledge y2 Sledge is basically a U Perm, so we recommend using speed-friendly fingertricks in those cases.","Sarah Strong created this method, so the information on this page is credited to her."],"cases":{"Sledge y Sledge y2 Sledge":{"subset":"Pi to Vertical U Perm","algs":{"(R' F R F') y (R' F R F') y2 (R' F R F')":{}}},"Sledge y' Sledge y2 Sledge":{"subset":"Pi to Vertical U Perm","algs":{"(R' F R F') y' (R' F R F') y2 (R' F R F')":{}}},"Hedge y' Sledge y2 Sledge":{"subset":"Pi to Vertical U Perm","algs":{"(F R' F' R) y' (R' F R F') y2 (R' F R F')":{}}},"Hedge y Sledge y2 Sledge":{"subset":"Pi to Vertical U Perm","algs":{"(F R' F' R) y (R' F R F') y2 (R' F R F')":{}}},"Sledge y2 Sledge y2 Sledge":{"subset":"Pi to Vertical U Perm","algs":{"(R' F R F') y2 (R' F R F') y2 (R' F R F')":{}}},"Sledge z Sledge y2 Sledge z":{"subset":"Pi to CW U Perm","algs":{"(R' F R F') z (R' F R F') y2 (R' F R F') z":{}}},"Sledge y z Sledge y2 Sledge z":{"subset":"Pi to CW U Perm","algs":{"(R' F R F') y z (R' F R F') y2 (R' F R F') z":{}}},"Sledge y' z Sledge y2 Sledge z":{"subset":"Pi to CW U Perm","algs":{"(R' F R F') y' z (R' F R F') y2 (R' F R F') z":{}}},"Sledge y2 z Sledge y2 Sledge z":{"subset":"Pi to CW U Perm","algs":{"(R' F R F') y2 z (R' F R F') y2 (R' F R F') z":{}}},"Hedge z Sledge y2 Sledge z":{"subset":"Pi to CW U Perm","algs":{"(F R' F' R) z (R' F R F') y2 (R' F R F') z":{}}},"Hedge y z Sledge y2 Sledge z":{"subset":"Pi to CW U Perm","algs":{"(F R' F' R) y z (R' F R F') y2 (R' F R F') z":{}}},"Hedge y' z Sledge y2 Sledge z":{"subset":"Pi to CW U Perm","algs":{"(F R' F' R) y' z (R' F R F') y2 (R' F R F') z":{}}},"Hedge y2 z Sledge y2 Sledge z":{"subset":"Pi to CW U Perm","algs":{"(F R' F' R) y2 z (R' F R F') y2 (R' F R F') z":{}}},"Sledge z' Sledge y2 Sledge z'":{"subset":"Pi to CCW U Perm","algs":{"(R' F R F') z' (R' F R F') y2 (R' F R F') z'":{}}},"Sledge y z' Sledge y2 Sledge z'":{"subset":"Pi to CCW U Perm","algs":{"(R' F R F') y z' (R' F R F') y2 (R' F R F') z'":{}}},"Sledge y' z' Sledge y2 Sledge z'":{"subset":"Pi to CCW U Perm","algs":{"(R' F R F') y' z' (R' F R F') y2 (R' F R F') z'":{}}},"Sledge y2 z' Sledge y2 Sledge z'":{"subset":"Pi to CCW U Perm","algs":{"(R' F R F') y2 z' (R' F R F') y2 (R' F R F') z'":{}}},"Hedge z' Sledge y2 Sledge z'":{"subset":"Pi to CCW U Perm","algs":{"(F R' F' R) z' (R' F R F') y2 (R' F R F') z'":{}}},"Hedge y z' Sledge y2 Sledge z'":{"subset":"Pi to CCW U Perm","algs":{"(F R' F' R) y z' (R' F R F') y2 (R' F R F') z'":{}}},"Hedge y' z' Sledge y2 Sledge z'":{"subset":"Pi to CCW U Perm","algs":{"(F R' F' R) y' z' (R' F R F') y2 (R' F R F') z'":{}}},"Hedge y2 z' Sledge y2 Sledge z'":{"subset":"Pi to CCW U Perm","algs":{"(F R' F' R) y2 z' (R' F R F') y2 (R' F R F') z'":{}}},"Sledge y Sledge Sledge Sledge":{"subset":"Pi to Triple Sledge","algs":{"(R' F R F') y (R' F R F') (R' F R F') (R' F R F')":{}}},"Sledge y' Sledge Sledge Sledge":{"subset":"Pi to Triple Sledge","algs":{"(R' F R F') y' (R' F R F') (R' F R F') (R' F R F')":{}}},"Hedge y' Sledge Sledge Sledge":{"subset":"Pi to Triple Sledge","algs":{"(F R' F' R) y' (R' F R F') (R' F R F') (R' F R F')":{}}},"Hedge y Sledge Sledge Sledge":{"subset":"Pi to Triple Sledge","algs":{"(F R' F' R) y (R' F R F') (R' F R F') (R' F R F')":{}}},"Sledge y Sledge y Sledge":{"subset":"Pi + U Perm","algs":{"(R' F R F') y (R' F R F') y (R' F R F')":{}}},"Sledge y' Sledge y' Sledge":{"subset":"Pi + U Perm","algs":{"(R' F R F') y' (R' F R F') y' (R' F R F')":{}}},"Hedge y' Hedge y' Hedge":{"subset":"Pi + U Perm","algs":{"(F R' F' R) y' (F R' F' R) y' (F R' F' R)":{}}},"Hedge y Hedge y Hedge":{"subset":"Pi + U Perm","algs":{"(F R' F' R) y (F R' F' R) y (F R' F' R)":{}}},"Sledge y' Sledge y Hedge":{"subset":"Pi + Z Perm Conjugate","algs":{"(R' F R F') y' (R' F R F') y (F R' F' R)":{}}},"Sledge y Sledge y' Hedge":{"subset":"Pi + Z Perm Conjugate","algs":{"(R' F R F') y (R' F R F') y' (F R' F' R)":{}}},"Sledge y Hedge y' Hedge":{"subset":"Pi + Z Perm Conjugate","algs":{"(R' F R F') y (F R' F' R) y' (F R' F' R)":{}}},"Sledge y' Hedge y Hedge":{"subset":"Pi + Z Perm Conjugate","algs":{"(R' F R F') y' (F R' F' R) y (F R' F' R)":{}}},"Sledge y Sledge y' Sledge y Hedge":{"subset":"Pi + Swirl Perm","algs":{"(R' F R F') y (R' F R F') y' (R' F R F') y (F R' F' R)":{}}},"Sledge y' Sledge y Sledge y' Hedge":{"subset":"Pi + Swirl Perm","algs":{"(R' F R F') y' (R' F R F') y (R' F R F') y' (F R' F' R)":{}}},"Hedge y' Hedge y Hedge y' Sledge":{"subset":"Pi + Swirl Perm","algs":{"(F R' F' R) y' (F R' F' R) y (F R' F' R) y' (R' F R F')":{}}},"Hedge y Hedge y' Hedge y Sledge":{"subset":"Pi + Swirl Perm","algs":{"(F R' F' R) y (F R' F' R) y' (F R' F' R) y (R' F R F')":{}}},"Sledge y Sledge y' Hedge y Sledge":{"subset":"Pi + Swirl Perm","algs":{"(R' F R F') y (R' F R F') y' (F R' F' R) y (R' F R F')":{}}},"Sledge y' Sledge y Hedge y' Sledge":{"subset":"Pi + Swirl Perm","algs":{"(R' F R F') y' (R' F R F') y (F R' F' R) y' (R' F R F')":{}}},"Hedge y' Hedge y Sledge y' Hedge":{"subset":"Pi + Swirl Perm","algs":{"(F R' F' R) y' (F R' F' R) y (R' F R F') y' (F R' F' R)":{}}},"Hedge y Hedge y' Sledge y Hedge":{"subset":"Pi + Swirl Perm","algs":{"(F R' F' R) y (F R' F' R) y' (R' F R F') y (F R' F' R)":{}}},"Sledge y2 Hedge y Sledge y Sledge":{"subset":"Pi + Wat Perm","algs":{"(R' F R F') y2 (F R' F' R) y (R' F R F') y (R' F R F')":{}}},"Sledge y2 Hedge y' Sledge y' Sledge":{"subset":"Pi + Wat Perm","algs":{"(R' F R F') y2 (F R' F' R) y' (R' F R F') y' (R' F R F')":{}}},"Hedge y2 Sledge y' Hedge y' Hedge":{"subset":"Pi + Wat Perm","algs":{"(F R' F' R) y2 (R' F R F') y' (F R' F' R) y' (F R' F' R)":{}}},"Hedge y2 Sledge y Hedge y Hedge":{"subset":"Pi + Wat Perm","algs":{"(F R' F' R) y2 (R' F R F') y (F R' F' R) y (F R' F' R)":{}}},"Sledge Sledge y2 z Sledge y2 Sledge z":{"subset":"Pure Pi + U Perm","algs":{"(R' F R F') (R' F R F') y2 z (R' F R F') y2 (R' F R F') z":{}}},"Sledge Sledge z' Sledge y2 Sledge z'":{"subset":"Pure Pi + U Perm","algs":{"(R' F R F') (R' F R F') z' (R' F R F') y2 (R' F R F') z'":{}}},"Sledge Sledge z Sledge y2 Sledge z":{"subset":"Pure Pi + U Perm","algs":{"(R' F R F') (R' F R F') z (R' F R F') y2 (R' F R F') z":{}}},"Sledge Sledge y2 z' Sledge y2 Sledge z'":{"subset":"Pure Pi + U Perm","algs":{"(R' F R F') (R' F R F') y2 z' (R' F R F') y2 (R' F R F') z'":{}}},"Sledge Sledge y Sledge y2 Sledge":{"subset":"Pure Pi + U Perm","algs":{"(R' F R F') (R' F R F') y (R' F R F') y2 (R' F R F')":{}}},"Sledge Sledge y' Sledge y2 Sledge":{"subset":"Pure Pi + U Perm","algs":{"(R' F R F') (R' F R F') y' (R' F R F') y2 (R' F R F')":{}}},"Sledge y Sledge Sledge":{"subset":"Peanut","algs":{"(R' F R F') y (R' F R F') (R' F R F')":{}}},"Sledge y' Sledge Sledge":{"subset":"Peanut","algs":{"(R' F R F') y' (R' F R F') (R' F R F')":{}}},"Hedge y' Sledge Sledge":{"subset":"Peanut","algs":{"(F R' F' R) y' (R' F R F') (R' F R F')":{}}},"Hedge y Sledge Sledge":{"subset":"Peanut","algs":{"(F R' F' R) y (R' F R F') (R' F R F')":{}}},"Sledge y2 Hedge y Sledge Sledge":{"subset":"Peanut to Pure Pi","algs":{"(R' F R F') y2 (F R' F' R) y (R' F R F') (R' F R F')":{}}},"Sledge y2 Hedge y' Sledge Sledge":{"subset":"Peanut to Pure Pi","algs":{"(R' F R F') y2 (F R' F' R) y' (R' F R F') (R' F R F')":{}}},"Hedge y2 Sledge y' Sledge Sledge":{"subset":"Peanut to Pure Pi","algs":{"(F R' F' R) y2 (R' F R F') y' (R' F R F') (R' F R F')":{}}},"Hedge y2 Sledge y Sledge Sledge":{"subset":"Peanut to Pure Pi","algs":{"(F R' F' R) y2 (R' F R F') y (R' F R F') (R' F R F')":{}}},"Sledge y Sledge y Hedge":{"subset":"Peanut + U Perm","algs":{"(R' F R F') y (R' F R F') y (F R' F' R)":{}}},"Sledge y' Sledge y' Hedge":{"subset":"Peanut + U Perm","algs":{"(R' F R F') y' (R' F R F') y' (F R' F' R)":{}}},"Sledge y Hedge y Hedge":{"subset":"Peanut + U Perm","algs":{"(R' F R F') y (F R' F' R) y (F R' F' R)":{}}},"Sledge y' Hedge y' Hedge":{"subset":"Peanut + U Perm","algs":{"(R' F R F') y' (F R' F' R) y' (F R' F' R)":{}}},"Hedge y' Hedge y' Sledge":{"subset":"Peanut + U Perm","algs":{"(F R' F' R) y' (F R' F' R) y' (R' F R F')":{}}},"Hedge y Hedge y Sledge":{"subset":"Peanut + U Perm","algs":{"(F R' F' R) y (F R' F' R) y (R' F R F')":{}}},"Hedge y' Sledge y' Sledge":{"subset":"Peanut + U Perm","algs":{"(F R' F' R) y' (R' F R F') y' (R' F R F')":{}}},"Hedge y Sledge y Sledge":{"subset":"Peanut + U Perm","algs":{"(F R' F' R) y (R' F R F') y (R' F R F')":{}}},"Sledge y Sledge y2 Hedge":{"subset":"Peanut + Z Perm Conjugate","algs":{"(R' F R F') y (R' F R F') y2 (F R' F' R)":{}}},"Sledge y' Sledge y2 Hedge":{"subset":"Peanut + Z Perm Conjugate","algs":{"(R' F R F') y' (R' F R F') y2 (F R' F' R)":{}}},"Sledge y Hedge y2 Sledge":{"subset":"Peanut + Z Perm Conjugate","algs":{"(R' F R F') y (F R' F' R) y2 (R' F R F')":{}}},"Sledge y' Hedge y2 Sledge":{"subset":"Peanut + Z Perm Conjugate","algs":{"(R' F R F') y' (F R' F' R) y2 (R' F R F')":{}}},"Hedge y Hedge y2 Sledge":{"subset":"Peanut + Z Perm Conjugate","algs":{"(F R' F' R) y (F R' F' R) y2 (R' F R F')":{}}},"Hedge y' Hedge y2 Sledge":{"subset":"Peanut + Z Perm Conjugate","algs":{"(F R' F' R) y' (F R' F' R) y2 (R' F R F')":{}}},"Hedge y Sledge y2 Hedge":{"subset":"Peanut + Z Perm Conjugate","algs":{"(F R' F' R) y (R' F R F') y2 (F R' F' R)":{}}},"Hedge y' Sledge y2 Hedge":{"subset":"Peanut + Z Perm Conjugate","algs":{"(F R' F' R) y' (R' F R F') y2 (F R' F' R)":{}}},"Sledge y2 Sledge y Sledge y Sledge":{"subset":"Peanut + Wat Perm","algs":{"(R' F R F') y2 (R' F R F') y (R' F R F') y (R' F R F')":{}}},"Sledge y2 Sledge y' Sledge y' Sledge":{"subset":"Peanut + Wat Perm","algs":{"(R' F R F') y2 (R' F R F') y' (R' F R F') y' (R' F R F')":{}}},"Sledge y2 Sledge y' Hedge y Hedge":{"subset":"Peanut + Wat Perm","algs":{"(R' F R F') y2 (R' F R F') y' (F R' F' R) y (F R' F' R)":{}}},"Sledge y2 Sledge y Hedge y Hedge":{"subset":"Peanut + Wat Perm","algs":{"(R' F R F') y2 (R' F R F') y (F R' F' R) y (F R' F' R)":{}}},"Sledge y2 Sledge y Sledge y Hedge":{"subset":"Peanut + Wat Perm","algs":{"(R' F R F') y2 (R' F R F') y (R' F R F') y (F R' F' R)":{}}},"Sledge y2 Sledge y' Sledge y' Hedge":{"subset":"Peanut + Wat Perm","algs":{"(R' F R F') y2 (R' F R F') y' (R' F R F') y' (F R' F' R)":{}}},"Sledge y2 Sledge y Hedge y Sledge":{"subset":"Peanut + Wat Perm","algs":{"(R' F R F') y2 (R' F R F') y (F R' F' R) y (R' F R F')":{}}},"Sledge y2 Sledge y' Hedge y' Sledge":{"subset":"Peanut + Wat Perm","algs":{"(R' F R F') y2 (R' F R F') y' (F R' F' R) y' (R' F R F')":{}}},"Sledge y Sledge y' Sledge y Sledge":{"subset":"Peanut + Swirl Perm","algs":{"(R' F R F') y (R' F R F') y' (R' F R F') y (R' F R F')":{}}},"Sledge y' Sledge y Sledge y' Sledge":{"subset":"Peanut + Swirl Perm","algs":{"(R' F R F') y' (R' F R F') y (R' F R F') y' (R' F R F')":{}}},"Hedge y' Hedge y Hedge y' Hedge":{"subset":"Peanut + Swirl Perm","algs":{"(F R' F' R) y' (F R' F' R) y (F R' F' R) y' (F R' F' R)":{}}},"Hedge y Hedge y' Hedge y Hedge":{"subset":"Peanut + Swirl Perm","algs":{"(F R' F' R) y (F R' F' R) y' (F R' F' R) y (F R' F' R)":{}}},"Sledge y Hedge y' Sledge y Hedge":{"subset":"Peanut + Swirl Perm","algs":{"(R' F R F') y (F R' F' R) y' (R' F R F') y (F R' F' R)":{}}},"Sledge y' Hedge y Sledge y' Hedge":{"subset":"Peanut + Swirl Perm","algs":{"(R' F R F') y' (F R' F' R) y (R' F R F') y' (F R' F' R)":{}}},"Hedge y' Sledge y Hedge y' Sledge":{"subset":"Peanut + Swirl Perm","algs":{"(F R' F' R) y' (R' F R F') y (F R' F' R) y' (R' F R F')":{}}},"Hedge y Sledge y' Hedge y Sledge":{"subset":"Peanut + Swirl Perm","algs":{"(F R' F' R) y (R' F R F') y' (F R' F' R) y (R' F R F')":{}}},"Sledge Sledge y' Sledge Sledge":{"subset":"Miscellaneous","algs":{"(R' F R F') (R' F R F') y' (R' F R F') (R' F R F')":{}}},"Sledge Sledge Sledge":{"subset":"Miscellaneous","algs":{"(R' F R F') (R' F R F') (R' F R F')":{}}}}};
const before = undefined;
const after = undefined;
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
