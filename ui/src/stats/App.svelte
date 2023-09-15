<script lang="ts">
    import { setCallback } from "./app";
    import SideNav from "../lib/components/SideNav.svelte";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import { displayFilePicker } from "./app";

    let state = setCallback((newState) => {
        state = newState;
    });

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%; overflow-y: auto;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <h1>Cubing Stats</h1>
        <!-- empty div so the text is centered -->
        <div style="width: 48px;"></div>
    </nav>
    <div class="col" style="width: 100%; padding: 16px; gap: 16px;">
        <div 
            class="col"
            style="
                align-items: start;
                padding: 16px;
                border-radius: 8px;
                border: solid 1px var(--gray-600);"
        >
            <p>
                Supported timers:
            </p>
            <ul style="margin-top: 8px;">
                <li>csTimer</li>
                <li>CubeDesk</li>
                <li>Other (tell me and I'll add it)</li>
            </ul>
            <div class="row" style="gap: 16px; margin-top: 24px;">
                <button
                    on:click={displayFilePicker}
                >
                    Upload file
                </button>
                <p>{state.filename}</p>
            </div>
        </div>
        <div id="plotly-div" class="col"></div>
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    /* Styles for plotly charts */

    :global(svg) {
        border-radius: 16px;
    }

    :global(.js-plotly-plot) {
        border: solid 1px var(--gray-600);
        border-radius: 16px;
    }

    #plotly-div {
        gap: 16px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>