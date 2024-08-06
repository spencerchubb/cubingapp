<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>Winter Variation Trainer</title>
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
$subsets = ["3 Oriented", "2 Oriented", "1 Oriented", "0 Oriented"];
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

const algSet = {"puzzle":"3x3","diagramType":"3D","gray":[9,12,15,29,32,35,36,39,42,45,48,51],"subsets":["3 Oriented","2 Oriented","1 Oriented","0 Oriented"],"before":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["Winter Variation (also called WV) is an advanced variation that's useful for methods like CFOP and ZZ. You can use Winter Variation when you have the last pair paired up, and the edges are oriented. Winter variation allows you to skip OLL by altering how you insert the last pair. This technique is commonly called 'influencing' OLL."],"cases":{"WV 1":{"algs":{"U' L' U2 R U' R' U2 L":{}},"subset":"3 Oriented"},"WV 2":{"algs":{"U R U' R'":{}},"subset":"2 Oriented"},"WV 3":{"algs":{"R' F R U R U' R' F'":{}},"subset":"2 Oriented"},"WV 4":{"algs":{"U R2 D R' U' R D' R2":{}},"subset":"2 Oriented"},"WV 5":{"algs":{"U R U' R' U R' U' R U' R' U2 R":{}},"subset":"2 Oriented"},"WV 6":{"algs":{"U' R' D' R U2 R' D R2 U' R'":{}},"subset":"2 Oriented"},"WV 7":{"algs":{"U R U R' U' R U' R'":{}},"subset":"2 Oriented"},"WV 8":{"algs":{"U2 R U' R' U R U2 R'":{}},"subset":"1 Oriented"},"WV 9":{"algs":{"U2 F' R U2 R' U2 R' F R":{}},"subset":"1 Oriented"},"WV 10":{"algs":{"R' U2 R U R' U R2 U2 R'":{}},"subset":"1 Oriented"},"WV 11":{"algs":{"U2 R' U' R2 U' R2 U2 R":{}},"subset":"1 Oriented"},"WV 12":{"algs":{"R' F2 R F2 U L' U L":{}},"subset":"1 Oriented"},"WV 13":{"algs":{"U2 R U2 R2 U' R U' R' U2 R":{}},"subset":"1 Oriented"},"WV 14":{"algs":{"U2 R2 D R' U2 R D' R2":{}},"subset":"1 Oriented"},"WV 15":{"algs":{"L' U R U' R' L":{}},"subset":"1 Oriented"},"WV 16":{"algs":{"U R' D' R U R' D R2 U2 R'":{}},"subset":"1 Oriented"},"WV 17":{"algs":{"R' F' R U2 R U2 R' F":{}},"subset":"1 Oriented"},"WV 18":{"algs":{"U2 R U2 R'":{}},"subset":"1 Oriented"},"WV 19":{"algs":{"R' F2 R2 U' R' U' R U R' F2":{}},"subset":"1 Oriented"},"WV 20":{"algs":{"U R U' R' U' R U R' U R U2 R'":{}},"subset":"0 Oriented"},"WV 21":{"algs":{"U R U' R2 U2 R U R' U R":{}},"subset":"0 Oriented"},"WV 22":{"algs":{"U R2 D R' U R D' R' U2 R'":{}},"subset":"0 Oriented"},"WV 23":{"algs":{"R2 U R' U R' U' R U R U2 R2":{}},"subset":"0 Oriented"},"WV 24":{"algs":{"U2 R U' R' U R U' R' U R U2 R'":{}},"subset":"0 Oriented"},"WV 25":{"algs":{"U2 R U2 R2 U2 R U R' U R":{}},"subset":"0 Oriented"},"WV 26":{"algs":{"U R U' R2 U' R U' R' U2 R":{}},"subset":"0 Oriented"},"WV 27":{"algs":{"U R U R' U' R U R' U' R U' R'":{}},"subset":"0 Oriented"}}};
const before = () => randElement(["", "U", "U'", "U2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
