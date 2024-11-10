<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithm database with 4,000 algorithms">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Rubik's Cube Algorithms</title>
</head>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main class="col">
        <h1>Rubik's Cube Algorithms</h1>
        <p style="margin-top: 16px; font-style: italic;">
            Algorithm database with 4,000 algorithms for 3x3, 2x2, Square-1, and more
        </p>
        <div class="all-cards-div">
            <div class="card">
                <h2>3x3</h2>
                <a class="alg-set" href="/algorithms/F2L">
                    F2L
                </a>
                <a class="alg-set" href="/algorithms/OLL">
                    OLL
                </a>
                <a class="alg-set" href="/algorithms/PLL">
                    PLL
                </a>
                <a class="alg-set" href="/algorithms/Winter-Variation">
                    Winter Variation
                </a>
                <a class="alg-set" href="/algorithms/COLL">
                    COLL
                </a>
                <a class="alg-set" href="/algorithms/OLLCP">
                    OLLCP
                </a>
                <a class="alg-set" href="/algorithms/ZBLL">
                    ZBLL
                </a>
            </div>
            <div class="card">
                <h2>3x3 Roux</h2>
                <a class="alg-set" href="/algorithms/CMLL">
                    CMLL
                </a>
                <a class="alg-set" href="/algorithms/OH-CMLL">
                    OH CMLL
                </a>
                <a class="alg-set" href="/algorithms/LSE-EO">
                    LSE EO
                </a>
                <a class="alg-set" href="/algorithms/LSE-EOLR">
                    LSE EOLR
                </a>
            </div>
            <div class="card">
                <h2>2x2</h2>
                <a class="alg-set" href="/algorithms/2x2-PBL">
                    PBL
                </a>
                <a class="alg-set" href="/algorithms/2x2-CLL">
                    CLL
                </a>
                <a class="alg-set" href="/algorithms/2x2-EG1">
                    EG1
                </a>
                <a class="alg-set" href="/algorithms/2x2-EG2">
                    EG2
                </a>
            </div>
            <div class="card">
                <h2>Pyraminx</h2>
                <a class="alg-set" href="/algorithms/Pyraminx-Last-Layer">
                    Pyraminx Last Layer
                </a>
            </div>
            <div class="card">
                <h2>Square-1</h2>
                <a class="alg-set" href="/algorithms/SQ1-Cube-Shape">
                    SQ1 Cube Shape
                </a>
                <a class="alg-set" href="/algorithms/SQ1-CSP">
                    SQ1 CSP
                </a>
                <a class="alg-set" href="/algorithms/SQ1-EP">
                    SQ1 EP
                </a>
                <a class="alg-set" href="/algorithms/SQ1-OBL">
                    SQ1 OBL
                </a>
            </div>
            <div class="card">
                <h2>Other</h2>
                <a class="alg-set" href="/algorithms/4x4-PLL-Parity">
                    4x4 PLL Parity
                </a>
            </div>
        </div>
        <h2 class="subheader">About the algorithm database</h2>
        <p class="bodytext">
            CubingApp has the highest quality algorithms for a multitude of puzzles.
            All algorithms are hand picked and optimized for speedcubing.
        </p>
        <p class="bodytext">
            There is an algorithm for nearly every situation, and if you can't find what you're looking for, we welcome feedback.
            Whether you are a beginner, intermediate, or advanced cuber, you can find the right algorithms for you.
        </p>
        <h2 class="subheader">How you can help</h2>
        <p class="bodytext">
            This website would not be possible without the help of the cubing community.
        </p>
        <p class="bodytext">
            The database is regularly updated with the best algorithms as new discoveries are made in cubing.
            Many cubers have suggested algorithms and algorithm sets.
            You can also <a href="https://forms.gle/VBNee1DN55hsneDeA" class="link">suggest algorithms here</a>.
        </p>
        <div style="margin-top: 64px;"></div>
    </main>
</body>

<style>
    .all-cards-div {
        gap: 16px;
        display: flex;
        flex-direction: column;
        margin-top: 32px;
    }

    @media (min-width: 1000px) {
        .all-cards-div {
            gap: 16px;
            display: grid;
            grid-template-columns: auto auto;
        }
    }

    .card {
        width: 100%;
        max-width: 400px;
        border: solid 1px var(--gray-500);
        box-shadow: 0 2px 8px -2px var(--gray-400);
        border-radius: 16px;
        padding: 16px;
    }

    .card h2 {
        width: 100%;
        text-align: center;
    }

    .alg-set {
        font-weight: 700;
        font-size: 1.3rem;
        padding: 4px;
        margin: 4px;
        border-radius: 4px;
        color: var(--blue-300);
        white-space: nowrap;
        display: inline-block;
    }

    .alg-set:hover {
        background: var(--gray-600);
    }

    .subheader {
        align-self: center;
        max-width: 600px;
        margin-top: 32px;
    }

    .bodytext {
        align-self: center;
        max-width: 600px;
        line-height: 1.5rem;
        margin-top: 16px;
    }
</style>

<?php include "../php/gtag.php" ?>

</html>
