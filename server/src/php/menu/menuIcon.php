<button id="menuIcon" class="btn-transparent" style="padding: 0;">
    <svg
        style="width: 48px; height: 48px; padding: 6px;"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round">
        <line x1="3" y1="5" x2="21" y2="5"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="19" x2="21" y2="19"></line>
    </svg>
</button>
<a class="navbar-link" href="/">Home</a>
<a class="navbar-link" href="/kinch-ranks/">Kinch</a>
<a class="navbar-link" href="/sum-of-ranks/">Sum of Ranks</a>
<a class="navbar-link" href="/algorithms/">Algs</a>

<style>
    .navbar-link {
        height: 100%;
        cursor: pointer;
        color: white;
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-radius: 8px;
        transition: all 0.15s ease-in-out;
    }

    .navbar-link:hover {
        background: var(--gray-500);
    }

    /* Hide menu icon above 600px */
    @media (min-width: 601px) {
        #menuIcon {
            display: none;
        }
    }

    /* Hide links below 600px */
    @media (max-width: 600px) {
        .navbar-link {
            display: none;
        }
    }
</style>