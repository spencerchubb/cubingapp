<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2 Look CMLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Orient", "Permute"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>2 Look CMLL Algorithms</h1>
            <p class="bodytext">CMLL stands for Corners of Last Layer ignoring the M slice. That means the M slice can be modified during CMLL. 2 Look CMLL is good for beginners or intermediate Roux solvers.</p>
			<p class="bodytext">After you have solved the first two blocks, you can do CMLL to solve the corners.</p>
			<p class="bodytext">To do 2 Look CMLL, first you orient the corners, and then you permute the corners.</p>
            
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
