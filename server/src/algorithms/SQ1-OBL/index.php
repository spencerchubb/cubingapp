<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithms for SQ1 OBL (Orient Both Layers)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>SQ1 OBL Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">SQ1 OBL Algorithms</h1>

        <p class="bodytext">
            Square-1 OBL stands for Orient Both Layers, and it is an advanced Square-1 technique.
            The simpler method is to orient corners and then orient edges separately.
            Orienting both layers simultaneously is faster, but it requires a lot more learning.
        </p>

        <div id="subsetsRoot"></div>
        <div id="algsRoot"></div>

        <div style="margin-top: 64px;"></div>
    </main>
</body>

<script type="module">
    import { algSet } from "./algSet.js";
    import { initPage } from "../page_sq1_algset.js";
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
