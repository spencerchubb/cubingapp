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
<h2 id="O">O</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>O Adjacent</h3>
        <p>&#8226; R U' F U' R' U' R U F' U2' R'</p><p>&#8226; R U R' F' R U R' U' R' F R2 U' R'</p><p>&#8226; R U2 R' U' R U2 L' U R' U' L </p><p>&#8226; R' U2' R U R' U2' L U' R U L'</p><p>&#8226; r' U2' R U R' U' U' z U R' D R u' z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>O Diagonal</h3>
        <p>&#8226; R' U R U' R' f' U' R U2 R' U' R U' R' f R</p><p>&#8226; F R U' R' U' R U R' F' R U R' U' R' F R F'</p><p>&#8226; R U2' R' U2 F' R U' R' F R' F' R F</p><p>&#8226; x U' R' U R U' x' R U R' F U2' R U2 R'</p><p>&#8226; R' U R U' x' U R U2 R' U' R U' R' U2 R U R' U' x</p>
    </div>
</div>
<h2 id="H">H</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-b></x-b><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H Columns</h3>
        <p>&#8226; U R' U' R U' R' U R U' R' U2 R</p><p>&#8226; R' U2' R U R' U' R U R' U R</p><p>&#8226; U R U R' U R U' R' U R U2' R'</p><p>&#8226; r' U2' R U' R' U' R U R' U r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-f></x-f><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H Rows</h3>
        <p>&#8226; F R U R' U' R U R' U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-r></x-r><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H Column</h3>
        <p>&#8226; U' F R U R' U' R U' R' U R U R' F'</p><p>&#8226; U F R U' R' U R U2 R' U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-r></x-r><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H Row</h3>
        <p>&#8226; U' R U R' U R U r' F R' F' r</p><p>&#8226; U' R' U' R U' R' U' z U R' D R U' z'</p><p>&#8226; U' R U R' U R U L' U R' U' L</p><p>&#8226; U' R' U' R U' R' U' z U z' U' R U L'</p>
    </div>
</div>
<h2 id="Pi">Pi</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Right Bar</h3>
        <p>&#8226; F R U R' U' R U R' U' F'</p><p>&#8226; U2 F U R U' R' U R U' R' F'</p><p>&#8226; R U2 R2 U' R2 U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Backslash</h3>
        <p>&#8226; R' U2' R U R' U' R U2 R f' U' f</p><p>&#8226; U F R' F' R U2 R U' R' U R U2 R'</p><p>&#8226; U F U R U' R2 F' R U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi X</h3>
        <p>&#8226; U' F R U' R' U' R U R' U R U' R' F'</p><p>&#8226; U F U R U' R' U R U2' R' U' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Forward Slash</h3>
        <p>&#8226; R U2 R' U' R U R' U2 R' F R F'</p><p>&#8226; R U2 R' U2 R' F R2 U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Columns</h3>
        <p>&#8226; U2 R' F R F' r U' R' U' R U' r'</p><p>&#8226; U2 R' F R F' r U' r' U' R U' R'</p><p>&#8226; U2 r' F R F' r U' R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Left Bar</h3>
        <p>&#8226; U2 R' U' R U' R' U F' U F R</p><p>&#8226; U' R' U' R' F R F' R U' R' U2' R</p>
    </div>
</div>
<h2 id="U">U</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Forward Slash</h3>
        <p>&#8226; R' U2' R U2 F U' R' U R U F'</p><p>&#8226; r U' r' U' r U' r' U' F' U2 F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-l></x-l><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Backslash</h3>
        <p>&#8226; R' U R U2 R U2 R' U' R U' f' U' f</p><p>&#8226; R2 D' R U2 R' D R U2 R</p><p>&#8226; r2 D' R U2 R' D R U2 R</p><p>&#8226; x l2 x D' R U2 R' D R U2 R</p><p>&#8226; z U R2' U' R2 F' R U R' U' R' F z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Front Row</h3>
        <p>&#8226; R' U' R U' R' U2' R2 U R' U R U2' R'</p><p>&#8226; U' R' U' R U R' U R U2' R' U R U2' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Rows</h3>
        <p>&#8226; U2 F R U R' U' R' U R U' F' U R' U' R</p><p>&#8226; U R' U R U' F U R' U' R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-l></x-l><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>U X</h3>
        <p>&#8226; R' U2 R U F U' R' U2 R U F'</p><p>&#8226; F R U' R' U R U R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Back Row</h3>
        <p>&#8226; U' F R U R' U' F'</p><p>&#8226; U F U R U' R' F'</p>
    </div>
</div>
<h2 id="T">T</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Left Bar</h3>
        <p>&#8226; U' R U R' U' R' F R F'</p><p>&#8226; U' r U R' U' r' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Right Bar</h3>
        <p>&#8226; U' F R U' R' U R U R' F'</p><p>&#8226; U' R' U' R U R f' U' f</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-b></x-b><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Rows</h3>
        <p>&#8226; R U2 R' U' R U' R2 U2 R U R' U R</p><p>&#8226; U2 R' U2 R U R' U R2 U2 R' U' R U' R'</p><p>&#8226; U2 R U' R' U2' R U R' U2' R U R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Front Row</h3>
        <p>&#8226; r' U r U2 R2 F R F' R</p><p>&#8226; R' U R U2 R' L' U R U' r x'</p><p>&#8226; R' U r U2 R2 F R F' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-b></x-b><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Back Row</h3>
        <p>&#8226; U2 F R U R' U' R U' R' U' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Columns</h3>
        <p>&#8226; R' U' R U' R' U R U' R' U F' U F R</p><p>&#8226; U2 R' F' U' F U' R U R' U' R U R' U R</p>
    </div>
</div>
<h2 id="Sune">Sune</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Left Bar</h3>
        <p>&#8226; U R U R' U R U2 R'</p><p>&#8226; R' U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune X</h3>
        <p>&#8226; U' R' U2' R U2 R f' U' f</p><p>&#8226; U F U R U2' R' U' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Forward Slash</h3>
        <p>&#8226; U F R' F' R U2 R U2 R'</p><p>&#8226; U M' F R' F' r U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Columns</h3>
        <p>&#8226; U2 R' U' R U' R' U2 F R F' r U r'</p><p>&#8226; F U' R' U R U F' U2 R f' U' f</p><p>&#8226; U R U R' U' R' F R F' R U R' U R U2' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-b></x-b><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Right Bar</h3>
        <p>&#8226; U' R U R' U R' F R F' R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Backslash</h3>
        <p>&#8226; U r U' r' F R' F' R</p><p>&#8226; U R U' r' F R' F' r</p>
    </div>
</div>
<h2 id="Antisune">Antisune</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Right Bar</h3>
        <p>&#8226; U R' U' R U' R' U2 R</p><p>&#8226; U2 R U2 R' U' R U' R'</p><p>&#8226; U r' U' R U' R' U2 r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Columns</h3>
        <p>&#8226; r U' r' F R' F' U2' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Backslash</h3>
        <p>&#8226; U2 F R U' R' U R U2 R' U' F'</p><p>&#8226; U' F' r U r' U2 r' F2 r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune X</h3>
        <p>&#8226; U' R U2 R' U2 R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Forward Slash</h3>
        <p>&#8226; U' R' F R F' r U r'</p><p>&#8226; U' r' F R F' r U R'</p><p>&#8226; U R' U z U R' D R U'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Left Bar</h3>
        <p>&#8226; R' U' R U' R' U R' F R F' U R</p><p>&#8226; U R U2 R' F R' F' R U' R U' R'</p>
    </div>
</div>
<h2 id="L">L</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-b></x-b><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Best</h3>
        <p>&#8226; F R U' R' U' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-b></x-b><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Good</h3>
        <p>&#8226; F R' F' R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-f></x-f><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Pure</h3>
        <p>&#8226; U R' U' R U' R' U R U' R' U R U' R' U2' R</p><p>&#8226; U2 R U R' U R U' R' U R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-b></x-b><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-b></x-b><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Front Commutator</h3>
        <p>&#8226; U F U' R' U' R U F' U2' R' U2 R</p><p>&#8226; R' U' R U' R' U2' R2 U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Diagonal</h3>
        <p>&#8226; U2 R' U' R U' F U' R' U' R U F'</p><p>&#8226; R U2 R2 F R F' R U2' R'</p><p>&#8226; R U2 r2 F R F' R U2' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-f></x-f><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Back Commutator</h3>
        <p>&#8226; U R' U' R U' R U R' U R U2 f' U' f</p><p>&#8226; U' R' U2 R' D' R U2 R' D R2</p><p>&#8226; U' R' U2 R' D' R U2 R' D r2</p>
    </div>
</div>