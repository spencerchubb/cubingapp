<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Pyraminx Last Layer Algorithms</title>
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
            <h1>Pyraminx Last Layer Algorithms</h1>
            <p class="bodytext">The Layer By Layer (LBL) method for the Pyraminx has two main steps: 1) Solve the first layer and 2) solve the last layer. These 5 algorithms are used to solve the last layer of the Pyraminx.</p>
			<p class="bodytext">Some cubers refer to this step as Last 3 Edges, or L3E for short.</p>
            
            <?php
            
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
