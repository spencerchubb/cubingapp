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
<h2 id="Corners">Corners</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>Matching Corners (aka Headlights)</h3>
        <p>&#8226; R' F R' B2 R F' R' B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>No Matching (aka No Headlights)</h3>
        <p>&#8226; F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')</p>
    </div>
</div>
<h2 id="Edges">Edges</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ua perm</h3>
        <p>&#8226; M2 U M U2 M' U M2<span class="note">Inverse of Ub perm</span></p><p>&#8226; R U' R U R U R U' R' U' R2</p><p>&#8226; R U R' U R' U' R2 U' R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Ub perm</h3>
        <p>&#8226; M2 U' M U2 M' U' M2<span class="note">Inverse of Ua perm</span></p><p>&#8226; R2' U R U R' U' R3 U' R' U R'</p><p>&#8226; R' U R' U' R' U' R' U R U R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>H perm</h3>
        <p>&#8226; M2 U' M2 U2 M2 U' M2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>Z perm</h3>
        <p>&#8226; M2 U' M2 U' M' U2 M2 U2 M' U2</p>
    </div>
</div>