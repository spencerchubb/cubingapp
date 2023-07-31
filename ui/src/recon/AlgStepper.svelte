<script lang="ts">
    import GLManager from "../lib/components/GLManager.svelte";
    import { initApp, setCallback, stepper } from "./app";
    import ChevronLeft from "../lib/components/icons/ChevronLeft.svelte";
    import ChevronRight from "../lib/components/icons/ChevronRight.svelte";
    import PauseIcon from "../lib/components/icons/PauseIcon.svelte";
    import PlayIcon from "../lib/components/icons/PlayIcon.svelte";
    import { GRAY } from "../lib/scripts/rubiks-viz";
    import type { PuzzleTypes } from "../lib/scripts/common/scramble";

    export let setup: string = "";
    export let moves: string = "";
    export let puzzle: PuzzleTypes = "3x3";
    export let hide: number[] = [];

    let state = setCallback((newState) => {
        state = newState;
    });
</script>

<div class="col">
    <GLManager
        onSceneInitialized={(scene) => {
            initApp(scene, { setup, moves, puzzle, });

            hide.forEach(hideIndex => {
                const shape = scene.shapes[hideIndex];
                shape.color = shape.getColorBuffer(GRAY);
            });
        }}
    />
    <p style="
        margin: 0;
        transform: translateY(-12px);
        font-size: 1.2rem;
        width: 100%;
        max-width: 320px;
        word-wrap: break-word;
        text-align: center;"
    >
        {#each state.moves.split(" ") as move, moveIndex}
            {#if state.moveIndex === moveIndex}
                <span style="text-decoration: underline;">{move}</span>&nbsp;
            {:else}
                {move}&nbsp;
            {/if}
        {/each}
    </p>
    <div
        class="row"
        style="transform: translateY(-12px); gap: 12px; margin-top: 8px;"
    >
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
