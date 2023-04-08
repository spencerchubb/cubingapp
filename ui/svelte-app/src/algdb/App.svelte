<script lang="ts">
  import SideNav from "../lib/components/SideNav.svelte";
  import { getAlgSetUrl, onScroll, renderCubes, selectAlgSet, setCallback } from "./app";
  import NavBarIcon from "../lib/components/NavBarIcon.svelte";
  import { afterUpdate, onMount } from "svelte";
  import Spinner from "../lib/components/Spinner.svelte";

  let state = setCallback((newState) => {
    state = newState;
  });

  let sideNavOpen = false;

  onMount(() => {
    selectAlgSet();
  })

  afterUpdate(() => {
    renderCubes();
  });
</script>

<main class="col" style="width: 100%; height: 100%;">
  <nav class="navbar" style="justify-content: space-between;">
    <NavBarIcon name="menu" on:click={() => (sideNavOpen = true)} />
    <a href="https://github.com/spencerchubb/algdb/">
      <NavBarIcon
        name="github"
      />
    </a>
  </nav>
  <div
    class="col"
    style="
    width: 100%;
    gap: 16px;
    padding: 16px;
    overflow-y: auto;"
    on:scroll={() => {
      onScroll();
    }}
  >
    {#if state.algSetName}
      <h1>{state.algSetName}</h1>
      {#if !state.algs}
        <Spinner />
      {:else}
        {#each state.algs as alg, i}
          <div
            class="row"
            style="
            border: solid 1px var(--gray-500);
            box-shadow: 0 0 4px 2px var(--gray-600);
            border-radius: 16px;
            width: 500px;
            max-width: 100%;"
          >
            <div 
              id="scene{i}"
              style="width: 150px; height: 150px; min-width: 150px; min-height: 150px;"
            ></div>
            <div
              class="col"
              style="
              padding: 16px;
              align-items: start;
              flex-shrink: 1;"
            >
              <p
                style="font-weight: bold;"
              >
                {alg.name}
              </p>
              {#each alg.algs as alg1}
                <p>{alg1}</p>
              {/each}
            </div>
          </div>
        {/each}
      {/if}
    {:else}
      <h1>Cubing Algorithm Database</h1>
      {#each state.algSets as algSet}
        <a
          style="
          width: 300px;
          padding: 16px;
          gap: 16px;"
          class="card row"
          href={getAlgSetUrl(algSet.name)}
        >
          <p
            style="
            font-weight: bold;
            font-size: 1.75rem;"
          >
            {algSet.name}
          </p>
          <p
            style="
            font-size: 1.5rem;"
          >
            {algSet.numAlgs} algs
          </p>
        </a>
      {/each}
    {/if}
  </div>
  <SideNav bind:open={sideNavOpen} />
</main>

<style>
  .card {
    background: transparent;
    border: solid 1px var(--gray-500);
    box-shadow: 0 0 4px 2px var(--gray-600);
    border-radius: 16px;
  }

  .card:hover {
    background: var(--gray-600);
  }
</style>
