<script lang="ts">
    import { type State } from "./app";
    import * as AlgSetAPI from "../lib/scripts/api/algSet";
    
    export let state: State;
    export let callback: Function;
</script>

<div class="col" style="padding: 16px;">
    <button
        class="row btn-transparent"
        style="width: 100%;"
        on:click={() => {
            const id = state.algSetDeleting.id;
            AlgSetAPI.restoreSet(id).then(() => {
                callback({
                    modalType: undefined,
                    algSets: [...state.algSets, state.algSetDeleting], // Add deleted set to algSets
                    deletedAlgSets: state.deletedAlgSets.filter(algSet => algSet.id !== id), // Remove delete set from deletedAlgSets
                });
            });
        }}
    >
        <span style="width: 40px; margin-right: 8px; font-size: 1.4rem;">🔃</span> Restore
    </button>
    <button
        class="row btn-transparent"
        style="width: 100%;"
        on:click={() => {
            const id = state.algSetDeleting.id;
            AlgSetAPI.deleteSetPermanently(id).then(() => {
                callback({
                    modalType: undefined,
                    deletedAlgSets: state.deletedAlgSets.filter(algSet => algSet.id !== id), // Remove delete set from deletedAlgSets
                })
            });
        }}
    >
        <span style="width: 40px; margin-right: 8px; font-size: 1.4rem;">🗑</span> Delete forever
    </button>
</div>