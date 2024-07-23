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
<h2 id="Antisune">Antisune</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>AS 1</h3>
        <p>&#8226; R' U' R U' R' U2 R</p><p>&#8226; U R U2 R' U' R U' R'</p><p>&#8226; U2 L' U' L U' L' U2 L</p><p>&#8226; U' L U2 L' U' L U' L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>AS 2</h3>
        <p>&#8226; U R' U' R U' R' U R' D' R U R' D R2</p><p>&#8226; U2 R2 D R' U R D' R' U R' U' R U' R'</p><p>&#8226; U2 R' F U2 F' R F R' U2 R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>AS 3</h3>
        <p>&#8226; U2 R2 D R' U2 R D' R2 U' R U' R'</p><p>&#8226; R' U' F' R U R' U' R' F R2 U' R' U R</p><p>&#8226; U2 f' L F L' U2 L' U2 L U2 S</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>AS 4</h3>
        <p>&#8226; U2 R' U' R U' R2 D' R U2 R' D R2</p><p>&#8226; U2 R U2 R' U2 r' F R F' M'</p><p>&#8226; R' U' R U R' F R U R' U' R' F' R2</p><p>&#8226; U2 R U2 R' U2 L' U R U' R' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>AS 5</h3>
        <p>&#8226; U2 r' F R F' r U R'</p><p>&#8226; U2 L' U R U' L U R'</p><p>&#8226; R' U L U' R U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>AS 6</h3>
        <p>&#8226; R U R' F' R U2 R' U' R U' R' F R U' R'</p><p>&#8226; R U2 r' F R' F' r U' R U' R'</p><p>&#8226; R U' R' U2 R U' R' U2 R' D' R U R' D R</p><p>&#8226; U2 L U2 R' U L' U' R U' L U' L'</p>
    </div>
</div>
<h2 id="Sune">Sune</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>S 1</h3>
        <p>&#8226; R U R' U R U2 R'</p><p>&#8226; U' R' U2 R U R' U R</p><p>&#8226; U2 L U L' U L U2 L'</p><p>&#8226; U L' U2 L U L' U L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>S 2</h3>
        <p>&#8226; U2 R U R' U R2 D R' U2 R D' R2</p><p>&#8226; r' F2 r U2 R U' r' F M'</p><p>&#8226; L' U2 L U2 R U' L' U L R'</p><p>&#8226; L' U2 L U2 l F' L' F M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>S 3</h3>
        <p>&#8226; L' R U R' U' L U2 R U2 R'</p><p>&#8226; U2 R2 D' R U2 R' D R2 U R' U R</p><p>&#8226; f R' F' R U2 R U2 R' U2 S'</p><p>&#8226; M F R' F' r U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>S 4</h3>
        <p>&#8226; U' R U R' U R U' R D R' U' R D' R2</p><p>&#8226; U' F R' U2 R F' R' F U2 F' R</p><p>&#8226; R U R' U' R' F R F' r U R' U R U2 r'</p><p>&#8226; r U R' U' r' F R F' R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>S 5</h3>
        <p>&#8226; R U' L' U R' U' L</p><p>&#8226; R U' r' F R' F' r</p><p>&#8226; U2 L U' R' U L' U' R</p><p>&#8226; z D R' U' R D' R' U R z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>S 6</h3>
        <p>&#8226; U2 R U R' F' R U R' U R U2 R' F R U' R'</p><p>&#8226; U2 R U R' U r' F R F' r U2 R'</p><p>&#8226; F R U' R2 U2 R U R' U R2 U R' F'</p><p>&#8226; F' R U2 R' U2 R' F2 R U R U' R' F'</p>
    </div>
</div>
<h2 id="L">L</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>L 1</h3>
        <p>&#8226; U' R U R' U R U' R' U R U' R' U R U2 R'</p><p>&#8226; U' R U2 R' U' R U R' U' R U R' U' R U' R'</p><p>&#8226; U2 R' U2 R U R' U' R U R' U' R U R' U R</p><p>&#8226; R' U' R U' R' U2 R U' R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>L 2</h3>
        <p>&#8226; R' U2 R' D' R U2 R' D R2</p><p>&#8226; U2 L' U2 L' D' L U2 L' D L2</p><p>&#8226; U' R' U2 R U R2 D' R U R' D R2</p><p>&#8226; U' r D r' U r D' r' U y R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>L 3</h3>
        <p>&#8226; U R U2 R D R' U2 R D' R2</p><p>&#8226; U2 R U2 R2 D' R U' R' D R2 U' R'</p><p>&#8226; R' F' R U R' U' R' F R2 U' R' U2 R</p><p>&#8226; R' D' r U2 r' D R U2 R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>L 4</h3>
        <p>&#8226; U F R' F' r U R U' r'</p><p>&#8226; U2 R2 D R' U R D' R' U' R'</p><p>&#8226; R U R' U' R' F R U R U' R' F'</p><p>&#8226; x' R U' R' D R U R' D' x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>L 5</h3>
        <p>&#8226; U2 F' r U R' U' r' F R</p><p>&#8226; U x R' U R D' R' U' R D x'</p><p>&#8226; U' R2 D' R U' R' D R U R</p><p>&#8226; U' F R U' R' U' R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>L 6</h3>
        <p>&#8226; U r U2 R2 F R F' R U2 r'</p><p>&#8226; U' R' U' R U R' F' R U R' U' R' F R2</p><p>&#8226; U' R' U' R U' F U' R' U' R U F'</p><p>&#8226; U F R U R2 F R F' R U' R' F'</p>
    </div>
</div>
<h2 id="U">U</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>U 1</h3>
        <p>&#8226; R' U' R U' R' U2 R2 U R' U R U2 R'</p><p>&#8226; U2 R U R' U R U2 R2 U' R U' R' U2 R</p><p>&#8226; U' R U R' U' R U' R' U2 R U' R' U2 R U R'</p><p>&#8226; U2 R U R' U R U2 R' U R U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>U 2</h3>
        <p>&#8226; R' F R U' R' U' R U R' F' R U R' U' R' F R F' R</p><p>&#8226; U F U R U2 R' U R U R2 F' r U R U' r'</p><p>&#8226; U' R' U' R F R2 D' R U R' D R2 U' F'</p><p>&#8226; U' r U R' U' r' F R U R' U' R F' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>U 3</h3>
        <p>&#8226; U2 R2 D R' U2 R D' R' U2 R'</p><p>&#8226; R' U R U R' F' R U R' U' R' F R2 U' R' U' R</p><p>&#8226; R U' R' U' R U2 R' U' R' D' R U2 R' D R</p><p>&#8226; R' U' R U' R' U2 R2 U' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>U 4</h3>
        <p>&#8226; F R U' R' U R U R' U R U' R' F'</p><p>&#8226; U2 R' F2 R U2 R U2 R' F2 R U2 R'</p><p>&#8226; U2 R U2 R' U2 L' U2 R U2 R' U2 L</p><p>&#8226; U' F U2 R' D' R U2 R' D R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>U 5</h3>
        <p>&#8226; R2 D' R U2 R' D R U2 R</p><p>&#8226; R2 F' R U R' U' R' F R' U' R2 U2 R2 U R' U R</p><p>&#8226; U2 L2 D' L U2 L' D L U2 L</p><p>&#8226; L U' R U' L' U R' U2 L U' L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>U 6</h3>
        <p>&#8226; R2 D' R U R' D R U R U' R' U' R</p><p>&#8226; R' U2 R F U' R' U' R U F'</p><p>&#8226; R U' R' U' R U R D R' U R D' R2</p><p>&#8226; R' U2 R U2 R' F' R U R' U' R' F R2</p>
    </div>
</div>
<h2 id="T">T</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>T 1</h3>
        <p>&#8226; R U2 R' U' R U' R2 U2 R U R' U R</p><p>&#8226; U' R U R' U R U2 R' L' U' L U' L' U2 L</p><p>&#8226; U' R U R2 U' R2 U' R2 U2 R U' R U' R'</p><p>&#8226; R U2 R' r' F2 r U' R U' R' U' r' F r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>T 2</h3>
        <p>&#8226; R' U R U2 R' L' U R U' L</p><p>&#8226; R' U2 R U R2 F R U R U' R' F' R</p><p>&#8226; U2 R' F R U R' U' R' F' R2 U' R' U2 R</p><p>&#8226; U2 R U' R' U2 L R U' R' U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>T 3</h3>
        <p>&#8226; U R' F' r U R U' r' F</p><p>&#8226; U l' U' L U R U' r' F</p><p>&#8226; U2 R' U' R' D' R U R' D R2</p><p>&#8226; U2 x' R U R' D R U' R' D' x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>T 4</h3>
        <p>&#8226; U2 F R U R' U' R U' R' U' R U R' F'</p><p>&#8226; U2 F R' D' R U2 R' D R U2 F'</p><p>&#8226; U R U2 R' F2 R U2 R' U2 R' F2 R</p><p>&#8226; U' L' U2 R U2 R' U2 L U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>T 5</h3>
        <p>&#8226; U' r U R' U' r' F R F'</p><p>&#8226; R U R D R' U' R D' R2</p><p>&#8226; U' R U R' U' L' U R U' R' L</p><p>&#8226; R' F' R U R' U' R' F R U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>T 6</h3>
        <p>&#8226; R' U R2 D r' U2 r D' R2 U' R</p><p>&#8226; U2 R U' R2 D' r U2 r' D R2 U R'</p><p>&#8226; U R' U' R U R2 D' R U2 R' D R2 U' R' U R</p><p>&#8226; U R U R' U' R2 D R' U2 R D' R2 U R U' R'</p>
    </div>
</div>
<h2 id="Pi">Pi</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi 1</h3>
        <p>&#8226; R' U2 R2 U R2 U R2 U2 R'</p><p>&#8226; U2 L' U2 L2 U L2 U L2 U2 L'</p><p>&#8226; R U2 R2 U' R2 U' R2 U2 R</p><p>&#8226; R U R' U R U2 R' U' R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi 2</h3>
        <p>&#8226; U F U R U' R' U R U' R2 F' R U R U' R'</p><p>&#8226; R' F2 R U2 R U2 R' F2 U' R U' R'</p><p>&#8226; U2 L' U' L U L F' L2 U' L U L' U' L U F</p><p>&#8226; U M F R' F' r U2 R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi 3</h3>
        <p>&#8226; R' U' F' R U R' U' R' F R2 U2 R' U2 R</p><p>&#8226; U F U R U' R' U R U2 R' U' R U R' F'</p><p>&#8226; U F R2 U' R2 U R2 U S R2 f'</p><p>&#8226; U' R U R' U R U2 R2 F' r U R U' r' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi 4</h3>
        <p>&#8226; R U R' U' R' F R2 U R' U' R U R' U' F'</p><p>&#8226; R U2 R' U' R U R' U2 r' F R F' M'</p><p>&#8226; U' R' U2 R U R' U R2 U' L' U R' U' L</p><p>&#8226; U2 L F2 L' U2 L' U2 L F2 U L' U L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi 5</h3>
        <p>&#8226; U' R U R' U F' R U2 R' U2 R' F R</p><p>&#8226; U' R U2 R' U R' D' R U2 R' D R2 U' R'</p><p>&#8226; R U' L' U R' U L U L' U L</p><p>&#8226; U2 L' U R U' L U' R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>Pi 6</h3>
        <p>&#8226; U' r U R' U R' F R F' R U' R' U R U2 r'</p><p>&#8226; R' F' U' F U' R U S' R' U R S</p><p>&#8226; R2 D' R U R' D R U R U' R' U R U R' U R</p><p>&#8226; R U2 R2 F R F' R' F R F' R' F R F' R U2 R'</p>
    </div>
</div>
<h2 id="H">H</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>H 1</h3>
        <p>&#8226; R U R' U R U' R' U R U2 R'</p><p>&#8226; U' R U2 R' U' R U R' U' R U' R'</p><p>&#8226; U R U2 R' U' R U R' U' R U' R'</p><p>&#8226; U' R' U2 R U R' U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>H 2</h3>
        <p>&#8226; F R U' R' U R U2 R' U' R U R' U' F'</p><p>&#8226; f R2 S' U' R2 U' R2 U R2 F'</p><p>&#8226; U2 f R U R' U' R F' R U R' U' R' S'</p><p>&#8226; f R U R' U' f' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><div></div><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>H 3</h3>
        <p>&#8226; R U R' U R U L' U R' U' L</p><p>&#8226; R' F' R U2 R U2 R' F U' R U' R'</p><p>&#8226; R U R' U R U r' F R' F' r</p><p>&#8226; R U R2 D' R U2 R' D R U' R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><div></div><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><div></div><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>H 4</h3>
        <p>&#8226; U F R U R' U' R U R' U' R U R' U' F'</p><p>&#8226; U F U R U' R' U R U' R' U R U' R' F'</p><p>&#8226; U' F U R U' R' U R U' R' U R U' R' F'</p><p>&#8226; U R' F2 R2 U2 R' F2 R U2 R2 F2 R</p>
    </div>
</div>