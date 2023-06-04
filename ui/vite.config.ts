import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

function blogs() {
    const pages = [
        "deep-dive-on-tony-snyder",
        "how-to-be-good-at-inspection",
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
        "how-to-learn-f2l",
        "inspection",
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
    topLevelAwait(),
    wasm(),
  ],
  build: {
    rollupOptions: {
      input: {
        404: resolve(__dirname, '404.html'),
        algdb: resolve(__dirname, 'algdb.html'),
        "algdb/index": resolve(__dirname, 'algdb', 'algset.html'),
        ...blogs(),
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
