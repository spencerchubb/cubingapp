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
<h2 id="T1">T1</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 1</h3>
        <p>&#8226; R' D R D' R' D R U R' D' R D R' D' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 2</h3>
        <p>&#8226; R' U R U2 R' U' R U' R U R' U' R' U' R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 3</h3>
        <p>&#8226; R' U2 R U R' U R2 U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 4</h3>
        <p>&#8226; R U2 R' U' R U' R2 U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 5</h3>
        <p>&#8226; R' U R U2 R' U' R U2 R' U' R U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 6</h3>
        <p>&#8226; R U' R' U2 R U R' U2 R U R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 7</h3>
        <p>&#8226; R' U R2 U R' U R' U' R U' R' U' R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 8</h3>
        <p>&#8226; R U R' U R U' R' U R' U' R2 U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-l></x-l><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 9</h3>
        <p>&#8226; R' U2 R U R' U R U' R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 10</h3>
        <p>&#8226; R U2 R' U' R U' R' U R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 11</h3>
        <p>&#8226; R' U' R2 U R2 U R2 U2 R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 12</h3>
        <p>&#8226; R U R2 U' R2 U' R2 U2 R U' R U' R'</p>
    </div>
</div>
<h2 id="T2">T2</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 13</h3>
        <p>&#8226; R U R' F' R U R' U' R' F R U' R' F R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 14</h3>
        <p>&#8226; R' U' R U' R' U' R2 D r' U2 r D' R2 U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 15</h3>
        <p>&#8226; R U' R2 D' r U2 r' D R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 16</h3>
        <p>&#8226; R' U R2 D r' U2 r D' R2 U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 17</h3>
        <p>&#8226; R' U2 R U2 R2 D' R U2 R' D R2 U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 18</h3>
        <p>&#8226; R U R' U2 R' D' R U R' D R2 U' R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 19</h3>
        <p>&#8226; R' U' R U R2 D' R U2 R' D R2 U2 R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 20</h3>
        <p>&#8226; R U R' U' R U R2 D' R U' R' D R U2 R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 21</h3>
        <p>&#8226; R' D' R U' R' D R U' R U' R' U R U' R' U' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 22</h3>
        <p>&#8226; R U' R' U R U R' U' R U R' U R' D' R U R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 23</h3>
        <p>&#8226; R U R D R' U R D' R' U L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 24</h3>
        <p>&#8226; r U r' R U R' U' R U R' U' r U' r' F R U R' U' F'</p>
    </div>
</div>
<h2 id="T3">T3</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 25</h3>
        <p>&#8226; R' U R U2 R' L' U R U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 26</h3>
        <p>&#8226; R U' R' U2 R L U' R' U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 27</h3>
        <p>&#8226; R' U' R2 U R' F' R U R' U' R' F R2 U' R' U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 28</h3>
        <p>&#8226; r U' r U2 R' F R U2 r2 F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 29</h3>
        <p>&#8226; R' U' R' D' R U R' D R U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 30</h3>
        <p>&#8226; R U R D R' U' R D' R' U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 31</h3>
        <p>&#8226; R D R' U' R D' R' U' R' U R U' R' U R U R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 32</h3>
        <p>&#8226; R' D' R U R' D R U R U' R' U R U' R' U' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 33</h3>
        <p>&#8226; R' U' R U' R' U R F U' R' U2 R U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 34</h3>
        <p>&#8226; R U R' U R U' R' U' L' U2 R U2 R' U2 L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 35</h3>
        <p>&#8226; R' U2 R U R' U R F U R U2 R' U R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 36</h3>
        <p>&#8226; r' U' R' F2 R F' R' F2 R2 U' R' U2 r</p>
    </div>
</div>
<h2 id="T4">T4</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 37</h3>
        <p>&#8226; R' F2 R' B2 R F2 R' B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 38</h3>
        <p>&#8226; R' U2 R U' R' F R U R' U' R' F' R U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 39</h3>
        <p>&#8226; R' U2 R' D' R U2 R' D R' U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 40</h3>
        <p>&#8226; R U2 R D R' U2 R D' R U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 41</h3>
        <p>&#8226; R U R D R' U' R D' R' U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 42</h3>
        <p>&#8226; R' U' R' D' R U R' D R U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 43</h3>
        <p>&#8226; R' U R2 D R' U R D' R' U R' U' R U' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 44</h3>
        <p>&#8226; R U' R2 D' R U' R' D R U' R U R' U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 45</h3>
        <p>&#8226; R' U' R U' F U' R' U R U F' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 46</h3>
        <p>&#8226; R' D' R U R' D R2 U R' U2 R U' R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 47</h3>
        <p>&#8226; F R U R' U' R U' R' U' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 48</h3>
        <p>&#8226; R U R' U2 R U' R' U2 R U' R2 F' R U R U' R' F</p>
    </div>
</div>
<h2 id="T5">T5</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 49</h3>
        <p>&#8226; R U R D R' U' R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 50</h3>
        <p>&#8226; R U2 R' U2 R' F R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 51</h3>
        <p>&#8226; R2 B2 R' U2 R' U2 R B2 R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 52</h3>
        <p>&#8226; R' D' R U R' D R2 U' R' U R U R' U' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 53</h3>
        <p>&#8226; F' U' r' F2 r U' r' F' r F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 54</h3>
        <p>&#8226; R U R' U' R U' R' L U' R U R' L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 55</h3>
        <p>&#8226; R U R' U R U R' U2 L R U' R' U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 56</h3>
        <p>&#8226; R' U' R U' R2' F' R U R U' R' F U R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 57</h3>
        <p>&#8226; R' U' R U R' U' R2 D R' U2 R D' R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 58</h3>
        <p>&#8226; R U R D R' U2 R D' R' U' R' U R U' R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 59</h3>
        <p>&#8226; F R U R' U' R' F' U2 R U R U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 60</h3>
        <p>&#8226; R U' R' U' R U R D R' U2 R D' R' U' R'</p>
    </div>
</div>
<h2 id="T6">T6</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 61</h3>
        <p>&#8226; x' U' R' D R U R' D' R x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 62</h3>
        <p>&#8226; R U R' U' R' F' R U2 R U2 R' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 63</h3>
        <p>&#8226; R2 F2 R U2 R U2 R' F2 R U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 64</h3>
        <p>&#8226; R D R' U' R D' R2 U R U' R' U' R U R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 65</h3>
        <p>&#8226; F U R U2 R' U R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 66</h3>
        <p>&#8226; R U R' U' R U' R' U' F R U R' U' R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 67</h3>
        <p>&#8226; R' U' R U' R' U R' U' R U R' F' R U R' U' R' F R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 68</h3>
        <p>&#8226; F R U R' U' R U R' U' F' R U R' U' R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 69</h3>
        <p>&#8226; R U R' U' R U R2 D' R U2 R' D R U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 70</h3>
        <p>&#8226; R' U2 R F U' R' U R U F' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 71</h3>
        <p>&#8226; R' U2 R2 U R' U' R' U2 F' R U2 R U2 R' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 72</h3>
        <p>&#8226; R' U R U R' U' R' D' R U2 R' D R U R</p>
    </div>
</div>
<h2 id="U1">U1</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 73</h3>
        <p>&#8226; R U2 R' U' R U' R' U2 R' U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-l></x-l><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 74</h3>
        <p>&#8226; R U R' U' R U' R U2 R2 U' R U R' U' R2 U' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 75</h3>
        <p>&#8226; R' U' R U' R' U2 R2 U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-b></x-b><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 76</h3>
        <p>&#8226; R U R' U R U2 R2 U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 77</h3>
        <p>&#8226; R U R' U' R U' R' U2 R U' R' U2 R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 78</h3>
        <p>&#8226; R' U' R U R' U R U2 R' U R U2 R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 79</h3>
        <p>&#8226; R U2 R2 U' R2 U' R' U R' U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 80</h3>
        <p>&#8226; R' U2 R2 U R2 U R U' R U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 81</h3>
        <p>&#8226; R' U2 R U R' U R U R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 82</h3>
        <p>&#8226; R U2 R' U' R U' R' U' R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 83</h3>
        <p>&#8226; R' U' R U' R U2 R2 U' R2 U' R2 U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-r></x-r><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 84</h3>
        <p>&#8226; R U R' U R' U2 R2 U R2 U R2 U' R'</p>
    </div>
</div>
<h2 id="U2">U2</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 85</h3>
        <p>&#8226; R' U' R U' F U' R' U R U R' U R U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 86</h3>
        <p>&#8226; R U R' U L' U R U' M' x' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 87</h3>
        <p>&#8226; R U2 R2 F R F' M' U' R U' R' U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 88</h3>
        <p>&#8226; R' U2 R F U' R' U R U R' U R U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 89</h3>
        <p>&#8226; R2 D R' U' R D' R' U' R' U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 90</h3>
        <p>&#8226; R2 D' R U R' D R U R U' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 91</h3>
        <p>&#8226; R U' R' U' R U R D R' U R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 92</h3>
        <p>&#8226; R' U R U R' U' R' D' R U' R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 93</h3>
        <p>&#8226; M' U R' U' F' U F R2 U R' U R U2 r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 94</h3>
        <p>&#8226; F R U R' U' R U R' U' F' U' R' F' U' F U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 95</h3>
        <p>&#8226; F R U' R' U' R U2 R' U' R U' R' U' R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 96</h3>
        <p>&#8226; r' U' R' F R U r F R U' R' F'</p>
    </div>
</div>
<h2 id="U3">U3</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 97</h3>
        <p>&#8226; R' F R U' R' U' R U R' F' R U R' U' R' F R F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 98</h3>
        <p>&#8226; F2 R U' R' U' R U R' F' R U R' U' R' F R F2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 99</h3>
        <p>&#8226; R U' R' U R U' L U r' F U2 R U2 R2 x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 100</h3>
        <p>&#8226; R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 101</h3>
        <p>&#8226; R U' L U L' U R' U' l U2 R U2 R2 x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 102</h3>
        <p>&#8226; R' U L' U' L U' R U l' U2 R' U2 R2 x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 103</h3>
        <p>&#8226; F R U R U2 R' U' R U' R' U2 R' U2 R U' R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 104</h3>
        <p>&#8226; r U R' U' r' F R2 U' R' U' R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 105</h3>
        <p>&#8226; F U R U2 R' U R U R2 F' r U R U' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 106</h3>
        <p>&#8226; R U2 R' U2 R' F R U R U2 R' U' R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 107</h3>
        <p>&#8226; R' U' R F R2 D' R U R' D R2 U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 108</h3>
        <p>&#8226; r U R' U' r' F R U R' U' R F' R' U R</p>
    </div>
</div>
<h2 id="U4">U4</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 109</h3>
        <p>&#8226; x R2 U2 R' D2 R U2 R' D2 R' x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 110</h3>
        <p>&#8226; x R2 D2 R U2 R' D2 R U2 l</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 111</h3>
        <p>&#8226; R U R' U R U' R' U2 R' D' R U2 R' D R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 112</h3>
        <p>&#8226; R' U2 R U R' U R' D R' U2 R D' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 113</h3>
        <p>&#8226; R U' R' U' R U' R' U R' D' R U R' D R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 114</h3>
        <p>&#8226; R' U R U R' U R U' R D R' U' R D' R2 U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 115</h3>
        <p>&#8226; R' U2 R U R' U R' D' R U' R' D R U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 116</h3>
        <p>&#8226; R U' R' U' R U2 R' U2 R' D' R U' R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 117</h3>
        <p>&#8226; R' U' R U2 R' F' R U R' U' R' F R2 U2 R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 118</h3>
        <p>&#8226; R U R' U R U R' U2 R U' R2 D' R U' R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 119</h3>
        <p>&#8226; F R U' R' U R U R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 120</h3>
        <p>&#8226; F' R U R' U' R' F R2 U R' U2 R U R' U2 R U' R'</p>
    </div>
</div>
<h2 id="U5">U5</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 121</h3>
        <p>&#8226; R2 D' r U2 r' D R U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 122</h3>
        <p>&#8226; R2 D' R U2 R' D R U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 123</h3>
        <p>&#8226; R U' R' D R' U' R D' R2 U R' U' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 124</h3>
        <p>&#8226; R U R' U R U2 R2 U z U R' D R U' z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 125</h3>
        <p>&#8226; R2 D' R U' R' D R2 U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 126</h3>
        <p>&#8226; R' U R U R' U2 R U2 y R U' R' U2 R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 127</h3>
        <p>&#8226; R2 D R' U R D' R2 U' R U' R' U2 R U' R' U2 R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 128</h3>
        <p>&#8226; R2' F' R U2 R U2' R' F U' R U R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 129</h3>
        <p>&#8226; R' U2 R2 D R' U2 R D' R2 U R U2 R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 130</h3>
        <p>&#8226; R U R' U2 F2 R U2 R' U2 R' F2 R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 131</h3>
        <p>&#8226; R' U2 R' D' R U2 R' D R U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 132</h3>
        <p>&#8226; R' U R U' R' U' R U2 R D R' U' R D' R2 U' R</p>
    </div>
</div>
<h2 id="U6">U6</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 133</h3>
        <p>&#8226; R' U2 R U R2 F' R U R U' R' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 134</h3>
        <p>&#8226; R2 D R' U2 R D' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 135</h3>
        <p>&#8226; R' U' R U R U R' U' R' U F R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 136</h3>
        <p>&#8226; R U' R' U' R U2 R' U' R' D' R U2 R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 137</h3>
        <p>&#8226; R U R2 D' R U R' D R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 138</h3>
        <p>&#8226; R U' R' U' R U2 R' U2 y' R' U R U2 R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 139</h3>
        <p>&#8226; R' U R' U' D' R U' R' U2 R U' R' D R U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 140</h3>
        <p>&#8226; R U R' U R U' R' U F' R U2 R' U2 R' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 141</h3>
        <p>&#8226; R' U' R U R' U R U2 F R' U R U' F' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 142</h3>
        <p>&#8226; R U R' U R U' R' U R U' R' U' L' U R U' R' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 143</h3>
        <p>&#8226; R U2 R D R' U2 R D' R' U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 144</h3>
        <p>&#8226; R U' R' U R U R' U2 R' D' R U R' D R2 U R'</p>
    </div>
</div>
<h2 id="L1">L1</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 145</h3>
        <p>&#8226; R U2 R' U2 R' U' R U R U' R' U2 R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 146</h3>
        <p>&#8226; R U R' U R U' R' U R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 147</h3>
        <p>&#8226; R U2 R' U' R U' R' U2 R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-l></x-l><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 148</h3>
        <p>&#8226; R U R' U R U2 R' U2 R U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 149</h3>
        <p>&#8226; R2 U R' U R' U' R U' R' U' R U R U' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 150</h3>
        <p>&#8226; R2 U' R U' R U R' U R U R' U' R' U R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 151</h3>
        <p>&#8226; R' U2 R U R' U R U' R U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 152</h3>
        <p>&#8226; R U2 R' U' R U' R' U R' U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 153</h3>
        <p>&#8226; R2 U R' U' R' U R U R' U R U' R U' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 154</h3>
        <p>&#8226; r U r' U R U' R' U R U' R' M' U R U2' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 155</h3>
        <p>&#8226; R U R' U R U2 R' U R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 156</h3>
        <p>&#8226; R' U' R U' R' U2 R U' R U R' U R U2 R'</p>
    </div>
</div>
<h2 id="L2">L2</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 157</h3>
        <p>&#8226; F R U' R' U' R U R D R' U' R D' R' U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 158</h3>
        <p>&#8226; F R U R2' F R F' R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-b></x-b><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 159</h3>
        <p>&#8226; L' U2 R U' R' U2 L R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 160</h3>
        <p>&#8226; R' U' R U R' F' R U R' U' R' F R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 161</h3>
        <p>&#8226; R' U F' R U R' U' R' F R2 U' R' U' R U R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 162</h3>
        <p>&#8226; R U' R' U R U R' U R U' R2' D' R U R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 163</h3>
        <p>&#8226; r U2 R r2 F R' F' r2 U2 r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 164</h3>
        <p>&#8226; r U2 r2 F R F' r2 R' U2 r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 165</h3>
        <p>&#8226; F R U R' U' F' r U r' U R U' R' r U' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 166</h3>
        <p>&#8226; r U r' R U R' U' r U' r' F U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 167</h3>
        <p>&#8226; R U R' U R U' R' F2 R U2 R' U2 R' F2 R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-b></x-b><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 168</h3>
        <p>&#8226; R U R2 F2 R U2 R U2 R' F2 R U R' U' R U' R'</p>
    </div>
</div>
<h2 id="L3">L3</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 169</h3>
        <p>&#8226; F' r U R' U' r' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 170</h3>
        <p>&#8226; R' U' R U R' F2 R U2 R' U2 R' F2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 171</h3>
        <p>&#8226; F' R U2 R' U2 R' F R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 172</h3>
        <p>&#8226; R' U R U' R' U R U R' U' R2 D R' U R D' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 173</h3>
        <p>&#8226; F R U' R' U' R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 174</h3>
        <p>&#8226; R' U' R U2 R' F' R U R' U' R' F R2 U R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-b></x-b><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 175</h3>
        <p>&#8226; R' F R U R U' R' F' U R U R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 176</h3>
        <p>&#8226; R2 D' R U' R' D R U R' U' R' U' R U R U R U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 177</h3>
        <p>&#8226; F R' F' R U R U' R' F U R U' R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 178</h3>
        <p>&#8226; F' R U2 R' U2 R' F U2 R U R U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 179</h3>
        <p>&#8226; R U R' U R' D' R U2 R' D R2 U' R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 180</h3>
        <p>&#8226; R' U' R' D' R U2 R' D R U R U' R' U' R</p>
    </div>
</div>
<h2 id="L4">L4</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 181</h3>
        <p>&#8226; F R' F' r U R U' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 182</h3>
        <p>&#8226; R U R' U' R B2 R' U2 R U2 R B2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 183</h3>
        <p>&#8226; F R U R' U' R' F' R U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 184</h3>
        <p>&#8226; R U' R' U R U' R' U' R U R2 D' R U' R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 185</h3>
        <p>&#8226; R' F' R U R' U' R' F R U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 186</h3>
        <p>&#8226; R U R' U R U R' U' R U R D R' U2 R D' R' U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 187</h3>
        <p>&#8226; L R U' R' U R L' U R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 188</h3>
        <p>&#8226; L U' R U R' L' U2 R U' R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 189</h3>
        <p>&#8226; R' U2 R U R' U' F' R U R' U' R' F R2 U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 190</h3>
        <p>&#8226; R' U2 R2 U R' U' R' U2 F R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 191</h3>
        <p>&#8226; R U R' U R U' R' U' L' U R U' M' x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 192</h3>
        <p>&#8226; R U R D R' U2 R D' R' U' R' U R U R'</p>
    </div>
</div>
<h2 id="L5">L5</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 193</h3>
        <p>&#8226; R' U2 R' D' R U2 R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 194</h3>
        <p>&#8226; R' U2 R' D' r U2 r' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 195</h3>
        <p>&#8226; R D R' U2 R D' R' U' R' U2 R U' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 196</h3>
        <p>&#8226; R U2 R U R U' R2 D R' U R D' R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 197</h3>
        <p>&#8226; R U R' U2 R U R' U2 y' R' U2 R U' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 198</h3>
        <p>&#8226; R' U2 R U R2 D' R U R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 199</h3>
        <p>&#8226; R U R' U' R U' R' U L' U R U' L U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 200</h3>
        <p>&#8226; R U' R' U2 R U R' U2 R U R' U R2 D R' U' R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 201</h3>
        <p>&#8226; R' U2 R U2 R' U' R2 D R' U2 R D' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 202</h3>
        <p>&#8226; F' R U R' U' R' F R2 U' R' U' R U' R' U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 203</h3>
        <p>&#8226; R U' R2 F2 R U2 R U2 R' F2 U2 R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 204</h3>
        <p>&#8226; R' U R2 D R' U R D' R' U2 R' U R U R' U' R</p>
    </div>
</div>
<h2 id="L6">L6</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 205</h3>
        <p>&#8226; R U2 R D R' U2 R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 206</h3>
        <p>&#8226; R' F' R U R' U' R' F R2 U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 207</h3>
        <p>&#8226; L' U R U' L U R2 U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 208</h3>
        <p>&#8226; F R U R' U' R' F' U' R U R U' R' U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 209</h3>
        <p>&#8226; R' U' R U2 R' U' R y U2 R U2 R' U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 210</h3>
        <p>&#8226; R U2 R' U' R2 D R' U' R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 211</h3>
        <p>&#8226; R' U' R U R' U R U' L U' R' U L' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 212</h3>
        <p>&#8226; R' U R' D' R U R' U2 R U R' D U R U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 213</h3>
        <p>&#8226; R U2 R' U2 R U R2 D' R U2 R' D R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 214</h3>
        <p>&#8226; R U R' U R U2 R D R' U2 R D' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 215</h3>
        <p>&#8226; R' U R2 B2 R' U2 R' U2 R B2 U2 R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 216</h3>
        <p>&#8226; R U' R2 D' R U' R' D R U2 R U' R' U' R U R'</p>
    </div>
</div>
<h2 id="Pi1">Pi1</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 217</h3>
        <p>&#8226; R' U' R U R U2 R' U' R U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 218</h3>
        <p>&#8226; R U R' U' R' U2 R U R' U R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 219</h3>
        <p>&#8226; R' U2 R U R' U R2 U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 220</h3>
        <p>&#8226; R U2 R' U' R U' R2 U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 221</h3>
        <p>&#8226; R U2 R' U2 R U' R' U2 R U' R' U2 R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 222</h3>
        <p>&#8226; R' U2 R U2 R' U R U2 R' U R U2 R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 223</h3>
        <p>&#8226; R U' R' U2 R U R' U2 R U R' U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 224</h3>
        <p>&#8226; R' U R U2 R' U' R U2 R' U' R U2 R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 225</h3>
        <p>&#8226; R' U2 R2 U R2 U R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 226</h3>
        <p>&#8226; R U2 R2 U' R2 U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 227</h3>
        <p>&#8226; R U R' U' R' U' R U R U R' U' R' U R U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 228</h3>
        <p>&#8226; R U2 R' U' R U' R' U' R U2 R' U' R U' R'</p>
    </div>
</div>
<h2 id="Pi2">Pi2</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 229</h3>
        <p>&#8226; R2 U R' U2 R' U' R U R D R' U R D' R' U R U' R2'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 230</h3>
        <p>&#8226; F R2 U' R U2 R U R' U R' U R2 F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 231</h3>
        <p>&#8226; F U R' U' R2 U' R2 U2 R U2 R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 232</h3>
        <p>&#8226; r' U' R U' R' U R U' R' U R' F R F' U r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 233</h3>
        <p>&#8226; R U2 R' U' F' R U2 R' U' R U' R' F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 234</h3>
        <p>&#8226; R U R' U r' F R F' r U' R' U R U2' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 235</h3>
        <p>&#8226; r U R' U R' F R F' R U' R' U R U2' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 236</h3>
        <p>&#8226; R U R' U' R U R2 D' R U' R' D R U' R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 237</h3>
        <p>&#8226; R U2 R' U R' D' R U R' D R2 U' R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 238</h3>
        <p>&#8226; R' U2 R U' R D R' U' R D' R2 U R U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 239</h3>
        <p>&#8226; R2 D R' U' R D' R' U' R' U R U' R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 240</h3>
        <p>&#8226; R2 D' R U R' D R U R U' R' U R U R' U R</p>
    </div>
</div>
<h2 id="Pi3">Pi3</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 241</h3>
        <p>&#8226; F U R U2 R' U R U R' F' R U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 242</h3>
        <p>&#8226; r U' r' U' r U r' U' l R U' R' U l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 243</h3>
        <p>&#8226; r' U r U r' U' r U R2 F R F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 244</h3>
        <p>&#8226; r' U' R U' R' U2 r U' R U2 R' U2 R' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 245</h3>
        <p>&#8226; R' U' R U R2 F' R U R U' R' F U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 246</h3>
        <p>&#8226; R U2 R D' R U' R' D R' U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 247</h3>
        <p>&#8226; R' U' R U' R2 D' R U R' D R2 U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 248</h3>
        <p>&#8226; L' U R U' L U' R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 249</h3>
        <p>&#8226; R U' L' U R' U L U L' U L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 250</h3>
        <p>&#8226; R2 D' R U2 R' D R2 U R2 D' R U R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 251</h3>
        <p>&#8226; R2 D R' U2 R D' R2 U' R2 D R' U' R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 252</h3>
        <p>&#8226; R U2 R2 F R U R U2 R' U' R U2 R' U' F' R U R'</p>
    </div>
</div>
<h2 id="Pi4">Pi4</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 253</h3>
        <p>&#8226; R U2 R2 U' R U' R' U2 F R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 254</h3>
        <p>&#8226; R U R' U R U2 R2 F' r U R U' r' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 255</h3>
        <p>&#8226; r' F' r U' r' F2 r2 U R' U' r' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 256</h3>
        <p>&#8226; F R U R' U' R' F' R U2 R' U' R2 U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 257</h3>
        <p>&#8226; R' U' R L U2 R' U2 R U2 L' U R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 258</h3>
        <p>&#8226; F U' R U' R' U R U R' U2 R U2 R' U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 259</h3>
        <p>&#8226; R2 D' R U' R' D R U R' D' R U R' D R U R U' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 260</h3>
        <p>&#8226; R' U' F' R U R' U' R' F R2 U2' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 261</h3>
        <p>&#8226; R U R' U R U' R' U' R' F' R U2 R U2' R' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 262</h3>
        <p>&#8226; R' U' R' D' R U R' D R' U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 263</h3>
        <p>&#8226; R U R D R' U' R D' R U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 264</h3>
        <p>&#8226; F U R U' R' U R U2 R' U' R U R' F'</p>
    </div>
</div>
<h2 id="Pi5">Pi5</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 265</h3>
        <p>&#8226; r' F' r U r U2 r' F2 U' R U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 266</h3>
        <p>&#8226; R U2 R' U2 R' F R2 U' R' U2 R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 267</h3>
        <p>&#8226; R' F R U R' U' R' F' R2 U' R' U R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 268</h3>
        <p>&#8226; R' L U2 R2 U R2 U R U L' U' R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 269</h3>
        <p>&#8226; l U2 l' U2 R' U2 R B2 U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 270</h3>
        <p>&#8226; R U R' U F2 R U2 R' U2 R' F2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 271</h3>
        <p>&#8226; R' U2 R U R' U R2 U' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 272</h3>
        <p>&#8226; R U R' U R U' R' U R U' R D R' U' R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 273</h3>
        <p>&#8226; R U R' U' R' F R2 U R' U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 274</h3>
        <p>&#8226; R2 D R' U2' R D' R2' U' R U' R' U R U2' R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 275</h3>
        <p>&#8226; R U2 R' U' R U R' U2 L' U R U' M' x'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 276</h3>
        <p>&#8226; L R' U' R U L' U2 R' U R U' R' U2 R</p>
    </div>
</div>
<h2 id="Pi6">Pi6</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 277</h3>
        <p>&#8226; R U R' U R U' R2' F R F' R U' R' F' U F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 278</h3>
        <p>&#8226; F U R U2 R' U2 R U R2 F' R U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 279</h3>
        <p>&#8226; R U' R' U' R U' R' U R U R' U R' F' R U R U' R' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 280</h3>
        <p>&#8226; R' U2 R U R' U' R U R2 F R U R U' R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 281</h3>
        <p>&#8226; R' F2 R U2 R U2 R' F2 U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 282</h3>
        <p>&#8226; R' U' R U' B2 R' U2 R U2 l U2 l'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 283</h3>
        <p>&#8226; R U2 R' U' R U' R2 U L U' R U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 284</h3>
        <p>&#8226; R' U' R U' R' U R U' R' U R' D' R U R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 285</h3>
        <p>&#8226; F U R U' R' U R U' R2 F' R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 286</h3>
        <p>&#8226; R U R' U R U2' R' U' R U R' U R2 D R' U2 R D' R2'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 287</h3>
        <p>&#8226; R' U2 R U R' U' R U2 L U' R' U R L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 288</h3>
        <p>&#8226; R L' U R' U' L U2 R U' R' U R U2 R'</p>
    </div>
</div>
<h2 id="H1">H1</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 289</h3>
        <p>&#8226; R U2 R' U' R U' R' U' R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 290</h3>
        <p>&#8226; R' U2 R U R' U R U R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 291</h3>
        <p>&#8226; R' U' R U' R' U R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 292</h3>
        <p>&#8226; R U R' U R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 293</h3>
        <p>&#8226; R' U2 R U R' U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 294</h3>
        <p>&#8226; R U2 R' U' R U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 295</h3>
        <p>&#8226; R U R' U R U' R' U R U' R' U R' U' R2 U' R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 296</h3>
        <p>&#8226; R U R' U R U2 R' U' R' U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 297</h3>
        <p>&#8226; R U2 R D R' U' R D' R2 U' R' F R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 298</h3>
        <p>&#8226; F U R U' R' U R U' R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 299</h3>
        <p>&#8226; R U R' y' U R' U R U' R2 F R F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 300</h3>
        <p>&#8226; R' U' R y U' R U' R' U R l U' R' U l'</p>
    </div>
</div>
<h2 id="H2">H2</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 301</h3>
        <p>&#8226; F R U R' U' R U R' U' F' U R' F' U' F U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 302</h3>
        <p>&#8226; R' U' R U' R' U2 R U R' U' R U R' F' R U R' U' R' F R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 303</h3>
        <p>&#8226; L' U L U' L' U' L U R' U' R U L' U' L U2 R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 304</h3>
        <p>&#8226; R U' R' U R U R' U' L U L' U' R U R' U2 L U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 305</h3>
        <p>&#8226; R U R' U R U2 R' F R U' R' U' R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 306</h3>
        <p>&#8226; R U R2 F R F' r U' r' U r U r' U2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 307</h3>
        <p>&#8226; R' F R' F' R2 U' r' U r U' r' U' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 308</h3>
        <p>&#8226; R' U' R U' R' U' L U' R U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 309</h3>
        <p>&#8226; R U R' U R U L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 310</h3>
        <p>&#8226; R' U' R U' R' U F' R U R' U' R' F R2 U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 311</h3>
        <p>&#8226; R U R' U R' U' R2 U' R2 U' L U' R U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 312</h3>
        <p>&#8226; R' U2' R U R2' D' R U' R' D R2 U R' U R</p>
    </div>
</div>
<h2 id="H3">H3</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 313</h3>
        <p>&#8226; R U2 R' U' R2 D R' U R D' R2' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 314</h3>
        <p>&#8226; F R U' R' U' R U2 R' U' F' U R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 315</h3>
        <p>&#8226; R2 D' R U' R' D R2 U' R2 D' R U2 R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 316</h3>
        <p>&#8226; R2 D R' U R D' R2' U R2 D R' U2 R D' R2'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 317</h3>
        <p>&#8226; F R' F' r U R U' r2 F2 r U r' F r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 318</h3>
        <p>&#8226; R U R' U' R' F R U R U' R' F' R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 319</h3>
        <p>&#8226; R' U2 R U' L U2 R' U2 R U2 L' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 320</h3>
        <p>&#8226; R U2 R' U L' U2 R U2 R' U2 L R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 321</h3>
        <p>&#8226; F U' R U2 R' U2 R U' R' U' R U R' U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 322</h3>
        <p>&#8226; R' F R U R' U' F' R U' R' U R' F R F' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 323</h3>
        <p>&#8226; R U2 R' U' R U' R D' R U' R' D R U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 324</h3>
        <p>&#8226; R U2 R2 F U' R2 U' R2 U F' U R</p>
    </div>
</div>
<h2 id="H4">H4</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 325</h3>
        <p>&#8226; R' U2 R U2' R2 F' R U R U' R' F U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 326</h3>
        <p>&#8226; F B' R2 B R2 U' R2 U' R2 U R2 F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 327</h3>
        <p>&#8226; R' U' R U' R' U R U R' F R U R' U' R' F' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 328</h3>
        <p>&#8226; F R U' R' U R U2 R' U' R U R' U' F'</p>
    </div>
</div>
<h2 id="S1">S1</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 329</h3>
        <p>&#8226; R' U R2 U R' U R U2 R U2 R U R' U R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 330</h3>
        <p>&#8226; R' U2 R2 U R U' R' U R U R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 331</h3>
        <p>&#8226; R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 332</h3>
        <p>&#8226; R' U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 333</h3>
        <p>&#8226; R U R2 U' R2 U' R2 U2 R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 334</h3>
        <p>&#8226; R' U' R U' R U R2 U R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 335</h3>
        <p>&#8226; R U R' U' R' U2 R U R U' R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 336</h3>
        <p>&#8226; R' U' R U R U R' U' R' U R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 337</h3>
        <p>&#8226; R U R' U R U' R' U R' U' R2 U' R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 338</h3>
        <p>&#8226; R U R' U R U R U R U R U' R' U' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 339</h3>
        <p>&#8226; R U R' U R' U' R2 U' R' U R' U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 340</h3>
        <p>&#8226; R U R' U R U' R' U R' U' R' U R U' R' U' R2 U R</p>
    </div>
</div>
<h2 id="S2">S2</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 341</h3>
        <p>&#8226; F U' R' U R U F' R U R2 U R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 342</h3>
        <p>&#8226; R' D' R U' R' D R U2 R U R' U2 R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 343</h3>
        <p>&#8226; R' U2 R U R' U' R F U' R' U' R U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 344</h3>
        <p>&#8226; R' U R U2 R' U R U2 R D R' U' R D' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 345</h3>
        <p>&#8226; L' U2 R U' R' U2 L U R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 346</h3>
        <p>&#8226; F R U R' U' R U R2 U' F' U R U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 347</h3>
        <p>&#8226; R U R' F' R U R' U R U2 R' F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 348</h3>
        <p>&#8226; R U2 L' R' U2 R U2 R' U2 L U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 349</h3>
        <p>&#8226; R U' R2 U2 D' R U R' U D R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 350</h3>
        <p>&#8226; F U R' F R F' R U' R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 351</h3>
        <p>&#8226; R U R' U' L' U R U' L U' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 352</h3>
        <p>&#8226; F R U' R U2 R' U2 R' U' R U2 R' U' R2 U' R2 F'</p>
    </div>
</div>
<h2 id="S3">S3</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 353</h3>
        <p>&#8226; R U' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 354</h3>
        <p>&#8226; R' U2 R U R' U' R' D' R U2 R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-f></x-f><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 355</h3>
        <p>&#8226; R' D U' R' U R U2 D' R2 U R' U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-b></x-b><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 356</h3>
        <p>&#8226; R' U' R' U R2 D' U2 R U R' U' D R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 357</h3>
        <p>&#8226; R2 D R' U2 R D' R' U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 358</h3>
        <p>&#8226; D' R U R' U R U' R' U' D R2 U' R U' R' U R' U R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 359</h3>
        <p>&#8226; R U R' U R U R' U' R U R D R' U' R D' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 360</h3>
        <p>&#8226; R' U2 R U R' U' R' D' R U' R' D R U R U' R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 361</h3>
        <p>&#8226; R' U2 F' R U R' U' R' F R U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 362</h3>
        <p>&#8226; R2 U R U R' U' R' U' R' L' U R' U' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-r></x-r><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 363</h3>
        <p>&#8226; R U2 R' U2 R' F R2 U R' U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 364</h3>
        <p>&#8226; R U R' U R U' R' U' R' F R2 U' R' U' R U R' F'</p>
    </div>
</div>
<h2 id="S4">S4</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 365</h3>
        <p>&#8226; R2 U R' U R D R' U2 R D' R' U R U' R2'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 366</h3>
        <p>&#8226; R U R' U R U' R D R' U' R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 367</h3>
        <p>&#8226; R U' R' U' R U' R' U2 R U R2 D' R U2 R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 368</h3>
        <p>&#8226; F U R U' R' U R U' l U' R2 D' R U R' x</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 369</h3>
        <p>&#8226; R2 D' R U' R' D R U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-l></x-l><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 370</h3>
        <p>&#8226; R U2 R' L' U2 R U R' U2 L R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 371</h3>
        <p>&#8226; R' D' R U R' D R2 U' R' U R U R' U' R U2 R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 372</h3>
        <p>&#8226; R U' R' U' R U R D R' U2 R D' R2 U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 373</h3>
        <p>&#8226; R' U2 R' D' R U R' D R U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 374</h3>
        <p>&#8226; R' U' R U' R2 F' R U R U' R' F U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 375</h3>
        <p>&#8226; R U R' U R' D' R U R' D R U' R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 376</h3>
        <p>&#8226; R U2 R' U' R U R' U' R U R D R' U2 R D' R2</p>
    </div>
</div>
<h2 id="S5">S5</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 377</h3>
        <p>&#8226; f R' F' R U2 R U2 R' U2 S'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 378</h3>
        <p>&#8226; R' D' R U R' D R2 U R' U2 R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 379</h3>
        <p>&#8226; R' D R' U R D' U R U' R' U' R2 U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 380</h3>
        <p>&#8226; R' U2 R U R2 D' R U' R' D R U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 381</h3>
        <p>&#8226; R2 D' r U2 r' D R2 U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 382</h3>
        <p>&#8226; R' U2 R U R' U R' D' R U2 R' D R U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 383</h3>
        <p>&#8226; R L' U R' U' L U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 384</h3>
        <p>&#8226; R2 D' R U2 R' D R2 U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 385</h3>
        <p>&#8226; R2 F R U R U' R' F' R U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-f></x-f><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 386</h3>
        <p>&#8226; R U R' U R' U' R' D' R U R' D R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 387</h3>
        <p>&#8226; R' U' F U' R2 U R2 U F' R U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 388</h3>
        <p>&#8226; R2 D' R U2 R D2 R' U' R D2 R' U R' D R U2 R</p>
    </div>
</div>
<h2 id="S6">S6</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 389</h3>
        <p>&#8226; R U R' U' R U R2 D' R U2 R' D R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 390</h3>
        <p>&#8226; R U R' U R U' R2 F' R U R U' R' F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 391</h3>
        <p>&#8226; R U R' U R2 D r' U2 r D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 392</h3>
        <p>&#8226; R' U R U2 R' U R2 D R' U R D' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-f></x-f><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 393</h3>
        <p>&#8226; R' U' R U R2 U' R' U' R U D' R U R' D R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 394</h3>
        <p>&#8226; R U R' U R2 D R' U2 R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 395</h3>
        <p>&#8226; R' U2 R U2 L U' R' U L' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 396</h3>
        <p>&#8226; R U2 R D R' U2 R D' R' U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 397</h3>
        <p>&#8226; R U R2 F' R U2 R U2 R' F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 398</h3>
        <p>&#8226; R U R' U' R U R2 D' R U R' D R U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 399</h3>
        <p>&#8226; F' R U R' U R U2 R' F U R U' R' U2 R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-f></x-f><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 400</h3>
        <p>&#8226; R' F R U R' U' R' F' D' R U R' D R2</p>
    </div>
</div>
<h2 id="AS1">AS1</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 401</h3>
        <p>&#8226; R2' D' R U2 R' D R U R' F R U R U' R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 402</h3>
        <p>&#8226; R U2 R2 U' R' U R U' R' U' R2 U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 403</h3>
        <p>&#8226; R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 404</h3>
        <p>&#8226; R U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 405</h3>
        <p>&#8226; R' U' R2 U R2 U R2 U2 R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 406</h3>
        <p>&#8226; R U R' U R' U' R2 U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 407</h3>
        <p>&#8226; R' U' R U R U2 R' U' R' U R U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 408</h3>
        <p>&#8226; R U R' U' R' U' R U R U' R' U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 409</h3>
        <p>&#8226; R U R' U R' U' R U R' U' R2 U' R2 U R U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 410</h3>
        <p>&#8226; R' U' R U' R' U' R' U' R' U' R' U R U R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 411</h3>
        <p>&#8226; R U R' U' R U R2 U' R2 U' R' U R U' R' U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 412</h3>
        <p>&#8226; R U R' U R' U' R' U R U' R' U' R' U' R' U2 R</p>
    </div>
</div>
<h2 id="AS2">AS2</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 413</h3>
        <p>&#8226; R U2 R2 U' R2 U' R' F U' R' U' R U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 414</h3>
        <p>&#8226; R D R' U R D' R' U2 R' U' R U2 R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 415</h3>
        <p>&#8226; R U2 R' U' R U R' L' U R U' L U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 416</h3>
        <p>&#8226; R U' R' U2 R U' R' U2 R' D' R U R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 417</h3>
        <p>&#8226; F U' R' U R U F' R' U R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 418</h3>
        <p>&#8226; R U R' U L' U2 R U2 R' U2 R L U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 419</h3>
        <p>&#8226; R U R' F' R U2 R' U' R U' R' F R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 420</h3>
        <p>&#8226; R U R' U' R' U' F U R2 U' R' U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 421</h3>
        <p>&#8226; R' U R2 U2 D R' U' R U' D' R2 U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 422</h3>
        <p>&#8226; R' U R U R' U r U' R' U R U r' R' F R F' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 423</h3>
        <p>&#8226; z D' R' D R U R' D' R U' R U R' D R U' z'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 424</h3>
        <p>&#8226; R U2 R' U' R U r' F r U2 R' U' r' F2 r</p>
    </div>
</div>
<h2 id="AS3">AS3</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 425</h3>
        <p>&#8226; R' U L U' R U L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 426</h3>
        <p>&#8226; R U2 R' U' R U R D R' U2 R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 427</h3>
        <p>&#8226; R D' U R U' R' U2 D R2 U' R U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 428</h3>
        <p>&#8226; R U R U' R2 D U2 R' U' R U D' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 429</h3>
        <p>&#8226; R2 D' R U2 R' D R U R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 430</h3>
        <p>&#8226; D R' U' R U' R' U R U D' R2 U R' U R U' R U' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 431</h3>
        <p>&#8226; R' U' R U' R' U' R U R' U' R' D' R U R' D R U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 432</h3>
        <p>&#8226; R U2 R' U' R U R D R' U R D' R' U' R' U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 433</h3>
        <p>&#8226; F U R U' R' U R U' R2 F' R U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 434</h3>
        <p>&#8226; F R U' R' U R U R2 F' R U R U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 435</h3>
        <p>&#8226; R' U2 R' F' R U R U' R' F U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 436</h3>
        <p>&#8226; L' U R U' L R U R U R U' R' U' R2</p>
    </div>
</div>
<h2 id="AS4">AS4</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 437</h3>
        <p>&#8226; R D' R2 D R2 U' R2 D' R2 D R2 U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 438</h3>
        <p>&#8226; R' U' R U' R' U R' D' R U R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 439</h3>
        <p>&#8226; l U' R' D R2 U l' U R' U' R U R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 440</h3>
        <p>&#8226; R' D' R U2 R' D R2 U' R' U2 R U R' U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 441</h3>
        <p>&#8226; R2 D R' U R D' R' U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 442</h3>
        <p>&#8226; R U2 R' L' U2 R U' R' U2 L R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 443</h3>
        <p>&#8226; R U R' U' R' U' R U R U' R' U' R2 D' R U' R' D R U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 444</h3>
        <p>&#8226; R U2 R' U' R2 D R' U2 R D' R' U' R' U R U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-r></x-r><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 445</h3>
        <p>&#8226; R U2 R' U R' D' R U' R' D R U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-b></x-b><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 446</h3>
        <p>&#8226; R2 D R' U2 R D' R' U' R' U R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-r></x-r><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 447</h3>
        <p>&#8226; R' U' R U' R D R' U' R D' R' U R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-l></x-l><x-t></x-t><x-u></x-u><x-l></x-l><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 448</h3>
        <p>&#8226; R' U2 F' R U R' U' R' F R2 U R' U R</p>
    </div>
</div>
<h2 id="AS5">AS5</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 449</h3>
        <p>&#8226; R U2 R2 D' R U2 R' D R2 U' R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-f></x-f><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 450</h3>
        <p>&#8226; R D R' U' R D' R2 U' R U2 R' U' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 451</h3>
        <p>&#8226; R D' R U' R' D U' R' U R U R2 U' R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-l></x-l><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 452</h3>
        <p>&#8226; R U R' F' R U R' U' R' F R2 U R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-r></x-r><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 453</h3>
        <p>&#8226; R2 D r' U2 r D' R2 U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 454</h3>
        <p>&#8226; R U2 R' U' R U' R D R' U2 R D' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-b></x-b><x-u></x-u><x-t></x-t><x-b></x-b><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 455</h3>
        <p>&#8226; L R' U' R U L' U2 R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-f></x-f><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 456</h3>
        <p>&#8226; R2 D R' U2 R D' R2 U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 457</h3>
        <p>&#8226; R U R' F' R U2 R' U2 R' F R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 458</h3>
        <p>&#8226; R U2' R' U' R' D' R U' R' D R2 U' R' U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-b></x-b><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 459</h3>
        <p>&#8226; R U R' U2 R U R' U' F' R U2 R' U' R U' R' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-l></x-l><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 460</h3>
        <p>&#8226; R2 D' R U' R' D F R U R U' R' F' R</p>
    </div>
</div>
<h2 id="AS6">AS6</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-l></x-l><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 461</h3>
        <p>&#8226; R U2 R' U' F' R U R' U' R' F R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-l></x-l><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 462</h3>
        <p>&#8226; R' U2 R' D' R U R' D R2 U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-b></x-b><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 463</h3>
        <p>&#8226; R' U' R U' R2 D' r U2 r' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-u></x-u><x-t></x-t><x-l></x-l><x-u></x-u><x-u></x-u><x-r></x-r><x-b></x-b><x-f></x-f><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 464</h3>
        <p>&#8226; R U' R' U2 R U' R2 D' R U' R' D R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-b></x-b><x-b></x-b><x-f></x-f><x-t></x-t><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-r></x-r><x-f></x-f><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 465</h3>
        <p>&#8226; R U R' U' R2 U R U R' U' D R' U' R D' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-l></x-l><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 466</h3>
        <p>&#8226; R' U' R U' R2 D' R U2 R' D R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-r></x-r><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-l></x-l><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-t></x-t><x-u></x-u><x-f></x-f><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 467</h3>
        <p>&#8226; R U2 R' U2 L' U R U' R' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-b></x-b><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 468</h3>
        <p>&#8226; R' U2 R' D' R U2 R' D R U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-r></x-r><x-u></x-u><x-t></x-t><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-b></x-b><x-r></x-r><x-u></x-u><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-r></x-r><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 469</h3>
        <p>&#8226; R' U' R U R' F R U R' U' R' F' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-r></x-r><x-r></x-r><x-l></x-l><x-t></x-t><x-u></x-u><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-b></x-b><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-t></x-t><x-u></x-u><x-f></x-f><x-b></x-b><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 470</h3>
        <p>&#8226; R U2 R D' R U' R' D R U R U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-l></x-l><x-f></x-f><x-r></x-r><x-t></x-t><x-u></x-u><x-b></x-b><x-u></x-u><x-u></x-u><x-f></x-f><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-b></x-b><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-t></x-t><x-u></x-u><x-b></x-b><x-f></x-f><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 471</h3>
        <p>&#8226; R U R' U R' F U' R2 U' R2 U F' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-f></x-f><x-f></x-f><x-u></x-u><x-t></x-t><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-b></x-b><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-f></x-f><x-u></x-u><x-u></x-u><x-b></x-b><x-u></x-u><x-t></x-t><x-r></x-r><x-b></x-b><x-l></x-l><x-t></x-t>
    </div>
    <div class="info">
        <h3>ZBLL 472</h3>
        <p>&#8226; R U R' U R' U' R2 U' R D' R U R' D R U R</p>
    </div>
</div>