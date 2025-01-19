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
<h2 id="1_Trigger">1 Trigger</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="#808080" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="#808080" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="#808080" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="#808080" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledgehammer</h3>
        <p>&#8226; R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="#808080" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="var(--u-face)" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="#808080" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="#808080" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="#808080" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedgeslammer</h3>
        <p>&#8226; F R' F' R</p>
    </div>
</div>
<h2 id="2_Triggers">2 Triggers</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="#808080" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="#808080" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="#808080" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="#808080" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Double Sledge</h3>
        <p>&#8226; (R' F R F') (R' F R F')</p><p>&#8226; y2 (F R' F' R) (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="#808080" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="#808080" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="#808080" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="#808080" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="var(--u-face)" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y Sledge</h3>
        <p>&#8226; (R' F R F') y (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="#808080" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="#808080" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="#808080" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="#808080" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Sledge</h3>
        <p>&#8226; (R' F R F') y' (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="#808080" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="#808080" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="#808080" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="#808080" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="var(--u-face)" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y Hedge</h3>
        <p>&#8226; (F R' F' R) y (F R' F' R)</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="#808080" points="500,250 750,500 500,750 250,500" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="var(--u-face)" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="#808080" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="var(--u-face)" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="#808080" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="#808080" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Hedge y' Hedge</h3>
        <p>&#8226; (F R' F' R) y' (F R' F' R)</p>
    </div>
</div>
<h2 id="3_Triggers">3 Triggers</h2>
<div class="alg-card">
    <div class="viz-2d-Skewb">
        <svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
            <polygon fill="var(--u-face)" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="var(--u-face)" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="#808080" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="#808080" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="#808080" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="#808080" points="10,750 10,250 250,500" />
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
            <polygon fill="#808080" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="var(--u-face)" points="250,750 500,750 250,995" />
            <polygon fill="#808080" points="500,750 750,995 250,995" />
            <polygon fill="var(--u-face)" points="750,750 500,750 750,995" />
            <polygon fill="#808080" points="750,750 750,500 990,750" />
            <polygon fill="#808080" points="990,750 990,250 750,500" />
            <polygon fill="var(--u-face)" points="750,250 750,500 990,250" />
            <polygon fill="#808080" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="#808080" points="750,250 500,250 750,10" />
            <polygon fill="#808080" points="250,750 250,500 10,750" />
            <polygon fill="#808080" points="10,750 10,250 250,500" />
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
            <polygon fill="#808080" points="500,250 750,500 500,750 250,500" />
            <polygon fill="#808080" points="250,250 500,250 250,500" />
            <polygon fill="#808080" points="750,250 500,250 750,500" />
            <polygon fill="#808080" points="750,500 500,750 750,750" />
            <polygon fill="#808080" points="250,500 500,750 250,750" />
            <polygon fill="#808080" points="250,750 500,750 250,995" />
            <polygon fill="#808080" points="500,750 750,995 250,995" />
            <polygon fill="#808080" points="750,750 500,750 750,995" />
            <polygon fill="var(--u-face)" points="750,750 750,500 990,750" />
            <polygon fill="#808080" points="990,750 990,250 750,500" />
            <polygon fill="#808080" points="750,250 750,500 990,250" />
            <polygon fill="var(--u-face)" points="250,250 500,250 250,10" />
            <polygon fill="var(--u-face)" points="500,250 250,10 750,10" />
            <polygon fill="var(--u-face)" points="750,250 500,250 750,10" />
            <polygon fill="var(--u-face)" points="250,750 250,500 10,750" />
            <polygon fill="#808080" points="10,750 10,250 250,500" />
            <polygon fill="#808080" points="250,250 250,500 10,250" />
        </svg>
    </div>
    <div class="info">
        <h3>Sledge y' Hedge y Hedge</h3>
        <p>&#8226; (R' F R F') y' (F R' F' R) y (F R' F' R)</p>
    </div>
</div>