<script lang="ts">
	import Drawer from "../lib/components/Drawer.svelte";
	import GLManager from "../lib/components/GLManager.svelte";
	import Toggle from "../lib/components/Toggle.svelte";
	import {
    closeModal,
		computeStats,
		getCasesToday,
		getScramble,
		goToPage,
		initApp,
		loadCurrAlg,
		nextAlg,
		onAddAlgorithm,
		onChangeAlgorithm,
		onClickAlgorithm,
		onClickSolutionButton,
		onDeleteAlgorithm,
		onSaveAlgorithm,
		onSignIn,
		onSignOut,
		Orientation,
		orientationOptions,
		setAlgSet,
		setCallback,
		setScene,
		setShowScramble,
		setUIState,
	} from "./app";
	import SideNav from "../lib/components/SideNav.svelte";
	import Modal from "../lib/components/Modal.svelte";
	import { onMount } from "svelte";
	import { AlgSetLogic, preBuiltSets } from "./algSet";
	import Faq from "./Faq.svelte";
	import NavBarIcon from "../lib/components/NavBarIcon.svelte";
	import ChartIcon from "../lib/components/icons/ChartIcon.svelte";
	import SettingsIcon from "../lib/components/icons/SettingsIcon.svelte";
	import ProfileIcon from "../lib/components/icons/ProfileIcon.svelte";
	import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import Auth from "../lib/components/auth/Auth.svelte";
    import PlusIcon from "../lib/components/icons/PlusIcon.svelte";

	let drawerIndex = -1;

	let currAlgSet: string;
	let currAlg: string; // TODO see if this variable is necessary

	let orientation = Orientation.get();

	function onChangeOrientation(event: Event) {
		const value = (event.target as HTMLInputElement).value;
		Orientation.set(value);
	}

	let casesToday: number = getCasesToday();

	let sideNavOpen = false;

	let state = setCallback((newState) => {
		state = Object.assign(state, newState);
	});

	$: modalOpen = state.modalType !== null;

	const algSetLogic = new AlgSetLogic((newState) => {
		state = Object.assign(state, newState);
		setUIState(state);
	});

	onMount(() => {
		initApp();
	});
</script>

<main class="col" style="width: 100%; height: 100%;">
	<nav class="navbar" style="justify-content: space-between;">
		<NavBarIcon on:click={() => (sideNavOpen = true)}>
			<MenuIcon />
		</NavBarIcon>
		{#if state.page === "train"}
			<div class="row">
				<NavBarIcon on:click={() => (drawerIndex = 0)}>
					<ChartIcon />
				</NavBarIcon>
				<NavBarIcon on:click={() => (drawerIndex = 1)}>
					<ProfileIcon />
				</NavBarIcon>
				<NavBarIcon on:click={() => (drawerIndex = 2)}>
					<SettingsIcon />
				</NavBarIcon>
			</div>
		{/if}
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
		{#if state.page === "landing"}
			<div class="col w-full h-full" style="padding: 16px;">
				<h1>Learn OLL, PLL, CLL and more</h1>
				<div style="height: 16px" />
				<p
					class="text-gradient"
					style="font-weight: bold; font-size: 1.2rem; background-image: linear-gradient(90deg, var(--blue-400), var(--purple-400));"
				>
					Memorize algs in half the time
				</p>
				<div style="height: 16px" />
				{#if state.user}
					<button on:click={() => goToPage("train")}> Start Training </button>
				{:else}
					<div style="
                        border-radius: 16px; 
                        padding: 16px; 
                        box-shadow: 0 0 4px lightgray;"
                    >
						<Auth {onSignIn} />
					</div>
				{/if}
				<div style="height: 16px;" />
				<div
					style="width: 100%; height: 1px; background-color: var(--gray-600);"
				/>
				<div style="height: 16px;" />
				<Faq />
			</div>
		{:else if state.page === "train"}
			<div class="col" style="width: 100%; height: 100%;">
				<div style="height: 16px;" />
				<div style="border-radius: 8px; box-shadow: 0 0 4px 2px var(--gray-600);">
                    <GLManager
                        onSceneInitialized={(scene) => {
                            setScene(scene);
                            loadCurrAlg();
                        }}
                    />
                </div>
				<div style="height: 16px" />
				<div class="row" style="gap: 16px;">
                    <button
                        class="train-btn"
                        on:click={() => {
                            currAlg = loadCurrAlg();
                        }}
                    >
                        🔃
                    </button>
                    <button
                        class="train-btn"
                        on:click={() => {
                            nextAlg(false, currAlgSet).then((res) => {
                                currAlg = res;
                                casesToday = getCasesToday();
                                getScramble();
                            });
                        }}
                    >
                        😢
                    </button>
                    <button
                        class="train-btn"
                        on:click={() => {
                            nextAlg(true, currAlgSet).then((res) => {
                                currAlg = res;
                                casesToday = getCasesToday();
                                getScramble();
                            });
                        }}
                    >
                        😊
                    </button>
				</div>
				<div style="height: 16px;" />
				<button class="btn-primary" on:click={() => onClickSolutionButton()}>
					{state.solutionButtonText}
				</button>
				{#if state.showScramble}
					<div style="height: 16px;" />
					<p>scramble: {state.scramble || "loading..."}</p>
				{/if}
				<div style="flex-grow: 1;" />
				<p>cases today: {casesToday}</p>
				<div style="height: 16px" />
			</div>
			{#if drawerIndex === 0}
				<Drawer title="Stats" bind:drawerIndex>
					<table style="margin: 16px auto;">
						<thead>
							<tr>
								<th>repetitions</th>
								<th>algs</th>
								<th>%</th>
							</tr>
						</thead>
						<tbody>
							{#each computeStats() as dataPoint}
								<tr>
									<td>{dataPoint.reps}</td>
									<td>{dataPoint.algs}</td>
									<td>{dataPoint.ratio}%</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</Drawer>
			{:else if drawerIndex === 1}
				<Drawer title="Profile" bind:drawerIndex>
					<div style="padding: 12px;">
						<p>signed in as {state.user.email}</p>
						<button
							class="btn-primary"
							on:click={() => {
								goToPage("landing");
								onSignOut();
							}}
						>
							Sign Out
						</button>
					</div>
				</Drawer>
			{:else if drawerIndex === 2}
				<Drawer title="Settings" bind:drawerIndex>
					<div style="padding: 16px;">
						<p>algorithm set: {state.algSet?.name ?? "none"}</p>
						<button on:click={() => algSetLogic.displayChooseAlgSet()}>
							choose alg set
						</button>
						<div style="height: 16px;" />
						<a href="/keybindings.html">
							<button>Customize key bindings</button>
						</a>
						<div style="height: 16px;" />
						<p>orientation</p>
						<select bind:value={orientation} on:change={onChangeOrientation}>
							{#each orientationOptions as option}
								<option value={option.value}>{option.label}</option>
							{/each}
						</select>
						<div style="height: 16px;" />
						<div class="row" style="justify-content: space-between;">
							<p>show scramble</p>
							<Toggle
								bind:checked={state.showScramble}
								on:change={(event) => {
									setShowScramble(state.showScramble);
									getScramble();
								}}
							/>
						</div>
						<div style="height: 16px;" />
						<div class="row">
							<p>algorithms</p>
                            <button
                                class="btn-transparent"
                                style="width: 24px; height: 24px; padding: 4px; margin-left: 4px; border-radius: 50%;"
                                on:click={() => onAddAlgorithm()}
                            >
                                <PlusIcon />
                            </button>
						</div>
						{#each state.algSet?.trainingAlgs ?? [] as alg, i}
							<button
								class="alg-list-item"
								style="
								border-top: solid 1px var(--gray-500); 
								border-radius: 0;
								width: 100%;
								padding: 4px;
								text-align: left;"
								on:click={() => onClickAlgorithm(i)}
							>
								<p>{alg.Alg}</p>
							</button>
						{/each}
					</div>
				</Drawer>
			{/if}
		{/if}
	</div>
	<SideNav bind:open={sideNavOpen} />
	<Modal
		title={state.modalType}
		bind:open={modalOpen}
		allowClose={state.algSets.length > 0}
		close={closeModal}
	>
		{#if state.modalType === "choose alg set" || state.algSets.length === 0}
			<div class="col" style="padding: 16px; gap: 16px;">
				<p style="font-weight: bold;">pre-built sets</p>
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
								algSetLogic
									.createPrebuiltAlgSet(state.user.uid, set, state.algSets)
									.then(() => {
										setAlgSet();
										loadCurrAlg();
									});
							}}
						>
							{set}
						</button>
					{/each}
				</div>
				<p style="font-weight: bold;">your sets</p>
				{#if !state.algSets || state.algSets.length === 0}
					<p style="font-style: italic;">you don't have any sets yet</p>
				{:else}
					<div style="width: 100%; max-width: 300px;">
						{#each state.algSets as algSet}
							<button
								class="row alg-list-item"
								style="
								width: 100%;
								border-top: solid 1px var(--gray-500);
								padding: 4px;"
								on:click={() => {
									algSetLogic.chooseAlgSet(algSet.id, state.algSets);
									setAlgSet();
									loadCurrAlg();
								}}
							>
								<p style="font-size: 1.2rem;">{algSet.name}</p>
								<div style="flex-grow: 1;" />
                                <button
                                    class="btn-transparent"
                                    style="padding: 2px; font-size: 1.4rem; min-width: 40px; height: 40px;"
                                    on:click={() => {
                                        algSetLogic.editAlgSet(algSet.id, state.algSets);
                                    }}
                                >
                                    ✍
                                </button>
                                <button
                                    class="btn-transparent"
                                    style="padding: 2px; font-size: 1.8rem; min-width: 40px; height: 40px;"
                                    on:click={() =>
										algSetLogic.deleteAlgSet(
											algSet.id,
											state.algSets,
											state.algSet
										)}
                                >
                                    🗑
                                </button>
							</button>
						{/each}
					</div>
				{/if}
				<button on:click={() => algSetLogic.clickCustomSet()}
					>new custom set</button
				>
			</div>
        {:else if state.modalType === "create alg set"}
        <div class="col" style="padding: 16px; gap: 16px;">
            <input type="text" bind:value={state.algSetEditing.name} />
            <button
                on:click={() => {
                    algSetLogic.createAlgSet(state.algSetEditing, state.algSets)
                }}
            >
                save
            </button>
        </div>
		{:else if state.modalType === "edit alg set"}
			<div class="col" style="padding: 16px; gap: 16px;">
				<input type="text" bind:value={state.algSetEditing.name} />
				<button
					on:click={() => {
						algSetLogic.saveAlgSet(
							state.algSetEditing.id,
							state.algSetEditing.name,
							state.algSetEditing.trainingAlgs,
							state.algSets
						);
                    }}
                >
                    save
                </button>
			</div>
		{:else if state.modalType === "edit alg"}
			<div class="col" style="padding: 16px; gap: 16px;">
				<input
					type="text"
					style="width: 300px"
					bind:value={state.selectedAlg.Alg}
					on:change={onChangeAlgorithm}
				/>
				<div class="row" style="gap: 16px;">
					<button class="btn-gray" on:click={() => onDeleteAlgorithm()}
						>Delete</button
					>
					<button on:click={() => onSaveAlgorithm()}>Save</button>
				</div>
			</div>
		{/if}
	</Modal>
</main>

<style>
    .train-btn {
        width: 48px;
        height: 48px;
        padding: 0;
        font-size: 1.5rem;
        background-color: var(--gray-400);
        box-shadow: 0 2px 8px -2px lightgray;
    }

    .train-btn:hover {
        background-color: var(--gray-300);
    }

	.alg-list-item {
		background-color: inherit;
		border-radius: 0;
	}

	.alg-list-item:hover {
		background-color: var(--gray-800);
		box-shadow: inset 0 0 4px var(--gray-400);
		cursor: pointer;
	}
</style>
