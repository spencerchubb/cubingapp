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
  // specify train.html as the entry point
  build: {
    rollupOptions: {
      input: {
        train: resolve(__dirname, 'train.html'),
      },
    },
  },
})
