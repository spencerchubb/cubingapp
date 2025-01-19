<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Sarah Advanced Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Pi to Vertical U Perm", "Pi to CW U Perm", "Pi to CCW U Perm", "Pi to Triple Sledge", "Pi + U Perm", "Pi + Z Perm Conjugate", "Pi + Swirl Perm", "Pi + Wat Perm", "Pure Pi + U Perm", "Peanut", "Peanut to Pure Pi", "Peanut + U Perm", "Peanut + Z Perm Conjugate", "Peanut + Wat Perm", "Peanut + Swirl Perm", "Miscellaneous"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>Sarah Advanced Algorithms</h1>
            <p class="bodytext">Sarah's Advanced is a skewb method for solvers who want to get pretty serious about skewb. It's not quite as fast as NS, but it's a step up from Sarah's Intermediate.</p>
			<p class="bodytext">This method is fast because there are only two steps: 1) Solve the first side. 2) Solve the rest.</p>
			<p class="bodytext">There are 134 cases for step 2. Most of them can be done with sledgehammers (R' F R F') and hedgeslammers (F R' F' R). Some of the cases are so inefficient, that we recommend</p>
			<p class="bodytext">Sarah's Advanced is not to be confused with NS. Instead of using sledges and hedges, NS uses speed-optimal algorithms. If you want to learn some NS but don't want to learn <i>every</i> alg, the Last 5 Center cases and 5 Trigger cases are good to start with. Those are particularly slow in Sarah's Advanced method.</p>
			<p class="bodytext">Note: Sledge y2 Sledge is basically a U Perm, so we recommend using speed-friendly fingertricks in those cases.</p>
			<p class="bodytext">Sarah Strong created this method, so the information on this page is credited to her.</p>
            
            <?php
            include_once "../colorSelect.php";
            include_once "../subsetsNarrow.php";
            include_once "./algs.php";
            ?>
        </div>

        <?php include_once "../subsetsWide.php" ?>
    </main>
</body>

<?php
include_once "../listeners.php";
include "../../php/gtag.php";
?>

</html>
