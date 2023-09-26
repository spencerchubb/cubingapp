<script lang="ts">
    import SideNav from "../../src/lib/components/SideNav.svelte";
    import NavBarIcon from "../../src/lib/components/NavBarIcon.svelte";
    import MenuIcon from "../../src/lib/components/icons/MenuIcon.svelte";
    import GithubIcon from "../../src/lib/components/icons/GithubIcon.svelte";

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <a href="https://github.com/spencerchubb/algdb/">
            <NavBarIcon>
                <GithubIcon />
            </NavBarIcon>
        </a>
    </nav>
    <div
        class="col"
        style="width: 100%; gap: 16px; padding: 16px; overflow-y: auto;"
    >
        <h1>Alg Trainer</h1>
        <p>The #1 place to memorize any algorithm set</p>
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
                <a class="alg-set" href="/train/2x2x2.html">
                    2x2x2
                </a>
            </div>
        </div>
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    .all-cards-div {
        gap: 16px;
        display: flex;
        flex-direction: column;
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
        box-shadow: 0 0 4px 2px var(--gray-600);
        border-radius: 16px;
        padding: 16px;
    }

    h2 {
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
