<script lang="ts">
    import { preBuiltSets } from "./algSet";
    import { loadCurrAlg, type UIState } from "./app";
    import * as AlgSetAPI from "../lib/scripts/api/algSet";

    export let state: UIState;
    export let callback: Function;

</script>
<div class="col" style="padding: 16px; gap: 16px;">
    <div
        style="
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;"
    >
        {#each preBuiltSets as set}
            <button
                on:click={() => {
                    AlgSetAPI.create(set).then((algSet) => {
                        callback({
                            page: "train",
                            modalType: undefined,
                            algSets: [algSet, ...state.algSets],
                            algSet,
                        });
                        loadCurrAlg();
                    });
                }}
            >
                {set}
            </button>
        {/each}
    </div>
    <p style="font-weight: bold;">your sets</p>
    {#if state.algSets?.length === 0}
        <p><i>you don't have any sets yet</i> 😥</p>
    {:else}
        <div style="width: 100%; max-width: 300px;">
            {#each state.algSets as algSet}
                <button
                    class="row list-item"
                    on:click={() => {
                        AlgSetAPI.read(algSet.id).then((algSet) => {
                            callback({
                                page: "train",
                                modalType: undefined,
                                algSet,
                            });
                            loadCurrAlg();
                        });
                    }}
                >
                    <p style="font-size: 1.2rem;">{algSet.name}</p>
                    <div style="flex-grow: 1;" />
                    <button
                        class="btn-transparent"
                        style="padding: 2px; font-size: 1.4rem; min-width: 40px; height: 40px;"
                        on:click={(event) => {
                            event.stopPropagation();
                            AlgSetAPI.read(algSet.id).then((algSet) => {
                                callback({
                                    modalType: "edit alg set",
                                    algSetEditing: algSet,
                                });
                            });
                        }}
                    >
                        ✍
                    </button>
                    <button
                        class="btn-transparent"
                        style="padding: 2px; font-size: 1.8rem; min-width: 40px; height: 40px;"
                        on:click={(event) => {
                            event.stopPropagation();
                            callback({
                                modalType: "delete alg set",
                                algSetEditing: { ...algSet },
                            });
                        }}
                    >
                        🗑
                    </button>
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    .list-item {
		background-color: inherit;
		border-radius: 0;
        width: 100%;
        border-top: solid 1px var(--gray-500);
        padding: 4px 4px 4px 12px;
	}

	.list-item:hover {
		box-shadow: inset 0 0 4px var(--gray-400);
	}
</style>