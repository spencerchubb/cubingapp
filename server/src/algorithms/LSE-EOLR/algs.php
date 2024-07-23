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
<h2 id="Arrow">Arrow</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-d></x-d><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Arrow (UF DF)</h3>
        <p>&#8226; M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-d></x-d><div></div><x-u></x-u><x-l></x-l><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><x-d></x-d><x-b></x-b><x-d></x-d><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Arrow (UB UR)</h3>
        <p>&#8226; M' U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Arrow (UF UR)</h3>
        <p>&#8226; U M' U2 M U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><x-d></x-d><x-f></x-f><x-u></x-u><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>Arrow (DF DB)</h3>
        <p>&#8226; U' M U' M' U' M</p>
    </div>
</div>
<h2 id="1_/_1">1 / 1</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-b></x-b><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UF UR)</h3>
        <p>&#8226; M' U M' U M U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-d></x-d><x-d></x-d><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UF DF)</h3>
        <p>&#8226; M U M' U M U M'</p><p>&#8226; U' M' U M' U2 M U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-u></x-u><x-b></x-b><div></div><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UF UB)</h3>
        <p>&#8226; M U' M' U2 M' U2 M' U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><x-d></x-d><x-b></x-b><div></div><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UR UB)</h3>
        <p>&#8226; M U' M' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UR UL)</h3>
        <p>&#8226; U' M' U M' U2 M U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><x-d></x-d><x-f></x-f><x-r></x-r><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UR DF)</h3>
        <p>&#8226; M' U' M' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UR DB)</h3>
        <p>&#8226; M U M' U M U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UB DF)</h3>
        <p>&#8226; U M' U2 M U M U M' U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><x-d></x-d><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (UB DB)</h3>
        <p>&#8226; U' M' U M' U2 M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>1 / 1 (DF DB)</h3>
        <p>&#8226; M' U' M' U2 M' U2 M' U M</p>
    </div>
</div>
<h2 id="2_Adj_/_2">2 Adj / 2</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><x-r></x-r><x-f></x-f><x-u></x-u><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 2 (UF UL)</h3>
        <p>&#8226; U M' U2 M U M U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-r></x-r><x-b></x-b><x-d></x-d><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 2 (UF UR)</h3>
        <p>&#8226; M' U' M U2 M U2 M' U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><x-l></x-l><x-f></x-f><x-u></x-u><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 2 (UF UB)</h3>
        <p>&#8226; U M' U' M' U' M' U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-l></x-l><x-u></x-u><x-r></x-r><x-u></x-u><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-d></x-d><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 2 (UL UB)</h3>
        <p>&#8226; U' M2 U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 2 (UF DF)</h3>
        <p>&#8226; U' M2 U M U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-u></x-u><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 2 (UL DF)</h3>
        <p>&#8226; U2 M' U2 M' U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 2 (DF DB)</h3>
        <p>&#8226; U M' U' M' U' M' U' M'</p>
    </div>
</div>
<h2 id="2_Adj_/_0">2 Adj / 0</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><x-l></x-l><x-b></x-b><div></div><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 0 (UF UL)</h3>
        <p>&#8226; U M' U' M' U2 M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-r></x-r><x-b></x-b><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 0 (UF UR)</h3>
        <p>&#8226; M' U2 M' U' M' U' M U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-r></x-r><x-f></x-f><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 0 (UF UB)</h3>
        <p>&#8226; M' U M U M' U2 M U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-d></x-d><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><div></div><x-b></x-b><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 0 (UL UB)</h3>
        <p>&#8226; U M' U' M' U M U' M' U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-r></x-r><x-b></x-b><x-l></x-l><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 0 (UF DF)</h3>
        <p>&#8226; U2 M U M' U2 M U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-r></x-r><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-l></x-l><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 0 (UL DF)</h3>
        <p>&#8226; M' U M' U2 M' U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><x-b></x-b><x-r></x-r><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Adj / 0 (DF DB)</h3>
        <p>&#8226; M' U M' U2 M' U' M'</p>
    </div>
</div>
<h2 id="2_Opp_/_2">2 Opp / 2</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><x-r></x-r><x-b></x-b><x-d></x-d><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 2 (UF UR)</h3>
        <p>&#8226; M' U2 M' U2 M U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-l></x-l><x-u></x-u><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u><x-r></x-r><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 2 (UR UL)</h3>
        <p>&#8226; M2 U' M' U2 M' U2 M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-l></x-l><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-d></x-d><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 2 (UF DF)</h3>
        <p>&#8226; M2 U' M' U2 M' U2 M' U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-d></x-d><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 2 (DF DB)</h3>
        <p>&#8226; M' U2 M' U2 M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-d></x-d><x-d></x-d><x-u></x-u><x-u></x-u><x-l></x-l><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><div></div><x-b></x-b><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 2 (UR DF)</h3>
        <p>&#8226; M' U2 M U M U2 M' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><x-d></x-d><x-d></x-d><x-u></x-u><x-u></x-u><div></div><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-r></x-r><x-b></x-b><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-d></x-d><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 2 (UF UB)</h3>
        <p>&#8226; M' U2 M' U2 M U' M U' M' U2 M</p>
    </div>
</div>
<h2 id="2_Opp_/_0">2 Opp / 0</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-r></x-r><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><div></div><x-r></x-r><x-f></x-f><x-f></x-f></div><div><x-b></x-b><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-b></x-b><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 0 (UF UR)</h3>
        <p>&#8226; M' U' M U M' U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-r></x-r><x-u></x-u><x-l></x-l><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 0 (UF UB)</h3>
        <p>&#8226; M' U' M U M' U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-d></x-d><x-r></x-r><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-b></x-b><x-l></x-l><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 0 (UF DF)</h3>
        <p>&#8226; M U M' U' M U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><x-l></x-l><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 0 (UR DF)</h3>
        <p>&#8226; M' U M U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><div></div><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 0 (UR UL)</h3>
        <p>&#8226; M' U' M' U' M' U2 M U' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><div></div><x-d></x-d><div></div><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-d></x-d><x-b></x-b><x-l></x-l><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>2 Opp / 0 (DF DB)</h3>
        <p>&#8226; R U R' U' M' U R U' r'</p><p>&#8226; U S R' F R S' R' F' R</p>
    </div>
</div>
<h2 id="0_/_2">0 / 2</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-r></x-r><x-f></x-f><x-d></x-d><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>0 / 2 (UF UR)</h3>
        <p>&#8226; M' U' M' U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u><x-u></x-u><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-d></x-d><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>0 / 2 (UL UR)</h3>
        <p>&#8226; M' U' M U' M U2 M' U' M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-d></x-d><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><x-l></x-l><x-b></x-b><x-u></x-u><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>0 / 2 (UF DF)</h3>
        <p>&#8226; U M' U' M' U M U M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-u></x-u><x-d></x-d><x-u></x-u><x-d></x-d><x-u></x-u></div><div><x-l></x-l><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-u></x-u><x-l></x-l><x-f></x-f><x-f></x-f></div><div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r><x-f></x-f><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>0 / 2 (DF DB)</h3>
        <p>&#8226; M' U' M' U M U' M'</p>
    </div>
</div>
<h2 id="All_6">All 6</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-l></x-l><x-u></x-u><div></div><x-u></x-u></div><div><x-b></x-b><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-b></x-b><x-f></x-f><x-f></x-f></div><div><x-l></x-l><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-l></x-l><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>All 6 (UF DF)</h3>
        <p>&#8226; U' M U M' U' M U' M' U2 M</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u></div><div><x-f></x-f><x-f></x-f><x-f></x-f><x-u></x-u><x-f></x-f><x-u></x-u><x-f></x-f><x-f></x-f><x-f></x-f></div><div><x-r></x-r><x-r></x-r><x-r></x-r><x-u></x-u><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>All 6 (DF DB)</h3>
        <p>&#8226; M' U' M' U' M U' M' U2 M' U' M</p>
    </div>
</div>