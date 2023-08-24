<script lang="ts">
    import { loadCurrAlg, type State } from "./app";
    import * as AlgSetAPI from "../lib/scripts/api/algSet";
    import MoreIcon from "../lib/components/icons/MoreIcon.svelte";
    import { deepCopy } from "../lib/scripts/util";

    export let state: State;
    export let callback: Function;

    function createAlgSet(set: string) {
        AlgSetAPI.create(set).then((algSet) => {
            callback({
                page: "train",
                modalType: undefined,
                algSets: [algSet, ...state.algSets],
                algSet,
            });
            loadCurrAlg();
        });
    }
</script>

<div style="
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px;
    gap: 32px;
    overflow-y: auto;">
    {#if state.algSets?.length > 0}
        <div style="width: 100%; max-width: 300px;">
            <h2 style="
                margin-bottom: 16px;
                text-align: center;"
            >Your sets</h2>
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
                            callback({ modalType: "Alg set actions", algSetEditing: deepCopy(algSet) });
                        }}
                    >
                        <MoreIcon />
                    </button>
                </button>
            {/each}
            <button
                class="btn-transparent"
                style="
                    width: 100%;
                    border: solid 1px var(--gray-500);
                    margin-top: 16px;"
                on:click={() => {
                    AlgSetAPI.readDeleted().then(deletedAlgSets => {
                        callback({
                            page: "deleted sets",
                            modalType: undefined,
                            deletedAlgSets,
                        });
                    });
                }}
            >
                Deleted sets
            </button>
        </div>
    {/if}
    <div
        style="
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        flex: 0 1 600px;"
    >
        <h2>Explore sets</h2>
        <div class="card">
            <h2>2x2</h2>
            <button class="alg-set" on:click={() => createAlgSet("2x2 CLL")}>
                2x2 CLL
            </button>
            <button class="alg-set" on:click={() => createAlgSet("2x2 EG1")}>
                2x2 EG1
            </button>
            <button class="alg-set" on:click={() => createAlgSet("2x2 EG2")}>
                2x2 EG2
            </button>
            <button class="alg-set" on:click={() => createAlgSet("2x2 TCLL+")}>
                2x2 TCLL+
            </button>
            <button class="alg-set" on:click={() => createAlgSet("2x2 TCLL-")}>
                2x2 TCLL-
            </button>
        </div>
        <div class="card">
            <h2>3x3</h2>
            <button class="alg-set" on:click={() => createAlgSet("F2L")}>
                F2L
            </button>
            <button class="alg-set" on:click={() => createAlgSet("OLL")}>
                OLL
            </button>
            <button class="alg-set" on:click={() => createAlgSet("PLL")}>
                PLL
            </button>
            <button class="alg-set" on:click={() => createAlgSet("ZBLL")}>
                ZBLL
            </button>
            <button class="alg-set" on:click={() => createAlgSet("CMLL")}>
                CMLL
            </button>
        </div>
        <div class="card">
            <h2>Square-1</h2>
            <button class="alg-set" on:click={() => createAlgSet("SQ1 Cube Shape")}>
                SQ1 Cube Shape
            </button>
            <button class="alg-set" on:click={() => createAlgSet("SQ1 CSP")}>
                SQ1 CSP
            </button>
            <button class="alg-set" on:click={() => createAlgSet("SQ1 EP")}>
                SQ1 EP
            </button>
        </div>
        <div class="card">
            <h2>Other</h2>
            <button class="alg-set" on:click={() => createAlgSet("Pyraminx L4E")}>
                Pyraminx L4E
            </button>
        </div>
    </div>
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

    .card {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        border: solid 1px var(--gray-500);
        box-shadow: 0 0 4px 2px var(--gray-600);
        border-radius: 16px;
        padding: 16px;
        gap: 8px 16px;
    }

    .card h2 {
        width: 100%;
    }

    .alg-set {
        background-color: transparent;
        font-weight: bold;
        font-size: 1.3rem;
        padding: 4px;
        border-radius: 4px;
        color: var(--blue-300);
    }

    .alg-set:hover {
        background: var(--gray-600);
    }
</style>