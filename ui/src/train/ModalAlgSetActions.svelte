<script lang="ts">
    import { type State } from "./app";
    import * as AlgSetAPI from "../lib/scripts/api/algSet";
    
    export let state: State;
    export let callback: Function;
</script>

<div class="col" style="padding: 16px;">
    <h2>Actions for {state.algSetEditing.name}</h2>
    <button
        class="row btn-transparent"
        style="width: 100%;"
        on:click={() => {
            callback({modalType: "Rename alg set" });
        }}
    >
        <span style="width: 40px; margin-right: 8px; font-size: 1.4rem;">✏</span> Rename
    </button>
    <button
        class="row btn-transparent"
        style="width: 100%;"
        on:click={() => {
            AlgSetAPI.read(state.algSetEditing.id).then(algSet => {
                callback({
                    modalType: "Hide algs",
                    algSetEditing: algSet,
                })
            });
        }}
    >
        <span style="width: 40px; margin-right: 8px; font-size: 1.4rem;">👁</span> Hide algs
    </button>
    <button
        class="row btn-transparent"
        style="width: 100%;"
        on:click={() => {
            const id = state.algSetEditing.id;
            AlgSetAPI.deleteSet(id).then(() => {
                callback({
                    modalType: undefined,
                    algSets: state.algSets.filter(algSet => algSet.id !== id), // Remove deleted set from algSets
                });
            });
        }}
    >
        <span style="width: 40px; margin-right: 8px; font-size: 1.4rem;">🗑</span> Delete
    </button>
</div>