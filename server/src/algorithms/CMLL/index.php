<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="42 Rubik's Cube algorithms for CMLL (Corners of Last Layer Disregarding M Slice)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>CMLL Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">CMLL Algorithms</h1>

        <p class="bodytext">
            CMLL is the third step of the Roux method, after solving the first two blocks.
            The goal of this step is to solve the corners of the last layer without considering the M-slice.
        </p>
        <p class="bodytext">
            In contrast to other algorithm sets like COLL, this algorithm set IS allowed to disturb the M-slice.
            This gives more freedom and allows more efficient algorithms for some cases.
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
