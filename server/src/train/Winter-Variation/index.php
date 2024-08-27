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
$subsets = ["3 Oriented", "2 Oriented", "1 Oriented", "0 Oriented"];
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

const algSet = {"puzzle":"3x3","diagramType":"3D","gray":[9,12,15,29,32,35,36,39,42,45,48,51],"subsets":["3 Oriented","2 Oriented","1 Oriented","0 Oriented"],"before":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["Winter Variation (also called WV) is an advanced variation that's useful for methods like CFOP and ZZ. You can use Winter Variation when you have the last pair paired up, and the edges are oriented. Winter variation allows you to skip OLL by altering how you insert the last pair. This technique is commonly called 'influencing' OLL."],"cases":{"WV 1":{"algs":{"U' L' U2 R U' R' U2 L":{}},"subset":"3 Oriented"},"WV 2":{"algs":{"U R U' R'":{}},"subset":"2 Oriented"},"WV 3":{"algs":{"R' F R U R U' R' F'":{}},"subset":"2 Oriented"},"WV 4":{"algs":{"U R2 D R' U' R D' R2":{}},"subset":"2 Oriented"},"WV 5":{"algs":{"U R U' R' U R' U' R U' R' U2 R":{}},"subset":"2 Oriented"},"WV 6":{"algs":{"U' R' D' R U2 R' D R2 U' R'":{}},"subset":"2 Oriented"},"WV 7":{"algs":{"U R U R' U' R U' R'":{}},"subset":"2 Oriented"},"WV 8":{"algs":{"U2 R U' R' U R U2 R'":{}},"subset":"1 Oriented"},"WV 9":{"algs":{"U2 F' R U2 R' U2 R' F R":{}},"subset":"1 Oriented"},"WV 10":{"algs":{"R' U2 R U R' U R2 U2 R'":{}},"subset":"1 Oriented"},"WV 11":{"algs":{"U2 R' U' R2 U' R2 U2 R":{}},"subset":"1 Oriented"},"WV 12":{"algs":{"R' F2 R F2 U L' U L":{}},"subset":"1 Oriented"},"WV 13":{"algs":{"U2 R U2 R2 U' R U' R' U2 R":{}},"subset":"1 Oriented"},"WV 14":{"algs":{"U2 R2 D R' U2 R D' R2":{}},"subset":"1 Oriented"},"WV 15":{"algs":{"L' U R U' R' L":{}},"subset":"1 Oriented"},"WV 16":{"algs":{"U R' D' R U R' D R2 U2 R'":{}},"subset":"1 Oriented"},"WV 17":{"algs":{"R' F' R U2 R U2 R' F":{}},"subset":"1 Oriented"},"WV 18":{"algs":{"U2 R U2 R'":{}},"subset":"1 Oriented"},"WV 19":{"algs":{"R' F2 R2 U' R' U' R U R' F2":{}},"subset":"1 Oriented"},"WV 20":{"algs":{"U R U' R' U' R U R' U R U2 R'":{}},"subset":"0 Oriented"},"WV 21":{"algs":{"U R U' R2 U2 R U R' U R":{}},"subset":"0 Oriented"},"WV 22":{"algs":{"U R2 D R' U R D' R' U2 R'":{}},"subset":"0 Oriented"},"WV 23":{"algs":{"R2 U R' U R' U' R U R U2 R2":{}},"subset":"0 Oriented"},"WV 24":{"algs":{"U2 R U' R' U R U' R' U R U2 R'":{}},"subset":"0 Oriented"},"WV 25":{"algs":{"U2 R U2 R2 U2 R U R' U R":{}},"subset":"0 Oriented"},"WV 26":{"algs":{"U R U' R2 U' R U' R' U2 R":{}},"subset":"0 Oriented"},"WV 27":{"algs":{"U R U R' U' R U R' U' R U' R'":{}},"subset":"0 Oriented"}}};
const before = () => randElement(["", "U", "U'", "U2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
