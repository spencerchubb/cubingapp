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
<h2 id="Edges">Edges</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>Bar</h3>
        <p>&#8226; F (R U R' U') F'<span class="note">F sexy F'</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>L shape</h3>
        <p>&#8226; F (U R U' R') F'<span class="note">F inverse sexy F'</span></p>
    </div>
</div>
<h2 id="Corners">Corners</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune</h3>
        <p>&#8226; R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune</h3>
        <p>&#8226; R U2 R' U' R U' R'<span class="note">Inverse of Sune</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H OLL</h3>
        <p>&#8226; U R U R' U R U' R' U R U2 R'<span class="note">Double Sune with cancellation</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>T OLL</h3>
        <p>&#8226; r U R' U' r' F R F'<span class="note">Sexy sledge with wide moves</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>L OLL</h3>
        <p>&#8226; F R' F' r U R U' r'<span class="note">Inverse of T OLL</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi OLL</h3>
        <p>&#8226; R U2 R2' U' R2 U' R2' U2' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>U OLL</h3>
        <p>&#8226; R2 D' R U2 R' D R U2 R</p>
    </div>
</div>