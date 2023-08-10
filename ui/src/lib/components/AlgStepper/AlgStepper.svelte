<script lang="ts">
    import { newAlgStepper } from "./algStepper";
    import { GRAY, newCube } from "../../scripts/rubiks-viz";
    import { onMount } from "svelte";

    import ChevronLeft from "../icons/ChevronLeft.svelte";
    import ChevronRight from "../icons/ChevronRight.svelte";
    import PauseIcon from "../icons/PauseIcon.svelte";
    import PlayIcon from "../icons/PlayIcon.svelte";

    export let setup = "";
    export let moves = "";
    export let hide = [];

    let state;

    let div;
    let algStepper;

    onMount(() => {
        const scene = newCube(div);
        scene.dragEnabled = false;
        scene.enableKey = () => false;

        hide.forEach(hideIndex => {
            const shape = scene.shapes[hideIndex];
            shape.color = shape.getColorBuffer(GRAY);
        });

        algStepper = newAlgStepper(scene, setup, moves);

        state = algStepper.setCallback(_state => {
            state = _state;
        });
    });
</script>

<div class="col">
    <div
        bind:this={div}
        style="width: 280px; height: 280px;"
    ></div>
    <p style="
        margin: 0;
        text-align: center;
        font-size: 1.2em;
        margin: 0px;
        word-wrap: break-word;
        width: 320px;">
        {#each moves.split(" ") as move, moveIndex}
            {#if state?.moveIndex === moveIndex}
                <span style="text-decoration: underline;">{move}</span>&nbsp;
            {:else}
                {move}&nbsp;
            {/if}
        {/each}
    </p>
    <div class="row" style="justify-content: center; margin: 12px 0;">
        <button
            on:click={algStepper.clickLeft}
            class="btn-transparent"
        >
            <ChevronLeft />
        </button>
        <button
            on:click={algStepper.clickPlayOrPause}
            class="btn-transparent"
            style="margin: 0 12px;"
        >
            {#if state?.playing}
                <PauseIcon />
            {:else}
                <PlayIcon />
            {/if}
        </button>
        <button
            on:click={algStepper.clickRight}
            class="btn-transparent"
        >
            <ChevronRight />
        </button>
    </div>
</div>

<style>
    button {
        width: 40px;
        height: 40px;
        padding: 4px;
    }
</style>