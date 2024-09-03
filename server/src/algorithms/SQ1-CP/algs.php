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
<h2 id="Top_Adj">Top Adj</h2>
<div class="alg-card">
    <div class="viz-sq1">
        <svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#444"/><polygon points="15,85 25,75 25,56 15,59" fill="#f00"/><polygon points="15,85 25,75 43,75 40,85" fill="#0f0"/><polygon points="50,50 25,56 25,43" fill="#444"/><polygon points="15,40 25,43 25,56 15,59" fill="#f00"/><polygon points="50,50 25,43 25,25 43,25" fill="#444"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="50,50 43,25 56,25" fill="#444"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#444"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="50,50 75,43 75,56" fill="#444"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#444"/><polygon points="85,85 75,75 56,75 59,85" fill="#00f"/><polygon points="85,85 75,75 75,56 85,59" fill="#f00"/><polygon points="50,50 56,75 43,75" fill="#444"/><polygon points="40,85 43,75 56,75 59,85" fill="#00f"/></svg><svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#fff"/><polygon points="15,85 25,75 43,75 40,85" fill="#0f0"/><polygon points="15,85 25,75 25,56 15,59" fill="#f00"/><polygon points="50,50 25,56 25,43" fill="#fff"/><polygon points="15,40 25,43 25,56 15,59" fill="#f00"/><polygon points="50,50 25,43 25,25 43,25" fill="#fff"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="50,50 43,25 56,25" fill="#fff"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#fff"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,43 75,56" fill="#fff"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#fff"/><polygon points="85,85 75,75 75,56 85,59" fill="#f00"/><polygon points="85,85 75,75 56,75 59,85" fill="#00f"/><polygon points="50,50 56,75 43,75" fill="#fff"/><polygon points="40,85 43,75 56,75 59,85" fill="#00f"/></svg>
    </div>
    <div class="info">
        <h3>Adj / Adj</h3>
        <p>&#8226; / -3,0 / 3,3 / 0,-3 /</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-sq1">
        <svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#444"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="50,50 25,56 25,43" fill="#444"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#444"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="50,50 43,25 56,25" fill="#444"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#444"/><polygon points="85,14 75,24 75,43 85,40" fill="#f00"/><polygon points="85,14 75,24 56,25 59,15" fill="#0f0"/><polygon points="50,50 75,43 75,56" fill="#444"/><polygon points="85,59 75,56 75,43 85,40" fill="#f00"/><polygon points="50,50 75,56 75,75 56,75" fill="#444"/><polygon points="85,85 75,75 56,75 59,85" fill="#0f0"/><polygon points="85,85 75,75 75,56 85,59" fill="#f80"/><polygon points="50,50 56,75 43,75" fill="#444"/><polygon points="40,85 43,75 56,75 59,85" fill="#0f0"/></svg><svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#fff"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="50,50 25,56 25,43" fill="#fff"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#fff"/><polygon points="15,15 25,25 25,43 15,40" fill="#0f0"/><polygon points="15,15 25,25 43,25 40,15" fill="#f00"/><polygon points="50,50 43,25 56,25" fill="#fff"/><polygon points="59,15 56,25 43,25 40,15" fill="#f00"/><polygon points="50,50 56,25 75,24 75,43" fill="#fff"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,43 75,56" fill="#fff"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#fff"/><polygon points="85,85 75,75 75,56 85,59" fill="#00f"/><polygon points="85,85 75,75 56,75 59,85" fill="#f80"/><polygon points="50,50 56,75 43,75" fill="#fff"/><polygon points="40,85 43,75 56,75 59,85" fill="#f80"/></svg>
    </div>
    <div class="info">
        <h3>Adj / Opp</h3>
        <p>&#8226; / 0,-3 / 0,3 / 0,-3 / 0,3 /</p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-sq1">
        <svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#444"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="50,50 25,56 25,43" fill="#444"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#444"/><polygon points="15,15 25,25 43,25 40,15" fill="#0f0"/><polygon points="15,15 25,25 25,43 15,40" fill="#f80"/><polygon points="50,50 43,25 56,25" fill="#444"/><polygon points="59,15 56,25 43,25 40,15" fill="#0f0"/><polygon points="50,50 56,25 75,24 75,43" fill="#444"/><polygon points="85,14 75,24 75,43 85,40" fill="#f00"/><polygon points="85,14 75,24 56,25 59,15" fill="#0f0"/><polygon points="50,50 75,43 75,56" fill="#444"/><polygon points="85,59 75,56 75,43 85,40" fill="#f00"/><polygon points="50,50 75,56 75,75 56,75" fill="#444"/><polygon points="85,85 75,75 56,75 59,85" fill="#f80"/><polygon points="85,85 75,75 75,56 85,59" fill="#00f"/><polygon points="50,50 56,75 43,75" fill="#444"/><polygon points="40,85 43,75 56,75 59,85" fill="#f80"/></svg><svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#fff"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="50,50 25,56 25,43" fill="#fff"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#fff"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="50,50 43,25 56,25" fill="#fff"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#fff"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,43 75,56" fill="#fff"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#fff"/><polygon points="85,85 75,75 75,56 85,59" fill="#0f0"/><polygon points="85,85 75,75 56,75 59,85" fill="#f00"/><polygon points="50,50 56,75 43,75" fill="#fff"/><polygon points="40,85 43,75 56,75 59,85" fill="#f00"/></svg>
    </div>
    <div class="info">
        <h3>Adj / Solved</h3>
        <p>&#8226; / 3,-3 / -3,0 / 0,3 / 0,-3 / 0,3 /</p>
    </div>
</div>
<h2 id="Top_Opp">Top Opp</h2>
<div class="alg-card">
    <div class="viz-sq1">
        <svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#444"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="50,50 25,56 25,43" fill="#444"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#444"/><polygon points="15,15 25,25 43,25 40,15" fill="#f00"/><polygon points="15,15 25,25 25,43 15,40" fill="#0f0"/><polygon points="50,50 43,25 56,25" fill="#444"/><polygon points="59,15 56,25 43,25 40,15" fill="#f00"/><polygon points="50,50 56,25 75,24 75,43" fill="#444"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="50,50 75,43 75,56" fill="#444"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#444"/><polygon points="85,85 75,75 56,75 59,85" fill="#f80"/><polygon points="85,85 75,75 75,56 85,59" fill="#00f"/><polygon points="50,50 56,75 43,75" fill="#444"/><polygon points="40,85 43,75 56,75 59,85" fill="#f80"/></svg><svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#fff"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="50,50 25,56 25,43" fill="#fff"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#fff"/><polygon points="15,15 25,25 25,43 15,40" fill="#0f0"/><polygon points="15,15 25,25 43,25 40,15" fill="#f00"/><polygon points="50,50 43,25 56,25" fill="#fff"/><polygon points="59,15 56,25 43,25 40,15" fill="#f00"/><polygon points="50,50 56,25 75,24 75,43" fill="#fff"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,43 75,56" fill="#fff"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#fff"/><polygon points="85,85 75,75 75,56 85,59" fill="#00f"/><polygon points="85,85 75,75 56,75 59,85" fill="#f80"/><polygon points="50,50 56,75 43,75" fill="#fff"/><polygon points="40,85 43,75 56,75 59,85" fill="#f80"/></svg>
    </div>
    <div class="info">
        <h3>Opp / Opp</h3>
        <p>&#8226; / 3,-3 / -3,3 / </p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-sq1">
        <svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#444"/><polygon points="15,85 25,75 25,56 15,59" fill="#0f0"/><polygon points="15,85 25,75 43,75 40,85" fill="#f80"/><polygon points="50,50 25,56 25,43" fill="#444"/><polygon points="15,40 25,43 25,56 15,59" fill="#0f0"/><polygon points="50,50 25,43 25,25 43,25" fill="#444"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="50,50 43,25 56,25" fill="#444"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#444"/><polygon points="85,14 75,24 75,43 85,40" fill="#00f"/><polygon points="85,14 75,24 56,25 59,15" fill="#f00"/><polygon points="50,50 75,43 75,56" fill="#444"/><polygon points="85,59 75,56 75,43 85,40" fill="#00f"/><polygon points="50,50 75,56 75,75 56,75" fill="#444"/><polygon points="85,85 75,75 56,75 59,85" fill="#f00"/><polygon points="85,85 75,75 75,56 85,59" fill="#0f0"/><polygon points="50,50 56,75 43,75" fill="#444"/><polygon points="40,85 43,75 56,75 59,85" fill="#f00"/></svg><svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#fff"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="50,50 25,56 25,43" fill="#fff"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#fff"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="50,50 43,25 56,25" fill="#fff"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#fff"/><polygon points="85,14 75,24 56,25 59,15" fill="#0f0"/><polygon points="85,14 75,24 75,43 85,40" fill="#f00"/><polygon points="50,50 75,43 75,56" fill="#fff"/><polygon points="85,59 75,56 75,43 85,40" fill="#f00"/><polygon points="50,50 75,56 75,75 56,75" fill="#fff"/><polygon points="85,85 75,75 75,56 85,59" fill="#f80"/><polygon points="85,85 75,75 56,75 59,85" fill="#0f0"/><polygon points="50,50 56,75 43,75" fill="#fff"/><polygon points="40,85 43,75 56,75 59,85" fill="#0f0"/></svg>
    </div>
    <div class="info">
        <h3>Opp / Adj</h3>
        <p>&#8226; / -3,0 / 3,0 / -3,0 / 3,0 / </p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-sq1">
        <svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#444"/><polygon points="15,85 25,75 25,56 15,59" fill="#f80"/><polygon points="15,85 25,75 43,75 40,85" fill="#00f"/><polygon points="50,50 25,56 25,43" fill="#444"/><polygon points="15,40 25,43 25,56 15,59" fill="#f80"/><polygon points="50,50 25,43 25,25 43,25" fill="#444"/><polygon points="15,15 25,25 43,25 40,15" fill="#00f"/><polygon points="15,15 25,25 25,43 15,40" fill="#f00"/><polygon points="50,50 43,25 56,25" fill="#444"/><polygon points="59,15 56,25 43,25 40,15" fill="#00f"/><polygon points="50,50 56,25 75,24 75,43" fill="#444"/><polygon points="85,14 75,24 75,43 85,40" fill="#f00"/><polygon points="85,14 75,24 56,25 59,15" fill="#0f0"/><polygon points="50,50 75,43 75,56" fill="#444"/><polygon points="85,59 75,56 75,43 85,40" fill="#f00"/><polygon points="50,50 75,56 75,75 56,75" fill="#444"/><polygon points="85,85 75,75 56,75 59,85" fill="#0f0"/><polygon points="85,85 75,75 75,56 85,59" fill="#f80"/><polygon points="50,50 56,75 43,75" fill="#444"/><polygon points="40,85 43,75 56,75 59,85" fill="#0f0"/></svg><svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#fff"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="50,50 25,56 25,43" fill="#fff"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#fff"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="50,50 43,25 56,25" fill="#fff"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#fff"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,43 75,56" fill="#fff"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#fff"/><polygon points="85,85 75,75 75,56 85,59" fill="#0f0"/><polygon points="85,85 75,75 56,75 59,85" fill="#f00"/><polygon points="50,50 56,75 43,75" fill="#fff"/><polygon points="40,85 43,75 56,75 59,85" fill="#f00"/></svg>
    </div>
    <div class="info">
        <h3>Opp / Solved</h3>
        <p>&#8226; / -3,-3 / -3,0 / -3,-3 / -3,0 / -3,-3 / </p>
    </div>
</div>
<h2 id="Top_Solved">Top Solved</h2>
<div class="alg-card">
    <div class="viz-sq1">
        <svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#444"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="50,50 25,56 25,43" fill="#444"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#444"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="50,50 43,25 56,25" fill="#444"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#444"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="50,50 75,43 75,56" fill="#444"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#444"/><polygon points="85,85 75,75 56,75 59,85" fill="#f00"/><polygon points="85,85 75,75 75,56 85,59" fill="#0f0"/><polygon points="50,50 56,75 43,75" fill="#444"/><polygon points="40,85 43,75 56,75 59,85" fill="#f00"/></svg><svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#fff"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="50,50 25,56 25,43" fill="#fff"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#fff"/><polygon points="15,15 25,25 25,43 15,40" fill="#f80"/><polygon points="15,15 25,25 43,25 40,15" fill="#0f0"/><polygon points="50,50 43,25 56,25" fill="#fff"/><polygon points="59,15 56,25 43,25 40,15" fill="#0f0"/><polygon points="50,50 56,25 75,24 75,43" fill="#fff"/><polygon points="85,14 75,24 56,25 59,15" fill="#0f0"/><polygon points="85,14 75,24 75,43 85,40" fill="#f00"/><polygon points="50,50 75,43 75,56" fill="#fff"/><polygon points="85,59 75,56 75,43 85,40" fill="#f00"/><polygon points="50,50 75,56 75,75 56,75" fill="#fff"/><polygon points="85,85 75,75 75,56 85,59" fill="#00f"/><polygon points="85,85 75,75 56,75 59,85" fill="#f80"/><polygon points="50,50 56,75 43,75" fill="#fff"/><polygon points="40,85 43,75 56,75 59,85" fill="#f80"/></svg>
    </div>
    <div class="info">
        <h3>Solved / Adj</h3>
        <p>&#8226; / 3,-3 / 0,3 / -3,0 / 3,0 / -3,0 / </p>
    </div>
</div>
<div class="alg-card">
    <div class="viz-sq1">
        <svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#444"/><polygon points="15,85 25,75 25,56 15,59" fill="#00f"/><polygon points="15,85 25,75 43,75 40,85" fill="#f00"/><polygon points="50,50 25,56 25,43" fill="#444"/><polygon points="15,40 25,43 25,56 15,59" fill="#00f"/><polygon points="50,50 25,43 25,25 43,25" fill="#444"/><polygon points="15,15 25,25 43,25 40,15" fill="#f80"/><polygon points="15,15 25,25 25,43 15,40" fill="#00f"/><polygon points="50,50 43,25 56,25" fill="#444"/><polygon points="59,15 56,25 43,25 40,15" fill="#f80"/><polygon points="50,50 56,25 75,24 75,43" fill="#444"/><polygon points="85,14 75,24 75,43 85,40" fill="#0f0"/><polygon points="85,14 75,24 56,25 59,15" fill="#f80"/><polygon points="50,50 75,43 75,56" fill="#444"/><polygon points="85,59 75,56 75,43 85,40" fill="#0f0"/><polygon points="50,50 75,56 75,75 56,75" fill="#444"/><polygon points="85,85 75,75 56,75 59,85" fill="#f00"/><polygon points="85,85 75,75 75,56 85,59" fill="#0f0"/><polygon points="50,50 56,75 43,75" fill="#444"/><polygon points="40,85 43,75 56,75 59,85" fill="#f00"/></svg><svg viewBox="0 0 100 100" stroke-linejoin="round"><polygon points="50,50 43,75 25,75 25,56" fill="#fff"/><polygon points="15,85 25,75 43,75 40,85" fill="#00f"/><polygon points="15,85 25,75 25,56 15,59" fill="#f80"/><polygon points="50,50 25,56 25,43" fill="#fff"/><polygon points="15,40 25,43 25,56 15,59" fill="#f80"/><polygon points="50,50 25,43 25,25 43,25" fill="#fff"/><polygon points="15,15 25,25 25,43 15,40" fill="#f00"/><polygon points="15,15 25,25 43,25 40,15" fill="#00f"/><polygon points="50,50 43,25 56,25" fill="#fff"/><polygon points="59,15 56,25 43,25 40,15" fill="#00f"/><polygon points="50,50 56,25 75,24 75,43" fill="#fff"/><polygon points="85,14 75,24 56,25 59,15" fill="#0f0"/><polygon points="85,14 75,24 75,43 85,40" fill="#f00"/><polygon points="50,50 75,43 75,56" fill="#fff"/><polygon points="85,59 75,56 75,43 85,40" fill="#f00"/><polygon points="50,50 75,56 75,75 56,75" fill="#fff"/><polygon points="85,85 75,75 75,56 85,59" fill="#f80"/><polygon points="85,85 75,75 56,75 59,85" fill="#0f0"/><polygon points="50,50 56,75 43,75" fill="#fff"/><polygon points="40,85 43,75 56,75 59,85" fill="#0f0"/></svg>
    </div>
    <div class="info">
        <h3>Solved / Opp</h3>
        <p>&#8226; / 3,3 / 0,3 / 3,3 / 0,3 / 3,3 / </p>
    </div>
</div>