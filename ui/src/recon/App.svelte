<script lang="ts">
  import GLManager from "../lib/components/GLManager.svelte";
  import SideNav from "../lib/components/SideNav.svelte";
  import {
    copyUrl,
    initApp,
    next,
    prev,
    setCallback,
    updateCubeState,
  } from "./app";
  import NavBarIcon from "../lib/components/NavBarIcon.svelte";
  import ChevronLeft from "../lib/components/icons/ChevronLeft.svelte";
  import ChevronRight from "../lib/components/icons/ChevronRight.svelte";

  let state = setCallback((newState) => {
    state = newState;
  });

  let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
  <nav class="navbar" style="justify-content: space-between;">
    <NavBarIcon name="menu" on:click={() => (sideNavOpen = true)} />
  </nav>
  <div
    class="col main-container"
    style="
    justify-content: center;
    align-items: start;
    gap: 16px;
    padding: 16px;
    width: 100%;
    height: 100%;
    overflow-y: auto;"
  >
    <div
      class="col"
      style="border-radius: 8px; box-shadow: 0 0 4px 2px var(--gray-600);"
    >
      <GLManager
        onSceneInitialized={(scene) => {
          initApp(scene);
        }}
        style="width: 320px; height: 320px;"
      />
      <div class="row">
        <button class="prev-and-next-btn" on:click={prev}>
          <ChevronLeft />
        </button>
        <p style="margin: 0 8px;">{state.moveIndex} / {state.maxMoves}</p>
        <button class="prev-and-next-btn" on:click={next}>
          <ChevronRight />
        </button>
      </div>
    </div>
    <div class="col" style="align-items: start; width: 100%;">
      <button on:click={copyUrl}>Copy URL</button>
      <textarea
        class="moves-input"
        placeholder="Enter scramble and moves"
        style="margin-top: 16px;"
        bind:value={state.moves}
        on:input={updateCubeState}
        on:click={updateCubeState}
        on:keyup={updateCubeState}
      />
      <!-- <p style="margin-top: 16px;">Cross suggestions</p>
      {#each state.suggestions as suggestion}
        <p>{suggestion}</p>
      {/each} -->
    </div>
  </div>
  <SideNav bind:open={sideNavOpen} />
</main>

<style>
  @media(min-width: 768px) {
    .main-container {
      flex-direction: row;
    }
  }

  .moves-input {
    width: 100%;
    height: 200px;
  }

  :global(.prev-and-next-btn) {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: solid 1px var(--gray-500);
    padding: 6px;
    background: transparent;
  }

  :global(.prev-and-next-btn:hover) {
    background: var(--gray-500);
  }
</style>
