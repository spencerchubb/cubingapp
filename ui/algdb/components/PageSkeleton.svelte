<script lang="ts">
    import SideNav from "../../src/lib/components/SideNav.svelte";
    import NavBarIcon from "../../src/lib/components/NavBarIcon.svelte";
    import MenuIcon from "../../src/lib/components/icons/MenuIcon.svelte";
    import GithubIcon from "../../src/lib/components/icons/GithubIcon.svelte";

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <a class="link" href="https://forms.gle/VBNee1DN55hsneDeA">
            Suggest algs
        </a>
        <a href="https://github.com/spencerchubb/algdb/">
            <NavBarIcon>
                <GithubIcon />
            </NavBarIcon>
        </a>
    </nav>
    <slot></slot>
    <SideNav bind:open={sideNavOpen} />
</main>