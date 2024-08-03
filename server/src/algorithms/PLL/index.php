<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>PLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Adj corners", "Diag corners", "G perm", "Edge perm"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>PLL Algorithms</h1>
            <p class="bodytext">Permutation of Last Layer (also called PLL) is the last step of the CFOP Rubik's Cube method. CFOP stands for Cross, F2L, OLL, and PLL.</p>
			<p class="bodytext">Up to this point, the first two layers should be solved, and the last layer should be oriented. After PLL, the entire Rubik's Cube should be solved.</p>
			<p class="bodytext">PLL has 21 algorithms, so it has less algorithms than OLL. Most cubers recommend learning PLL before OLL because you only need to learn 21 algorithms to improve your times.</p>
			<p class="bodytext">This site tells you all 21 PLL algorithms, the fingertricks, and how to remember them.</p>
            
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
