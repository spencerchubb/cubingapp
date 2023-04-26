<script lang="ts">
  import { keyboardData, onClickKey, resetDefaults, saveKeyBinding, setCallback } from "./app";
  import SideNav from "../lib/components/SideNav.svelte";
  import Modal from "../lib/components/Modal.svelte";
  import NavBarIcon from "../lib/components/NavBarIcon.svelte";

  let state = setCallback(newState => {
    state = newState;
  });

  let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
  <nav class="navbar" style="justify-content: space-between;">
    <NavBarIcon
      name="menu"
      on:click={() => (sideNavOpen = true)}
    />
  </nav>
  <div class="col" style="width: 100%;">
    {#each keyboardData as keyboardRow, i}
      <div class="keyboard-row" style="padding: 0 min({i * 4}%, {i * 22}px);">
        {#each Object.entries(keyboardRow) as [key, code]}
          <button class="key" on:click={() => onClickKey(key, code)}>
            <p class="key-text-primary">{key}</p>
            <p class="key-text-secondary">{state.keyBindings[code] ?? "NA"}</p>
          </button>
        {/each}
      </div>
    {/each}
    <button style="margin-top: 16px;" on:click={resetDefaults}>Reset Defaults</button>
  </div>
  <Modal title="Binding for {state.selectedKey.key}" bind:open={state.modalOpen}>
    <div class="col" style="padding: 16px; gap: 16px;">
      <input
        type="text"
        placeholder="Enter binding for {state.selectedKey.key}"
        bind:value={state.selectedKey.move}
      />
      <button on:click={saveKeyBinding}>Save</button>
    </div>
  </Modal>
  <SideNav bind:open={sideNavOpen} />
</main>

<style>
  .keyboard-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 500px;
  }

  .key {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: var(--gray-700);
    width: 100%;
    height: 64px;
    margin: 2px;
    padding: 0;
  }

  .key:hover {
    background: var(--gray-600);
  }

  .key-text-primary {
    font-family: monospace;
    color: white;
    font-weight: bold;
  }

  .key-text-secondary {
    font-family: monospace;
    color: var(--gray-200);
  }
</style>
