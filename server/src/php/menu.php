<style>
    body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .hoverHighlight:hover {
        transition: all 0.15s ease-in-out;
        background: var(--gray-600);
    }

    .iconButton {
        width: 48px;
        height: 48px;
        cursor: pointer;
        padding: 10px;
        border-radius: 8px;
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

        &:hover { background: var(--gray-600); }
    }

    /* Hide child by default */
    .expandableChild {
        display: none;
    }

    .menuLink {
        display: block;
        padding: 0.5rem 1rem 0.5rem 2rem;
        color: var(--gray-100);

        &:hover {
            background: var(--gray-600);
        }
    }
</style>

<div class="topBar">
    <svg id="menuIcon" class="iconButton hoverHighlight" viewBox="0 0 100 100" stroke="var(--gray-100)"  stroke-width="10">
        <path d="M 0,15 h 100" />
        <path d="M 0,50 h 100" />
        <path d="M 0,85 h 100" />
    </svg>
</div>

<div id="menuBackground"></div>

<?php include "algSetGroups.php"; ?>

<div id="menu">
    <svg id="menuClose" class="iconButton hoverHighlight" viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="12" stroke-linecap="round">
        <path d="M 10,10 L 90,90" />
        <path d="M 90,10 L 10,90" />
    </svg>
    <a
        href="/"
        class="hoverHighlight"
        style="display: flex; align-items: center; gap: 12px; padding: 8px 16px; color: var(--gray-100); font-weight: bold;"
    >
        <img src="/assets/favicon.svg" alt="Logo" width="24" height="24">
        CubingApp
    </a>
    <?php
    foreach ($algSetGroups as $groupName => $group) {
        echo "<div class='expandable'>";
            echo "<button class='expandableButton hoverHighlight'>";
                echo "<p>$groupName Algs</p>";
                echo "<svg viewBox='0 0 100 100' stroke='var(--gray-100)' stroke-width='16' stroke-linecap='round' stroke-linejoin='round' fill='none'><path d='M 25,8 L 75,50 L 25,92' /></svg>";
            echo "</button>";
            echo "<div class='expandableChild'>";
                foreach ($group as $algSet) {
                    $algSetWithSpaces = str_replace("-", " ", $algSet);
                    echo "<a href='/algorithms/$algSet' class='menuLink hoverHighlight'>$algSetWithSpaces</a>";
                }
            echo "</div>";
        echo "</div>";
    }
    ?>
    <div class="expandable">
        <button class="expandableButton hoverHighlight">
            <p>Calculators</p>
            <svg viewBox="0 0 100 100" stroke="var(--gray-100)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 25,8 L 75,50 L 25,92" /></svg>
        </button>
        <div class="expandableChild">
            <a href="/am-i-sub-x" class="menuLink hoverHighlight">Am I Sub-X?</a>
            <a href="/birthdays" class="menuLink hoverHighlight">WCA Birthdays</a>
            <a href="/competitions" class="menuLink hoverHighlight">Competition Distance</a>
            <a href="/kinch-ranks" class="menuLink hoverHighlight">Kinch Ranks</a>
            <a href="/name-ranks" class="menuLink hoverHighlight">Name Ranks</a>
            <a href="/record-streak" class="menuLink hoverHighlight">Record Streak</a>
            <a href="/sum-of-ranks" class="menuLink hoverHighlight">Sum of Ranks</a>
        </div>
    </div>
    <a href="/feedback" class="hoverHighlight" style="display: flex; padding: 8px 16px; color: var(--gray-100);">Feedback</a>
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