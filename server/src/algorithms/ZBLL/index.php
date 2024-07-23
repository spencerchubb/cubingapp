<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>ZBLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["T1", "T2", "T3", "T4", "T5", "T6", "U1", "U2", "U3", "U4", "U5", "U6", "L1", "L2", "L3", "L4", "L5", "L6", "Pi1", "Pi2", "Pi3", "Pi4", "Pi5", "Pi6", "H1", "H2", "H3", "H4", "S1", "S2", "S3", "S4", "S5", "S6", "AS1", "AS2", "AS3", "AS4", "AS5", "AS6"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>ZBLL Algorithms</h1>
            <p class="bodytext">ZBLL is short for Zborowski-Bruchem Last Layer, and it is used to solve the entire last layer in 1 step. This algorithm set can be used when the last layer edges are oriented. Therefore, ZBLL is a subset of full 1-look last layer, which has approximately 6x as many algorithms because there are 6 cases for edge orientation.</p>
			<p class="bodytext">ZBLL is useful in many methods, including CFOP, Roux, and ZZ. Advanced cubers may decide to learn some or all of ZBLL depending on their goals.</p>
            
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
