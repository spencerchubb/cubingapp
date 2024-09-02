<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>OH CMLL Trainer</title>
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

const algSet = {"puzzle":"3x3","diagramType":"2D","gray":[1,3,5,7,12,14,21,23,30,32,39,48],"subsets":["O","H","Pi","U","T","Sune","Antisune","L"],"before":"() => randElement([\"M' U' M U\", \"M' U M U'\", \"M U' M' U\", \"M U M' U'\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["The One-Handed CMLL algorithm set (also called OH CMLL) is optimized to solve the CMLL step of the Roux method with one hand. It is more fingertrick-friendly for one-handed solves."],"cases":{"O Adjacent":{"algs":{"R U' F U' R' U' R U F' U2' R'":{},"R U R' F' R U R' U' R' F R2 U' R'":{},"R U2 R' U' R U2 L' U R' U' L ":{},"R' U2' R U R' U2' L U' R U L'":{},"r' U2' R U R' U' U' z U R' D R u' z'":{}},"subset":"O"},"O Diagonal":{"algs":{"R' U R U' R' f' U' R U2 R' U' R U' R' f R":{},"F R U' R' U' R U R' F' R U R' U' R' F R F'":{},"R U2' R' U2 F' R U' R' F R' F' R F":{},"x U' R' U R U' x' R U R' F U2' R U2 R'":{},"R' U R U' x' U R U2 R' U' R U' R' U2 R U R' U' x":{}},"subset":"O"},"H Columns":{"algs":{"U R' U' R U' R' U R U' R' U2 R":{},"R' U2' R U R' U' R U R' U R":{},"U R U R' U R U' R' U R U2' R'":{},"r' U2' R U' R' U' R U R' U r":{}},"subset":"H"},"H Rows":{"algs":{"F R U R' U' R U R' U' R U R' U' F'":{}},"subset":"H"},"H Column":{"algs":{"U' F R U R' U' R U' R' U R U R' F'":{},"U F R U' R' U R U2 R' U' R U R' U' F'":{}},"subset":"H"},"H Row":{"algs":{"U' R U R' U R U r' F R' F' r":{},"U' R' U' R U' R' U' z U R' D R U' z'":{},"U' R U R' U R U L' U R' U' L":{},"U' R' U' R U' R' U' z U z' U' R U L'":{}},"subset":"H"},"Pi Right Bar":{"algs":{"F R U R' U' R U R' U' F'":{},"U2 F U R U' R' U R U' R' F'":{},"R U2 R2 U' R2 U' R2 U2 R":{}},"subset":"Pi"},"Pi Backslash":{"algs":{"R' U2' R U R' U' R U2 R f' U' f":{},"U F R' F' R U2 R U' R' U R U2 R'":{},"U F U R U' R2 F' R U2 R U2 R'":{}},"subset":"Pi"},"Pi X":{"algs":{"U' F R U' R' U' R U R' U R U' R' F'":{},"U F U R U' R' U R U2' R' U' R U R' F'":{}},"subset":"Pi"},"Pi Forward Slash":{"algs":{"R U2 R' U' R U R' U2 R' F R F'":{},"R U2 R' U2 R' F R2 U R' U' F'":{}},"subset":"Pi"},"Pi Columns":{"algs":{"U2 R' F R F' r U' R' U' R U' r'":{},"U2 R' F R F' r U' r' U' R U' R'":{},"U2 r' F R F' r U' R' U' R U' R'":{}},"subset":"Pi"},"Pi Left Bar":{"algs":{"U2 R' U' R U' R' U F' U F R":{},"U' R' U' R' F R F' R U' R' U2' R":{}},"subset":"Pi"},"U Forward Slash":{"algs":{"R' U2' R U2 F U' R' U R U F'":{},"r U' r' U' r U' r' U' F' U2 F":{}},"subset":"U"},"U Backslash":{"algs":{"R' U R U2 R U2 R' U' R U' f' U' f":{},"R2 D' R U2 R' D R U2 R":{},"r2 D' R U2 R' D R U2 R":{},"x l2 x D' R U2 R' D R U2 R":{},"z U R2' U' R2 F' R U R' U' R' F z'":{}},"subset":"U"},"U Front Row":{"algs":{"R' U' R U' R' U2' R2 U R' U R U2' R'":{},"U' R' U' R U R' U R U2' R' U R U2' R' U' R":{}},"subset":"U"},"U Rows":{"algs":{"U2 F R U R' U' R' U R U' F' U R' U' R":{},"U R' U R U' F U R' U' R U R U' R' F'":{}},"subset":"U"},"U X":{"algs":{"R' U2 R U F U' R' U2 R U F'":{},"F R U' R' U R U R' U R U' R' F'":{}},"subset":"U"},"U Back Row":{"algs":{"U' F R U R' U' F'":{},"U F U R U' R' F'":{}},"subset":"U"},"T Left Bar":{"algs":{"U' R U R' U' R' F R F'":{},"U' r U R' U' r' F R F'":{}},"subset":"T"},"T Right Bar":{"algs":{"U' F R U' R' U R U R' F'":{},"U' R' U' R U R f' U' f":{}},"subset":"T"},"T Rows":{"algs":{"R U2 R' U' R U' R2 U2 R U R' U R":{},"U2 R' U2 R U R' U R2 U2 R' U' R U' R'":{},"U2 R U' R' U2' R U R' U2' R U R' U R U' R'":{}},"subset":"T"},"T Front Row":{"algs":{"r' U r U2 R2 F R F' R":{},"R' U R U2 R' L' U R U' r x'":{},"R' U r U2 R2 F R F' r":{}},"subset":"T"},"T Back Row":{"algs":{"U2 F R U R' U' R U' R' U' R U R' F'":{}},"subset":"T"},"T Columns":{"algs":{"R' U' R U' R' U R U' R' U F' U F R":{},"U2 R' F' U' F U' R U R' U' R U R' U R":{}},"subset":"T"},"Sune Left Bar":{"algs":{"U R U R' U R U2 R'":{},"R' U2 R U R' U R":{}},"subset":"Sune"},"Sune X":{"algs":{"U' R' U2' R U2 R f' U' f":{},"U F U R U2' R' U' R U R' F'":{}},"subset":"Sune"},"Sune Forward Slash":{"algs":{"U F R' F' R U2 R U2 R'":{},"U M' F R' F' r U2 R U2 R'":{}},"subset":"Sune"},"Sune Columns":{"algs":{"U2 R' U' R U' R' U2 F R F' r U r'":{},"F U' R' U R U F' U2 R f' U' f":{},"U R U R' U' R' F R F' R U R' U R U2' R'":{}},"subset":"Sune"},"Sune Right Bar":{"algs":{"U' R U R' U R' F R F' R U2 R'":{}},"subset":"Sune"},"Sune Backslash":{"algs":{"U r U' r' F R' F' R":{},"U R U' r' F R' F' r":{}},"subset":"Sune"},"Antisune Right Bar":{"algs":{"U R' U' R U' R' U2 R":{},"U2 R U2 R' U' R U' R'":{},"U r' U' R U' R' U2 r":{}},"subset":"Antisune"},"Antisune Columns":{"algs":{"r U' r' F R' F' U2' R U R' U R":{}},"subset":"Antisune"},"Antisune Backslash":{"algs":{"U2 F R U' R' U R U2 R' U' F'":{},"U' F' r U r' U2 r' F2 r":{}},"subset":"Antisune"},"Antisune X":{"algs":{"U' R U2 R' U2 R' F R F'":{}},"subset":"Antisune"},"Antisune Forward Slash":{"algs":{"U' R' F R F' r U r'":{},"U' r' F R F' r U R'":{},"U R' U z U R' D R U'":{}},"subset":"Antisune"},"Antisune Left Bar":{"algs":{"R' U' R U' R' U R' F R F' U R":{},"U R U2 R' F R' F' R U' R U' R'":{}},"subset":"Antisune"},"L Best":{"algs":{"F R U' R' U' R U R' F'":{}},"subset":"L"},"L Good":{"algs":{"F R' F' R U R U' R'":{}},"subset":"L"},"L Pure":{"algs":{"U R' U' R U' R' U R U' R' U R U' R' U2' R":{},"U2 R U R' U R U' R' U R U' R' U R U2 R'":{}},"subset":"L"},"L Front Commutator":{"algs":{"U F U' R' U' R U F' U2' R' U2 R":{},"R' U' R U' R' U2' R2 U R' U' R' F R F'":{}},"subset":"L"},"L Diagonal":{"algs":{"U2 R' U' R U' F U' R' U' R U F'":{},"R U2 R2 F R F' R U2' R'":{},"R U2 r2 F R F' R U2' R'":{}},"subset":"L"},"L Back Commutator":{"algs":{"U R' U' R U' R U R' U R U2 f' U' f":{},"U' R' U2 R' D' R U2 R' D R2":{},"U' R' U2 R' D' R U2 R' D r2":{}},"subset":"L"}}};
const before = () => randElement(["M' U' M U", "M' U M U'", "M U' M' U", "M U M' U'"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
