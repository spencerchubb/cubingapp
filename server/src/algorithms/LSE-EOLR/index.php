<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>LSE EOLR Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Arrow", "1 / 1", "2 Adj / 2", "2 Adj / 0", "2 Opp / 2", "2 Opp / 0", "0 / 2", "All 6"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>LSE EOLR Algorithms</h1>
            <p class="bodytext">Roux EOLR is an advanced Roux technique that stands for Edge Orientation Left and Right. EOLR combines substeps 4a and 4b to save moves.</p>
			<p class="bodytext">The goal of EOLR is to orient edges while getting UL and UR on bottom. After that, you can insert UL UR with M2.</p>
			<p class="bodytext">EOLR is intuitive, which means you can learn the solutions without rote memorization. Due to the intuitive nature, this page does not show all the mirrored algorithms.</p>
			<p class="bodytext">On this page, the letters in parentheses are the positions of the UL UR edges. For example, (UF DF) means the edges are in the up-front and down-front positions.</p>
            
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
