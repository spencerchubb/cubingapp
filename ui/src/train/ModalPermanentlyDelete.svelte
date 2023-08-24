<script lang="ts">
    import { type State } from "./app";
    import * as AlgSetAPI from "../lib/scripts/api/algSet";
    
    export let state: State;
    export let callback: Function;
</script>

<div class="col" style="padding: 16px; gap: 16px;">
    <p>"{state.algSetDeleting.name}" will be deleted forever and you won't be able to restore it.</p>
    <div class="row" style="gap: 16px;">
        <button
            class="btn-gray"
            on:click={() => callback({ modalType: "Deleted set actions" })}
        >
            Cancel
        </button>
        <button
            on:click={() => {
                const id = state.algSetDeleting.id;
                AlgSetAPI.deleteSetPermanently(id).then(() => {
                    callback({
                        modalType: undefined,
                        deletedAlgSets: state.deletedAlgSets.filter(algSet => algSet.id !== id),
                    });
                });
            }}
        >
            Ok
        </button>
    </div>
</div>