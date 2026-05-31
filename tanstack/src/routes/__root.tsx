import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect } from 'react'
import { Sidebar } from '../components/Sidebar'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'CubingApp Home',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  // Load after hydration to avoid "Hydration failed" error.
  useEffect(() => {
    if (document.getElementById('ga-gtag')) return

    const GA_MEASUREMENT_ID = 'G-YR33BDCQDY'
    const script = document.createElement('script')
    script.id = 'ga-gtag'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    const w = window as unknown as { dataLayer: unknown[] }
    w.dataLayer = w.dataLayer || []
    function gtag(...args: unknown[]) {
      w.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID)
  }, [])

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="m-0 font-sans antialiased bg-gray-800 text-gray-100 color-gray-100 w-full h-full overflow-hidden fixed inset-y-0 top-0 flex flex-row max-md:flex-col">
        <Sidebar />
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
