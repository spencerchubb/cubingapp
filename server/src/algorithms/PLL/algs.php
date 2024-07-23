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
<h2 id="Adj_corners">Adj corners</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Aa perm</h3>
        <p>&#8226; x (R' U R') D2 (R U' R') D2 R2 x'<span class="note">Inverse of Ab perm</span><button class="vid" data-url="../vids/PLL/Aa.mp4">Fingertricks</button></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ab perm</h3>
        <p>&#8226; x R2' D2 (R U R') D2 (R U' R) x'<span class="note">Inverse of Aa perm</span><button class="vid" data-url="../vids/PLL/Ab.mp4">Fingertricks</button></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>F perm</h3>
        <p>&#8226; R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R<span class="note">R' U' F' (T perm) F U R</span><button class="vid" data-url="../vids/PLL/F.mp4">Fingertricks</button></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ja perm</h3>
        <p>&#8226; x R2 F R F' R U2 r' U r U2 x'<button class="vid" data-url="../vids/PLL/Ja.mp4">Fingertricks</button></p><p>&#8226; L' U' L F L' U' L U L F' L2 U L</p><p>&#8226; R' U L' U2 R U' R' U2 R L</p><p>&#8226; R' U2 R U R' U2 L U' R U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Jb perm</h3>
        <p>&#8226; (R U R' F') (R U R' U') R' F R2 U' R' U'<span class="note">T perm with last 4 moves shifted to beginning</span><button class="vid" data-url="../vids/PLL/Jb.mp4">Fingertricks</button></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ra perm</h3>
        <p>&#8226; (R U' R' U') R U (R D R') U' (R D' R') U2 R' U'<button class="vid" data-url="../vids/PLL/Ra.mp4">Fingertricks</button></p><p>&#8226; R U R' F' R U2 R' U2 R' F R U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>Rb perm</h3>
        <p>&#8226; (R' U2 R U2) R' F (R U R' U') R' F' R2<button class="vid" data-url="../vids/PLL/Rb.mp4">Fingertricks</button></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>T perm</h3>
        <p>&#8226; (R U R' U') R' F R2 U' R' U' (R U R' F')<span class="note">J perm with first 4 moves shifted to end</span><button class="vid" data-url="../vids/PLL/T.mp4">Fingertricks</button></p>
    </div>
</div>
<h2 id="Diag_corners">Diag corners</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>E perm</h3>
        <p>&#8226; x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x<span class="note">4 groups of R U R D</span><button class="vid" data-url="../vids/PLL/E.mp4">Fingertricks</button></p><p>&#8226; R' U' R' D' R U' R' D R U R' D' R U R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Na perm</h3>
        <p>&#8226; (R U R' U) (R U R' F' R U R' U' R' F R2 U' R') (U2 R U' R')<span class="note">R U R' U (J perm) U' R U' R'</span><button class="vid" data-url="../vids/PLL/Na.mp4">Fingertricks</button></p><p>&#8226; F' R U R' U' R' F R2 F U' R' U' R U F' R'</p><p>&#8226; R F U' R' U R U F' R2 F' R U R U' R' F</p><p>&#8226; r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Nb perm</h3>
        <p>&#8226; r' D' F r U' r' F' D r2 U r' U' r' F r F'<span class="note">Ends with wide sexy sledge</span><button class="vid" data-url="../vids/PLL/Nb.mp4">Fingertricks</button></p><p>&#8226; R' U R U' R' F' U' F R U R' F R' F' R U' R</p><p>&#8226; R' U L' U2 R U' L R' U L' U2 R U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>V perm</h3>
        <p>&#8226; (R' U R' U') (R D' R' D) R' U D' R2 U' R2 D R2<button class="vid" data-url="../vids/PLL/V.mp4">Fingertricks</button></p><p>&#8226; R' U R' U' y R' F' R2 U' R' U R' F R F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Y perm</h3>
        <p>&#8226; F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')<span class="note">2 OLLs</span><button class="vid" data-url="../vids/PLL/Y.mp4">Fingertricks</button></p><p>&#8226; F R' F R2 U' R' U' R U R' F' R U R' U' F'</p>
    </div>
</div>
<h2 id="G_perm">G perm</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ga perm</h3>
        <p>&#8226; R2 U R' U R' U' R U' R2 D U' R' U R D'<span class="note">Inverse of Gb</span><button class="vid" data-url="../vids/PLL/Ga.mp4">Fingertricks</button></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Gb perm</h3>
        <p>&#8226; R' U' R U D' R2 U R' U R U' R U' R2 D<span class="note">Inverse of Ga</span><button class="vid" data-url="../vids/PLL/Gb.mp4">Fingertricks</button></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Gc perm</h3>
        <p>&#8226; R2 F2 R U2 R U2 R' F R U R' U' R' F R2<button class="vid" data-url="../vids/PLL/Gc.mp4">Fingertricks</button></p><p>&#8226; R2 U' R U' R U R' U R2 D' U R U' R' D</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>Gd perm</h3>
        <p>&#8226; R U R' U' D R2 U' R U' R' U R' U R2 D'<span class="note">Mirror of Gb</span><button class="vid" data-url="../vids/PLL/Gd.mp4">Fingertricks</button></p>
    </div>
</div>
<h2 id="Edge_perm">Edge perm</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>H perm</h3>
        <p>&#8226; M2 U' M2 U2 M2 U' M2<button class="vid" data-url="../vids/PLL/H.mp4">Fingertricks</button></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ua perm</h3>
        <p>&#8226; M2 U M U2 M' U M2<span class="note">Inverse of Ub perm</span><button class="vid" data-url="../vids/PLL/Ua.mp4">Fingertricks</button></p><p>&#8226; R U' R U R U R U' R' U' R2</p><p>&#8226; R U R' U R' U' R2 U' R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ub perm</h3>
        <p>&#8226; M2 U' M U2 M' U' M2<span class="note">Inverse of Ua perm</span><button class="vid" data-url="../vids/PLL/Ub.mp4">Fingertricks</button></p><p>&#8226; R2' U R U R' U' R3 U' R' U R'</p><p>&#8226; R' U R' U' R' U' R' U R U R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Z perm</h3>
        <p>&#8226; M2 U' M2 U' M' U2 M2 U2 M' U2<button class="vid" data-url="../vids/PLL/Z.mp4">Fingertricks</button></p><p>&#8226; M' U' M2 U' M2 U' M' U2 M2</p>
    </div>
</div>