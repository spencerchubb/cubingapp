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
<div class="alg-card">
    <div class="viz-pyraminx">
        <svg id='svg' viewBox='0 0 1000 870' stroke='black' stroke-width='8' stroke-linejoin='round'><polygon fill="#0f0" points="500,577 666,673 334,673" /><polygon fill="#f00" points="500,577 333,672 499,385" /><polygon fill="#00f" points="500,577 500,385 666,672" /><polygon fill="#00f" points="500,770 334,673 166,770" /><polygon fill="#0f0" points="332,480 499,385 499,191" /><polygon fill="#f00" points="667,480 666,672 834,769" /><polygon fill="#0f0" points="500,770 666,673 334,673" /><polygon fill="#f00" points="332,480 333,672 499,385" /><polygon fill="#00f" points="667,480 500,385 666,672" /><polygon fill="#00f" points="500,770 666,673 834,770" /><polygon fill="#0f0" points="332,480 333,672 165,769" /><polygon fill="#f00" points="667,480 500,385 500,191" /><polygon fill="#0f0" points="10,860 166,770 334,860" /><polygon fill="#f00" points="499,11 499,191 337,291" /><polygon fill="#00f" points="990,859 834,769 828,579" /><polygon fill="#0f0" points="500,770 334,860 166,770" /><polygon fill="#f00" points="332,480 337,291 499,191" /><polygon fill="#00f" points="667,480 828,579 834,769" /><polygon fill="#0f0" points="500,770 334,860 666,860" /><polygon fill="#f00" points="332,480 337,291 171,579" /><polygon fill="#00f" points="667,480 828,579 662,291" /><polygon fill="#0f0" points="500,770 666,860 834,770" /><polygon fill="#f00" points="332,480 171,579 165,769" /><polygon fill="#00f" points="667,480 662,291 500,191" /><polygon fill="#0f0" points="990,860 666,860 834,770" /><polygon fill="#f00" points="9,859 171,579 165,769" /><polygon fill="#00f" points="500,11 662,291 500,191" /></svg>
    </div>
    <div class="info">
        <h3>Sune</h3>
        <p>&#8226; (R U R') U (R U R')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-pyraminx">
        <svg id='svg' viewBox='0 0 1000 870' stroke='black' stroke-width='8' stroke-linejoin='round'><polygon fill="#0f0" points="500,577 666,673 334,673" /><polygon fill="#f00" points="500,577 333,672 499,385" /><polygon fill="#00f" points="500,577 500,385 666,672" /><polygon fill="#f00" points="500,770 334,673 166,770" /><polygon fill="#00f" points="332,480 499,385 499,191" /><polygon fill="#0f0" points="667,480 666,672 834,769" /><polygon fill="#0f0" points="500,770 666,673 334,673" /><polygon fill="#f00" points="332,480 333,672 499,385" /><polygon fill="#00f" points="667,480 500,385 666,672" /><polygon fill="#f00" points="500,770 666,673 834,770" /><polygon fill="#00f" points="332,480 333,672 165,769" /><polygon fill="#0f0" points="667,480 500,385 500,191" /><polygon fill="#0f0" points="10,860 166,770 334,860" /><polygon fill="#f00" points="499,11 499,191 337,291" /><polygon fill="#00f" points="990,859 834,769 828,579" /><polygon fill="#0f0" points="500,770 334,860 166,770" /><polygon fill="#f00" points="332,480 337,291 499,191" /><polygon fill="#00f" points="667,480 828,579 834,769" /><polygon fill="#0f0" points="500,770 334,860 666,860" /><polygon fill="#f00" points="332,480 337,291 171,579" /><polygon fill="#00f" points="667,480 828,579 662,291" /><polygon fill="#0f0" points="500,770 666,860 834,770" /><polygon fill="#f00" points="332,480 171,579 165,769" /><polygon fill="#00f" points="667,480 662,291 500,191" /><polygon fill="#0f0" points="990,860 666,860 834,770" /><polygon fill="#f00" points="9,859 171,579 165,769" /><polygon fill="#00f" points="500,11 662,291 500,191" /></svg>
    </div>
    <div class="info">
        <h3>Antisune</h3>
        <p>&#8226; (R U' R') U' (R U' R')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-pyraminx">
        <svg id='svg' viewBox='0 0 1000 870' stroke='black' stroke-width='8' stroke-linejoin='round'><polygon fill="#0f0" points="500,577 666,673 334,673" /><polygon fill="#f00" points="500,577 333,672 499,385" /><polygon fill="#00f" points="500,577 500,385 666,672" /><polygon fill="#f00" points="500,770 334,673 166,770" /><polygon fill="#f00" points="332,480 499,385 499,191" /><polygon fill="#0f0" points="667,480 666,672 834,769" /><polygon fill="#0f0" points="500,770 666,673 334,673" /><polygon fill="#f00" points="332,480 333,672 499,385" /><polygon fill="#00f" points="667,480 500,385 666,672" /><polygon fill="#00f" points="500,770 666,673 834,770" /><polygon fill="#0f0" points="332,480 333,672 165,769" /><polygon fill="#00f" points="667,480 500,385 500,191" /><polygon fill="#0f0" points="10,860 166,770 334,860" /><polygon fill="#f00" points="499,11 499,191 337,291" /><polygon fill="#00f" points="990,859 834,769 828,579" /><polygon fill="#0f0" points="500,770 334,860 166,770" /><polygon fill="#f00" points="332,480 337,291 499,191" /><polygon fill="#00f" points="667,480 828,579 834,769" /><polygon fill="#0f0" points="500,770 334,860 666,860" /><polygon fill="#f00" points="332,480 337,291 171,579" /><polygon fill="#00f" points="667,480 828,579 662,291" /><polygon fill="#0f0" points="500,770 666,860 834,770" /><polygon fill="#f00" points="332,480 171,579 165,769" /><polygon fill="#00f" points="667,480 662,291 500,191" /><polygon fill="#0f0" points="990,860 666,860 834,770" /><polygon fill="#f00" points="9,859 171,579 165,769" /><polygon fill="#00f" points="500,11 662,291 500,191" /></svg>
    </div>
    <div class="info">
        <h3>2-flip</h3>
        <p>&#8226; (L R' L' R) (U' R U R')</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-pyraminx">
        <svg id='svg' viewBox='0 0 1000 870' stroke='black' stroke-width='8' stroke-linejoin='round'><polygon fill="#0f0" points="500,577 666,673 334,673" /><polygon fill="#f00" points="500,577 333,672 499,385" /><polygon fill="#00f" points="500,577 500,385 666,672" /><polygon fill="#0f0" points="500,770 334,673 166,770" /><polygon fill="#0f0" points="332,480 499,385 499,191" /><polygon fill="#00f" points="667,480 666,672 834,769" /><polygon fill="#0f0" points="500,770 666,673 334,673" /><polygon fill="#f00" points="332,480 333,672 499,385" /><polygon fill="#00f" points="667,480 500,385 666,672" /><polygon fill="#f00" points="500,770 666,673 834,770" /><polygon fill="#00f" points="332,480 333,672 165,769" /><polygon fill="#f00" points="667,480 500,385 500,191" /><polygon fill="#0f0" points="10,860 166,770 334,860" /><polygon fill="#f00" points="499,11 499,191 337,291" /><polygon fill="#00f" points="990,859 834,769 828,579" /><polygon fill="#0f0" points="500,770 334,860 166,770" /><polygon fill="#f00" points="332,480 337,291 499,191" /><polygon fill="#00f" points="667,480 828,579 834,769" /><polygon fill="#0f0" points="500,770 334,860 666,860" /><polygon fill="#f00" points="332,480 337,291 171,579" /><polygon fill="#00f" points="667,480 828,579 662,291" /><polygon fill="#0f0" points="500,770 666,860 834,770" /><polygon fill="#f00" points="332,480 171,579 165,769" /><polygon fill="#00f" points="667,480 662,291 500,191" /><polygon fill="#0f0" points="990,860 666,860 834,770" /><polygon fill="#f00" points="9,859 171,579 165,769" /><polygon fill="#00f" points="500,11 662,291 500,191" /></svg>
    </div>
    <div class="info">
        <h3>R' unsexy R</h3>
        <p>&#8226; R' (U' L' U L) R</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-pyraminx">
        <svg id='svg' viewBox='0 0 1000 870' stroke='black' stroke-width='8' stroke-linejoin='round'><polygon fill="#0f0" points="500,577 666,673 334,673" /><polygon fill="#f00" points="500,577 333,672 499,385" /><polygon fill="#00f" points="500,577 500,385 666,672" /><polygon fill="#00f" points="500,770 334,673 166,770" /><polygon fill="#00f" points="332,480 499,385 499,191" /><polygon fill="#f00" points="667,480 666,672 834,769" /><polygon fill="#0f0" points="500,770 666,673 334,673" /><polygon fill="#f00" points="332,480 333,672 499,385" /><polygon fill="#00f" points="667,480 500,385 666,672" /><polygon fill="#0f0" points="500,770 666,673 834,770" /><polygon fill="#f00" points="332,480 333,672 165,769" /><polygon fill="#0f0" points="667,480 500,385 500,191" /><polygon fill="#0f0" points="10,860 166,770 334,860" /><polygon fill="#f00" points="499,11 499,191 337,291" /><polygon fill="#00f" points="990,859 834,769 828,579" /><polygon fill="#0f0" points="500,770 334,860 166,770" /><polygon fill="#f00" points="332,480 337,291 499,191" /><polygon fill="#00f" points="667,480 828,579 834,769" /><polygon fill="#0f0" points="500,770 334,860 666,860" /><polygon fill="#f00" points="332,480 337,291 171,579" /><polygon fill="#00f" points="667,480 828,579 662,291" /><polygon fill="#0f0" points="500,770 666,860 834,770" /><polygon fill="#f00" points="332,480 171,579 165,769" /><polygon fill="#00f" points="667,480 662,291 500,191" /><polygon fill="#0f0" points="990,860 666,860 834,770" /><polygon fill="#f00" points="9,859 171,579 165,769" /><polygon fill="#00f" points="500,11 662,291 500,191" /></svg>
    </div>
    <div class="info">
        <h3>L unsexy L'</h3>
        <p>&#8226; L (U R U' R') L'</p>
    </div>
</div>