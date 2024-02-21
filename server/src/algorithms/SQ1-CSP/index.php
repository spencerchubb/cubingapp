<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithms for SQ1 CSP (Cube Shape Parity)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>SQ1 CSP Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">SQ1 CSP Algorithms</h1>

        <p class="bodytext">
            "Cubeshape Parity, as the name suggests, involves fixing parity errors on the Square-1 during the cubeshape step.
            The main advantage to this method is that checking for parity occurs during inspection, which isn't factored into your final time." - <a href="http://brandonlin.com/cubing/csp.html" class="link">Brandon Lin</a>
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
