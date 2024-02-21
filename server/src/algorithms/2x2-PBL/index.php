<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithms for 2x2 PBL (Permutation of Both Layers)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>2x2 PBL Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">2x2 PBL Algorithms</h1>

        <p class="bodytext">
            PBL stands for Permutation of Both Layers, and it is the third step of the Ortega method.
            Ortega is a good intermediate method for 2x2 solvers who have already learned the beginner method.
        </p>
        <p class="bodytext">
            Here is how the Ortega method works:
            Beginner method starts with the first layer, but Ortega starts with just a face.
            In other words, the first layer doesn't have to be permuted correctly.
            The second step of Ortega is to orient the last layer, and lastly, you do PBL to finish the 2x2.
        </p>
        <p class="bodytext">
            PBL only has 6 cases, and you may already know 2 of the cases from other methods: J Perm and Y Perm. For this reason, PBL is a very easy algorithm set to learn.
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
