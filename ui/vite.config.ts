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
        'algdb/2x2-CLL': resolve(__dirname, 'algdb', '2x2-CLL.html'),
        'algdb/2x2-EG1': resolve(__dirname, 'algdb', '2x2-EG1.html'),
        'algdb/2x2-EG2': resolve(__dirname, 'algdb', '2x2-EG2.html'),
        'algdb/4x4-PLL-Parity': resolve(__dirname, 'algdb', '4x4-PLL-Parity.html'),
        'algdb/CMLL': resolve(__dirname, 'algdb', 'CMLL.html'),
        'algdb/F2L': resolve(__dirname, 'algdb', 'F2L.html'),
        'algdb/OLL': resolve(__dirname, 'algdb', 'OLL.html'),
        'algdb/PLL': resolve(__dirname, 'algdb', 'PLL.html'),
        'algdb/ZBLL': resolve(__dirname, 'algdb', 'ZBLL.html'),
        index: resolve(__dirname, 'index.html'),
        play: resolve(__dirname, 'play.html'),
        recon: resolve(__dirname, 'recon.html'),
        train: resolve(__dirname, 'train.html'),
      },
    },
  },
})
