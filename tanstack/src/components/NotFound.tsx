import { Link } from '@/components/ui/link'

export function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full p-8 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4">The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="mt-6">Go to CubingApp Home</Link>
    </main>
  )
}
