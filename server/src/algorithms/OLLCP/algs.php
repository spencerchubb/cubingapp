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
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP1 1</h3>
        <p>&#8226; R U2 R2 F R F' U2 R' F R F'</p><p>&#8226; r U2 R2 U' R U' r' U2 F R F'</p><p>&#8226; L' U2 L2 F' L' F U2 L F' L' F</p><p>&#8226; U2 x' R' F2 R2 U' R' U F2 R U' R' U x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP1 2</h3>
        <p>&#8226; U F R U R U2 R' F R2 F' R' U2 R2 U F'</p><p>&#8226; U F R U R' U' F' r' U r2 U' r2 U' r2 U r'</p><p>&#8226; U F R U R' U' F' U2 R' F R2 B' R2 F' R2 B R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP1 3</h3>
        <p>&#8226; U2 R U2 R2 F R F' U2 R' F R F'</p><p>&#8226; x' R' F2 R2 U' R' U F2 R U' R' U x</p><p>&#8226; U2 l' U2 L2 U L' U l U2 F' L' F</p><p>&#8226; U2 R U B' R B R2 U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP1 4</h3>
        <p>&#8226; U R U' R2 D' r U' r' D R2 U R'</p><p>&#8226; U' R' U R2 D r' U r D' R2 U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP1 5</h3>
        <p>&#8226; M R U R' U R U' R' U r U2 r' U' M'</p><p>&#8226; r U R' U R' r2 U' R' U R' r2 U2 r'</p><p>&#8226; r' U' R U' r2 R U R U' r2 R U2 r</p><p>&#8226; r' R2 U R' U R U' R' U r U2 r' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP1 6</h3>
        <p>&#8226; U' R U' R2 D' r U' r' D R2 U R'</p><p>&#8226; U R' U R2 D r' U r D' R2 U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP2 1</h3>
        <p>&#8226; U2 R U R' U F' U2 F R U' R2 F R F'</p><p>&#8226; U2 R U R' F' U' R U R' U' R' F R U' R' F R F'</p><p>&#8226; F' L F L2 U' L F U2 F' U L' U L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP2 2</h3>
        <p>&#8226; r' D R2 U R' U2 R U' R2 D' r</p><p>&#8226; r D' R2 U' R U2 R' U R2 D r'</p><p>&#8226; R' F' U' F U M U2 R U R' U r</p><p>&#8226; U' F R U R' U' F' l U L' U L U2 l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP2 3</h3>
        <p>&#8226; U2 F R' F' R2 U R' F' U2 F U' R U' R'</p><p>&#8226; U2 F R' F' R U R' F' R U R U' R' U F R U' R'</p><p>&#8226; L' U' L U' F U2 F' L' U L2 F' L' F</p><p>&#8226; L' U' L F U L' U' L U L F' L' U L F' L' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP2 4</h3>
        <p>&#8226; U R' U R2 D r' U' r D' R2 U' R</p><p>&#8226; U' R U' R2 D' r U r' D R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP2 5</h3>
        <p>&#8226; R' U2 r U' r' U2 r U r' U2 R</p><p>&#8226; U r U r' U2 R U2 R' U2 r U' r'</p><p>&#8226; F R U R' U' F' f R U R' U' f'</p><p>&#8226; U2 f U R U' R' S' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP2 6</h3>
        <p>&#8226; F R' F' U2 r U R' U R2 U2 r'</p><p>&#8226; U2 F R' F' R U2 F R' F' R2 U2 R'</p><p>&#8226; U2 F' L F U2 l' U' L U' L2 U2 l</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP3 1</h3>
        <p>&#8226; U F R U R' U' F' r' U2 R U R' U r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP3 2</h3>
        <p>&#8226; U' F' r U R' U r' F2 R U2 R' F R</p><p>&#8226; L' U' L U L F' L' F f' L' U' L U f</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP3 3</h3>
        <p>&#8226; U R' F2 R2 U2 R' F R U2 R2 F2 R</p><p>&#8226; U L F2 L2 U2 L F L' U2 L2 F2 L'</p><p>&#8226; U' x' R U2 R2 F2 R U R' F2 R2 U2 R' x</p><p>&#8226; U F R U' R' U' R U R' F' U' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP3 4</h3>
        <p>&#8226; R f' U' f U R D r' U' r D' R'</p><p>&#8226; U' F U F' l' U' M U2 L U' l' U' l</p><p>&#8226; r U' r' U' R U2 M' U' r' F' U F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP3 5</h3>
        <p>&#8226; M R U R' U r U2 r' U M'</p><p>&#8226; r' R2 U R' U r U2 r' U M'</p><p>&#8226; U' f R U R' U' f' U' F R U R' U' F'</p><p>&#8226; U' S U R U R2 U' R2 U R U S'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP3 6</h3>
        <p>&#8226; U' r U r' U2 r U2 R' U r' F R F'</p><p>&#8226; f U R U' R' f' F R' F' R U R U' R'</p><p>&#8226; U' L F L' U2 L F2 l' U L' U l F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-b></x-b><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP4 1</h3>
        <p>&#8226; U' x' R U2 R2 F2 R U' R' F2 R2 U2 R' x</p><p>&#8226; U R' F2 R2 U2 R' F' R U2 R2 F2 R</p><p>&#8226; U R' U' R U l' U2 L U L2 B2 L U l</p><p>&#8226; U L F2 L2 U2 L F' L' U2 L2 F2 L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-r></x-r><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP4 2</h3>
        <p>&#8226; U' r' U' R U' R' U2 r F U R U' R' F'</p><p>&#8226; U F' L' U' L U F l U2 L' U' L U' l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-b></x-b><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP4 3</h3>
        <p>&#8226; U' F R' F' r U' R U2 r' U2 r U' r'</p><p>&#8226; U2 R U R' U' R' F R S R U R' U' f'</p><p>&#8226; U2 F' U' F R U R D r' U r D' R2</p><p>&#8226; U' F l' U' L U' l F2 L' U2 L F' L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-b></x-b><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP4 4</h3>
        <p>&#8226; U' R D r' U r D' R' U' B' R B R'</p><p>&#8226; U2 R' F R F' U' S R' U' R U R S'</p><p>&#8226; U' F' U' F r U M U2 R' U r U r'</p><p>&#8226; U' R D r' U r D' R' d' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP4 5</h3>
        <p>&#8226; U2 M U' r U2 r' U' R U' R' M'</p><p>&#8226; M' R' U' R U' r' U2 r U' M</p><p>&#8226; U f R U R' U' f' U F R U R' U' F'</p><p>&#8226; U2 M U' r U2 r' U' R U' R2 r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP4 6</h3>
        <p>&#8226; U2 f' U' L' U L f F' L F L' U' L' U L</p><p>&#8226; U' R' F' R U2 R' F2 r U' R U' r' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP5 1</h3>
        <p>&#8226; U' r D' R2 U' R U R' U R2 D r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP5 2</h3>
        <p>&#8226; U2 l' U2 L F' L F L' U L' U l</p><p>&#8226; r' U2 l U' R U l' U R' U r</p><p>&#8226; r' U2 R B' R B R' U R' U r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP5 3</h3>
        <p>&#8226; U F U' R2 D R' U R D' R2 U F'</p><p>&#8226; U R' F R U R' F' R U F U' R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP5 4</h3>
        <p>&#8226; L F' L' F l' U' l U2 M' U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP5 5</h3>
        <p>&#8226; U l' U2 L U L' U l</p><p>&#8226; x D' R2 U R U' R D x'</p><p>&#8226; U' r' U2 R U R' U r</p><p>&#8226; U' L' U' L2 F' L' F2 U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP5 6</h3>
        <p>&#8226; U F' L' U L U' L' U2 L U F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP6 1</h3>
        <p>&#8226; U F U' R2 D R' U' R D' R2 U F'</p><p>&#8226; R' F R F' U r' D' r U' r' D r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP6 2</h3>
        <p>&#8226; r U2 R' F R' F' R U' R U' r'</p><p>&#8226; U2 l U2 L' B L' B' L U' L U' l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-r></x-r><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP6 3</h3>
        <p>&#8226; U r' D R2 U R' U' R U' R2 D' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-l></x-l><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP6 4</h3>
        <p>&#8226; U2 R' F R F' r U r' U2 M' U M</p><p>&#8226; R' F R F' U' r' D' r U r' D r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP6 5</h3>
        <p>&#8226; U r U2 R' U' R U' r'</p><p>&#8226; x' D R2 U' R' U R' D' x</p><p>&#8226; U' R U R2 F R F2 U F</p><p>&#8226; U' l U2 L' U' L U' l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP6 6</h3>
        <p>&#8226; U F R U' R' U R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP7 1</h3>
        <p>&#8226; L' U2 L U2 L F' L' F</p><p>&#8226; L' U2 L U2 r U' r' F</p><p>&#8226; z U' R2 U z' U2 r U' r' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP7 2</h3>
        <p>&#8226; U2 L' U2 L F' L F L' U L' U L</p><p>&#8226; U R' U' F R' F' R U' R U R' U R</p><p>&#8226; R' U2 R U R' U F' U' F U R</p><p>&#8226; x' R' F2 R U' R U R' x U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP7 3</h3>
        <p>&#8226; U2 R' U2 R U R' U R2 U R' U' R' F R F'</p><p>&#8226; r U R' U' r' F R F' r U R' U R U2 r'</p><p>&#8226; U2 r' R' D' R U' R' D R U' R U R' U r</p><p>&#8226; U' r U' L U L' U2 R' U' l U2 F' L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP7 4</h3>
        <p>&#8226; R U' R' U' F' U2 F U2 R U2 R'</p><p>&#8226; R U R' U' R' F R U R U2 R' U' R U R' F'</p><p>&#8226; U2 r U' r' U' r U r' R y R U R' F'</p><p>&#8226; U R U2 R' U' R U R' U2 R' F R2 U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP7 5</h3>
        <p>&#8226; r U R' U R U2 r'</p><p>&#8226; U2 l U L' U L U2 l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP7 6</h3>
        <p>&#8226; F R' F' R U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP8 1</h3>
        <p>&#8226; U2 r R D R' U R D' R' U R' U' R U' r'</p><p>&#8226; U2 R U2 R' U' R U' R' F R U' R' U R U R' F'</p><p>&#8226; U F R' F' R U R U' R2 U' R U' R' U2 R</p><p>&#8226; U' l' U R' U' R U2 L U r' U2 F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP8 2</h3>
        <p>&#8226; R U2 R' F R' F' R U' R U' R'</p><p>&#8226; U2 R' D R2 U' R2 F R F' R U R2 D' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP8 3</h3>
        <p>&#8226; U2 R U2 R' U2 R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP8 4</h3>
        <p>&#8226; U' M' U M U2 R' F R F' r U r'</p><p>&#8226; U' M' U M U2 l' U l F' L F L'</p><p>&#8226; U2 L' U L U F U2 F' U2 L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP8 5</h3>
        <p>&#8226; U2 l' U' L U' L' U2 l</p><p>&#8226; r' U' R U' R' U2 r</p><p>&#8226; U2 R' F' r U' r' F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP8 6</h3>
        <p>&#8226; U2 F' L F L' U2 L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP9 1</h3>
        <p>&#8226; U r' U' R U' R' U R' D' R U R' D R r</p><p>&#8226; U2 l U F2 L' U L U2 R U' R' U l'</p><p>&#8226; U2 R B U2 r' U L U2 R U' R' U l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP9 2</h3>
        <p>&#8226; U' r U2 R' U' R U R2 F R F' R U2 r'</p><p>&#8226; L' U' L U' L F' L' F L' U2 L</p><p>&#8226; U' R' U' R U' R' U R' F R F' U R</p><p>&#8226; U2 R' U' F' U F U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP9 3</h3>
        <p>&#8226; U2 R U R' U' R' F R2 U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP9 4</h3>
        <p>&#8226; U R U' R2 F' U' F U R2 U' R' U R U R'</p><p>&#8226; U' F' U' F r U' r' U r U r'</p><p>&#8226; U2 F R' F' R U2 R U' R' U R U' R' U R U2 R'</p><p>&#8226; U2 R' U' R y' x' R U' R' F R U l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP9 5</h3>
        <p>&#8226; U M R U2 R' U' R U' R' U' M'</p><p>&#8226; U2 M' U' R U2 R' U' R U' R' U' M</p><p>&#8226; U R U2 R' M' U' R U' R' U M</p><p>&#8226; U r' R2 U2 R' U' R U' R' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP9 6</h3>
        <p>&#8226; U2 R U R2 F' U' F U R U' R U' R'</p><p>&#8226; U2 l' U2 L U' R U2 r' F U' R U' R'</p><p>&#8226; U' F R U R' U' R U' R' U R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP10 1</h3>
        <p>&#8226; U' R U R2 F' U' F R2 U' R2 U2 R</p><p>&#8226; L' U' L U L F' L2 U' L U F</p><p>&#8226; U2 R' U' R U R U R' U' R' F R F' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP10 2</h3>
        <p>&#8226; U2 R U R' U R' F R F' R U2 R'</p><p>&#8226; U' L U L' U L U' L F' L' F U' L'</p><p>&#8226; U' F U R U' R' d R' U R U2 R'</p><p>&#8226; U' z U R U' R U R' U F' U' F R' U</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP10 3</h3>
        <p>&#8226; r' U' F2 R U' R' U2 r' F r U' r</p><p>&#8226; L' B' U2 l U' R' U2 L' U L U' r</p><p>&#8226; U' r U R' U R U' R D R' U' R D' R' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP10 4</h3>
        <p>&#8226; U' F U F' R' F R U' R' F' R</p><p>&#8226; U2 R U R' y' r' U r U' r' U' r</p><p>&#8226; U2 R U R' y R' F R U' R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP10 5</h3>
        <p>&#8226; U' R' U2 r' R2 U R' U R U' M'</p><p>&#8226; U' M' R' U2 R U R' U R U M</p><p>&#8226; U' R' U2 R U S' R' U R S</p><p>&#8226; U' r R2 U2 R U R' U R U r' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP10 6</h3>
        <p>&#8226; r U2 R' U L' U2 l F' U L' U L</p><p>&#8226; U' F' L' U' L U L' U L U' L' U2 L U F</p><p>&#8226; U2 R' U' R U F R U R' U' F' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP11 1</h3>
        <p>&#8226; U2 r U R' U R2 D R' U2 R D' R' r'</p><p>&#8226; U2 F R U R2 U' R f' R' U R S</p><p>&#8226; R' F' U F R2 D r' U' r D' R'</p><p>&#8226; U2 F R U F D R D' F' R U' R2 F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP11 2</h3>
        <p>&#8226; U2 r U R' U R' F R F' R U2 r'</p><p>&#8226; U' f U R U' R f' R2 F R F' R</p><p>&#8226; U F R U R' U' R B' R B R2 F'</p><p>&#8226; l U L' U r' U L U' r U2 l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP11 3</h3>
        <p>&#8226; U r' U' R U' R' U2 F R F' r U R'</p><p>&#8226; U R U2 R' F R' U' R2 U' R2 U F' U R</p><p>&#8226; x' D' F2 R U R' D R U' R U' R' U R' x</p><p>&#8226; U R' U' R U' R' U2 F R U R' F' R F U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP11 4</h3>
        <p>&#8226; U2 R U R' U' R' F R F' U2 F R U' R' U R U R' F'</p><p>&#8226; R2 D r' U' r D' R' U2 R' F' U F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP11 5</h3>
        <p>&#8226; U2 S' U2 R U R' U R U2 R' S</p><p>&#8226; M R U R' U R U2 R' U M'</p><p>&#8226; r' R2 U R' U R U2 R' U M'</p><p>&#8226; U' S U R U R' U R U2 R' S'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP11 6</h3>
        <p>&#8226; f U R U' R2 F' R U R U' R' S'</p><p>&#8226; U2 R U R' U' R' F R F' U2 R U R' U' R' F R F'</p><p>&#8226; L F' L F' l' U2 L' U l U2 F' L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-f></x-f><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP12 1</h3>
        <p>&#8226; U2 F R U R' U F' U' R' F R U' R' F' R</p><p>&#8226; x D B2 R' U' R D' R' U R' U R U' R x'</p><p>&#8226; U l U L' U L U2 x U' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-f></x-f><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP12 2</h3>
        <p>&#8226; l' U' L U' L F' L' F L' U2 l</p><p>&#8226; U2 r' U' R U' l U' R' U l' U2 r</p><p>&#8226; U2 r' U' R U' R B' R' B R' U2 r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-l></x-l><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP12 3</h3>
        <p>&#8226; U2 r' U' R U' R2 D' R U2 R' D R r</p><p>&#8226; R B U' B' R2 D' r U r' D R</p><p>&#8226; U F R U' R' F2 u' r U r' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP12 4</h3>
        <p>&#8226; U2 F R U' R' U R U R' F' U R U R' U' R' F R F'</p><p>&#8226; R2 D' r U r' D R F' U' F R</p><p>&#8226; R2 D' r U r' D R U2 R y R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-b></x-b><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP12 5</h3>
        <p>&#8226; M' R' U' R U' R' U2 R U' M</p><p>&#8226; U F R U R' U' F' U F R U R' U' F'</p><p>&#8226; U2 S' r' F' r U' r' F2 r U2 S</p><p>&#8226; U2 R r2 F' r U' r' F2 r U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-b></x-b><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP12 6</h3>
        <p>&#8226; U' F U R U2 R' U R U R' U R U' R' F'</p><p>&#8226; R U R' U' R' F R2 U' R' U R U2 R' U' F'</p><p>&#8226; U2 R' F R' F r U2 R U' r' U2 F R</p><p>&#8226; R2 D' r U r' F r U r' F2 D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP13 1</h3>
        <p>&#8226; U2 f R U R2 U' R' U R U' f'</p><p>&#8226; F U R U2 R' U' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP13 2</h3>
        <p>&#8226; U R' U2 R U R' F R' F' R2 U' R' U2 R</p><p>&#8226; R' U2 R U R' U R2 U B U' B' R'</p><p>&#8226; R' U2 R U R' U R U F U R U' R' F'</p><p>&#8226; U R U R' U R U2 R' U R' U' F' U F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP13 3</h3>
        <p>&#8226; R U R' U' R' F R F' R U R' U R U2 R'</p><p>&#8226; U R' U' R U' R' U R F R' F' U F R F'</p><p>&#8226; U R' U' R U' R' U R y r U' r' U r U r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP13 4</h3>
        <p>&#8226; r U' r' U' r U r' F' U F</p><p>&#8226; r U' r' U' r U r' y L' U L</p><p>&#8226; r U' r' U' r U r' y' R' U R</p><p>&#8226; U2 l U' R' F' R U R' x y R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP13 5</h3>
        <p>&#8226; U2 R' U' R U' r U R2 U R2 U2 r'</p><p>&#8226; U2 R' U' F' U F R U R U B U' B' R'</p><p>&#8226; L' U' L U' l U L2 U L2 U2 l'</p><p>&#8226; U2 F R U' R' U2 R U R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP13 6</h3>
        <p>&#8226; F U R U' R2 F' R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-f></x-f><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP14 1</h3>
        <p>&#8226; U' R U R' U R U' R' y' r' U r U' r' U' r</p><p>&#8226; F R U' R' U R U R' F' R U2 R' U' R U' R'</p><p>&#8226; U2 L' U' L U L F' L' F L' U' L U' L' U2 L</p><p>&#8226; U L U L' U L U' L' y' l' U l U' l' U' l</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-l></x-l><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP14 2</h3>
        <p>&#8226; U' R U2 R' U' R U R2 F R F' R U2 R'</p><p>&#8226; U2 F' R U2 R' U2 R' F2 R2 U R' U' F'</p><p>&#8226; R U2 R' U' R U' R' U F' U' r' F r F</p><p>&#8226; U' R U R' U R U' R' U R' F R F' R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP14 3</h3>
        <p>&#8226; U2 r U R' U' r' F R2 U R' U' F'</p><p>&#8226; U R' U' R F U R U' R' F' U' R' U R</p><p>&#8226; B' U' R' U2 R U R' U' R B</p><p>&#8226; U2 F' U' r' F2 r U' F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-l></x-l><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP14 4</h3>
        <p>&#8226; U2 l' U l U l' U' l F U' F'</p><p>&#8226; U2 R' F R U R' F' R F U' F'</p><p>&#8226; r' U r U r' U' r y R U' R'</p><p>&#8226; U2 R' F R U R' F' R y' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP14 5</h3>
        <p>&#8226; U2 R U R' U r' U' R2 U' R2 U2 r</p><p>&#8226; U2 R U B U' B' R2 U2 R U R' F' U F R</p><p>&#8226; U R' U' F R' F' R2 f U R U' f'</p><p>&#8226; U' R' F' R U2 R' U' R U' R' U2 F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP14 6</h3>
        <p>&#8226; U2 R U2 R' U2 R U' R' F' U' F R U R'</p><p>&#8226; U2 F' U' r' F r2 U r' U' r' F r</p><p>&#8226; U2 F' U' L' U L2 F L' U' L' U L</p><p>&#8226; f R' D' R U R' D R2 U' R' f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP15 1</h3>
        <p>&#8226; U' r U r' U' L U r U2 r' F U' L'</p><p>&#8226; U2 R U R' U l' U2 L U' R U2 r' F</p><p>&#8226; U2 R' U2 R U R' F U R U' R' F' R</p><p>&#8226; U2 R' U' R F R' U R F R' F' R U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP15 2</h3>
        <p>&#8226; U F R U R' U' F' R' U2 R U R' U R</p><p>&#8226; U f' U' L' U L f R' U2 R U R' U R</p><p>&#8226; U' F' L' U' L U F L' U2 L U L' U L</p><p>&#8226; U' f U R U' R F' R2 F R F' R S'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP15 3</h3>
        <p>&#8226; U r' U r U r' U' r y R U R' U' R U' R'</p><p>&#8226; U' L' U2 L U L' U L F' L F L' U' L' U L</p><p>&#8226; U r' U r U r' U' r f R f' U' f R' f'</p><p>&#8226; U' l' U l U l' U' l y' R U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP15 4</h3>
        <p>&#8226; U R U2 R' U' R U R' U' R U R' U2 R' F R F'</p><p>&#8226; U' L' R U R' U' L y' r' U' R U M'</p><p>&#8226; U' f U f' R' f R U' R' f' R</p><p>&#8226; U F R F' L' F U R' U' F' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP15 5</h3>
        <p>&#8226; U' r' U' M' U' R U r' U r</p><p>&#8226; U' r' U' r R' U' R U r' U r</p><p>&#8226; U l' U' l L' U' L U l' U l</p><p>&#8226; U R' F' R r' F' r U R' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP15 6</h3>
        <p>&#8226; U2 R U2 R2 U' R2 B U' B' R2 U R</p><p>&#8226; U' L F' L' U' L U F L' U L U2 L'</p><p>&#8226; L U2 L2 U' L2 F U' F' L2 U L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP16 1</h3>
        <p>&#8226; U' R U2 R' U' R U' R' F R' F' R U R U' R'</p><p>&#8226; U' r U' r' U' r U r' y' R' U' R U R' U R</p><p>&#8226; U2 F R' F' U' F R F' R' U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP16 2</h3>
        <p>&#8226; U' F R U R' U' F' R U2 R' U' R U' R'</p><p>&#8226; U R U R' U' R' F D' R U R' D R U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP16 3</h3>
        <p>&#8226; l' U' l U R' U' l' U2 l F' U R</p><p>&#8226; U2 S R' U' R U F R2 U R' U' f'</p><p>&#8226; U L U2 L' U' L F' U' L' U L F L'</p><p>&#8226; U' R U2 R' U' R B' U' R' U R B R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP16 4</h3>
        <p>&#8226; U L' U2 L U L' U' L U L' U' L U2 L F' L' F</p><p>&#8226; U' R L' U' L U R' y' r U R' U' M</p><p>&#8226; U2 S R' F R f' r U R' U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP16 5</h3>
        <p>&#8226; U r U r' R U R' U' r U' r'</p><p>&#8226; U r U M U R' U' r U' r'</p><p>&#8226; U' l U l' L U L' U' l U' l'</p><p>&#8226; U R U R' U' R' U' R U R U' r' U' R' U r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP16 6</h3>
        <p>&#8226; U' R' F R U R' U' F' R U' R' U2 R</p><p>&#8226; U2 R D r' U r D' R2 F' U' F R</p><p>&#8226; U S' R' U' R f R' U R2 U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP17 1</h3>
        <p>&#8226; l' U l F' U2 F' U L' U L F</p><p>&#8226; U2 L' U' L U' L F' L' F U2 L F' L' F</p><p>&#8226; U' F U R U' R' F' U F R U' R' U R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP17 2</h3>
        <p>&#8226; U2 M' U M R U2 R2 F R F' r U2 r'</p><p>&#8226; U' r U2 r' R' F R F' R U2 R' M' U M</p><p>&#8226; U M' U' l L2 U2 L2 F' L' F l' U2 l</p><p>&#8226; U' r' R U' r R2 U2 R2 x' U' R' U L' U2 r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP17 3</h3>
        <p>&#8226; U' F R' F' R2 r' U R U' R' U' M'</p><p>&#8226; U f R U R' U' f' U' R U R' U' R' F R F'</p><p>&#8226; U' F R' F' R U S' R U' R' S</p><p>&#8226; U2 R' F' U2 F2 U R U' R' F' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP17 4</h3>
        <p>&#8226; F' L F L2 l U' L' U L U M'</p><p>&#8226; F' r U r' U' S r' F r S'</p><p>&#8226; M' U M U2 R' F R U F U' F'</p><p>&#8226; U' R B U2 B2 U' R' U R B U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP17 5</h3>
        <p>&#8226; U F' R U2 r' U F2 U' r U2 R' F</p><p>&#8226; U' R U2 r' U' R U M' R' F2 r U r' F</p><p>&#8226; U' r U R' U R U2 r' U2 r U2 R' U' R U' r'</p><p>&#8226; U' R U2 r' U' R U r R2 F2 r U r' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP17 6</h3>
        <p>&#8226; U R U R' U R' F R F' U2 R' F R F'</p><p>&#8226; f R U R' U' y x U R' U' R' F R F'</p><p>&#8226; U2 F U R U' R' U F' L' U' L y' R U' R'</p><p>&#8226; U' r U' r' F U2 F U' R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP18 1</h3>
        <p>&#8226; R U2 R' F' U2 F R U' R2 F R F'</p><p>&#8226; F R' F' R2 U R' F' U2 F R U2 R'</p><p>&#8226; R U R2 F' U' F U R U2 R' F R F'</p><p>&#8226; F R' F' R U2 R' U' F' U F R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP18 2</h3>
        <p>&#8226; U' R U2 R2 F R F' U2 M' U R U' r'</p><p>&#8226; U' F S' R U' R' S R U2 R' U' F'</p><p>&#8226; U r' U' R U M' U' R2 F R F' U R</p><p>&#8226; U2 R D r' U' r D' R' U' R2 F R F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP18 3</h3>
        <p>&#8226; U r U' r' U r U r' U' F U R U' R2 F' R</p><p>&#8226; r' U' R U' R' U2 F2 r U2 r U' r' F</p><p>&#8226; U' R U R2 F R F2 U' F U2 F R' F' R</p><p>&#8226; U2 R' F2 r U r2 F2 r U' r' F2 r F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP18 4</h3>
        <p>&#8226; U R' F R F' U' F' U r' F' r U F</p><p>&#8226; U R' F R F' U2 R' F R F' U y' R' U R</p><p>&#8226; U' R' F' U' F U' R U2 R f' U' f</p><p>&#8226; F' L' U' L U' y L U2 L F' L' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP18 5</h3>
        <p>&#8226; r' U' R U' R' U2 r2 U R' U R U2 r'</p><p>&#8226; U2 r U R' U R U2 r2 U' R U' R' U2 r</p><p>&#8226; U2 l' U' L U' L' U2 l2 U L' U L U2 l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP18 6</h3>
        <p>&#8226; F R U R' U y' R' U2 R' F R F'</p><p>&#8226; U' r U' r' F U F U' R U R' U' F'</p><p>&#8226; F R U R' d R' U2 R' F R F'</p><p>&#8226; U2 F R' F' R U2 F R' F' R U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP19 1</h3>
        <p>&#8226; U R U2 R D r' U r D' R' U' R' F' U F</p><p>&#8226; U' F' U' F R U R D r' U' r D' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP19 2</h3>
        <p>&#8226; U' R u2 R' U' R U R' F R u2 R2 F R</p><p>&#8226; U r U r' U' R2 D r' U2 r D' R2 U r U' r'</p><p>&#8226; U r' U' r U R2 D' r U2 r' D R2 U' r' U r</p><p>&#8226; U2 R2 F2 R F' D R U2 R' D' F l' U2 l R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP19 3</h3>
        <p>&#8226; R U R' U' R' F R F' r' U2 R U R' U r</p><p>&#8226; U2 R' F R2 U R' U' F' U r U' r' U' r U r'</p><p>&#8226; R' F R F' U2 F' U F2 R' F' R2 U' R'</p><p>&#8226; F R U2 R' F R U R' U' R U R' U' y' R' U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP19 4</h3>
        <p>&#8226; U' S' R U R' S U' R' F R F'</p><p>&#8226; U2 M U R U R' U' M' R' F R F'</p><p>&#8226; U2 M U R U R' U' r R2 F R F'</p><p>&#8226; F U R U' R2 F' U' F U R U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP19 5</h3>
        <p>&#8226; r U2 R' U' R U' r2 U2 R U R' U r</p><p>&#8226; U2 F R U R' U' F' R U2 R2 F R F' R U2 R'</p><p>&#8226; U2 r' U2 R U R' U r2 U2 R' U' R U' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP19 6</h3>
        <p>&#8226; U S r' F' r S' U r U' r' F</p><p>&#8226; U' F R U' R' F R' F' R U R U R' U' F'</p><p>&#8226; U' R' U' F' U F2 R U R' U' F' U R</p><p>&#8226; U' R' U' F U r U2 r' R U R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP20 1</h3>
        <p>&#8226; R U R' U' R' F R F' R U2 R2 F R F' R U2 R'</p><p>&#8226; U r U R' U' M r' F R2 U' R' U' R U R' F' U M'</p><p>&#8226; U F R' F R2 U R' U' F2 U' r U' r' F</p><p>&#8226; U' F' L F' L2 U' L U F2 U R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP20 2</h3>
        <p>&#8226; R U' R' S R' F R f' R U' B U2 B' R'</p><p>&#8226; F R U R' U R U' R' U2 F2 r U r' F U F'</p><p>&#8226; F R' F' R U R U' R' f R f' U' r' U' R U M'</p><p>&#8226; F R U' R' S U' R U R' f' r U R' U' M r' F R F' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP20 3</h3>
        <p>&#8226; U2 R U R' U' R' F R F' R U2 R2 F R F' R U2 R'</p><p>&#8226; U' F R' F R2 U R' U' F2 U' L F' L' F</p><p>&#8226; U F' L F' L2 U' L U F2 U R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP20 4</h3>
        <p>&#8226; U R U R' U' R' F R F' R U2 R2 F R F' R U2 R'</p><p>&#8226; U2 F R' F R2 U R' U' F2 U' r U' r' F</p><p>&#8226; F' L F' L2 U' L U F2 U R' F R F'</p><p>&#8226; U2 F R' F R2 U R' U' F2 U' L F' L' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP20 5</h3>
        <p>&#8226; S' R U R' S U' M' U R U' r'</p><p>&#8226; S U' S R' F R S2 R' F' R</p><p>&#8226; r' R U R U R' U' r2 R2 U R U' r'</p><p>&#8226; r U R' U' M2 U R U' R' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP20 6</h3>
        <p>&#8226; U' R U R' U' R' F R F' R U2 R2 F R F' R U2 R'</p><p>&#8226; F R' F R2 U R' U' F2 U' r U' r' F</p><p>&#8226; F R' F R2 U R' U' F2 U' L F' L' F</p><p>&#8226; U2 F' L F' L2 U' L U F2 U R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP21 1</h3>
        <p>&#8226; f R2 S' U' R2 U' R2 U R2 F'</p><p>&#8226; U2 x' M' U' R U' R' U R U2 L' U R' U2 R</p><p>&#8226; U2 R' F R U R' U' R' F' R U R2 U2 R' U' R U' R'</p><p>&#8226; U R U R' U R U2 R' U' R2 D R' U R D' R' U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP21 2</h3>
        <p>&#8226; U F R U R' U' R U R' U' R U R' U' F'</p><p>&#8226; U F U R U' R' U R U' R' U R U' R' F'</p><p>&#8226; x' U' R U' R' U R' F2 R U' R U R' U x</p><p>&#8226; U' R U R' U y' R' U R U' R2 F R F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP21 3</h3>
        <p>&#8226; U2 f R2 S' U' R2 U' R2 U R2 F'</p><p>&#8226; f R U R' U' R F' R U R' U' R' S'</p><p>&#8226; R' F R U R' U' F' R U' R' U R' F R F' U R</p><p>&#8226; U' R U R' U R U2 R' U' R2 D R' U R D' R' U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP21 4</h3>
        <p>&#8226; U2 R U R' U R U L' U R' U' L</p><p>&#8226; U2 R' U' R U' R' U' L U' R U L'</p><p>&#8226; U' R' F R U R' U' R' F' R U' R U R' U R</p><p>&#8226; U2 R U R' U R U r' F R' F' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP21 5</h3>
        <p>&#8226; U R U2 R' U' R U R' U' R U' R'</p><p>&#8226; L U L' U L U' L' U L U2 L'</p><p>&#8226; U R' U2 R U R' U' R U R' U R</p><p>&#8226; U' R' U2 R U R' U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP21 6</h3>
        <p>&#8226; R U R' U R U L' U R' U' L</p><p>&#8226; R U R' U R U r' F R' F' r</p><p>&#8226; R' U' R U' R' U' L U' R U L'</p><p>&#8226; R' F' R U2 R U2 R' F U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP22 1</h3>
        <p>&#8226; R' U' R U' R' U2 R U' L' U R U' L U R'</p><p>&#8226; R' F2 R U2 R U2 R' F2 U' R U' R'</p><p>&#8226; U M F R' F' r U2 R U' R' U R U2 R'</p><p>&#8226; U R U2 R' U' R U' R2 U L U' R U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP22 2</h3>
        <p>&#8226; R U D' R U R' D R2 U' R' U' R2 U2 R</p><p>&#8226; U' r U R' U R' F R F' R U' R' U R U2 r'</p><p>&#8226; U x' R U' R' D R U2 R' D' R U2 R' D R U R' D' x</p><p>&#8226; R2 D' R U R' D R U R U' R' U R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP22 3</h3>
        <p>&#8226; R U R' U' R' F R2 U R' U' R U R' U' F'</p><p>&#8226; R U R' U R U2 R' U' R U' L' U R' U' L</p><p>&#8226; R U2 R' U' R U R' U2 L' U R U' R' L</p><p>&#8226; R U2 R' U' R U R' U2 r' F R F' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP22 4</h3>
        <p>&#8226; U2 r' F R F' r U' R' U' R U' R'</p><p>&#8226; U2 L' U R U' L U' R' U' R U' R'</p><p>&#8226; U' R U2 R' U R' D' R U2 R' D R2 U' R'</p><p>&#8226; U' R U R' U F' R U2 R' U2 R' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP22 5</h3>
        <p>&#8226; R U2 R2 U' R2 U' R2 U2 R</p><p>&#8226; R U R' U' R' U2 R U R' U R2 U2 R'</p><p>&#8226; U' R' U' R U' R' U2 R2 U2 R' U' R U' R'</p><p>&#8226; U2 L' U2 L2 U L2 U L2 U2 L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP22 6</h3>
        <p>&#8226; U F U R U' R' U R U2 R' U' R U R' F'</p><p>&#8226; U F R2 U' R2 U R2 U S R2 f'</p><p>&#8226; R' U' F' R U R' U' R' F R2 U2 R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP23 1</h3>
        <p>&#8226; R' F R U' R' U' R U R' F' R U R' U' R' F R F' R</p><p>&#8226; L' U L U' F R' F R F2 L F' L' F</p><p>&#8226; U' r U R' U' r' F R2 x' U R' D' R U' R' x</p><p>&#8226; U F R' F' R F2 r U r' F U' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP23 2</h3>
        <p>&#8226; R' U2 R F U' R' U' R U F'</p><p>&#8226; R' U2 R U2 R' F' R U R' U' R' F R2</p><p>&#8226; R2 D' R U R' D R U R U' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP23 3</h3>
        <p>&#8226; F R U' R' U R U R' U R U' R' F'</p><p>&#8226; U2 R' F2 R U2 R U2 R' F2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP23 4</h3>
        <p>&#8226; R2 D' R U2 R' D R U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP23 5</h3>
        <p>&#8226; R' U' R U' R' U2 R2 U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP23 6</h3>
        <p>&#8226; R' U R U R' F' R U R' U' R' F R2 U' R' U' R</p><p>&#8226; L2 D L' U2 L D' L' U2 L'</p><p>&#8226; x' R U' R' D R U2 R' D' R U' R' x</p><p>&#8226; R' U' R U' R' U2 R2 U' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP24 1</h3>
        <p>&#8226; R' U L' U' L R U2 L' U' L</p><p>&#8226; R' U R U2 L' R' U R U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP24 2</h3>
        <p>&#8226; U2 R' U' R U' R' U R U R' F' R U R' U' R' F R2</p><p>&#8226; R' U R2 D r' U2 r D' R2 U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP24 3</h3>
        <p>&#8226; U2 F R U R' U' R U' R' U' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP24 4</h3>
        <p>&#8226; U' r U R' U' r' F R F'</p><p>&#8226; x R' U' R D' R' U R D x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP24 5</h3>
        <p>&#8226; R U2 R' U' R U' R2 U2 R U R' U R</p><p>&#8226; U2 R' U2 R U R' U R2 U2 R' U' R U' R'</p><p>&#8226; U' R U R' U R U2 R' U2 R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP24 6</h3>
        <p>&#8226; U R' F' r U R U' r' F</p><p>&#8226; U' F R F' r U R' U' r'</p><p>&#8226; U2 x' R U R' D R U' R' D' x</p><p>&#8226; U l' U' L U R U' r' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP25 1</h3>
        <p>&#8226; U2 R' U2 R' D' R U2 R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP25 2</h3>
        <p>&#8226; U' r U2 R2 F R F' R U2 r'</p><p>&#8226; U R' U' R U R' F' R U R' U' R' F R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP25 3</h3>
        <p>&#8226; U' F R' F' r U R U' r'</p><p>&#8226; U2 x' R U' R' D R U R' D' x</p><p>&#8226; x D' R' U' R D R' U R x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP25 4</h3>
        <p>&#8226; F' r U R' U' r' F R</p><p>&#8226; U2 r U R U' r' F R' F'</p><p>&#8226; U x' D R U R' D' R U' R' x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP25 5</h3>
        <p>&#8226; U R U2 R' U' R U R' U' R U R' U' R U' R'</p><p>&#8226; R' U' R U' R' U R U' R' U R U' R' U2 R</p><p>&#8226; U' R U R' U R U2 R' U R' U' R U' R' U2 R</p><p>&#8226; U R U R' U R U' R' U R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP25 6</h3>
        <p>&#8226; U2 R' F' R U R' U' R' F R2 U' R' U2 R</p><p>&#8226; U' R U2 R D R' U2 R D' R2</p><p>&#8226; U x' R U R' D R U2 R' D' R U R' x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP26 1</h3>
        <p>&#8226; U2 R2 D R' U R D' R' U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP26 2</h3>
        <p>&#8226; R U2 r' F R' F' r U' R U' R'</p><p>&#8226; L' U' L U' R U' L' U R' U2 L</p><p>&#8226; U2 R' U' R U' L U' R' U L' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP26 3</h3>
        <p>&#8226; U2 R U2 R' U2 L' U R U' R' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP26 4</h3>
        <p>&#8226; R' U L U' R U L'</p><p>&#8226; U2 L' U R U' L U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP26 5</h3>
        <p>&#8226; U2 L' U' L U' L' U2 L</p><p>&#8226; U R U2 R' U' R U' R'</p><p>&#8226; R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP26 6</h3>
        <p>&#8226; U2 R L' U' L U R' U2 L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP27 1</h3>
        <p>&#8226; L' U2 L U2 R U' L' U L R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP27 2</h3>
        <p>&#8226; U2 R U R' U r' F R F' r U2 R'</p><p>&#8226; L U L' U R' z R U R' D R2 U' z'</p><p>&#8226; z U R U' R D' R U R' D R2 U'</p><p>&#8226; F' R U2 R' U2 R' F2 R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP27 3</h3>
        <p>&#8226; U' R U R' U R U' R D R' U' R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP27 4</h3>
        <p>&#8226; U2 L U' R' U L' U' R</p><p>&#8226; R U' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP27 5</h3>
        <p>&#8226; U L' U2 L U L' U L</p><p>&#8226; R U R' U R U2 R'</p><p>&#8226; U' R' U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP27 6</h3>
        <p>&#8226; L' R U R' U' L U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP28 1</h3>
        <p>&#8226; U r U R' F' R U R' U' R' F R2 U' r'</p><p>&#8226; U x L2 U2 R' U' R U2 L' U r'</p><p>&#8226; U' x' R2 U2 L' U' L U2 R' U R' x</p><p>&#8226; U' R2 U R2 U F2 r U r' F2 R F' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP28 2</h3>
        <p>&#8226; U2 r2 D' r U' r' D r2 F' r' U r F</p><p>&#8226; U M' F R U' R' U' R U R' F' R U R' U' R' F R F' M</p><p>&#8226; U' R U' R' U' F2 u' r U r' D R2</p><p>&#8226; U M' F R' F R2 U' R' U' R U R' F' R U R' U' F' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP28 3</h3>
        <p>&#8226; U' x' R2 U R' F' R U R' U' R' F R2 U' R' U' R' x</p><p>&#8226; r U' L U2 R' U R U2 L2 x'</p><p>&#8226; U' M R U R' F' R U R' U' R' F R2 U' R' U' M'</p><p>&#8226; U2 x' R U' R U2 L' U L U2 R2 x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP28 4</h3>
        <p>&#8226; R2 F2 r U r' F2 R F' R</p><p>&#8226; U M' R' U L' U2 R U' R' U2 R L U' M</p><p>&#8226; U2 R' F R F' R U2 r' U r U2 r' U' M'</p><p>&#8226; U2 x' L2 U2 R U R' U2 L U' L x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP28 5</h3>
        <p>&#8226; R' F R S R' F' R S'</p><p>&#8226; r U R' U' M U R U' R'</p><p>&#8226; U' M' U' M U2 M' U' M</p><p>&#8226; U2 M' U M U2 M' U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP28 6</h3>
        <p>&#8226; U R' F R' F2 r U' r' F2 R2</p><p>&#8226; U' r' U L' U2 R U' R' U2 r L</p><p>&#8226; r U R' U' r' F R2 U' R' U' R U R' F'</p><p>&#8226; U' x' L' U L' U2 R U' R' U2 L2 x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP29 1</h3>
        <p>&#8226; U2 R' U' R U' R' U2 F R U R' U' F' U R</p><p>&#8226; U' M' U' L' U l U2 r2 F r U' r</p><p>&#8226; U' r U R' U R U2 r2 F R F' r U R'</p><p>&#8226; U' x R' U' R D' R' U2 R' U' R2 D x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP29 2</h3>
        <p>&#8226; U2 r2 D' r U r' D r2 U' r' U' r</p><p>&#8226; U r D r' U r D' r2 U r U' r' U' r</p><p>&#8226; U' R F R' U R F' R2 F R U' R' F' R</p><p>&#8226; U R U2 R2 F R F' R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP29 3</h3>
        <p>&#8226; U' R U R' U' R U' R' F' U' F R U R'</p><p>&#8226; U2 R D r' U' r D' R' U r' U' R U M'</p><p>&#8226; F' U' r' F2 r U r' F2 r U F</p><p>&#8226; F' U' L' U2 L U L' U2 L U F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP29 4</h3>
        <p>&#8226; U' r U R' U' M r' F R F' M'</p><p>&#8226; U' R' U2 R2 U R' U' R' U2 F R F'</p><p>&#8226; U' S' R U R' U' R' F R F' U S</p><p>&#8226; U2 M U R U R' U' R' F R F' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP29 5</h3>
        <p>&#8226; U' R' F R' F r U' R U' R U' r' F</p><p>&#8226; r U2 R' U' R U' r' R' U2 R U R' U R</p><p>&#8226; U' r U R' U R U2 r2 F' r U' r' F2 r</p><p>&#8226; F' r U' r2 F r U r' F' r F2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP29 6</h3>
        <p>&#8226; U' F R U R' U' F' r' F' r U r U' r' F</p><p>&#8226; U' F R F' r U R2 U' M U R U' R'</p><p>&#8226; U f U R U' F' R U R' U' R' S'</p><p>&#8226; U' M' U' M U' l' U' l F U F' l' U l</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP30 1</h3>
        <p>&#8226; F R F' r U R2 U R U2 r'</p><p>&#8226; U2 f U f' R B L2 B L B2 R'</p><p>&#8226; U M' U R U' r' U2 l2 F' l' U l'</p><p>&#8226; U R' U' R U' R' U2 R U' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP30 2</h3>
        <p>&#8226; U2 R2 U R' B' R U' R2 U R B R'</p><p>&#8226; U r U2 R2 F R F' R U' R' U R U2 r'</p><p>&#8226; U r' D' r U' r' D r2 U' r' U r U r'</p><p>&#8226; F2 L2 F' U R U' R' F L2 F2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP30 3</h3>
        <p>&#8226; F U R U2 R' U' R U2 R' U' F'</p><p>&#8226; U' R U f R' U f' R' f U' f'</p><p>&#8226; F U R U' B R' F' R B' R'</p><p>&#8226; U2 f R f' R u R' U R' U' R u' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP30 4</h3>
        <p>&#8226; R' F' U' F U R U R U R' U' R' F R F'</p><p>&#8226; U F' L' U' L U F R U R' U' R' F R F'</p><p>&#8226; U2 f R U R' U' S' R' F' r U R U' r'</p><p>&#8226; U M' U M U r U r' F' U' F r U' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP30 5</h3>
        <p>&#8226; F R' F R2 U' R' U' R U R' F2</p><p>&#8226; U2 F U' f R' F' R S' R U' R' U F'</p><p>&#8226; U2 r' U2 R U R' U r R U2 R' U' R U' R'</p><p>&#8226; U L F' L F' l' U L' U L' U l F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP30 6</h3>
        <p>&#8226; U' S' R' U' R f R' U R U' F'</p><p>&#8226; U R' F' r U M R U' r' F M'</p><p>&#8226; R U R2 F' R U R U' R' F U' R' F R F'</p><p>&#8226; U2 M U' L' U' L U L F' L' F M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP31 1</h3>
        <p>&#8226; U' r U2 R' U' R2 U' r' F R' F'</p><p>&#8226; U2 x' D R2 U' R' U2 R' D' R U' l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP31 2</h3>
        <p>&#8226; U' r U2 R' U' R U R' F R' F' R2 U2 r'</p><p>&#8226; U' R' U2 R U R' U' R B' R B R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP31 3</h3>
        <p>&#8226; R U2 R' U' F' U F U R U2 R'</p><p>&#8226; U2 R' U r' D' r U' r' D r U' R</p><p>&#8226; R' U' R' F R2 U' R' U2 R U R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP31 4</h3>
        <p>&#8226; U2 F R' F' R U R U R' U' R U' R'</p><p>&#8226; U' R U R' U R U' R' U' R' F R2 U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP31 5</h3>
        <p>&#8226; R U2 R' U' R U' R' U r U R' U R U2 r'</p><p>&#8226; L F2 l' U L U L' U l U2 F' L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP31 6</h3>
        <p>&#8226; U' R' U' F U R U' R' F' R</p><p>&#8226; U S' r' F' r U r U' r' f</p><p>&#8226; U2 R' U' r' D' r U r' D r R</p><p>&#8226; U R' F R U R' U' F2 U F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP32 1</h3>
        <p>&#8226; U' r' U2 R U R2 U r B' R B</p><p>&#8226; U R' U' F' U R U R' U' R' F R2 U' R' U2 R</p><p>&#8226; x D' R2 U R U2 R D R' U R x'</p><p>&#8226; U l' U2 L U L2 U l F' L F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP32 2</h3>
        <p>&#8226; U' R U2 R' U' R U R' F R' F' R2 U2 R'</p><p>&#8226; U L U2 L' U' L U L' B L' B' L2 U2 L'</p><p>&#8226; U F U' R U R2 D' R U2 R' D R U' F'</p><p>&#8226; U' R2 U' R U R U' R' U' F R' F' U R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP32 3</h3>
        <p>&#8226; L' U2 L U F U' F' U' L' U2 L</p><p>&#8226; F R U R' U' F' U F R' F' R U R U' R'</p><p>&#8226; U2 F U R U R' U' y' R' U2 R U R'</p><p>&#8226; U x' R U R' D R U' R U' R' U R' D' x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP32 4</h3>
        <p>&#8226; U' S R U R' U' R' F R f'</p><p>&#8226; U' R U2 R' U' F' U F R U' R'</p><p>&#8226; U L U F' U' L' U L F L'</p><p>&#8226; U' R U B' U' R' U R B R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP32 5</h3>
        <p>&#8226; U2 R' U2 R U R' U R U' r' U' R U' R' U2 r</p><p>&#8226; R U2 R' U F' U' F2 R' F' R2 U2 R'</p><p>&#8226; R' F2 r U' R' U' R U' r' U2 F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP32 6</h3>
        <p>&#8226; U' f R U' R' U S' R U R' F'</p><p>&#8226; U2 F' L F L' U' L' U' L U L' U L</p><p>&#8226; U F U R U' F' r U R' U' r'</p><p>&#8226; R U2 R' F' L' U L F R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP33 1</h3>
        <p>&#8226; U' R U2 R2 F R2 U R' U' F' U R U R'</p><p>&#8226; U r U' r' U' r U r' U2 r' D' r U' r' D r</p><p>&#8226; U' r U r' R U R' U' R r U' r' F R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP33 2</h3>
        <p>&#8226; U r U' r' U' r2 D r' U r D' r2</p><p>&#8226; U' R U' R' U' F' U2 F R' F R F'</p><p>&#8226; U r U' r' U' r U r2 D' r U r' D r</p><p>&#8226; F' U F U R U2 R' F R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP33 3</h3>
        <p>&#8226; U' R U R' F' U' R U R' U' R' F R2 U' R'</p><p>&#8226; U2 R' U2 R U F R' U R2 U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP33 4</h3>
        <p>&#8226; U' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP33 5</h3>
        <p>&#8226; R U2 R' U' R U' R' r' U2 R U R' U r</p><p>&#8226; U' R U R' U R U2 R2 F' r U' r' F2 R</p><p>&#8226; R U' R' U R U' R' F l' U' R U R' U' l</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP33 6</h3>
        <p>&#8226; U' F R U' R' U R U R' F'</p><p>&#8226; U r' F' r U r U' r' F</p><p>&#8226; U' R' U' R U R B' R' B</p><p>&#8226; U' R' U' R U R f' U' f</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP34 1</h3>
        <p>&#8226; R U R' S R' F R f' U R U R'</p><p>&#8226; U2 R U R' U' R' F R F' R' U' R U' R' U2 R</p><p>&#8226; U2 R' U' R U' R' U F R U' R' U2 R U R' F' R</p><p>&#8226; U2 R' U' R U' y R U' R' U' F R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP34 2</h3>
        <p>&#8226; U2 R2 D' R F R U R' U' F' U R' D R2</p><p>&#8226; U' R' U' R' F R F' R U' R' U R U' R' U2 R</p><p>&#8226; U2 F2 R2 F L' U' L U F' R2 F2</p><p>&#8226; S' R2 U' R F R' U R2 U' R' F' R S</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP34 3</h3>
        <p>&#8226; R U2 R2 F R F' R U' R' U' R' F R F'</p><p>&#8226; R' U2 R2 U R2 U R U2 R' F R F'</p><p>&#8226; U2 F R F' r U r' U R' U' r U' r'</p><p>&#8226; f U R U' R' U R' D' R U' R' D R f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP34 4</h3>
        <p>&#8226; U2 F R U R' U' R' F' r U R U' r'</p><p>&#8226; U2 R' U' R d R B r' U' M'</p><p>&#8226; U' F' U' F U r U R' U' M</p><p>&#8226; U2 R' U' R U y r U R' U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP34 5</h3>
        <p>&#8226; U2 F R U R' U' R U R2 F R F' R U' R' F'</p><p>&#8226; F R U R' d' x U2 R2 F R F' R U2 r'</p><p>&#8226; U' R U' R' F R U R' U' R U R' U' F' U R U' R'</p><p>&#8226; U' R U R' U2 F2 U' r' F r2 U r' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP34 6</h3>
        <p>&#8226; U' f R f' U' r' U' R U M'</p><p>&#8226; R U R2 U' R' F R U R U' F'</p><p>&#8226; R U R' d' R' F' r U r' R</p><p>&#8226; R U R' y' U' r' U' R U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP35 1</h3>
        <p>&#8226; U' R U2 R' U' y' r' U r U' r' U' r</p><p>&#8226; F U2 F' U' R' F R U' R' F' R</p><p>&#8226; U2 f R2 f' U' r' U r U' r' U' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP35 2</h3>
        <p>&#8226; U' R U2 R2 F R F' R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP35 3</h3>
        <p>&#8226; U2 F U R U' R2 U' R2 U' R2 U2 R U' F'</p><p>&#8226; R2 D r' U r D' r' U' R' U M'</p><p>&#8226; S' R U' r' U' F' U F M' S</p><p>&#8226; U S2 R' U2 R S U2 f R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP35 4</h3>
        <p>&#8226; U R2 D' r U' r' D r U R U' M</p><p>&#8226; U' R' F R U R' U' F' U R F R U R' U' F'</p><p>&#8226; U S' R' F R U R' U' F' U R S</p><p>&#8226; U' f R2 f' U' S R U R' U' R' S'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP35 5</h3>
        <p>&#8226; U R' F R U r' F r y' R2 U' R' F R' F'</p><p>&#8226; U R' F R U' R' U' R U' R' F' R' F R U2 F' R</p><p>&#8226; U2 R' F' U' F2 R' F' R2 U' R' U R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP35 6</h3>
        <p>&#8226; L' U2 L U y' r U' r' U r U r'</p><p>&#8226; U R2 F R F' R U2 R' U R U2 R' U' R</p><p>&#8226; U2 R' U2 R U y r U' r' U r U r'</p><p>&#8226; U2 R' U2 R U F R' F' U F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP36 1</h3>
        <p>&#8226; R' U' F2 u' R U2 R' D R U' R B</p><p>&#8226; F R U' R' U R' U2 R2 U R2 U R U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP36 2</h3>
        <p>&#8226; U' R U R' U2 F' U' F U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP36 3</h3>
        <p>&#8226; U2 R U' R' U' F U R U' R' F' R U2 R'</p><p>&#8226; F' L' U L S' U L' U' L f</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP36 4</h3>
        <p>&#8226; U R' F' U' F2 U R U' R' F' R</p><p>&#8226; U' R' U' R U' R' U R U R f' U' f</p><p>&#8226; U L' U' L U' L' U L U L F' L' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP36 5</h3>
        <p>&#8226; U R U R' F' R U R' U' R' F R U' R' F R F'</p><p>&#8226; l' U2 L U L' U x' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP36 6</h3>
        <p>&#8226; U r U' r2 D r2 U' r2 U r2 U D' r'</p><p>&#8226; U' R U2 r D r' U2 r D' r' R'</p><p>&#8226; U' R U R' U' F' U2 F U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP37 1</h3>
        <p>&#8226; U' R U R' U' R' F R2 U' R' U R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP37 2</h3>
        <p>&#8226; U' R' U2 R U R2 F R F' U R</p><p>&#8226; U2 R U2 R' F R' F' R2 U2 R'</p><p>&#8226; U2 R2 F' R U R U' R' F R2 r' U' R' U r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP37 3</h3>
        <p>&#8226; U' F R' F' R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP37 4</h3>
        <p>&#8226; U' F R U' R' U' R U R' F'</p><p>&#8226; U' R2 F R F' U' R U' R' U R</p><p>&#8226; F' r U r' U' r' F r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-b></x-b><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP37 5</h3>
        <p>&#8226; r U R' U R U2 r' U R' U' R U' R' U2 R</p><p>&#8226; r U R' U R U2 r' U2 R U2 R' U' R U' R'</p><p>&#8226; F R U' R' F R U' R' U' R U R' F' R U R' F'</p><p>&#8226; F R' F' R U R' F' R U R U' R' F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP37 6</h3>
        <p>&#8226; r U2 R2 D' R U' R' D R2 U' r'</p><p>&#8226; U' R' U R U R2 F R2 U R' U' F' U2 R</p><p>&#8226; U R U R' U R' U' R U' R' U2 F R F'</p><p>&#8226; U' F R U' R' U2 R U R' F' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP38 1</h3>
        <p>&#8226; U2 R' F R2 F' R2 f R2 f' U2 R</p><p>&#8226; U2 R' U' R U f R2 f' U' R' U' R</p><p>&#8226; U' r U2 R' U' R U' r' L U' R' U L' U' R</p><p>&#8226; L' U' L U F U2 F' U' L' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP38 2</h3>
        <p>&#8226; R U R' U F' U F U2 R U' R'</p><p>&#8226; U r' U' R U M' R' F' R U R' U' R' F R2</p><p>&#8226; U2 L U L' U L U2 y' R U R' U' F'</p><p>&#8226; U' f R U R2 F R F' R U' R' f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP38 3</h3>
        <p>&#8226; U2 R U R' U R U' R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP38 4</h3>
        <p>&#8226; U' F R U' R' S U' R U R' f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP38 5</h3>
        <p>&#8226; U' r U2 R' U' R U' r' U R' U2 R U R' U R</p><p>&#8226; U' r U2 R' U' R U' x' U L' U L U2 L'</p><p>&#8226; U2 L' U' L F L' U' L U L F' L' U L F' L' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP38 6</h3>
        <p>&#8226; F R U R' U' F' U R U R' U' R' F R F'</p><p>&#8226; F R U' R2 F R F' U' F2 r U r2 F2 r</p><p>&#8226; U2 R2 u' R U' R U R' u R F' U' F R</p><p>&#8226; U2 F U R2 D R' U2 R D' R' U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP39 1</h3>
        <p>&#8226; R' U' R f R f' R' U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP39 2</h3>
        <p>&#8226; R U R2 F R F' R U2 R' F' U F</p><p>&#8226; U2 F R U R' U' F' R' U' R U' R' U2 R</p><p>&#8226; U' R' F' U' F U R2 U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP39 3</h3>
        <p>&#8226; R U' r' U' F' U F r R'</p><p>&#8226; R U R' F' U' F U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP39 4</h3>
        <p>&#8226; r U R U' r' F U R' U' F'</p><p>&#8226; U R' r' D' r U' r' D r U R</p><p>&#8226; f' r U r' U' r' F r S</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP39 5</h3>
        <p>&#8226; U' R U2 R' U' R U R' F2 r U r' F</p><p>&#8226; U' R U2 R' U' R U' x' U L' U L U2 l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP39 6</h3>
        <p>&#8226; U2 F U R2 D r' U2 r D' R' U R' F'</p><p>&#8226; U' R' U' R U' R U R' U' R' U2 F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP40 1</h3>
        <p>&#8226; U' F R U R' U' F' R U' L' U R' U' L</p><p>&#8226; U' f U R U' R2 D' R U R' D R U' f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP40 2</h3>
        <p>&#8226; U' F R U R' U' F' R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP40 3</h3>
        <p>&#8226; U F R U R' F' R' F U' F' U R</p><p>&#8226; R r D r' U r D' r' U' R'</p><p>&#8226; U' f R' F' R U R U' R' S'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP40 4</h3>
        <p>&#8226; U R' F R U R' U' F' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP40 5</h3>
        <p>&#8226; L' U2 L U L' U x' U' R U' R' U2 r</p><p>&#8226; r' F2 r U r' F U' R U' R' U2 r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP40 6</h3>
        <p>&#8226; U R U R' F' U' F R U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP41 1</h3>
        <p>&#8226; F U R2 D R' U' R D' R2 F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP41 2</h3>
        <p>&#8226; M' R' F' U' F U R U' M</p><p>&#8226; R U R' U R U2 R' F R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP41 3</h3>
        <p>&#8226; U2 R U' R' U' F U R U' R' F' U' R U' R'</p><p>&#8226; R' D' F r U r' F2 r U r' D R</p><p>&#8226; U2 R U' R' U2 R U y R U' R' U' F'</p><p>&#8226; U2 R U' R' U2 R U B U' B' U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP41 4</h3>
        <p>&#8226; U' R U R' U R' F R F' R2 D R' U2 R D' R2</p><p>&#8226; r' F r U' r' F r U r' F U' F2 U r</p><p>&#8226; M' L U L' U L U2 L2 U R U' L U r'</p><p>&#8226; U R U2 R' U' F' U' F U R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP41 5</h3>
        <p>&#8226; F R' F R2 U R' U' F2 U2 r' F r</p><p>&#8226; U r U2 R' U' R U' r2 F2 r U r' F r</p><p>&#8226; U' x' R U' R' U R U' R' U x R' U' R U R' U' R U</p><p>&#8226; U L F' L' F L F' L' F L' U' L U L' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP41 6</h3>
        <p>&#8226; F R' F' U2 R U R' U R U' R U' R'</p><p>&#8226; F R' F' U2 R U R U' R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP42 1</h3>
        <p>&#8226; U' R' F R U R' F' R F U' R U R' U' F'</p><p>&#8226; U' R' U' F2 u' R U R' D R2 B</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP42 2</h3>
        <p>&#8226; U2 M U F R U R' U' F' M'</p><p>&#8226; U' r' U' r R' F R' F' R2 r' U r</p><p>&#8226; U2 R' U' R U' R' U2 R F R U R' U' F'</p><p>&#8226; L' U' L U' L' U2 L F' L' U' L U F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP42 3</h3>
        <p>&#8226; U' F R' F' R U2 R' U' R2 U' R2 U2 R</p><p>&#8226; U2 L' U L U2 L' U' y' L' U L U F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP42 4</h3>
        <p>&#8226; R U' R' U F' U' F U R U' R' U' R U R'</p><p>&#8226; U' F R U' R' U' R U R' F' R U2 R' U' R U' R'</p><p>&#8226; F' L F U2 L' U' L' U L U' L U' L'</p><p>&#8226; F R' U' R D' R U' R' D R' U2 R U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP42 5</h3>
        <p>&#8226; U' R' F2 r U r' F R2 U2 R' U' R U' R'</p><p>&#8226; U' R' F R F' R' F R F' R U R' U' R U R'</p><p>&#8226; U2 R' F2 R2 U' F U' F' U2 R2 F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP42 6</h3>
        <p>&#8226; U' R' U' F' U F U' R U' R2 D' R U2 R' D R2</p><p>&#8226; R' U2 R2 U R' U' R U R2 U R2 U' R2 F R F'</p><p>&#8226; U2 R U R' U R' F R F R U2 R' U2 R' F2 R</p><p>&#8226; F R U R' y' R' U' R' F R2 U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP43 1</h3>
        <p>&#8226; U' L' U R U' L U2 R' F' L' U' L F</p><p>&#8226; U' R2 F R F' R U2 R' F' U2 F R</p><p>&#8226; U2 x' R U R' D R U' x R2 F' R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP43 2</h3>
        <p>&#8226; U2 R' U' F' U F R</p><p>&#8226; U' F' U' L' U L F</p><p>&#8226; U f' L' U' L U f</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP43 3</h3>
        <p>&#8226; R' U2 R U R' U F R U R' U' F' U R</p><p>&#8226; U2 r' R U R' D R U' R U' R' U R' D' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP43 4</h3>
        <p>&#8226; R U' R' U R U' R' U' F R' F' R2 U R'</p><p>&#8226; U r2 D' r U' r' D r R U' R' U2 r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP43 5</h3>
        <p>&#8226; R U R' U' R' F R U' R' F R F' R U R' F'</p><p>&#8226; U2 x' R' D R U' R U' R D' R' U R' U x</p><p>&#8226; r' U' R U' R' U2 r U' r' U2 R U R' U r</p><p>&#8226; U2 r U R' U R U2 r' R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP43 6</h3>
        <p>&#8226; U2 R U' R' U' F' U2 F U R U' R'</p><p>&#8226; R U R' F' U2 R U R' U' R' F R2 U' R'</p><p>&#8226; U2 R r D r' U2 r D' r' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP44 1</h3>
        <p>&#8226; U' f R2 D R' U R D' R2 U' f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP44 2</h3>
        <p>&#8226; U F U R U' R' F'</p><p>&#8226; U' f R U R' U' f'</p><p>&#8226; U2 F R U' R' U2 R U R' F'</p><p>&#8226; U L U F' L F L' U' L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP44 3</h3>
        <p>&#8226; U' r D' r' U R' U R U' r D r'</p><p>&#8226; U2 F U R U2 R' U R U2 R' U' F'</p><p>&#8226; x' D R U' R U R' U R' D' R U' R' x</p><p>&#8226; U2 R U2 R' U' F' U' F U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP44 4</h3>
        <p>&#8226; U2 F R U' R' U' R U R2 F' R U R U' R'</p><p>&#8226; U2 L' U L U F U2 F' U' L' U L</p><p>&#8226; R' r' D' r U2 r' D r U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP44 5</h3>
        <p>&#8226; U2 R U R' U R U2 R' U r U2 R' U' R U' r'</p><p>&#8226; U' B r' U' R U' R U' r B R' B R'</p><p>&#8226; x R D' R' U R' U R' D R U' R U' x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP44 6</h3>
        <p>&#8226; U' f R U' R D R' U2 R D' R2 U' f'</p><p>&#8226; U r U R2 D' R U R' D R2 U2 r'</p><p>&#8226; U x' R U' R' D R U l' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP45 1</h3>
        <p>&#8226; U' F R2 D R' U R D' R2 U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP45 2</h3>
        <p>&#8226; U' F R U R' U' F'</p><p>&#8226; R' F' U' F U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP45 3</h3>
        <p>&#8226; R' U' R F R' U R U' R U R' U' F'</p><p>&#8226; U' F R' D' R U R' D R U' R U R' U' F'</p><p>&#8226; R U R2 F R2 U R' U' F2 U2 F</p><p>&#8226; U' x' R U R' D R U' x U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP45 4</h3>
        <p>&#8226; U' F U R' D' R U' R' D R2 U R' U' F'</p><p>&#8226; L' U R U' L U R' f U R U' R' f'</p><p>&#8226; U' F R2 D R' U' R D' R' U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP45 5</h3>
        <p>&#8226; U2 R U R' U R U2 R' r' U' R U' R' U2 r</p><p>&#8226; R' U' R U' R' U2 R r U R' U R U2 r'</p><p>&#8226; U R U2 R' U' R U' R2 F2 r U r' F R</p><p>&#8226; R' U' R U R' U' R' F R F' R' F R F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP45 6</h3>
        <p>&#8226; R U' L' U R' U' L F R U R' U' F'</p><p>&#8226; U' F R U' R D R' U2 R D' R2 U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP46 1</h3>
        <p>&#8226; U R2 D r' U' r D' R2 F' U F</p><p>&#8226; f U R2 D R' U' R D' R2 f'</p><p>&#8226; U2 F R U2 L U' R' U L' U2 F'</p><p>&#8226; F U R U' R' U F' R' F R U' R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP46 2</h3>
        <p>&#8226; U R' U' R' F R F' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP46 3</h3>
        <p>&#8226; R' F R U' R' U2 R U R2 F' R U R</p><p>&#8226; F R U R2 U' R F' U' R' U2 R</p><p>&#8226; U R U R' F R' F' R U R U' l U' R' U l'</p><p>&#8226; U R U R' U F' L' U L F U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP46 4</h3>
        <p>&#8226; r' U r U r' U' r U f R2 f'</p><p>&#8226; U2 R' F R U R' F' R U F U2 F'</p><p>&#8226; U2 l' U l U l' U' l U y' R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP46 5</h3>
        <p>&#8226; U2 F R U R2 F R F' R U' R' U R U' R' F'</p><p>&#8226; U' R U R' U R' F R F' R' F R F' R U2 R'</p><p>&#8226; U R D r' U' r D' R2 U' R' F R F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP46 6</h3>
        <p>&#8226; U2 r U' r' U' r U r' U' F' U2 F</p><p>&#8226; U R U R' U R U' R' F' U F R U' R'</p><p>&#8226; U2 r U' r' U' r U r' U' y L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP47 1</h3>
        <p>&#8226; U F R' F' R U2 R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP47 2</h3>
        <p>&#8226; U2 F R U' R' F' r' F' r U r' F r</p><p>&#8226; U F U R U' R' F' R U R' U R U2 R'</p><p>&#8226; U' L' U' L U' L F' L' F L' U L U' L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP47 3</h3>
        <p>&#8226; U2 F' U' F2 R U' R' U' R U R' F' R U' R'</p><p>&#8226; U F U R U' R' F' R U' r' F R' F' r</p><p>&#8226; x R' U' R D' R' U R' U R2 D R' U' R x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP47 4</h3>
        <p>&#8226; U' R' U' R U R' U' R U2 R' U' F' U' F U' R</p><p>&#8226; U2 r U' r B r2 y' U2 R U' L' U L R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP47 5</h3>
        <p>&#8226; U2 R' U' R' F R F' R' F R F' U R</p><p>&#8226; U2 F' L' U' L U L' U' L U F</p><p>&#8226; r' U' R U r U2 R' U' R U' R2 U2 R</p><p>&#8226; U2 b' U' R' U R U' R' U R b</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP47 6</h3>
        <p>&#8226; U R' F R U R' U' F' R' F R F' U R</p><p>&#8226; f' U f U2 R' U' R U' R2 U2 R</p><p>&#8226; F R U R' U2 F' U2 F U R U' R' U' F'</p><p>&#8226; U F' L' U L U L' U2 L U L' U' L U F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP48 1</h3>
        <p>&#8226; U F R' F' r U2 R U' R' U R U2 r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP48 2</h3>
        <p>&#8226; F' r' F r F R U R' U' R U' R'</p><p>&#8226; U2 R U R' U R U2 R2 F' U' F U R</p><p>&#8226; R' U' F' U F R2 U2 R' U' R U' R'</p><p>&#8226; U' R U R' U R' F R F' R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP48 3</h3>
        <p>&#8226; R U2 R' U' R U R' U2 R' F R F'</p><p>&#8226; U F' L F L' U2 L' U L U' L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP48 4</h3>
        <p>&#8226; F R U R' U' R2 D R' U R D' R2 U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP48 5</h3>
        <p>&#8226; F R U R' U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP48 6</h3>
        <p>&#8226; F R' F' U2 R U R' U R2 U2 R'</p><p>&#8226; U F R U' R' U' R U2 R' U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP49 1</h3>
        <p>&#8226; U R U R' U R U' y R U2 R' U' R U R' F'</p><p>&#8226; F2 U' F L F' U F U' L2 U L F</p><p>&#8226; U' x R' U R D' R2 U' R U' R D R' U R x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP49 2</h3>
        <p>&#8226; U R' U2 R U R' U R F R U R' U' F'</p><p>&#8226; U R U2 R' U' R U R' F R' F' R U' R U' R'</p><p>&#8226; U' L' U2 L U L' U L f U R U' R' f'</p><p>&#8226; U2 R U R' U R U' R' F' U2 F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP49 3</h3>
        <p>&#8226; F R' F' U' F U' R2 U R2 U R F'</p><p>&#8226; r U2 R' U' R U R' U2 M r' F R F' M'</p><p>&#8226; R' U' R2 U R' U' R' y r U r' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP49 4</h3>
        <p>&#8226; R' F R' F' R2 U2 f' U f R'</p><p>&#8226; R' F R' F' R2 U2 B' R B R'</p><p>&#8226; U2 r' U r' F' r2 U2 F' r U r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP49 5</h3>
        <p>&#8226; r U' r2 U r2 U r2 U' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP49 6</h3>
        <p>&#8226; U' R' F R f' U2 R' F R F2 U2 f</p><p>&#8226; U' F' L' U L U L' U' L U' L' U L F</p><p>&#8226; F' L F l' U2 F' L F L2 U2 l</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP50 1</h3>
        <p>&#8226; R U R' F R U' R' U R U R' F2 U F</p><p>&#8226; U R' F R U R' D R2 U' R2 D' F' R</p><p>&#8226; U' L' U R U' L U R' f R U R' U' f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP50 2</h3>
        <p>&#8226; U' R U2 R' U' R U' R' F R U R' U' F'</p><p>&#8226; U L' U2 L U L' U' L F' L F L' U L' U L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP50 3</h3>
        <p>&#8226; U' R U2 R' U2 R' F R2 U' R' U' R U2 R' U' F'</p><p>&#8226; U x' R U' R' D R2 U R' U R' D' R U' R' x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP50 4</h3>
        <p>&#8226; R B' R B R2 U2 F R' F' R</p><p>&#8226; U2 R' U R U' R2 F R2 U R' U' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP50 5</h3>
        <p>&#8226; U2 l' U l2 U' l2 U' l2 U l'</p><p>&#8226; r' U r2 U' r2 U' r2 U r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP50 6</h3>
        <p>&#8226; U2 F R' F' r U2 F R' F' R2 U2 r'</p><p>&#8226; U' F R U' R' U' R U R' U R U' R' F'</p><p>&#8226; f R U R' U R' D' R U2 R' D R f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><div></div><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP51 1</h3>
        <p>&#8226; U2 L' U2 L U2 L F' L2 U' L U F</p><p>&#8226; R' U2 R U2 R U R' U' R' F R F' R' U R</p><p>&#8226; U2 R U' R' U2 R' U2 R U R' F R F' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP51 2</h3>
        <p>&#8226; U' R' U' R' F R F' R U' R' U2 R</p><p>&#8226; U2 f R D' R2 U R2 U' R2 D R' f'</p><p>&#8226; U R' U2 R U R' F R' F' R U R</p><p>&#8226; U' R U2 R' U' F' U2 F U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP51 3</h3>
        <p>&#8226; R U2 R' U2 R' F R2 U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP51 4</h3>
        <p>&#8226; R U R2 F R F' R U' R' F' r' F r F</p><p>&#8226; U' R U R' U R U' R' F' U F R U R' U' R U' R'</p><p>&#8226; R' U' R U' R' U2 R U' R U2 R' U2 R' F R F'</p><p>&#8226; U2 R U2 R' U' R' F' U' F U R2 U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP51 5</h3>
        <p>&#8226; f R U R' U' R U R' U' f'</p><p>&#8226; U2 F U R U' R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP51 6</h3>
        <p>&#8226; R' U2 R U2 F R U R' U' F' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP52 1</h3>
        <p>&#8226; U F U R U' R2 F' R U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP52 2</h3>
        <p>&#8226; R' F' U' F U' R U R' U R</p><p>&#8226; U2 R U R' U R d' R U' R' F'</p><p>&#8226; L U L' U L U' y L U' L' B'</p><p>&#8226; U2 R U R' U R U' B U' B' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP52 3</h3>
        <p>&#8226; U F' U' r' F r2 U r' U2 r' F2 r</p><p>&#8226; U F' U' L' U L2 F L' U2 L' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP52 4</h3>
        <p>&#8226; U' R U' R' F' U' F U2 R U R' U' R U R'</p><p>&#8226; U' F' U' F r U' r' U r U' R' U' R U' r'</p><p>&#8226; U' R U R' U' R' F R F' U2 R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP52 5</h3>
        <p>&#8226; R U2 R2 u' R U' R' U R' u R</p><p>&#8226; R' U2 R2 u R' U R U' R u' R'</p><p>&#8226; U2 r' U' R' F R F' R' F R F' U r</p><p>&#8226; R' U' F R' F' R F R' F' R U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP52 6</h3>
        <p>&#8226; U R U R' F' U' F U R' U' R2 U' R2 U2 R</p><p>&#8226; U F U R' U' R F' R2 F R F' U R</p><p>&#8226; U2 R U R' U2 R U2 R' U R U R' U R U' R2 F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP53 1</h3>
        <p>&#8226; L' U R U' L U' R' U2 R' F R F'</p><p>&#8226; r' F R F' r U' R' U2 R' F R F'</p><p>&#8226; F R U R' U' F' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP53 2</h3>
        <p>&#8226; U2 R U R2 F R F' R U2 R' F R' F' R2 U' R'</p><p>&#8226; R' F' U' F U F' U' F U' R F U' R' U' R U F'</p><p>&#8226; x U R' U R U2 l U' L' U R' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP53 3</h3>
        <p>&#8226; F R U R' U' R U' R' U R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP53 4</h3>
        <p>&#8226; U' R U' R2 U' R' F R U R2 U' R2 F' R2 U2 R'</p><p>&#8226; U F' U L' U2 L2 F' L' F L' U L U2 F</p><p>&#8226; b' U' R D U R' U' R D' R U R b</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP53 5</h3>
        <p>&#8226; U' r' U2 R U R' U' R U R' U r</p><p>&#8226; U l' U2 L U L' U' L U L' U l</p><p>&#8226; U2 r' U' R U' R' U R U' R' U2 r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP53 6</h3>
        <p>&#8226; U R' F R F' U' F R' F' R2 U' R'</p><p>&#8226; U' R U' R' U R U' R' U2 F' U F R U R'</p><p>&#8226; U R' F R F' U2 l2 F' l' U l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP54 1</h3>
        <p>&#8226; U R' U' F' U F U' R' D' R U R' D R2</p><p>&#8226; U2 F R U R' U' F' R' U' F U R U' R' F' R</p><p>&#8226; U2 F' L' U' L U L' U L U' L' U' L F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP54 2</h3>
        <p>&#8226; U F R U R' U' S R U R' U' R U R' U' f'</p><p>&#8226; x' U' R U' R' U2 R' F r U' R U2 L'</p><p>&#8226; R U2 R D R' U' R D' R2 F' U F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP54 3</h3>
        <p>&#8226; U2 R U2 R' U' F' U' F R U R' U' R U' R'</p><p>&#8226; U R' F' U' F U R U L' U' L U L F' L' F</p><p>&#8226; U2 R U' L' U R' U L U2 L F' L' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP54 4</h3>
        <p>&#8226; R U R' U' R' F2 R F2 U2 r U' r' F</p><p>&#8226; U F U' R U2 R2 F R F' R U' R' U2 F'</p><p>&#8226; U R U R' U R U' R' F' U' F R U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP54 5</h3>
        <p>&#8226; U2 r U R' U R U' R' U R U2 r'</p><p>&#8226; x' D R2 U' R' U R U' R' U R' D' x</p><p>&#8226; U r U2 R' U' R U R' U' R U' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP54 6</h3>
        <p>&#8226; U r U' r' F U2 r2 F r U' r</p><p>&#8226; U' R B' R' B U2 R2 F R F' R</p><p>&#8226; U L F' L' F U2 r2 F r U' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP55 1</h3>
        <p>&#8226; R U2 R2 U' R U' R' U2 F R F'</p><p>&#8226; r U2 R2 F R F' U2 r' F R F'</p><p>&#8226; U2 R' U' F R' F' R F U R U' R' F' R</p><p>&#8226; U' f R D' R2 U R D R U' D' R2 D f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP55 2</h3>
        <p>&#8226; U F U' R2 D R' U2 R D' R2 U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP55 3</h3>
        <p>&#8226; U2 r U2 R2 F R F' U2 r' F R F'</p><p>&#8226; U2 R U2 R2 U' R U' R' U2 F R F'</p><p>&#8226; R U R' f' U L' U2 L U L' U' L U f</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP55 4</h3>
        <p>&#8226; U' R' F U R U' R2 F' R2 U R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP55 5</h3>
        <p>&#8226; U R' F R U R U' R2 F' R2 U' R' U R U R'</p><p>&#8226; U r U2 R' U' r' R2 U R' U' r U' r'</p><p>&#8226; R U R' U R U' R' F' r' F2 r U F</p><p>&#8226; U r U2 R' U' M R U R' U' r U' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP55 6</h3>
        <p>&#8226; U R' F U R U' R2 F' R2 U R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP56 1</h3>
        <p>&#8226; U2 F R U R' U' R F' r U R' U' r'</p><p>&#8226; U2 f R' D' R U2 R' D R U' R U' R' f'</p><p>&#8226; F R U R' U' F' r U R' U' r' F R F'</p><p>&#8226; f U R U' R' U f' R B L' B' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP56 2</h3>
        <p>&#8226; U f U R U' R' U R U' R' S' U R U' R' F'</p><p>&#8226; L' U2 R U' L U l' U2 R' U' R U' x'</p><p>&#8226; U F R U R' U' R U R' U' S R U R' U' f'</p><p>&#8226; U R' F R U2 R' F' R U F R U R' U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP56 3</h3>
        <p>&#8226; U2 F R U R' U' F' r U R' U' r' F R F'</p><p>&#8226; F R U R' U' R F' r U R' U' r'</p><p>&#8226; U2 R' F R F' U2 R U' R' d R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP56 4</h3>
        <p>&#8226; U2 r U R' U R U r' U' r U r' F' U F</p><p>&#8226; U' R' F R F' U' F R' F' R S' R U' R' S</p><p>&#8226; F R U R' U2 y' R' U2 L R U' R' U L'</p><p>&#8226; F R U' R' F' U' F R U' l' U R' U' R U' x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP56 5</h3>
        <p>&#8226; r U r' U R U' R' U R U' R' r U' r'</p><p>&#8226; r U r' U R U' R2 r U R U2 r'</p><p>&#8226; r U r' U R U' R' U R U' M' U' r'</p><p>&#8226; r' U' r U' R' U R U' R' U R r' U r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-l></x-l><div></div><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP56 6</h3>
        <p>&#8226; r U R' U R U r' U' r U r' F' U F</p><p>&#8226; U2 F R U' R' F' U' F R U' l' U R' U' R U' x'</p><p>&#8226; U2 F R U R' U2 y' R' U2 L R U' R' U L'</p><p>&#8226; r U R' U R U r' U' r U r' y' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP57 1</h3>
        <p>&#8226; U2 R U' R' F' U F R U R2 F R F'</p><p>&#8226; U R2 B' R' B R' F' U' F R U R'</p><p>&#8226; U R U R' U' r' F R2 U' R' U' R U R' F' U M'</p><p>&#8226; U2 R U' R' F' U F R x' U' R U R2 x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP57 2</h3>
        <p>&#8226; R U' R2 F R F' R U' B U2 B' R'</p><p>&#8226; U F' r' U' r F r2 D' r U r' D r2</p><p>&#8226; R U' R2 F R F' R d' R U2 R' F'</p><p>&#8226; R U' x' z' U2 R U R' U F' r U2 r' U'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP57 3</h3>
        <p>&#8226; R U' R' F' U F R U R2 F R F'</p><p>&#8226; R U' R' F' U F R x' U' R U R2 x</p><p>&#8226; F R' F' R2 U' R' F' U' F R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP57 4</h3>
        <p>&#8226; U2 R U2 R' U2 R' F R U R U2 R' U' R U R' F'</p><p>&#8226; l' U' l F L' U' L U L F' L' l' U l</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP57 5</h3>
        <p>&#8226; R U R' U' M' U R U' r'</p><p>&#8226; U S R' F R S' R' F' R</p><p>&#8226; M' U' M U M' U' M U' M' U2 M</p><p>&#8226; M' U M U' M' U M U M' U2 M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLLCP57 6</h3>
        <p>&#8226; R U R' U' M' R' F R2 U' R' U' R U R' F' M</p><p>&#8226; R U2 R' U2 R' F R U R U2 R' U' R U R' F'</p><p>&#8226; r U r' F' R U R' U' R' F R r U' r'</p><p>&#8226; F R U' R' U R U R2 F' r U R U' r'</p>
    </div>
</div>