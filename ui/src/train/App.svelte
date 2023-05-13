<script lang="ts">
	import ButtonCreateAccount from "../lib/components/auth/ButtonCreateAccount.svelte";
	import ButtonSignIn from "../lib/components/auth/ButtonSignIn.svelte";
	import ButtonGoogleSignIn from "../lib/components/auth/ButtonGoogleSignIn.svelte";
	import InputEmail from "../lib/components/auth/InputEmail.svelte";
	import InputPassword from "../lib/components/auth/InputPassword.svelte";
	import Drawer from "../lib/components/Drawer.svelte";
	import GLManager from "../lib/components/GLManager.svelte";
	import Icon from "../lib/components/Icon.svelte";
	import {
		computeStats,
		getAlgSetNames,
		getCasesToday,
		getScramble,
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

	let email = "";
	let password = "";

	let page: "landing" | "train" = "landing";

	let drawerIndex = -1;

	// TODO remove this
	const algSetNames = getAlgSetNames();
	let currAlgSet: string;
	let currAlg: string;

	let orientation = Orientation.get();

	function onChangeOrientation(event: Event) {
		const value = (event.target as HTMLInputElement).value;
		Orientation.set(value);
	}

	let casesToday: number = getCasesToday();

	let sideNavOpen = false;

	let state = setCallback((newState) => {
		state = newState;
	});
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
		{#if page === "train"}
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
		{#if page === "landing"}
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
					<button on:click={() => (page = "train")}> Start Training </button>
				{:else}
					<div
						class="col"
						style="border-radius: 16px; padding: 16px; box-shadow: 0 0 4px lightgray;"
					>
						<ButtonGoogleSignIn callback={(user) => onSignIn(user)} />
						<div style="height: 16px;" />
						<div
							style="width: 100%; height: 2px; background-color: var(--gray-600);"
						/>
						<div style="height: 16px;" />
						<p>Or use email and password</p>
						<div style="height: 12px;" />
						<InputEmail class="mt-4" bind:value={email} />
						<div style="height: 16px;" />
						<InputPassword class="mt-4" bind:value={password} />
						<div style="height: 32px;" />
						<div class="row">
							<ButtonCreateAccount
								{email}
								{password}
								callback={(user) => onSignIn(user)}
							/>
							<div style="width: 16px;" />
							<ButtonSignIn
								{email}
								{password}
								callback={(user) => onSignIn(user)}
							/>
						</div>
					</div>
				{/if}
				<div style="height: 16px;" />
				<div
					style="width: 100%; height: 1px; background-color: var(--gray-600);"
				/>
				<div style="height: 16px;" />
				<Faq />
			</div>
		{:else if page === "train"}
			<div class="col" style="width: 100%; height: 100%;">
				<div style="height: 16px;" />
				<GLManager
					onSceneInitialized={(scene) => {
						setScene(scene);

						if (state.algSet) {
							loadCurrAlg();
						} else {
							algSetLogic.displayChooseAlgSet();
						}
					}}
				/>
				<div style="height: 16px" />
				<div class="row" style="gap: 16px;">
					<Icon
						name="retry"
						id="retry-icon"
						style="
						width: 48px;
						height: 48px;
						padding: 2px;
						box-shadow: 0 0 4px var(--gray-400);"
						on:click={() => {
							currAlg = loadCurrAlg();
						}}
					/>
					<Icon
						name="sad"
						id="sad-icon"
						style="
						width: 48px;
						height: 48px;
						padding: 2px;
						box-shadow: 0 0 4px var(--gray-400);"
						on:click={() => {
							nextAlg(false, currAlgSet).then((res) => {
								currAlg = res;
								casesToday = getCasesToday();
								getScramble();
							});
						}}
					/>
					<Icon
						name="happy"
						id="happy-icon"
						style="
						width: 48px;
						height: 48px;
						padding: 2px;
						box-shadow: 0 0 4px var(--gray-400);"
						on:click={() => {
							nextAlg(true, currAlgSet).then((res) => {
								currAlg = res;
								casesToday = getCasesToday();
								getScramble();
							});
						}}
					/>
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
								page = "landing";
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
						<p>show scramble</p>
						<input
							type="checkbox"
							bind:checked={state.showScramble}
							on:change={() => {
								setShowScramble(state.showScramble);
								getScramble();
							}}
						/>
						<div style="height: 16px;" />
						<div class="row">
							<p>algorithms</p>
							<Icon
								name="plus"
								id="plus-icon"
								style="width: 24px; height: 24px; padding: 4px; margin-left: 4px;"
								on:click={() => onAddAlgorithm()}
							/>
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
	<Modal title={state.modalType} bind:open={state.modalOpen} allowClose={state.algSets.length > 0}>
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
								<Icon
									name="edit"
									style="width: 30px; height: 30px; padding: 4px;"
									on:click={() =>
										algSetLogic.editAlgSet(algSet.id, state.algSets)}
								/>
								<div style="width: 16px;" />
								<Icon
									name="x"
									style="width: 30px; height: 30px; padding: 4px;"
									on:click={() =>
										algSetLogic.deleteAlgSet(
											algSet.id,
											state.algSets,
											state.algSet
										)}
								/>
							</button>
						{/each}
					</div>
				{/if}
				<button on:click={() => algSetLogic.createCustomSet()}
					>new custom set</button
				>
			</div>
		{:else if state.modalType === "edit alg set"}
			<div class="col" style="padding: 16px; gap: 16px;">
				<input type="text" bind:value={state.algSetEditing.name} />

				<button
					on:click={() =>
						algSetLogic.saveAlgSet(
							state.algSetEditing.id,
							state.algSetEditing.name,
							state.algSetEditing.trainingAlgs,
							state.algSets
						)}>save</button
				>
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
	:global(#retry-icon) {
		background: var(--gray-500);
	}

	:global(#retry-icon:hover) {
		background: var(--gray-700);
	}

	:global(#sad-icon) {
		background: var(--red-500);
	}

	:global(#sad-icon:hover) {
		background: var(--red-700);
	}

	:global(#happy-icon) {
		background: var(--green-500);
	}

	:global(#happy-icon:hover) {
		background: var(--green-700);
	}

	:global(#plus-icon:hover) {
		background: inherit;
	}

	:global(#plus-icon:hover) {
		background: var(--gray-500);
		border-radius: 50%;
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
