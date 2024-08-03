<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>CMLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["O", "H", "Pi", "U", "T", "Sune", "Antisune", "L"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>CMLL Algorithms</h1>
            <p class="bodytext">CMLL is the third step of the Roux method, after solving the first two blocks. The goal of this step is to solve the corners of the last layer without considering the M-slice.</p>
			<p class="bodytext">In contrast to other algorithm sets like COLL, this algorithm set IS allowed to disturb the M-slice. This gives more freedom and allows more efficient algorithms for some cases.</p>
            
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
