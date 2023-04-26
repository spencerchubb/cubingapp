<script>
    export let name;
    export let fill = "white";
    export let stroke = "white";
    let icons = {
        edit: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>`,
        happy: `<svg stroke="${stroke}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,33 Q 25,40 35,33"/>
        </svg>`,
        pause: `<svg stroke="${stroke}" fill="${stroke}" viewBox="0 0 100 100">
            <rect x="10" y="10" width="30" height="80" />
            <rect x="60" y="10" width="30" height="80" />
        </svg>`,
        play: `<svg stroke="${stroke}" viewBox="0 0 100 100">
            <polygon points="10,0 90,50 10,100" fill="${fill}" />    
        </svg>`,
        plus: `<svg stroke="${stroke}" fill="white" x="0" y="0" viewBox="0 0 100 100" stroke-width="10" stroke-linecap="round">
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
        </svg>`,
        retry: `<svg stroke="${stroke}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50">
            <path d="M 42,32 A 20,20,0,1,1,42,18"/>
            <path fill="white" fill-opacity="1" d="M 44,22 L 34,17 L 45,12  Z"/>
        </svg>`,
        sad: `<svg stroke="${stroke}" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
            <circle cx="25" cy="25" r="22" />
            <circle cx="18" cy="20" r="3" />
            <circle cx="32" cy="20" r="3" />
            <path d="M 15,35 Q 25,28 35,35"/>
        </svg>`,
        x: `<svg viewBox="0 0 24 24" stroke="${stroke}">
            <path d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>`,
    };
    $: displayIcon = icons[name];
</script>

<button
    on:click
    id={$$props.id}
    class={$$props.class}
    style={$$props.style}
>
    {@html displayIcon}
</button>

<style>
    button {
        background: transparent;
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;

        /* Remove extra space at the bottom of inline elements */
        font-size: 0;
    }

    :global(svg) {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>