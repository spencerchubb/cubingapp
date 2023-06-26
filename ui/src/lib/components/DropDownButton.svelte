<script lang="ts">
    import ChevronDown from "./icons/ChevronDown.svelte";

    export let buttonText = "";
</script>

<button
    class="row"
    style="gap: 8px;"
    on:click
>
    {buttonText}
    <div style="width: 18px; height: 18px;">
        <ChevronDown />
    </div>
</button>
