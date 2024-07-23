<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2x2 PBL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = [];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>2x2 PBL Algorithms</h1>
            <p class="bodytext">PBL stands for Permutation of Both Layers, and it is the third step of the Ortega method. Ortega is a good intermediate method for 2x2 solvers who have already learned the beginner method.</p>
			<p class="bodytext">Here is how the Ortega method works: Beginner method starts with the first layer, but Ortega starts with just a face. In other words, the first layer doesn't have to be permuted correctly. The second step of Ortega is to orient the last layer, and lastly, you do PBL to finish the 2x2.</p>
			<p class="bodytext">PBL only has 6 cases, and you may already know 2 of the cases from other methods: J Perm and Y Perm. For this reason, PBL is a very easy algorithm set to learn.</p>
            
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
