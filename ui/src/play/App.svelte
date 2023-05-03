<script lang="ts">
  import GLManager from "../lib/components/GLManager.svelte";
  import SideNav from "../lib/components/SideNav.svelte";
  import type { Scene } from "../lib/scripts/rubiks-viz";
  import { initApp, onChangePuzzle, onPressScramble, onPressTimerButton, puzzles, setCallback } from "./app";
  import NavBarIcon from "../lib/components/NavBarIcon.svelte";
  import Drawer from "../lib/components/Drawer.svelte";
  import SettingsIcon from "../lib/components/icons/SettingsIcon.svelte";
  import MenuIcon from "../lib/components/icons/MenuIcon.svelte";

  let scene: Scene;

  let state = setCallback((newState) => {
    state = newState;
  });

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
            on:change={event => onChangePuzzle(event, scene)}
        >
            {#each puzzles as puzzle}
                <option value={puzzle}>{puzzle}</option>
            {/each}
        </select>
        <button on:click={() => scene.cube.solve()}> Solve </button>
        <button on:click={() => onPressScramble(scene)}> Scramble </button>
      </div>
      <p>{state.scramble}</p>
      <GLManager
        onSceneInitialized={(_scene) => {
          scene = _scene;
          initApp(scene);
        }}
      />
      <p style="font-size: 1.5rem;">
        {state.timerText}
      </p>
      <button on:click={() => onPressTimerButton()}>
        {state.timerButtonText}
      </button>
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
