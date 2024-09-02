<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>SQ1 OBL Trainer</title>
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
$subsets = ["1 Slash", "2 Slashes", "3 Slashes", "4 Slashes", "5 Slashes", "6 Slashes", "7 Slashes"];
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

const algSet = {"puzzle":"SQ1","subsets":["1 Slash","2 Slashes","3 Slashes","4 Slashes","5 Slashes","6 Slashes","7 Slashes"],"before":"() => randElement([\"/ 3,-3 / -3,3 /\", \"/ -3,3 / 3,-3 /\", \"/ 0,-3 / 3,3 / -3,0 /\", \"/ -3,0 / 3,3 / 0,-3 /\"])","after":"() => randElement([\"0,0\", \"6,0\", \"0,6\", \"6,6\"])","texts":["Square-1 OBL stands for Orient Both Layers, and it is an advanced Square-1 technique. The simpler method is to orient corners and then orient edges separately. Orienting both layers simultaneously is faster, but it requires a lot more learning."],"cases":{"Left Kite / Left Kite":{"algs":{"0,-1 / 0,1":{}},"subset":"1 Slash"},"Right Kite / Right Kite":{"algs":{"1,0 / -1,0":{}},"subset":"1 Slash"},"Copp / Copp":{"algs":{"1,0 / 2,2 / 0,1":{}},"subset":"2 Slashes"},"Eopp / Eopp":{"algs":{"1,0 / -1,-1 / 0,1":{}},"subset":"2 Slashes"},"Left Dish / Left Dish":{"algs":{"0,-1 / 4,1 / -1,0":{}},"subset":"2 Slashes"},"Left Pinwheel / Left Pinwheel":{"algs":{"0,-1 / -3,-3 / 0,1":{}},"subset":"2 Slashes"},"Left Tent / Left Tent":{"algs":{"0,-1 / -3,0 / 0,1":{}},"subset":"2 Slashes"},"Right Dish / Right Dish":{"algs":{"1,0 / -4,-1 / 0,1":{}},"subset":"2 Slashes"},"Right Pinwheel / Right Pinwheel":{"algs":{"1,0 / -3,-3 / -1,0":{}},"subset":"2 Slashes"},"Right Tent / Right Tent":{"algs":{"1,0 / -3,0 / -1,0":{}},"subset":"2 Slashes"},"Gem / Left Snoopy":{"algs":{"1,0 / -3,0 / 2,-1 / 0,1":{}},"subset":"3 Slashes"},"Gem / Right Snoopy":{"algs":{"0,-1 / 1,-2 / 0,3 / -1,0":{}},"subset":"3 Slashes"},"Left Baron / Left Baron":{"algs":{"0,-1 / -3,3 / 4,1 / -1,0":{}},"subset":"3 Slashes"},"Left Bird / Right Scottie":{"algs":{"1,0 / 0,-3 / -1,-4 / 0,1":{}},"subset":"3 Slashes"},"Left Kite / Left Pinwheel":{"algs":{"0,-1 / 0,3 / 0,3 / 0,1":{}},"subset":"3 Slashes"},"Left Kite / Right Zero":{"algs":{"0,-1 / 1,1 / 0,3 / -1,0":{}},"subset":"3 Slashes"},"Left Pinwheel / Left Kite":{"algs":{"0,-1 / -3,0 / -3,0 / 0,1":{}},"subset":"3 Slashes"},"Left Scottie / Right Bird":{"algs":{"0,-1 / 3,0 / 4,1 / -1,0":{}},"subset":"3 Slashes"},"Left Scottie / Shell":{"algs":{"1,0 / -4,-1 / -3,0 / 0,1":{}},"subset":"3 Slashes"},"Left Snoopy / Gem":{"algs":{"1,0 / 2,-1 / -3,0 / 0,1":{}},"subset":"3 Slashes"},"Left Snoopy / Left Spill":{"algs":{"0,-1 / 0,-3 / 1,4 / -1,0":{}},"subset":"3 Slashes"},"Left Spill / Left Snoopy":{"algs":{"0,-1 / -3,0 / 4,1 / -1,0":{}},"subset":"3 Slashes"},"Left Tent / Right Whale":{"algs":{"1,0 / -1,-4 / 1,4 / -1,0":{}},"subset":"3 Slashes"},"Left Whale / Left Whale":{"algs":{"0,-1 / -5,1 / 3,0 / -1,0":{}},"subset":"3 Slashes"},"Left Whale / Right Tent":{"algs":{"0,-1 / 4,1 / -4,-1 / 0,1":{}},"subset":"3 Slashes"},"Left Zero / Left Zero":{"algs":{"0,-1 / -2,4 / -1,-1 / 0,1":{}},"subset":"3 Slashes"},"Left Zero / Right Kite":{"algs":{"1,0 / -1,-1 / -3,0 / 0,1":{}},"subset":"3 Slashes"},"Moth / Moth":{"algs":{"0,-1 / 1,-2 / -1,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Moth / Moth 2":{"algs":{"1,0 / 0,3 / 2,2 / 0,1":{}},"subset":"3 Slashes"},"Moth / Plane":{"algs":{"0,-1 / -2,1 / 2,5 / 0,1":{}},"subset":"3 Slashes"},"Plane / Moth":{"algs":{"1,0 / -1,2 / -5,-2 / -1,0":{}},"subset":"3 Slashes"},"Plane / Moth 2":{"algs":{"0,-1 / -3,-3 / -2,1 / 0,3 / -1,0":{}},"subset":"4 Slashes"},"Plane / Plane":{"algs":{"0,-1 / -2,1 / -1,-1 / 3,6 / 0,1":{}},"subset":"4 Slashes"},"Plane / Plane 2":{"algs":{"1,0 / -3,0 / -1,-1 / 0,1":{}},"subset":"3 Slashes"},"Right Baron / Right Baron":{"algs":{"1,0 / 3,-3 / -4,-1 / 0,1":{}},"subset":"3 Slashes"},"Right Bird / Left Scottie":{"algs":{"0,-1 / 0,3 / 1,4 / -1,0":{}},"subset":"3 Slashes"},"Right Kite / Left Zero":{"algs":{"1,0 / -1,-1 / 0,-3 / 0,1":{}},"subset":"3 Slashes"},"Right Kite / Right Pinwheel":{"algs":{"1,0 / 0,3 / 0,3 / -1,0":{}},"subset":"3 Slashes"},"Right Pinwheel / Right Kite":{"algs":{"1,0 / -3,0 / -3,0 / -1,0":{}},"subset":"3 Slashes"},"Right Scottie / Left Bird":{"algs":{"1,0 / -3,0 / -4,-1 / 0,1":{}},"subset":"3 Slashes"},"Right Scottie / Shell":{"algs":{"0,-1 / 4,1 / 3,0 / -1,0":{}},"subset":"3 Slashes"},"Right Snoopy / Gem":{"algs":{"0,-1 / -2,1 / 3,0 / -1,0":{}},"subset":"3 Slashes"},"Right Snoopy / Right Spill":{"algs":{"1,0 / 0,3 / -1,-4 / 0,1":{}},"subset":"3 Slashes"},"Right Spill / Right Snoopy":{"algs":{"1,0 / 3,0 / -4,-1 / 0,1":{}},"subset":"3 Slashes"},"Right Tent / Left Whale":{"algs":{"0,-1 / 1,4 / -1,-4 / 0,1":{}},"subset":"3 Slashes"},"Right Whale / Left Tent":{"algs":{"1,0 / -4,-1 / 4,1 / -1,0":{}},"subset":"3 Slashes"},"Right Whale / Right Whale":{"algs":{"1,0 / 5,-1 / -3,0 / 0,1":{}},"subset":"3 Slashes"},"Right Zero / Left Kite":{"algs":{"0,-1 / 1,1 / 3,0 / -1,0":{}},"subset":"3 Slashes"},"Right Zero / Right Zero":{"algs":{"1,0 / -3,3 / -1,-1 / 0,1":{}},"subset":"3 Slashes"},"Shell / Left Scottie":{"algs":{"1,0 / 2,-1 / 0,3 / 0,1":{}},"subset":"3 Slashes"},"Shell / Right Scottie":{"algs":{"0,-1 / -2,1 / 0,-3 / -1,0":{}},"subset":"3 Slashes"},"4E / 4E":{"algs":{"1,0 / -1,-1 / -2,4 / -1,-1 / 0,1":{}},"subset":"4 Slashes"},"Angel / Gem":{"algs":{"1,0 / 3,0 / -3,0 / -1,-1 / 0,1":{}},"subset":"4 Slashes"},"Angel / Left Snoopy":{"algs":{"0,-1 / -3,0 / -2,1 / -4,-1 / 0,1":{}},"subset":"4 Slashes"},"Angel / Left Spill":{"algs":{"1,0 / 0,3 / -4,-1 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Angel / Right Snoopy":{"algs":{"1,0 / 3,0 / 2,-1 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Angel / Right Spill":{"algs":{"0,-1 / 0,-3 / 4,1 / -4,-1 / 0,1":{}},"subset":"4 Slashes"},"Cadj / Cadj":{"algs":{"1,0 / -3,0 / -1,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Eadj / Eadj":{"algs":{"1,0 / 3,0 / -1,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Gem / Angel":{"algs":{"0,-1 / -3,0 / 0,3 / 1,1 / -1,0":{}},"subset":"4 Slashes"},"Gem / Gem":{"algs":{"1,0 / -4,-1 / -2,1 / -3,0 / -1,0":{}},"subset":"4 Slashes"},"Gem / Left Spill":{"algs":{"1,0 / 2,-1 / 4,1 / -4,-1 / 0,1":{}},"subset":"4 Slashes"},"Gem / Right Spill":{"algs":{"0,-1 / -2,1 / -4,-1 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Hazard / Left Bird":{"algs":{"0,-1 / 0,3 / 1,4 / 2,5 / 0,1":{}},"subset":"4 Slashes"},"Hazard / Left Scottie":{"algs":{"0,-1 / -3,0 / -3,3 / -5,-2 / -1,0":{}},"subset":"4 Slashes"},"Hazard / Right Bird":{"algs":{"1,0 / 0,-3 / -1,-4 / -2,-5 / -1,0":{}},"subset":"4 Slashes"},"Hazard / Right Scottie":{"algs":{"1,0 / 3,0 / -3,3 / 2,5 / 0,1":{}},"subset":"4 Slashes"},"Hazard / Shell":{"algs":{"0,-1 / -2,1 / 3,0 / 2,5 / 0,1":{}},"subset":"4 Slashes"},"Left Baron / Left Dish":{"algs":{"0,-1 / 4,1 / 5,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Left Baron / Right Dish":{"algs":{"0,-1 / -3,0 / 3,0 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Left Bird / Hazard":{"algs":{"0,-1 / 3,0 / 4,1 / 5,2 / 0,1":{}},"subset":"4 Slashes"},"Left Bird / Left Scottie":{"algs":{"0,-1 / -2,-2 / -3,0 / 2,-1 / 0,1":{}},"subset":"4 Slashes"},"Left Bird / Right Bird":{"algs":{"1,0 / -3,0 / 2,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Left Bird / Shell":{"algs":{"1,0 / 3,0 / -4,-1 / -2,-5 / -1,0":{}},"subset":"4 Slashes"},"Left Dish / Left Baron":{"algs":{"0,-1 / 1,4 / 5,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Left Dish / Right Baron":{"algs":{"1,0 / 0,3 / 0,-3 / -1,-4 / 0,1":{}},"subset":"4 Slashes"},"Left Kite / Moth":{"algs":{"0,-1 / 1,-2 / -1,2 / 3,0 / 0,1":{}},"subset":"4 Slashes"},"Left Kite / Plane":{"algs":{"0,-1 / -2,1 / 2,-1 / 3,6 / 0,1":{}},"subset":"4 Slashes"},"Left Kite / Right Pinwheel":{"algs":{"1,0 / -1,5 / -2,1 / 3,0 / -1,0":{}},"subset":"4 Slashes"},"Left Pinwheel / Left Zero":{"algs":{"1,0 / -4,-1 / -3,3 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Left Pinwheel / Right Kite":{"algs":{"0,-1 / -5,1 / -3,0 / 2,-1 / 0,1":{}},"subset":"4 Slashes"},"Left Pinwheel / Right Pinwheel":{"algs":{"1,0 / -3,-3 / 0,3 / -1,-1 / 0,1":{}},"subset":"4 Slashes"},"Left Scottie / Hazard":{"algs":{"0,-1 / 0,-3 / -3,3 / -5,-2 / -1,0":{}},"subset":"4 Slashes"},"Left Scottie / Left Bird":{"algs":{"0,-1 / -2,-2 / 2,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Left Snoopy / Angel":{"algs":{"0,-1 / 0,-3 / 1,-2 / -1,-4 / 0,1":{}},"subset":"4 Slashes"},"Left Snoopy / Right Spill":{"algs":{"0,-1 / 1,1 / -4,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Left Spill / Angel":{"algs":{"1,0 / 3,0 / -1,-4 / 1,4 / -1,0":{}},"subset":"4 Slashes"},"Left Spill / Gem":{"algs":{"1,0 / -1,2 / 1,4 / -1,-4 / 0,1":{}},"subset":"4 Slashes"},"Left Spill / Right Snoopy":{"algs":{"1,0 / -1,-1 / -3,0 / -2,1 / -1,0":{}},"subset":"4 Slashes"},"Left Spill / Right Spill":{"algs":{"1,0 / -3,0 / -3,0 / -1,-1 / 0,1":{}},"subset":"4 Slashes"},"Left Tent / Left Whale":{"algs":{"1,0 / -4,-1 / -3,0 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Left Tent / Right Tent":{"algs":{"0,-1 / -2,1 / 2,-1 / 3,0 / 0,1":{}},"subset":"4 Slashes"},"Left Whale / Left Tent":{"algs":{"1,0 / -4,-1 / 3,0 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Left Whale / Right Whale":{"algs":{"0,-1 / 3,0 / -2,1 / -3,0 / -1,0":{}},"subset":"4 Slashes"},"Left Zero / Left Pinwheel":{"algs":{"1,0 / -1,-4 / -3,3 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Left Zero / Moth":{"algs":{"0,-1 / 1,4 / 0,-3 / -4,-1 / 0,1":{}},"subset":"4 Slashes"},"Left Zero / Plane":{"algs":{"0,-1 / 1,4 / 3,0 / 2,5 / 0,1":{}},"subset":"4 Slashes"},"Moth / Left Kite":{"algs":{"0,-1 / -2,1 / 2,-1 / 0,3 / 0,1":{}},"subset":"4 Slashes"},"Moth / Left Zero":{"algs":{"0,-1 / 4,1 / -3,0 / -1,-4 / 0,1":{}},"subset":"4 Slashes"},"Same Moth / Plane":{"algs":{"0,-1 / 3,3 / -2,1 / 3,0 / -1,0":{}},"subset":"4 Slashes"},"Moth / Right Kite":{"algs":{"1,0 / 2,-1 / -2,1 / 0,-3 / -1,0":{}},"subset":"4 Slashes"},"Moth / Right Zero":{"algs":{"1,0 / -4,-1 / 3,0 / 1,4 / -1,0":{}},"subset":"4 Slashes"},"Plane / Left Kite":{"algs":{"1,0 / 0,3 / -1,2 / 3,6 / 0,1":{}},"subset":"4 Slashes"},"Plane / Left Zero":{"algs":{"0,-1 / -5,-2 / 3,0 / -4,-1 / 0,1":{}},"subset":"4 Slashes"},"Plane / Right Kite":{"algs":{"0,-1 / 0,-3 / 1,-2 / -3,6 / -1,0":{}},"subset":"4 Slashes"},"Plane / Right Zero":{"algs":{"1,0 / 5,2 / -3,0 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Right Baron / Left Dish":{"algs":{"1,0 / 3,0 / -3,0 / -4,-1 / 0,1":{}},"subset":"4 Slashes"},"Right Baron / Right Dish":{"algs":{"1,0 / -4,-1 / -5,1 / 3,0 / -1,0":{}},"subset":"4 Slashes"},"Right Bird / Hazard":{"algs":{"1,0 / -3,0 / -4,-1 / -5,-2 / -1,0":{}},"subset":"4 Slashes"},"Right Bird / Left Bird":{"algs":{"0,-1 / 3,0 / -2,1 / 3,0 / -1,0":{}},"subset":"4 Slashes"},"Right Bird / Right Scottie":{"algs":{"1,0 / 2,2 / 3,0 / -2,1 / -1,0":{}},"subset":"4 Slashes"},"Right Bird / Shell":{"algs":{"0,-1 / -3,0 / 4,1 / 2,5 / 0,1":{}},"subset":"4 Slashes"},"Right Dish / Left Baron":{"algs":{"0,-1 / 0,-3 / 0,3 / 1,4 / -1,0":{}},"subset":"4 Slashes"},"Right Dish / Right Baron":{"algs":{"1,0 / -1,-4 / -5,1 / 3,0 / -1,0":{}},"subset":"4 Slashes"},"Right Kite / Left Pinwheel":{"algs":{"0,-1 / 1,-5 / 2,-1 / -3,0 / 0,1":{}},"subset":"4 Slashes"},"Right Kite / Moth":{"algs":{"1,0 / -1,2 / 1,-2 / -3,0 / -1,0":{}},"subset":"4 Slashes"},"Right Kite / Plane":{"algs":{"1,0 / 2,-1 / -2,1 / -3,6 / -1,0":{}},"subset":"4 Slashes"},"Right Pinwheel / Left Kite":{"algs":{"1,0 / 5,-1 / 3,0 / -2,1 / -1,0":{}},"subset":"4 Slashes"},"Right Pinwheel / Left Pinwheel":{"algs":{"1,0 / -3,-3 / -3,0 / -1,-1 / 0,1":{}},"subset":"4 Slashes"},"Right Pinwheel / Right Zero":{"algs":{"0,-1 / 4,1 / -3,3 / -1,-4 / 0,1":{}},"subset":"4 Slashes"},"Right Scottie / Hazard":{"algs":{"1,0 / 0,3 / -3,3 / 2,5 / 0,1":{}},"subset":"4 Slashes"},"Right Scottie / Right Bird":{"algs":{"1,0 / 2,2 / -2,1 / 3,0 / -1,0":{}},"subset":"4 Slashes"},"Right Snoopy / Angel":{"algs":{"1,0 / 0,3 / -1,2 / 1,4 / -1,0":{}},"subset":"4 Slashes"},"Right Snoopy / Left Spill":{"algs":{"1,0 / -1,-1 / 4,1 / 3,0 / -1,0":{}},"subset":"4 Slashes"},"Right Spill / Angel":{"algs":{"0,-1 / -3,0 / 1,4 / -1,-4 / 0,1":{}},"subset":"4 Slashes"},"Right Spill / Gem":{"algs":{"0,-1 / 1,-2 / -1,-4 / 1,4 / -1,0":{}},"subset":"4 Slashes"},"Right Spill / Left Snoopy":{"algs":{"0,-1 / 1,1 / 3,0 / 2,-1 / 0,1":{}},"subset":"4 Slashes"},"Right Spill / Left Spill":{"algs":{"0,-1 / 3,0 / -3,0 / 1,1 / -1,0":{}},"subset":"4 Slashes"},"Right Tent / Left Tent":{"algs":{"1,0 / 2,-1 / -2,1 / -3,0 / -1,0":{}},"subset":"4 Slashes"},"Right Tent / Right Whale":{"algs":{"0,-1 / 4,1 / 3,0 / -4,-1 / 0,1":{}},"subset":"4 Slashes"},"Right Whale / Left Whale":{"algs":{"1,0 / -3,0 / 3,0 / 2,-1 / 0,1":{}},"subset":"4 Slashes"},"Right Whale / Right Tent":{"algs":{"0,-1 / 1,4 / 0,3 / -1,-4 / 0,1":{}},"subset":"4 Slashes"},"Right Zero / Moth":{"algs":{"1,0 / -1,-4 / 0,3 / 4,1 / -1,0":{}},"subset":"4 Slashes"},"Right Zero / Plane":{"algs":{"1,0 / -1,-4 / -3,0 / -2,-5 / -1,0":{}},"subset":"4 Slashes"},"Right Zero / Right Pinwheel":{"algs":{"0,-1 / 1,4 / -3,3 / -1,-4 / 0,1":{}},"subset":"4 Slashes"},"Shell / Hazard":{"algs":{"1,0 / -1,2 / 0,-3 / -5,-2 / -1,0":{}},"subset":"4 Slashes"},"Shell / Left Bird":{"algs":{"0,-1 / 1,-2 / -1,-4 / -2,-5 / -1,0":{}},"subset":"4 Slashes"},"Shell / Right Bird":{"algs":{"1,0 / -1,2 / 1,4 / 2,5 / 0,1":{}},"subset":"4 Slashes"},"Shell / Shell":{"algs":{"0,-1 / 4,1 / -1,2 / 6,3 / 0,1":{}},"subset":"4 Slashes"},"1C / 1C":{"algs":{"0,-1 / -3,0 / 1,-2 / -1,2 / 3,0 / 0,1":{}},"subset":"5 Slashes"},"1E / 1E":{"algs":{"1,0 / -3,0 / 2,-1 / -2,1 / 3,0 / -1,0":{}},"subset":"5 Slashes"},"3C / 3C":{"algs":{"0,-1 / 1,4 / 0,3 / -4,-1 / -2,-5 / -1,0":{}},"subset":"5 Slashes"},"3E / 3E":{"algs":{"1,0 / -1,-4 / 1,4 / 3,0 / -4,-1 / 0,1":{}},"subset":"5 Slashes"},"Angel / Angel":{"algs":{"1,0 / -4,-1 / -3,0 / -3,3 / 4,1 / -1,0":{}},"subset":"5 Slashes"},"Cadj / Copp":{"algs":{"0,-1 / 0,-3 / 0,3 / 1,-2 / -3,0 / -1,0":{}},"subset":"5 Slashes"},"Copp / Cadj":{"algs":{"1,0 / 3,0 / -3,0 / 2,-1 / 0,3 / 0,1":{}},"subset":"5 Slashes"},"Eadj / Eopp":{"algs":{"1,0 / 2,-1 / -2,1 / 2,-1 / -3,0 / 0,1":{}},"subset":"5 Slashes"},"Eopp / Eadj":{"algs":{"0,-1 / 3,0 / -3,0 / 3,0 / -2,1 / -1,0":{}},"subset":"5 Slashes"},"Hazard / Hazard":{"algs":{"1,0 / -1,2 / -3,0 / -2,1 / -4,-1 / 0,1":{}},"subset":"5 Slashes"},"Left Baron / Right Baron":{"algs":{"1,0 / 2,2 / -3,0 / 0,3 / 4,1 / -1,0":{}},"subset":"5 Slashes"},"Left Bird / Left Bird":{"algs":{"0,-1 / 3,0 / 1,1 / -4,-1 / -3,0 / 0,1":{}},"subset":"5 Slashes"},"Left Dish / Right Dish":{"algs":{"1,0 / -1,-1 / -2,1 / 2,-1 / -3,0 / 0,1":{}},"subset":"5 Slashes"},"Left Kite / Right Kite":{"algs":{"1,0 / 0,3 / -4,-1 / -2,1 / -3,0 / -1,0":{}},"subset":"5 Slashes"},"Left Pinwheel / Moth":{"algs":{"0,-1 / 0,-3 / 1,-2 / 0,-3 / 2,-1 / 0,1":{}},"subset":"5 Slashes"},"Left Pinwheel / Plane":{"algs":{"0,-1 / 3,0 / 1,-2 / -1,-4 / -5,-2 / -1,0":{}},"subset":"5 Slashes"},"Left Pinwheel / Right Zero":{"algs":{"1,0 / -4,2 / -3,0 / -2,1 / -4,-1 / 0,1":{}},"subset":"5 Slashes"},"Left Scottie / Left Scottie":{"algs":{"0,-1 / 1,-2 / -4,-1 / 3,0 / -2,1 / -1,0":{}},"subset":"5 Slashes"},"Left Scottie / Right Scottie":{"algs":{"1,0 / 3,0 / 0,3 / 2,-1 / -3,0 / 0,1":{}},"subset":"5 Slashes"},"Left Snoopy / Left Snoopy":{"algs":{"0,-1 / -3,0 / 4,1 / 3,0 / 2,-1 / 0,1":{}},"subset":"5 Slashes"},"Left Snoopy / Right Snoopy":{"algs":{"1,0 / 2,-1 / -2,1 / -1,-1 / -3,0 / 0,1":{}},"subset":"5 Slashes"},"Left Spill / Left Spill":{"algs":{"1,0 / 3,0 / 2,2 / -2,1 / 3,0 / -1,0":{}},"subset":"5 Slashes"},"Left Zero / Right Pinwheel":{"algs":{"0,-1 / -2,4 / 3,0 / 2,-1 / 4,1 / -1,0":{}},"subset":"5 Slashes"},"Moth / Left Pinwheel":{"algs":{"0,-1 / -3,0 / -2,1 / -1,2 / -3,0 / 0,1":{}},"subset":"5 Slashes"},"Moth / Right Pinwheel":{"algs":{"1,0 / 3,0 / 2,-1 / 1,-2 / 3,0 / -1,0":{}},"subset":"5 Slashes"},"Plane / Left Pinwheel":{"algs":{"0,-1 / 0,3 / -2,1 / -4,-1 / -2,-5 / -1,0":{}},"subset":"5 Slashes"},"Plane / Right Pinwheel":{"algs":{"1,0 / 0,-3 / 2,-1 / 4,1 / 2,5 / 0,1":{}},"subset":"5 Slashes"},"Right Baron / Left Baron":{"algs":{"1,0 / 2,2 / 0,-3 / 3,0 / 1,4 / -1,0":{}},"subset":"5 Slashes"},"Right Bird / Right Bird":{"algs":{"1,0 / -3,0 / -1,-1 / 4,1 / 3,0 / -1,0":{}},"subset":"5 Slashes"},"Right Dish / Left Dish":{"algs":{"0,-1 / 1,1 / 2,-1 / -2,1 / 3,0 / -1,0":{}},"subset":"5 Slashes"},"Right Kite / Left Kite":{"algs":{"0,-1 / -2,1 / -4,-1 / -2,1 / -3,0 / -1,0":{}},"subset":"5 Slashes"},"Right Pinwheel / Left Zero":{"algs":{"3,-1 / -2,4 / 0,3 / 2,-1 / 1,4 / -1,0":{}},"subset":"5 Slashes"},"Right Pinwheel / Moth":{"algs":{"1,0 / 0,3 / -1,2 / 0,3 / -2,1 / -1,0":{}},"subset":"5 Slashes"},"Right Pinwheel / Plane":{"algs":{"1,0 / -3,0 / -1,2 / 1,4 / 5,2 / 0,1":{}},"subset":"5 Slashes"},"Right Scottie / Left Scottie":{"algs":{"0,-1 / -3,0 / 0,-3 / -2,1 / 3,0 / -1,0":{}},"subset":"5 Slashes"},"Right Scottie / Right Scottie":{"algs":{"1,0 / -1,2 / 4,1 / -3,0 / 2,-1 / 0,1":{}},"subset":"5 Slashes"},"Right Snoopy / Left Snoopy":{"algs":{"0,-1 / -3,0 / -2,1 / -1,-1 / -3,0 / 0,1":{}},"subset":"5 Slashes"},"Right Snoopy / Right Snoopy":{"algs":{"1,0 / 3,0 / -4,-1 / -2,1 / -3,0 / -1,0":{}},"subset":"5 Slashes"},"Right Spill / Right Spill":{"algs":{"0,-1 / -3,0 / -2,-2 / 2,-1 / -3,0 / 0,1":{}},"subset":"5 Slashes"},"Right Zero / Left Pinwheel":{"algs":{"1,0 / 2,-4 / -3,0 / -2,1 / -4,-1 / 0,1":{}},"subset":"5 Slashes"},"Left Kite / Left Zero":{"algs":{"0,-1 / 1,-2 / -3,0 / 2,-1 / -2,1 / 3,0 / -1,0":{}},"subset":"6 Slashes"},"Left Zero / Left Kite":{"algs":{"0,-1 / 3,0 / -3,0 / -2,-2 / 2,-1 / -3,0 / 0,1":{}},"subset":"6 Slashes"},"Left Zero / Right Zero":{"algs":{"1,0 / -4,2 / -3,0 / 4,1 / 3,0 / 2,-1 / 0,1":{}},"subset":"6 Slashes"},"Right Kite / Right Zero":{"algs":{"1,0 / 0,-3 / -3,0 / 2,-1 / -2,1 / 3,0 / -1,0":{}},"subset":"6 Slashes"},"Right Zero / Left Zero":{"algs":{"0,-1 / 4,-2 / 3,0 / -4,-1 / -2,1 / -3,0 / -1,0":{}},"subset":"6 Slashes"},"Right Zero / Right Kite":{"algs":{"1,0 / -3,0 / 3,0 / 2,2 / -2,1 / 3,0 / -1,0":{}},"subset":"6 Slashes"}}};
const before = () => randElement(["/ 3,-3 / -3,3 /", "/ -3,3 / 3,-3 /", "/ 0,-3 / 3,3 / -3,0 /", "/ -3,0 / 3,3 / 0,-3 /"]);
const after = () => randElement(["0,0", "6,0", "0,6", "6,6"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
