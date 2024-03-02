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
            EOLR combines substeps 4a and 4b to save moves.
        </p>
        <p class="bodytext">
            The goal of EOLR is to orient edges while getting UL and UR on bottom.
            After that, you can insert UL UR with M2.
        </p>
        <p class="bodytext">
            EOLR is intuitive, which means you can learn the solutions without rote memorization.
            Due to the intuitive nature, this page does not show all the mirrored algorithms.
        </p>
        <p class="bodytext">
            On this page, the letters in parentheses are the positions of the UL UR edges.
            For example, (UF DF) means the edges are in the up-front and down-front positions.
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
