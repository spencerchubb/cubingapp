<script lang="ts">
    export let originalText: string;
    export let clickedText: string;
    export let onClick: () => void;

    let clicked = false;

    function _onClick() {
        onClick();
        clicked = true;
        setTimeout(() => clicked = false, 2000);
    }
</script>

<button
    on:click={_onClick}
    style={$$props.style}
>
    {clicked ? clickedText : originalText}
</button>