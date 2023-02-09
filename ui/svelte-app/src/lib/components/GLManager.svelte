<script lang="ts">
    import { onMount } from "svelte";
    import { type Scene, newScene, scenes, startLoop } from "../scripts/scene";

    export let onSceneInitialized: (scene: Scene) => void;

    let canvas;
    let div;

    onMount(() => {
        const scene = newScene(div, canvas);
        scenes.push(scene);

        scene.cube.solve();
        scene.dragEnabled = true;

        startLoop();

        onSceneInitialized(scene);
    });
</script>

<div class={$$props.class}>
    <canvas bind:this={canvas}></canvas>
    <div bind:this={div} class="glDiv"></div>
</div>