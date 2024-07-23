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
<h2 id="AS">AS</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 AS 1</h3>
        <p>&#8226; F R2 U R' U2 R U R2 U F'</p><p>&#8226; U2 R' U2 R2 U' R' U R' F R F R2</p><p>&#8226; x U' R2 F R2 F' U R' U2 R' U x'</p><p>&#8226; R U2 R' F R' F' R U' R U' R F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 AS 2</h3>
        <p>&#8226; U2 R' F' R U' R' F2 R' F2 R2</p><p>&#8226; U2 L' U' L U' L' U2 L' F2 R2</p><p>&#8226; U R U2 R' U' R U' R B2 R2</p><p>&#8226; R' U' R U' R' U2 R' F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 AS 3</h3>
        <p>&#8226; U2 R' F R F' R U R B2 R2</p><p>&#8226; U2 R' F R F' R U R F2 R2</p><p>&#8226; U2 L' U L F' R U R B2 R2</p><p>&#8226; U2 L' U L F2 L2 F R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 AS 4</h3>
        <p>&#8226; U2 F' L F L' U2 L' U2 L' B2 L2</p><p>&#8226; U' R' U R' F R2 F R2 F'</p><p>&#8226; U2 F' R U R' U2 R' F2 R' F2 R2</p><p>&#8226; U' R' U L' U R2 U R2 U'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 AS 5</h3>
        <p>&#8226; R' U' R U' R' U' R' F2 R F' R</p><p>&#8226; U2 F R F' U R2 F' R U' R</p><p>&#8226; U2 R U2 R' U2 R' F R F R2 F2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 AS 6</h3>
        <p>&#8226; U2 R2 F2 R F R F' R U R'</p><p>&#8226; R2 F2 R U L U' R U L'</p><p>&#8226; U2 L' U' L U L F' L' F L' U' L U' L' U2 L' B2 L2</p><p>&#8226; U R U R2 F' R F R U' R2 F R' F2 R2</p>
    </div>
</div>
<h2 id="H">H</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 H 1</h3>
        <p>&#8226; R2 F U2 F2 R2 F' R2</p><p>&#8226; R U' R' F R' F' R2 U' R' F R' F' R' F2 R2</p><p>&#8226; U F R U R' U' R U R' U' R U R' U' F' R2 F2 R2 U'</p><p>&#8226; U F2 R U2 R2 F2 R' F2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 H 2</h3>
        <p>&#8226; U R2 B2 U2 R' U2 R2</p><p>&#8226; U R2 U2 R' U2 B2 R2</p><p>&#8226; U R2 U2 R' U2 F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 H 3</h3>
        <p>&#8226; R' U' R U2 R2 F' R U' F R</p><p>&#8226; U2 R U R' U R U R' F R' F' R' F2 R2</p><p>&#8226; U R' U' F R U' R U R' U2 R' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 H 4</h3>
        <p>&#8226; U' R U2 B2 R' U R U' B R'</p><p>&#8226; U2 F R2 U' R2 U' R2 U R2 F R2 F2</p><p>&#8226; U2 F R2 U' R2 U' R2 U R2 F B2 R2 F2 R2 U2</p><p>&#8226; U R U' R' F U2 R2 F' R F' R</p>
    </div>
</div>
<h2 id="L">L</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 L 1</h3>
        <p>&#8226; U L2 B2 L U' L' U L F' L F</p><p>&#8226; U R2 B2 R2 F R' F' R U R U' R'</p><p>&#8226; U R' U' R' F' R U' R U' R' F R</p><p>&#8226; U F U' R U R U' R' U R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 L 2</h3>
        <p>&#8226; U2 F2 R2 F R U R' U' R' F R</p><p>&#8226; U2 R2 B2 R' U R U' R' F R' F'</p><p>&#8226; R U' R' U R U' R' F R' F' R2 U R B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 L 3</h3>
        <p>&#8226; U2 R2 U' R U2 R' U2 R U' F2 R2</p><p>&#8226; U R' U' F2 R U2 R' U2 F R</p><p>&#8226; U2 R2 F2 R U R' U2 R U' R' U R U' R2</p><p>&#8226; U' R U R' U R U' R' U R U' R' U R U2 R B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 L 4</h3>
        <p>&#8226; U' R' U L' U2 R' F R U' R' U' F' x2</p><p>&#8226; U R U2 R2 F R F' R U2 R B2 R2</p><p>&#8226; U' R' U' R U R' F' R U R' U' R' F' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 L 5</h3>
        <p>&#8226; U F R' F' R U R U' R B2 R2</p><p>&#8226; U F R' F' R U R U' R F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 L 6</h3>
        <p>&#8226; U2 F' R U R' U' R' F R' F2 R2</p><p>&#8226; R U R U' R' F R' F R2 B2</p><p>&#8226; U F R U' R' U' R U R' F R2 B2</p>
    </div>
</div>
<h2 id="Pi">Pi</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 Pi 1</h3>
        <p>&#8226; F U' R U2 R U' R' U R' F'</p><p>&#8226; U' R' U' R' F R F' R U' R' U2 R' F2 R2</p><p>&#8226; U' F2 U' F2 R U2 R F2 U' R2</p><p>&#8226; R' F' U' F U' R U R' U R' F2 R2 U'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 Pi 2</h3>
        <p>&#8226; R U2 R2 U R' F2 R2 F'</p><p>&#8226; R U' R2 U R2 U R2 U' R' F2 R2</p><p>&#8226; R' U2 R2 U' R' F2 R2 F'</p><p>&#8226; R' U R2 U' R2 U' R2 U R B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 Pi 3</h3>
        <p>&#8226; U F R2 U' R2 U R2 U R2 F R2 F2 U2</p><p>&#8226; U2 R' F' U R' F R2 U2 R' U R</p><p>&#8226; U' R U' R U' R' U R' F R2 F R2 F2</p><p>&#8226; U' R U' R U' R' U R' F R2 F' R2 F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 Pi 4</h3>
        <p>&#8226; U2 R' F R F' R U' R' U' R U' R F2 R2</p><p>&#8226; U R U' F U' F' R F2 U2 R' U</p><p>&#8226; R U' R' F L' U L U R' F R' F2 R2</p><p>&#8226; R U' R' F R' F R U R' F R' F2 R2 U2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 Pi 5</h3>
        <p>&#8226; U' R' F' R' F2 R2 U R' U2 R U</p><p>&#8226; U' R' F' R' F2 R2 U R' U2 R</p><p>&#8226; U F U R U' R' U R U' R2 F' R U R U' R F2 R2 U'</p><p>&#8226; U F R' F' R U2 R U' R' U R U2 R B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 Pi 6</h3>
        <p>&#8226; U R' U2 R U' R2 F2 R F R U'</p><p>&#8226; U R' U2 R U' R2 F2 R F R</p><p>&#8226; R U2 R' U' R U R' U2 R' F R F' R2 F2 R2</p><p>&#8226; R U2 R' U' R U R' U2 R' F R F' R2 B2 R2</p>
    </div>
</div>
<h2 id="S">S</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 S 1</h3>
        <p>&#8226; U' F U' R2 U' R' U2 R U' R2 F' U'</p><p>&#8226; R2 F2 R U R U' R' F R' F' R2 U R' U' R</p><p>&#8226; U' R' F R2 F' U' R' U' R2 U R B2 R2</p><p>&#8226; U' R' F R2 F' U' R' U' R2 U R F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 S 2</h3>
        <p>&#8226; U' R2 F2 R U2 R U R' U R</p><p>&#8226; R U R' U R U2 R B2 R2</p><p>&#8226; R2 B2 R' U R' U R U2 R'</p><p>&#8226; U' R' U2 R U R' U R' F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 S 3</h3>
        <p>&#8226; R U' R' F R' F' R' F2 R2</p><p>&#8226; R U' R' F2 R2 F' L' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 S 4</h3>
        <p>&#8226; F R' F' R U2 R U2 R B2 R2</p><p>&#8226; U F R2 F' R2 F' R U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 S 5</h3>
        <p>&#8226; R' U R' F R2 U' F R' F'</p><p>&#8226; U2 R' F R' F2 R U R U R' U R</p><p>&#8226; R' U R' F R2 D' R U' R'</p><p>&#8226; R' F2 R U2 R U' R' F R2 F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 S 6</h3>
        <p>&#8226; R2 B2 R' U' R' F R' F' R</p><p>&#8226; R2 F2 R' U' R' F R' F' R</p><p>&#8226; U2 R U' R U' R' U R' U' F R' F' R2 B2 R2</p><p>&#8226; R U R' U' R' F R F' R U R' U R U2 R B2 R2</p>
    </div>
</div>
<h2 id="T">T</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-t></x-t><x-d></x-d><x-f></x-f><x-r></x-r><x-d></x-d><x-r></x-r><x-d></x-d><x-d></x-d><x-b></x-b><x-t></x-t><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 T 1</h3>
        <p>&#8226; U R' F' R U R U' R' F' R2 B2 U</p><p>&#8226; U R' F' R U R U' R' F' R2 F2</p><p>&#8226; U' F R F' R U R' U' R B2 R2</p><p>&#8226; U' F R F' U' R' U' R' F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 T 2</h3>
        <p>&#8226; U F R' U2 R' U' R U2 F'</p><p>&#8226; U' R U R' U' R' F R F' R2 F2 R2</p><p>&#8226; U F R' U2 R' U' R U2 F' U</p><p>&#8226; U x U' R' F R' F' R U R' U2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 T 3</h3>
        <p>&#8226; R' U R U2 R2 F' R U' R</p><p>&#8226; U R' U R' F U' R U R2</p><p>&#8226; R U2 R' U' R U' R2 U2 R U R' U R' F2 R2 U'</p><p>&#8226; U2 R' U R' U2 R U2 R' U R2 U' R B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 T 4</h3>
        <p>&#8226; R2 F2 R U' F R' F' R U R</p><p>&#8226; U R U2 R2 F R F' R U' R' U R U2 R F2 R2 U</p><p>&#8226; U2 R2 B2 R2 F R U R' U' F'</p><p>&#8226; F2 R2 F U' R' F R F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 T 5</h3>
        <p>&#8226; U' R' U2 R U' R' F R' F R F' R</p><p>&#8226; R' U R U2 R2 F R F' R' F2 R2</p><p>&#8226; U R' F2 R U' R' U R' F R U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 T 6</h3>
        <p>&#8226; U R' U2 R' F2 R F2 R</p><p>&#8226; U R' U2 R' F2 R F2 R U</p><p>&#8226; U z' U' R2 U' R2 U R2 U R2 z</p><p>&#8226; U2 F R U R' U' R U' R' U' R U R' F' R2 B2 R2</p>
    </div>
</div>
<h2 id="U">U</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 U 1</h3>
        <p>&#8226; R2 U2 R U R' U F' R U' R</p><p>&#8226; U' F U' R U2 R U' R' U2 R' U' F'</p><p>&#8226; U' R' U R' F U' R U' R U2 R2</p><p>&#8226; U' R' U R' F U' R U' R' U2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-d></x-d><x-d></x-d><x-t></x-t><x-f></x-f><x-l></x-l><x-r></x-r><x-f></x-f><x-l></x-l><x-d></x-d><x-d></x-d><x-r></x-r><x-t></x-t><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 U 2</h3>
        <p>&#8226; U' F R U R' U' F R2 B2</p><p>&#8226; U' F R U R' U' F R2 B2 U'</p><p>&#8226; U F U R U' R' F R2 F2</p><p>&#8226; U' F R U R' U' F R2 F2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 U 3</h3>
        <p>&#8226; R' F' U' R U2 R' U F R</p><p>&#8226; U2 R' U' R U R' F2 R U' R' U R</p><p>&#8226; R U R' U' R B2 R' U R U' R'</p><p>&#8226; U' F R' F' R U' R U' R' U2 R U' R F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 U 4</h3>
        <p>&#8226; R' F' U' F U2 L' U2 R U' L</p><p>&#8226; U' R2 F2 R U R U2 R2 F R F' R</p><p>&#8226; F R U R' U' F R U R' U' F R U R F2 R2 U2</p><p>&#8226; U2 F R U R' U2 F' R U' R' F' R2 B2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 U 5</h3>
        <p>&#8226; U2 R2 B2 R' U R' U' R' F R F'</p><p>&#8226; U2 R2 B2 R' U R' U' R' F R F' U2</p><p>&#8226; R' F R2 U' R' F R' F' R U R' F' R' F2 R2</p><p>&#8226; R' U R' F R F' R U2 R' U R' F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG2 U 6</h3>
        <p>&#8226; U2 R2 F2 R F' R U L F' L' F</p><p>&#8226; U2 R2 B2 R2 F R F' R U R' U' R'</p><p>&#8226; R U' R2 F R F' R U R' U' R U R F2 R2</p><p>&#8226; U2 R2 F2 R F' R U R U' R' F U2</p>
    </div>
</div>