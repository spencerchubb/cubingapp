<script lang="ts">
    import SideNav from "../src/lib/components/SideNav.svelte";
    import NavBarIcon from "../src/lib/components/NavBarIcon.svelte";
    import { algSets } from "./algSets";

    function getAlgSetUrl(algSet: string): string {
        return `algdb/${algSet.replaceAll(" ", "-")}.html`;
    }

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon name="menu" on:click={() => (sideNavOpen = true)} />
        <a href="https://github.com/spencerchubb/algdb/">
            <NavBarIcon name="github" />
        </a>
    </nav>
    <div
        class="col"
        style="width: 100%; gap: 16px; padding: 16px; overflow-y: auto;"
    >
        <h1>Alg Database</h1>
        <p style="font-style: italic;">
            Open source database with 1000+ vetted algorithms
        </p>
        {#each algSets as algSet}
            <a
                style="width: 100%; max-width: 400px; padding: 16px; gap: 16px;"
                class="card row"
                href={getAlgSetUrl(algSet.name)}
            >
                <p style="font-weight: bold; font-size: 1.75rem; line-height: 1.75rem;">
                    {algSet.name}
                </p>
                <p style="font-size: 1.5rem;">
                    {algSet.cases} cases
                </p>
            </a>
        {/each}
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    .card {
        background: transparent;
        border: solid 1px var(--gray-500);
        box-shadow: 0 0 4px 2px var(--gray-600);
        border-radius: 16px;
    }

    .card:hover {
        background: var(--gray-600);
    }
</style>
