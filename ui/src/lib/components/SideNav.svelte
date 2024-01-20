<script lang="ts">
    import { onMount } from "svelte";
    import XIcon from "./icons/XIcon.svelte";

    export let open: boolean;

    $: backgroundStyle = `
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: ${open ? "inherit" : "none"};`;

    $: style = `
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
        height: 100%;
        background-color: var(--gray-700);
        z-index: 20;
        transform: translateX(${open ? 0 : -100}%);
        transition: transform 0.3s ease-in-out;`;
</script>

<div
    style={backgroundStyle}
    on:click={() => open = false}
    on:keydown={event => {
        if (event.key === "Escape") {
            open = false;
        }
    }}
></div>
<div {style}>
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
        <a href="/algorithms">
            <button>
                <span>📚</span>Algorithms
            </button>
        </a>
        <a href="/recon.html">
            <button>
                <span>✍</span>Recon Tool
            </button>
        </a>
        <a href="/train">
            <button>
                <span>🧠</span>Train
            </button>
        </a>
    </div>
</div>

<style>
    a button {
        width: 100%;
        text-align: left;
        padding-left: 0;
    }

    a button span {
        width: 48px;
        display: inline-block;
        text-align: center;
    }
</style>