<script lang="ts">
    import Icon from "./Icon.svelte";

    export let title: string;
    export let close: Function;
</script>

<div class="drawer">
    <div class="drawer-header">
        <p>{title}</p>
        <Icon
            name="x"
            class="x-icon"
            style="padding: 4px;"
            on:click={() => close()}
        />
    </div>
    <div
        style="
        overflow-y: auto;
        height: calc(100vh - 96px);"
    >
        <slot />
    </div>
</div>

<style>
    .drawer {
        width: 300px;
        min-width: 300px;
        height: 100%;
        background-color: var(--gray-700);
        color: white;
        box-shadow: 0 0 10px 0 var(--slate-500);
    }

    @media (max-width: 768px) {
        .drawer {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
        }
    }

    .drawer-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--gray-600);
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
