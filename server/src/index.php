<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Take speedcubing to the next level. We offer an algorithm database, a reconstruction tool, a timer, and an algorithm trainer.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>CubingApp Home</title>
</head>

<body style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto;">
        <?php
            if (http_response_code() === 404) {
                echo "<p style='color: var(--red-500); font-size: 1.2rem; text-align: center; margin-bottom: 1rem; padding: 0.5rem; background: var(--gray-900); border-radius: 8px;'>404: Page not found</p>";
            }
        ?>
        <h1 style="text-align: center;">CubingApp Home</h1>
        <h2 style="width: 100%;  margin-top: 32px;">
            <a href="/algorithms" class="link" style="color: inherit;">Algorithms</a>
        </h2>
        <div class="divider"></div>
        <ul style="width: 100%;">
            <li>
                <a href="/algorithms" class="link">See all sets</a> (2x2, 3x3, SQ1, etc)
            </li>
            <li>
                <a href="/algorithms/F2L" class="link">F2L</a>
            </li>
            <li>
                <a href="/algorithms/OLL" class="link">OLL</a>
            </li>
            <li>
                <a href="/algorithms/PLL" class="link">PLL</a>
            </li>
        </ul>
        <h2 style="width: 100%; margin-top: 32px;">
            Calculators
        </h2>
        <div class="divider"></div>
        <ul style="width: 100%;">
            <li>
                <a href="/am-i-sub-x" class="link">Am I Sub-X?</a>
            </li>
            <li>
                <a href="/calculate-kinch" class="link">Calculate Kinch Score</a>
            </li>
            <li>
                <a href="/calculate-sum-of-ranks" class="link">Calculate Sum of Ranks (SoR)</a>
            </li>
            <li>
                <a href="/name-ranks" class="link">Name Ranks</a> <span style="color: var(--green-400); font-weight: bold; margin-left: 8px;">New!</span>
            </li>
            <li>
                <a href="/record-streak" class="link">Personal Record Streak</a>
            </li>
            <li>
                <a href="/competitions" class="link">WCA Comps sorted by distance</a> <span style="color: var(--green-400); font-weight: bold; margin-left: 8px;">New!</span>
            </li>
        </ul>
        <h2 style="width: 100%; margin-top: 32px;">
            Other
        </h2>
        <div class="divider"></div>
        <ul style="width: 100%;">
            <li>
                <a href="https://github.com/spencerchubb/cubingapp" class="link">GitHub</a> (CubingApp is open source!)
            </li>
        </ul>
    </div>
    <div style="margin-top: 96px;"></div>
</body>

<style>
    .divider {
        width: 100%;
        border-top: solid 1px var(--gray-600);
        margin: 8px 0;
    }
</style>

<?php include "php/gtag.php" ?>

</html>
