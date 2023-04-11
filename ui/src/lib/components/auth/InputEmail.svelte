<script lang="ts">
    export let value: string;
</script>

<input
    class={$$props.class}
    bind:value={value}
    type="email"
    placeholder="Email"
/>
