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
<h2 id="Basic_insert">Basic insert</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><div></div><div></div></div><div><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 1</h3>
        <p>&#8226; U R U' R'<span class="note">Front Right</span></p><p>&#8226; F' L F L'<span class="note">Front Left</span></p><p>&#8226; U f R' f'<span class="note">Back Right</span></p><p>&#8226; U L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-r></x-r><div></div><div></div><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div></div><div><x-d></x-d><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 2</h3>
        <p>&#8226; F R' F' R<span class="note">Front Right</span></p><p>&#8226; U' L' U L<span class="note">Front Left</span></p><p>&#8226; U' R' U R<span class="note">Back Right</span></p><p>&#8226; U' f' L f<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><div></div><div></div></div><div><x-r></x-r><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 3</h3>
        <p>&#8226; F' U' F<span class="note">Front Right</span></p><p>&#8226; L' U' L<span class="note">Front Left</span></p><p>&#8226; R' U' R<span class="note">Back Right</span></p><p>&#8226; f' L' f<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><x-f></x-f><x-u></x-u><div></div><div></div><div></div><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div></div><div><x-d></x-d><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 4</h3>
        <p>&#8226; R U R'<span class="note">Front Right</span></p><p>&#8226; F U F'<span class="note">Front Left</span></p><p>&#8226; f R f'<span class="note">Back Right</span></p><p>&#8226; L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<h2 id="Split">Split</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><x-f></x-f><x-u></x-u><div></div><div></div><div></div><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><div></div><div></div></div><div><x-r></x-r><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 5</h3>
        <p>&#8226; U' R U R' U2 R U' R'<span class="note">Front Right</span></p><p>&#8226; U2 F R U R' U2 F'<span class="note">Front Left</span></p><p>&#8226; U' R' F R U R' U' F' R<span class="note">Back Right</span></p><p>&#8226; U' L U L' U2 L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div></div><div><x-d></x-d><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 6</h3>
        <p>&#8226; U' r U' R' U R U r'<span class="note">Front Right</span></p><p>&#8226; F2 R U R' U' F2<span class="note">Front Left</span></p><p>&#8226; U R' U' R U R' U2 R<span class="note">Back Right</span></p><p>&#8226; U' l U' L' U L U l'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><div></div><div></div></div><div><x-r></x-r><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 7</h3>
        <p>&#8226; U' R U2 R' U' R U2 R'<span class="note">Front Right</span></p><p>&#8226; F U R U2 R' U F'<span class="note">Front Left</span></p><p>&#8226; r U2 R2 U' R2 U' r'<span class="note">Back Right</span></p><p>&#8226; U' L U2 L' U2 L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><x-r></x-r><div></div><x-u></x-u><div></div><div></div><x-r></x-r><div></div></div><div><x-d></x-d><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><div></div><div></div></div><div><div></div><div></div><div></div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 8</h3>
        <p>&#8226; y' R' U2 R U R' U2 R y<span class="note">Front Right</span></p><p>&#8226; U L' U2 L U L' U2 L<span class="note">Front Left</span></p><p>&#8226; U R' U2 R U R' U2 R<span class="note">Back Right</span></p><p>&#8226; l' U2 L2 U L2 U l<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><x-r></x-r><x-u></x-u><div></div><div></div><div></div><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><div></div><div></div></div><div><x-r></x-r><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 9</h3>
        <p>&#8226; U' R U' R' U F' U' F<span class="note">Front Right</span></p><p>&#8226; U L' U' L U' L' U' L<span class="note">Front Left</span></p><p>&#8226; U R' U' R U' R' U' R<span class="note">Back Right</span></p><p>&#8226; y' U L' U' L U' L' U' L y<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-f></x-f><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div></div><div><x-d></x-d><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 10</h3>
        <p>&#8226; U' R U R' U R U R'<span class="note">Front Right</span></p><p>&#8226; F U' R U R' U2 F'<span class="note">Front Left</span></p><p>&#8226; R2 U' F' U F R2<span class="note">Back Right</span></p><p>&#8226; U' L U L' U L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><x-f></x-f><x-u></x-u><div></div><div></div><div></div><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-r></x-r><div></div><div></div></div><div><x-f></x-f><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 19</h3>
        <p>&#8226; U R U2 R' U R U' R'<span class="note">Front Right</span></p><p>&#8226; y' U R U2 R' U R U' R' y<span class="note">Front Left</span></p><p>&#8226; U R' F' U2 F R U R' U' R<span class="note">Back Right</span></p><p>&#8226; U L U2 L' U L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><x-r></x-r><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-r></x-r><div></div><div></div></div><div><x-f></x-f><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 20</h3>
        <p>&#8226; U' R U' R2 F R F' R U' R'<span class="note">Front Right</span></p><p>&#8226; U' L' U2 L U' L' U L<span class="note">Front Left</span></p><p>&#8226; U' R' U2 R U' R' U R<span class="note">Back Right</span></p><p>&#8226; y U' R' U2 R U' R' U R y'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><x-d></x-d><x-f></x-f><x-u></x-u><div></div><div></div><div></div><div></div></div><div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><div></div><div></div></div><div><div></div><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 21</h3>
        <p>&#8226; U R U R' U R U' R'<span class="note">Front Right</span></p><p>&#8226; F R U2 R' F'<span class="note">Front Left</span></p><p>&#8226; r' U r U2 r' U' r<span class="note">Back Right</span></p><p>&#8226; U2 L U L' U L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><x-r></x-r><x-u></x-u><div></div><div></div><div></div><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-r></x-r><div></div><div></div></div><div><x-f></x-f><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 22</h3>
        <p>&#8226; r U' r' U2 r U r'<span class="note">Front Right</span></p><p>&#8226; L' U L U2 L' U' L<span class="note">Front Left</span></p><p>&#8226; R' U R U2 R' U' R<span class="note">Back Right</span></p><p>&#8226; l U' l' U2 l U l'<span class="note">Back Left</span></p>
    </div>
</div>
<h2 id="Connected">Connected</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><div></div><div></div></div><div><x-r></x-r><div></div><div></div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 11</h3>
        <p>&#8226; U' R U2 R' U F' U' F<span class="note">Front Right</span></p><p>&#8226; L' U L U' L' U L U2 L' U L<span class="note">Front Left</span></p><p>&#8226; R' U R U' R' U R U2 R' U R<span class="note">Back Right</span></p><p>&#8226; U' L U2 L' U f' L' f<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-f></x-f><div></div><div></div><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><x-r></x-r><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div></div><div><x-d></x-d><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 12</h3>
        <p>&#8226; R U' R' U R U' R' U2 R U' R'<span class="note">Front Right</span></p><p>&#8226; U L' U2 L U' F U F'<span class="note">Front Left</span></p><p>&#8226; U R' U2 R U' f R f'<span class="note">Back Right</span></p><p>&#8226; L U' L' U L U' L' U2 L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-r></x-r><div></div><div></div><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-d></x-d><div></div><div></div></div><div><x-r></x-r><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 13</h3>
        <p>&#8226; y' U R' U R U' R' U' R y<span class="note">Front Right</span></p><p>&#8226; U L' U L U' L' U' L<span class="note">Front Left</span></p><p>&#8226; U R' U R U' R' U' R<span class="note">Back Right</span></p><p>&#8226; y' U L' U L U' L' U' L y<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div></div><div><x-d></x-d><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 14</h3>
        <p>&#8226; U' R U' R' U R U R'<span class="note">Front Right</span></p><p>&#8226; y U' L U' L' U L U L' y'<span class="note">Front Left</span></p><p>&#8226; y U' R U' R' U R U R' y'<span class="note">Back Right</span></p><p>&#8226; U' L U' L' U L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-f></x-f><div></div><div></div><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><x-r></x-r><x-f></x-f><x-f></x-f><x-d></x-d><div></div><div></div></div><div><x-r></x-r><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 15</h3>
        <p>&#8226; R U R' U2 R U' R' U R U' R'<span class="note">Front Right</span></p><p>&#8226; L' U L U2 F U F'<span class="note">Front Left</span></p><p>&#8226; R' U R U2 f R f'<span class="note">Back Right</span></p><p>&#8226; L U L' U2 L U' L' U L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div></div><div><x-d></x-d><div></div><div></div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 16</h3>
        <p>&#8226; R U' R' U2 F' U' F<span class="note">Front Right</span></p><p>&#8226; F U' R U' R' U2 F'<span class="note">Front Left</span></p><p>&#8226; R' U' R U2 R' U R U' R' U R<span class="note">Back Right</span></p><p>&#8226; L U' L' U2 f' L' f<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-r></x-r><div></div><div></div></div><div><x-f></x-f><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 17</h3>
        <p>&#8226; R U2 R' U' R U R'<span class="note">Front Right</span></p><p>&#8226; y R U2 R' U' R U R' y'<span class="note">Front Left</span></p><p>&#8226; R' U2 F R U R' U' F' R<span class="note">Back Right</span></p><p>&#8226; L U2 L' U' L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-r></x-r><div></div><div></div><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-r></x-r><div></div><div></div></div><div><x-f></x-f><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 18</h3>
        <p>&#8226; y' R' U2 R U R' U' R y<span class="note">Front Right</span></p><p>&#8226; L' U2 L U L' U' L<span class="note">Front Left</span></p><p>&#8226; R' U2 R U R' U' R<span class="note">Back Right</span></p><p>&#8226; L U2 F' L' U' L U F L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-f></x-f><div></div><div></div><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><x-r></x-r><x-f></x-f><x-f></x-f><x-r></x-r><div></div><div></div></div><div><x-f></x-f><div></div><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 23</h3>
        <p>&#8226; U R U' R' U' R U' R' U R U' R'<span class="note">Front Right</span></p><p>&#8226; F U' R U R' U R U2 R' F'<span class="note">Front Left</span></p><p>&#8226; U R' F R' F' R2 U' R' U R<span class="note">Back Right</span></p><p>&#8226; L U L' U2 L U L' U' L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-r></x-r><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-r></x-r><div></div><div></div></div><div><x-f></x-f><div></div><div></div><x-f></x-f><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 24</h3>
        <p>&#8226; U' R U R2 F R F' R U' R'<span class="note">Front Right</span></p><p>&#8226; U' L' U L U L' U L U' L' U L<span class="note">Front Left</span></p><p>&#8226; U' R' U R U R' U R U' R' U R<span class="note">Back Right</span></p><p>&#8226; U2 r U R' U R U2 B r'<span class="note">Back Left</span></p>
    </div>
</div>
<h2 id="Corner_in_slot">Corner in slot</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><div></div></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><div></div><x-f></x-f></div><div><div></div><div></div><x-r></x-r><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 25</h3>
        <p>&#8226; U' R' F R F' R U R'<span class="note">Front Right</span></p><p>&#8226; U' L' U L F' L F L'<span class="note">Front Left</span></p><p>&#8226; L' E' L U' L' E L<span class="note">Back Right</span></p><p>&#8226; y' U' L' U L F' L F L' y<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-r></x-r><div></div><div></div><div></div></div><div><div></div><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div><x-f></x-f></div><div><div></div><div></div><x-r></x-r><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 26</h3>
        <p>&#8226; U R U' R' F R' F' R<span class="note">Front Right</span></p><p>&#8226; U L F' L' F L' U' L<span class="note">Front Left</span></p><p>&#8226; y U R U' R' F R' F' R y'<span class="note">Back Right</span></p><p>&#8226; R E R' U R E' R'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><div></div></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><div></div><x-d></x-d></div><div><div></div><div></div><x-f></x-f><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 27</h3>
        <p>&#8226; R U' R' U R U' R'<span class="note">Front Right</span></p><p>&#8226; L' U' L U F' L F L'<span class="note">Front Left</span></p><p>&#8226; R' U2 R' F R F' R<span class="note">Back Right</span></p><p>&#8226; L U' L' U L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-r></x-r><div></div><div></div><div></div></div><div><div></div><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div><x-r></x-r></div><div><div></div><div></div><x-d></x-d><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 28</h3>
        <p>&#8226; R U R' U' F R' F' R<span class="note">Front Right</span></p><p>&#8226; L' U L U' L' U L<span class="note">Front Left</span></p><p>&#8226; R' U R U' R' U R<span class="note">Back Right</span></p><p>&#8226; L U2 L F' L' F L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><x-r></x-r><div></div><div></div><div></div></div><div><div></div><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><div></div><div></div><x-d></x-d></div><div><div></div><div></div><x-f></x-f><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 29</h3>
        <p>&#8226; R' F R F' U R U' R'<span class="note">Front Right</span></p><p>&#8226; L' U' L U L' U' L<span class="note">Front Left</span></p><p>&#8226; R' U' R U R' U' R<span class="note">Back Right</span></p><p>&#8226; U2 L U' L' f' L' f<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-f></x-f><div></div></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><div></div><x-r></x-r></div><div><div></div><div></div><x-d></x-d><x-r></x-r><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 30</h3>
        <p>&#8226; R U R' U' R U R'<span class="note">Front Right</span></p><p>&#8226; L F' L' F U' L' U L<span class="note">Front Left</span></p><p>&#8226; U2 R' U R f R f'<span class="note">Back Right</span></p><p>&#8226; L U L' U' L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<h2 id="Edge_in_slot">Edge in slot</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-r></x-r><x-r></x-r><div></div></div><div><x-f></x-f><x-f></x-f><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 31</h3>
        <p>&#8226; U' R' F R F' R U' R'<span class="note">Front Right</span></p><p>&#8226; U L F' L' F L' U L<span class="note">Front Left</span></p><p>&#8226; R' U R' F R F' R<span class="note">Back Right</span></p><p>&#8226; L U' L F' L' F L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-r></x-r><x-f></x-f><div></div></div><div><x-f></x-f><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 32</h3>
        <p>&#8226; U R U' R' U R U' R' U R U' R'<span class="note">Front Right</span></p><p>&#8226; U2 F U' R U R' U F'<span class="note">Front Left</span></p><p>&#8226; U' R' U R U' R' U R U' R' U R<span class="note">Back Right</span></p><p>&#8226; U L U' L' U L U' L' U L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-f></x-f><div></div></div><div><x-r></x-r><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 33</h3>
        <p>&#8226; U' R U' R' U2 R U' R'<span class="note">Front Right</span></p><p>&#8226; U' L' U' L U2 L' U' L<span class="note">Front Left</span></p><p>&#8226; U' R' U' R U2 R' U' R<span class="note">Back Right</span></p><p>&#8226; U' L U' L' U2 L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f><x-f></x-f><div></div></div><div><x-d></x-d><x-r></x-r><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 34</h3>
        <p>&#8226; U R U R' U2 R U R'<span class="note">Front Right</span></p><p>&#8226; U L' U L U2 L' U L<span class="note">Front Left</span></p><p>&#8226; U R' U R U R' U2 R<span class="note">Back Right</span></p><p>&#8226; U L U L' U2 L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-f></x-f></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-d></x-d><x-r></x-r><div></div></div><div><x-r></x-r><x-f></x-f><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 35</h3>
        <p>&#8226; U' R U R' U F' U' F<span class="note">Front Right</span></p><p>&#8226; U2 L F' L' F U2 L' U' L<span class="note">Front Left</span></p><p>&#8226; U' f R f' U R' U' R<span class="note">Back Right</span></p><p>&#8226; U2 L U L' U' L f' L f<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-r></x-r></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><x-f></x-f><x-r></x-r><div></div></div><div><x-d></x-d><x-f></x-f><div></div><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 36</h3>
        <p>&#8226; U F' U' F U' R U R'<span class="note">Front Right</span></p><p>&#8226; U2 L' U' L F' L F L'<span class="note">Front Left</span></p><p>&#8226; U2 R' U' R U f R' f'<span class="note">Back Right</span></p><p>&#8226; U f' L' f U' L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<h2 id="Both_in_slot">Both in slot</h2>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><div></div></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><x-r></x-r><x-f></x-f></div><div><div></div><x-f></x-f><x-r></x-r><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 37</h3>
        <p>&#8226; R2 U2 F R2 F' U2 R' U R'<span class="note">Front Right</span></p><p>&#8226; L2 U2 F' L2 F U2 L U' L<span class="note">Front Left</span></p><p>&#8226; R' U R r U2 R2 U' R2 U' r'<span class="note">Back Right</span></p><p>&#8226; L U' L' l' U2 L2 U L2 U l<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><div></div></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-d></x-d></div><div><div></div><x-r></x-r><x-f></x-f><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 38</h3>
        <p>&#8226; R U' R' U' R U R' U2 R U' R'<span class="note">Front Right</span></p><p>&#8226; L' U L U' L' U2 L U' L' U L<span class="note">Front Left</span></p><p>&#8226; R' U R U' R' U2 R U' R' U R<span class="note">Back Right</span></p><p>&#8226; L U L' U' L U2 L' U' L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><div></div></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-r></x-r></div><div><div></div><x-r></x-r><x-d></x-d><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 39</h3>
        <p>&#8226; R U' R' U R U2 R' U R U' R'<span class="note">Front Right</span></p><p>&#8226; L' U L U L' U' L U2 L' U L<span class="note">Front Left</span></p><p>&#8226; R' U' R U R' U2 R U R' U' R<span class="note">Back Right</span></p><p>&#8226; L U' L' U L U2 L' U L U' L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><div></div></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><x-r></x-r><x-d></x-d></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 40</h3>
        <p>&#8226; r U' r' U2 r U r' R U R'<span class="note">Front Right</span></p><p>&#8226; L' U L l' U l U2 l' U' l<span class="note">Front Left</span></p><p>&#8226; R' U R r' U r U2 r' U' r<span class="note">Back Right</span></p><p>&#8226; l U' l' U2 l U l' L U L'<span class="note">Back Left</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-3x3">
        <div><div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><div></div><div></div><div></div></div><div><div></div><x-f></x-f><x-f></x-f><div></div><x-f></x-f><x-f></x-f><div></div><x-r></x-r><x-r></x-r></div><div><div></div><x-f></x-f><x-d></x-d><div></div><x-r></x-r><x-r></x-r><div></div><x-r></x-r><x-r></x-r></div></div>
    </div>
    <div class="info">
        <h3>F2L 41</h3>
        <p>&#8226; R U' R' r U' r' U2 r U r'<span class="note">Front Right</span></p><p>&#8226; l' U l U2 l' U' l L' U' L<span class="note">Front Left</span></p><p>&#8226; r' U r U2 r' U' r R' U' R<span class="note">Back Right</span></p><p>&#8226; L U' L' l U' l' U2 l U l'<span class="note">Back Left</span></p>
    </div>
</div>