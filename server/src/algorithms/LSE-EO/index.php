<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>LSE EO Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["3-mover", "5-mover", "7-mover", "11-mover"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>LSE EO Algorithms</h1>
            <p class="bodytext">Last Six Edges Edge Orientation (LSE EO) is a substep of the Roux method. Since LSE is the 4th step, the substeps are typically called 4a, 4b, and 4c. This algorithm set is for substep 4a.</p>
			<p class="bodytext">4a: Edge orientation (EO)<br> 4b: Solve upper left and upper right edges (ULUR)<br> 4c: Solve middle edges</p>
            
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
