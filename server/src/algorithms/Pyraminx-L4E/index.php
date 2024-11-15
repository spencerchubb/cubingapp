<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Pyraminx L4E Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Down Edge Solved", "Down Edge Flipped", "Upper Edge Solved", "Upper Edge Flipped", "Nothing Placed"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>Pyraminx L4E Algorithms</h1>
            <p class="bodytext">Last 4 Edges (L4E) is an advanced Pyraminx method with two steps: 1) Make a V on the bottom. 2) Solve the last 4 edges, thereby solving the rest of the puzzle.</p>
			<p class="bodytext">This is faster than the beginner Layer By Layer method, because it only requires solving a V instead of an entire layer.</p>
			<p class="bodytext">Algorithms sourced from: <a href='https://cubing.mikeg.me.uk/cubing-algs/html/l4e.html' class='link'>https://cubing.mikeg.me.uk/cubing-algs/html/l4e.html</a></p>
            
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
