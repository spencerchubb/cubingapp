<script lang="ts">
    import { onMount } from "svelte";
    import { type Scene, newScene } from "../scripts/rubiks-viz";

    export let onSceneInitialized: (scene: Scene) => void;

    let div;
    let scene: Scene;

    onMount(() => {
        scene = newScene(div);
        scene.enableKey = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement;
            return (
                target.tagName !== "INPUT" &&
                target.tagName !== "TEXTAREA" &&
                target.tagName !== "SELECT"
            );
        };

        onSceneInitialized(scene);
    });
</script>

<div
    bind:this={div}
    style="width: 320px; height: 320px;"
/>
