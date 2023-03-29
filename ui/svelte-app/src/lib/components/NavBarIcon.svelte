<script lang="ts">
    import Icon from "./Icon.svelte";

    export let name: string;
</script>

<Icon
    {name}
    class="icon"
    style="padding: 8px;"
    on:click
/>

<style>
    :global(.icon) {
    width: 48px;
    height: 48px;
    padding: 8px;
    touch-action: none;
  }

  :global(.icon:hover) {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
</style>