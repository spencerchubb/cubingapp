<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>F2L Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Basic insert", "Split", "Connected", "Corner in slot", "Edge in slot", "Both in slot"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>F2L Algorithms</h1>
            <p class="bodytext">First Two Layers (also called F2L) is the second step of the CFOP Rubik's Cube method. F2L is involves solving a corner and an edge at the same time, which is much faster than solving them separately.</p>
			<p class="bodytext">It is highly recommended to learn F2L intuitively <i>before</i> learning these algorithms. These F2L algorithms are optimized for speed, and some are hard to remember. If you try to memorize these algorithms without an intuitive understanding, you will just make it harder for yourself.</p>
			<p class="bodytext">As an added benefit, this site also shows you the fastest way to solve each F2L case from any angle.</p>
            
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
