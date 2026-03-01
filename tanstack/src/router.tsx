import { createRouter, parseSearchWith, stringifySearchWith } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    parseSearch: parseSearchWith((value) => {
      try {
        return JSON.parse(value)
      } catch {
        return value
      }
    }),
    stringifySearch: stringifySearchWith((value) => {
      if (typeof value === 'string') {
        return value
      }
      return JSON.stringify(value)
    }),
  })

  return router
}
