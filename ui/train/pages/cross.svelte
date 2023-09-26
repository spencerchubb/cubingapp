<script lang="ts">
    import BlockTrainerApp from "../blockTrainer/BlockTrainerApp.svelte";
</script>

<BlockTrainerApp
    name="Cross"
    minMoves={3}
    maxMoves={8}
    onlyOrientation={[]}
    disregard={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19]}
    gray={[
        0, 1, 2, 3, 5, 6, 7, 8, // U
        9, 10, 11, 12, 15, 16, 17, // F
        18, 20, 24, 26, // D
        27, 28, 29, 32, 33, 34, 35, // B
        36, 37, 38, 39, 42, 43, 44, // L
        45, 46, 47, 48, 51, 52, 53, // R
    ]}
/>