<script lang="ts">
	import Drawer from "../../src/lib/components/Drawer.svelte";
	import GLManager from "../../src/lib/components/GLManager.svelte";
	import {
		initScene,
		newCase,
        onChangeOrientation,
		onSelectSubset,
		setCallback,
        setupCase,
	} from "./app";
	import SideNav from "../../src/lib/components/SideNav.svelte";
	import NavBarIcon from "../../src/lib/components/NavBarIcon.svelte";
	import SettingsIcon from "../../src/lib/components/icons/SettingsIcon.svelte";
	import MenuIcon from "../../src/lib/components/icons/MenuIcon.svelte";
    import SelectOrientation from "../../src/lib/components/SelectOrientation/SelectOrientation.svelte";
    import { type AlgSet } from "../../src/lib/scripts/algSets";
    import { AlgSimplify, AlgToString, StringToAlg } from "../../src/lib/scripts/common/alg";
    import Tooltip from "../../src/lib/components/Tooltip.svelte";

    export let algSet: AlgSet;

	let sideNavOpen = false;
    let drawerOpen = true;

	let state = setCallback((newState) => {
		state = Object.assign(state, newState);
	});

    document.addEventListener("keydown", event => {
        if (event.key === "Backspace") {
            setupCase();
        } else if (event.key === "Enter") {
            newCase();
        }
    });

    // TODO: maybe remove ChartIcon and ProfileIcon
</script>

<main class="col" style="width: 100%; height: 100%;">
	<nav class="navbar" style="justify-content: space-between;">
		<NavBarIcon on:click={() => (sideNavOpen = true)}>
			<MenuIcon />
		</NavBarIcon>
        <h1>Alg Trainer</h1>
        <NavBarIcon on:click={() => (drawerOpen = true)}>
            <SettingsIcon />
        </NavBarIcon>
	</nav>
	<div
		class="row"
		style="
		justify-content: center;
		align-items: start;
		width: 100%;
		height: 100%;
		position: relative;
		overflow-y: auto;"
	>
        <div class="col" style="width: 100%; height: 100%; padding: 16px; gap: 16px;">
            <p>{state.scramble || "loading..."}</p>
            <div style="border-radius: 8px; box-shadow: 0 0 4px 2px var(--gray-600);">
                <GLManager
                    onSceneInitialized={scene => initScene(scene, algSet)}
                />
            </div>
            <div class="row" style="gap: 16px;">
                <Tooltip text="Reset (Backspace)">
                    <button
                        on:click={() => setupCase()}
                    >
                        Reset
                    </button>
                </Tooltip>
                <Tooltip text="Next (Enter)">
                    <button
                        on:click={() => newCase()}
                    >
                        Next
                    </button>
                </Tooltip>
            </div>
            <details>
                <summary>Solutions</summary>
                <div>
                    <ul style="padding-left: 24px;">
                        {#each state.currentCase?.algs ?? state.currentCase?.variants[0].algs ?? [] as alg}
                            <li>{AlgToString(AlgSimplify(StringToAlg(`${state.postAlg} ${alg}`.trim())))}</li>
                        {/each}
                    </ul>
                </div>
            </details>
        </div>
        <Drawer title="Settings" bind:drawerOpen>
            <div class="col" style="align-items: start; padding: 16px; gap: 16px;">
                <a href="/keybindings.html">
                    <button>Customize key bindings</button>
                </a>
                <SelectOrientation
                    puzzle={state.algSet?.puzzle ?? "3x3"}
                    onChange={onChangeOrientation}
                />
                <div style="width: 100%; height: 1px; background: var(--gray-600);"></div>
                {#if Object.entries(state.subsets).length > 0}
                    <div class="col" style="width: 100%; align-items: start; gap: 12px;">
                        <h2 style="font-size: 1rem;">Subsets</h2>
                        {#each Object.entries(state.subsets) as [subset, checked]}
                            <label class="row" style="gap: 8px;">
                                <input
                                    type="checkbox"
                                    on:change={onSelectSubset}
                                    {checked}
                                    value={subset}
                                />
                                {subset}
                            </label>
                        {/each}
                    </div>
                {/if}
            </div>
        </Drawer>
	</div>
	<SideNav bind:open={sideNavOpen} />
</main>

<style>
    details {
        color: var(--gray-100);
        width: 100%;
        max-width: 320px;
    }

    details summary {
        padding: 12px;
        border: solid 1px var(--gray-500);
        border-radius: 8px;
    }

    details summary:hover {
        cursor: pointer;
    }

    details[open] {
        border: solid 1px var(--gray-500);
        border-radius: 8px;
    }

    details[open] summary {
        border: none;
        border-bottom: solid 1px var(--gray-500);
        border-radius: 0;
    }

    details > *:not(summary) {
        padding: 12px;
    }

    label:hover {
        cursor: pointer;
        text-decoration: underline;
    }
</style>