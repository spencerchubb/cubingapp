<script lang="ts">
    import GLManager from "../lib/components/GLManager.svelte";
    import { initApp, setCallback, stepper } from "./app";
    import ChevronLeft from "../lib/components/icons/ChevronLeft.svelte";
    import ChevronRight from "../lib/components/icons/ChevronRight.svelte";
    import PauseIcon from "../lib/components/icons/PauseIcon.svelte";
    import PlayIcon from "../lib/components/icons/PlayIcon.svelte";

    let url = new URL(document.URL);

    // If link is true or not specified, show the link
    let link: boolean = (url.searchParams.get("link") || "true") === "true";

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
        }}
    />
    <p style="transform: translateY(-12px);">
        {state.moveIndex} / {state.maxMoves}
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
