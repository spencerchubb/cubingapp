<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Winter Variation Algorithms</title>
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
            <h1>Winter Variation Algorithms</h1>
            <p class="bodytext">Winter Variation (also called WV) is an advanced variation that's useful for methods like CFOP and ZZ. You can use Winter Variation when you have the last pair paired up, and the edges are oriented. Winter variation allows you to skip OLL by altering how you insert the last pair. This technique is commonly called 'influencing' OLL.</p>
            
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
