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
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL AS 1</h3>
        <p>&#8226; U R U2 R' U' R U' R'</p><p>&#8226; U2 L' U' L U' L' U2 L</p><p>&#8226; R' U' R U' R' U2 R</p><p>&#8226; U2 R' F' R U' R' F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL AS 2</h3>
        <p>&#8226; R U2 R' F R' F' R U' R U' R'</p><p>&#8226; L' U' L U' L F' L' F L' U2 L</p><p>&#8226; U2 R' U R U' R2 F R F' R U R' U' R</p><p>&#8226; U2 L' U' L U L F' L' F L' U L F' L F L' U'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL AS 3</h3>
        <p>&#8226; U2 F' L F L' U2 L' U2 L</p><p>&#8226; U2 F' R U R' U2 R' F2 R</p><p>&#8226; x' U' R U L' U2 R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL AS 4</h3>
        <p>&#8226; U2 R' F R F' R U R'</p><p>&#8226; U2 L' U L F' R U R'</p><p>&#8226; x' R' F R U' R U R'</p><p>&#8226; U2 L' U R U' L U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL AS 5</h3>
        <p>&#8226; U2 R U2 R' U2 R' F R F'</p><p>&#8226; L U2 L' U2 x' L' U L U'</p><p>&#8226; U2 R U2 R' U2 L' U R U'</p><p>&#8226; U F R2 F' U' R' U' R F R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL AS 6</h3>
        <p>&#8226; U2 L' U' L U L F' L' F L' U' L U' L' U2 L</p><p>&#8226; U R U R2 F' R F R U' R2 F R</p><p>&#8226; U2 R' F2 R F' R' F2 R U' R' F R F'</p><p>&#8226; F R F' U R U' R U R' U R'</p>
    </div>
</div>
<h2 id="H">H</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL H 1</h3>
        <p>&#8226; F R2 U' R2 U' R2 U R2 F'</p><p>&#8226; F R U' R' U R U2 R' U' R U R' U' F'</p><p>&#8226; U' R' U2 R y R' U R' U' R U' R</p><p>&#8226; R U2 R2 F R F' U2 R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL H 2</h3>
        <p>&#8226; R U R' U R U R' F R' F' R</p><p>&#8226; R U R' U R U L' U R' U' L</p><p>&#8226; U R U' R' F U2 R2 F R U' R</p><p>&#8226; R' F' R U2 R U2 R' F U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL H 3</h3>
        <p>&#8226; U F R U R' U' R U R' U' R U R' U' F'</p><p>&#8226; R U' R' F R' F' R2 U' R' F R' F' R</p><p>&#8226; U x' U2 R U2 R2 F2 R U2 x</p><p>&#8226; R' F R F' R U R2 F R F' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL H 4</h3>
        <p>&#8226; U R2 U2 R' U2 R2</p><p>&#8226; U R2 U2 R U2 R2</p><p>&#8226; R U R' U R U' R' U R U2 R'</p><p>&#8226; U' R U2 R' U' R U R' U' R U' R'</p>
    </div>
</div>
<h2 id="L">L</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL L 1</h3>
        <p>&#8226; U R U2 R' F' R U2 R' U R' F2 R</p><p>&#8226; U R' U' R U2 R' F R' F' R U' R</p><p>&#8226; R' F' R U R' U' R' F R2 U' R' U2 R</p><p>&#8226; U R U R2 F' R U R U' R2 F' R F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL L 2</h3>
        <p>&#8226; U2 R U2 R2 F2 R U R' F2 R F'</p><p>&#8226; R' U2 R' U' F R2 F' U R2</p><p>&#8226; U R U R' U' R' F R2 F' U' R' U' R</p><p>&#8226; R U' R' U R U' R' F R' F' R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL L 3</h3>
        <p>&#8226; U2 R' U R' U2 R U' R' U R U' R2</p><p>&#8226; U2 R2 U' R U2 R' U2 R U' R2</p><p>&#8226; U R U' R U' R U2 R' U R' U R'</p><p>&#8226; U' R U' R' U2 R2 U R' U R' U2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL L 4</h3>
        <p>&#8226; U R U2 R2 F R F' R U2 R'</p><p>&#8226; R U2 R' F R' F' R2 U2 R'</p><p>&#8226; U' R' U' R U R' F' R U R' U' R' F R2</p><p>&#8226; U' R' F2 R F' R U R2 F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL L 5</h3>
        <p>&#8226; U F R' F' R U R U' R'</p><p>&#8226; U F R' F' U' R' U R</p><p>&#8226; U F' U R U' R' F2 R U' R'</p><p>&#8226; U' R' F' L' F R F' L F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL L 6</h3>
        <p>&#8226; U2 F' R U R' U' R' F R</p><p>&#8226; U F R U' R' U' R U R' F'</p><p>&#8226; U R' F R U F U' F'</p><p>&#8226; U' F R F U' R' U F' R' U'</p>
    </div>
</div>
<h2 id="Pi">Pi</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Pi 1</h3>
        <p>&#8226; U F R' F' R U2 R U' R' U R U2 R'</p><p>&#8226; R' F2 R F' U2 R U' R' U' F</p><p>&#8226; U F U R U' R' U R U' R2 F' R U R U' R'</p><p>&#8226; R' F2 R U2 R U2 R' F2 U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Pi 2</h3>
        <p>&#8226; R U2 R' U' R U R' U2 R' F R F'</p><p>&#8226; U F' R U R' U2 R' F R U' R' F2 R</p><p>&#8226; R U R' U' R' F R2 U R' U' R U R' U' F'</p><p>&#8226; R2 U' R' U' F R2 U2 F' R2 F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Pi 3</h3>
        <p>&#8226; U F R2 U' R2 U R2 U R2 F'</p><p>&#8226; U' R U' R U' R' U R' F R2 F'</p><p>&#8226; U2 F R' F' R U2 F R' F' R2 U2 R'</p><p>&#8226; U' R' F R U F U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Pi 4</h3>
        <p>&#8226; U2 R' F R F' R U' R' U' R U' R'</p><p>&#8226; R U' R' F R' F R U R' F R</p><p>&#8226; R U' R' F L' U L U L' U L</p><p>&#8226; U' R U' R2 D' R U R' D R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Pi 5</h3>
        <p>&#8226; U' R' U' R' F R F' R U' R' U2 R</p><p>&#8226; U2 F R U R' U' F' R2 U2 R' U2 R2</p><p>&#8226; R2 U R' U' F R F' R U' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Pi 6</h3>
        <p>&#8226; R U' R2 U R2 U R2 U' R</p><p>&#8226; F R U R' U' R U R' U' F'</p><p>&#8226; R' U R2 U' R2 U' R2 U R'</p><p>&#8226; R U2 R2 U' R2 U' R2 U2 R</p>
    </div>
</div>
<h2 id="Sune">Sune</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Sune 1</h3>
        <p>&#8226; L' U2 L U2 L F' L' F</p><p>&#8226; R' F2 R U2 R U' R' F</p><p>&#8226; L' U2 L U2 R U' R' F</p><p>&#8226; R' F2 R U2 L F' L' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Sune 2</h3>
        <p>&#8226; R U R' U' R' F R F' R U R' U R U2 R'</p><p>&#8226; R2 F' U' R2 F R2 U F R2</p><p>&#8226; R U2 R' F R U2 R' U R U' R' F</p><p>&#8226; U2 R U' R U' R' U R' U' y R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Sune 3</h3>
        <p>&#8226; R U' R' F R' F' R</p><p>&#8226; R U' R' F L' U' L</p><p>&#8226; L F' L' F L' U' L</p><p>&#8226; R U' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Sune 4</h3>
        <p>&#8226; F R' F' R U2 R U2 R'</p><p>&#8226; F L' U' L U2 L F2 L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Sune 5</h3>
        <p>&#8226; U' R' F R2 F' U' R' U' R2 U R'</p><p>&#8226; U2 R U R' U R' F R F' R U2 R'</p><p>&#8226; R U R' U' R' F R F' R U' R' F R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL Sune 6</h3>
        <p>&#8226; R U R' U R U2 R'</p><p>&#8226; R U R2 U' R2 U R</p><p>&#8226; U' R' U2 R U R' U R</p><p>&#8226; U L' U2 L U L' U L</p>
    </div>
</div>
<h2 id="T">T</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL T 1</h3>
        <p>&#8226; U' R U R' U' R' F R F'</p><p>&#8226; U2 R' U' R U F R F'</p><p>&#8226; U' x L U R' U' L' U R U' x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL T 2</h3>
        <p>&#8226; U L' U' L U L F' L' F</p><p>&#8226; R U R' U' y L' U' L</p><p>&#8226; U' F R U' R' U R U R' F'</p><p>&#8226; U R' F' R U R U' R' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL T 3</h3>
        <p>&#8226; F U' R U2 R' U' F2 R U R'</p><p>&#8226; U R U2 R2 F R F' R U' R' U R U2 R'</p><p>&#8226; U2 R U F R' F' R U2 R U2 R2</p><p>&#8226; U R' U' R' U R' F R F' R U' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL T 4</h3>
        <p>&#8226; R' U R U2 R2 F' R U' R' F2 R2</p><p>&#8226; U R' U R' F U' R U F2 R2</p><p>&#8226; u' R U R' U R U2 R' L' U' L U' L' U2 L U</p><p>&#8226; U' R U R' U R U2 R2 F' R U' R' F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL T 5</h3>
        <p>&#8226; U2 F R U R' U' R U' R' U' R U R' F'</p><p>&#8226; U' R U R' U' R U' R' F' U' F R U R'</p><p>&#8226; U R2 F' R U' R' F2 R F R' F' R2</p><p>&#8226; U R U R' U2 R U R' U R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL T 6</h3>
        <p>&#8226; R' U R U2 R2 F R F' R</p><p>&#8226; U2 R U' R' U2 L2 F' L' U L'</p><p>&#8226; U2 R' F R U2 R2 F R U' R</p><p>&#8226; U2 R U' R' U' F R' F' R2 U' R'</p>
    </div>
</div>
<h2 id="U">U</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL U 1</h3>
        <p>&#8226; U' F R U R' U' F'</p><p>&#8226; U F U R U' R' F'</p><p>&#8226; U' R' U' F R' F' R U R</p><p>&#8226; U R' U' R' F R F' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL U 2</h3>
        <p>&#8226; U' R2 F2 R U R' F R2 U2 R' U' R</p><p>&#8226; R' F U' R U' R' U2 F2 R</p><p>&#8226; R' U' R2 U R' U2 R U2 R' U R'</p><p>&#8226; R' U' R U' R' U2 R2 U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL U 3</h3>
        <p>&#8226; U2 F R U R' U2 F' R U' R' F</p><p>&#8226; U' R U2 R U' R' F R' F2 U' F</p><p>&#8226; U' R' U' F2 U' R U R' D R2 B</p><p>&#8226; U' R' U' F2 U' R U R' U F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL U 4</h3>
        <p>&#8226; U' F R' F' R U' R U' R' U2 R U' R'</p><p>&#8226; R2 F R F' R' F2 R U R' F R2</p><p>&#8226; F R U' R' U R U R' U R U' R' F'</p><p>&#8226; U F' R U R' U' R' F R2 U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL U 5</h3>
        <p>&#8226; R U' R2 F R F' R U R' U' R U R'</p><p>&#8226; U2 R U2 R' U R' F2 R F' R' F2 R</p><p>&#8226; U R' F U' F' R U' R' U2 F R</p><p>&#8226; F U2 R U' R' U F' U' R' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>CLL U 6</h3>
        <p>&#8226; R' U R' F R F' R U2 R' U R</p><p>&#8226; L' U L2 F' L' F L' U' L U L' U' L</p><p>&#8226; U2 R2 U R' U' R' F R2 F' U' R'</p><p>&#8226; U2 x R2 F R' F2 R U' R' F2 R' x'</p>
    </div>
</div>