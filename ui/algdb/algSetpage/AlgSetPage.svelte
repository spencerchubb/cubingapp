<script lang="ts">
    import {
        type AlgSet,
        initApp,
        onChangeOrientation,
        onClickSubset,
        onScroll,
        play,
        selectVariant,
        setCallback,
        type Subsets,
    } from "./algSetPage";
    import { onMount } from "svelte";
    import PauseIcon from "../../src/lib/components/icons/PauseIcon.svelte";
    import PlayIcon from "../../src/lib/components/icons/PlayIcon.svelte";
    import PageSkeleton from "../components/PageSkeleton.svelte";
    import SelectOrientation from "../../src/lib/components/SelectOrientation/SelectOrientation.svelte";

    export let algSet: AlgSet;

    let subsets: Subsets = {};

    algSet.cases.forEach(_case => {
        _case.subsets?.forEach(subset => {
            subsets[subset] = {
                cases: (subsets[subset]?.cases ?? 0) + 1,
                selected: false,
            };
        })
    });
    
    let subset = sessionStorage.getItem("subset");

    if (subset) {
        subsets[subset].selected = true;
        algSet.cases = algSet.cases.filter(_case => {
            return _case.subsets?.some(_subset => _subset === subset);
        });
    }

    let state = setCallback((newState) => {
        state = newState;
    });
    
    onMount(() => initApp(algSet));
</script>

<PageSkeleton>
    <div
        style="
            display: flex;
            flex-wrap: wrap;
            align-items:start;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            padding: 16px;
            gap: 16px;"
        on:scroll={() => {
            onScroll();
        }}
    >
        <div class="col about-container" style="align-items: start; flex: 1 1 450px;">
            <slot></slot>
        </div>
        <div class="col" style="gap: 16px; flex: 10 1 550px;">
            <div class="subsets-div">
                {#each Object.entries(subsets) as [subset, subsetData]}
                    <button
                        class={subsetData.selected
                            ? "subset subset-selected btn-transparent"
                            : "subset btn-transparent"}
                        on:click={() => onClickSubset(subsets, subset)}
                    >
                        <h3>{subset}</h3>
                        <p>{subsetData.cases} cases</p>
                    </button>
                {/each}
            </div>
            <SelectOrientation
                puzzle={algSet.puzzle}
                onChange={onChangeOrientation}
                style="align-self: end;"
            />
            {#each algSet.cases as case_, i}
                <div class="row case-card">
                    <div
                        id="scene{i}"
                        class="scene-div"
                    />
                    <div class="col algs-div">
                        <div class="row" style="width: 100%; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap;">
                            <p style="font-weight: bold;">
                                {case_.name}
                            </p>
                            {#if case_.variants && case_.variants.length > 0}
                                <select on:change={event => selectVariant(event, i)}>
                                    {#each case_.variants ?? [] as variant, i1}
                                        <option value={i1}>{variant.name}</option>
                                    {/each}
                                </select>
                            {/if}
                        </div>
                        {#each case_.algs ?? [] as alg1, i1}
                            <div class="row divider">
                                {#if state.casePlaying === i && state.algPlaying === i1}
                                    <button
                                        class="play-icon"
                                        on:click={() => play(i, i1)}
                                    >
                                        <PauseIcon />
                                    </button>
                                {:else}
                                    <button
                                        class="play-icon"
                                        on:click={() => play(i, i1)}
                                    >
                                        <PlayIcon />
                                    </button>
                                {/if}
                                <div style="width: 8px;" />
                                <p style="width: 100%;">{alg1}</p>
                            </div>
                        {/each}
                        {#each case_.variants ? case_.variants[state.selectedVariants[i] ?? 0].algs : [] as alg1, i1}
                            <div class="row divider">
                                {#if state.casePlaying === i && state.algPlaying === i1}
                                    <button
                                        class="play-icon"
                                        on:click={() => play(i, i1)}
                                    >
                                        <PauseIcon />
                                    </button>
                                {:else}
                                    <button
                                        class="play-icon"
                                        on:click={() => play(i, i1)}
                                    >
                                        <PlayIcon />
                                    </button>
                                {/if}
                                <div style="width: 8px;" />
                                <p style="width: 100%;">{alg1}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</PageSkeleton>

<style>
    :global(.about-container p, .about-container h2) {
        margin-top: 1em;
    }

    :global(.about-container li) {
        margin-top: 0.5em;
    }

    :global(.also-use) {
        margin-top: 0.5em;
        display: block;
        width: fit-content;
    }

    .subsets-div {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: center;
    }

    .subset {
        font-weight: 700;
        font-size: 1.3rem;
        border: solid 1px var(--gray-500);
        border-radius: 4px;
        color: var(--blue-300);
        white-space: nowrap;
        display: inline-block;
    }

    .subset-selected {
        outline: solid 2px var(--blue-300);
    }

    .subset p {
        font-weight: normal;
    }

    .subset h3 {
        font-size: 1rem;
    }

    .case-card {
        width: 100%;
        justify-content: center;
        align-items: start;
        border: solid 1px var(--gray-500);
        box-shadow: 0 0 4px 2px var(--gray-600);
        border-radius: 16px;
        flex-wrap: wrap;
    }

    .scene-div {
        width: 150px;
        height: 150px;
        min-width: 150px;
        min-height: 150px;
    }

    .algs-div {
        flex: 1 1 400px;
        padding: 16px;
        align-items: start;
    }

    .divider {
        padding: 8px 0;
        width: 100%;
        border-top: solid 1px var(--gray-500);
    }

    .play-icon {
        background: inherit;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        border: solid 1px var(--gray-500);
        padding: 4px;
    }

    .play-icon:hover {
        background: var(--gray-500);
    }
</style>
