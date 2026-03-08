import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@/components/ui/link'

export const Route = createFileRoute('/feedback')({ component: Feedback });

function Feedback() {
  return (
    <main className="prose">
      <h1>CubingApp Feedback</h1>
      <p>Ways to give feedback:</p>
      <ul>
        <li><Link to="https://www.speedsolving.com/threads/cubingapp-suggestion-thread.90733/" target="_blank">SpeedSolving.com Thread</Link></li>
        <li>Email me: spencerchubb@gmail.com</li>
        <li>Create a <Link to="https://github.com/spencerchubb/cubingapp/issues/" target="_blank">GitHub issue</Link> or a <Link to="https://github.com/spencerchubb/cubingapp/pulls/" target="_blank">GitHub pull request</Link></li>
      </ul>
      <p>Many of the features you see on CubingApp were suggested by cubers like you. Feel free to tell me feature ideas, bug reports, algorithm sets, and algorithms you want to see.</p>
    </main>
  )
}