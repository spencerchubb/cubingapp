<script lang="ts">
    import Icon from "./Icon.svelte";

    export let title: string;
    export let close: Function;
  </script>

<div class="drawer">
    <div class="drawer-header">
        <p>{title}</p>
        <Icon name="x" alt="Close" on:click={() => close()} />
    </div>
    <div class="drawer-body">
        <slot></slot>
    </div>
</div>

<style>
.drawer {
    width: 300px;
    min-width: 300px;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 10px 0 var(--slate-500);
}

.drawer-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid darkgray;
    padding: 12px;
}
</style>
