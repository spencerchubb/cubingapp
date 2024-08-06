<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>OLLCP Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["OLL 1", "OLL 2", "OLL 3", "OLL 4", "OLL 5", "OLL 6", "OLL 7", "OLL 8", "OLL 9", "OLL 10", "OLL 11", "OLL 12", "OLL 13", "OLL 14", "OLL 15", "OLL 16", "OLL 17", "OLL 18", "OLL 19", "OLL 20", "OLL 21", "OLL 22", "OLL 23", "OLL 24", "OLL 25", "OLL 26", "OLL 27", "OLL 28", "OLL 29", "OLL 30", "OLL 31", "OLL 32", "OLL 33", "OLL 34", "OLL 35", "OLL 36", "OLL 37", "OLL 38", "OLL 39", "OLL 40", "OLL 41", "OLL 42", "OLL 43", "OLL 44", "OLL 45", "OLL 46", "OLL 47", "OLL 48", "OLL 49", "OLL 50", "OLL 51", "OLL 52", "OLL 53", "OLL 54", "OLL 55", "OLL 56", "OLL 57"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>OLLCP Algorithms</h1>
            <p class="bodytext">OLLCP stands for Orientation of Last Layer and Corner Permutation. As the name implies, this step solves OLL and corner permutation at the same time.</p>
			<p class="bodytext">OLLCP is typically used with CFOP, and it is an advanced algorithm set. It is recommended to learn OLL and PLL, then decide if OLLCP is worth it for you. Sometimes it is even used with Roux, in a variant called the Pinkie Pie method.</p>
            
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
