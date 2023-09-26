<script lang="ts">
    import BlockTrainerApp from "../blockTrainer/BlockTrainerApp.svelte";
</script>

<BlockTrainerApp
    name="2x2x2"
    minMoves={3}
    maxMoves={9}
    onlyOrientation={[]}
    disregard={[0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 16, 19]}
    gray={[
        0, 1, 2, 3, 5, 6, 7, 8, // U
        9, 10, 11, 12, 14, 15, 16, 17, // F
        18, 21, 24, 25, 26, // D
        29, 32, 33, 34, 35, // B
        36, 39, 42, 43, 44, // L
        45, 46, 47, 48, 50, 51, 52, 53, // R
    ]}
/>