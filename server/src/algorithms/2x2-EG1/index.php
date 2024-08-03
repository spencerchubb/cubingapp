<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2x2 EG1 Algorithms</title>
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
            <h1>2x2 EG1 Algorithms</h1>
            <p class="bodytext">EG1 is commonly learned after CLL. CLL, EG1, and EG2 go hand in hand. These three algorithm sets will allow you to solve the entire cube after solving one face.</p>
			<p class="bodytext">CLL: First layer is solved. This occurs 1/6th of the time<br> EG1: First layer has an adjacent swap. This occurs 4/6th of the time<br> EG2: First layer has a diagonal swap. This occurs 1/6th of the time</p>
            
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
