<script lang="ts">
    import SideNav from "../../src/lib/components/SideNav.svelte";
    import {
        fetchAlgs,
        onScroll,
        play,
        renderCubes,
        setCallback,
    } from "./algSetPage";
    import NavBarIcon from "../../src/lib/components/NavBarIcon.svelte";
    import { afterUpdate, onMount } from "svelte";
    import Icon from "../../src/lib/components/Icon.svelte";

    let href = window.location.href;
    let index = href.lastIndexOf("/");
    // -5 to remove ".html"
    let algSetName = href
        .substring(index + 1, href.length - 5)
        .replaceAll("-", " ");

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
        class="row"
        style="align-items:start; width: 100%; height: 100%; overflow-y: auto;"
        on:scroll={() => {
            onScroll();
        }}
    >
        <div class="about-container">
            {#each state.algSet.description as desc, i}
                <p style={i === 0 ? "" : "margin-top: 16px;"}>{desc}</p>
            {/each}
            <div style="height: 16px;"></div>
            {#if state.algSet.recommended.length > 0}
                <h2>Cubers also use</h2>
                {#each state.algSet.recommended as setName}
                    <a href="/algdb/{setName.replaceAll(" ", "-")}.html" style="margin-top: 8px;">
                        <p>{setName}</p>
                    </a>
                {/each}
            {/if}
        </div>
        <div
            class="col"
            style="width: 100%; gap: 16px; padding: 16px;"
        >
            <h1>{state.algSet.name}</h1>
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
                        {#each alg.algs as alg1, i1}
                            <div class="row divider-except-last">
                                <Icon
                                    name={state.casePlaying === i && state.algPlaying === i1 ? "pause" : "play"}
                                    class="play-icon"
                                    style="width: 24px; height: 24px; border-radius: 4px; border: solid 1px var(--gray-500); padding: 4px;"
                                    on:click={() => play(i, i1)}
                                />
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
    .about-container {
        display: none;
    }

    @media (min-width: 1000px) {
        .about-container {
            display: flex;
            flex-direction: column;
            padding: 16px;
            min-width: 400px;
            max-width: 400px;
        }
    }

    a > p {
        color: var(--lightBlue-500);
    }

    a > p:hover {
        text-decoration: underline;
    }

    .divider-except-last {
        padding: 8px 0;
        width: 100%;
    }

    .divider-except-last:not(:last-child) {
        border-bottom: solid 1px var(--gray-500);
    }

    :global(.play-icon) {
        background: inherit;
    }

    :global(.play-icon:hover) {
        background: var(--gray-500);
    }
</style>
