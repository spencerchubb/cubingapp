<script lang="ts">
    import { onMount } from "svelte";

    export let text: string = "";

    let tooltip: HTMLElement;
    let span: HTMLElement;

    onMount(() => {
        // Set the title for accessibility
        (tooltip.firstChild as HTMLElement).title = text;

        const tooltipRect = tooltip.getBoundingClientRect();
        const spanRect = span.getBoundingClientRect();

        const left = tooltipRect.width / 2 - spanRect.width / 2;
        const top = tooltipRect.height + 12;

        span.style.left = `${left}px`;
        span.style.top = `${top}px`;
    });
</script>

<div class="tooltip" bind:this={tooltip}>
    <slot title={text}></slot>
    <span bind:this={span}>{text}</span>
</div>

<style>
    .tooltip {
        position: relative;
    }

    .tooltip span {
        white-space: nowrap;
        background-color: var(--gray-900);
        color: var(--gray-100);
        padding: 0.3rem 0.6rem;
        outline: solid 1px var(--gray-600);
        border-radius: 4px;
        position: absolute;
        z-index: 1;
        visibility: hidden;
    }

    /* Styles for desktop hover (not mobile) */
    @media (hover: hover) {
        .tooltip:hover span {
            visibility: visible;
        }
    }
</style>
