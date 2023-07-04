<script lang="ts">
    export let title: string = "";
    export let text: string = "";
</script>

<div class={$$props.class}>
    <h2>{title}</h2>
    <p>{text}</p>
</div>

<style>
    div {
        padding: 16px;
        border-radius: 16px;
    }

    div:hover {
        box-shadow: inset 0 0 16px -4px var(--gray-300);
    }
</style>