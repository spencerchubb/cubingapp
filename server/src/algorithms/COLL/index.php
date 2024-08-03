<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>COLL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["Antisune", "Sune", "L", "U", "T", "Pi", "H"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>COLL Algorithms</h1>
            <p class="bodytext">COLL is an algorithm set to solve the corners of the last layer when edges are already oriented. This algorithm set is typically used in CFOP, but it is optional. Cubers who learn COLL only use it when a good opportunity arises.</p>
			<p class="bodytext">The advantage of COLL is that it will lead to a PLL where the corners are solved. There is a 1/12th chance of a PLL skip, a good chance of a U perm, and it could also be an H perm or Z perm. COLL can give an advantage because U perms are faster than other PLLs like G, V, N, and E.</p>
			<p class="bodytext">In addition, COLL can be useful if you plan to learn ZBLL. COLL is a subset of ZBLL, so the algorithms you learn will be useful later on. COLL can also teach you how to recognize corner cases, which can be challenging if you have only learned sets like OLL and PLL.</p>
            
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
