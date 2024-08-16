<style>
    body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .iconButton {
        width: 48px;
        height: 48px;
        cursor: pointer;
        padding: 10px;
        border-radius: 8px;
        transition: all 0.15s ease-in-out;

        &:hover {
            background: var(--gray-600);
        }
    }
    #menu {
        min-width: 250px;
        max-width: 250px;
        border-right: solid 1px var(--gray-600);
        padding-bottom: 100px;
        overflow-y: auto;
    }

    /* Hide by default */
    .topBar, #menuClose { display: none; }

    @media (max-width: 700px) {

        /* Make body a column since we show .topBar */
        body {
            flex-direction: column;
        }

        /* Show .topBar if narrow screen */
        .topBar {
            display: flex;
            width: 100%;
            border-bottom: solid 1px var(--gray-600);
        }

        /* Hide menu by default */
        #menu {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            background: var(--gray-800);
            height: 100%;
            z-index: 2;
        }

        /* Show menu if .menuOpen */
        .menuOpen #menu {
            display: block;
        }

        /* Show menuClose if narrow screen */
        #menuClose {
            display: block;
        }

        /* Show menuBackground if narrow screen */
        .menuOpen #menuBackground {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #00000088;
            z-index: 1;
        }
    }

    .expandable {
        & svg {
            transition: transform 0.3s;
            width: 16px;
            height: 16px;
        }
    }
    .expandableOpen {
        /* Show child */
        & .expandableChild {
            display: block;
        }

        /* Rotate arrow */
        & svg {
            transform: rotate(90deg);
        }
    }
    .expandableButton {
        width: 100%;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        border-radius: 0;

        &:hover {
            background: var(--gray-600);
        }
    }

    /* Hide child by default */
    .expandableChild {
        display: none;
    }

    .menuLink {
        display: block;
        padding: 0.5rem 1rem 0.5rem 2rem;
        color: var(--gray-100);
        transition: all 0.15s ease-in-out;

        &:hover {
            background: var(--gray-600);
        }
    }
</style>

<div class="topBar">
    <svg id="menuIcon" class="iconButton" viewBox="0 0 100 100" stroke="var(--gray-100)"  stroke-width="10">
        <path d="M 0,15 h 100" />
        <path d="M 0,50 h 100" />
        <path d="M 0,85 h 100" />
    </svg>
</div>

<div id="menuBackground"></div>

<div id="menu">
    <svg id="menuClose" class="iconButton" viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="12" stroke-linecap="round">
        <path d="M 10,10 L 90,90" />
        <path d="M 90,10 L 10,90" />
    </svg>
    <div class="expandable">
        <button class="expandableButton">
            <p>3x3 Algs</p>
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92" /></svg>
        </button>
        <div class="expandableChild">
            <a href="/algorithms/F2L" class="menuLink">F2L</a>
            <a href="/algorithms/OLL" class="menuLink">OLL</a>
            <a href="/algorithms/PLL" class="menuLink">PLL</a>
            <a href="/algorithms/Winter-Variation" class="menuLink">Winter Variation</a>
            <a href="/algorithms/COLL" class="menuLink">COLL</a>
            <a href="/algorithms/OLLCP" class="menuLink">OLLCP</a>
            <a href="/algorithms/ZBLL" class="menuLink">ZBLL</a>
        </div>
    </div>
    <div class="expandable">
        <button class="expandableButton">
            <p>Roux Algs</p>
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92" /></svg>
        </button>
        <div class="expandableChild">
            <a href="/algorithms/CMLL" class="menuLink">CMLL</a>
            <a href="/algorithms/OH-CMLL" class="menuLink">OH CMLL</a>
            <a href="/algorithms/LSE-EO" class="menuLink">LSE EO</a>
            <a href="/algorithms/LSE-EOLR" class="menuLink">LSE EOLR</a>
        </div>
    </div>
    <div class="expandable">
        <button class="expandableButton">
            <p>2x2 Algs</p>
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92" /></svg>
        </button>
        <div class="expandableChild">
            <a href="/algorithms/2x2-PBL" class="menuLink">PBL</a>
            <a href="/algorithms/2x2-CLL" class="menuLink">CLL</a>
            <a href="/algorithms/2x2-EG1" class="menuLink">EG1</a>
            <a href="/algorithms/2x2-EG2" class="menuLink">EG2</a>
        </div>
    </div>
    <div class="expandable">
        <button class="expandableButton">
            <p>Square-1 Algs</p>
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92" /></svg>
        </button>
        <div class="expandableChild">
            <a href="/algorithms/SQ1-Cube-Shape" class="menuLink">SQ1 Cube Shape</a>
            <a href="/algorithms/SQ1-CSP" class="menuLink">SQ1 CSP</a>
            <a href="/algorithms/SQ1-EP" class="menuLink">SQ1 EP</a>
            <a href="/algorithms/SQ1-OBL" class="menuLink">SQ1 OBL</a>
        </div>
    </div>
    <div class="expandable">
        <button class="expandableButton">
            <p>Other Algs</p>
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92" /></svg>
        </button>
        <div class="expandableChild">
            <a href="/algorithms/4x4-PLL-Parity" class="menuLink">4x4 PLL Parity</a>
        </div>
    </div>
    <div class="expandable">
        <button class="expandableButton">
            <p>Calculators</p>
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92" /></svg>
        </button>
        <div class="expandableChild">
            <a href="/am-i-sub-x" class="menuLink">Am I Sub-X?</a>
            <a href="/birthdays" class="menuLink">WCA Birthdays</a>
            <a href="/competitions" class="menuLink">Competition Distance</a>
            <a href="/calculate-kinch" class="menuLink">Kinch Calculator</a>
            <a href="/kinch-ranks" class="menuLink">Kinch Leaderboard</a>
            <a href="/name-ranks" class="menuLink">Name Ranks</a>
            <a href="/record-streak" class="menuLink">Record Streak</a>
            <a href="/calculate-sum-of-ranks" class="menuLink">SoR Calculator</a>
            <a href="/sum-of-ranks" class="menuLink">SoR Leaderboard</a>
        </div>
    </div>

    <p style="padding: 16px; color: var(--gray-300); font-size: 14px;">
        Happy WCA birthday to Carter Thomas, member of WCA Advisory Council!
        <a href="/birthdays" class="link">See today's WCA birthdays</a>
    </p>
</div>

<script>
    document.querySelectorAll(".expandableButton").forEach(ele => {
        ele.onclick = () => {
            ele.parentElement.classList.toggle("expandableOpen");
        }
    });

    menuIcon.onclick = () => document.body.classList.toggle("menuOpen");
    menuClose.onclick = () => document.body.classList.remove("menuOpen");
    menuBackground.onclick = () => document.body.classList.remove("menuOpen");
</script>