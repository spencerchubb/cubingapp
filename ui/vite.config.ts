import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";

function algorithms() {
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
        "SQ1-OBL",
        "Winter-Variation",
        "ZBLL",
    ];
    const result = {};
    for (const page of pages) {
        const path = resolve(__dirname, 'algorithms', `${page}.html`);
        result[`algorithms/${page}`] = path;
    }
    return result;
}

function train() {
    const pages = [
        "2x2-CLL",
        "2x2-EG1",
        "2x2-EG2",
        "2x2-PBL",
        // "4x4-PLL-Parity",
        "CMLL",
        "COLL",
        "F2L",
        "LSE-EO",
        "LSE-EOLR",
        // "OH-CMLL",
        "OLL",
        // "OLLCP",
        "PLL",
        // "SQ1-CSP",
        // "SQ1-Cube-Shape",
        // "SQ1-EP",
        // "SQ1-OBL",
        "Winter-Variation",
        "ZBLL",
        "2x2x2",
        "2x2x2-2x2x3",
        "cross",
        "eocross",
        "eoline",
        "xcross",
        "roux-fb",
    ];
    const result = {};
    for (const page of pages) {
        const path = resolve(__dirname, 'train', `${page}.html`);
        result[`train/${page}`] = path;
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
                ...algorithms(),
                keybindings: resolve(__dirname, 'keybindings.html'),
                recon: resolve(__dirname, 'recon.html'),
                stats: resolve(__dirname, 'stats.html'),
                ...train(),
            },
        },
    },
})
