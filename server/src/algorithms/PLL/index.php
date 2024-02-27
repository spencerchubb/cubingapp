<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="21 Rubik's Cube algorithms for PLL (Permutation of Last Layer)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>PLL Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">PLL Algorithms</h1>

        <p class="bodytext">
            Permutation of Last Layer (also called PLL) is the last step of the CFOP Rubik's Cube method.
            CFOP stands for Cross, F2L, OLL, and PLL.
        </p>
        <p class="bodytext">
            Up to this point, the first two layers should be solved, and the last layer should be oriented.
            After PLL, the entire Rubik's Cube should be solved.
        </p>
        <p class="bodytext">
            PLL has 21 algorithms, so it has less algorithms than OLL.
            Most cubers recommend learning PLL before OLL because you only need to learn 21 algorithms to improve your times.
        </p>
        <p class="bodytext">
            This site tells you all 21 PLL algorithms, the fingertricks, and how to remember them.
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
