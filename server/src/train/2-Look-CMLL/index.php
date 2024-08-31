<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>2 Look CMLL Trainer</title>
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
$subsets = ["Orient", "Permute"];
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

const algSet = {"puzzle":"3x3","diagramType":"2D","gray":[1,3,5,7,12,14,21,23,30,32,39,48],"subsets":["Orient","Permute"],"before":"() => randElement([\"M' U' M U\", \"M' U M U'\", \"M U' M' U\", \"M U M' U'\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["CMLL stands for Corners of Last Layer ignoring the M slice. That means the M slice can be modified during CMLL. 2 Look CMLL is good for beginners or intermediate Roux solvers.","After you have solved the first two blocks, you can do CMLL to solve the corners.","To do 2 Look CMLL, first you orient the corners, and then you permute the corners."],"cases":{"Sune":{"algs":{"R U R' U R U2 R'":{}},"subset":"Orient"},"Antisune":{"algs":{"R U2 R' U' R U' R'":{"note":"Inverse of Sune"}},"subset":"Orient"},"H CMLL":{"algs":{"U R U R' U R U' R' U R U2 R'":{"note":"Double Sune with cancellation"}},"subset":"Orient"},"T CMLL":{"algs":{"R U R' U' R' F R F'":{"note":"Sexy sledge"}},"subset":"Orient"},"L CMLL":{"algs":{"F R' F' R U R U' R'":{"note":"Inverse of T CMLL"}},"subset":"Orient"},"U CMLL":{"algs":{"F (R U R' U') F'":{"note":"F sexy F'"}},"subset":"Orient"},"Pi CMLL":{"algs":{"F (R U R' U') (R U R' U') F'":{"note":"F double sexy F'"}},"subset":"Orient"},"Adjacent Swap":{"algs":{"R U R' F' R U R' U' R' F R2 U' R' U'":{"note":"J Perm"}},"subset":"Permute"},"Diagonal Swap":{"algs":{"F R U' R' U' R U R' F' R U R' U' R' F R F'":{"note":"Y Perm"}},"subset":"Permute"}}};
const before = () => randElement(["M' U' M U", "M' U M U'", "M U' M' U", "M U M' U'"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
