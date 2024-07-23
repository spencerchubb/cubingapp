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
    <div class="viz-2d-4x4">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OPP Parity</h3>
        <p>&#8226; 2R2 U2 2R2 Uw2 2R2 Uw2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Adj Parity</h3>
        <p>&#8226; R' U R U' 2R2 U2' 2R2 Uw2' 2R2 Uw2' U' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CwO</h3>
        <p>&#8226; M2 U M2 U M' U2 M2 U2 M' U 2L2 U2 2L2 Uw2 2L2 Uw2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>CcwO</h3>
        <p>&#8226; Uw2 2L2 Uw2 2L2 U2 3Rw' Rw2 R' U2 M2 U2 M' U M2 U M2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>W</h3>
        <p>&#8226; R' U R' U' R' U' R' U R U Rw2 U2 2R2 Uw2 2R2 Uw2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pj</h3>
        <p>&#8226; R U R' U' R' F R2 U' R' U' R U R' F' U' 2L2 U2 2L2 Uw2 2L2 Uw2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ba</h3>
        <p>&#8226; x' Rw2 U2 Rw2 Uw2 2R2 Uw2 F 3Rw U' R U2 L' U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Bb</h3>
        <p>&#8226; U x Rw2 U2 Rw2 Uw2 2R2 Uw2 B 3Rw' U R' U2 L U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ca</h3>
        <p>&#8226; U2 Uw2 2R2 Uw2 2R2 U2 Rw2 F R U R U' R' F' R U2 R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Cb</h3>
        <p>&#8226; U R' U2 R U2 R' F R U R' U' R' F' Rw2 U2 2R2 Uw2 2R2 Uw2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-l></x-l><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Da</h3>
        <p>&#8226; R' U L' U2 R U' 3Rw B Rw2 U2 Rw2 Uw2 2R2 Uw2 x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Db</h3>
        <p>&#8226; R U R' F' R U R' U' R' F R2 U' R' u2 2R2 u2 2R2 U2 2R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ka</h3>
        <p>&#8226; U 3Lw' U R' D2 R U' R' D2 x' Rw2 U2 2R2 Uw2 2R2 Uw2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Kb</h3>
        <p>&#8226; U' 3Rw U' L D2 L' U L D2 x' Lw2 U2 2L2 Uw2 2L2 Uw2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>M</h3>
        <p>&#8226; U2 Rw2 F2 U2 2R2 U R' U' R U R' D R D' R F2 U Rw2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pa</h3>
        <p>&#8226; R U R' F' R U R' U' R' F R2 U' R' U' 2R2 U2 2R2 u2 2R2 u2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pb</h3>
        <p>&#8226; 2R2 U2 2R2 u2 2R2 u2 R U R' F' R U R' U' R' F R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Diag C</h3>
        <p>&#8226; F R U' R' U' R U R' F' U' 2R2 U2 2R2 u2 2R2 u2 U' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Q</h3>
        <p>&#8226; z Rw2 Uw2' R2' Uw2' F R U R' U' R U R' U' R U R' U' F' U2' R2 Uw2' Rw2' z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sa</h3>
        <p>&#8226; F R U' R' U' R U R' F' R U R' U' R' F R F' U' 2R2 U2 2R2 u2 2R2 u2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Sb</h3>
        <p>&#8226; F R U' R' U' R U R' F' R U R' U' R' F R F' 2R2 U2 2R2 u2 2R2 u2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-4x4">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>X</h3>
        <p>&#8226; Rw2 F2 U2 Rw2 F' U' R' U R U' R' U R U' R' U R F R2 U2 F2 Rw2</p>
    </div>
</div>