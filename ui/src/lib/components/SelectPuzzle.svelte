<script lang="ts">
    import { setPuzzle, type Scene } from "../scripts/rubiks-viz";

    export let value: string = "";
    export let scene: Scene;
    export let onChange: (event: Event) => void = (_) => {};

    const puzzles = [
        "2x2",
        "3x3",
        "4x4",
        "5x5",
        "6x6",
        "7x7",
        "Pyraminx",
    ];

    function _onChange(event) {
        const puzzle = (event.target as HTMLSelectElement).value;
        setPuzzle(scene, puzzle);
    }
</script>

<select
    bind:value
    on:change={event => {
        _onChange(event);
        onChange(event);
    }}
    {...$$props}
>
    {#each puzzles as puzzle}
        <option value={puzzle}>{puzzle}</option>
    {/each}
</select>