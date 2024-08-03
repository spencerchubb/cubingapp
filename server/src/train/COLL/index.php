<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
<title>COLL Trainer</title>
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
$subsets = ["Antisune", "Sune", "L", "U", "T", "Pi", "H"];
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

const algSet = {"puzzle":"3x3","diagramType":"2D","gray":[12,32,39,48],"subsets":["Antisune","Sune","L","U","T","Pi","H"],"before":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","after":"() => randElement([\"\", \"U\", \"U'\", \"U2\"])","texts":["COLL is an algorithm set to solve the corners of the last layer when edges are already oriented. This algorithm set is typically used in CFOP, but it is optional. Cubers who learn COLL only use it when a good opportunity arises.","The advantage of COLL is that it will lead to a PLL where the corners are solved. There is a 1/12th chance of a PLL skip, a good chance of a U perm, and it could also be an H perm or Z perm. COLL can give an advantage because U perms are faster than other PLLs like G, V, N, and E.","In addition, COLL can be useful if you plan to learn ZBLL. COLL is a subset of ZBLL, so the algorithms you learn will be useful later on. COLL can also teach you how to recognize corner cases, which can be challenging if you have only learned sets like OLL and PLL."],"cases":{"AS 1":{"algs":{"R' U' R U' R' U2 R":{},"U R U2 R' U' R U' R'":{},"U2 L' U' L U' L' U2 L":{},"U' L U2 L' U' L U' L'":{}},"subset":"Antisune"},"AS 2":{"algs":{"U R' U' R U' R' U R' D' R U R' D R2":{},"U2 R2 D R' U R D' R' U R' U' R U' R'":{},"U2 R' F U2 F' R F R' U2 R F'":{}},"subset":"Antisune"},"AS 3":{"algs":{"U2 R2 D R' U2 R D' R2 U' R U' R'":{},"R' U' F' R U R' U' R' F R2 U' R' U R":{},"U2 f' L F L' U2 L' U2 L U2 S":{}},"subset":"Antisune"},"AS 4":{"algs":{"U2 R' U' R U' R2 D' R U2 R' D R2":{},"U2 R U2 R' U2 r' F R F' M'":{},"R' U' R U R' F R U R' U' R' F' R2":{},"U2 R U2 R' U2 L' U R U' R' L":{}},"subset":"Antisune"},"AS 5":{"algs":{"U2 r' F R F' r U R'":{},"U2 L' U R U' L U R'":{},"R' U L U' R U L'":{}},"subset":"Antisune"},"AS 6":{"algs":{"R U R' F' R U2 R' U' R U' R' F R U' R'":{},"R U2 r' F R' F' r U' R U' R'":{},"R U' R' U2 R U' R' U2 R' D' R U R' D R":{},"U2 L U2 R' U L' U' R U' L U' L'":{}},"subset":"Antisune"},"S 1":{"algs":{"R U R' U R U2 R'":{},"U' R' U2 R U R' U R":{},"U2 L U L' U L U2 L'":{},"U L' U2 L U L' U L":{}},"subset":"Sune"},"S 2":{"algs":{"U2 R U R' U R2 D R' U2 R D' R2":{},"r' F2 r U2 R U' r' F M'":{},"L' U2 L U2 R U' L' U L R'":{},"L' U2 L U2 l F' L' F M'":{}},"subset":"Sune"},"S 3":{"algs":{"L' R U R' U' L U2 R U2 R'":{},"U2 R2 D' R U2 R' D R2 U R' U R":{},"f R' F' R U2 R U2 R' U2 S'":{},"M F R' F' r U2 R U2 R'":{}},"subset":"Sune"},"S 4":{"algs":{"U' R U R' U R U' R D R' U' R D' R2":{},"U' F R' U2 R F' R' F U2 F' R":{},"R U R' U' R' F R F' r U R' U R U2 r'":{},"r U R' U' r' F R F' R U R' U R U2 R'":{}},"subset":"Sune"},"S 5":{"algs":{"R U' L' U R' U' L":{},"R U' r' F R' F' r":{},"U2 L U' R' U L' U' R":{},"z D R' U' R D' R' U R z'":{}},"subset":"Sune"},"S 6":{"algs":{"U2 R U R' F' R U R' U R U2 R' F R U' R'":{},"U2 R U R' U r' F R F' r U2 R'":{},"F R U' R2 U2 R U R' U R2 U R' F'":{},"F' R U2 R' U2 R' F2 R U R U' R' F'":{}},"subset":"Sune"},"L 1":{"algs":{"U' R U R' U R U' R' U R U' R' U R U2 R'":{},"U' R U2 R' U' R U R' U' R U R' U' R U' R'":{},"U2 R' U2 R U R' U' R U R' U' R U R' U R":{},"R' U' R U' R' U2 R U' R U R' U R U2 R'":{}},"subset":"L"},"L 2":{"algs":{"R' U2 R' D' R U2 R' D R2":{},"U2 L' U2 L' D' L U2 L' D L2":{},"U' R' U2 R U R2 D' R U R' D R2":{},"U' r D r' U r D' r' U y R U2 R'":{}},"subset":"L"},"L 3":{"algs":{"U R U2 R D R' U2 R D' R2":{},"U2 R U2 R2 D' R U' R' D R2 U' R'":{},"R' F' R U R' U' R' F R2 U' R' U2 R":{},"R' D' r U2 r' D R U2 R U R'":{}},"subset":"L"},"L 4":{"algs":{"U F R' F' r U R U' r'":{},"U2 R2 D R' U R D' R' U' R'":{},"R U R' U' R' F R U R U' R' F'":{},"x' R U' R' D R U R' D' x":{}},"subset":"L"},"L 5":{"algs":{"U2 F' r U R' U' r' F R":{},"U x R' U R D' R' U' R D x'":{},"U' R2 D' R U' R' D R U R":{},"U' F R U' R' U' R U2 R' U' F'":{}},"subset":"L"},"L 6":{"algs":{"U r U2 R2 F R F' R U2 r'":{},"U' R' U' R U R' F' R U R' U' R' F R2":{},"U' R' U' R U' F U' R' U' R U F'":{},"U F R U R2 F R F' R U' R' F'":{}},"subset":"L"},"U 1":{"algs":{"R' U' R U' R' U2 R2 U R' U R U2 R'":{},"U2 R U R' U R U2 R2 U' R U' R' U2 R":{},"U' R U R' U' R U' R' U2 R U' R' U2 R U R'":{},"U2 R U R' U R U2 R' U R U2 R' U' R U' R'":{}},"subset":"U"},"U 2":{"algs":{"R' F R U' R' U' R U R' F' R U R' U' R' F R F' R":{},"U F U R U2 R' U R U R2 F' r U R U' r'":{},"U' R' U' R F R2 D' R U R' D R2 U' F'":{},"U' r U R' U' r' F R U R' U' R F' R' U R":{}},"subset":"U"},"U 3":{"algs":{"U2 R2 D R' U2 R D' R' U2 R'":{},"R' U R U R' F' R U R' U' R' F R2 U' R' U' R":{},"R U' R' U' R U2 R' U' R' D' R U2 R' D R":{},"R' U' R U' R' U2 R2 U' L' U R' U' L":{}},"subset":"U"},"U 4":{"algs":{"F R U' R' U R U R' U R U' R' F'":{},"U2 R' F2 R U2 R U2 R' F2 R U2 R'":{},"U2 R U2 R' U2 L' U2 R U2 R' U2 L":{},"U' F U2 R' D' R U2 R' D R F'":{}},"subset":"U"},"U 5":{"algs":{"R2 D' R U2 R' D R U2 R":{},"R2 F' R U R' U' R' F R' U' R2 U2 R2 U R' U R":{},"U2 L2 D' L U2 L' D L U2 L":{},"L U' R U' L' U R' U2 L U' L'":{}},"subset":"U"},"U 6":{"algs":{"R2 D' R U R' D R U R U' R' U' R":{},"R' U2 R F U' R' U' R U F'":{},"R U' R' U' R U R D R' U R D' R2":{},"R' U2 R U2 R' F' R U R' U' R' F R2":{}},"subset":"U"},"T 1":{"algs":{"R U2 R' U' R U' R2 U2 R U R' U R":{},"U' R U R' U R U2 R' L' U' L U' L' U2 L":{},"U' R U R2 U' R2 U' R2 U2 R U' R U' R'":{},"R U2 R' r' F2 r U' R U' R' U' r' F r":{}},"subset":"T"},"T 2":{"algs":{"R' U R U2 R' L' U R U' L":{},"R' U2 R U R2 F R U R U' R' F' R":{},"U2 R' F R U R' U' R' F' R2 U' R' U2 R":{},"U2 R U' R' U2 L R U' R' U L'":{}},"subset":"T"},"T 3":{"algs":{"U R' F' r U R U' r' F":{},"U l' U' L U R U' r' F":{},"U2 R' U' R' D' R U R' D R2":{},"U2 x' R U R' D R U' R' D' x":{}},"subset":"T"},"T 4":{"algs":{"U2 F R U R' U' R U' R' U' R U R' F'":{},"U2 F R' D' R U2 R' D R U2 F'":{},"U R U2 R' F2 R U2 R' U2 R' F2 R":{},"U' L' U2 R U2 R' U2 L U2 R U2 R'":{}},"subset":"T"},"T 5":{"algs":{"U' r U R' U' r' F R F'":{},"R U R D R' U' R D' R2":{},"U' R U R' U' L' U R U' R' L":{},"R' F' R U R' U' R' F R U R":{}},"subset":"T"},"T 6":{"algs":{"R' U R2 D r' U2 r D' R2 U' R":{},"U2 R U' R2 D' r U2 r' D R2 U R'":{},"U R' U' R U R2 D' R U2 R' D R2 U' R' U R":{},"U R U R' U' R2 D R' U2 R D' R2 U R U' R'":{}},"subset":"T"},"Pi 1":{"algs":{"R' U2 R2 U R2 U R2 U2 R'":{},"U2 L' U2 L2 U L2 U L2 U2 L'":{},"R U2 R2 U' R2 U' R2 U2 R":{},"R U R' U R U2 R' U' R U R' U R U2 R'":{}},"subset":"Pi"},"Pi 2":{"algs":{"U F U R U' R' U R U' R2 F' R U R U' R'":{},"R' F2 R U2 R U2 R' F2 U' R U' R'":{},"U2 L' U' L U L F' L2 U' L U L' U' L U F":{},"U M F R' F' r U2 R U' R' U R U2 R'":{}},"subset":"Pi"},"Pi 3":{"algs":{"R' U' F' R U R' U' R' F R2 U2 R' U2 R":{},"U F U R U' R' U R U2 R' U' R U R' F'":{},"U F R2 U' R2 U R2 U S R2 f'":{},"U' R U R' U R U2 R2 F' r U R U' r' F":{}},"subset":"Pi"},"Pi 4":{"algs":{"R U R' U' R' F R2 U R' U' R U R' U' F'":{},"R U2 R' U' R U R' U2 r' F R F' M'":{},"U' R' U2 R U R' U R2 U' L' U R' U' L":{},"U2 L F2 L' U2 L' U2 L F2 U L' U L":{}},"subset":"Pi"},"Pi 5":{"algs":{"U' R U R' U F' R U2 R' U2 R' F R":{},"U' R U2 R' U R' D' R U2 R' D R2 U' R'":{},"R U' L' U R' U L U L' U L":{},"U2 L' U R U' L U' R' U' R U' R'":{}},"subset":"Pi"},"Pi 6":{"algs":{"U' r U R' U R' F R F' R U' R' U R U2 r'":{},"R' F' U' F U' R U S' R' U R S":{},"R2 D' R U R' D R U R U' R' U R U R' U R":{},"R U2 R2 F R F' R' F R F' R' F R F' R U2 R'":{}},"subset":"Pi"},"H 1":{"algs":{"R U R' U R U' R' U R U2 R'":{},"U' R U2 R' U' R U R' U' R U' R'":{},"U R U2 R' U' R U R' U' R U' R'":{},"U' R' U2 R U R' U' R U R' U R":{}},"subset":"H"},"H 2":{"algs":{"F R U' R' U R U2 R' U' R U R' U' F'":{},"f R2 S' U' R2 U' R2 U R2 F'":{},"U2 f R U R' U' R F' R U R' U' R' S'":{},"f R U R' U' f' R U R' U' R' F R F'":{}},"subset":"H"},"H 3":{"algs":{"R U R' U R U L' U R' U' L":{},"R' F' R U2 R U2 R' F U' R U' R'":{},"R U R' U R U r' F R' F' r":{},"R U R2 D' R U2 R' D R U' R U2 R'":{}},"subset":"H"},"H 4":{"algs":{"U F R U R' U' R U R' U' R U R' U' F'":{},"U F U R U' R' U R U' R' U R U' R' F'":{},"U' F U R U' R' U R U' R' U R U' R' F'":{},"U R' F2 R2 U2 R' F2 R U2 R2 F2 R":{}},"subset":"H"}}};
const before = () => randElement(["", "U", "U'", "U2"]);
const after = () => randElement(["", "U", "U'", "U2"]);
</script>

<?php
include_once "../main.php";
include "../../php/gtag.php";
?>

</html>
