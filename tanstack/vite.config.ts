import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const shouldPrerender = process.env.DISABLE_PRERENDER !== '1'

// In `vite dev` the Nitro plugin intercepts unmatched routes and returns a
// plain "Cannot GET /path" instead of letting TanStack Start's SSR handler
// render the notFoundComponent (https://github.com/TanStack/router/issues/6319).
// The `dev` npm script sets DISABLE_NITRO=1 so we skip Nitro there.
const useNitro = process.env.DISABLE_NITRO !== '1'

const config = defineConfig({
  plugins: [
    devtools(),
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
    useNitro && nitro({ preset: 'bun' }),
  ],
})

export default config
