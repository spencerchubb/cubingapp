<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>4x4 PLL Parity Algorithms</title>
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
            <h1>4x4 PLL Parity Algorithms</h1>
            <p class="bodytext">When you are solving a 4x4, PLL parity can significantly slow down a solve. Luckily, there are some tricks you can use to minimize the damage without learning too many new algorithms.</p>
			<p class="bodytext">Some algorithms in this set are similar to PLL algorithms you already know, except there is a parity algorithm mixed in. By doing the parity algorithm strategically, you can turn a slow PLL into a fast PLL.</p>
            
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
