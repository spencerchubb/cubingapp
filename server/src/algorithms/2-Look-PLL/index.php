<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2 Look PLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Corners", "Edges"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>2 Look PLL Algorithms</h1>
            <p class="bodytext">PLL stands for Permutation of Last Layer. 2 Look PLL is good for beginners or intermediate solvers.</p>
			<p class="bodytext">Before PLL, you need to orient the last layer, or in other words, solve the top face.</p>
			<p class="bodytext">To do 2 Look PLL, first you solve the corners, and then you solve the edges.</p>
            
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
