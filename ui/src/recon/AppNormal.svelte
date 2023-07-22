<script lang="ts">
    import GLManager from "../lib/components/GLManager.svelte";
    import SideNav from "../lib/components/SideNav.svelte";
    import {
        copyUrl,
        initApp,
        setCallback,
        stepper,
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
    import PauseIcon from "../lib/components/icons/PauseIcon.svelte";
    import PlayIcon from "../lib/components/icons/PlayIcon.svelte";
    import Modal from "../lib/components/Modal.svelte";

    let state = setCallback((newState) => {
        state = newState;
    });

    let modalOpen = false;
    let sideNavOpen = false;

    let iframeText = 
`<iframe
    width="320"
    height="420"
    style="border: none;"
    src="${window.location.href}"
></iframe>`;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <button
            on:click={() => modalOpen = true}
            style="margin-right: 12px;"
        >
            Share
        </button>
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
                box-shadow: 0 0 4px 2px var(--gray-600);"
        >
            <SelectPuzzle
                style="transform: translateY(12px);"
                scene={state.scene}
                bind:value={state.puzzle}
                on:change={updateCubeState}
            />
            <GLManager
                onSceneInitialized={(scene) => {
                    initApp(scene);
                }}
            />
            <p style="transform: translateY(-12px);">
                {state.moveIndex} / {state.maxMoves}
            </p>
            <div class="row" style="transform: translateY(-12px); gap: 12px; margin-top: 8px;">
                <button
                    class="btn-transparent"
                    style="width: 40px; height: 40px; padding: 4px;"
                    on:click={() => stepper.prev()}
                >
                    <ChevronLeft />
                </button>
                <button
                    class="btn-transparent"
                    style="width: 40px; height: 40px; padding: 4px;"
                    on:click={() => stepper.playPause()}
                >
                    {#if state.playing}
                        <PauseIcon />
                    {:else}
                        <PlayIcon />
                    {/if}
                </button>
                <button
                    class="btn-transparent"
                    style="width: 40px; height: 40px; padding: 4px;"
                    on:click={() => stepper.next()}
                >
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
    <Modal bind:open={modalOpen} title="Share">
        <div class="col" style="padding: 16px;">
            <CopyButton
                originalText="Copy link"
                clickedText="Link copied ✅"
                onClick={copyUrl}
            />
            <div class="row" style="margin-top: 32px; gap: 16px;">
                <h2>Embed iframe</h2>
                <CopyButton
                    originalText="Copy iframe"
                    clickedText="Iframe copied ✅"
                    onClick={() => {
                        navigator.clipboard.writeText(iframeText);
                    }}
                />
            </div>
            <p
                style="
                    margin-top: 8px;
                    border: solid 1px var(--gray-500);
                    word-break: break-word;
                    white-space: pre-wrap;
                    font-family: monospace;
                    padding: 12px;"
            >
                {iframeText}
            </p>
        </div>
    </Modal>
    <SideNav bind:open={sideNavOpen} />
</main>
