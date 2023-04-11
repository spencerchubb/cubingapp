<script lang="ts">
    import SideNav from "../../src/lib/components/SideNav.svelte";
    import { fetchAlgs, onScroll, renderCubes, setCallback } from "./algSetPage";
    import NavBarIcon from "../../src/lib/components/NavBarIcon.svelte";
    import { afterUpdate, onMount } from "svelte";

    let href = window.location.href;
    let index = href.lastIndexOf("/");
    // -5 to remove ".html"
    let algSetName = href.substring(index + 1, href.length - 5).replaceAll("-", " ");

    let title = `Rubik's Cube ${algSetName} Algorithms`;

    let state = setCallback((newState) => {
        state = newState;
    });

    let sideNavOpen = false;

    onMount(() => {
        fetchAlgs(algSetName);
        document.title = title;
    });

    afterUpdate(() => {
        renderCubes();
    });
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon name="menu" on:click={() => (sideNavOpen = true)} />
        <a href="https://github.com/spencerchubb/algdb/">
            <NavBarIcon name="github" />
        </a>
    </nav>
    <div
        class="col"
        style="width: 100%; gap: 16px; padding: 16px; overflow-y: auto;"
        on:scroll={() => {
            onScroll();
        }}
    >
        <h1>{state.algSetName}</h1>
        {#each state.algs as alg, i}
            <div
                class="row"
                style="border: solid 1px var(--gray-500); box-shadow: 0 0 4px 2px var(--gray-600); border-radius: 16px; width: 500px; max-width: 100%;"
            >
                <div
                    id="scene{i}"
                    style="width: 150px; height: 150px; min-width: 150px; min-height: 150px;"
                />
                <div
                    class="col"
                    style="padding: 16px; align-items: start; flex-shrink: 1;"
                >
                    <p style="font-weight: bold;">
                        {alg.name}
                    </p>
                    {#each alg.algs as alg1}
                        <p class="alg-list-item">{alg1}</p>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>

    .alg-list-item {
        padding: 4px 0;
        width: 100%;
    }

    .alg-list-item:not(:last-child) {
        border-bottom: solid 1px var(--gray-500);
    }
</style>
