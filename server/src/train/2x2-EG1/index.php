<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>2x2 EG1 Trainer</title>
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
$subsets = ["Antisune", "H", "L", "Pi", "Sune", "T", "U"];
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

const algSet = {"puzzle":"2x2","diagramType":"2D","subsets":["Antisune","H","L","Pi","Sune","T","U"],"before":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["EG1 is commonly learned after CLL. CLL, EG1, and EG2 go hand in hand. These three algorithm sets will allow you to solve the entire cube after solving one face.","CLL: First layer is solved. This occurs 1/6th of the time<br> EG1: First layer has an adjacent swap. This occurs 4/6th of the time<br> EG2: First layer has a diagonal swap. This occurs 1/6th of the time"],"cases":{"EG1 AS 1":{"algs":{"U R' F R2 U R' F' U' R U' R'":{},"U' B U' R2 F2 U' F":{},"R' U' R U' R' U2 R r2 R U2 R' U' R U2 R' F R' F' R U2":{},"L' U' L U' F' L' U L2 F L'":{}},"subset":"Antisune"},"EG1 AS 2":{"algs":{"U R U' R' F' U' F2 R U' R'":{},"U2 L' U' L F2 U' F' L' U' L":{},"U F' L F L' F' L' U L U' L F L'":{},"R U' F2 R U2 R U' B":{}},"subset":"Antisune"},"EG1 AS 3":{"algs":{"F' R U R' U' R U R2 F' R":{},"U' R U' R' U2 R' F R2 U2 R' F":{},"F' L F L' U' L F L2 U' L":{},"F' L F L' U' R U R' L' U' L":{}},"subset":"Antisune"},"EG1 AS 4":{"algs":{"R U' R' F' U' R U R' U' F":{},"U2 F U' L' U L U' F' L' U' L":{},"U' R U R' U2 R' F' R F R' F R":{},"U F R U' R2 F' R U F' R U R'":{}},"subset":"Antisune"},"EG1 AS 5":{"algs":{"U' R U R' F' U' R U R' U' R U R'":{},"d U2 L' U L U' L' U L U L F L' F'":{},"U F' R' F R U R U R' U' R U R'":{},"U L' U L U' L' U L U L F L' F'":{}},"subset":"Antisune"},"EG1 AS 6":{"algs":{"U2 R U' R2 F R U' R' F R F'":{},"U2 L F' L2 U L U' L' U L F'":{}},"subset":"Antisune"},"EG1 H 1":{"algs":{"U' R' F R2 U' R' F R U R' F'":{},"U' R' F R2 U' R2 U' F U R":{},"U R U' R2 F R F' R' F' R F":{},"F' R' F R F R' F' R2 U R'":{}},"subset":"H"},"EG1 H 2":{"algs":{"U' F' U R U' R2 F2 R U' F":{},"F R U' R2 F U' F2 U R":{},"U F' U R U' R2 F2 R U' F":{},"U R U' R' U' R U' R2 F2 R U R U R'":{}},"subset":"H"},"EG1 H 3":{"algs":{"U R' F R F' U2 F R U2 R' F":{},"R' U' R' F2 U F' R F'":{},"U R U' R' F U2 x U' R' U2 R U'":{},"U' F U2 R U' R' F2 R' F2 R F'":{}},"subset":"H"},"EG1 H 4":{"algs":{"U' R U R' F' R U R' U' R U R' U'":{},"F' U R' F R F' U F2":{},"U' R U R' F' R U R' U' R U R'":{},"R' F R F' R' F R U' R' F R F'":{}},"subset":"H"},"EG1 L 1":{"algs":{"U R U' R' U R U' R2 F' R F":{},"U2 R U R' F' R U2 R' U2 R U R'":{},"U2 F R U' R' F' R U R' F' R U R'":{}},"subset":"L"},"EG1 L 2":{"algs":{"U2 R' F R U' R' F R2 U R' F' U2":{},"U x R' U' R U' R' U' R U' R' U2 R":{},"U2 L' U L U' L' U L2 F L' F'":{},"U2 R' F R U' R' F R2 U R' F'":{}},"subset":"L"},"EG1 L 3":{"algs":{"U R' U R2 U' R2 U' F R2 U' R'":{}},"subset":"L"},"EG1 L 4":{"algs":{"U R' F R2 U R' F' R U2 R'":{},"U R U2 R' F R U' R2 F' R":{}},"subset":"L"},"EG1 L 5":{"algs":{"U2 R U R' F' R U R' U' F R' F' R":{},"U' F' R' F R U' R U R' U' R U R' U'":{},"U2 L' U L y' R U2 R U' R2":{}},"subset":"L"},"EG1 L 6":{"algs":{"F R U' R' U R' F' R U R' F' R":{},"U2 R' U2 F R U2 R U' R2 F":{},"U L' U' L F L' U' L U F' L F L'":{},"U R U' R' U' y R U R2 F' R":{}},"subset":"L"},"EG1 Pi 1":{"algs":{"U F U' R' F R U' F2 R U R'":{},"U2 F2 R U R' U2 R U R' U' F":{},"U' R U' R2 F R2 U' R F2 R2 U'":{},"U' R' F R2 U' R2 F R' F2 R2":{}},"subset":"Pi"},"EG1 Pi 2":{"algs":{"U' R U' R2 F R2 U' R'":{},"U' R' F R2 U' R2 F R":{},"U' R U R2 F' R2 U R'":{},"U' R' F' R2 U R2 F' R":{}},"subset":"Pi"},"EG1 Pi 3":{"algs":{"U' F R' F U' F2 R U R":{},"U' F' R U2 R' F' U2 F R' F' R":{}},"subset":"Pi"},"EG1 Pi 4":{"algs":{"U' R U' R' U R U' R' F R U' R'":{},"U' F' R U R' U' R U R' F' R U R'":{}},"subset":"Pi"},"EG1 Pi 5":{"algs":{"R U' R2 F R U R U' R' U' R' F R F'":{},"U' R U R' U R U' R2 F' R F R' F' R":{},"U' L F' L' F L F' L2 U' L U L' U L U'":{},"U F U' R U2 R' F' R U R' F'":{}},"subset":"Pi"},"EG1 Pi 6":{"algs":{"U' R' F' R U' R' F R2 U R' F' R U R'":{},"U' R' F R F' R' F R2 U R' U' R U' R'":{},"F R U' R' F R U2 R' U F'":{},"U' F R' F' R U R U R' U' R' F' R2 U R'":{}},"subset":"Pi"},"EG1 S 1":{"algs":{"U2 R U R' U F R U' R2 F' R":{},"U L F' L2 U' L F U L' U L":{},"U' F' L U2 F2 R U' x'":{},"U R U' R2 F' R F U R' F R":{}},"subset":"Sune"},"EG1 S 2":{"algs":{"R U R' F2 U F R U R'":{},"U F R' F' R F R U' R' U R' F' R":{}},"subset":"Sune"},"EG1 S 3":{"algs":{"U2 F R' F' R U R' F' R2 U R'":{},"U' R' F R U2 R U' R2 F2 R F'":{}},"subset":"Sune"},"EG1 S 4":{"algs":{"U F' R' F R2 U R' U' F R' F' R U":{},"U F' R' F R2 U R' U' F R' F' R":{},"F' U R U' R' U F R U R'":{}},"subset":"Sune"},"EG1 S 5":{"algs":{"U R U' R' U R U' R' U F R U' R'":{},"U' L' U' L F U L' U' L U L' U' L":{},"U' R2 F U' R U' R U' F2":{},"U R U' R' U R U' R' U' R' F' R F":{}},"subset":"Sune"},"EG1 S 6":{"algs":{"R' F R2 U' R' U R U' R' F":{},"R' F R2 U' R' U L F' L' F":{}},"subset":"Sune"},"EG1 T 1":{"algs":{"F R U' R2 F' R U R' F' R":{},"F L F' L2 U' L U L' U' L":{},"U R2 U R U' R2 F R U2 R' F":{},"U2 R U2 R' U' R' F' R F R' F' R":{}},"subset":"T"},"EG1 T 2":{"algs":{"F' R' F R2 U R' U' R U R'":{},"U2 R U2 R' F R U' R' F' R U R'":{},"U2 R U' R' F R U' R' F R U R' F'":{}},"subset":"T"},"EG1 T 3":{"algs":{"U R U' R2 F R U R U2 R'":{},"U' R' F R2 U' R' U' R' F2 R":{},"U' L' U L2 F' L' U' L' U2 L U2":{}},"subset":"T"},"EG1 T 4":{"algs":{"U2 R' U F R2 U' R2 U' F U' R":{},"U' R2 B2 U' R' U' R U' R' U R'":{},"U2 R U' R' F' U' F R' F' R F":{}},"subset":"T"},"EG1 T 5":{"algs":{"U' R' F' R2 U R' F' R U R'":{},"U R U R2 F' R F R' F' R":{},"U R U R2 F' R F R' F' R U2":{}},"subset":"T"},"EG1 T 6":{"algs":{"U2 R U' R' U2 F R U2 R' F":{},"U2 R' F R2 U R' F' U2 R' F R F'":{},"U' R U R' F R U R' F U' R U' R'":{}},"subset":"T"},"EG1 U 1":{"algs":{"U' R U R' U R U R2 F R2 U' R'":{},"U' R U R2 F' R2 U' R' U' R U' R'":{},"U' R U' R2 F R2 U R' U' R U' R'":{},"U2 R2 U' R' U' R U' R' U R'":{}},"subset":"U"},"EG1 U 2":{"algs":{"U2 y R' U R' U' R U' R' U' F2 R2":{},"U' F R2 B R2 F U F2 R2":{},"U' R U R' F' U' R U R' U' F R' F' R":{},"U x U' R' U R U' F R U R U'":{}},"subset":"U"},"EG1 U 3":{"algs":{"F' U2 R U2 R' U2 F":{},"U y' R U R' F R2 F' R U' R'":{},"U2 R U' R2 F2 R F' U R U R'":{},"R U R' U F' R U R' U' R U R2 F2 R":{}},"subset":"U"},"EG1 U 4":{"algs":{"U R' F R F' R' F R2 U' R'":{},"U' R U' R' F R U' R2 F R":{}},"subset":"U"},"EG1 U 5":{"algs":{"U2 R U' R' U R U' R' U' F R U' R'":{},"U R' F R F' U R U' R' F R U' R'":{},"U2 L F' L' U L F' L' U L' U' L F":{},"F U' R' F2 R F' U2 F'":{}},"subset":"U"},"EG1 U 6":{"algs":{"U2 R' F R U' R' F R U' R U R' F' U2":{},"U2 R' F R2 U' R' U y' R U R'":{},"U' L F' L' F U' L' U L F' L' U L":{},"F' U R U2 R' F U2 F":{}},"subset":"U"}}};
const before = () => randElement(["", "U", "U'", "U2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
