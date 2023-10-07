<div id="menuBackground" style="display: none; width: 100vw; height: 100vh; position: absolute; top: 0; left: 0;"></div>
<div
    id="menuBody"
    style="
        top: 0;
        left: 0;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
        position: absolute;
        background: var(--gray-700);
        min-width: 200px;
        height: 100vh;"
>
    <div class="row" style="justify-content: space-between; padding: 8px;">
        <h5 style="color: white; font-size: 1.2rem;">Menu</h5>
        <button
            id="menuClose"
            class="btn-transparent"
            style="width: 36px; padding: 4px;"
        >
            <svg viewBox="0 0 24 24" stroke="white" stroke-width="2">
                <path d="M 2 2 L 22 22 M 22 2 L 2 22" />
            </svg>
        </button>
    </div>
    <div style="display: flex; flex-direction: column; padding: 8px; gap: 12px;">
        <a href="/algdb.html">
            <button>
                <span>📚</span>Alg DB
            </button>
        </a>
        <a href="/recon.html">
            <button>
                <span>✍</span>Recon Tool
            </button>
        </a>
        <a href="/train.html">
            <button>
                <span>🧠</span>Train
            </button>
        </a>
    </div>
</div>

<script>
    const menuIcon = document.getElementById("menuIcon");
    const menuBackground = document.getElementById("menuBackground");
    const menuBody = document.getElementById("menuBody");
    const menuClose = document.getElementById("menuClose");

    function open() {
        menuBackground.style.display = "block";
        menuBody.style.transform = "translateX(0)";
    }
    
    function close() {
        menuBackground.style.display = "none";
        menuBody.style.transform = "translateX(-100%)";
    }

    menuIcon.onclick = open;
    menuBackground.onclick = close;
    menuClose.onclick = close;
</script>

<style>
    a button {
        width: 100%;
        text-align: left;
        padding-left: 0;
    }

    a button span {
        width: 48px;
        display: inline-block;
        text-align: center;
    }
</style>