<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="57 Rubik's Cube algorithms for OLL (Orientation of Last Layer)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>OLL Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">OLL Algorithms</h1>

        <p class="bodytext">
            Orientation of Last Layer (also called OLL) is the third step of the CFOP Rubik's Cube method.
            CFOP stands for Cross, F2L, OLL, and PLL.
        </p>
        <p class="bodytext">
            These algorithms are used to orient the last layer of the Rubik's Cube.
            That means if you start by solving the white cross, the goal of OLL is to get all the yellow stickers on top.
        </p>
        <p class="bodytext">
            OLL has 57 algorithms, and that number can sound scary but it's not that bad. You may know 9 of the algorithms already from 2-Look OLL, so that cuts the total down to 48 algorithms.
        </p>
        <p class="bodytext">
            This site tells you all 57 OLL algorithms, the fingertricks, and how to remember them.
            Many cases are mirrors, inverses, or have common triggers, so it's not that hard to remember the algorithms.
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
