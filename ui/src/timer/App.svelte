<script lang="ts">
    import GLManager from "../lib/components/GLManager.svelte";
    import SideNav from "../lib/components/SideNav.svelte";
    import type { Scene } from "../lib/scripts/rubiks-viz";
    import {
        initApp,
        onChangePuzzle,
        onDown,
        onUp,
        performNewScramble,
        puzzles,
        setCallback,
        setInspection,
        solve,
        type TimerStatus,
    } from "./app";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import Drawer from "../lib/components/Drawer.svelte";
    import SettingsIcon from "../lib/components/icons/SettingsIcon.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import Toggle from "../lib/components/Toggle.svelte";

    let scene: Scene;

    let state = setCallback((newState) => {
        state = newState;
    });

    function timerColor(status: TimerStatus): string {
        switch (status) {
            case "stopped":
                return "white";
            case "scrambled":
                return "white";
            case "inspecting":
                return "var(--red-600)";
            case "holding down":
                return "var(--yellow-500)";
            case "ready":
                return "var(--green-600)";
            case "running":
                return "white";
        }
    }

    let drawerIndex = -1;

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <div class="row">
            <NavBarIcon on:click={() => (drawerIndex = 0)}>
                <SettingsIcon />
            </NavBarIcon>
        </div>
    </nav>
    <div
        class="row"
        style="justify-content: center; align-items: start; width: 100%; height: 100%; position: relative;"
    >
        <div class="col" style="width: 100%; height: 100%; gap: 16px; padding: 16px;">
            <p>{state.scramble}</p>
            <div style="border-radius: 8px; box-shadow: 0 0 4px 2px var(--gray-600);">
                <GLManager
                    onSceneInitialized={(_scene) => {
                        scene = _scene;
                        initApp(scene);
                    }}
                />
            </div>
            <button
                style="
                font-size: 1.5rem; 
                border-radius: 8px; 
                border: solid 1px {timerColor(state.timerStatus)}; 
                color: {timerColor(state.timerStatus)};
                background: transparent;
                width: 320px;
                height: 120px;
                white-space: break-spaces;"
                on:pointerdown={() => onDown()}
                on:pointerup={() => onUp()}
            >
                {state.timerText}
            </button>
        </div>
        {#if drawerIndex === 0}
            <Drawer title="Settings" bind:drawerIndex>
                <div class="col" style="align-items:start; padding: 16px; gap: 16px;">
                    <select
                        value={state.puzzle}
                        on:change={(event) => onChangePuzzle(event)}
                    >
                        {#each puzzles as puzzle}
                            <option value={puzzle}>{puzzle}</option>
                        {/each}
                    </select>
                    <button on:click={() => solve()}>Solve</button>
                    <button on:click={() => performNewScramble()}>
                        Scramble
                    </button>
                    <a href="/keybindings.html">
                        <button>Customize key bindings</button>
                    </a>
                    <div style="width: 100%; height: 1px; background: var(--gray-600);"></div>
                    <div class="row" style="width: 100%; justify-content: space-between;">
                        <p>Inspection</p>
                        <Toggle 
                            checked={state.inspection}
                            on:change={setInspection}
                        />
                    </div>
                </div>
            </Drawer>
        {/if}
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>
