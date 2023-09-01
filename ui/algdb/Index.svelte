<script lang="ts">
    import SideNav from "../src/lib/components/SideNav.svelte";
    import NavBarIcon from "../src/lib/components/NavBarIcon.svelte";
    import MenuIcon from "../src/lib/components/icons/MenuIcon.svelte";
    import GithubIcon from "../src/lib/components/icons/GithubIcon.svelte";

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
        <h1>Rubik's Cube Algorithms</h1>
        <p>
            If you have been looking for an alternative to SpeedcubeDB, look no further.
            CubingApp is the best alternative to SpeedcubeDB.
        </p>
        <p>
            This algorithm database has 3700+ algorithms for 2x2, 3x3, 4x4, Square-1, and more to come soon.
            I have limited time but I work very hard to add new algorithms.
            I tend to prioritize requests that will benefit the most amount of people.
        </p>
        <p>
            The database is also open source, so you don't need to worry about it going away like SpeedcubeDB has.
            If I ever take down CubingApp (which I have no plans to do), the database is <a href="https://github.com/spencerchubb/algdb" class="link">public on github</a> for anyone.
        </p>
        <p>
            That being said, I just have one thing to ask.
            If your friends also need an alternative to SpeedcubeDB, please spread the word about CubingApp.
        </p>
        <p>- Spencer</p>
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

    p {
        max-width: 600px;
        width: 100%;
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
