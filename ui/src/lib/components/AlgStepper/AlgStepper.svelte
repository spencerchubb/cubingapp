<script lang="ts">
    import { newAlgStepper } from "./algStepper";
    import { newScene } from "../../scripts/rubiks-viz";
    import { onMount } from "svelte";

    import ChevronLeft from "../icons/ChevronLeft.svelte";
    import ChevronRight from "../icons/ChevronRight.svelte";
    import PauseIcon from "../icons/PauseIcon.svelte";
    import PlayIcon from "../icons/PlayIcon.svelte";

    export let setup: string = "";
    export let alg: string = "";

    let state;

    let div;
    let algStepper;

    onMount(() => {
        const scene = newScene(div);
        scene.dragEnabled = false;
        scene.enableKey = () => false;

        algStepper = newAlgStepper(scene, setup, alg);

        state = algStepper.setCallback(_state => {
            state = _state;
        });
    });
</script>

<div class="card">
    <div class="slot">
        <slot></slot>
    </div>
    <div>
        <div
            bind:this={div}
            style="width: 280px; height: 280px;"
        ></div>
        <p style="text-align: center;">{alg}</p>
        <div class="row" style="justify-content: center; margin: 12px 0;">
            <button on:click={algStepper.clickLeft}>
                <ChevronLeft />
            </button>
            <button on:click={algStepper.clickPlayOrPause} style="margin: 0 12px;">
                {#if state?.playing}
                    <PauseIcon />
                {:else}
                    <PlayIcon />
                {/if}
            </button>
            <button on:click={algStepper.clickRight}>
                <ChevronRight />
            </button>
        </div>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 600px;
        border-radius: 16px;
        box-shadow: 0 0 4px 2px var(--gray-600);
        margin: 1em 0;
    }

    .slot {
        flex: 0 0 320px;
        padding: 16px;
    }

    button {
        width: 40px;
        height: 40px;
        background: transparent;
        padding: 4px;
    }

    button:hover {
        background: var(--gray-600);
    }
</style>