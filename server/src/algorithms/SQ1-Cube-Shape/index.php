<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>SQ1 Cube Shape Algorithms</title>
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
            <h1>SQ1 Cube Shape Algorithms</h1>
            <p class="bodytext">There are a variety of methods for solving the Square-1, but the first step is always Cube Shape (sometimes abbreviated as SQ1 CS). The goal of this step is to make the puzzle shaped like a cube.</p>
            
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
