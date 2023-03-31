<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import Icon from "./Icon.svelte";

    export let title: string;
    export let open = false;

</script>

{#if open}
    <div
        style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: rgba(0, 0, 0, 0.5);"
        on:click={() => (open = false)}
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
                <Icon
                    name="x"
                    class="x-icon"
                    style="padding: 4px;"
                    on:click={() => (open = false)}
                />
            </div>
            <slot />
        </div>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--gray-700);
        box-shadow: 0 0 32px 16px var(--gray-900);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .modal-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--gray-600);
        width: 100%;
        height: 48px;
        padding: 0 12px;
    }

    :global(.x-icon) {
        width: 32px;
        height: 32px;
    }

    :global(.x-icon):hover {
        background-color: var(--gray-500);
        border-radius: 4px;
    }
</style>
