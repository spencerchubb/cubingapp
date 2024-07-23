<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2x2 CLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Antisune", "H", "L", "Pi", "Sune", "T", "U"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>2x2 CLL Algorithms</h1>
            <p class="bodytext">2x2 CLL stands for Corners of Last Layer, and it is used to solve the last layer of the 2x2 Rubik's Cube. This algorithm set is for cubers who want to take 2x2 more seriously. With CLL, you'll be able to solve the last layer in one step instead of two.</p>
			<p class="bodytext">After CLL, you can also learn EG1 and EG2. These algorithm sets are used to solve the cube after solving the first face (NOT the first layer). Solving one face is a lot less restrictive than solving one layer, so this leads to more efficient solutions. If you want to become a 2x2 master, you should start with CLL, then progress to EG1 and EG2.</p>
            
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
