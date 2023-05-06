<script lang="ts">
    import GLManager from "../lib/components/GLManager.svelte";
    import SideNav from "../lib/components/SideNav.svelte";
    import {
        copyUrl,
        initApp,
        next,
        onClickSuggestion,
        prev,
        setCallback,
        updateCubeState,
    } from "./app";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import ChevronLeft from "../lib/components/icons/ChevronLeft.svelte";
    import ChevronRight from "../lib/components/icons/ChevronRight.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";

    let state = setCallback((newState) => {
        state = newState;
    });

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
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
                <p style="margin: 0 8px;">
                    {state.moveIndex} / {state.maxMoves}
                </p>
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
            <p style="margin-top: 16px; font-style: italic;">Suggestions in beta! Try them out</p>
            {#if state.suggestionData.solved.length > 0}
                <div style="height: 16px;"></div>
                {#each state.suggestionData.solved as solved}
                    <p>&#x2713; {solved} solved</p>
                {/each}
            {/if}
            {#each state.suggestionData.unsolved as unsolved}
                <p style="margin-top: 16px;">{unsolved.name} suggestions</p>
                {#each unsolved.suggestions as suggestion}
                    <button
                        class="suggestion"
                        on:click={() => onClickSuggestion(suggestion, unsolved.name)}
                        >{suggestion}</button
                    >
                {/each}
            {/each}
        </div>
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    @media (min-width: 768px) {
        .main-container {
            flex-direction: row;
        }
    }

    .moves-input {
        width: 100%;
        height: 200px;
        font-size: 1rem;
        padding: 6px;
        background: var(--gray-800);
        color: var(--gray-100);
        box-shadow: 0 0 4px 2px var(--gray-600);
    }

    .moves-input:focus {
        outline: solid 1px var(--gray-400);
        box-shadow: 0 0 6px 3px var(--gray-600);
    }

    .moves-input::-moz-placeholder {
        color: var(--gray-400);
    }
    .moves-input:-moz-placeholder {
        color: var(--gray-400);
    }
    .moves-input::-webkit-input-placeholder {
        color: var(--gray-400);
    }
    .moves-input:-ms-input-placeholder {
        color: var(--gray-400);
    }

    .suggestion {
        background: transparent;
        border: solid 1px var(--gray-500);
    }

    .suggestion:hover {
        background: var(--gray-500);
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
