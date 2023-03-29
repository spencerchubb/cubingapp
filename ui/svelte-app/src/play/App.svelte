<script lang="ts">
  import Drawer from "../lib/components/Drawer.svelte";
  import GLManager from "../lib/components/GLManager.svelte";
  import Icon from "../lib/components/Icon.svelte";
  import {
    AlgSetStore,
    getShowScramble,
    setShowScramble,
  } from "../lib/scripts/store";
  import SideNav from "../lib/components/SideNav.svelte";
  import type { Scene } from "../lib/scripts/rubiks-viz";
    import { onPressTimerButton, setCallback } from "./app";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";

  let scene: Scene;

  function onChangeLayers(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    scene.cube.setNumOfLayers(parseInt(value));
  }

  let state = setCallback(newState => {
    state = newState;
  });

  let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
  <nav class="navbar" style="justify-content: space-between;">
    <NavBarIcon
      name="menu"
      on:click={() => (sideNavOpen = true)}
    />
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
    <div
      class="col"
      style="gap: 16px; padding: 16px;"
    >
      <div
        class="row"
        style="
          justify-content: space-between;
          gap: 16px;"
      >
        <input
          type="number"
          value="3"
          min="1"
          style="width: 100px;"
          on:change={onChangeLayers}
        />
        <button
          on:click={() => scene.cube.solve()}
        >
          Solve
        </button>
        <button
          on:click={() => scene.cube.scramble()}
        >
          Scramble
        </button>
      </div>
      <GLManager
        onSceneInitialized={(_scene) => {
          scene = _scene;
        }}
      />
      <p
        style="font-size: 1.5rem;"
      >
        {state.timerText}
      </p>
      <button
        on:click={() => onPressTimerButton()}
      >
        {state.timerButtonText}
      </button>
    </div>
  </div>
  <SideNav bind:open={sideNavOpen} />
</main>

<style>
  :global(.icon) {
    width: 48px;
    height: 48px;
    padding: 8px;
    touch-action: none;
  }

  :global(.icon:hover) {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
</style>
