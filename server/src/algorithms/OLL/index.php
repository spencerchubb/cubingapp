<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>OLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Edges oriented", "Corners oriented", "Dot", "Square", "Line", "Fish", "Lightning", "Knight", "Awkward", "P shape", "T shape", "C shape", "L shape", "W shape"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>OLL Algorithms</h1>
            <p class="bodytext">Orientation of Last Layer (also called OLL) is the third step of the CFOP Rubik's Cube method. CFOP stands for Cross, F2L, OLL, and PLL.</p>
			<p class="bodytext">These algorithms are used to orient the last layer of the Rubik's Cube. That means if you start by solving the white cross, the goal of OLL is to get all the yellow stickers on top.</p>
			<p class="bodytext">OLL has 57 algorithms, and that number can sound scary but it's not that bad. You may know 9 of the algorithms already from 2-Look OLL, so that cuts the total down to 48 algorithms.</p>
			<p class="bodytext">This site tells you all 57 OLL algorithms, the fingertricks, and how to remember them. Many cases are mirrors, inverses, or have common triggers, so it's not that hard to remember the algorithms.</p>
            
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
