<script lang="ts">
    import Hoverable from "./Hoverable.svelte";
    import Icon from "./Icon.svelte";


    export let open: boolean;
    export let onClose = () => {};

    $: style = `position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: #2f2f32; z-index: 10; ${open
        ? "transform: translateX(0); transition: transform 0.3s ease-in-out"
        : "transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`;
</script>

<div {style}>
    <div class="row" style="justify-content: space-between; padding: 8px;">
        <h5 style="color: white; font-size: 1.2rem;">Menu</h5>
        <Hoverable hovBackground="#444" borderRadius="4px">
            <Icon
                name="x"
                on:click={onClose}
                style="padding: 4px;"
            />
        </Hoverable>
    </div>
    <div style="display: flex; flex-direction: column; padding: 0 8px;">
        <div style="height: 8px;"></div>
        <a href="learn.html">
            <button style="width: 100%;">
                Learn
            </button>
        </a>
        <div style="height: 8px;"></div>
        <a href="play.html">
            <button style="width: 100%;">
                Play
            </button>
        </a>
        <div style="height: 8px;"></div>
        <a href="train.html">
            <button style="width: 100%;">
                Train
            </button>
        </a>
        <div style="height: 8px;"></div>
        <a href="cuble.html">
            <button style="width: 100%;">
                Cuble
            </button>
        </a>
    </div>
</div>