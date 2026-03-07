import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'

// Algorithm set groups matching PHP algSetGroups.php
const algSetGroups: Record<string, string[]> = {
  '3x3': ['F2L', 'OLL', 'PLL', 'Winter-Variation', 'COLL', 'OLLCP', 'ZBLL'],
  Roux: ['CMLL', 'OH-CMLL', 'LSE-EO', 'LSE-EOLR'],
  '2x2': ['2x2-PBL', '2x2-CLL', '2x2-EG1', '2x2-EG2'],
  Pyraminx: ['Pyraminx-Last-Layer', 'Pyraminx-L4E'],
  Skewb: ['Sarah-Intermediate', 'Sarah-Advanced'],
  'Square-1': [
    'SQ1-Cube-Shape',
    'SQ1-CSP',
    'SQ1-CP',
    'SQ1-EP',
    'SQ1-OBL',
  ],
  Other: ['4x4-PLL-Parity'],
}

export function Sidebar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<
    Record<string, boolean>
  >({})

  if (location.pathname === '/') return null

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }))
  }

  const formatAlgSetName = (algSet: string) => {
    return algSet.replace(/-/g, ' ')
  }

  return (
    <>
      {/* Top bar - only visible on mobile */}
      <div className="hidden max-md:flex w-full border-b border-gray-600">
        <svg
          className="w-12 h-12 stroke-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors"
          viewBox="0 0 100 100"
          strokeWidth="10"
          onClick={() => setIsMenuOpen(true)}
        >
          <path d="M 0,15 h 100" />
          <path d="M 0,50 h 100" />
          <path d="M 0,85 h 100" />
        </svg>
      </div>

      {/* Menu background overlay - only visible on mobile when menu is open */}
      {isMenuOpen && (
        <div
          className="hidden max-md:block fixed top-0 left-0 w-full h-full bg-black/50 z-1"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar menu */}
      <div
        className={`min-w-[250px] max-w-[250px] border-r border-gray-600 pb-[100px] overflow-y-auto bg-gray-800 max-md:absolute max-md:top-0 max-md:left-0 max-md:h-full max-md:z-2 ${isMenuOpen ? 'max-md:block' : 'max-md:hidden'}`}
      >
        {/* Close button - only visible on mobile */}
        <svg
          className="hidden max-md:block w-12 h-12 p-2 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors stroke-gray-100"
          viewBox="0 0 100 100"
          strokeWidth="12"
          strokeLinecap="round"
          onClick={() => setIsMenuOpen(false)}
        >
          <path d="M 10,10 L 90,90" />
          <path d="M 90,10 L 10,90" />
        </svg>

        {/* Logo and title */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 px-4 py-2 stroke-gray-100 font-bold hover:bg-gray-600 transition-colors"
        >
          <img src="/favicon.svg" alt="Logo" width="24" height="24" />
          CubingApp
        </Link>

        {/* Algorithm groups */}
        {Object.entries(algSetGroups).map(([groupName, algSets]) => (
          <div key={groupName}>
            <button
              className="w-full bg-transparent flex justify-between items-center gap-2 rounded-none py-2 px-4 border-none stroke-gray-100 font-[Verdana,sans-serif] text-base cursor-pointer hover:bg-gray-600"
              onClick={() => toggleGroup(groupName)}
            >
              <p>{groupName} Algs</p>
              <svg
                className={`w-4 h-4 stroke-gray-100 transition-transform duration-300 ${expandedGroups[groupName] ? 'rotate-90' : ''}`}
                viewBox="0 0 100 100"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <path d="M 25,8 L 75,50 L 25,92" />
              </svg>
            </button>
            <div
              className={`${expandedGroups[groupName] ? 'flex flex-col' : 'hidden'}`}
            >
              {algSets.map((algSet) => (
                <Link
                  key={algSet}
                  to={`/algorithms/${algSet}`}
                  className="pl-8 pr-2 py-2 stroke-gray-100 decoration-0 hover:bg-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {formatAlgSetName(algSet)}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Calculators expandable section */}
        <div>
          <button
            className="w-full bg-transparent flex justify-between items-center gap-2 rounded-none py-2 px-4 border-none text-gray-100 font-[Verdana,sans-serif] text-base cursor-pointer hover:bg-gray-600"
            onClick={() => toggleGroup('Calculators')}
          >
            <p>Calculators</p>
            <svg
              className={`w-4 h-4 stroke-gray-100 transition-transform duration-300 ${expandedGroups.Calculators ? 'rotate-90' : ''}`}
              viewBox="0 0 100 100"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <path d="M 25,8 L 75,50 L 25,92" />
            </svg>
          </button>
          <div
            className={`${expandedGroups.Calculators ? 'flex flex-col' : 'hidden'}`}
          >
            <Link
              to="/competitions"
              className="pl-8 pr-2 py-2 decoration-0 hover:bg-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Competition Distance
            </Link>
            <Link
              to="/kinch-ranks"
              className="pl-8 pr-2 py-2 decoration-0 hover:bg-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kinch Ranks
            </Link>
            <Link
              to="/name-ranks"
              className="pl-8 pr-2 py-2 decoration-0 hover:bg-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Name Ranks
            </Link>
            <Link
              to="/ranks"
              className="pl-8 pr-2 py-2 decoration-0 hover:bg-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ranks
            </Link>
            <Link
              to="/record-streak"
              className="pl-8 pr-2 py-2 decoration-0 hover:bg-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Record Streak
            </Link>
            <Link
              to="/sum-of-ranks"
              className="pl-8 pr-2 py-2 decoration-0 hover:bg-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sum of Ranks
            </Link>
          </div>
        </div>

        <Link
          to="/feedback"
          className="flex pl-4 pr-2 py-2 text-gray-100 decoration-0 hover:bg-gray-600 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Feedback
        </Link>
      </div>
    </>
  )
}
