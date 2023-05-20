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
        404: resolve(__dirname, '404.html'),
        algdb: resolve(__dirname, 'algdb.html'),
        "algdb/index": resolve(__dirname, 'algdb', 'algset.html'),
        "blog/deep-dive-on-tony-snyder": resolve(__dirname, 'blog', 'deep-dive-on-tony-snyder.html'),
        "blog/mental-load": resolve(__dirname, 'blog', 'mental-load.html'),
        "blog/spaced-repetition": resolve(__dirname, 'blog', 'spaced-repetition.html'),
        index: resolve(__dirname, 'index.html'),
        keybindings: resolve(__dirname, 'keybindings.html'),
        recon: resolve(__dirname, 'recon.html'),
        timer: resolve(__dirname, 'timer.html'),
        train: resolve(__dirname, 'train.html'),
        "tutorials/how-to-learn-f2l": resolve(__dirname, 'tutorials', 'how-to-learn-f2l.html'),
      },
    },
  },
})
