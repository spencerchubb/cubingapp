<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>LSE EO Trainer</title>
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
$subsets = ["3-mover", "5-mover", "7-mover", "11-mover"];
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

const algSet = {"puzzle":"3x3","diagramType":"3D","gray":[12,14,30,32,39,48],"subsets":["3-mover","5-mover","7-mover","11-mover"],"before":"() => { const segments = [\"M2 U\", \"M2 U'\", \"M2 U2\", \"M' U2 M U\", \"M' U2 M' U'\"]; let alg = randElement(segments); for (let i = 0; i < 5; i++) alg += ` ${randElement(segments)}`; return alg; }","after":"() => randElement([\"\", \"U\", \"U2\", \"U'\"])","texts":["Last Six Edges Edge Orientation (LSE EO) is a substep of the Roux method. Since LSE is the 4th step, the substeps are typically called 4a, 4b, and 4c. This algorithm set is for substep 4a.","4a: Edge orientation (EO)<br> 4b: Solve upper left and upper right edges (ULUR)<br> 4c: Solve middle edges"],"cases":{"Front Arrow":{"algs":{"M' U M":{}},"subset":"3-mover"},"Back Arrow":{"algs":{"M U M'":{}},"subset":"3-mover"},"2 Adj / 2":{"algs":{"M2 U' M' U' M'":{}},"subset":"5-mover"},"Front 1 / 1":{"algs":{"M U' M' U' M U' M'":{},"M U M' U M U M'":{}},"subset":"7-mover"},"Back 1 / 1":{"algs":{"M' U' M U' M' U' M'":{},"M' U M U M' U M":{}},"subset":"7-mover"},"2 Adj / 0":{"algs":{"M' U' M' U2 M' U' M'":{}},"subset":"7-mover"},"2 Opp / 2":{"algs":{"M' U2 M' U2 M U' M'":{}},"subset":"7-mover"},"2 Opp / 0":{"algs":{"M' U' M U M' U' M'":{}},"subset":"7-mover"},"0 / 2":{"algs":{"M' U' M' U M U' M'":{}},"subset":"7-mover"},"4 / 0":{"algs":{"M' U2 M' U2 M' U' M'":{},"M' U2 M' U2 M' U M'":{}},"subset":"7-mover"},"All 6":{"algs":{"M' U' M' U2 M' U' M U' M' U' M'":{}},"subset":"11-mover"}}};
const before = () => { const segments = ["M2 U", "M2 U'", "M2 U2", "M' U2 M U", "M' U2 M' U'"]; let alg = randElement(segments); for (let i = 0; i < 5; i++) alg += ` ${randElement(segments)}`; return alg; };
const after = () => randElement(["", "U", "U2", "U'"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
