<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>LSE EOLR Trainer</title>
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
$subsets = ["Arrow", "1 / 1", "2 Adj / 2", "2 Adj / 0", "2 Opp / 2", "2 Opp / 0", "0 / 2", "All 6"];
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

const algSet = {"puzzle":"3x3","diagramType":"3D","gray":[12,14,30,32],"subsets":["Arrow","1 / 1","2 Adj / 2","2 Adj / 0","2 Opp / 2","2 Opp / 0","0 / 2","All 6"],"before":"() => randElement([\"M' U2 M U2\", \"U2 M2 U2 M2\", \"M U2 M' U2\", \"M2 U2 M U2 M\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["Roux EOLR is an advanced Roux technique that stands for Edge Orientation Left and Right. EOLR combines substeps 4a and 4b to save moves.","The goal of EOLR is to orient edges while getting UL and UR on bottom. After that, you can insert UL UR with M2.","EOLR is intuitive, which means you can learn the solutions without rote memorization. Due to the intuitive nature, this page does not show all the mirrored algorithms.","On this page, the letters in parentheses are the positions of the UL UR edges. For example, (UF DF) means the edges are in the up-front and down-front positions."],"cases":{"Arrow (UF DF)":{"algs":{"M":{"setup":"M' U M2 U"}},"subset":"Arrow"},"Arrow (UB UR)":{"algs":{"M' U M":{"setup":"U M2 U"}},"subset":"Arrow"},"Arrow (UF UR)":{"algs":{"U M' U2 M U M":{"setup":"M' U M2 U"}},"subset":"Arrow"},"Arrow (DF DB)":{"algs":{"U' M U' M' U' M":{"setup":"M' U M2 U"}},"subset":"Arrow"},"1 / 1 (UF UR)":{"algs":{"M' U M' U M U M":{"setup":"U M2 U"}},"subset":"1 / 1"},"1 / 1 (UF DF)":{"algs":{"M U M' U M U M'":{"setup":"U M2 U"},"U' M' U M' U2 M U M":{}},"subset":"1 / 1"},"1 / 1 (UF UB)":{"algs":{"M U' M' U2 M' U2 M' U M":{"setup":"M' U M2 U"}},"subset":"1 / 1"},"1 / 1 (UR UB)":{"algs":{"M U' M' U' M'":{"setup":"M' U M2 U"}},"subset":"1 / 1"},"1 / 1 (UR UL)":{"algs":{"U' M' U M' U2 M U M'":{"setup":"U M2 U"}},"subset":"1 / 1"},"1 / 1 (UR DF)":{"algs":{"M' U' M' U' M'":{"setup":"M' U M2 U"}},"subset":"1 / 1"},"1 / 1 (UR DB)":{"algs":{"M U M' U M U M":{"setup":"U M2 U"}},"subset":"1 / 1"},"1 / 1 (UB DF)":{"algs":{"U M' U2 M U M U M' U M'":{"setup":"M' U M2 U"}},"subset":"1 / 1"},"1 / 1 (UB DB)":{"algs":{"U' M' U M' U2 M'":{"setup":"M' U M2 U"}},"subset":"1 / 1"},"1 / 1 (DF DB)":{"algs":{"M' U' M' U2 M' U2 M' U M":{"setup":"M' U M2 U"}},"subset":"1 / 1"},"2 Adj / 2 (UF UL)":{"algs":{"U M' U2 M U M U M":{"setup":"U M2 U"}},"subset":"2 Adj / 2"},"2 Adj / 2 (UF UR)":{"algs":{"M' U' M U2 M U2 M' U M'":{"setup":"M' U M2 U"}},"subset":"2 Adj / 2"},"2 Adj / 2 (UF UB)":{"algs":{"U M' U' M' U' M' U' M":{"setup":"U M2 U"}},"subset":"2 Adj / 2"},"2 Adj / 2 (UL UB)":{"algs":{"U' M2 U M'":{"setup":"M' U M2 U"}},"subset":"2 Adj / 2"},"2 Adj / 2 (UF DF)":{"algs":{"U' M2 U M U M":{"setup":"U M2 U"}},"subset":"2 Adj / 2"},"2 Adj / 2 (UL DF)":{"algs":{"U2 M' U2 M' U M'":{"setup":"M' U M2 U"}},"subset":"2 Adj / 2"},"2 Adj / 2 (DF DB)":{"algs":{"U M' U' M' U' M' U' M'":{"setup":"U M2 U"}},"subset":"2 Adj / 2"},"2 Adj / 0 (UF UL)":{"algs":{"U M' U' M' U2 M":{"setup":"M' U M2 U"}},"subset":"2 Adj / 0"},"2 Adj / 0 (UF UR)":{"algs":{"M' U2 M' U' M' U' M U' M":{"setup":"M' U M2 U"}},"subset":"2 Adj / 0"},"2 Adj / 0 (UF UB)":{"algs":{"M' U M U M' U2 M U' M":{"setup":"M' U M2 U"}},"subset":"2 Adj / 0"},"2 Adj / 0 (UL UB)":{"algs":{"U M' U' M' U M U' M' U' M":{"setup":"M' U M2 U"}},"subset":"2 Adj / 0"},"2 Adj / 0 (UF DF)":{"algs":{"U2 M U M' U2 M U' M'":{"setup":"U M2 U"}},"subset":"2 Adj / 0"},"2 Adj / 0 (UL DF)":{"algs":{"M' U M' U2 M' U M":{"setup":"U M2 U"}},"subset":"2 Adj / 0"},"2 Adj / 0 (DF DB)":{"algs":{"M' U M' U2 M' U' M'":{"setup":"U M2 U"}},"subset":"2 Adj / 0"},"2 Opp / 2 (UF UR)":{"algs":{"M' U2 M' U2 M U M":{"setup":"U M2 U"}},"subset":"2 Opp / 2"},"2 Opp / 2 (UR UL)":{"algs":{"M2 U' M' U2 M' U2 M":{"setup":"M' U M2 U"}},"subset":"2 Opp / 2"},"2 Opp / 2 (UF DF)":{"algs":{"M2 U' M' U2 M' U2 M' U M'":{"setup":"U M2 U"}},"subset":"2 Opp / 2"},"2 Opp / 2 (DF DB)":{"algs":{"M' U2 M' U2 M'":{"setup":"M' U M2 U"}},"subset":"2 Opp / 2"},"2 Opp / 2 (UR DF)":{"algs":{"M' U2 M U M U2 M' U' M'":{"setup":"M' U M2 U"}},"subset":"2 Opp / 2"},"2 Opp / 2 (UF UB)":{"algs":{"M' U2 M' U2 M U' M U' M' U2 M":{"setup":"U M2 U"}},"subset":"2 Opp / 2"},"2 Opp / 0 (UF UR)":{"algs":{"M' U' M U M' U M'":{"setup":"U M2 U"}},"subset":"2 Opp / 0"},"2 Opp / 0 (UF UB)":{"algs":{"M' U' M U M' U' M'":{"setup":"U M2 U"}},"subset":"2 Opp / 0"},"2 Opp / 0 (UF DF)":{"algs":{"M U M' U' M U' M'":{"setup":"U M2 U"}},"subset":"2 Opp / 0"},"2 Opp / 0 (UR DF)":{"algs":{"M' U M U' M":{"setup":"M' U M2 U"}},"subset":"2 Opp / 0"},"2 Opp / 0 (UR UL)":{"algs":{"M' U' M' U' M' U2 M U' M'":{"setup":"M' U M2 U"}},"subset":"2 Opp / 0"},"2 Opp / 0 (DF DB)":{"algs":{"R U R' U' M' U R U' r'":{"setup":"U M2 U"},"U S R' F R S' R' F' R":{}},"subset":"2 Opp / 0"},"0 / 2 (UF UR)":{"algs":{"M' U' M' U M'":{"setup":"M' U M2 U"}},"subset":"0 / 2"},"0 / 2 (UL UR)":{"algs":{"M' U' M U' M U2 M' U' M":{"setup":"M' U M2 U"}},"subset":"0 / 2"},"0 / 2 (UF DF)":{"algs":{"U M' U' M' U M U M":{"setup":"U M2 U"}},"subset":"0 / 2"},"0 / 2 (DF DB)":{"algs":{"M' U' M' U M U' M'":{"setup":"U M2 U"}},"subset":"0 / 2"},"All 6 (UF DF)":{"algs":{"U' M U M' U' M U' M' U2 M":{"setup":"M' U M2 U"}},"subset":"All 6"},"All 6 (DF DB)":{"algs":{"M' U' M' U' M U' M' U2 M' U' M":{"setup":"U M2 U"}},"subset":"All 6"}}};
const before = () => randElement(["M' U2 M U2", "U2 M2 U2 M2", "M U2 M' U2", "M2 U2 M U2 M"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
