<!-- TODO consolidate DrawerIcon and NavBarIcon -->
<button class="icon" on:click>
    <slot></slot>
</button>

<style>
    :global(.icon) {
        width: 48px;
        height: 48px;
        padding: 8px;
        touch-action: none;
        background-color: transparent;
        border-radius: 0;
    }

    :global(.icon:hover) {
        background-color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }
</style>
