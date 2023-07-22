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
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import CopyButton from "./CopyButton.svelte";
    import TextareaAutosize from "../lib/components/TextareaAutosize.svelte";
    import SelectPuzzle from "../lib/components/SelectPuzzle.svelte";
    import { getScramble } from "../lib/scripts/common/scramble";

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
        <CopyButton
            originalText="Share"
            clickedText="Link copied ✅"
            onClick={copyUrl}
            style="margin-right: 12px;"
        />
    </nav>
    <div
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
            style="
                border-radius: 8px;
                box-shadow: 0 0 4px 2px var(--gray-600);
                padding: 12px 0;"
        >
            <SelectPuzzle
                scene={state.scene}
                bind:value={state.puzzle}
                on:change={updateCubeState}
            />
            <GLManager
                onSceneInitialized={(scene) => {
                    initApp(scene);
                }}
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
        <div style="flex: 1 1 600px; align-items: start;">
            <div class="row" style="justify-content: space-between;">
                <h2>Setup</h2>
                <button
                    on:click={() => {
                        state.setup = getScramble(state.puzzle);
                        updateCubeState(undefined);
                    }}
                >
                    Scramble
                </button>
            </div>
            <TextareaAutosize
                style="width: 100%; margin-top: 8px;"
                placeholder="Enter scramble"
                bind:value={state.setup}
                on:input={updateCubeState}
                on:click={updateCubeState}
                on:keyup={updateCubeState}
            />
            <h2 style="margin-top: 16px;">Moves</h2>
            <TextareaAutosize
                style="width: 100%; margin-top: 8px;"
                placeholder="Enter moves"
                bind:value={state.moves}
                on:input={updateCubeState}
                on:click={updateCubeState}
                on:keyup={updateCubeState}
            />
        </div>
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
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
