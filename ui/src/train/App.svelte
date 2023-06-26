<script lang="ts">
	import Drawer from "../lib/components/Drawer.svelte";
	import GLManager from "../lib/components/GLManager.svelte";
	import Toggle from "../lib/components/Toggle.svelte";
	import {
        callback,
		computeStats,
		getCasesToday,
		getScramble,
		loadCurrAlg,
		nextAlg,
		onClickSolutionButton,
		Orientation,
		orientationOptions,
		setCallback,
		setScene,
		setShowScramble,
		setUIState,
	} from "./app";
	import SideNav from "../lib/components/SideNav.svelte";
	import Modal from "../lib/components/Modal.svelte";
	import { AlgSetLogic, preBuiltSets } from "./algSet";
	import Faq from "./Faq.svelte";
	import NavBarIcon from "../lib/components/NavBarIcon.svelte";
	import ChartIcon from "../lib/components/icons/ChartIcon.svelte";
	import SettingsIcon from "../lib/components/icons/SettingsIcon.svelte";
	import ProfileIcon from "../lib/components/icons/ProfileIcon.svelte";
	import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import Auth from "../lib/components/auth/Auth.svelte";
    import { signOut } from "../lib/scripts/auth";
    import DropDownButton from "../lib/components/DropDownButton.svelte";
    import * as AlgSetAPI from "../lib/scripts/api/algSet";
    import ChooseAlgSet from "./ChooseAlgSet.svelte";

	let drawerIndex = -1;

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

	const algSetLogic = new AlgSetLogic((newState) => {
		state = Object.assign(state, newState);
		setUIState(state);
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
			<div class="col w-full h-full" style="padding: 16px; gap: 16px;">
				<h1>Algorithm Trainer</h1>
				<p
					class="text-gradient"
					style="font-weight: bold; font-size: 1.2rem; background-image: linear-gradient(90deg, var(--blue-400), var(--purple-400));"
				>
					Memorize algs in half the time
				</p>
                {#if state.user && !state.user.auth}
                    <div style="
                        border-radius: 16px; 
                        padding: 16px; 
                        box-shadow: 0 0 4px lightgray;"
                    >
                        <Auth onSignIn={_ => {}} />
                    </div>
                {/if}
				{#if state.algSets}
                    <ChooseAlgSet {state} {callback} />
				{:else}
					<div class="spinner"></div>
				{/if}
				<div
					style="width: 100%; height: 1px; background-color: var(--gray-600);"
				/>
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
                            loadCurrAlg();
                        }}
                    >
                        🔃
                    </button>
                    <button
                        class="train-btn"
                        on:click={() => {
                            nextAlg(false).then((res) => {
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
                            nextAlg(true).then((res) => {
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
                                callback({ page: "landing" });
								signOut();
							}}
						>
							Sign Out
						</button>
					</div>
				</Drawer>
			{:else if drawerIndex === 2}
				<Drawer title="Settings" bind:drawerIndex>
					<div class="col" style="align-items: start; padding: 16px; gap: 16px;">
                        <DropDownButton
                            buttonText={state.algSet?.name ?? "none"}
                            on:click={() => callback({ modalType: "choose alg set"})}
                        />
						<a href="/keybindings.html">
							<button>Customize key bindings</button>
						</a>
						<div>
                            <p>orientation</p>
                            <select bind:value={orientation} on:change={onChangeOrientation}>
                                {#each orientationOptions as option}
                                    <option value={option.value}>{option.label}</option>
                                {/each}
                            </select>
                        </div>
                        <div style="width: 100%; height: 1px; background: var(--gray-600);"></div>
						<div class="row" style="justify-content: space-between; width: 100%;">
							<p>show scramble</p>
							<Toggle
								bind:checked={state.showScramble}
								on:change={(event) => {
									setShowScramble(state.showScramble);
									getScramble();
								}}
							/>
						</div>
					</div>
				</Drawer>
			{/if}
		{/if}
	</div>
	<SideNav bind:open={sideNavOpen} />
	<Modal
		title={state.modalType}
		open={state.modalType !== undefined && state.algSets !== undefined}
		allowClose={state.algSets?.length > 0}
		close={() => callback({ modalType: undefined })}
	>
		{#if state.modalType === "choose alg set" || state.algSets?.length === 0}
			<ChooseAlgSet {state} {callback} />
        {:else if state.modalType === "delete alg set"}
            <div class="col" style="padding: 16px; gap: 16px;">
                <p>Are you sure you want to delete {state.algSetEditing.name}?</p>
                <div class="row" style="gap: 16px;">
                    <button
                        class="btn-gray"
                        on:click={() => {
                            callback({
                                modalType: state.page === "landing"
                                    ? undefined
                                    : "choose alg set",
                            });
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        on:click={() => {
                            algSetLogic.deleteAlgSet(
                                state.algSetEditing.id,
                                state.algSets,
                                state.algSetEditing,
                            );
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
		{:else if state.modalType === "edit alg set"}
            <div class="col" style="padding: 16px; gap: 16px;">
                <input type="text" bind:value={state.algSetEditing.name} />
                <div class="row" style="gap: 16px;">
                    <button
                        class="btn-gray"
                        on:click={() => {
                            callback({
                                modalType: state.page === "landing"
                                    ? undefined
                                    : "choose alg set",
                            });
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        on:click={() => {
                            const algSet = state.algSetEditing;
                            AlgSetAPI.update(algSet.id, algSet.name, algSet.trainingAlgs);

                            callback({
                                modalType: undefined,
                                algSet: state.algSetEditing,
                                algSets: state.algSets.map(_algSet => {
                                    return _algSet.id === algSet.id ? algSet : _algSet;
                                }),
                            });

                            loadCurrAlg();
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
            <div 
                class="col"
                style="
                    gap: 16px;
                    overflow-y: auto;
                    max-height: 50vh;
                    padding: 8px;
                    margin-bottom: 16px;">
                <button
                    on:click={() => {
                        callback({
                            algSetEditing: {
                                ...state.algSetEditing,
                                trainingAlgs: [
                                    { Score: 0, Alg: "" },
                                    ...state.algSetEditing.trainingAlgs,
                                ],
                            },
                        });
                    }}
                >
                    Add alg ➕
                </button>
                {#each state.algSetEditing.trainingAlgs as trainingAlg, i}
                    <div class="row" style="gap: 8px;">
                        <input
                            type="text"
                            bind:value={trainingAlg.Alg}
                        />
                        <button
                            class="btn-transparent"
                            style="padding: 2px; font-size: 1.4rem; min-width: 40px; height: 40px;"
                            on:click={() => {
                                callback({
                                    algSetEditing: {
                                        ...state.algSetEditing,
                                        trainingAlgs: state.algSetEditing.trainingAlgs.filter(
                                            (_trainingAlg, _i) => _i !== i,
                                        ),
                                    },
                                });
                            }}
                        >
                            🗑
                        </button>
                    </div>
                {/each}
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
</style>
