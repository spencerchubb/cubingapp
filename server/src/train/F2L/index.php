<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>F2L Trainer</title>
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
$subsets = ["Basic insert", "Split", "Connected", "Corner in slot", "Edge in slot", "Both in slot"];
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

const algSet = {"puzzle":"3x3","diagramType":"3D","gray":[0,1,2,3,5,6,7,8,9,12,15,29,32,35,36,39,42,45,48,51],"subsets":["Basic insert","Split","Connected","Corner in slot","Edge in slot","Both in slot"],"before":"() => randElement([\"F R U R' U' F' U\", \"F U R U' R' F' U2\", \"R U R' U' R' F R F' U'\", \"R' U' R' F R F' U R\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["First Two Layers (also called F2L) is the second step of the CFOP Rubik's Cube method. F2L is involves solving a corner and an edge at the same time, which is much faster than solving them separately.","It is highly recommended to learn F2L intuitively <i>before</i> learning these algorithms. These F2L algorithms are optimized for speed, and some are hard to remember. If you try to memorize these algorithms without an intuitive understanding, you will just make it harder for yourself.","As an added benefit, this site also shows you the fastest way to solve each F2L case from any angle."],"cases":{"F2L 1":{"algs":{"U R U' R'":{"note":"Front Right"},"F' L F L'":{"note":"Front Left"},"U f R' f'":{"note":"Back Right"},"U L U' L'":{"note":"Back Left"}},"subset":"Basic insert"},"F2L 2":{"algs":{"F R' F' R":{"note":"Front Right"},"U' L' U L":{"note":"Front Left"},"U' R' U R":{"note":"Back Right"},"U' f' L f":{"note":"Back Left"}},"subset":"Basic insert"},"F2L 3":{"algs":{"F' U' F":{"note":"Front Right"},"L' U' L":{"note":"Front Left"},"R' U' R":{"note":"Back Right"},"f' L' f":{"note":"Back Left"}},"subset":"Basic insert"},"F2L 4":{"algs":{"R U R'":{"note":"Front Right"},"F U F'":{"note":"Front Left"},"f R f'":{"note":"Back Right"},"L U L'":{"note":"Back Left"}},"subset":"Basic insert"},"F2L 5":{"algs":{"U' R U R' U2 R U' R'":{"note":"Front Right"},"U2 F R U R' U2 F'":{"note":"Front Left"},"U' R' F R U R' U' F' R":{"note":"Back Right"},"U' L U L' U2 L U' L'":{"note":"Back Left"}},"subset":"Split"},"F2L 6":{"algs":{"U' r U' R' U R U r'":{"note":"Front Right"},"F2 R U R' U' F2":{"note":"Front Left"},"U R' U' R U R' U2 R":{"note":"Back Right"},"U' l U' L' U L U l'":{"note":"Back Left"}},"subset":"Split"},"F2L 7":{"algs":{"U' R U2 R' U' R U2 R'":{"note":"Front Right"},"F U R U2 R' U F'":{"note":"Front Left"},"r U2 R2 U' R2 U' r'":{"note":"Back Right"},"U' L U2 L' U2 L U' L'":{"note":"Back Left"}},"subset":"Split"},"F2L 8":{"algs":{"y' R' U2 R U R' U2 R y":{"note":"Front Right"},"U L' U2 L U L' U2 L":{"note":"Front Left"},"U R' U2 R U R' U2 R":{"note":"Back Right"},"l' U2 L2 U L2 U l":{"note":"Back Left"}},"subset":"Split"},"F2L 9":{"algs":{"U' R U' R' U F' U' F":{"note":"Front Right"},"U L' U' L U' L' U' L":{"note":"Front Left"},"U R' U' R U' R' U' R":{"note":"Back Right"},"y' U L' U' L U' L' U' L y":{"note":"Back Left"}},"subset":"Split"},"F2L 10":{"algs":{"U' R U R' U R U R'":{"note":"Front Right"},"F U' R U R' U2 F'":{"note":"Front Left"},"R2 U' F' U F R2":{"note":"Back Right"},"U' L U L' U L U L'":{"note":"Back Left"}},"subset":"Split"},"F2L 11":{"algs":{"U' R U2 R' U F' U' F":{"note":"Front Right"},"L' U L U' L' U L U2 L' U L":{"note":"Front Left"},"R' U R U' R' U R U2 R' U R":{"note":"Back Right"},"U' L U2 L' U f' L' f":{"note":"Back Left"}},"subset":"Connected"},"F2L 12":{"algs":{"R U' R' U R U' R' U2 R U' R'":{"note":"Front Right"},"U L' U2 L U' F U F'":{"note":"Front Left"},"U R' U2 R U' f R f'":{"note":"Back Right"},"L U' L' U L U' L' U2 L U' L'":{"note":"Back Left"}},"subset":"Connected"},"F2L 13":{"algs":{"y' U R' U R U' R' U' R y":{"note":"Front Right"},"U L' U L U' L' U' L":{"note":"Front Left"},"U R' U R U' R' U' R":{"note":"Back Right"},"y' U L' U L U' L' U' L y":{"note":"Back Left"}},"subset":"Connected"},"F2L 14":{"algs":{"U' R U' R' U R U R'":{"note":"Front Right"},"y U' L U' L' U L U L' y'":{"note":"Front Left"},"y U' R U' R' U R U R' y'":{"note":"Back Right"},"U' L U' L' U L U L'":{"note":"Back Left"}},"subset":"Connected"},"F2L 15":{"algs":{"R U R' U2 R U' R' U R U' R'":{"note":"Front Right"},"L' U L U2 F U F'":{"note":"Front Left"},"R' U R U2 f R f'":{"note":"Back Right"},"L U L' U2 L U' L' U L U' L'":{"note":"Back Left"}},"subset":"Connected"},"F2L 16":{"algs":{"R U' R' U2 F' U' F":{"note":"Front Right"},"F U' R U' R' U2 F'":{"note":"Front Left"},"R' U' R U2 R' U R U' R' U R":{"note":"Back Right"},"L U' L' U2 f' L' f":{"note":"Back Left"}},"subset":"Connected"},"F2L 17":{"algs":{"R U2 R' U' R U R'":{"note":"Front Right"},"y R U2 R' U' R U R' y'":{"note":"Front Left"},"R' U2 F R U R' U' F' R":{"note":"Back Right"},"L U2 L' U' L U L'":{"note":"Back Left"}},"subset":"Connected"},"F2L 18":{"algs":{"y' R' U2 R U R' U' R y":{"note":"Front Right"},"L' U2 L U L' U' L":{"note":"Front Left"},"R' U2 R U R' U' R":{"note":"Back Right"},"L U2 F' L' U' L U F L'":{"note":"Back Left"}},"subset":"Connected"},"F2L 19":{"algs":{"U R U2 R' U R U' R'":{"note":"Front Right"},"y' U R U2 R' U R U' R' y":{"note":"Front Left"},"U R' F' U2 F R U R' U' R":{"note":"Back Right"},"U L U2 L' U L U' L'":{"note":"Back Left"}},"subset":"Split"},"F2L 20":{"algs":{"U' R U' R2 F R F' R U' R'":{"note":"Front Right"},"U' L' U2 L U' L' U L":{"note":"Front Left"},"U' R' U2 R U' R' U R":{"note":"Back Right"},"y U' R' U2 R U' R' U R y'":{"note":"Back Left"}},"subset":"Split"},"F2L 21":{"algs":{"U R U R' U R U' R'":{"note":"Front Right"},"F R U2 R' F'":{"note":"Front Left"},"r' U r U2 r' U' r":{"note":"Back Right"},"U2 L U L' U L U' L'":{"note":"Back Left"}},"subset":"Split"},"F2L 22":{"algs":{"r U' r' U2 r U r'":{"note":"Front Right"},"L' U L U2 L' U' L":{"note":"Front Left"},"R' U R U2 R' U' R":{"note":"Back Right"},"l U' l' U2 l U l'":{"note":"Back Left"}},"subset":"Split"},"F2L 23":{"algs":{"U R U' R' U' R U' R' U R U' R'":{"note":"Front Right"},"F U' R U R' U R U2 R' F'":{"note":"Front Left"},"U R' F R' F' R2 U' R' U R":{"note":"Back Right"},"L U L' U2 L U L' U' L U L'":{"note":"Back Left"}},"subset":"Connected"},"F2L 24":{"algs":{"U' R U R2 F R F' R U' R'":{"note":"Front Right"},"U' L' U L U L' U L U' L' U L":{"note":"Front Left"},"U' R' U R U R' U R U' R' U R":{"note":"Back Right"},"U2 r U R' U R U2 B r'":{"note":"Back Left"}},"subset":"Connected"},"F2L 25":{"algs":{"U' R' F R F' R U R'":{"note":"Front Right"},"U' L' U L F' L F L'":{"note":"Front Left"},"L' E' L U' L' E L":{"note":"Back Right"},"y' U' L' U L F' L F L' y":{"note":"Back Left"}},"subset":"Corner in slot"},"F2L 26":{"algs":{"U R U' R' F R' F' R":{"note":"Front Right"},"U L F' L' F L' U' L":{"note":"Front Left"},"y U R U' R' F R' F' R y'":{"note":"Back Right"},"R E R' U R E' R'":{"note":"Back Left"}},"subset":"Corner in slot"},"F2L 27":{"algs":{"R U' R' U R U' R'":{"note":"Front Right"},"L' U' L U F' L F L'":{"note":"Front Left"},"R' U2 R' F R F' R":{"note":"Back Right"},"L U' L' U L U' L'":{"note":"Back Left"}},"subset":"Corner in slot"},"F2L 28":{"algs":{"R U R' U' F R' F' R":{"note":"Front Right"},"L' U L U' L' U L":{"note":"Front Left"},"R' U R U' R' U R":{"note":"Back Right"},"L U2 L F' L' F L'":{"note":"Back Left"}},"subset":"Corner in slot"},"F2L 29":{"algs":{"R' F R F' U R U' R'":{"note":"Front Right"},"L' U' L U L' U' L":{"note":"Front Left"},"R' U' R U R' U' R":{"note":"Back Right"},"U2 L U' L' f' L' f":{"note":"Back Left"}},"subset":"Corner in slot"},"F2L 30":{"algs":{"R U R' U' R U R'":{"note":"Front Right"},"L F' L' F U' L' U L":{"note":"Front Left"},"U2 R' U R f R f'":{"note":"Back Right"},"L U L' U' L U L'":{"note":"Back Left"}},"subset":"Corner in slot"},"F2L 31":{"algs":{"U' R' F R F' R U' R'":{"note":"Front Right"},"U L F' L' F L' U L":{"note":"Front Left"},"R' U R' F R F' R":{"note":"Back Right"},"L U' L F' L' F L'":{"note":"Back Left"}},"subset":"Edge in slot"},"F2L 32":{"algs":{"U R U' R' U R U' R' U R U' R'":{"note":"Front Right"},"U2 F U' R U R' U F'":{"note":"Front Left"},"U' R' U R U' R' U R U' R' U R":{"note":"Back Right"},"U L U' L' U L U' L' U L U' L'":{"note":"Back Left"}},"subset":"Edge in slot"},"F2L 33":{"algs":{"U' R U' R' U2 R U' R'":{"note":"Front Right"},"U' L' U' L U2 L' U' L":{"note":"Front Left"},"U' R' U' R U2 R' U' R":{"note":"Back Right"},"U' L U' L' U2 L U' L'":{"note":"Back Left"}},"subset":"Edge in slot"},"F2L 34":{"algs":{"U R U R' U2 R U R'":{"note":"Front Right"},"U L' U L U2 L' U L":{"note":"Front Left"},"U R' U R U R' U2 R":{"note":"Back Right"},"U L U L' U2 L U L'":{"note":"Back Left"}},"subset":"Edge in slot"},"F2L 35":{"algs":{"U' R U R' U F' U' F":{"note":"Front Right"},"U2 L F' L' F U2 L' U' L":{"note":"Front Left"},"U' f R f' U R' U' R":{"note":"Back Right"},"U2 L U L' U' L f' L f":{"note":"Back Left"}},"subset":"Edge in slot"},"F2L 36":{"algs":{"U F' U' F U' R U R'":{"note":"Front Right"},"U2 L' U' L F' L F L'":{"note":"Front Left"},"U2 R' U' R U f R' f'":{"note":"Back Right"},"U f' L' f U' L U L'":{"note":"Back Left"}},"subset":"Edge in slot"},"F2L 37":{"algs":{"R2 U2 F R2 F' U2 R' U R'":{"note":"Front Right"},"L2 U2 F' L2 F U2 L U' L":{"note":"Front Left"},"R' U R r U2 R2 U' R2 U' r'":{"note":"Back Right"},"L U' L' l' U2 L2 U L2 U l":{"note":"Back Left"}},"subset":"Both in slot"},"F2L 38":{"algs":{"R U' R' U' R U R' U2 R U' R'":{"note":"Front Right"},"L' U L U' L' U2 L U' L' U L":{"note":"Front Left"},"R' U R U' R' U2 R U' R' U R":{"note":"Back Right"},"L U L' U' L U2 L' U' L U L'":{"note":"Back Left"}},"subset":"Both in slot"},"F2L 39":{"algs":{"R U' R' U R U2 R' U R U' R'":{"note":"Front Right"},"L' U L U L' U' L U2 L' U L":{"note":"Front Left"},"R' U' R U R' U2 R U R' U' R":{"note":"Back Right"},"L U' L' U L U2 L' U L U' L'":{"note":"Back Left"}},"subset":"Both in slot"},"F2L 40":{"algs":{"r U' r' U2 r U r' R U R'":{"note":"Front Right"},"L' U L l' U l U2 l' U' l":{"note":"Front Left"},"R' U R r' U r U2 r' U' r":{"note":"Back Right"},"l U' l' U2 l U l' L U L'":{"note":"Back Left"}},"subset":"Both in slot"},"F2L 41":{"algs":{"R U' R' r U' r' U2 r U r'":{"note":"Front Right"},"l' U l U2 l' U' l L' U' L":{"note":"Front Left"},"r' U r U2 r' U' r R' U' R":{"note":"Back Right"},"L U' L' l U' l' U2 l U l'":{"note":"Back Left"}},"subset":"Both in slot"}}};
const before = () => randElement(["F R U R' U' F' U", "F U R U' R' F' U2", "R U R' U' R' F R F' U'", "R' U' R' F R F' U R"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
