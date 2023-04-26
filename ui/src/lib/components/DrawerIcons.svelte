<script lang="ts">
    import NavBarIcon from "./NavBarIcon.svelte";

    export let iconNames = [];
    export let drawerIndex = -1;

    function toggleDrawer(index) {
        if (drawerIndex === index) {
            drawerIndex = -1;
        } else {
            drawerIndex = index;
        }
    }
</script>

<div class="row">
    {#each iconNames as name, i}
        <NavBarIcon {name} on:click={() => toggleDrawer(i)} />
    {/each}
</div>
