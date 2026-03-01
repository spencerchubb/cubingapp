import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import SearchElement from '../components/SearchElement'
import { Button } from '../components/ui/button'

export const Route = createFileRoute('/')({ component: Home })

const algSetGroups: Record<string, string[]> = {
  '3x3': ['F2L', 'OLL', 'PLL', 'Winter-Variation', 'COLL', 'OLLCP', 'ZBLL'],
  Roux: ['CMLL', 'OH-CMLL', 'LSE-EO', 'LSE-EOLR'],
  '2x2': ['2x2-PBL', '2x2-CLL', '2x2-EG1', '2x2-EG2'],
  Pyraminx: ['Pyraminx-Last-Layer', 'Pyraminx-L4E'],
  Skewb: ['Sarah-Intermediate', 'Sarah-Advanced'],
  'Square-1': ['SQ1-Cube-Shape', 'SQ1-CSP', 'SQ1-CP', 'SQ1-EP', 'SQ1-OBL'],
  Other: ['4x4-PLL-Parity'],
}

function Home() {
  const [nameRanksInput, setNameRanksInput] = useState('')
  const navigate = useNavigate()

  const handleNameRanksKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate({ to: '/name-ranks', search: { name: nameRanksInput } })
    }
  }

  const handleNameRanksGo = () => {
    navigate({ to: '/name-ranks', search: { name: nameRanksInput } })
  }

  return (
    <main>
      <h1 className="text-4xl font-bold text-center">CubingApp Home</h1>

      <div className="mt-8 flex flex-wrap gap-6 justify-center">
        <div className="flex flex-col w-full max-w-md p-4 gap-4 border border-gray-500">
          <h2>Ranks</h2>
          <p>Who are the fastest cubers in each event?</p>
          <div className="flex-1"></div>
          <div className="action">
            <Link to="/ranks" className="w-full">
              <Button className="w-full">Ranks Leaderboard</Button>  
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md p-4 gap-4 border border-gray-500">
          <h2>Name Ranks</h2>
          <p>Who are the fastest cubers with your name?</p>
          <div style={{ flexGrow: 1 }}></div>
          <div className="action">
            <input
              id="nameRanksInput"
              type="text"
              placeholder="Name"
              style={{ width: '100%' }}
              value={nameRanksInput}
              onChange={(e) => setNameRanksInput(e.target.value)}
              onKeyDown={handleNameRanksKeyDown}
            />
            <button id="nameRanksGo" onClick={handleNameRanksGo}>
              Go
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md p-4 gap-4 border border-gray-500">
          <h2>Kinch Ranks</h2>
          <p>Kinch Ranks is a way to measure all-round cubing ability instead of just one event</p>
          <div style={{ flexGrow: 1 }}></div>
          <div className="action">
            <Link to="/kinch-ranks" style={{ width: '100%' }}>
              <button style={{ width: '100%' }}>Kinch Ranks Leaderboard</button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md p-4 gap-4 border border-gray-500">
          <h2>Sum of Ranks</h2>
          <p>Sum of Ranks is a way to measure all-round cubing ability instead of just one event</p>
          <div style={{ flexGrow: 1 }}></div>
          <div className="action">
            <Link to="/sum-of-ranks" style={{ width: '100%' }}>
              <button style={{ width: '100%' }}>Sum of Ranks Leaderboard</button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md p-4 gap-4 border border-gray-500">
          <h2>Record Streak</h2>
          <p>How many competitions in a row did you get a personal record (PR)?</p>
          <div style={{ flexGrow: 1 }}></div>
          <div className="action">
            <SearchElement path="/record-streak" />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md p-4 gap-4 border border-gray-500">
          <h2>Competitions</h2>
          <p>Find WCA competitions nearest to you</p>
          <div style={{ flexGrow: 1 }}></div>
          <div className="action">
            <Link to="/competitions" style={{ width: '100%' }}>
              <button style={{ width: '100%' }}>WCA Competitions</button>
            </Link>
          </div>
        </div>
      </div>

      {Object.entries(algSetGroups).map(([groupName, group]) => (
        <div key={groupName} className="mt-8">
          <h2 className="text-2xl font-bold">
            {groupName} Algs
          </h2>
          <div className="flex flex-wrap gap-3 border-t border-gray-500 pt-2 mt-2">
            {group.map((algSet) => {
              const algSetWithSpaces = algSet.replace(/-/g, ' ')
              return (
                <Link
                  key={algSet}
                  to={`/algorithms/${algSet}`}
                  className="link text-lg"
                >
                  {algSetWithSpaces}
                </Link>
              )
            })}
          </div>
        </div>
      ))}

      <div style={{ marginTop: '150px' }}></div>
      <p>
        <Link className="link" to="/feedback">
          Feedback
        </Link>
        {' | '}
        <a className="link" href="https://github.com/spencerchubb/cubingapp">
          GitHub
        </a>
      </p>
    </main>
  )
}
