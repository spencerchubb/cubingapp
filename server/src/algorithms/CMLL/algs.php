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
        <p>&#8226; R U R' F' R U R' U' R' F R2 U' R'</p><p>&#8226; R U R' U' R' F R2 U' R' U' R U R' F'</p><p>&#8226; r U R' F' R U R' U' R' F R2 U' r'</p><p>&#8226; R U2 R' U' R U2 L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>O Diagonal</h3>
        <p>&#8226; F R U' R' U' R U R' F' R U R' U' R' F R F'</p><p>&#8226; F R' F R2 U' R' U' R U R' F' R U R' U' F'</p><p>&#8226; R U' R2 F R F' R U' B U2 B' R'</p><p>&#8226; r2 D' r U' r' D r2 F' r' U r F</p>
    </div>
</div>
<h2 id="H">H</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-b></x-b><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H Columns</h3>
        <p>&#8226; U R U R' U R U' R' U R U2 R'</p><p>&#8226; R U2 R' U' R U R' U' R U' R'</p><p>&#8226; r U' r' U' r U' r' U r U r'</p><p>&#8226; r U' r' U' r U r' U r U r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-f></x-f><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H Rows</h3>
        <p>&#8226; F U R U' R' U R U' R' U R U' R' F'</p><p>&#8226; F R U R' U' R U R' U' R U R' U' F'</p><p>&#8226; F U' R2 D R' U2 R D' R2 U F'</p><p>&#8226; F R U r' U' R U R' U' R U R' M' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-b></x-b><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H Column</h3>
        <p>&#8226; U R U2 R2 F R F' U2 R' F R F'</p><p>&#8226; R' F2 D R2 U R2 D' F2 R</p><p>&#8226; U' F R U R' U' R U' R' U R U R' F'</p><p>&#8226; U F R U R' U' F' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-f></x-f><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>H Row</h3>
        <p>&#8226; U2 r U' r2 D' r U' r' D r2 U r'</p><p>&#8226; U' R U R' U R U r' F R' F' r</p><p>&#8226; U' R U R' U R U L' U R' U' L</p><p>&#8226; U2 R U' R2 D' r U' r' D R2 U R'</p>
    </div>
</div>
<h2 id="Pi">Pi</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Right Bar</h3>
        <p>&#8226; F R U R' U' R U R' U' F'</p><p>&#8226; U2 F U R U' R' U R U' R' F'</p><p>&#8226; r' U r2 U' r2 U' r2 U r'</p><p>&#8226; R' U2 R2 U R2 U R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Backslash</h3>
        <p>&#8226; U F R' F' R U2 R U' R' U R U2 R'</p><p>&#8226; U F U R U' R2 F' R U2 R U2 R'</p><p>&#8226; U M F R' F' r U2 R U' R' U R U2 R'</p><p>&#8226; R' U2 R U R' U' R U2 R f' U' f</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi X</h3>
        <p>&#8226; U' R' F R U F U' R U R' U' F'</p><p>&#8226; R' F2 D R2 U' R2 D' F2 R</p><p>&#8226; r' F2 D R2 U' R2 D' F2 r</p><p>&#8226; U' F R U' R' U' R U R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Forward Slash</h3>
        <p>&#8226; R U2 R' U' R U R' U2 R' F R F'</p><p>&#8226; R U2 R' U2 R' F R2 U R' U' F'</p><p>&#8226; R U2 R' U' R U R' U2 r' F R F' M'</p><p>&#8226; R U R' U' R' F R2 U R' U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Columns</h3>
        <p>&#8226; U' r U' r2 D' r U r' D r2 U r'</p><p>&#8226; U2 R' F R F' r U' R' U' R U' r'</p><p>&#8226; U2 R' F R F' r U' r' U' R U' R'</p><p>&#8226; U' R U2 R' U R' D' R U2 R' D R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi Left Bar</h3>
        <p>&#8226; U' R' U' R' F R F' R U' R' U2 R</p><p>&#8226; R' F' U' F U' R U R' U R</p><p>&#8226; U2 R U R' U R U' B U' B' R'</p><p>&#8226; U' r U R' U R' F R F' R U' R' U R U2 r'</p>
    </div>
</div>
<h2 id="U">U</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Forward Slash</h3>
        <p>&#8226; U2 R2 D R' U2 R D' R' U2 R'</p><p>&#8226; r U' r' U' r U' r' U' F' U2 F</p><p>&#8226; U2 R r D r' U2 r D' r' U2 R'</p><p>&#8226; R' U2 R U2 F U' R' U R U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Backslash</h3>
        <p>&#8226; R2 D' R U2 R' D R U2 R</p><p>&#8226; R' F R U R' F R U F U2 F'</p><p>&#8226; U2 L2 D' L U2 L' D L U2 L</p><p>&#8226; R' r' D' r U2 r' D r U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Front Row</h3>
        <p>&#8226; R' U' R U' R' U2 R2 U R' U R U2 R'</p><p>&#8226; R2 F U' F U F2 R2 U' R' F R</p><p>&#8226; U2 R U R' U R U2 R2 U' R U' R' U2 R</p><p>&#8226; U' R U R' U' R U' R' U2 R U' R' U2 R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Rows</h3>
        <p>&#8226; U' F R2 D R' U R D' R2 U' F'</p><p>&#8226; U' R' U' R F R2 D' R U R' D R2 U' F'</p><p>&#8226; F U R2 D R' U' R D' R2 F'</p><p>&#8226; R' F R U' R' U' R U R' F' R U R' U' R' F R F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>U X</h3>
        <p>&#8226; U2 r U' r' U r' D' r U' r' D r</p><p>&#8226; r' U r' D' r U r' D r U' r</p><p>&#8226; U' R' D R U' R U' R' U R' D' R</p><p>&#8226; F R U' R' U R U R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-r></x-r><x-b></x-b><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>U Back Row</h3>
        <p>&#8226; U' F R U R' U' F'</p><p>&#8226; U F U R U' R' F'</p><p>&#8226; R' F' U' F U R</p>
    </div>
</div>
<h2 id="T">T</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Left Bar</h3>
        <p>&#8226; U' R U R' U' R' F R F'</p><p>&#8226; U L U L' U' L' f U f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Right Bar</h3>
        <p>&#8226; U L' U' L U L F' L' F</p><p>&#8226; U r' F' r U r U' r' F</p><p>&#8226; U' F R U' R' U R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Rows</h3>
        <p>&#8226; F R' F R2 U' R' U' R U R' F2</p><p>&#8226; R U2 R' U' R U' R2 U2 R U R' U R</p><p>&#8226; U' R U R' U R U2 R2 F' r U' r' F2 R</p><p>&#8226; R' U R U2 R' U' R U2 R' U' R U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Front Row</h3>
        <p>&#8226; r' U r U2 R2 F R F' R</p><p>&#8226; R U R2 F R F' U r U r'</p><p>&#8226; U2 r U' r' U' F R' F' R2 U' R'</p><p>&#8226; R' U r U2 R2 F R F' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Back Row</h3>
        <p>&#8226; r' D' r U r' D r U' r U r'</p><p>&#8226; U R' D R U' R U R' U R' D' R</p><p>&#8226; U2 F R U R' U' R U' R' U' R U R' F'</p><p>&#8226; R F R' U' R F' R' U R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>T Columns</h3>
        <p>&#8226; U2 r U' r2 D' r U2 r' D r2 U r'</p><p>&#8226; U2 r2 D' r U r' D r2 U' r' U' r</p><p>&#8226; R' U R2 D r' U2 r D' R2 U' R</p><p>&#8226; U2 R' F R2 F R' U2 R F' R2 F' R</p>
    </div>
</div>
<h2 id="Sune">Sune</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Left Bar</h3>
        <p>&#8226; U R U R' U R U2 R'</p><p>&#8226; U r U R' U R U2 r'</p><p>&#8226; R' U2 R U R' U R</p><p>&#8226; U' L U L' U L U2 L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-b></x-b><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune X</h3>
        <p>&#8226; U L' U2 L U2 L F' L' F</p><p>&#8226; U r' F2 r U2 r U' r' F</p><p>&#8226; U L' U2 L U2 r U' r' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Forward Slash</h3>
        <p>&#8226; U F R' F' R U2 R U2 R'</p><p>&#8226; U F U R U' R2 F' R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-f></x-f><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Columns</h3>
        <p>&#8226; R U R' U R U' R D R' U' R D' R2</p><p>&#8226; U R U R' U' R' F R F' R U R' U R U2 R'</p><p>&#8226; U2 R' F2 R2 U2 R' F R U2 R2 F2 R</p><p>&#8226; F R' U2 R F' R' F U2 F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-b></x-b><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Right Bar</h3>
        <p>&#8226; U' R U R' U R' F R F' R U2 R'</p><p>&#8226; U' R U R' U r' F R F' r U2 R'</p><p>&#8226; U' R U R' F' R U R' U R U2 R' F R U' R'</p><p>&#8226; U' R U R' U L' U R U' L U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sune Backslash</h3>
        <p>&#8226; U r U' r' F R' F' R</p><p>&#8226; U R U' L' U R' U' L</p><p>&#8226; U R U' r' F R' F' r</p><p>&#8226; U' L U' R' U L' U' R</p>
    </div>
</div>
<h2 id="Antisune">Antisune</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Right Bar</h3>
        <p>&#8226; U R' U' R U' R' U2 R</p><p>&#8226; U2 R U2 R' U' R U' R'</p><p>&#8226; U' L' U' L U' L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Columns</h3>
        <p>&#8226; U' R2 D R' U R D' R' U R' U' R U' R'</p><p>&#8226; U2 R' U' R U' R' U R' D' R U R' D R2</p><p>&#8226; U' R' F U2 F' R F R' U2 R F'</p><p>&#8226; U' L' U' L U L F' L' F L' U' L U' L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Backslash</h3>
        <p>&#8226; U' F' r U r' U2 r' F2 r</p><p>&#8226; U' F' L F L' U2 L' U2 L</p><p>&#8226; U2 F R U' R' U R U2 R' U' F'</p><p>&#8226; U' M F' r U R' U2 R' F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune X</h3>
        <p>&#8226; U' R U2 R' U2 R' F R F'</p><p>&#8226; U' R U2 R' U2 r' F R F' M'</p><p>&#8226; U' r U2 R' U2 R' F R F' M'</p><p>&#8226; U' R U R' U' R' F R2 U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Forward Slash</h3>
        <p>&#8226; U' R' F R F' r U r'</p><p>&#8226; U' r' F R F' r U R'</p><p>&#8226; U' L' U R U' L U R'</p><p>&#8226; U R' U L U' R U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Antisune Left Bar</h3>
        <p>&#8226; U R U2 R' F R' F' R U' R U' R'</p><p>&#8226; R' U' R U' R' U R' F R F' U R</p><p>&#8226; U R U2 r' F R' F' r U' R U' R'</p><p>&#8226; U L' U' L U' L F' L' F L' U2 L</p>
    </div>
</div>
<h2 id="L">L</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Best</h3>
        <p>&#8226; U' F' r U r' U' r' F r</p><p>&#8226; U2 F R U' R' U' R U R' F'</p><p>&#8226; R2 D' R U' R' D R U R</p><p>&#8226; U' F' L F L' U' L' U L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Good</h3>
        <p>&#8226; U2 F R' F' R U R U' R'</p><p>&#8226; U2 F R' F' r U R U' r'</p><p>&#8226; U' r U' r' U' F' U F</p><p>&#8226; U2 R U R' U' R' F R F' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Pure</h3>
        <p>&#8226; R U R' U R U' R' U R U' R' U R U2 R'</p><p>&#8226; R U2 R' U' R U R' U' R U R' U' R U' R'</p><p>&#8226; R U R' U r U' R' U R U' R' U R U2 r'</p><p>&#8226; U' R' U2 R U R' U' R U R' U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-f></x-f><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Front Commutator</h3>
        <p>&#8226; U2 R U2 R D R' U2 R D' R2</p><p>&#8226; U2 R U2 r D r' U2 r D' r' R'</p><p>&#8226; R U R' U R' F R F' U2 R' F R F'</p><p>&#8226; U r' D' r U2 r' D r U2 r U r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Diagonal</h3>
        <p>&#8226; U2 R U2 R2 F R F' R U2 R'</p><p>&#8226; U2 r U2 R2 F R F' R U2 r'</p><p>&#8226; R' U' R U R' F' R U R' U' R' F R2</p><p>&#8226; U R U2 R' F R' F' R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-b></x-b><x-l></x-l><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>L Back Commutator</h3>
        <p>&#8226; U R' U2 R' D' R U2 R' D R2</p><p>&#8226; U2 R U R' U' R' F R2 U' R' U R U R' F'</p><p>&#8226; U2 r D r' U2 r D' r' U2 r' U' r</p><p>&#8226; U R' U2 r' D' r U2 r' D r R</p>
    </div>
</div>