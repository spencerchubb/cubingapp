<script lang="ts">
    import { setPuzzle, type Scene } from "../scripts/rubiks-viz";

    export let value: string = "";
    export let scene: Scene;

    const puzzles = [
        "2x2",
        "3x3",
        "4x4",
        "5x5",
        "6x6",
        "7x7",
        "Pyraminx",
    ];

    function onChange(event) {
        const puzzle = (event.target as HTMLSelectElement).value;
        setPuzzle(scene, puzzle);
    }
</script>

<select
    bind:value
    on:change={onChange}
>
    {#each puzzles as puzzle}
        <option value={puzzle}>{puzzle}</option>
    {/each}
</select>