<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import XIcon from "./icons/XIcon.svelte";

    export let title: string;
    export let open = false;
    export let allowClose = true;
    export let close = () => {
        open = false;
    };

    function internalClose() {
        if (allowClose) close();
    }
</script>

{#if open}
    <div
        style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: rgba(0, 0, 0, 0.5);"
        on:click={internalClose}
        on:keypress={(event) => {}}
        transition:fade={{ duration: 250 }}
    >
        <div
            class="modal"
            in:fly={{ y: 50, duration: 250 }}
            out:fly={{ y: 50, duration: 250 }}
            on:click={(event) => event.stopPropagation()}
            on:keypress={(event) => {}}
        >
            <div class="modal-header">
                <p>{title}</p>
                {#if allowClose}
                    <button
                        class="btn-transparent"
                        style="width: 36px; padding: 4px;"
                        on:click={close}
                    >
                        <XIcon />
                    </button>
                {/if}
            </div>
            <slot />
        </div>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        background-color: var(--gray-700);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    @media (min-width: 700px) {
        .modal {
            max-width: 600px;
            max-height: 500px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 8px 4px var(--gray-600);
            border-radius: 16px;
        }
    }

    .modal-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--gray-500);
        width: 100%;
        height: 48px;
        padding: 12px;
    }


</style>
