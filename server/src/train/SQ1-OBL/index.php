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
#scrambleText {
    font-size: 20px;
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
$subsets = [];
?>

<main style="overflow-y: auto; padding: 0;">
    <div style="padding: 16px 16px 0 16px;">
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

const algSet = {"puzzle":"SQ1","before":"() => \"\"","after":"() => \"\"","texts":["Square-1 OBL stands for Orient Both Layers, and it is an advanced Square-1 technique. The simpler method is to orient corners and then orient edges separately. Orienting both layers simultaneously is faster, but it requires a lot more learning."],"cases":{"Left Kite / Left Kite":{"algs":{"0,-1 / 0,1":{}}},"Right Kite / Right Kite":{"algs":{"1,0 / -1,0":{}}},"Copp / Copp":{"algs":{"1,0 / 2,2 / 0,1":{}}},"Eopp / Eopp":{"algs":{"1,0 / -1,-1 / 0,1":{}}},"Left Dish / Left Dish":{"algs":{"0,-1 / 4,1 / -1,0":{}}},"Left Pinwheel / Left Pinwheel":{"algs":{"0,-1 / -3,-3 / 0,1":{}}},"Left Tent / Left Tent":{"algs":{"0,-1 / -3,0 / 0,1":{}}},"Right Dish / Right Dish":{"algs":{"1,0 / -4,-1 / 0,1":{}}},"Right Pinwheel / Right Pinwheel":{"algs":{"1,0 / -3,-3 / -1,0":{}}},"Right Tent / Right Tent":{"algs":{"1,0 / -3,0 / -1,0":{}}},"Gem / Left Snoopy":{"algs":{"1,0 / -3,0 / 2,-1 / 0,1":{}}},"Gem / Right Snoopy":{"algs":{"0,-1 / 1,-2 / 0,3 / -1,0":{}}},"Left Baron / Left Baron":{"algs":{"0,-1 / -3,3 / 4,1 / -1,0":{}}},"Left Bird / Right Scottie":{"algs":{"1,0 / 0,-3 / -1,-4 / 0,1":{}}},"Left Kite / Left Pinwheel":{"algs":{"0,-1 / 0,3 / 0,3 / 0,1":{}}},"Left Kite / Right Zero":{"algs":{"0,-1 / 1,1 / 0,3 / -1,0":{}}},"Left Pinwheel / Left Kite":{"algs":{"0,-1 / -3,0 / -3,0 / 0,1":{}}},"Left Scottie / Right Bird":{"algs":{"0,-1 / 3,0 / 4,1 / -1,0":{}}},"Left Scottie / Shell":{"algs":{"1,0 / -4,-1 / -3,0 / 0,1":{}}},"Left Snoopy / Gem":{"algs":{"1,0 / 2,-1 / -3,0 / 0,1":{}}},"Left Snoopy / Left Spill":{"algs":{"0,-1 / 0,-3 / 1,4 / -1,0":{}}},"Left Spill / Left Snoopy":{"algs":{"0,-1 / -3,0 / 4,1 / -1,0":{}}},"Left Tent / Right Whale":{"algs":{"1,0 / -1,-4 / 1,4 / -1,0":{}}},"Left Whale / Left Whale":{"algs":{"0,-1 / -5,1 / 3,0 / -1,0":{}}},"Left Whale / Right Tent":{"algs":{"0,-1 / 4,1 / -4,-1 / 0,1":{}}},"Left Zero / Left Zero":{"algs":{"0,-1 / -2,4 / -1,-1 / 0,1":{}}},"Left Zero / Right Kite":{"algs":{"1,0 / -1,-1 / -3,0 / 0,1":{}}},"Same Moth / Moth":{"algs":{"1,0 / 0,3 / 2,2 / 0,1":{}}},"Moth / Plane":{"algs":{"0,-1 / -2,1 / 2,5 / 0,1":{}}},"Plane / Moth":{"algs":{"1,0 / -1,2 / -5,-2 / -1,0":{}}},"Same Plane / Plane":{"algs":{"1,0 / -3,0 / -1,-1 / 0,1":{}}},"Right Baron / Right Baron":{"algs":{"1,0 / 3,-3 / -4,-1 / 0,1":{}}},"Right Bird / Left Scottie":{"algs":{"0,-1 / 0,3 / 1,4 / -1,0":{}}},"Right Kite / Left Zero":{"algs":{"1,0 / -1,-1 / 0,-3 / 0,1":{}}},"Right Kite / Right Pinwheel":{"algs":{"1,0 / 0,3 / 0,3 / -1,0":{}}},"Right Pinwheel / Right Kite":{"algs":{"1,0 / -3,0 / -3,0 / -1,0":{}}},"Right Scottie / Left Bird":{"algs":{"1,0 / -3,0 / -4,-1 / 0,1":{}}},"Right Scottie / Shell":{"algs":{"0,-1 / 4,1 / 3,0 / -1,0":{}}},"Right Snoopy / Gem":{"algs":{"0,-1 / -2,1 / 3,0 / -1,0":{}}},"Right Snoopy / Right Spill":{"algs":{"1,0 / 0,3 / -1,-4 / 0,1":{}}},"Right Spill / Right Snoopy":{"algs":{"1,0 / 3,0 / -4,-1 / 0,1":{}}},"Right Tent / Left Whale":{"algs":{"0,-1 / 1,4 / -1,-4 / 0,1":{}}},"Right Whale / Left Tent":{"algs":{"1,0 / -4,-1 / 4,1 / -1,0":{}}},"Right Whale / Right Whale":{"algs":{"1,0 / 5,-1 / -3,0 / 0,1":{}}},"Right Zero / Left Kite":{"algs":{"0,-1 / 1,1 / 3,0 / -1,0":{}}},"Right Zero / Right Zero":{"algs":{"1,0 / -3,3 / -1,-1 / 0,1":{}}},"Shell / Left Scottie":{"algs":{"1,0 / 2,-1 / 0,3 / 0,1":{}}},"Shell / Right Scottie":{"algs":{"0,-1 / -2,1 / 0,-3 / -1,0":{}}},"4E / 4E":{"algs":{"1,0 / -1,-1 / -2,4 / -1,-1 / 0,1":{}}},"Angel / Gem":{"algs":{"1,0 / 3,0 / -3,0 / -1,-1 / 0,1":{}}},"Angel / Left Snoopy":{"algs":{"0,-1 / -3,0 / -2,1 / -4,-1 / 0,1":{}}},"Angel / Left Spill":{"algs":{"1,0 / 0,3 / -4,-1 / 4,1 / -1,0":{}}},"Angel / Right Snoopy":{"algs":{"1,0 / 3,0 / 2,-1 / 4,1 / -1,0":{}}},"Angel / Right Spill":{"algs":{"0,-1 / 0,-3 / 4,1 / -4,-1 / 0,1":{}}},"Cadj / Cadj":{"algs":{"1,0 / -3,0 / -1,-1 / -3,0 / 0,1":{}}},"Eadj / Eadj":{"algs":{"1,0 / 3,0 / -1,-1 / -3,0 / 0,1":{}}},"Gem / Angel":{"algs":{"0,-1 / -3,0 / 0,3 / 1,1 / -1,0":{}}},"Gem / Gem":{"algs":{"1,0 / -4,-1 / -2,1 / -3,0 / -1,0":{}}},"Gem / Left Spill":{"algs":{"1,0 / 2,-1 / 4,1 / -4,-1 / 0,1":{}}},"Gem / Right Spill":{"algs":{"0,-1 / -2,1 / -4,-1 / 4,1 / -1,0":{}}},"Hazard / Left Bird":{"algs":{"0,-1 / 0,3 / 1,4 / 2,5 / 0,1":{}}},"Hazard / Left Scottie":{"algs":{"0,-1 / -3,0 / -3,3 / -5,-2 / -1,0":{}}},"Hazard / Right Bird":{"algs":{"1,0 / 0,-3 / -1,-4 / -2,-5 / -1,0":{}}},"Hazard / Right Scottie":{"algs":{"1,0 / 3,0 / -3,3 / 2,5 / 0,1":{}}},"Hazard / Shell":{"algs":{"0,-1 / -2,1 / 3,0 / 2,5 / 0,1":{}}},"Left Baron / Left Dish":{"algs":{"0,-1 / 4,1 / 5,-1 / -3,0 / 0,1":{}}},"Left Baron / Right Dish":{"algs":{"0,-1 / -3,0 / 3,0 / 4,1 / -1,0":{}}},"Left Bird / Hazard":{"algs":{"0,-1 / 3,0 / 4,1 / 5,2 / 0,1":{}}},"Left Bird / Left Scottie":{"algs":{"0,-1 / -2,-2 / -3,0 / 2,-1 / 0,1":{}}},"Left Bird / Right Bird":{"algs":{"1,0 / -3,0 / 2,-1 / -3,0 / 0,1":{}}},"Left Bird / Shell":{"algs":{"1,0 / 3,0 / -4,-1 / -2,-5 / -1,0":{}}},"Left Dish / Left Baron":{"algs":{"0,-1 / 1,4 / 5,-1 / -3,0 / 0,1":{}}},"Left Dish / Right Baron":{"algs":{"1,0 / 0,3 / 0,-3 / -1,-4 / 0,1":{}}},"Left Kite / Moth":{"algs":{"0,-1 / 1,-2 / -1,2 / 3,0 / 0,1":{}}},"Left Kite / Plane":{"algs":{"0,-1 / -2,1 / 2,-1 / 3,6 / 0,1":{}}},"Left Kite / Right Pinwheel":{"algs":{"1,0 / -1,5 / -2,1 / 3,0 / -1,0":{}}},"Left Pinwheel / Left Zero":{"algs":{"1,0 / -4,-1 / -3,3 / 4,1 / -1,0":{}}},"Left Pinwheel / Right Kite":{"algs":{"0,-1 / -5,1 / -3,0 / 2,-1 / 0,1":{}}},"Left Pinwheel / Right Pinwheel":{"algs":{"1,0 / -3,-3 / 0,3 / -1,-1 / 0,1":{}}},"Left Scottie / Hazard":{"algs":{"0,-1 / 0,-3 / -3,3 / -5,-2 / -1,0":{}}},"Left Scottie / Left Bird":{"algs":{"0,-1 / -2,-2 / 2,-1 / -3,0 / 0,1":{}}},"Left Snoopy / Angel":{"algs":{"0,-1 / 0,-3 / 1,-2 / -1,-4 / 0,1":{}}},"Left Snoopy / Right Spill":{"algs":{"0,-1 / 1,1 / -4,-1 / -3,0 / 0,1":{}}},"Left Spill / Angel":{"algs":{"1,0 / 3,0 / -1,-4 / 1,4 / -1,0":{}}},"Left Spill / Gem":{"algs":{"1,0 / -1,2 / 1,4 / -1,-4 / 0,1":{}}},"Left Spill / Right Snoopy":{"algs":{"1,0 / -1,-1 / -3,0 / -2,1 / -1,0":{}}},"Left Spill / Right Spill":{"algs":{"1,0 / -3,0 / -3,0 / -1,-1 / 0,1":{}}},"Left Tent / Left Whale":{"algs":{"1,0 / -4,-1 / -3,0 / 4,1 / -1,0":{}}},"Left Tent / Right Tent":{"algs":{"0,-1 / -2,1 / 2,-1 / 3,0 / 0,1":{}}},"Left Whale / Left Tent":{"algs":{"1,0 / -4,-1 / 3,0 / 4,1 / -1,0":{}}},"Left Whale / Right Whale":{"algs":{"0,-1 / 3,0 / -2,1 / -3,0 / -1,0":{}}},"Left Zero / Left Pinwheel":{"algs":{"1,0 / -1,-4 / -3,3 / 4,1 / -1,0":{}}},"Left Zero / Moth":{"algs":{"0,-1 / 1,4 / 0,-3 / -4,-1 / 0,1":{}}},"Left Zero / Plane":{"algs":{"0,-1 / 1,4 / 3,0 / 2,5 / 0,1":{}}},"Moth / Left Kite":{"algs":{"0,-1 / -2,1 / 2,-1 / 0,3 / 0,1":{}}},"Moth / Left Zero":{"algs":{"0,-1 / 4,1 / -3,0 / -1,-4 / 0,1":{}}},"Moth / Moth":{"algs":{"0,-1 / 1,-2 / -1,-1 / -3,0 / 0,1":{}}},"Same Moth / Plane":{"algs":{"0,-1 / 3,3 / -2,1 / 3,0 / -1,0":{}}},"Moth / Right Kite":{"algs":{"1,0 / 2,-1 / -2,1 / 0,-3 / -1,0":{}}},"Moth / Right Zero":{"algs":{"1,0 / -4,-1 / 3,0 / 1,4 / -1,0":{}}},"Plane / Left Kite":{"algs":{"1,0 / 0,3 / -1,2 / 3,6 / 0,1":{}}},"Plane / Left Zero":{"algs":{"0,-1 / -5,-2 / 3,0 / -4,-1 / 0,1":{}}},"Same Plane / Moth":{"algs":{"0,-1 / -3,-3 / -2,1 / 0,3 / -1,0":{}}},"Plane / Plane":{"algs":{"0,-1 / -2,1 / -1,-1 / 3,6 / 0,1":{}}},"Plane / Right Kite":{"algs":{"0,-1 / 0,-3 / 1,-2 / -3,6 / -1,0":{}}},"Plane / Right Zero":{"algs":{"1,0 / 5,2 / -3,0 / 4,1 / -1,0":{}}},"Right Baron / Left Dish":{"algs":{"1,0 / 3,0 / -3,0 / -4,-1 / 0,1":{}}},"Right Baron / Right Dish":{"algs":{"1,0 / -4,-1 / -5,1 / 3,0 / -1,0":{}}},"Right Bird / Hazard":{"algs":{"1,0 / -3,0 / -4,-1 / -5,-2 / -1,0":{}}},"Right Bird / Left Bird":{"algs":{"0,-1 / 3,0 / -2,1 / 3,0 / -1,0":{}}},"Right Bird / Right Scottie":{"algs":{"1,0 / 2,2 / 3,0 / -2,1 / -1,0":{}}},"Right Bird / Shell":{"algs":{"0,-1 / -3,0 / 4,1 / 2,5 / 0,1":{}}},"Right Dish / Left Baron":{"algs":{"0,-1 / 0,-3 / 0,3 / 1,4 / -1,0":{}}},"Right Dish / Right Baron":{"algs":{"1,0 / -1,-4 / -5,1 / 3,0 / -1,0":{}}},"Right Kite / Left Pinwheel":{"algs":{"0,-1 / 1,-5 / 2,-1 / -3,0 / 0,1":{}}},"Right Kite / Moth":{"algs":{"1,0 / -1,2 / 1,-2 / -3,0 / -1,0":{}}},"Right Kite / Plane":{"algs":{"1,0 / 2,-1 / -2,1 / -3,6 / -1,0":{}}},"Right Pinwheel / Left Kite":{"algs":{"1,0 / 5,-1 / 3,0 / -2,1 / -1,0":{}}},"Right Pinwheel / Left Pinwheel":{"algs":{"1,0 / -3,-3 / -3,0 / -1,-1 / 0,1":{}}},"Right Pinwheel / Right Zero":{"algs":{"0,-1 / 4,1 / -3,3 / -1,-4 / 0,1":{}}},"Right Scottie / Hazard":{"algs":{"1,0 / 0,3 / -3,3 / 2,5 / 0,1":{}}},"Right Scottie / Right Bird":{"algs":{"1,0 / 2,2 / -2,1 / 3,0 / -1,0":{}}},"Right Snoopy / Angel":{"algs":{"1,0 / 0,3 / -1,2 / 1,4 / -1,0":{}}},"Right Snoopy / Left Spill":{"algs":{"1,0 / -1,-1 / 4,1 / 3,0 / -1,0":{}}},"Right Spill / Angel":{"algs":{"0,-1 / -3,0 / 1,4 / -1,-4 / 0,1":{}}},"Right Spill / Gem":{"algs":{"0,-1 / 1,-2 / -1,-4 / 1,4 / -1,0":{}}},"Right Spill / Left Snoopy":{"algs":{"0,-1 / 1,1 / 3,0 / 2,-1 / 0,1":{}}},"Right Spill / Left Spill":{"algs":{"0,-1 / 3,0 / -3,0 / 1,1 / -1,0":{}}},"Right Tent / Left Tent":{"algs":{"1,0 / 2,-1 / -2,1 / -3,0 / -1,0":{}}},"Right Tent / Right Whale":{"algs":{"0,-1 / 4,1 / 3,0 / -4,-1 / 0,1":{}}},"Right Whale / Left Whale":{"algs":{"1,0 / -3,0 / 3,0 / 2,-1 / 0,1":{}}},"Right Whale / Right Tent":{"algs":{"0,-1 / 1,4 / 0,3 / -1,-4 / 0,1":{}}},"Right Zero / Moth":{"algs":{"1,0 / -1,-4 / 0,3 / 4,1 / -1,0":{}}},"Right Zero / Plane":{"algs":{"1,0 / -1,-4 / -3,0 / -2,-5 / -1,0":{}}},"Right Zero / Right Pinwheel":{"algs":{"0,-1 / 1,4 / -3,3 / -1,-4 / 0,1":{}}},"Shell / Hazard":{"algs":{"1,0 / -1,2 / 0,-3 / -5,-2 / -1,0":{}}},"Shell / Left Bird":{"algs":{"0,-1 / 1,-2 / -1,-4 / -2,-5 / -1,0":{}}},"Shell / Right Bird":{"algs":{"1,0 / -1,2 / 1,4 / 2,5 / 0,1":{}}},"Shell / Shell":{"algs":{"0,-1 / 4,1 / -1,2 / 6,3 / 0,1":{}}},"1C / 1C":{"algs":{"0,-1 / -3,0 / 1,-2 / -1,2 / 3,0 / 0,1":{}}},"1E / 1E":{"algs":{"1,0 / -3,0 / 2,-1 / -2,1 / 3,0 / -1,0":{}}},"3C / 3C":{"algs":{"0,-1 / 1,4 / 0,3 / -4,-1 / -2,-5 / -1,0":{}}},"3E / 3E":{"algs":{"1,0 / -1,-4 / 1,4 / 3,0 / -4,-1 / 0,1":{}}},"Angel / Angel":{"algs":{"1,0 / -4,-1 / -3,0 / -3,3 / 4,1 / -1,0":{}}},"Cadj / Copp":{"algs":{"0,-1 / 0,-3 / 0,3 / 1,-2 / -3,0 / -1,0":{}}},"Copp / Cadj":{"algs":{"1,0 / 3,0 / -3,0 / 2,-1 / 0,3 / 0,1":{}}},"Eadj / Eopp":{"algs":{"1,0 / 2,-1 / -2,1 / 2,-1 / -3,0 / 0,1":{}}},"Eopp / Eadj":{"algs":{"0,-1 / 3,0 / -3,0 / 3,0 / -2,1 / -1,0":{}}},"Hazard / Hazard":{"algs":{"1,0 / -1,2 / -3,0 / -2,1 / -4,-1 / 0,1":{}}},"Left Baron / Right Baron":{"algs":{"1,0 / 2,2 / -3,0 / 0,3 / 4,1 / -1,0":{}}},"Left Bird / Left Bird":{"algs":{"0,-1 / 3,0 / 1,1 / -4,-1 / -3,0 / 0,1":{}}},"Left Dish / Right Dish":{"algs":{"1,0 / -1,-1 / -2,1 / 2,-1 / -3,0 / 0,1":{}}},"Left Kite / Right Kite":{"algs":{"1,0 / 0,3 / -4,-1 / -2,1 / -3,0 / -1,0":{}}},"Left Pinwheel / Moth":{"algs":{"0,-1 / 0,-3 / 1,-2 / 0,-3 / 2,-1 / 0,1":{}}},"Left Pinwheel / Plane":{"algs":{"0,-1 / 3,0 / 1,-2 / -1,-4 / -5,-2 / -1,0":{}}},"Left Pinwheel / Right Zero":{"algs":{"1,0 / -4,2 / -3,0 / -2,1 / -4,-1 / 0,1":{}}},"Left Scottie / Left Scottie":{"algs":{"0,-1 / 1,-2 / -4,-1 / 3,0 / -2,1 / -1,0":{}}},"Left Scottie / Right Scottie":{"algs":{"1,0 / 3,0 / 0,3 / 2,-1 / -3,0 / 0,1":{}}},"Left Snoopy / Left Snoopy":{"algs":{"0,-1 / -3,0 / 4,1 / 3,0 / 2,-1 / 0,1":{}}},"Left Snoopy / Right Snoopy":{"algs":{"1,0 / 2,-1 / -2,1 / -1,-1 / -3,0 / 0,1":{}}},"Left Spill / Left Spill":{"algs":{"1,0 / 3,0 / 2,2 / -2,1 / 3,0 / -1,0":{}}},"Left Zero / Right Pinwheel":{"algs":{"0,-1 / -2,4 / 3,0 / 2,-1 / 4,1 / -1,0":{}}},"Moth / Left Pinwheel":{"algs":{"0,-1 / -3,0 / -2,1 / -1,2 / -3,0 / 0,1":{}}},"Moth / Right Pinwheel":{"algs":{"1,0 / 3,0 / 2,-1 / 1,-2 / 3,0 / -1,0":{}}},"Plane / Left Pinwheel":{"algs":{"0,-1 / 0,3 / -2,1 / -4,-1 / -2,-5 / -1,0":{}}},"Plane / Right Pinwheel":{"algs":{"1,0 / 0,-3 / 2,-1 / 4,1 / 2,5 / 0,1":{}}},"Right Baron / Left Baron":{"algs":{"1,0 / 2,2 / 0,-3 / 3,0 / 1,4 / -1,0":{}}},"Right Bird / Right Bird":{"algs":{"1,0 / -3,0 / -1,-1 / 4,1 / 3,0 / -1,0":{}}},"Right Dish / Left Dish":{"algs":{"0,-1 / 1,1 / 2,-1 / -2,1 / 3,0 / -1,0":{}}},"Right Kite / Left Kite":{"algs":{"0,-1 / -2,1 / -4,-1 / -2,1 / -3,0 / -1,0":{}}},"Right Pinwheel / Left Zero":{"algs":{"3,-1 / -2,4 / 0,3 / 2,-1 / 1,4 / -1,0":{}}},"Right Pinwheel / Moth":{"algs":{"1,0 / 0,3 / -1,2 / 0,3 / -2,1 / -1,0":{}}},"Right Pinwheel / Plane":{"algs":{"1,0 / -3,0 / -1,2 / 1,4 / 5,2 / 0,1":{}}},"Right Scottie / Left Scottie":{"algs":{"0,-1 / -3,0 / 0,-3 / -2,1 / 3,0 / -1,0":{}}},"Right Scottie / Right Scottie":{"algs":{"1,0 / -1,2 / 4,1 / -3,0 / 2,-1 / 0,1":{}}},"Right Snoopy / Left Snoopy":{"algs":{"0,-1 / -3,0 / -2,1 / -1,-1 / -3,0 / 0,1":{}}},"Right Snoopy / Right Snoopy":{"algs":{"1,0 / 3,0 / -4,-1 / -2,1 / -3,0 / -1,0":{}}},"Right Spill / Right Spill":{"algs":{"0,-1 / -3,0 / -2,-2 / 2,-1 / -3,0 / 0,1":{}}},"Right Zero / Left Pinwheel":{"algs":{"1,0 / 2,-4 / -3,0 / -2,1 / -4,-1 / 0,1":{}}},"Left Kite / Left Zero":{"algs":{"0,-1 / 1,-2 / -3,0 / 2,-1 / -2,1 / 3,0 / -1,0":{}}},"Left Zero / Left Kite":{"algs":{"0,-1 / 3,0 / -3,0 / -2,-2 / 2,-1 / -3,0 / 0,1":{}}},"Left Zero / Right Zero":{"algs":{"1,0 / -4,2 / -3,0 / 4,1 / 3,0 / 2,-1 / 0,1":{}}},"Right Kite / Right Zero":{"algs":{"1,0 / 0,-3 / -3,0 / 2,-1 / -2,1 / 3,0 / -1,0":{}}},"Right Zero / Left Zero":{"algs":{"0,-1 / 4,-2 / 3,0 / -4,-1 / -2,1 / -3,0 / -1,0":{}}},"Right Zero / Right Kite":{"algs":{"1,0 / -3,0 / 3,0 / 2,2 / -2,1 / 3,0 / -1,0":{}}}}};
const before = () => "";
const after = () => "";
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
