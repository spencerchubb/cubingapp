<script lang="ts">
    import { type State } from "./app";
    import * as AlgSetAPI from "../lib/scripts/api/algSet";
    
    export let state: State;
    export let callback: Function;
</script>

<div style="width: 100%; overflow-y: auto;">
    <div class="col" style="width: 100%; padding: 16px; gap: 16px;">
        <button
            on:click={() => {
                callback({ modalType: "Alg set actions" });
            }}
        >
            Save & Exit
        </button>
        <div class="row" style="gap: 32px;">
            <button
                class="btn-gray"
                on:click={() => {
                    for (const alg of state.algSetEditing.trainingAlgs) alg.Hide = true;

                    const { id, name, trainingAlgs } = state.algSetEditing;
                    AlgSetAPI.update(id, name, trainingAlgs).then(() => {
                        callback({ algSet: state.algSetEditing });
                    });
                }}
            >Hide all</button>
            <button
                class="btn-gray"
                on:click={() => {
                    for (const alg of state.algSetEditing.trainingAlgs) delete alg.Hide;

                    const { id, name, trainingAlgs } = state.algSetEditing;
                    AlgSetAPI.update(id, name, trainingAlgs).then(() => {
                        callback({ algSet: state.algSetEditing });
                    })
                }}
            >Show all</button>
        </div>
        <p style="font-weight: bold;">Hidden algs will not appear while training</p>
        <div class="col" style="gap: 8px;">
            {#each state.algSetEditing.trainingAlgs as alg}
                <div
                    class="row"
                    style="width: 100%; gap: 8px;"
                >
                    <input
                        type="checkbox"
                        checked={!alg.Hide}
                        style="width: 1rem; height: 1rem;"
                        on:change={() => {
                            if (alg.Hide) delete alg.Hide;
                            else alg.Hide = true;

                            const { id, name, trainingAlgs } = state.algSetEditing;
                            AlgSetAPI.update(id, name, trainingAlgs);
                        }}
                    />
                    <p
                        style={alg.Hide ? "text-decoration: line-through;" : ""}
                    >{alg.Alg}</p>
                </div>
            {/each}
        </div>
    </div>
</div>