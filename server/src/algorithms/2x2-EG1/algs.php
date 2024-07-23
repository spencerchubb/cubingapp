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
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-l></x-l><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 AS 1</h3>
        <p>&#8226; U R' F R2 U R' F' U' R U' R'</p><p>&#8226; U U2 B U' R2 F2 U' F</p><p>&#8226; R' U' R U' R' U2 R r2 R U2 R' U' R U2 R' F R' F' R U2</p><p>&#8226; U U' L' U' L U' F' L' U L2 F L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-f></x-f><x-r></x-r><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 AS 2</h3>
        <p>&#8226; U R U' R' F' U' F2 R U' R'</p><p>&#8226; U2 L' U' L F2 U' F' L' U' L</p><p>&#8226; U F' L F L' F' L' U L U' L F L'</p><p>&#8226; R U' F2 R U2 R U' B</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 AS 3</h3>
        <p>&#8226; F' R U R' U' R U R2 F' R</p><p>&#8226; U' R U' R' U2 R' F R2 U2 R' F</p><p>&#8226; F' L F L' U' L F L2 U' L</p><p>&#8226; F' L F L' U' R U R' L' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 AS 4</h3>
        <p>&#8226; R U' R' F' U' R U R' U' F</p><p>&#8226; U2 F U' L' U L U' F' L' U' L</p><p>&#8226; U' R U R' U2 R' F' R F R' F R</p><p>&#8226; U F R U' R2 F' R U F' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 AS 5</h3>
        <p>&#8226; U' R U R' F' U' R U R' U' R U R'</p><p>&#8226; d U2 L' U L U' L' U L U L F L' F'</p><p>&#8226; U' U2 F' R' F R U R U R' U' R U R'</p><p>&#8226; U' U2 L' U L U' L' U L U L F L' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 AS 6</h3>
        <p>&#8226; U2 R U' R2 F R U' R' F R F'</p><p>&#8226; U2 L F' L2 U L U' L' U L F'</p>
    </div>
</div>
<h2 id="H">H</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 H 1</h3>
        <p>&#8226; U' R' F R2 U' R' F R U R' F'</p><p>&#8226; U' R' F R2 U' R2 U' F U R</p><p>&#8226; U R U' R2 F R F' R' F' R F</p><p>&#8226; F' R' F R F R' F' R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 H 2</h3>
        <p>&#8226; U' F' U R U' R2 F2 R U' F</p><p>&#8226; F R U' R2 F U' F2 U R</p><p>&#8226; U F' U R U' R2 F2 R U' F</p><p>&#8226; U R U' R' U' R U' R2 F2 R U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 H 3</h3>
        <p>&#8226; U R' F R F' U2 F R U2 R' F</p><p>&#8226; R' U' R' F2 U F' R F'</p><p>&#8226; U R U' R' F U2 x U' R' U2 R U'</p><p>&#8226; U' F U2 R U' R' F2 R' F2 R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 H 4</h3>
        <p>&#8226; U' R U R' F' R U R' U' R U R' U'</p><p>&#8226; F' U R' F R F' U F2</p><p>&#8226; U' R U R' F' R U R' U' R U R'</p><p>&#8226; R' F R F' R' F R U' R' F R F'</p>
    </div>
</div>
<h2 id="L">L</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 L 1</h3>
        <p>&#8226; U R U' R' U R U' R2 F' R F</p><p>&#8226; U U R U R' F' R U2 R' U2 R U R'</p><p>&#8226; U U F R U' R' F' R U R' F' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 L 2</h3>
        <p>&#8226; U' U' R' F R U' R' F R2 U R' F' U2</p><p>&#8226; U' U2 x R' U' R U' R' U' R U' R' U2 R</p><p>&#8226; U' U' L' U L U' L' U L2 F L' F'</p><p>&#8226; U' U' R' F R U' R' F R2 U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 L 3</h3>
        <p>&#8226; U R' U R2 U' R2 U' F R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 L 4</h3>
        <p>&#8226; U R' F R2 U R' F' R U2 R'</p><p>&#8226; U R U2 R' F R U' R2 F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 L 5</h3>
        <p>&#8226; U2 R U R' F' R U R' U' F R' F' R</p><p>&#8226; U2 U F' R' F R U' R U R' U' R U R' U'</p><p>&#8226; U2 L' U L y' R U2 R U' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 L 6</h3>
        <p>&#8226; U2 U2 F R U' R' U R' F' R U R' F' R</p><p>&#8226; U2 R' U2 F R U2 R U' R2 F</p><p>&#8226; U2 U' L' U' L F L' U' L U F' L F L'</p><p>&#8226; U R U' R' U' y R U R2 F' R</p>
    </div>
</div>
<h2 id="Pi">Pi</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 Pi 1</h3>
        <p>&#8226; U2 U' F U' R' F R U' F2 R U R'</p><p>&#8226; U2 F2 R U R' U2 R U R' U' F</p><p>&#8226; U' R U' R2 F R2 U' R F2 R2 U'</p><p>&#8226; U' R' F R2 U' R2 F R' F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 Pi 2</h3>
        <p>&#8226; U' R U' R2 F R2 U' R'</p><p>&#8226; U' R' F R2 U' R2 F R</p><p>&#8226; U' R U R2 F' R2 U R'</p><p>&#8226; U' R' F' R2 U R2 F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 Pi 3</h3>
        <p>&#8226; U' F R' F U' F2 R U R</p><p>&#8226; U' F' R U2 R' F' U2 F R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 Pi 4</h3>
        <p>&#8226; U' R U' R' U R U' R' F R U' R'</p><p>&#8226; U' F' R U R' U' R U R' F' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 Pi 5</h3>
        <p>&#8226; R U' R2 F R U R U' R' U' R' F R F'</p><p>&#8226; U' R U R' U R U' R2 F' R F R' F' R</p><p>&#8226; U' L F' L' F L F' L2 U' L U L' U L U'</p><p>&#8226; U F U' R U2 R' F' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 Pi 6</h3>
        <p>&#8226; U' R' F' R U' R' F R2 U R' F' R U R'</p><p>&#8226; U' R' F R F' R' F R2 U R' U' R U' R'</p><p>&#8226; F R U' R' F R U2 R' U F'</p><p>&#8226; U' F R' F' R U R U R' U' R' F' R2 U R'</p>
    </div>
</div>
<h2 id="Sune">Sune</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 S 1</h3>
        <p>&#8226; U2 R U R' U F R U' R2 F' R</p><p>&#8226; U2 U' L F' L2 U' L F U L' U L</p><p>&#8226; U2 U F' L U2 F2 R U' x'</p><p>&#8226; U2 U' R U' R2 F' R F U R' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 S 2</h3>
        <p>&#8226; R U R' F2 U F R U R'</p><p>&#8226; U F R' F' R F R U' R' U R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 S 3</h3>
        <p>&#8226; U2 F R' F' R U R' F' R2 U R'</p><p>&#8226; U2 U R' F R U2 R U' R2 F2 R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 S 4</h3>
        <p>&#8226; U F' R' F R2 U R' U' F R' F' R U</p><p>&#8226; U F' R' F R2 U R' U' F R' F' R</p><p>&#8226; F' U R U' R' U F R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 S 5</h3>
        <p>&#8226; U R U' R' U R U' R' U F R U' R'</p><p>&#8226; U U2 L' U' L F U L' U' L U L' U' L</p><p>&#8226; U U2 R2 F U' R U' R U' F2</p><p>&#8226; U R U' R' U R U' R' U' R' F' R F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 S 6</h3>
        <p>&#8226; R' F R2 U' R' U R U' R' F</p><p>&#8226; R' F R2 U' R' U L F' L' F</p>
    </div>
</div>
<h2 id="T">T</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 T 1</h3>
        <p>&#8226; F R U' R2 F' R U R' F' R</p><p>&#8226; F L F' L2 U' L U L' U' L</p><p>&#8226; U R2 U R U' R2 F R U2 R' F</p><p>&#8226; U2 R U2 R' U' R' F' R F R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 T 2</h3>
        <p>&#8226; F' R' F R2 U R' U' R U R'</p><p>&#8226; U2 R U2 R' F R U' R' F' R U R'</p><p>&#8226; U2 R U' R' F R U' R' F R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 T 3</h3>
        <p>&#8226; U R U' R2 F R U R U2 R'</p><p>&#8226; U U2 R' F R2 U' R' U' R' F2 R</p><p>&#8226; U U2 L' U L2 F' L' U' L' U2 L U2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 T 4</h3>
        <p>&#8226; U' U' R' U F R2 U' R2 U' F U' R</p><p>&#8226; U' R2 B2 U' R' U' R U' R' U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 T 5</h3>
        <p>&#8226; U' R' F' R2 U R' F' R U R'</p><p>&#8226; U' U2 R U R2 F' R F R' F' R</p><p>&#8226; U' U2 R U R2 F' R F R' F' R U2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 T 6</h3>
        <p>&#8226; U' U' R U' R' U2 F R U2 R' F</p><p>&#8226; U' U' R' F R2 U R' F' U2 R' F R F'</p><p>&#8226; U' R U R' F R U R' F U' R U' R'</p>
    </div>
</div>
<h2 id="U">U</h2>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 U 1</h3>
        <p>&#8226; U U2 R U R' U R U R2 F R2 U' R'</p><p>&#8226; U U2 R U R2 F' R2 U' R' U' R U' R'</p><p>&#8226; U U2 R U' R2 F R2 U R' U' R U' R'</p><p>&#8226; U2 R2 U' R' U' R U' R' U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 U 2</h3>
        <p>&#8226; U2 y R' U R' U' R U' R' U' F2 R2</p><p>&#8226; U' F R2 B R2 F U F2 R2</p><p>&#8226; U' R U R' F' U' R U R' U' F R' F' R</p><p>&#8226; U x U' R' U R U' F R U R U'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 U 3</h3>
        <p>&#8226; F' U2 R U2 R' U2 F</p><p>&#8226; U y' R U R' F R2 F' R U' R'</p><p>&#8226; U2 R U' R2 F2 R F' U R U R'</p><p>&#8226; R U R' U F' R U R' U' R U R2 F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 U 4</h3>
        <p>&#8226; U R' F R F' R' F R2 U' R'</p><p>&#8226; U U2 R U' R' F R U' R2 F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 U 5</h3>
        <p>&#8226; U2 R U' R' U R U' R' U' F R U' R'</p><p>&#8226; U R' F R F' U R U' R' F R U' R'</p><p>&#8226; U2 L F' L' U L F' L' U L' U' L F</p><p>&#8226; F U' R' F2 R F' U2 F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-2x2">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>EG1 U 6</h3>
        <p>&#8226; U2 R' F R U' R' F R U' R U R' F' U2</p><p>&#8226; U2 R' F R2 U' R' U y' R U R'</p><p>&#8226; U2 U L F' L' F U' L' U L F' L' U L</p><p>&#8226; U2 U2 F' U R U2 R' F U2 F</p>
    </div>
</div>