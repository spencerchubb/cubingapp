<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>2x2 CLL Trainer</title>
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

const algSet = {"puzzle":"2x2","diagramType":"2D","subsets":["Antisune","H","L","Pi","Sune","T","U"],"before":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["2x2 CLL stands for Corners of Last Layer, and it is used to solve the last layer of the 2x2 Rubik's Cube. This algorithm set is for cubers who want to take 2x2 more seriously. With CLL, you'll be able to solve the last layer in one step instead of two.","After CLL, you can also learn EG1 and EG2. These algorithm sets are used to solve the cube after solving the first face (NOT the first layer). Solving one face is a lot less restrictive than solving one layer, so this leads to more efficient solutions. If you want to become a 2x2 master, you should start with CLL, then progress to EG1 and EG2."],"cases":{"CLL AS 1":{"algs":{"U R U2 R' U' R U' R'":{},"U2 L' U' L U' L' U2 L":{},"R' U' R U' R' U2 R":{},"U2 R' F' R U' R' F2 R":{}},"subset":"Antisune"},"CLL AS 2":{"algs":{"R U2 R' F R' F' R U' R U' R'":{},"L' U' L U' L F' L' F L' U2 L":{},"U2 R' U R U' R2 F R F' R U R' U' R":{},"U2 L' U' L U L F' L' F L' U L F' L F L' U'":{}},"subset":"Antisune"},"CLL AS 3":{"algs":{"U2 F' L F L' U2 L' U2 L":{},"U2 F' R U R' U2 R' F2 R":{},"x' U' R U L' U2 R' U2 R":{}},"subset":"Antisune"},"CLL AS 4":{"algs":{"U2 R' F R F' R U R'":{},"U2 L' U L F' R U R'":{},"x' R' F R U' R U R'":{},"U2 L' U R U' L U R'":{}},"subset":"Antisune"},"CLL AS 5":{"algs":{"U2 R U2 R' U2 R' F R F'":{},"L U2 L' U2 x' L' U L U'":{},"U2 R U2 R' U2 L' U R U'":{},"U F R2 F' U' R' U' R F R' F'":{}},"subset":"Antisune"},"CLL AS 6":{"algs":{"U2 L' U' L U L F' L' F L' U' L U' L' U2 L":{},"U R U R2 F' R F R U' R2 F R":{},"U2 R' F2 R F' R' F2 R U' R' F R F'":{},"F R F' U R U' R U R' U R'":{}},"subset":"Antisune"},"CLL H 1":{"algs":{"F R2 U' R2 U' R2 U R2 F'":{},"F R U' R' U R U2 R' U' R U R' U' F'":{},"U' R' U2 R y R' U R' U' R U' R":{},"R U2 R2 F R F' U2 R' F R F'":{}},"subset":"H"},"CLL H 2":{"algs":{"R U R' U R U R' F R' F' R":{},"R U R' U R U L' U R' U' L":{},"U R U' R' F U2 R2 F R U' R":{},"R' F' R U2 R U2 R' F U' R U' R'":{}},"subset":"H"},"CLL H 3":{"algs":{"U F R U R' U' R U R' U' R U R' U' F'":{},"R U' R' F R' F' R2 U' R' F R' F' R":{},"U x' U2 R U2 R2 F2 R U2 x":{},"R' F R F' R U R2 F R F' R U R'":{}},"subset":"H"},"CLL H 4":{"algs":{"U R2 U2 R' U2 R2":{},"U R2 U2 R U2 R2":{},"R U R' U R U' R' U R U2 R'":{},"U' R U2 R' U' R U R' U' R U' R'":{}},"subset":"H"},"CLL L 1":{"algs":{"U R U2 R' F' R U2 R' U R' F2 R":{},"U R' U' R U2 R' F R' F' R U' R":{},"R' F' R U R' U' R' F R2 U' R' U2 R":{},"U R U R2 F' R U R U' R2 F' R F":{}},"subset":"L"},"CLL L 2":{"algs":{"U2 R U2 R2 F2 R U R' F2 R F'":{},"R' U2 R' U' F R2 F' U R2":{},"U R U R' U' R' F R2 F' U' R' U' R":{},"R U' R' U R U' R' F R' F' R2 U R'":{}},"subset":"L"},"CLL L 3":{"algs":{"U2 R' U R' U2 R U' R' U R U' R2":{},"U2 R2 U' R U2 R' U2 R U' R2":{},"U R U' R U' R U2 R' U R' U R'":{},"U' R U' R' U2 R2 U R' U R' U2 R2":{}},"subset":"L"},"CLL L 4":{"algs":{"U R U2 R2 F R F' R U2 R'":{},"R U2 R' F R' F' R2 U2 R'":{},"U' R' U' R U R' F' R U R' U' R' F R2":{},"U' R' F2 R F' R U R2 F2 R":{}},"subset":"L"},"CLL L 5":{"algs":{"U F R' F' R U R U' R'":{},"U F R' F' U' R' U R":{},"U F' U R U' R' F2 R U' R'":{},"U' R' F' L' F R F' L F":{}},"subset":"L"},"CLL L 6":{"algs":{"U2 F' R U R' U' R' F R":{},"U F R U' R' U' R U R' F'":{},"U R' F R U F U' F'":{},"U' F R F U' R' U F' R' U'":{}},"subset":"L"},"CLL Pi 1":{"algs":{"U F R' F' R U2 R U' R' U R U2 R'":{},"R' F2 R F' U2 R U' R' U' F":{},"U F U R U' R' U R U' R2 F' R U R U' R'":{},"R' F2 R U2 R U2 R' F2 U' R U' R'":{}},"subset":"Pi"},"CLL Pi 2":{"algs":{"R U2 R' U' R U R' U2 R' F R F'":{},"U F' R U R' U2 R' F R U' R' F2 R":{},"R U R' U' R' F R2 U R' U' R U R' U' F'":{},"R2 U' R' U' F R2 U2 F' R2 F":{}},"subset":"Pi"},"CLL Pi 3":{"algs":{"U F R2 U' R2 U R2 U R2 F'":{},"U' R U' R U' R' U R' F R2 F'":{},"U2 F R' F' R U2 F R' F' R2 U2 R'":{},"U' R' F R U F U' R U R' U' F'":{}},"subset":"Pi"},"CLL Pi 4":{"algs":{"U2 R' F R F' R U' R' U' R U' R'":{},"R U' R' F R' F R U R' F R":{},"R U' R' F L' U L U L' U L":{},"U' R U' R2 D' R U R' D R2 U R'":{}},"subset":"Pi"},"CLL Pi 5":{"algs":{"U' R' U' R' F R F' R U' R' U2 R":{},"U2 F R U R' U' F' R2 U2 R' U2 R2":{},"R2 U R' U' F R F' R U' R2":{}},"subset":"Pi"},"CLL Pi 6":{"algs":{"R U' R2 U R2 U R2 U' R":{},"F R U R' U' R U R' U' F'":{},"R' U R2 U' R2 U' R2 U R'":{},"R U2 R2 U' R2 U' R2 U2 R":{}},"subset":"Pi"},"CLL Sune 1":{"algs":{"L' U2 L U2 L F' L' F":{},"R' F2 R U2 R U' R' F":{},"L' U2 L U2 R U' R' F":{},"R' F2 R U2 L F' L' F":{}},"subset":"Sune"},"CLL Sune 2":{"algs":{"R U R' U' R' F R F' R U R' U R U2 R'":{},"R2 F' U' R2 F R2 U F R2":{},"R U2 R' F R U2 R' U R U' R' F":{},"U2 R U' R U' R' U R' U' y R U' R'":{}},"subset":"Sune"},"CLL Sune 3":{"algs":{"R U' R' F R' F' R":{},"R U' R' F L' U' L":{},"L F' L' F L' U' L":{},"R U' L' U R' U' L":{}},"subset":"Sune"},"CLL Sune 4":{"algs":{"F R' F' R U2 R U2 R'":{},"F L' U' L U2 L F2 L'":{}},"subset":"Sune"},"CLL Sune 5":{"algs":{"U' R' F R2 F' U' R' U' R2 U R'":{},"U2 R U R' U R' F R F' R U2 R'":{},"R U R' U' R' F R F' R U' R' F R' F' R":{}},"subset":"Sune"},"CLL Sune 6":{"algs":{"R U R' U R U2 R'":{},"R U R2 U' R2 U R":{},"U' R' U2 R U R' U R":{},"U L' U2 L U L' U L":{}},"subset":"Sune"},"CLL T 1":{"algs":{"U' R U R' U' R' F R F'":{},"U2 R' U' R U F R F'":{},"U' x L U R' U' L' U R U' x'":{}},"subset":"T"},"CLL T 2":{"algs":{"U L' U' L U L F' L' F":{},"R U R' U' y L' U' L":{},"U' F R U' R' U R U R' F'":{},"U R' F' R U R U' R' F":{}},"subset":"T"},"CLL T 3":{"algs":{"F U' R U2 R' U' F2 R U R'":{},"U R U2 R2 F R F' R U' R' U R U2 R'":{},"U2 R U F R' F' R U2 R U2 R2":{},"U R' U' R' U R' F R F' R U' R2":{}},"subset":"T"},"CLL T 4":{"algs":{"R' U R U2 R2 F' R U' R' F2 R2":{},"U R' U R' F U' R U F2 R2":{},"u' R U R' U R U2 R' L' U' L U' L' U2 L U":{},"U' R U R' U R U2 R2 F' R U' R' F2 R":{}},"subset":"T"},"CLL T 5":{"algs":{"U2 F R U R' U' R U' R' U' R U R' F'":{},"U' R U R' U' R U' R' F' U' F R U R'":{},"U R2 F' R U' R' F2 R F R' F' R2":{},"U R U R' U2 R U R' U R' F R F'":{}},"subset":"T"},"CLL T 6":{"algs":{"R' U R U2 R2 F R F' R":{},"U2 R U' R' U2 L2 F' L' U L'":{},"U2 R' F R U2 R2 F R U' R":{},"U2 R U' R' U' F R' F' R2 U' R'":{}},"subset":"T"},"CLL U 1":{"algs":{"U' F R U R' U' F'":{},"U F U R U' R' F'":{},"U' R' U' F R' F' R U R":{},"U R' U' R' F R F' U R":{}},"subset":"U"},"CLL U 2":{"algs":{"U' R2 F2 R U R' F R2 U2 R' U' R":{},"R' F U' R U' R' U2 F2 R":{},"R' U' R2 U R' U2 R U2 R' U R'":{},"R' U' R U' R' U2 R2 U R' U R U2 R'":{}},"subset":"U"},"CLL U 3":{"algs":{"U2 F R U R' U2 F' R U' R' F":{},"U' R U2 R U' R' F R' F2 U' F":{},"U' R' U' F2 U' R U R' D R2 B":{},"U' R' U' F2 U' R U R' U F2 R":{}},"subset":"U"},"CLL U 4":{"algs":{"U' F R' F' R U' R U' R' U2 R U' R'":{},"R2 F R F' R' F2 R U R' F R2":{},"F R U' R' U R U R' U R U' R' F'":{},"U F' R U R' U' R' F R2 U R' U R U2 R'":{}},"subset":"U"},"CLL U 5":{"algs":{"R U' R2 F R F' R U R' U' R U R'":{},"U2 R U2 R' U R' F2 R F' R' F2 R":{},"U R' F U' F' R U' R' U2 F R":{},"F U2 R U' R' U F' U' R' F R":{}},"subset":"U"},"CLL U 6":{"algs":{"R' U R' F R F' R U2 R' U R":{},"L' U L2 F' L' F L' U' L U L' U' L":{},"U2 R2 U R' U' R' F R2 F' U' R'":{},"U2 x R2 F R' F2 R U' R' F2 R' x'":{}},"subset":"U"}}};
const before = () => randElement(["", "U", "U'", "U2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
