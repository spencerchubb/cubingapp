<script lang="ts">
    import { onMount } from "svelte";
    import { type Scene, newScene } from "../scripts/rubiks-viz";

    export let onSceneInitialized: (scene: Scene) => void;

    let div;
    let scene: Scene;

    onMount(() => {
        scene = newScene(div);

        onSceneInitialized(scene);
    });
</script>

<div class={$$props.class}>
    <div bind:this={div} class="gl-div"></div>
</div>

<style>
    .gl-div {
        width: 320px;
        height: 320px;
        border-radius: 8px;
        box-shadow: 0 0 4px 2px var(--gray-600);
    }
</style>