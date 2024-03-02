<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithms for F2L (First Two Layers)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>F2L Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">F2L Algorithms</h1>

        <p class="bodytext">
            First Two Layers (also called F2L) is the second step of the CFOP Rubik's Cube method.
            F2L is involves solving a corner and an edge at the same time, which is much faster than solving them separately.
        </p>
        <p class="bodytext">
            It is highly recommended to learn F2L intuitively <i>before</i> learning these algorithms.
            These F2L algorithms are optimized for speed, and some are hard to remember.
            If you try to memorize these algorithms without an intuitive understanding, you will just make it harder for yourself.
        </p>
        <p class="bodytext">
            As an added benefit, this site also shows you the fastest way to solve each F2L case from any angle.
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
