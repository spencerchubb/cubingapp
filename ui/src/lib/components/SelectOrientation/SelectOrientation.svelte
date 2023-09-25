<script lang="ts">
    import { getInitialOrientation, getOrientationOptions } from "./orientationOptions";

    export let puzzle: string;
    export let onChange: (alg: string) => void;

    $: storageKey = `${puzzle}-orientation`;
    $: orientationOptions = getOrientationOptions(puzzle);

    // Get from localStorage or default to first option.
    $: orientationValue = getInitialOrientation(puzzle);

    function _onChange(event: Event) {
        const alg = (event.target as HTMLSelectElement).value;
        localStorage.setItem(storageKey, alg);
        onChange(alg);
    }
</script>

{#if orientationOptions.length > 0}
    <select
        placeholder="Color"
        {...$$props}
        value={orientationValue}
        on:change={_onChange}
        name="Select orientation"
    >
        {#each orientationOptions as option}
            <option value={option.value}>{option.label}</option>
        {/each}
    </select>
{/if}