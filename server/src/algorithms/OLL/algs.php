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
<h2 id="Edges_oriented">Edges oriented</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-t></x-t><div></div><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 21</h3>
        <p>&#8226; R U R' U R U' R' U R U2 R'<span class="note">Double sune</span></p><p>&#8226; R U2 R' U' R U R' U' R U' R'<span class="note">Double antisune</span></p><p>&#8226; F (R U R' U') (R U R' U') (R U R' U') F'<span class="note">F triple sexy F'</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 22</h3>
        <p>&#8226; R U2 R2 U' R2 U' R2 U2 R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 23</h3>
        <p>&#8226; R2 D R' U2 R D' R' U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 24</h3>
        <p>&#8226; r U R' U' r' F R F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 25</h3>
        <p>&#8226; F' r U R' U' r' F R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 26</h3>
        <p>&#8226; R U2 R' U' R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 27</h3>
        <p>&#8226; R U R' U R U2 R'</p>
    </div>
</div>
<h2 id="Corners_oriented">Corners oriented</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 28</h3>
        <p>&#8226; R' F R S R' F' R S'<span class="note">Inverse of OLL 57, Can be written as commutator [R' F R, S]</span></p><p>&#8226; M' U' M U2 M' U' M</p><p>&#8226; r U R' U' M U R U' R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 57</h3>
        <p>&#8226; S R' F R S' R' F' R<span class="note">Inverse of OLL 28, Can be written as commutator [S, R' F R]</span></p><p>&#8226; R U R' U' M' U R U' r'</p>
    </div>
</div>
<h2 id="Dot">Dot</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 1</h3>
        <p>&#8226; R U2 R2 F R F' U2 R' F R F'<span class="note">R U2 R' sledge U2 sledge</span></p><p>&#8226; R U' R2 D' r U' r' D R2 U R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><div></div><div></div><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 2</h3>
        <p>&#8226; (r U r') U2 (R U2 R') U2 (r U' r')</p><p>&#8226; R U' R2 D' r U r' D R2 U R'</p><p>&#8226; F R U R' U' S R U R' U' f'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 3</h3>
        <p>&#8226; R' F2 R2 U2 R' F R U2 R2 F2 R<span class="note">Inverse of OLL 4</span></p><p>&#8226; f (R U R' U') f' U' F (R U R' U') F'</p><p>&#8226; r' R2 U R' U r U2 r' U M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 4</h3>
        <p>&#8226; R' F2 R2 U2 R' F' R U2 R2 F2 R<span class="note">Inverse of OLL 3</span></p><p>&#8226; f R U R' U' f' U F R U R' U' F'</p><p>&#8226; M U' r U2 r' U' R U' R' M'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 17</h3>
        <p>&#8226; F R' F' R U S' R U' R' S<span class="note">Hedge inverse sexy with S moves inserted</span></p><p>&#8226; F R' F' R2 r' U R U' R' U' M'<span class="note">Hedge inverse sexy with M moves inserted</span></p><p>&#8226; (R U R' U) (R' F R F') U2 (R' F R F')</p><p>&#8226; F' r U r' U' S r' F r S'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 18</h3>
        <p>&#8226; R U2 R2 F R F' U2 M' U R U' r'</p><p>&#8226; r U R' U R U2 r2 U' R U' R' U2 r<span class="note">Wide sune, wide antisune</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 19</h3>
        <p>&#8226; S' R U R' S U' R' F R F'<span class="note">Sexy sledge with S moves inserted</span></p><p>&#8226; R' U2 F R U R' U' F2 U2 F R</p><p>&#8226; r U2 R' U' R U' r2 U2 R U R' U r<span class="note">Wide antisune, wide sune</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 20</h3>
        <p>&#8226; S R' U' R U R U R U' R' S'</p><p>&#8226; r U R' U' M2 U R U' R' U' M'</p>
    </div>
</div>
<h2 id="Square">Square</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 5</h3>
        <p>&#8226; r' U2 R U R' U r<span class="note">Wide sune</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 6</h3>
        <p>&#8226; r U2 R' U' R U' r'<span class="note">Wide antisune</span></p>
    </div>
</div>
<h2 id="Line">Line</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 51</h3>
        <p>&#8226; F (U R U' R') (U R U' R') F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 52</h3>
        <p>&#8226; R' F' U' F U' R U R' U R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t><div></div><div></div><div></div><div></div><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><div></div><div></div><x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 55</h3>
        <p>&#8226; R' F U R U' R2 F' R2 U R' U' R</p><p>&#8226; R U2 R2 U' R U' R' U2 F R F'</p><p>&#8226; R' F R U R U' R2 F' R2 U' R' U R U R'</p><p>&#8226; F U' R2 D R' U2 R D' R2 U F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 56</h3>
        <p>&#8226; r U r' U R U' R' U R U' R' r U' r'</p><p>&#8226; F R U R' U' R F' r U R' U' r'</p>
    </div>
</div>
<h2 id="Fish">Fish</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 9</h3>
        <p>&#8226; (R U R' U') R' F R2 U R' U' F'<span class="note">sexy R' F R sexy F'</span></p><p>&#8226; R U2 R' U' S' R U' R' S</p><p>&#8226; F' U' F r U' r' U r U r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 10</h3>
        <p>&#8226; R U R' U R' F R F' R U2 R'<span class="note">Sune with sledge in the middle</span></p><p>&#8226; F U F' R' F R U' R' F' R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 35</h3>
        <p>&#8226; R U2 R2 F R F' R U2 R'<span class="note">R U2 R' sledge R U2 R'</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 37</h3>
        <p>&#8226; F R U' R' U' R U R' F'</p><p>&#8226; F R' F' R U R U' R'</p>
    </div>
</div>
<h2 id="Lightning">Lightning</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 7</h3>
        <p>&#8226; r U R' U R U2 r'<span class="note">Wide sune</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 8</h3>
        <p>&#8226; r' U' R U' R' U2 r<span class="note">Wide antisune</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 11</h3>
        <p>&#8226; S R U R' U R U2 R' U2 S'<span class="note">S sune U2 S'</span></p><p>&#8226; r' R2 U R' U R U2 R' U M'<span class="note">M sune U M'</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 12</h3>
        <p>&#8226; S R' U' R U' R' U2 R U2 S'<span class="note">S antisune U2 S'</span></p><p>&#8226; r R2' U' R U' R' U2 R U' M<span class="note">M' antisune U' M</span></p><p>&#8226; F (R U R' U') F' U F (R U R' U') F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 39</h3>
        <p>&#8226; f' r U r' U' r' F r S</p><p>&#8226; L F' L' U' L U F U' L'</p><p>&#8226; R U R' F' U' F U R U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><div></div><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 40</h3>
        <p>&#8226; R' F R U R' U' F' U R</p><p>&#8226; f R' F' R U R U' R' S'</p>
    </div>
</div>
<h2 id="Knight">Knight</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 13</h3>
        <p>&#8226; F U R U' R2 F' R U R U' R'<span class="note">Inverse of OLL 9, F inverse sexy R' F' R inverse sexy</span></p><p>&#8226; F U R U2 R' U' R U R' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><div></div><div></div><div></div><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 14</h3>
        <p>&#8226; (R' F R) U (R' F' R) (F U' F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 15</h3>
        <p>&#8226; l' U' l L' U' L U l' U l</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 16</h3>
        <p>&#8226; r U r' R U R' U' r U' r'</p>
    </div>
</div>
<h2 id="Awkward">Awkward</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-t></x-t><div></div><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 29</h3>
        <p>&#8226; r2 D' r U r' D r2 U' r' U' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 30</h3>
        <p>&#8226; r' D' r U' r' D r2 U' r' U r U r'</p><p>&#8226; F R' F R2 U' R' U' R U R' F2</p><p>&#8226; F U R U2 R' U' R U2 R' U' F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t><div></div><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 41</h3>
        <p>&#8226; R U R' U R U2 R' F R U R' U' F'<span class="note">Sune F sexy F'</span></p><p>&#8226; F U R2 D R' U' R D' R2 F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 42</h3>
        <p>&#8226; R' U' R U' R' U2 R F R U R' U' F'<span class="note">Antisune F sexy F'</span></p>
    </div>
</div>
<h2 id="P_shape">P shape</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 31</h3>
        <p>&#8226; R' U' F U R U' R' F' R<span class="note">R' U' (OLL 44) R</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 32</h3>
        <p>&#8226; S R U R' U' R' F R f'<span class="note">S sexy sledge S'</span></p><p>&#8226; L U F' U' L' U L F L'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><div></div><div></div><x-t></x-t><x-u></x-u><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 43</h3>
        <p>&#8226; R' U' F' U F R</p><p>&#8226; F' U' L' U L F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 44</h3>
        <p>&#8226; F U R U' R' F'</p>
    </div>
</div>
<h2 id="T_shape">T shape</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t><div></div><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 33</h3>
        <p>&#8226; (R U R' U') (R' F R F')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 45</h3>
        <p>&#8226; F R U R' U' F'</p>
    </div>
</div>
<h2 id="C_shape">C shape</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 34</h3>
        <p>&#8226; f R f' U' r' U' R U M'</p><p>&#8226; R U R2 U' R' F R U R U' F'</p><p>&#8226; F R U R' U' R' F' r U R U' r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-t></x-t><div></div><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 46</h3>
        <p>&#8226; R' U' R' F R F' U R</p>
    </div>
</div>
<h2 id="L_shape">L shape</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 47</h3>
        <p>&#8226; F' (L' U' L U) (L' U' L U) F</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 48</h3>
        <p>&#8226; F (R U R' U') (R U R' U') F'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><div></div><x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 49</h3>
        <p>&#8226; r U' r2 U r2 U r2 U' r</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><x-u></x-u><x-t></x-t><x-u></x-u><div></div><div></div><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 50</h3>
        <p>&#8226; r' U r2 U' r2 U' r2 U r'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-t></x-t><div></div><div></div><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 53</h3>
        <p>&#8226; r' U' R U' R' U R U' R' U2 r<span class="note">Double wide antisune</span></p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><div></div><x-t></x-t><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 54</h3>
        <p>&#8226; r U R' U R U' R' U R U2 r'<span class="note">Double wide sune</span></p>
    </div>
</div>
<h2 id="W_shape">W shape</h2>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><div></div><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 36</h3>
        <p>&#8226; R U R' F' R U R' U' R' F R U' R' F R F'</p><p>&#8226; R' F' U' F2 U R U' R' F' R</p><p>&#8226; R U R2 F' U' F U R2 U2 R'</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-2d-3x3">
        <x-t></x-t><x-u></x-u><div></div><div></div><x-t></x-t><div></div><div></div><x-u></x-u><x-u></x-u><div></div><div></div><x-u></x-u><x-u></x-u><div></div><x-u></x-u><div></div><x-u></x-u><div></div><div></div><x-u></x-u><x-t></x-t><div></div><x-u></x-u><div></div><x-t></x-t>
    </div>
    <div class="info">
        <h3>OLL 38</h3>
        <p>&#8226; R U R' U R U' R' U' R' F R F'</p><p>&#8226; F R U' R' S U' R U R' f'</p>
    </div>
</div>