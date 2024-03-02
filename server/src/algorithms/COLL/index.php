<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="42 Rubik's Cube algorithms for COLL (Corners of Last Layer)">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>COLL Algorithms</title>
</head>

<body class="col" style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../../php/menu/menuIcon.php" ?>
        <?php include_once "../../php/menu/menu.php" ?>
    </nav>
    <main style="width: 100%; height: 100%; padding: 16px; overflow-y: auto;">
        <h1 style="text-align: center;">COLL Algorithms</h1>

        <p class="bodytext">
            COLL is an algorithm set to solve the corners of the last layer when edges are already oriented.
            This algorithm set is typically used in CFOP, but it is optional.
            Cubers who learn COLL only use it when a good opportunity arises.
        </p>
        <p class="bodytext">
            The advantage of COLL is that it will lead to a PLL where the corners are solved.
            There is a 1/12th chance of a PLL skip, a good chance of a U perm, and it could also be an H perm or Z perm.
            COLL can give an advantage because U perms are faster than other PLLs like G, V, N, and E.
        </p>
        <p class="bodytext">
            In addition, COLL can be useful if you plan to learn ZBLL.
            COLL is a subset of ZBLL, so the algorithms you learn will be useful later on.
            COLL can also teach you how to recognize corner cases, which can be challenging if you have only learned sets like OLL and PLL.
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
