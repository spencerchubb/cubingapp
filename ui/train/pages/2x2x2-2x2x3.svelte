<script lang="ts">
    import BlockTrainerApp from "../blockTrainer/BlockTrainerApp.svelte";
</script>

<BlockTrainerApp
    name="2x2x2 ➡ 2x2x3"
    minMoves={3}
    maxMoves={10}
    onlyOrientation={[]}
    disregard={[0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14]}
    gray={[
        0, 1, 2, 3, 5, 6, 7, 8, // U
        9, 10, 11, 12, 14, 15, 16, 17, // F
        18, 21, 24, // D
        29, 32, 35, // B
        36, 39, 42, 43, 44, // L
        45, 46, 47, 48, 51, // R
    ]}
    ep={0xfaff76ffffff}
    eo={0xf0ff00ffffff}
    cp={0xf6ffffff}
    co={0xf0ffffff}
/>