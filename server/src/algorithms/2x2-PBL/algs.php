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
<div class="alg-card">
    <div class="viz-2x2">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-r></x-r><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-f></x-f><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Adj</h3>
        <p>&#8226; R U R' F' R U R' U' R' F R2 U' R' U'</p><p>&#8226; U R' F R F' R U2 R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2x2">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-b></x-b><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Diag</h3>
        <p>&#8226; R U' R' U' F2 U' R U R' U F2</p><p>&#8226; F R U' R' U' R U R' F' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2x2">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-b></x-b><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-l></x-l><x-l></x-l></div></div>
    </div>
    <div class="info">
        <h3>Diag Diag</h3>
        <p>&#8226; R2 F2 R2</p><p>&#8226; R2 B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2x2">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-r></x-r><x-r></x-r><x-l></x-l><x-l></x-l></div><div><x-f></x-f><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Adj Adj</h3>
        <p>&#8226; R2 U' R2 U2 F2 U' R2</p><p>&#8226; R2 U' B2 U2 R2 U' R2'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2x2">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-f></x-f><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-b></x-b><x-l></x-l></div></div>
    </div>
    <div class="info">
        <h3>Adj Diag</h3>
        <p>&#8226; U2 R' U R' F2 R F' R</p><p>&#8226; R' F R' F2 R U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2x2">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-b></x-b><x-r></x-r></div><div><x-l></x-l><x-b></x-b><x-r></x-r><x-f></x-f></div></div>
    </div>
    <div class="info">
        <h3>Diag Adj</h3>
        <p>&#8226; R2 U R2 U' R2 U R2 U' R2</p><p>&#8226; R' D R' F2 R D' R</p>
    </div>
</div>