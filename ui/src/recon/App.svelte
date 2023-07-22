<script lang="ts">
    import AppIFrame from "./AppIFrame.svelte";
    import AppNormal from "./AppNormal.svelte";

    let isIFrame = window.self !== window.top;
</script>

{#if isIFrame}
    <AppIFrame />
{:else}
    <AppNormal />
{/if}