<script lang="ts">
	import Drawer from "../lib/components/Drawer.svelte";
	import GLManager from "../lib/components/GLManager.svelte";
	import Toggle from "../lib/components/Toggle.svelte";
	import {
        callback,
		computeStats,
		getCasesToday,
		getScramble,
		initScene,
		loadCurrAlg,
		nextAlg,
        onChangeOrientation,
		onClickSolutionButton,
		setCallback,
		setShowScramble,
	} from "./app";
	import SideNav from "../lib/components/SideNav.svelte";
	import Modal from "../lib/components/Modal.svelte";
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
    import SelectOrientation from "../lib/components/SelectOrientation/SelectOrientation.svelte";
    import DeletedSets from "./DeletedSets.svelte";
    import ModalDeletedSetActions from "./ModalDeletedSetActions.svelte";
    import ModalAlgSetActions from "./ModalAlgSetActions.svelte";
    import ModalRenameSet from "./ModalRenameSet.svelte";
    import ModalPermanentlyDelete from "./ModalPermanentlyDelete.svelte";
    import ModalHideAlgs from "./ModalHideAlgs.svelte";

	let drawerIndex = -1;

	let casesToday: number = getCasesToday();

	let sideNavOpen = false;

	let state = setCallback((newState) => {
		state = Object.assign(state, newState);
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
			<div style="padding: 16px; gap: 16px;">
                {#if state.user && !state.user.auth}
                    <h1 style="
                        text-align: center;
                        margin-bottom: 16px;"
                    >Alg Trainer</h1>
                    <div style="
                        border-radius: 16px; 
                        padding: 16px; 
                        box-shadow: 0 0 4px lightgray;"
                    >
                        <Auth />
                    </div>
				{:else if state.algSets}
                    <ChooseAlgSet {state} {callback} />
				{:else}
					<div style="width: 100%; display: flex; justify-content: center;">
                        <div class="spinner"></div>
                    </div>
				{/if}
				<Faq />
			</div>
		{:else if state.page === "train"}
			<div class="col" style="width: 100%; height: 100%;">
				<div style="height: 16px;" />
				<div style="border-radius: 8px; box-shadow: 0 0 4px 2px var(--gray-600);">
                    <GLManager
                        onSceneInitialized={initScene}
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
					<p>Scramble: {state.scramble || "loading..."}</p>
				{/if}
				<div style="flex-grow: 1;" />
				<p>Cases today: {casesToday}</p>
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
                            on:click={() => callback({ modalType: "Choose alg set"})}
                        />
						<a href="/keybindings.html">
							<button>Customize key bindings</button>
						</a>
						<SelectOrientation
                            puzzle={state.algSet?.puzzle}
                            onChange={onChangeOrientation}
                        />
                        <div style="width: 100%; height: 1px; background: var(--gray-600);"></div>
						<div class="row" style="justify-content: space-between; width: 100%;">
							<p>Show scramble</p>
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
        {:else if state.page === "deleted sets"}
            <DeletedSets
                {state}
                {callback}
            />
		{/if}
	</div>
	<SideNav bind:open={sideNavOpen} />
	<Modal
		title={state.modalType}
		open={state.modalType !== undefined && state.algSets !== undefined}
		allowClose={state.algSets?.length > 0}
		close={() => callback({ modalType: undefined })}
	>
		{#if state.modalType === "Choose alg set" || state.algSets?.length === 0}
			<ChooseAlgSet {state} {callback} />
        {:else if state.modalType === "Alg set actions"}
            <ModalAlgSetActions {state} {callback} />
		{:else if state.modalType === "Rename alg set"}
            <ModalRenameSet {state} {callback} />
        {:else if state.modalType === "Hide algs"}
            <ModalHideAlgs {state} {callback} />
        {:else if state.modalType === "Deleted set actions"}
            <ModalDeletedSetActions {state} {callback} />
        {:else if state.modalType === "Permanently delete"}
            <ModalPermanentlyDelete {state} {callback} />
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
