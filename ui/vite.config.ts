import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";

function algdb() {
    const pages = [
        "2x2-CLL",
        "2x2-EG1",
        "2x2-EG2",
        "2x2-PBL",
        "4x4-PLL-Parity",
        "CMLL",
        "COLL",
        "F2L",
        "LSE-EO",
        "LSE-EOLR",
        "OH-CMLL",
        "OLL",
        "OLLCP",
        "PLL",
        "SQ1-CSP",
        "SQ1-Cube-Shape",
        "SQ1-EP",
        "Winter-Variation",
        "ZBLL",
    ];
    const result = {};
    for (const page of pages) {
        const path = resolve(__dirname, 'algdb', `${page}.html`);
        result[`algdb/${page}`] = path;
    }
    return result;
}

function blogs() {
    const pages = [
        "deep-dive-on-tony-snyder",
        "how-to-be-good-at-inspection",
        "is-speedcubing-a-sport",
        "mental-load",
        "practicing-with-unlimited-inspection",
        "spaced-repetition",
    ];
    const result = {};
    for (const page of pages) {
        const path = resolve(__dirname, 'blog', `${page}.html`);
        result[`blog/${page}`] = path;
    }
    return result;
}

function tutorials() {
    const pages = [
        "cfop",
        "f2l",
        "inspection",
        "oll",
        "pll",
    ];
    const result = {};
    for (const page of pages) {
        const path = resolve(__dirname, 'tutorials', `${page}.html`);
        result[`tutorials/${page}`] = path;
    }
    return result;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    wasm(),
  ],
  build: {
    rollupOptions: {
      input: {
        404: resolve(__dirname, '404.html'),
        algdb: resolve(__dirname, 'algdb.html'),
        ...algdb(),
        blog: resolve(__dirname, 'blog.html'),
        ...blogs(),
        calculateKinch: resolve(__dirname, 'calculate-kinch.html'),
        calculateSoR: resolve(__dirname, 'calculate-sum-of-ranks.html'),
        index: resolve(__dirname, 'index.html'),
        keybindings: resolve(__dirname, 'keybindings.html'),
        recon: resolve(__dirname, 'recon.html'),
        timer: resolve(__dirname, 'timer.html'),
        train: resolve(__dirname, 'train.html'),
        ...tutorials(),
      },
    },
  },
})
