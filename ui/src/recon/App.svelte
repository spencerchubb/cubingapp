<script lang="ts">
  import GLManager from "../lib/components/GLManager.svelte";
  import SideNav from "../lib/components/SideNav.svelte";
  import { copyUrl, initApp, setCallback, updateCubeState } from "./app";
  import NavBarIcon from "../lib/components/NavBarIcon.svelte";

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
    position: relative;
    overflow-y: auto;"
  >
    <div
      style="display: flex; flex-wrap: wrap; gap: 16px; padding: 16px;"
    >
      <GLManager
        onSceneInitialized={(scene) => {
          initApp(scene);
        }}
      />
      <div>
        <button on:click={copyUrl}>Copy URL</button>
        <p>Scramble</p>
        <textarea
          class="scramble-and-moves-input"
          bind:value={state.scramble}
          on:change={updateCubeState}
        />
        <p>Moves</p>
        <textarea
          class="scramble-and-moves-input"
          bind:value={state.moves}
          on:change={updateCubeState}
        />
      </div>
    </div>
  </div>
  <SideNav bind:open={sideNavOpen} />
</main>

<style>
  .scramble-and-moves-input {
    width: 300px;
    height: 200px;
  }
</style>
