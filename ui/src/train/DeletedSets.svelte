<script lang="ts">
    import { type State } from "./app";
    import MoreIcon from "../lib/components/icons/MoreIcon.svelte";

    export let state: State;
    export let callback: Function;
</script>

<div class="col" style="width: 100%; height: 100%; padding: 16px; gap: 16px;">
    <button on:click={() => callback({ page: "landing" })}>
        Back
    </button>
    <h2>Deleted sets</h2>
    {#if state.deletedAlgSets.length === 0}
        <p>No deleted sets</p>
    {/if}
    <div style="width: 100%; max-width: 300px;">
        {#each state.deletedAlgSets as deletedSet}
            <button
                class="row list-item"
                on:click={(event) => {
                    event.stopPropagation();
                    callback({
                        modalType: "Deleted set actions",
                        algSetDeleting: deletedSet,
                    });
                }}
            >
                <p style="font-size: 1.2rem;">{deletedSet.name}</p>
                <div style="flex-grow: 1;" />
                <button
                    class="btn-transparent"
                    style="padding: 2px; font-size: 1.4rem; min-width: 40px; height: 40px;"
                >
                    <MoreIcon />
                </button>
            </button>
        {/each}
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
</style>