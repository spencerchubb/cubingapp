<script lang="ts">
    import { onMount } from "svelte";
    import { type Scene, newScene, scenes, startLoop } from "../scripts/scene";

    export let onSceneInitialized: (scene: Scene) => void;

    let canvas;
    let div;
    let scene: Scene;

    onMount(() => {
        scene = newScene(div, canvas);
        scenes.push(scene);

        scene.cube.solve();
        scene.dragEnabled = true;

        startLoop();

        onSceneInitialized(scene);
    });
</script>

<svelte:window on:keydown={(event) => {
    if (!scene) return;

    scene.cube.matchKeyToTurn(event);
}}/>

<div class={$$props.class}>
    <canvas bind:this={canvas}></canvas>
    <div bind:this={div} class="glDiv"></div>
</div>