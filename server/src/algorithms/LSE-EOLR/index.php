<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithms for EOLR (Edge Orientation Left Right)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>LSE EOLR Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">LSE EOLR Algorithms</h1>

        <p class="bodytext">
            Roux EOLR is an advanced Roux technique that stands for Edge Orientation Left and Right.
            EOLR combines substeps 4a and 4b to save moves, and ultimately make the solve faster.
        </p>
        <p class="bodytext">
            The EOLR algorithms should be intuitive, meaning that you can understand the solutions rather than memorizing the solutions with brute force.
            Due to the intuitive nature, this algorithm set does not include mirror cases.
        </p>
        <p class="bodytext">
            The goal of EOLR is to solve edge orientation while getting the UL and UR edgeson bottom.
            Getting ULUR on bottom allows them to be inserted with just an M2.
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
