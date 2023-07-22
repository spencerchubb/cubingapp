<script lang="ts">
    import { onMount } from "svelte";

    let textarea;

    function resize() {
        textarea.style.height = ""; /* Reset the height*/
        const padding = textarea.offsetHeight - textarea.clientHeight;
        const height = padding + textarea.scrollHeight;
        textarea.style.height = height + "px";
    }

    onMount(() => {
        resize();
        textarea.oninput = resize;
    })
</script>

<textarea
    bind:this={textarea}
    {...$$props}
/>