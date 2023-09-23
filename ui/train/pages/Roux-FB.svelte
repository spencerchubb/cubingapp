<script lang="ts">
    import BlockTrainerApp from "../blockTrainer/BlockTrainerApp.svelte";
</script>

<BlockTrainerApp
    name="Roux FB"
    minMoves={3}
    maxMoves={11}
    disregard={[0, 1, 2, 3, 5, 7, 8, 9, 10, 11, 13, 14, 16, 17]}
    gray={[
        0, 1, 2, 3, 5, 6, 7, 8, // U
        9, 12, 14, 15, 16, 17, // F
        21, 23, 24, 25, 26, // D
        29, 30, 32, 33, 34, 35, // B
        36, 39, 42, // L
        45, 46, 47, 48, 50, 51, 52, 53, // R
    ]}
/>