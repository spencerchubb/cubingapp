<script lang="ts">
  import GLManager from "../lib/components/GLManager.svelte";
  import SideNav from "../lib/components/SideNav.svelte";
  import {
    copyUrl,
    editMoves,
    initApp,
    jumpToMove,
    next,
    onChangeMoves,
    prev,
    setCallback,
    updateCubeState,
    viewMoves,
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
    class="row"
    style="
    display: flex;
    flex-wrap: wrap;
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
        <button class="prev-and-next-btn" on:click={next}>
          <ChevronRight />
        </button>
      </div>
    </div>
    <div>
      <button on:click={copyUrl}>Copy URL</button>
      <p style="margin-top: 16px;">Scramble</p>
      <textarea
        class="moves-input"
        placeholder="Enter scramble"
        style="margin-top: 4px;"
        bind:value={state.scramble}
        on:change={updateCubeState}
      />
      <div class="col" style="margin-top: 16px; align-items: start;">
        <div class="row">
          <button
            class="tab-btn"
            style={state.editMoves
              ? "background: transparent;"
              : "background: var(--gray-600);"}
            on:click={viewMoves}>View Moves</button
          >
          <button
            class="tab-btn"
            style={state.editMoves
              ? "background: var(--gray-600);"
              : " background: transparent;"}
            on:click={editMoves}>Edit Moves</button
          >
        </div>
        <div style="outline: solid 1px var(--gray-400); padding: 8px;">
          {#if state.editMoves}
            <textarea
              class="moves-input"
              placeholder="Enter moves"
              bind:value={state.moves}
              on:change={onChangeMoves}
            />
          {:else}
            <div style="width: 300px; display: flex; flex-wrap: wrap;">
              {#each state.splitMoves as move, i}
                <button
                  class="move"
                  style={i === state.moveIndex
                    ? "background: var(--gray-600);"
                    : ""}
                  on:click={() => jumpToMove(i)}
                >
                  <p style="display: inline-block;">{move}</p>
                </button>
              {/each}
              <button
                class="move"
                style={state.moveIndex === state.splitMoves.length
                  ? "background: var(--gray-600);"
                  : ""}
                on:click={() => jumpToMove(state.splitMoves.length)}
              >
                <p style="display: inline-block;">&nbsp;</p>
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <SideNav bind:open={sideNavOpen} />
</main>

<style>
  .moves-input {
    width: 300px;
    height: 200px;
  }

  .tab-btn {
    outline: solid 1px var(--gray-400);
    border-radius: 8px 8px 0 0;
  }

  .move {
    background: transparent;
    padding: 8px;
  }

  .move:hover {
    outline: solid 1px var(--gray-400);
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
