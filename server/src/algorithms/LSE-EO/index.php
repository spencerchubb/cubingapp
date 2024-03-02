<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithms for LSE EO (Last Six Edges Edge Orientation)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>LSE EO Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">LSE EO Algorithms</h1>

        <p class="bodytext">
            Last Six Edges Edge Orientation (LSE EO) is a substep of the Roux method.
            Since LSE is the 4th step, the substeps are typically called 4a, 4b, and 4c.
            This algorithm set is for substep 4a.
        </p>
        <p class="bodytext">
            4a: Edge orientation (EO)<br>
            4b: Solve upper left and upper right edges (ULUR)<br>
            4c: Solve middle edges
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
