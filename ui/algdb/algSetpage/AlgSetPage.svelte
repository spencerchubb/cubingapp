<script lang="ts">
    import SideNav from "../../src/lib/components/SideNav.svelte";
    import {
        initApp,
        onScroll,
        play,
        selectVariant,
        setCallback,
    } from "./algSetPage";
    import NavBarIcon from "../../src/lib/components/NavBarIcon.svelte";
    import { onMount } from "svelte";
    import MenuIcon from "../../src/lib/components/icons/MenuIcon.svelte";
    import GithubIcon from "../../src/lib/components/icons/GithubIcon.svelte";
    import PauseIcon from "../../src/lib/components/icons/PauseIcon.svelte";
    import PlayIcon from "../../src/lib/components/icons/PlayIcon.svelte";

    export let algSet: any;

    let state = setCallback((newState) => {
        state = newState;
    });

    let sideNavOpen = false;

    onMount(() => initApp(algSet));
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <a class="link" style="color: var(--gray-200);" href="/algdb.html">
            Alg DB Home
        </a>
        <a href="https://github.com/spencerchubb/algdb/">
            <NavBarIcon>
                <GithubIcon />
            </NavBarIcon>
        </a>
    </nav>
    <div
        style="
            display: flex;
            flex-wrap: wrap;
            align-items:start;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            padding: 16px;
            gap: 16px;"
        on:scroll={() => {
            onScroll();
        }}
    >
        <div class="col about-container" style="align-items: start; flex: 1 1 450px;">
            <slot></slot>
        </div>
        <div class="col" style="gap: 16px; flex: 10 1 550px;">
            {#each algSet.cases as case_, i}
                <div class="row case-card">
                    <div
                        id="scene{i}"
                        class="scene-div"
                    />
                    <div class="col algs-div">
                        <div class="row" style="width: 100%; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap;">
                            <p style="font-weight: bold;">
                                {case_.name}
                            </p>
                            {#if case_.variants && case_.variants.length > 0}
                            <select on:change={event => selectVariant(event, i)}>
                                {#each case_.variants ?? [] as variant, i1}
                                    <option value={i1}>{variant.name}</option>
                                {/each}
                            </select>
                            {/if}
                        </div>
                        {#each case_.algs ?? [] as alg1, i1}
                            <div class="row divider">
                                {#if state.casePlaying === i && state.algPlaying === i1}
                                    <button
                                        class="play-icon"
                                        on:click={() => play(i, i1)}
                                    >
                                        <PauseIcon />
                                    </button>
                                {:else}
                                    <button
                                        class="play-icon"
                                        on:click={() => play(i, i1)}
                                    >
                                        <PlayIcon />
                                    </button>
                                {/if}
                                <div style="width: 8px;" />
                                <p style="width: 100%;">{alg1}</p>
                            </div>
                        {/each}
                        {#each case_.variants ? case_.variants[state.selectedVariants[i] ?? 0].algs : [] as alg1, i1}
                            <div class="row divider">
                                {#if state.casePlaying === i && state.algPlaying === i1}
                                    <button
                                        class="play-icon"
                                        on:click={() => play(i, i1)}
                                    >
                                        <PauseIcon />
                                    </button>
                                {:else}
                                    <button
                                        class="play-icon"
                                        on:click={() => play(i, i1)}
                                    >
                                        <PlayIcon />
                                    </button>
                                {/if}
                                <div style="width: 8px;" />
                                <p style="width: 100%;">{alg1}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    :global(.about-container p, .about-container h2) {
        margin-top: 1em;
    }

    :global(.about-container a) {
        margin-top: 0.5em;
        display: block;
    }

    .case-card {
        width: 100%;
        justify-content: center;
        align-items: start;
        border: solid 1px var(--gray-500);
        box-shadow: 0 0 4px 2px var(--gray-600);
        border-radius: 16px;
        flex-wrap: wrap;
    }

    .scene-div {
        width: 150px;
        height: 150px;
        min-width: 150px;
        min-height: 150px;
    }

    .algs-div {
        flex: 1 1 400px;
        padding: 16px;
        align-items: start;
    }

    .divider {
        padding: 8px 0;
        width: 100%;
        border-top: solid 1px var(--gray-500);
    }

    .play-icon {
        background: inherit;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        border: solid 1px var(--gray-500);
        padding: 4px;
    }

    .play-icon:hover {
        background: var(--gray-500);
    }
</style>
