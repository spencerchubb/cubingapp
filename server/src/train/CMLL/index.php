<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>CMLL Trainer</title>
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
$subsets = ["O", "H", "Pi", "U", "T", "Sune", "Antisune", "L"];
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

const algSet = {"puzzle":"3x3","diagramType":"2D","gray":[1,3,5,7,12,14,21,23,30,32,39,48],"subsets":["O","H","Pi","U","T","Sune","Antisune","L"],"before":"() => randElement([\"M' U' M U\", \"M' U M U'\", \"M U' M' U\", \"M U M' U'\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["CMLL is the third step of the Roux method, after solving the first two blocks. The goal of this step is to solve the corners of the last layer without considering the M-slice.","In contrast to other algorithm sets like COLL, this algorithm set IS allowed to disturb the M-slice. This gives more freedom and allows more efficient algorithms for some cases."],"cases":{"O Adjacent":{"algs":{"R U R' F' R U R' U' R' F R2 U' R'":{},"R U R' U' R' F R2 U' R' U' R U R' F'":{},"r U R' F' R U R' U' R' F R2 U' r'":{},"R U2 R' U' R U2 L' U R' U' L":{}},"subset":"O"},"O Diagonal":{"algs":{"F R U' R' U' R U R' F' R U R' U' R' F R F'":{},"F R' F R2 U' R' U' R U R' F' R U R' U' F'":{},"R U' R2 F R F' R U' B U2 B' R'":{},"r2 D' r U' r' D r2 F' r' U r F":{}},"subset":"O"},"H Columns":{"algs":{"U R U R' U R U' R' U R U2 R'":{},"R U2 R' U' R U R' U' R U' R'":{},"r U' r' U' r U' r' U r U r'":{},"r U' r' U' r U r' U r U r'":{}},"subset":"H"},"H Rows":{"algs":{"F U R U' R' U R U' R' U R U' R' F'":{},"F R U R' U' R U R' U' R U R' U' F'":{},"F U' R2 D R' U2 R D' R2 U F'":{},"F R U r' U' R U R' U' R U R' M' U' F'":{}},"subset":"H"},"H Column":{"algs":{"U R U2 R2 F R F' U2 R' F R F'":{},"R' F2 D R2 U R2 D' F2 R":{},"U' F R U R' U' R U' R' U R U R' F'":{},"U F R U R' U' F' R U R' U' R' F R F'":{}},"subset":"H"},"H Row":{"algs":{"U2 r U' r2 D' r U' r' D r2 U r'":{},"U' R U R' U R U r' F R' F' r":{},"U' R U R' U R U L' U R' U' L":{},"U2 R U' R2 D' r U' r' D R2 U R'":{}},"subset":"H"},"Pi Right Bar":{"algs":{"F R U R' U' R U R' U' F'":{},"U2 F U R U' R' U R U' R' F'":{},"r' U r2 U' r2 U' r2 U r'":{},"R' U2 R2 U R2 U R2 U2 R'":{}},"subset":"Pi"},"Pi Backslash":{"algs":{"U F R' F' R U2 R U' R' U R U2 R'":{},"U F U R U' R2 F' R U2 R U2 R'":{},"U M F R' F' r U2 R U' R' U R U2 R'":{},"R' U2 R U R' U' R U2 R f' U' f":{}},"subset":"Pi"},"Pi X":{"algs":{"U' R' F R U F U' R U R' U' F'":{},"R' F2 D R2 U' R2 D' F2 R":{},"r' F2 D R2 U' R2 D' F2 r":{},"U' F R U' R' U' R U R' U R U' R' F'":{}},"subset":"Pi"},"Pi Forward Slash":{"algs":{"R U2 R' U' R U R' U2 R' F R F'":{},"R U2 R' U2 R' F R2 U R' U' F'":{},"R U2 R' U' R U R' U2 r' F R F' M'":{},"R U R' U' R' F R2 U R' U' R U R' U' F'":{}},"subset":"Pi"},"Pi Columns":{"algs":{"U' r U' r2 D' r U r' D r2 U r'":{},"U2 R' F R F' r U' R' U' R U' r'":{},"U2 R' F R F' r U' r' U' R U' R'":{},"U' R U2 R' U R' D' R U2 R' D R2 U' R'":{}},"subset":"Pi"},"Pi Left Bar":{"algs":{"U' R' U' R' F R F' R U' R' U2 R":{},"R' F' U' F U' R U R' U R":{},"U2 R U R' U R U' B U' B' R'":{},"U' r U R' U R' F R F' R U' R' U R U2 r'":{}},"subset":"Pi"},"U Forward Slash":{"algs":{"U2 R2 D R' U2 R D' R' U2 R'":{},"r U' r' U' r U' r' U' F' U2 F":{},"U2 R r D r' U2 r D' r' U2 R'":{},"R' U2 R U2 F U' R' U R U F'":{}},"subset":"U"},"U Backslash":{"algs":{"R2 D' R U2 R' D R U2 R":{},"R' F R U R' F R U F U2 F'":{},"U2 L2 D' L U2 L' D L U2 L":{},"R' r' D' r U2 r' D r U2 R":{}},"subset":"U"},"U Front Row":{"algs":{"R' U' R U' R' U2 R2 U R' U R U2 R'":{},"R2 F U' F U F2 R2 U' R' F R":{},"U2 R U R' U R U2 R2 U' R U' R' U2 R":{},"U' R U R' U' R U' R' U2 R U' R' U2 R U R'":{}},"subset":"U"},"U Rows":{"algs":{"U' F R2 D R' U R D' R2 U' F'":{},"U' R' U' R F R2 D' R U R' D R2 U' F'":{},"F U R2 D R' U' R D' R2 F'":{},"R' F R U' R' U' R U R' F' R U R' U' R' F R F' R":{}},"subset":"U"},"U X":{"algs":{"U2 r U' r' U r' D' r U' r' D r":{},"r' U r' D' r U r' D r U' r":{},"U' R' D R U' R U' R' U R' D' R":{},"F R U' R' U R U R' U R U' R' F'":{}},"subset":"U"},"U Back Row":{"algs":{"U' F R U R' U' F'":{},"U F U R U' R' F'":{},"R' F' U' F U R":{}},"subset":"U"},"T Left Bar":{"algs":{"U' R U R' U' R' F R F'":{},"U L U L' U' L' f U f'":{}},"subset":"T"},"T Right Bar":{"algs":{"U L' U' L U L F' L' F":{},"U r' F' r U r U' r' F":{},"U' F R U' R' U R U R' F'":{}},"subset":"T"},"T Rows":{"algs":{"F R' F R2 U' R' U' R U R' F2":{},"R U2 R' U' R U' R2 U2 R U R' U R":{},"U' R U R' U R U2 R2 F' r U' r' F2 R":{},"R' U R U2 R' U' R U2 R' U' R U' R' U R":{}},"subset":"T"},"T Front Row":{"algs":{"r' U r U2 R2 F R F' R":{},"R U R2 F R F' U r U r'":{},"U2 r U' r' U' F R' F' R2 U' R'":{},"R' U r U2 R2 F R F' r":{}},"subset":"T"},"T Back Row":{"algs":{"r' D' r U r' D r U' r U r'":{},"U R' D R U' R U R' U R' D' R":{},"U2 F R U R' U' R U' R' U' R U R' F'":{},"R F R' U' R F' R' U R' F' R":{}},"subset":"T"},"T Columns":{"algs":{"U2 r U' r2 D' r U2 r' D r2 U r'":{},"U2 r2 D' r U r' D r2 U' r' U' r":{},"R' U R2 D r' U2 r D' R2 U' R":{},"U2 R' F R2 F R' U2 R F' R2 F' R":{}},"subset":"T"},"Sune Left Bar":{"algs":{"U R U R' U R U2 R'":{},"U r U R' U R U2 r'":{},"R' U2 R U R' U R":{},"U' L U L' U L U2 L'":{}},"subset":"Sune"},"Sune X":{"algs":{"U L' U2 L U2 L F' L' F":{},"U r' F2 r U2 r U' r' F":{},"U L' U2 L U2 r U' r' F":{}},"subset":"Sune"},"Sune Forward Slash":{"algs":{"U F R' F' R U2 R U2 R'":{},"U F U R U' R2 F' R U R U' R'":{}},"subset":"Sune"},"Sune Columns":{"algs":{"R U R' U R U' R D R' U' R D' R2":{},"U R U R' U' R' F R F' R U R' U R U2 R'":{},"U2 R' F2 R2 U2 R' F R U2 R2 F2 R":{},"F R' U2 R F' R' F U2 F' R":{}},"subset":"Sune"},"Sune Right Bar":{"algs":{"U' R U R' U R' F R F' R U2 R'":{},"U' R U R' U r' F R F' r U2 R'":{},"U' R U R' F' R U R' U R U2 R' F R U' R'":{},"U' R U R' U L' U R U' L U2 R'":{}},"subset":"Sune"},"Sune Backslash":{"algs":{"U r U' r' F R' F' R":{},"U R U' L' U R' U' L":{},"U R U' r' F R' F' r":{},"U' L U' R' U L' U' R":{}},"subset":"Sune"},"Antisune Right Bar":{"algs":{"U R' U' R U' R' U2 R":{},"U2 R U2 R' U' R U' R'":{},"U' L' U' L U' L' U2 L":{}},"subset":"Antisune"},"Antisune Columns":{"algs":{"U' R2 D R' U R D' R' U R' U' R U' R'":{},"U2 R' U' R U' R' U R' D' R U R' D R2":{},"U' R' F U2 F' R F R' U2 R F'":{},"U' L' U' L U L F' L' F L' U' L U' L' U2 L":{}},"subset":"Antisune"},"Antisune Backslash":{"algs":{"U' F' r U r' U2 r' F2 r":{},"U' F' L F L' U2 L' U2 L":{},"U2 F R U' R' U R U2 R' U' F'":{},"U' M F' r U R' U2 R' F2 R":{}},"subset":"Antisune"},"Antisune X":{"algs":{"U' R U2 R' U2 R' F R F'":{},"U' R U2 R' U2 r' F R F' M'":{},"U' r U2 R' U2 R' F R F' M'":{},"U' R U R' U' R' F R2 U R' U' F'":{}},"subset":"Antisune"},"Antisune Forward Slash":{"algs":{"U' R' F R F' r U r'":{},"U' r' F R F' r U R'":{},"U' L' U R U' L U R'":{},"U R' U L U' R U L'":{}},"subset":"Antisune"},"Antisune Left Bar":{"algs":{"U R U2 R' F R' F' R U' R U' R'":{},"R' U' R U' R' U R' F R F' U R":{},"U R U2 r' F R' F' r U' R U' R'":{},"U L' U' L U' L F' L' F L' U2 L":{}},"subset":"Antisune"},"L Best":{"algs":{"U' F' r U r' U' r' F r":{},"U2 F R U' R' U' R U R' F'":{},"R2 D' R U' R' D R U R":{},"U' F' L F L' U' L' U L":{}},"subset":"L"},"L Good":{"algs":{"U2 F R' F' R U R U' R'":{},"U2 F R' F' r U R U' r'":{},"U' r U' r' U' F' U F":{},"U2 R U R' U' R' F R F' R U R' U' R' F R F'":{}},"subset":"L"},"L Pure":{"algs":{"R U R' U R U' R' U R U' R' U R U2 R'":{},"R U2 R' U' R U R' U' R U R' U' R U' R'":{},"R U R' U r U' R' U R U' R' U R U2 r'":{},"U' R' U2 R U R' U' R U R' U' R U R' U R":{}},"subset":"L"},"L Front Commutator":{"algs":{"U2 R U2 R D R' U2 R D' R2":{},"U2 R U2 r D r' U2 r D' r' R'":{},"R U R' U R' F R F' U2 R' F R F'":{},"U r' D' r U2 r' D r U2 r U r'":{}},"subset":"L"},"L Diagonal":{"algs":{"U2 R U2 R2 F R F' R U2 R'":{},"U2 r U2 R2 F R F' R U2 r'":{},"R' U' R U R' F' R U R' U' R' F R2":{},"U R U2 R' F R' F' R2 U2 R'":{}},"subset":"L"},"L Back Commutator":{"algs":{"U R' U2 R' D' R U2 R' D R2":{},"U2 R U R' U' R' F R2 U' R' U R U R' F'":{},"U2 r D r' U2 r D' r' U2 r' U' r":{},"U R' U2 r' D' r U2 r' D r R":{}},"subset":"L"}}};
const before = () => randElement(["M' U' M U", "M' U M U'", "M U' M' U", "M U M' U'"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
