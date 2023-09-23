<script lang="ts">
    import { onMount } from "svelte";
    import { localGet, localSet } from "./local";
    export let onChange: (rotation: string) => void;

    const faces = {
        "U": {"F": "", "R": "y", "B": "y2", "L": "y'"},
        "D": {"F": "z2", "R": "z2 y'", "B": "z2 y2", "L": "z2 y"},
        "F": {"U": "x y2", "R": "x y", "D": "x", "L": "x y'"},
        "B": {"U": "x'", "L": "x' y'", "D": "x' y2", "R": "x' y"},
        "R": {"U": "z' y'", "F": "z'", "D": "z' y", "B": "z' y2"},
        "L": {"U": "z y", "B": "z y2", "D": "z y'", "F": "z"},
    };

    let topFace = localGet("topFace") ?? "D";
    let frontFace = localGet("frontFace") ?? Object.keys(faces[topFace])[0];
    
    function onChangeTop(event: Event) {
        topFace = (event.target as HTMLInputElement).value;
        localSet("topFace", topFace);
        frontFace = Object.keys(faces[topFace])[0];
        localSet("frontFace", frontFace);
        onChange(faces[topFace][frontFace]);
    }

    function onChangeFront(event: Event) {
        frontFace = (event.target as HTMLInputElement).value;
        localSet("frontFace", frontFace);
        onChange(faces[topFace][frontFace]);
    }

    onMount(() => {
        onChange(faces[topFace][frontFace]);
    });
</script>

<p>Top face</p>
<select
    on:change={onChangeTop}
    value={topFace}
>
    {#each Object.keys(faces) as face}
        <option value={face}>{face}</option>
    {/each}
</select>
<p>Front face</p>
<select
    on:change={onChangeFront}
    value={frontFace}
>
    {#each Object.keys(faces[topFace]) as face}
        <option value={face}>{face}</option>
    {/each}
</select>