import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

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
        algdb: resolve(__dirname, 'algdb.html'),
        "algdb/index": resolve(__dirname, 'algdb', 'algset.html'),
        index: resolve(__dirname, 'index.html'),
        keybindings: resolve(__dirname, 'keybindings.html'),
        recon: resolve(__dirname, 'recon.html'),
        timer: resolve(__dirname, 'timer.html'),
        train: resolve(__dirname, 'train.html'),
      },
    },
  },
})
