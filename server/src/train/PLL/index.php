<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>PLL Trainer</title>
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
$subsets = ["Adj corners", "Diag corners", "G perm", "Edge perm"];
?>

<main style="overflow-y: auto; padding: 0;">
    <div style="padding: 16px 16px 0 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div id="leftArrow"></div>
            <p id="nameText">&nbsp;</p>
            <div id="rightArrow"></div>
        </div>
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

const algSet = {"puzzle":"3x3","diagramType":"2D","subsets":["Adj corners","Diag corners","G perm","Edge perm"],"before":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["Permutation of Last Layer (also called PLL) is the last step of the CFOP Rubik's Cube method. CFOP stands for Cross, F2L, OLL, and PLL.","Up to this point, the first two layers should be solved, and the last layer should be oriented. After PLL, the entire Rubik's Cube should be solved.","PLL has 21 algorithms, so it has less algorithms than OLL. Most cubers recommend learning PLL before OLL because you only need to learn 21 algorithms to improve your times.","This site tells you all 21 PLL algorithms, the fingertricks, and how to remember them."],"cases":{"Aa perm":{"subset":"Adj corners","algs":{"x (R' U R') D2 (R U' R') D2 R2 x'":{"vid":"../vids/PLL/Aa.mp4","note":"Inverse of Ab perm"}}},"Ab perm":{"subset":"Adj corners","algs":{"x R2' D2 (R U R') D2 (R U' R) x'":{"vid":"../vids/PLL/Ab.mp4","note":"Inverse of Aa perm"}}},"E perm":{"subset":"Diag corners","algs":{"x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x":{"vid":"../vids/PLL/E.mp4","note":"4 groups of R U R D"},"R' U' R' D' R U' R' D R U R' D' R U R' D R2":{}}},"F perm":{"subset":"Adj corners","algs":{"R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R":{"vid":"../vids/PLL/F.mp4","note":"R' U' F' (T perm) F U R"}}},"Ga perm":{"subset":"G perm","algs":{"R2 U R' U R' U' R U' R2 D U' R' U R D'":{"vid":"../vids/PLL/Ga.mp4","note":"Inverse of Gb"}}},"Gb perm":{"subset":"G perm","algs":{"R' U' R U D' R2 U R' U R U' R U' R2 D":{"vid":"../vids/PLL/Gb.mp4","note":"Inverse of Ga"}}},"Gc perm":{"subset":"G perm","algs":{"R2 F2 R U2 R U2 R' F R U R' U' R' F R2":{"vid":"../vids/PLL/Gc.mp4"},"R2 U' R U' R U R' U R2 D' U R U' R' D":{}}},"Gd perm":{"subset":"G perm","algs":{"R U R' U' D R2 U' R U' R' U R' U R2 D'":{"vid":"../vids/PLL/Gd.mp4","note":"Mirror of Gb"}}},"H perm":{"subset":"Edge perm","algs":{"M2 U' M2 U2 M2 U' M2":{"vid":"../vids/PLL/H.mp4"}}},"Ja perm":{"subset":"Adj corners","algs":{"x R2 F R F' R U2 r' U r U2 x'":{"vid":"../vids/PLL/Ja.mp4"},"L' U' L F L' U' L U L F' L2 U L":{},"R' U L' U2 R U' R' U2 R L":{},"R' U2 R U R' U2 L U' R U L'":{}}},"Jb perm":{"subset":"Adj corners","algs":{"(R U R' F') (R U R' U') R' F R2 U' R' U'":{"vid":"../vids/PLL/Jb.mp4","note":"T perm with last 4 moves shifted to beginning"}}},"Na perm":{"subset":"Diag corners","algs":{"(R U R' U) (R U R' F' R U R' U' R' F R2 U' R') (U2 R U' R')":{"vid":"../vids/PLL/Na.mp4","note":"R U R' U (J perm) U' R U' R'"},"F' R U R' U' R' F R2 F U' R' U' R U F' R'":{},"R F U' R' U R U F' R2 F' R U R U' R' F":{},"r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r":{}}},"Nb perm":{"subset":"Diag corners","algs":{"r' D' F r U' r' F' D r2 U r' U' r' F r F'":{"vid":"../vids/PLL/Nb.mp4","note":"Ends with wide sexy sledge"},"R' U R U' R' F' U' F R U R' F R' F' R U' R":{},"R' U L' U2 R U' L R' U L' U2 R U' L":{}}},"Ra perm":{"subset":"Adj corners","algs":{"(R U' R' U') R U (R D R') U' (R D' R') U2 R' U'":{"vid":"../vids/PLL/Ra.mp4"},"R U R' F' R U2 R' U2 R' F R U R U2 R'":{}}},"Rb perm":{"subset":"Adj corners","algs":{"(R' U2 R U2) R' F (R U R' U') R' F' R2":{"vid":"../vids/PLL/Rb.mp4"}}},"T perm":{"subset":"Adj corners","algs":{"(R U R' U') R' F R2 U' R' U' (R U R' F')":{"vid":"../vids/PLL/T.mp4","note":"J perm with first 4 moves shifted to end"}}},"Ua perm":{"subset":"Edge perm","algs":{"M2 U M U2 M' U M2":{"vid":"../vids/PLL/Ua.mp4","note":"Inverse of Ub perm"},"R U' R U R U R U' R' U' R2":{},"R U R' U R' U' R2 U' R' U R' U R":{}}},"Ub perm":{"subset":"Edge perm","algs":{"M2 U' M U2 M' U' M2":{"vid":"../vids/PLL/Ub.mp4","note":"Inverse of Ua perm"},"R2' U R U R' U' R3 U' R' U R'":{},"R' U R' U' R' U' R' U R U R2":{}}},"V perm":{"subset":"Diag corners","algs":{"(R' U R' U') (R D' R' D) R' U D' R2 U' R2 D R2":{"vid":"../vids/PLL/V.mp4"},"R' U R' U' y R' F' R2 U' R' U R' F R F":{}}},"Y perm":{"subset":"Diag corners","algs":{"F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')":{"vid":"../vids/PLL/Y.mp4","note":"2 OLLs"},"F R' F R2 U' R' U' R U R' F' R U R' U' F'":{}}},"Z perm":{"subset":"Edge perm","algs":{"M2 U' M2 U' M' U2 M2 U2 M' U2":{"vid":"../vids/PLL/Z.mp4"},"M' U' M2 U' M2 U' M' U2 M2":{}}}}};
const before = () => randElement(["", "U", "U'", "U2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
