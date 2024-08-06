<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>SQ1 OBL Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["1 Slash", "2 Slashes", "3 Slashes", "4 Slashes", "5 Slashes", "6 Slashes", "7 Slashes"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>SQ1 OBL Algorithms</h1>
            <p class="bodytext">Square-1 OBL stands for Orient Both Layers, and it is an advanced Square-1 technique. The simpler method is to orient corners and then orient edges separately. Orienting both layers simultaneously is faster, but it requires a lot more learning.</p>
            
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
