<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Sarah Intermediate Algorithms</title>
</head>

<?php
include_once "../style.php";
include_once "../colorScheme.php";
?>

<body>
    <?php
    include_once "../../php/menu.php";
    $subsets = ["1 Trigger", "2 Triggers", "3 Triggers"];
    ?>

    <main>
        <div style="width: 100%; max-width: 700px; height: 100%;">
            <h1>Sarah Intermediate Algorithms</h1>
            <p class="bodytext">Sarah's Intermediate is a skewb method for solvers who recently learned the beginner method and want to get faster. It is a great choice for cubers who don't want to put in a ton of effort, because there are only ten cases.</p>
			<p class="bodytext">The steps for Sarah's Intermediate method are as follows: 1) Solve the first side. 2) Solve the opposite side. 3) Solve the centers.</p>
			<p class="bodytext">The first and third steps are done the same way as in Sarah's Beginner method. Step 2 is done with some combination of sledgehammers (R' F R F') and hedgeslammers (F R' F' R). At most you will need 3 triggers.</p>
			<p class="bodytext">Sarah Strong created this method, so the information on this page is credited to her.</p>
            
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
