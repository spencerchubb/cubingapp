<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>2 Look OLL Trainer</title>
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
$subsets = ["Edges", "Corners"];
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
            <button class="expandableButton">
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

const algSet = {"puzzle":"3x3","diagramType":"2D","gray":[9,12,15,29,32,35,36,39,42,45,48,51],"subsets":["Edges","Corners"],"before":"() => randElement([\"R' F R' B2 R F' R' B2 R2\", \"R U R' F' R U R' U' R' F R2 U' R'\", \"R U R' U' R' F R2 U' R' U' R U R' F'\", \"M2 U M U2 M' U M2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["OLL stands for Orientation of Last Layer. 2 Look OLL is good for beginners or intermediate solvers.","After you have solved the first two layers, you can do OLL to solve the top face.","To do 2 Look OLL, first you orient the edges, and then you orient the corners."],"cases":{"Bar":{"algs":{"F (R U R' U') F'":{"note":"F sexy F'"}},"subset":"Edges"},"L shape":{"algs":{"F (U R U' R') F'":{"note":"F inverse sexy F'"}},"subset":"Edges"},"Sune":{"algs":{"R U R' U R U2 R'":{}},"subset":"Corners"},"Antisune":{"algs":{"R U2 R' U' R U' R'":{"note":"Inverse of Sune"}},"subset":"Corners"},"H OLL":{"algs":{"U R U R' U R U' R' U R U2 R'":{"note":"Double Sune with cancellation"}},"subset":"Corners"},"T OLL":{"algs":{"r U R' U' r' F R F'":{"note":"Sexy sledge with wide moves"}},"subset":"Corners"},"L OLL":{"algs":{"F R' F' r U R U' r'":{"note":"Inverse of T OLL"}},"subset":"Corners"},"Pi OLL":{"algs":{"R U2 R2' U' R2 U' R2' U2' R":{}},"subset":"Corners"},"U OLL":{"algs":{"R2 D' R U2 R' D R U2 R":{}},"subset":"Corners"}}};
const before = () => randElement(["R' F R' B2 R F' R' B2 R2", "R U R' F' R U R' U' R' F R2 U' R'", "R U R' U' R' F R2 U' R' U' R U R' F'", "M2 U M U2 M' U M2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
