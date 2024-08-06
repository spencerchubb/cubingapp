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
<h2 id="3_Oriented">3 Oriented</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 1</h3>
        <p>&#8226; U' L' U2 R U' R' U2 L</p>
    </div>
</div>
<h2 id="2_Oriented">2 Oriented</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 2</h3>
        <p>&#8226; U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 3</h3>
        <p>&#8226; R' F R U R U' R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 4</h3>
        <p>&#8226; U R2 D R' U' R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 5</h3>
        <p>&#8226; U R U' R' U R' U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 6</h3>
        <p>&#8226; U' R' D' R U2 R' D R2 U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 7</h3>
        <p>&#8226; U R U R' U' R U' R'</p>
    </div>
</div>
<h2 id="1_Oriented">1 Oriented</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 8</h3>
        <p>&#8226; U2 R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 9</h3>
        <p>&#8226; U2 F' R U2 R' U2 R' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 10</h3>
        <p>&#8226; R' U2 R U R' U R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 11</h3>
        <p>&#8226; U2 R' U' R2 U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 12</h3>
        <p>&#8226; R' F2 R F2 U L' U L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 13</h3>
        <p>&#8226; U2 R U2 R2 U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 14</h3>
        <p>&#8226; U2 R2 D R' U2 R D' R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 15</h3>
        <p>&#8226; L' U R U' R' L</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 16</h3>
        <p>&#8226; U R' D' R U R' D R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 17</h3>
        <p>&#8226; R' F' R U2 R U2 R' F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 18</h3>
        <p>&#8226; U2 R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 19</h3>
        <p>&#8226; R' F2 R2 U' R' U' R U R' F2</p>
    </div>
</div>
<h2 id="0_Oriented">0 Oriented</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 20</h3>
        <p>&#8226; U R U' R' U' R U R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 21</h3>
        <p>&#8226; U R U' R2 U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 22</h3>
        <p>&#8226; U R2 D R' U R D' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 23</h3>
        <p>&#8226; R2 U R' U R' U' R U R U2 R2</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 24</h3>
        <p>&#8226; U2 R U' R' U R U' R' U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 25</h3>
        <p>&#8226; U2 R U2 R2 U2 R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 26</h3>
        <p>&#8226; U R U' R2 U' R U' R' U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-f></x-f><x-f></x-f></div><div><x-u></x-u><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-u></x-u><x-u></x-u></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>WV 27</h3>
        <p>&#8226; U R U R' U' R U R' U' R U' R'</p>
    </div>
</div>