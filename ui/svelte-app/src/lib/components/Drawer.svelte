<script lang="ts">
    import Hoverable from "./Hoverable.svelte";
    import Icon from "./Icon.svelte";

    export let title: string;
    export let close: Function;
</script>

<div class="drawer">
    <div class="drawer-header">
        <p>{title}</p>
        <Hoverable hovBackground="var(--gray-500)" borderRadius="4px">
            <Icon
                name="x"
                style="padding: 4px;"
                on:click={() => close()}
            />
        </Hoverable>
    </div>
    <slot />
</div>

<style>
    .drawer {
        width: 300px;
        min-width: 300px;
        height: 100%;
        background-color: var(--gray-700);
        color: white;
        box-shadow: 0 0 10px 0 var(--slate-500);
        overflow-y: auto;
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
</style>
