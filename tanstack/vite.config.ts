import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const shouldPrerender = process.env.DISABLE_PRERENDER !== '1'

const config = defineConfig({
  plugins: [
    devtools(),
    nitro({ preset: 'bun' }),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: shouldPrerender,
        crawlLinks: true, // Discovers all linkable pages
      },
      sitemap: {
        enabled: true,
        host: 'https://cubingapp.com',
      },
    }),
    viteReact(),
  ],
})

export default config
