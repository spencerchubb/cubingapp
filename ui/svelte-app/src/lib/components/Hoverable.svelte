<script lang="ts">
    export let backgroundColor = "transparent";
    export let borderRadius = "0";
</script>

<div
    class="hoverable"
    style="--hov-background-color: {backgroundColor}; --hov-border-radius: {borderRadius};"
>
    <slot />
</div>

<style>
    .hoverable:hover {
        background-color: var(--hov-background-color);
        border-radius: var(--hov-border-radius);
    }
</style>
