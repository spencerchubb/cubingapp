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
    import MenuIcon from "../../src/lib/components/icons/MenuIcon.svelte";
    import GithubIcon from "../../src/lib/components/icons/GithubIcon.svelte";

    let state = setCallback((newState) => {
        state = newState;
    });

    let sideNavOpen = false;

    onMount(() => {
        fetchAlgs();
    });

    afterUpdate(() => {
        renderCubes();
    });
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <a href="https://github.com/spencerchubb/algdb/">
            <NavBarIcon>
                <GithubIcon />
            </NavBarIcon>
        </a>
    </nav>
    <div
        class="main-container"
        style="display: flex; align-items:start; width: 100%; height: 100%; overflow-y: auto; padding: 16px; gap: 16px;"
        on:scroll={() => {
            onScroll();
        }}
    >
        <div class="col about-container" style="align-items: start;">
            <h1>{state.algSet.name}</h1>
            {#each state.algSet.description as desc, i}
                <p style="margin-top: 16px;">{desc}</p>
            {/each}
            <div style="height: 16px;" />
            {#if state.algSet.recommended.length > 0}
                <h2>Cubers also use</h2>
                {#each state.algSet.recommended as setName}
                    <a
                        href="/algdb/{setName.replaceAll(' ', '-')}.html"
                        class="link"
                        style="margin-top: 8px;"
                    >
                        {setName}
                    </a>
                {/each}
            {/if}
            <div style="height: 16px;" />
        </div>
        <div class="col" style="width: 100%; gap: 16px;">
            {#each state.algSet.cases as case_, i}
                <div
                    class="row"
                    style="border: solid 1px var(--gray-500); box-shadow: 0 0 4px 2px var(--gray-600); border-radius: 16px; width: 100%;"
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
                            {case_.name}
                        </p>
                        {#each case_.algs as alg1, i1}
                            <div class="row divider-except-last">
                                <Icon
                                    name={state.casePlaying === i &&
                                    state.algPlaying === i1
                                        ? "pause"
                                        : "play"}
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
    .main-container {
        flex-direction: column;
    }

    .about-container {
        width: 100%;
    }

    @media (min-width: 900px) {
        .main-container {
            flex-direction: row;
        }

        .about-container {
            min-width: 400px;
            width: 400px;
        }
    }

    .link {
        color: var(--lightBlue-500);
    }

    .link:hover {
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
