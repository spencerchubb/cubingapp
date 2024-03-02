<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="42 Rubik's Cube algorithms for 2x2 EG1 (Corners of Last Layer)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2x2 EG1 Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">2x2 EG1 Algorithms</h1>

        <p class="bodytext">
            EG1 is commonly learned after CLL.
            CLL, EG1, and EG2 go hand in hand.
            These three algorithm sets will allow you to solve the entire cube after solving one face.
        </p>
        <p class="bodytext">
            CLL: First layer is solved. This occurs 1/6th of the time<br>
            EG1: First layer has an adjacent swap. This occurs 4/6th of the time<br>
            EG2: First layer has a diagonal swap. This occurs 1/6th of the time
        </p>

        <div id="subsetsRoot"></div>
        <?php include "../../php/orientation_input.php" ?>
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
