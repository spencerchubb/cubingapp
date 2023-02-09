import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
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
