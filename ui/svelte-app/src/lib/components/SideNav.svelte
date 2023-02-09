<script lang="ts">
    export let open: boolean;
    export let onClose = () => {};

    $: style = `position: fixed; top: 0; left: 0; width: 300px; height: 100%; background-color: #2f2f32; z-index: 10; ${open
        ? "transform: translateX(0); transition: transform 0.3s ease-in-out"
        : "transform: translateX(-100%); transition: transform 0.3s ease-in-out"}`;

    function goTo(location) {
        document.location = location;
    }
</script>

<div {style}>
    <div class="row" style="justify-content: space-between; padding: 8px;">
        <h5 style="color: white; font-size: 1.2rem;">Menu</h5>
        <button class="xButton" on:click={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="white">
                <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
            </svg>
        </button>
    </div>
    <div style="display: flex; flex-direction: column;">
        <div style="height: 8px;"></div>
        <a class="btn-primary" href="learn.html">
            Learn
        </a>
        <div style="height: 8px;"></div>
        <a class="btn-primary" href="play.html">
            Play
        </a>
        <div style="height: 8px;"></div>
        <a class="btn-primary" href="train.html">
            Train
        </a>
        <div style="height: 8px;"></div>
        <a class="btn-primary" href="cuble.html">
            Cuble
        </a>
    </div>
</div>