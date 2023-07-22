<script lang="ts">
    export let value: string = "";

    let textarea: HTMLTextAreaElement;
    
    function resize(textarea, value) {
        if (!textarea) return;

        textarea.value = value;
        textarea.style.height = ""; // Reset the height
        const padding = textarea.offsetHeight - textarea.clientHeight;
        const height = padding + textarea.scrollHeight;
        textarea.style.height = height + "px";
        return height;
    }

    $: height = resize(textarea, value);
</script>

<textarea
    bind:this={textarea}
    {...$$props}
    style="height: {height}px; {$$props.style}"
    on:input={() => {
        value = textarea.value;
        resize(textarea, value);
    }}
    on:click
    on:keyup
/>