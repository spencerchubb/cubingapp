<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Take speedcubing to the next level. We offer an algorithm database, a reconstruction tool, a timer, and an algorithm trainer.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>CubingApp</title>
</head>

<body style="width: 100%; height: 100%;">
    <main class="col" style="width: 100%; height: 100%; align-items: center; padding: 16px; overflow-y: auto;">
        <div style="display: flex; flex-wrap: wrap; justify-content: center;">
            <div class="col" style="justify-content: center; gap: 16px;">
                <h1 style="text-align: center;">CubingApp</h1>
                <p style="
                    text-align: center;
                    font-size: 1.4rem;
                    line-height: 1.8rem;
                    font-weight: bold;
                    font-style: italic;
                    color: var(--gray-300);">Take speedcubing to the next level</p>
            </div>
            <div class="col" style="
                box-shadow: 0 0 4px 2px var(--gray-600);
                border-radius: 16px;
                padding-bottom: 16px;
                margin: 16px 32px;">
                <div id="scene" style="width: 200px; height: 200px;"></div>
                <button id="tryMe">Try me</button>
            </div>
        </div>
        <div class="col" style="margin-top: 32px; gap: 16px;">
            <a href="/algorithms" class="card blue-to-purple">
                <h2>Algorithms</h2>
                <p>4000+ Rubik's Cube algorithms</p>
            </a>
            <a href="/recon.html" class="card red-to-orange">
                <h2>Recon Tool</h2>
                <p>Enter a scramble and a solution, then share the link with your friends</p>
            </a>
            <a href="/train" class="card blue-to-purple">
                <h2>Train</h2>
                <p>Memorize algorithms in half the time</p>
            </a>
            <div style="width: 100%; margin-top: 64px;">
                <?php include "php/cool_calculators.php" ?>
            </div>
            </div>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<style>
    .card {
        padding: 16px;
        border-radius: 16px;
        width: 100%;
        max-width: 500px;
        transition: all 0.15s ease-in-out;
    }

    .card:hover {
        box-shadow: inset 0 0 16px -4px var(--gray-300);
    }

    .blue-to-purple {
        background-image: linear-gradient(135deg,
                hsl(240deg 47% 23%) 0%,
                hsl(266deg 42% 27%) 50%,
                hsl(286deg 36% 30%) 100%);
    }

    .red-to-orange {
        background-image: linear-gradient(135deg,
                hsl(0deg 64% 31%) 0%,
                hsl(15deg 76% 32%) 50%,
                hsl(27deg 94% 31%) 100%);
    }
</style>

<script type="module">
    import { newCube } from "./js/rubiks-viz/index.js";

    const sceneDiv = document.getElementById("scene");
    const tryMe = document.getElementById("tryMe");

    const scene = newCube(sceneDiv);

    // Fun fact: This scramble and solution is Max Park's world record solve.
    const scram = "D U F2' L2 U' B2 F2 D L2 U R' F' D R' F' U L D' F' D R2";
    const soln = "x2 R' D D R' D L' U L D R' U' R D L U' L' U' R U R' d R' U' R r' U' R U' R' U U r U";
    tryMe.onclick = () => {
        scene.puzzle.solve();
        scene.puzzle.performAlg(scram);
        scene.puzzle.performAlgWithAnimation(soln, () => {});
    }

    scene.puzzle.performAlg(scram);
</script>

<?php include "php/gtag.php" ?>

</html>
