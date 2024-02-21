<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Memorize algorithms at lightning speed. You can learn OLL, PLL, CLL, and more.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Cubing Trainer</title>
</head>

<body style="width: 100%; height: 100%;">
    <nav>
        <?php include_once "../php/menu/menuIcon.php" ?>
        <?php include_once "../php/menu/menu.php" ?>
    </nav>
    <main class="col" style="width: 100%; height: 100%; align-items: center; padding: 16px; overflow-y: auto;">
        <h1>Cubing Trainer</h1>
        <p style="margin-top: 16px; font-style: italic;">
            Memorize algorithms in half the time
        </p>
        <div class="all-cards-div">
            <div class="card">
                <h2>3x3</h2>
                <a class="alg-set" href="/train/F2L.html">
                    F2L
                </a>
                <a class="alg-set" href="/train/OLL.html">
                    OLL
                </a>
                <a class="alg-set" href="/train/PLL.html">
                    PLL
                </a>
                <a class="alg-set" href="/train/Winter-Variation.html">
                    Winter Variation
                </a>
                <a class="alg-set" href="/train/COLL.html">
                    COLL
                </a>
                <a class="alg-set" href="/train/OLLCP.html">
                    OLLCP
                </a>
                <a class="alg-set" href="/train/ZBLL.html">
                    ZBLL
                </a>
            </div>
            <div class="card">
                <h2>3x3 Roux</h2>
                <a class="alg-set" href="/train/CMLL.html">
                    CMLL
                </a>
                <a class="alg-set" href="/train/LSE-EO.html">
                    LSE EO
                </a>
                <a class="alg-set" href="/train/LSE-EOLR.html">
                    LSE EOLR
                </a>
            </div>
            <div class="card">
                <h2>2x2</h2>
                <a class="alg-set" href="/train/2x2-PBL.html">
                    PBL
                </a>
                <a class="alg-set" href="/train/2x2-CLL.html">
                    CLL
                </a>
                <a class="alg-set" href="/train/2x2-EG1.html">
                    EG1
                </a>
                <a class="alg-set" href="/train/2x2-EG2.html">
                    EG2
                </a>
            </div>
            <div class="card">
                <h2>Blocks</h2>
                <a class="alg-set" href="/train/cross.html">
                    Cross
                </a>
                <a class="alg-set" href="/train/xcross.html">
                    XCross
                </a>
                <a class="alg-set" href="/train/roux-fb.html">
                    Roux FB
                </a>
                <a class="alg-set" href="/train/eoline.html">
                    EOLine
                </a>
                <a class="alg-set" href="/train/eocross.html">
                    EOCross
                </a>
                <a class="alg-set" href="/train/2x2x2.html">
                    2x2x2
                </a>
                <a class="alg-set" href="/train/2x2x2-2x2x3.html">
                    2x2x2 ➡ 2x2x3
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

<?php include "../php/gtag.php" ?>

</html>
