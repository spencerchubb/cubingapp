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
<h2 id="3-mover">3-mover</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-d></x-d><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Front Arrow</h3>
        <p>&#8226; M' U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><div></div><x-f></x-f><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Back Arrow</h3>
        <p>&#8226; M U M'</p>
    </div>
</div>
<h2 id="5-mover">5-mover</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 2</h3>
        <p>&#8226; M2 U' M' U' M'</p>
    </div>
</div>
<h2 id="7-mover">7-mover</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-d></x-d><x-f></x-f><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Front 1 / 1</h3>
        <p>&#8226; M U' M' U' M U' M'</p><p>&#8226; M U M' U M U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><div></div><x-b></x-b><x-d></x-d><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Back 1 / 1</h3>
        <p>&#8226; M' U' M U' M' U' M'</p><p>&#8226; M' U M U M' U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 0</h3>
        <p>&#8226; M' U' M' U2 M' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-d></x-d><x-d></x-d><x-u></x-u><x-u></x-u><div></div><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><x-d></x-d><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 2</h3>
        <p>&#8226; M' U2 M' U2 M U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-d></x-d><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><x-d></x-d><x-b></x-b><div></div><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 0</h3>
        <p>&#8226; M' U' M U M' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-d></x-d><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>0 / 2</h3>
        <p>&#8226; M' U' M' U M U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><x-d></x-d><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>4 / 0</h3>
        <p>&#8226; M' U2 M' U2 M' U' M'</p><p>&#8226; M' U2 M' U2 M' U M'</p>
    </div>
</div>
<h2 id="11-mover">11-mover</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-d></x-d><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>All 6</h3>
        <p>&#8226; M' U' M' U2 M' U' M U' M' U' M'</p>
    </div>
</div>