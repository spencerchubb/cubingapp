<script lang="ts">
    import { SQ1 } from "../../src/lib/scripts/rubiks-viz/sq1";
    export let alg: string;
    export let size: number;

    const sq1 = new SQ1();
    sq1.performAlgInverse(alg);
</script>

{@html sq1.svgTop(size)}
{@html sq1.svgBottom(size)}