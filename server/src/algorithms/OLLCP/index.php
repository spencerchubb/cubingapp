<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithms for OLLCP (Orientation of Last Layer & Corner Permutation)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>OLLCP Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">OLL Algorithms</h1>

        <p class="bodytext">
            OLLCP stands for Orientation of Last Layer and Corner Permutation. As the name implies, this step solves OLL and corner permutation at the same time.
        </p>
        <p class="bodytext">
            OLLCP is typically used with CFOP, and it is an advanced algorithm set. It is recommended to learn OLL and PLL, then decide if OLLCP is worth it for you. Sometimes it is even used with Roux, in a variant called the Pinkie Pie method.
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
