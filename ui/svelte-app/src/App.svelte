<script lang="ts">
  import ButtonCreateAccount from "./lib/components/auth/ButtonCreateAccount.svelte";
  import ButtonSignIn from "./lib/components/auth/ButtonSignIn.svelte";
  import ButtonGoogleSignIn from "./lib/components/auth/ButtonGoogleSignIn.svelte";
  import InputEmail from "./lib/components/auth/InputEmail.svelte";
  import InputPassword from "./lib/components/auth/InputPassword.svelte";
  import Drawer from "./lib/components/Drawer.svelte";
  import GLManager from "./lib/components/GLManager.svelte";
  import Icon from "./lib/components/Icon.svelte";
  import { initialAuthCheck, signOut } from "./lib/scripts/auth";
  import {
    applyAUFs,
    applyAUFsBackwards,
    getAlgSetNames,
    getCasesToday,
    getScramble,
    loadCurrAlg,
    nextAlg,
    setScene,
  } from "./lib/scripts/train";
  import {
    getAlgSet,
    getShowScramble,
    setAlgSet,
    setShowScramble,
  } from "./lib/scripts/store";
  import SideNav from "./lib/components/SideNav.svelte";
    import Hoverable from "./lib/components/Hoverable.svelte";

  let user = initialAuthCheck();
  let email = "";
  let password = "";

  let page: "landing" | "train" = "landing";

  let showSolution = false;

  let drawerIndex = -1;

  function toggleDrawer(index) {
    if (drawerIndex === index) {
      drawerIndex = -1;
    } else {
      drawerIndex = index;
    }
  }

  const algSetNames = getAlgSetNames();
  let currAlgSet: string;
  let currAlg: string;
  if (currAlgSet) {
    loadCurrAlg(user.uid, currAlgSet).then((res) => {
      currAlg = res;
    });
  }

  let showScramble = getShowScramble();
  let scramble: string = "loading...";

  function maybeLoadScramble() {
    if (!showScramble) return;

    scramble = "loading...";
    getScramble().then(rawScramble => {
      scramble = applyAUFsBackwards(rawScramble);
    });
  }

  let casesToday: number = getCasesToday();

  let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
  <nav class="navbar" style="justify-content: space-between;">
    <Icon
      class="icon"
      style="padding: 8px;"
      name="menu"
      on:click={() => sideNavOpen = true}
    />
    {#if page === "train"}
      <div id="iconContainer" class="row">
        <Icon
          class="icon"
          style="padding: 8px;"
          name="profile"
          on:click={() => toggleDrawer(0)}
        />
        <Icon
          class="icon"
          style="padding: 8px;"
          name="settings"
          on:click={() => toggleDrawer(1)}
        />
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
    position: relative;"
  >
    {#if page === "landing"}
      <div class="col w-full h-full">
        <div style="height: 8px"></div>
        <h1>Algorithm Trainer</h1>
        <div style="height: 16px"></div>
        <p class="text-gradient" style="font-weight: bold; font-size: 1.2rem; background-image: linear-gradient(90deg, var(--blue-400), var(--purple-400));">
          Learn algorithms at lightning speed
        </p>
        <div style="height: 16px"></div>
        <div>
          <h2>1. Memorize faster</h2>
          <div style="height: 8px"></div>
          <ul>
            <li>
              Get an algorithm right, and you'll see it less often.
            </li>
            <div style="height: 8px"></div>
            <li>
              Get an algorithm wrong, and you'll see it more often.
            </li>
          </ul>
          <div style="height: 16px"></div>
          <h2>2. Virtual Cube</h2>
          <div style="height: 8px"></div>
          <ul>
            <li>
              Never scramble a cube again
            </li>
            <div style="height: 8px"></div>
            <li>Practice anywhere, anytime</li>
          </ul>
        </div>
        <div style="height: 24px;"></div>
        {#if user}
          <button
            on:click={() => (page = "train")}
          >
            Start Training
          </button>
        {:else}
          <div
            class="col"
            style="border-radius: 16px; padding: 16px; box-shadow: 0 0 4px lightgray;"
          >
            <ButtonGoogleSignIn callback={(newUser) => (user = newUser)} />
            <div style="height: 16px;"></div>
            <div style="width: 100%; height: 2px; background-color: var(--gray-600);" />
            <div style="height: 16px;"></div>
            <p>Or use email and password</p>
            <div style="height: 12px;"></div>
            <InputEmail class="mt-4" bind:value={email} />
            <div style="height: 16px;"></div>
            <InputPassword class="mt-4" bind:value={password} />
            <div style="height: 32px;"></div>
            <div class="row">
              <ButtonCreateAccount
                {email}
                {password}
                callback={(newUser) => (user = newUser)}
              />
              <div style="width: 16px;" />
              <ButtonSignIn
                {email}
                {password}
                callback={(newUser) => (user = newUser)}
              />
            </div>
          </div>
        {/if}
      </div>
    {:else if page === "train"}
      <div class="col" style="width: 100%; height: 100%;">
        <div style="height: 16px;"></div>
        <GLManager
          onSceneInitialized={(scene) => {
            setScene(scene);

            currAlgSet = getAlgSet();
            if (!currAlgSet) currAlgSet = algSetNames[0];
            loadCurrAlg(user.uid, currAlgSet).then((res) => {
              currAlg = res;
              maybeLoadScramble();
            });
          }}
        />
        <div style="height: 16px"></div>
        <div class="row" style="gap: 16px;">
          <Hoverable background="var(--gray-500)" hovBackground="var(--gray-700)" borderRadius="8px">
            <Icon
              name="retry"
              style="
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);"
              on:click={() => {
                loadCurrAlg(user.uid, currAlgSet).then((res) => {
                  currAlg = res;
                  showSolution = false;
                });
              }}
            />
          </Hoverable>
          <Hoverable background="var(--red-500)" hovBackground="var(--red-700)" borderRadius="8px">
            <Icon
              name="sad"
              style="
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);"
              on:click={() => {
                nextAlg(false, user.uid, currAlgSet).then((res) => {
                  currAlg = res;
                  showSolution = false;
                  casesToday = getCasesToday();
                  maybeLoadScramble();
                });
              }}
            />
          </Hoverable>
          <Hoverable background="var(--green-500)" hovBackground="var(--green-700)" borderRadius="8px">
            <Icon
              name="happy"
              style="
              max-width: 48px;
              max-height: 48px;
              padding: 2px;
              box-shadow: 0 0 4px var(--gray-400);"
              on:click={() => {
                nextAlg(true, user.uid, currAlgSet).then((res) => {
                  currAlg = res;
                  showSolution = false;
                  casesToday = getCasesToday();
                  maybeLoadScramble();
                });
              }}
            />
          </Hoverable>
        </div>
        <div style="height: 16px;"></div>
        <button class="btn-primary" on:click={() => (showSolution = !showSolution)}>
          {#if showSolution}
            solution: {applyAUFs(currAlg)}
          {:else}
            show solution
          {/if}
        </button>
        {#if showScramble}
          <div style="height: 16px;"></div>
          <p>scramble: {scramble}</p>
        {/if}
        <div style="flex-grow: 1;"></div>
        <p>cases today: {casesToday}</p>
        <div style="height: 16px"></div>
      </div>
      {#if drawerIndex === 0}
        <Drawer title="Profile" close={() => toggleDrawer(0)}>
          <div style="padding: 12px;">
            <p>signed in as {user.email}</p>
            <button
              class="btn-primary"
              on:click={() => {
                signOut();
                page = "landing";
                user = null;
              }}
            >
              Sign Out
            </button>
          </div>
        </Drawer>
      {:else if drawerIndex === 1}
        <Drawer title="Settings" close={() => toggleDrawer(1)}>
          <div style="padding: 16px;">
            <p>algorithm set</p>
            <select
              bind:value={currAlgSet}
              on:change={() => {
                loadCurrAlg(user.uid, currAlgSet).then((res) => {
                  currAlg = res;
                  maybeLoadScramble();
                });
                setAlgSet(currAlgSet);
              }}
            >
              {#each algSetNames as algSetName}
                <option>{algSetName}</option>
              {/each}
            </select>
            <div style="height: 16px;" />
            <p>show scramble</p>
            <input
              type="checkbox"
              bind:checked={showScramble}
              on:change={() => {
                maybeLoadScramble();
                setShowScramble(showScramble);
              }}
            />
          </div>
        </Drawer>
      {/if}
    {/if}
  </div>
  <SideNav open={sideNavOpen} onClose={() => (sideNavOpen = false)} />
</main>

<style>
  :global(.icon) {
    width: 48px;
    height: 48px;
    padding: 8px;
    touch-action: none;
  }

  :global(.icon:hover) {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
</style>