import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import SearchElement from '../components/SearchElement'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="flex flex-col w-full max-w-md min-h-[180px] p-4 border border-[#555]">
          <h2 className="text-lg font-bold">Ranks</h2>
          <p className="mt-1">Who are the fastest cubers in each event or region?</p>
          <div className="flex-1"></div>
          <div className="mt-4 flex justify-between items-center gap-3">
            <Link to="/ranks" className="w-full">
              <Button className="w-full">View Ranks</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md min-h-[180px] p-4 border border-[#555]">
          <h2 className="text-lg font-bold">Name Ranks</h2>
          <p className="mt-1">Who are the fastest cubers with your name?</p>
          <div className="flex-1"></div>
          <div className="mt-4 flex justify-between items-center gap-3">
            <Input
              type="text"
              placeholder="Name"
              className="w-full"
              value={nameRanksInput}
              onChange={(e) => setNameRanksInput(e.target.value)}
              onKeyDown={handleNameRanksKeyDown}
            />
            <Button onClick={handleNameRanksGo}>Go</Button>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md min-h-[180px] p-4 border border-[#555]">
          <h2 className="text-lg font-bold">Kinch Ranks</h2>
          <p className="mt-1">Kinch Ranks is a way to measure all-round cubing ability instead of just one event</p>
          <div className="flex-1"></div>
          <div className="mt-4 flex justify-between items-center gap-3">
            <Link to="/kinch-ranks" className="w-full">
              <Button className="w-full">Kinch Ranks Leaderboard</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md min-h-[180px] p-4 border border-[#555]">
          <h2 className="text-lg font-bold">Sum of Ranks</h2>
          <p className="mt-1">Sum of Ranks is a way to measure all-round cubing ability instead of just one event</p>
          <div className="flex-1"></div>
          <div className="mt-4 flex justify-between items-center gap-3">
            <Link to="/sum-of-ranks" className="w-full">
              <Button className="w-full">Sum of Ranks Leaderboard</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md min-h-[180px] p-4 border border-[#555]">
          <h2 className="text-lg font-bold">Record Streak</h2>
          <p className="mt-1">How many competitions in a row did you get a personal record (PR)?</p>
          <div className="flex-1"></div>
          <div className="mt-4 flex justify-between items-center gap-3">
            <SearchElement path="/record-streak" />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md min-h-[180px] p-4 border border-[#555]">
          <h2 className="text-lg font-bold">Competitions</h2>
          <p className="mt-1">Find WCA competitions nearest to you</p>
          <div className="flex-1"></div>
          <div className="mt-4 flex justify-between items-center gap-3">
            <Link to="/competitions" className="w-full">
              <Button className="w-full">WCA Competitions</Button>
            </Link>
          </div>
        </div>
      </div>

      {Object.entries(algSetGroups).map(([groupName, group]) => (
        <div key={groupName} className="mt-8">
          <h2 className="text-xl font-bold pb-1 border-b border-[#555]">
            {groupName} Algs
          </h2>
          <div className="text-lg mt-2 flex flex-wrap gap-y-2 gap-x-4">
            {group.map((algSet) => {
              const algSetWithSpaces = algSet.replace(/-/g, ' ')
              return (
                <Link
                  key={algSet}
                  to={`/algorithms/${algSet}`}
                  className="link"
                >
                  {algSetWithSpaces}
                </Link>
              )
            })}
          </div>
        </div>
      ))}

      <div className="mt-[150px]"></div>
      <p className="text-center">
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
