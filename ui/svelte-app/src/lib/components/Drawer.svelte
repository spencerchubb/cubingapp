<script lang="ts">
    import Hoverable from "./Hoverable.svelte";
    import Icon from "./Icon.svelte";

    export let title: string;
    export let close: Function;
</script>

<div class="drawer">
    <div class="drawer-header">
        <p>{title}</p>
        <Hoverable hovBackground="#444" borderRadius="4px">
            <Icon
                name="x"
                style="padding: 4px;"
                on:click={() => close()}
            />
        </Hoverable>
    </div>
    <div class="drawer-body">
        <slot />
    </div>
</div>

<style>
    .drawer {
        width: 300px;
        min-width: 300px;
        height: 100%;
        background-color: #2f2f32;
        color: white;
        box-shadow: 0 0 10px 0 var(--slate-500);
    }

    @media (max-width: 768px) {
        .drawer {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .drawer-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #464649;
        padding: 12px;
    }

    :global(.close-icon) {
        stroke: white;
        color: white;
        /* fixes extra vertical space */
        font-size: 0;
    }
    :global(.close-icon:hover) {
        cursor: pointer;
        border-radius: 4px;
        background-color: #444;
    }
</style>
