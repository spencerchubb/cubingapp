<script lang="ts">
    import { onMount } from "svelte";
    import XIcon from "./icons/XIcon.svelte";

    export let open: boolean;

    let timeOpened: number;
    $: if (open) {
        timeOpened = Date.now();
    }

    $: style = `position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: var(--gray-700); z-index: 10; ${open
        ? "transform: translateX(0); transition: transform 0.3s ease-in-out"
        : "transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`;

    const id = "side-nav";

    onMount(() => {
        document.addEventListener("click", (event) => {
            // Prevent the menu from closing if it was just opened
            let elapsed = Date.now() - timeOpened;
            if (elapsed < 100) {
                return;
            }

            const insideNav = (event.target as HTMLElement).closest(`#${id}`);
            if (open && !insideNav) {
                open = false;
            }
        });
    })
</script>

<div {id} {style}>
    <div class="row" style="justify-content: space-between; padding: 8px;">
        <h5 style="color: white; font-size: 1.2rem;">Menu</h5>
        <button
            class="btn-transparent"
            style="width: 36px; padding: 4px;"
            on:click={() => open = false}
        >
            <XIcon />
        </button>
    </div>
    <div style="display: flex; flex-direction: column; padding: 0 8px; gap: 8px;">
        <a href="/algdb.html">
            <button style="width: 100%;">
                📚 Alg DB
            </button>
        </a>
        <a href="/recon.html">
            <button style="width: 100%;">
                ✍ Recon Tool
            </button>
        </a>
        <a href="/timer.html">
            <button style="width: 100%;">
                ⏲ Timer
            </button>
        </a>
        <a href="/train.html">
            <button style="width: 100%;">
                🧠 Train
            </button>
        </a>
    </div>
</div>

<style>
    :global(.x-icon) {
        background: inherit;
        border-radius: 4px;
        width: 32px;
        height: 32px;
    }

    :global(.x-icon:hover) {
        background: var(--gray-500);
    }
</style>