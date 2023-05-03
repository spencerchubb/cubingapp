<script lang="ts">
    import GLManager from "../lib/components/GLManager.svelte";
    import SideNav from "../lib/components/SideNav.svelte";
    import type { Scene } from "../lib/scripts/rubiks-viz";
    import {
        initApp,
        onChangePuzzle,
        onDown,
        onPressScramble,
        onUp,
        puzzles,
        setCallback,
        type TimerStatus,
    } from "./app";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import Drawer from "../lib/components/Drawer.svelte";
    import SettingsIcon from "../lib/components/icons/SettingsIcon.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";

    let scene: Scene;

    let state = setCallback((newState) => {
        state = newState;
    });

    function timerColor(status: TimerStatus): string {
        switch (status) {
            case "stopped":
                return "white";
            case "holding down":
                return "red";
            case "ready":
                return "green";
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
        style="
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
    position: relative;"
    >
        <div class="col" style="width: 100%; gap: 16px; padding: 16px;">
            <div
                class="row"
                style="
          justify-content: space-between;
          gap: 16px;"
            >
                <select
                    value={state.puzzle}
                    on:change={(event) => onChangePuzzle(event, scene)}
                >
                    {#each puzzles as puzzle}
                        <option value={puzzle}>{puzzle}</option>
                    {/each}
                </select>
                <button on:click={() => scene.cube.solve()}> Solve </button>
                <button on:click={() => onPressScramble(scene)}>
                    Scramble
                </button>
            </div>
            <p>{state.scramble}</p>
            <GLManager
                onSceneInitialized={(_scene) => {
                    scene = _scene;
                    initApp(scene);
                }}
            />
            <p
                style="
                font-size: 2rem; 
                border-radius: 8px; 
                border: solid 1px {timerColor(state.timerStatus)}; 
                padding: 1.2rem 1rem; 
                color: {timerColor(state.timerStatus)}"
                on:pointerdown={() => onDown()}
                on:pointerup={() => onUp()}
            >
                {state.timerText}
            </p>
        </div>
        {#if drawerIndex === 0}
            <Drawer title="Settings" bind:drawerIndex>
                <div style="padding: 16px;">
                    <a href="/keybindings.html">
                        <button>customize key bindings</button>
                    </a>
                </div>
            </Drawer>
        {/if}
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>
