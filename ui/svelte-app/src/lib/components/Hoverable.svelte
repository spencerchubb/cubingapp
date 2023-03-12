<script lang="ts">
    export let background = "transparent";
    export let borderRadius = "inherit";
    export let hovBackground = "transparent";

    let vars = `
    --background: ${background};
    --border-radius: ${borderRadius};
    --hov-background: ${hovBackground};
    `;
</script>

<div
    class={"hoverable " + $$props.class}
    style={vars + $$props.style}
>
    <slot/>
</div>

<style>
    .hoverable {
        background: var(--background);
        border-radius: var(--border-radius);
        /* Remove extra space at the bottom of inline elements */
        font-size: 0;
    }

    .hoverable:hover {
        background: var(--hov-background);
    }
</style>
