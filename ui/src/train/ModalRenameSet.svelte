<script lang="ts">
    import { type State } from "./app";
    import * as AlgSetAPI from "../lib/scripts/api/algSet";
    
    export let state: State;
    export let callback: Function;

    function saveNewName() {
        const algSet = state.algSetEditing;
        if (!algSet) {
            throw new Error("Expected algSetEditing to be defined");
        }
        AlgSetAPI.update(algSet.id, algSet.name, algSet.trainingAlgs);
        callback({
            modalType: undefined,

            // Change name of algSet in algSets
            algSets: state.algSets?.map(_algSet => {
                return _algSet.id === algSet.id ? algSet : _algSet;
            }),
        });
    }
</script>

<div class="col" style="width: 100%; padding: 16px; gap: 16px;">
    <input
        type="text"
        bind:value={state.algSetEditing.name}
        on:keydown={(event) => {
            if (event.key === "Enter") {
                saveNewName();
            }
        }}
    />
    <div class="row" style="gap: 16px;">
        <button
            class="btn-gray"
            on:click={() => {
                callback({ modalType: "Alg set actions", });
            }}
        >
            Cancel
        </button>
        <button
            on:click={saveNewName}
        >
            Save
        </button>
    </div>
</div>