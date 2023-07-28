<script lang="ts">
    import GLManager from "../lib/components/GLManager.svelte";
    import { initApp, setCallback, stepper } from "./app";
    import ChevronLeft from "../lib/components/icons/ChevronLeft.svelte";
    import ChevronRight from "../lib/components/icons/ChevronRight.svelte";
    import PauseIcon from "../lib/components/icons/PauseIcon.svelte";
    import PlayIcon from "../lib/components/icons/PlayIcon.svelte";
    import { GRAY } from "../lib/scripts/rubiks-viz";

    let url = new URL(document.URL);

    // If link is true or not specified, show the link
    let link: boolean = (url.searchParams.get("link") || "true") === "true";

    // Hyphen separated list of stickers to hide
    let hide: number[] = (() => {
        const hideString = url.searchParams.get("hide");
        if (!hideString) return [];
        return hideString.split("-").map(s => parseInt(s));
    })();

    let state = setCallback((newState) => {
        state = newState;
    });
</script>

<div class="col">
    {#if link}
        <a
            href={window.location.href}
            target="_blank"
            class="link"
            style="transform: translateY(12px);"
        >
            Open in new tab
        </a>
    {/if}
    <GLManager
        onSceneInitialized={(scene) => {
            initApp(scene);

            hide.forEach(hideIndex => {
                const shape = scene.shapes[hideIndex];
                shape.color = shape.getColorBuffer(GRAY);
            })
        }}
    />
    <p style="transform: translateY(-12px); font-size: 1.2rem;">
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
