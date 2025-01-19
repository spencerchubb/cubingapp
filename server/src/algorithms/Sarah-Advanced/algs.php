<script>
class Up extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--u-face)";
    }
}
class Down extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--d-face)";
    }
}
class Right extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--r-face)";
    }
}
class Left extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--l-face)";
    }
}
class Front extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--f-face)";
    }
}
class Back extends HTMLElement {
    connectedCallback() {
        this.style.background = "var(--b-face)";
    }
}
class Transparent extends HTMLElement {
    connectedCallback() {
        this.style.background = "transparent";
        this.style.border = "none";
    }
}

customElements.define("x-u", Up);
customElements.define("x-f", Front);
customElements.define("x-d", Down);
customElements.define("x-b", Back);
customElements.define("x-l", Left);
customElements.define("x-r", Right);
customElements.define("x-t", Transparent);
</script>
<h2 id="Pi_to_Vertical_U_Perm">Pi to Vertical U Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge y2 Sledge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge y2 Sledge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Sledge y2 Sledge</h3>
        <p>&#8226; (F R' F' R) y' (R' F R F') y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Sledge y2 Sledge</h3>
        <p>&#8226; (F R' F' R) y (R' F R F') y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y2 Sledge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y2 (R' F R F')</p>
    </div>
</div>
<h2 id="Pi_to_CW_U_Perm">Pi to CW U Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--f-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--l-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge z Sledge y2 Sledge z</h3>
        <p>&#8226; (R' F R F') z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--r-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y z Sledge y2 Sledge z</h3>
        <p>&#8226; (R' F R F') y z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' z Sledge y2 Sledge z</h3>
        <p>&#8226; (R' F R F') y' z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 z Sledge y2 Sledge z</h3>
        <p>&#8226; (R' F R F') y2 z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--f-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--l-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge z Sledge y2 Sledge z</h3>
        <p>&#8226; (F R' F' R) z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--r-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y z Sledge y2 Sledge z</h3>
        <p>&#8226; (F R' F' R) y z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' z Sledge y2 Sledge z</h3>
        <p>&#8226; (F R' F' R) y' z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y2 z Sledge y2 Sledge z</h3>
        <p>&#8226; (F R' F' R) y2 z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<h2 id="Pi_to_CCW_U_Perm">Pi to CCW U Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--f-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--r-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (R' F R F') z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (R' F R F') y z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--l-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (R' F R F') y' z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (R' F R F') y2 z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--f-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--r-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (F R' F' R) z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (F R' F' R) y z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--l-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (F R' F' R) y' z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y2 z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (F R' F' R) y2 z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<h2 id="Pi_to_Triple_Sledge">Pi to Triple Sledge</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--f-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge Sledge Sledge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--f-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge Sledge Sledge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--f-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Sledge Sledge Sledge</h3>
        <p>&#8226; (F R' F' R) y' (R' F R F') (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--f-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Sledge Sledge Sledge</h3>
        <p>&#8226; (F R' F' R) y (R' F R F') (R' F R F') (R' F R F')</p>
    </div>
</div>
<h2 id="Pi_+_U_Perm">Pi + U Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge y Sledge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge y' Sledge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Hedge y' Hedge</h3>
        <p>&#8226; (F R' F' R) y' (F R' F' R) y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Hedge y Hedge</h3>
        <p>&#8226; (F R' F' R) y (F R' F' R) y (F R' F' R)</p>
    </div>
</div>
<h2 id="Pi_+_Z_Perm_Conjugate">Pi + Z Perm Conjugate</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--l-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge y Hedge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--r-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge y' Hedge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--r-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Hedge y' Hedge</h3>
        <p>&#8226; (R' F R F') y (F R' F' R) y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--l-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Hedge y Hedge</h3>
        <p>&#8226; (R' F R F') y' (F R' F' R) y (F R' F' R)</p>
    </div>
</div>
<h2 id="Pi_+_Swirl_Perm">Pi + Swirl Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge y' Sledge y Hedge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') y' (R' F R F') y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge y Sledge y' Hedge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') y (R' F R F') y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Hedge y Hedge y' Sledge</h3>
        <p>&#8226; (F R' F' R) y' (F R' F' R) y (F R' F' R) y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Hedge y' Hedge y Sledge</h3>
        <p>&#8226; (F R' F' R) y (F R' F' R) y' (F R' F' R) y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge y' Hedge y Sledge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') y' (F R' F' R) y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge y Hedge y' Sledge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') y (F R' F' R) y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Hedge y Sledge y' Hedge</h3>
        <p>&#8226; (F R' F' R) y' (F R' F' R) y (R' F R F') y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Hedge y' Sledge y Hedge</h3>
        <p>&#8226; (F R' F' R) y (F R' F' R) y' (R' F R F') y (F R' F' R)</p>
    </div>
</div>
<h2 id="Pi_+_Wat_Perm">Pi + Wat Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Hedge y Sledge y Sledge</h3>
        <p>&#8226; (R' F R F') y2 (F R' F' R) y (R' F R F') y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Hedge y' Sledge y' Sledge</h3>
        <p>&#8226; (R' F R F') y2 (F R' F' R) y' (R' F R F') y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y2 Sledge y' Hedge y' Hedge</h3>
        <p>&#8226; (F R' F' R) y2 (R' F R F') y' (F R' F' R) y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y2 Sledge y Hedge y Hedge</h3>
        <p>&#8226; (F R' F' R) y2 (R' F R F') y (F R' F' R) y (F R' F' R)</p>
    </div>
</div>
<h2 id="Pure_Pi_+_U_Perm">Pure Pi + U Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--l-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge Sledge y2 z Sledge y2 Sledge z</h3>
        <p>&#8226; (R' F R F') (R' F R F') y2 z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--f-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge Sledge z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (R' F R F') (R' F R F') z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--f-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge Sledge z Sledge y2 Sledge z</h3>
        <p>&#8226; (R' F R F') (R' F R F') z (R' F R F') y2 (R' F R F') z</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--r-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge Sledge y2 z' Sledge y2 Sledge z'</h3>
        <p>&#8226; (R' F R F') (R' F R F') y2 z' (R' F R F') y2 (R' F R F') z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge Sledge y Sledge y2 Sledge</h3>
        <p>&#8226; (R' F R F') (R' F R F') y (R' F R F') y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge Sledge y' Sledge y2 Sledge</h3>
        <p>&#8226; (R' F R F') (R' F R F') y' (R' F R F') y2 (R' F R F')</p>
    </div>
</div>
<h2 id="Peanut">Peanut</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge Sledge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge Sledge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Sledge Sledge</h3>
        <p>&#8226; (F R' F' R) y' (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Sledge Sledge</h3>
        <p>&#8226; (F R' F' R) y (R' F R F') (R' F R F')</p>
    </div>
</div>
<h2 id="Peanut_to_Pure_Pi">Peanut to Pure Pi</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Hedge y Sledge Sledge</h3>
        <p>&#8226; (R' F R F') y2 (F R' F' R) y (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Hedge y' Sledge Sledge</h3>
        <p>&#8226; (R' F R F') y2 (F R' F' R) y' (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--b-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y2 Sledge y' Sledge Sledge</h3>
        <p>&#8226; (F R' F' R) y2 (R' F R F') y' (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y2 Sledge y Sledge Sledge</h3>
        <p>&#8226; (F R' F' R) y2 (R' F R F') y (R' F R F') (R' F R F')</p>
    </div>
</div>
<h2 id="Peanut_+_U_Perm">Peanut + U Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge y Hedge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge y' Hedge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Hedge y Hedge</h3>
        <p>&#8226; (R' F R F') y (F R' F' R) y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Hedge y' Hedge</h3>
        <p>&#8226; (R' F R F') y' (F R' F' R) y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Hedge y' Sledge</h3>
        <p>&#8226; (F R' F' R) y' (F R' F' R) y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Hedge y Sledge</h3>
        <p>&#8226; (F R' F' R) y (F R' F' R) y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--l-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Sledge y' Sledge</h3>
        <p>&#8226; (F R' F' R) y' (R' F R F') y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Sledge y Sledge</h3>
        <p>&#8226; (F R' F' R) y (R' F R F') y (R' F R F')</p>
    </div>
</div>
<h2 id="Peanut_+_Z_Perm_Conjugate">Peanut + Z Perm Conjugate</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge y2 Hedge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') y2 (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge y2 Hedge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') y2 (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Hedge y2 Sledge</h3>
        <p>&#8226; (R' F R F') y (F R' F' R) y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Hedge y2 Sledge</h3>
        <p>&#8226; (R' F R F') y' (F R' F' R) y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Hedge y2 Sledge</h3>
        <p>&#8226; (F R' F' R) y (F R' F' R) y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Hedge y2 Sledge</h3>
        <p>&#8226; (F R' F' R) y' (F R' F' R) y2 (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Sledge y2 Hedge</h3>
        <p>&#8226; (F R' F' R) y (R' F R F') y2 (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Sledge y2 Hedge</h3>
        <p>&#8226; (F R' F' R) y' (R' F R F') y2 (F R' F' R)</p>
    </div>
</div>
<h2 id="Peanut_+_Wat_Perm">Peanut + Wat Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y Sledge y Sledge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y (R' F R F') y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y' Sledge y' Sledge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y' (R' F R F') y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--l-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y' Hedge y Hedge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y' (F R' F' R) y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y Hedge y Hedge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y (F R' F' R) y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y Sledge y Hedge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y (R' F R F') y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y' Sledge y' Hedge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y' (R' F R F') y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--r-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y Hedge y Sledge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y (F R' F' R) y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--b-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--f-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y2 Sledge y' Hedge y' Sledge</h3>
        <p>&#8226; (R' F R F') y2 (R' F R F') y' (F R' F' R) y' (R' F R F')</p>
    </div>
</div>
<h2 id="Peanut_+_Swirl_Perm">Peanut + Swirl Perm</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge y' Sledge y Sledge</h3>
        <p>&#8226; (R' F R F') y (R' F R F') y' (R' F R F') y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge y Sledge y' Sledge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F') y (R' F R F') y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Hedge y Hedge y' Hedge</h3>
        <p>&#8226; (F R' F' R) y' (F R' F' R) y (F R' F' R) y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Hedge y' Hedge y Hedge</h3>
        <p>&#8226; (F R' F' R) y (F R' F' R) y' (F R' F' R) y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Hedge y' Sledge y Hedge</h3>
        <p>&#8226; (R' F R F') y (F R' F' R) y' (R' F R F') y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Hedge y Sledge y' Hedge</h3>
        <p>&#8226; (R' F R F') y' (F R' F' R) y (R' F R F') y' (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--r-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Sledge y Hedge y' Sledge</h3>
        <p>&#8226; (F R' F' R) y' (R' F R F') y (F R' F' R) y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--l-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--b-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--f-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Sledge y' Hedge y Sledge</h3>
        <p>&#8226; (F R' F' R) y (R' F R F') y' (F R' F' R) y (R' F R F')</p>
    </div>
</div>
<h2 id="Miscellaneous">Miscellaneous</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--r-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--b-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--l-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--f-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge Sledge y' Sledge Sledge</h3>
        <p>&#8226; (R' F R F') (R' F R F') y' (R' F R F') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--f-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--l-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--b-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--r-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge Sledge Sledge</h3>
        <p>&#8226; (R' F R F') (R' F R F') (R' F R F')</p>
    </div>
</div>