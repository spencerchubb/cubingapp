<script lang="ts">
    import GLManager from "../lib/components/GLManager.svelte";
    import SideNav from "../lib/components/SideNav.svelte";
    import type { Scene } from "../lib/scripts/rubiks-viz";
    import {
        initApp,
        undoScramble,
        nextScramble,
        onChangePuzzle,
        onDown,
        puzzles,
        setCallback,
        setInspection,
        solve,
        type TimerStatus,
        onSignIn,
        callback,
    } from "./app";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import Drawer from "../lib/components/Drawer.svelte";
    import SettingsIcon from "../lib/components/icons/SettingsIcon.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import Toggle from "../lib/components/Toggle.svelte";
    import ClockIcon from "../lib/components/icons/ClockIcon.svelte";
    import Auth from "../lib/components/auth/Auth.svelte";
    import ChevronDown from "../lib/components/icons/ChevronDown.svelte";
    import Modal from "../lib/components/Modal.svelte";
    import EditIcon from "../lib/components/icons/EditIcon.svelte";
    import TrashIcon from "../lib/components/icons/TrashIcon.svelte";
    import * as SessionsAPI from "../lib/scripts/api/sessions";

    let scene: Scene;

    let state = setCallback((newState) => {
        state = Object.assign(state, newState);
    });

    function timerColor(status: TimerStatus): string {
        switch (status) {
            case "stopped":
                return "white";
            case "scrambled":
                return "white";
            case "inspecting":
                return "var(--red-600)";
            case "holding down":
                return "var(--yellow-500)";
            case "ready":
                return "var(--green-600)";
            case "running":
                return "white";
        }
    }

    // 768px is the breakpoint we have defined for drawers.
    let drawerIndex = window.innerWidth > 768 ? 0 : -1;

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <div class="row">
            <NavBarIcon on:click={() => (drawerIndex = 0)}>
                <ClockIcon />
            </NavBarIcon>
            <NavBarIcon on:click={() => (drawerIndex = 1)}>
                <SettingsIcon />
            </NavBarIcon>
        </div>
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
        <div class="col" style="width: 100%; height: 100%; gap: 16px; padding: 16px; overflow-y: auto;">
            <p style="font-size: 1.2rem;">{state.scramble}</p>
            <div style="border-radius: 8px; box-shadow: 0 0 4px 2px var(--gray-600);">
                <GLManager
                    onSceneInitialized={(_scene) => {
                        scene = _scene;
                        initApp(scene);
                    }}
                />
            </div>
            <button
                style="
                font-size: 1.5rem; 
                border-radius: 8px; 
                border: solid 1px {timerColor(state.timerStatus)}; 
                color: {timerColor(state.timerStatus)};
                background: transparent;
                width: 320px;
                min-height: 120px;
                max-height: 120px;
                white-space: break-spaces;"
                on:pointerdown={() => onDown()}
            >
                {state.timerText}
            </button>
        </div>
        {#if drawerIndex === 0}
            <Drawer title="Solves" bind:drawerIndex>
                {#if state.user}
                    <div class="col" style="align-items: start; padding: 16px; gap: 16px;">
                        <p>{state.user.email}</p>
                        <button
                            class="row"
                            style="gap: 8px;"
                            on:click={() => {
                                callback({ modalType: "select session" });
                            }}
                        >
                            {state.sessions.length === 0
                                ? "Session 1"
                                : state.sessions[0].name}
                            <div style="width: 20px; height: 20px;">
                                <ChevronDown />
                            </div>
                        </button>
                    </div>
                {:else}
                    <div class="col" style="align-items: center; padding: 16px; gap: 16px;">
                        <p>Want to save your solves?</p>
                        <Auth {onSignIn} />
                    </div>
                {/if}
            </Drawer>
        {:else if drawerIndex === 1}
            <Drawer title="Settings" bind:drawerIndex>
                <div class="col" style="align-items:start; padding: 16px; gap: 16px;">
                    <select
                        value={state.puzzle}
                        on:change={(event) => onChangePuzzle(event)}
                    >
                        {#each puzzles as puzzle}
                            <option value={puzzle}>{puzzle}</option>
                        {/each}
                    </select>
                    <button on:click={() => solve()}>Solve</button>
                    <div class="row" style="gap: 8px;">
                        <button
                            on:click={undoScramble}
                            disabled={state.stack.length === 0}
                        >Undo</button>
                        <div style="width: 16px; height: 2px; background: var(--gray-300);"></div>
                        <button on:click={nextScramble}>Next</button>
                    </div>
                    <a href="/keybindings.html">
                        <button>Customize key bindings</button>
                    </a>
                    <div style="width: 100%; height: 1px; background: var(--gray-600);"></div>
                    <div class="row" style="width: 100%; justify-content: space-between;">
                        <p>Inspection</p>
                        <Toggle 
                            checked={state.inspection}
                            on:change={setInspection}
                        />
                    </div>
                </div>
            </Drawer>
        {/if}
    </div>
    <Modal title={state.modalType} open={state.modalType !== undefined}>
        <div class="col" style="padding: 16px; gap: 16px; min-width: 300px;">
            {#if state.modalType === "edit session"}
                <input type="text" placeholder="Session name" bind:value={state.sessionEditing.name} />
                <div class="row" style="gap: 16px;">
                    <button
                        class="btn-gray"
                        on:click={() => callback({ modalType: "select session" })}
                    >
                        Back
                    </button>
                    <button
                        on:click={() => {
                            SessionsAPI.update(state.sessionEditing);
                            callback({
                                modalType: "select session",
                                sessions: state.sessions.map((session) => {
                                    return session.id === state.sessionEditing.id
                                        ? state.sessionEditing
                                        : session;
                                }),
                            });
                        }}
                    >
                        Save
                    </button>
                </div>
            {:else if state.modalType === "delete session"}
                <p>Are you sure you want to delete {state.sessionEditing.name}?</p>
                <div class="row" style="gap: 16px;">
                    <button
                        class="btn-gray"
                        on:click={() => callback({ modalType: "select session" })}
                    >
                        Cancel
                    </button>
                    <button
                        on:click={() => {
                            SessionsAPI.del(state.sessionEditing.id);
                            callback({
                                modalType: "select session",
                                sessions: state.sessions.filter((session) => {
                                    return session.id !== state.sessionEditing.id;
                                }),
                            });
                        }}
                    >
                        Delete
                    </button>
                </div>
            {:else if state.modalType === "new session"}
                <input type="text" placeholder="Session name" bind:value={state.sessionEditing.name} />
                <div class="row" style="gap: 16px;">
                    <button
                        class="btn-gray" 
                        on:click={() => callback({ modalType: "select session" })}
                    >
                        Back
                    </button>
                    <button
                        on:click={() => {
                            SessionsAPI.create(state.sessionEditing)
                                .then(id => {
                                    state.sessionEditing.id = id;
                                    callback({
                                        modalType: "select session",
                                        sessions: [state.sessionEditing, ...state.sessions],
                                    });
                                });
                        }}
                    >
                        Create
                    </button>
                </div>
            {:else if state.modalType === "select session"}
                <button on:click={() => {
                    callback({
                        modalType: "new session",
                        sessionEditing: { uid: state.user.uid, name: "" },
                    });
                }}>
                    New session
                </button>
                <div style="width: 100%;">
                    {#each state.sessions as session}
                        <div
                            class="row"
                            style="
                                justify-content: space-between;
                                width: 100%;
                                border-top: solid 1px var(--gray-400);
                                padding: 4px 0;"
                        >
                            <p>{session.name}</p>
                            <div>
                                <button
                                    class="btn-transparent"
                                    style="width: 40px; height: 40px; padding: 4px;"
                                    on:click={() => callback({ modalType: "edit session", sessionEditing: {...session} })}
                                >
                                    <EditIcon />
                                </button>
                                <button
                                    class="btn-transparent"
                                    style="width: 40px; height: 40px; padding: 4px;"
                                    on:click={() => callback({ modalType: "delete session", sessionEditing: {...session} })}
                                >
                                    <TrashIcon />
                                </button>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </Modal>
    <SideNav bind:open={sideNavOpen} />
</main>
