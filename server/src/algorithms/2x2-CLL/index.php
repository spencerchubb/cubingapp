<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="42 Rubik's Cube algorithms for 2x2 CLL (Corners of Last Layer)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2x2 CLL Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">2x2 CLL Algorithms</h1>

        <p class="bodytext">
            2x2 CLL stands for Corners of Last Layer, and it is used to solve the last layer of the 2x2 Rubik's Cube.
            This algorithm set is for cubers who want to take 2x2 more seriously.
            With CLL, you'll be able to solve the last layer in one step instead of two.
        </p>
        <p class="bodytext">
            After CLL, you can also learn EG1 and EG2.
            These algorithm sets are used to solve the cube after solving the first face (NOT the first layer).
            Solving one face is a lot less restrictive than solving one layer, so this leads to more efficient solutions.
            If you want to become a 2x2 master, you should start with CLL, then progress to EG1 and EG2.
        </p>

        <div id="subsetsRoot"></div>
        <div style="margin: 20px; display: flex; justify-content: center;">
            <select id="orientationSelect">
                <option value="x2">White Bottom</option>
                <option value="">Yellow Bottom</option>
                <option value="x">Green Bottom</option>
                <option value="x'">Blue Bottom</option>
                <option value="z">Orange Bottom</option>
                <option value="z'">Red Bottom</option>
            </select>
        </div>
        <div id="algsRoot"></div>

        <div style="margin-top: 64px;"></div>
    </main>
</body>

<script type="module">
    import { algSet } from "./algSet.js";
    import { initPage } from "../page_algset.js";
    initPage(algSet);
</script>

<style>
    .bodytext {
        max-width: 600px;
        align-self: start;
        line-height: 1.5rem;
        margin: 20px auto;
    }
</style>

<?php include "../../php/gtag.php" ?>

</html>
