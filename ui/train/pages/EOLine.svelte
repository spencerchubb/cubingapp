<script lang="ts">
    import BlockTrainerApp from "../blockTrainer/BlockTrainerApp.svelte";
</script>

<BlockTrainerApp
    name="EOLine"
    minMoves={3}
    maxMoves={8}
    onlyOrientation={[8, 9, 10, 11, 12, 13, 15, 16, 18, 19]}
    disregard={[0, 1, 2, 3, 4, 5, 6, 7]}
    gray={[
        0, 2, 6, 8, // U
        9, 11, 15, 17, // F
        18, 20, 24, 26, // D
        27, 29, 33, 35, // B
        36, 38, 42, 44, // L
        45, 47, 51, 53, // R
    ]}
/>