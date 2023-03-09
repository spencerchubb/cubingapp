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
  import SideNavButton from "./lib/components/SideNavButton.svelte";
  import SideNav from "./lib/components/SideNav.svelte";

  // TODO enable keyboard turns

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

  let sideNavOpen = false;
</script>

<main class="col w-full h-full">
  <nav class="navbar" style="justify-content: space-between;">
    <SideNavButton on:click={() => sideNavOpen = true} />
    {#if page === "train"}
      <div id="iconContainer" class="row">
        <Icon
          class="icon"
          style="padding: 8px;"
          name="profile"
          alt="Profile"
          on:click={() => toggleDrawer(0)}
        />
        <Icon
          class="icon"
          style="padding: 8px;"
          name="settings"
          alt="Settings"
          on:click={() => toggleDrawer(1)}
        />
      </div>
    {/if}
  </nav>
  <div class="row w-full h-full">
    {#if page === "landing"}
      <div class="col w-full h-full">
        <h1 class="text-white mt-4">Algorithm Trainer</h1>
        <p class="text-gray-300 mt-4 font-bold">
          Learn algorithms at lightning speed
        </p>
        <div>
          <h2 class="text-white mt-4">1. Memorize faster</h2>
          <ul>
            <li class="text-white">
              Get an algorithm right, and you'll see it less often.
            </li>
            <li class="text-white">
              Get an algorithm wrong, and you'll see it more often.
            </li>
          </ul>
          <h2 class="text-white">2. Virtual Cube</h2>
          <p class="text-white mt-4">Virtual cubes are better because:</p>
          <ul>
            <li class="text-white">
              You'll never have to scramble a cube again
            </li>
            <li class="text-white">You can practice anywhere, anytime</li>
          </ul>
        </div>
        {#if user}
          <button
            class="btn btn-primary mt-4"
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
            <div class="w-full mt-4 bg-white" style="height: 2px;" />
            <p class="text-white mt-4">Or use email and password</p>
            <InputEmail class="mt-4" bind:value={email} />
            <InputPassword class="mt-4" bind:value={password} />
            <div class="row mt-4">
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
      <div class="col w-full h-full">
        <GLManager
          class="mt-4"
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
        <div class="row mt-4" style="gap: 16px;">
          <div
            class="bg-neutral-700 hover:bg-neutral-800 hover:cursor-pointer"
            style="max-width: 48px; max-height: 48px; padding: 2px; box-shadow: 0 0 4px black; border-radius: 50%;"
          >
            <Icon
              name="retry"
              alt="Retry Algorithm"
              on:click={() => {
                loadCurrAlg(user.uid, currAlgSet).then((res) => {
                  currAlg = res;
                  showSolution = false;
                });
              }}
            />
          </div>
          <div
            class="bg-red-500 hover:bg-red-700 hover:cursor-pointer"
            style="max-width: 48px; max-height: 48px; padding: 2px; box-shadow: 0 0 4px black; border-radius: 50%;"
          >
            <Icon
              name="sad"
              alt="Got algorithm wrong"
              on:click={() => {
                nextAlg(false, user.uid, currAlgSet).then((res) => {
                  currAlg = res;
                  showSolution = false;
                  maybeLoadScramble();
                });
              }}
            />
          </div>
          <div
            class="bg-green-500 hover:bg-green-700 hover:cursor-pointer"
            style="max-width: 48px; max-height: 48px; padding: 2px; box-shadow: 0 0 4px black; border-radius: 50%;"
          >
            <Icon
              name="happy"
              alt="Got algorithm right"
              on:click={() => {
                nextAlg(true, user.uid, currAlgSet).then((res) => {
                  currAlg = res;
                  showSolution = false;
                  maybeLoadScramble();
                });
              }}
            />
          </div>
        </div>
        <button class="mt-4" on:click={() => (showSolution = !showSolution)}>
          {#if showSolution}
            solution: {applyAUFs(currAlg)}
          {:else}
            show solution
          {/if}
        </button>
        {#if showScramble}
          <p class="mt-4 text-white">scramble: {scramble}</p>
        {/if}
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
