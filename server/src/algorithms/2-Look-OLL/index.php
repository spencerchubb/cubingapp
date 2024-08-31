<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2 Look OLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Edges", "Corners"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>2 Look OLL Algorithms</h1>
            <p class="bodytext">OLL stands for Orientation of Last Layer. 2 Look OLL is good for beginners or intermediate solvers.</p>
			<p class="bodytext">After you have solved the first two layers, you can do OLL to solve the top face.</p>
			<p class="bodytext">To do 2 Look OLL, first you orient the edges, and then you orient the corners.</p>
            
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
