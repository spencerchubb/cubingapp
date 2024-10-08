<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>2x2 PBL Trainer</title>
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
$subsets = ["Adj", "Diag"];
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

const algSet = {"puzzle":"2x2","diagramType":"3D","subsets":["Adj","Diag"],"before":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["PBL stands for Permutation of Both Layers, and it is the third step of the Ortega method. Ortega is a good intermediate method for 2x2 solvers who have already learned the beginner method.","Here is how the Ortega method works: Beginner method starts with the first layer, but Ortega starts with just a face. In other words, the first layer doesn't have to be permuted correctly. The second step of Ortega is to orient the last layer, and lastly, you do PBL to finish the 2x2.","PBL only has 6 cases, and you may already know 2 of the cases from other methods: J Perm and Y Perm. For this reason, PBL is a very easy algorithm set to learn."],"cases":{"Adj":{"algs":{"R U R' F' R U R' U' R' F R2 U' R' U'":{},"U R' F R F' R U2 R' U R U2 R'":{}},"subset":"Adj"},"Diag":{"algs":{"R U' R' U' F2 U' R U R' U F2":{},"F R U' R' U' R U R' F' R U R' U' R' F R F'":{}},"subset":"Diag"},"Diag Diag":{"algs":{"R2 F2 R2":{},"R2 B2 R2":{}},"subset":"Diag"},"Adj Adj":{"algs":{"R2 U' R2 U2 F2 U' R2":{},"R2 U' B2 U2 R2 U' R2'":{}},"subset":"Adj"},"Adj Diag":{"algs":{"U2 R' U R' F2 R F' R":{},"R' F R' F2 R U' R":{}},"subset":"Adj"},"Diag Adj":{"algs":{"R2 U R2 U' R2 U R2 U' R2":{},"R' D R' F2 R D' R":{}},"subset":"Diag"}}};
const before = () => randElement(["", "U", "U'", "U2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
