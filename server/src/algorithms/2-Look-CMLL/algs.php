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
<h2 id="Orient">Orient</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune</h3>
        <p>&#8226; R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-r></x-r><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune</h3>
        <p>&#8226; R U2 R' U' R U' R'<span class="note">Inverse of Sune</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-b></x-b><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H CMLL</h3>
        <p>&#8226; U R U R' U R U' R' U R U2 R'<span class="note">Double Sune with cancellation</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>T CMLL</h3>
        <p>&#8226; R U R' U' R' F R F'<span class="note">Sexy sledge</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-b></x-b><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>L CMLL</h3>
        <p>&#8226; F R' F' R U R U' R'<span class="note">Inverse of T CMLL</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>U CMLL</h3>
        <p>&#8226; F (R U R' U') F'<span class="note">F sexy F'</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi CMLL</h3>
        <p>&#8226; F (R U R' U') (R U R' U') F'<span class="note">F double sexy F'</span></p>
    </div>
</div>
<h2 id="Permute">Permute</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Adjacent Swap</h3>
        <p>&#8226; R U R' F' R U R' U' R' F R2 U' R' U'<span class="note">J Perm</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Diagonal Swap</h3>
        <p>&#8226; F R U' R' U' R U R' F' R U R' U' R' F R F'<span class="note">Y Perm</span></p>
    </div>
</div>