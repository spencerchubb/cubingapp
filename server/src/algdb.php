<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Rubik's Cube algorithm database with 4,000 algorithms">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Rubik's Cube Algorithms</title>
</head>

<body style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "php/menu/menuIcon.php" ?>
        <?php include_once "php/menu/menu.php" ?>
    </nav>
    <main class="col" style="width: 100%; height: 100%; align-items: center; padding: 16px; overflow-y: auto;">
        <h1>Rubik's Cube Algorithms</h1>
        <p style="margin-top: 16px; font-style: italic;">
            Algorithm database with 4,000 algorithms for 3x3, 2x2, Square-1, and more
        </p>
        <div class="all-cards-div">
            <div class="card">
                <h2>3x3</h2>
                <a class="alg-set" href="/algdb/F2L.html">
                    F2L
                </a>
                <a class="alg-set" href="/algdb/OLL.html">
                    OLL
                </a>
                <a class="alg-set" href="/algdb/PLL.html">
                    PLL
                </a>
                <a class="alg-set" href="/algdb/Winter-Variation.html">
                    Winter Variation
                </a>
                <a class="alg-set" href="/algdb/COLL.html">
                    COLL
                </a>
                <a class="alg-set" href="/algdb/OLLCP.html">
                    OLLCP
                </a>
                <a class="alg-set" href="/algdb/ZBLL.html">
                    ZBLL
                </a>
            </div>
            <div class="card">
                <h2>3x3 Roux</h2>
                <a class="alg-set" href="/algdb/CMLL.html">
                    CMLL
                </a>
                <a class="alg-set" href="/algdb/OH-CMLL.html">
                    OH CMLL
                </a>
                <a class="alg-set" href="/algdb/LSE-EO.html">
                    LSE EO
                </a>
                <a class="alg-set" href="/algdb/LSE-EOLR.html">
                    LSE EOLR
                </a>
            </div>
            <div class="card">
                <h2>2x2</h2>
                <a class="alg-set" href="/algdb/2x2-PBL.html">
                    PBL
                </a>
                <a class="alg-set" href="/algdb/2x2-CLL.html">
                    CLL
                </a>
                <a class="alg-set" href="/algdb/2x2-EG1.html">
                    EG1
                </a>
                <a class="alg-set" href="/algdb/2x2-EG2.html">
                    EG2
                </a>
            </div>
            <div class="card">
                <h2>Square-1</h2>
                <a class="alg-set" href="/algdb/SQ1-Cube-Shape.html">
                    SQ1 Cube Shape
                </a>
                <a class="alg-set" href="/algdb/SQ1-CSP.html">
                    SQ1 CSP
                </a>
                <a class="alg-set" href="/algdb/SQ1-EP.html">
                    SQ1 EP
                </a>
                <a class="alg-set" href="/algdb/SQ1-OBL.html">
                    SQ1 OBL
                </a>
            </div>
            <div class="card">
                <h2>Other</h2>
                <a class="alg-set" href="/algdb/4x4-PLL-Parity.html">
                    4x4 PLL Parity
                </a>
            </div>
        </div>
        <div style="margin-top: 96px;"></div>
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
</style>

<?php include "php/gtag.php" ?>

</html>
