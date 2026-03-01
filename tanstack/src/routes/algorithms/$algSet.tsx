import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useCallback } from 'react'
import { Cube, SQ1, Pyraminx, Skewb, invertAlg } from '../../utils/puzzles'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Button } from '@/components/ui/button'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

interface AlgData {
  note?: string
  setup?: string
}

interface CaseData {
  subset?: string
  algs: Record<string, AlgData>
}

interface AlgSetData {
  puzzle: string
  diagramType?: string
  gray?: (number | string)[]
  subsets?: string[]
  texts: string[]
  cases: Record<string, CaseData>
  before?: string
  after?: string
}

const algModules = import.meta.glob('./algs/*.json', { eager: true }) as Record<string, { default: AlgSetData }>

const COLOR_SCHEMES: Record<string, Record<string, string>> = {
  white: { '--u-face': '#ff0', '--d-face': '#fff', '--f-face': '#00f', '--b-face': '#0f0', '--l-face': '#f70', '--r-face': '#f00' },
  yellow: { '--u-face': '#fff', '--d-face': '#ff0', '--f-face': '#0f0', '--b-face': '#00f', '--l-face': '#f70', '--r-face': '#f00' },
  green: { '--u-face': '#00f', '--d-face': '#0f0', '--f-face': '#fff', '--b-face': '#ff0', '--l-face': '#f70', '--r-face': '#f00' },
  blue: { '--u-face': '#0f0', '--d-face': '#00f', '--f-face': '#ff0', '--b-face': '#fff', '--l-face': '#f70', '--r-face': '#f00' },
  orange: { '--u-face': '#f00', '--d-face': '#f70', '--f-face': '#fff', '--b-face': '#ff0', '--l-face': '#00f', '--r-face': '#0f0' },
  red: { '--u-face': '#f70', '--d-face': '#f00', '--f-face': '#fff', '--b-face': '#ff0', '--l-face': '#0f0', '--r-face': '#00f' },
}

export const Route = createFileRoute('/algorithms/$algSet')({
  component: AlgSetPage,
  head: ({ params }) => ({
    meta: [
      {
        title: `${params.algSet.replace(/-/g, ' ')} Algorithms`,
      },
    ],
  }),
})

function getDiagram(algSetName: string, algSet: AlgSetData, _caseName: string, caseData: CaseData) {
  const entries = Object.entries(caseData.algs)
  let alg = entries[0][0]
  alg = alg.replace(/\(/g, '').replace(/\)/g, '')
  alg = invertAlg(alg)

  let puzzle: any
  if (algSet.puzzle === 'SQ1') {
    puzzle = new SQ1()
  } else if (algSet.puzzle === 'Pyraminx') {
    puzzle = new Pyraminx()
  } else if (algSet.puzzle === 'Skewb') {
    puzzle = new Skewb()
  } else {
    const layers = parseInt(algSet.puzzle[0])
    puzzle = new Cube(layers)
  }

  if (algSet.gray) {
    algSet.gray.forEach((sticker) => {
      if (algSet.puzzle === 'Skewb') {
        puzzle.stickers[sticker as string] = 6
        return
      }
      puzzle.stickers[sticker as number] = puzzle.layers * puzzle.layers * 6
    })
  }

  if (entries[0][1].setup) puzzle.performAlg(entries[0][1].setup)
  puzzle.performAlg(alg)

  let diagram: string
  let className: string

  if (algSet.puzzle === 'SQ1') {
    const mirrorBottom = algSetName === 'SQ1-Cube-Shape' || algSetName === 'SQ1-CSP'
    diagram = `${puzzle.svgTop()}${puzzle.svgBottom(mirrorBottom)}`
    className = 'viz-sq1'
  } else if (algSet.puzzle === 'Pyraminx') {
    diagram = puzzle.getSvg()
    className = 'viz-pyraminx'
  } else if (algSet.diagramType === '2D') {
    diagram = puzzle.getSvg()
    className = `viz-2d-${algSet.puzzle}`
  } else if (algSet.diagramType === '3D') {
    diagram = puzzle.getSvg3D()
    className = `viz-${algSet.puzzle}`
  } else {
    diagram = ''
    className = ''
  }

  return { diagram, className }
}

function AlgSetPage() {
  const { algSet: algSetParam } = Route.useParams()
  const algSetName = algSetParam
  const displayName = algSetName.replace(/-/g, ' ')

  const mod = algModules[`./algs/${algSetName}.json`]
  const algSet: AlgSetData = mod ? (mod as any).default ?? (mod as any) : null

  const [bottomColor, setBottomColor] = useState('white')
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [subsetsExpanded, setSubsetsExpanded] = useState(false)

  const showColorScheme = algSet && algSet.puzzle !== 'SQ1' && algSet.puzzle !== 'Pyraminx'

  const colorVars = COLOR_SCHEMES[bottomColor]
  const colorStyle = Object.entries(colorVars)
    .map(([k, v]) => `${k}: ${v};`)
    .join(' ')

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideoUrl(null)
    },
    [],
  )

  useEffect(() => {
    if (videoUrl) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [videoUrl, handleEscape])

  if (!algSet) {
    return (
      <main>
        <h1>Algorithm set not found</h1>
      </main>
    )
  }

  const renderCases = (cases: [string, CaseData][]) =>
    cases.map(([caseName, caseData]) => {
      const { diagram, className } = getDiagram(algSetName, algSet, caseName, caseData)
      const entries = Object.entries(caseData.algs)

      return (
        <div key={caseName} className="alg-card">
          <div
            className={className}
            dangerouslySetInnerHTML={{ __html: diagram }}
          />
          <div className="info">
            <h3>{caseName}</h3>
            {entries.map(([alg, algData]) => (
              <p key={alg}>
                &#8226; {alg}
                {algData.note && <span className="note">{algData.note}</span>}
              </p>
            ))}
          </div>
        </div>
      )
    })

  const casesEntries = Object.entries(algSet.cases)

  return (
    <main className="flex gap-4">
      <style>{`
        ${colorStyle ? `:root { ${colorStyle} }` : ''}

        x-u { background: var(--u-face); }
        x-d { background: var(--d-face); }
        x-f { background: var(--f-face); }
        x-b { background: var(--b-face); }
        x-l { background: var(--l-face); }
        x-r { background: var(--r-face); }
        x-t { background: transparent; border: none !important; }

        .alg-card {
          width: 100%; padding: 16px 0; border-bottom: solid 1px var(--gray-600);
          display: flex; justify-content: start; gap: 12px;
        }
        .alg-card h3 { font-size: 16px; line-height: 22px; }
        .alg-card p { display: flex; flex-wrap: wrap; }
        .alg-card .note { color: var(--gray-400); font-size: 14px; margin-left: 12px; }

        .viz-2d-2x2, .viz-2d-3x3, .viz-2d-4x4 {
          min-width: 100px; width: 100px; height: 100px; display: grid;
        }
        .viz-2d-2x2 > div, .viz-2d-3x3 > div, .viz-2d-4x4 > div { background: gray; }
        .viz-2d-2x2 > *, .viz-2d-3x3 > *, .viz-2d-4x4 > * { border: solid 1px black; }
        .viz-2d-2x2 { grid-template-rows: 1fr 2fr 2fr 1fr; grid-template-columns: 1fr 2fr 2fr 1fr; }
        .viz-2d-3x3 { grid-template-rows: 2fr 3fr 3fr 3fr 2fr; grid-template-columns: 2fr 3fr 3fr 3fr 2fr; }
        .viz-2d-4x4 { grid-template-rows: 2fr 3fr 3fr 3fr 3fr 2fr; grid-template-columns: 2fr 3fr 3fr 3fr 3fr 2fr; }

        .viz-2x2, .viz-3x3, .viz-4x4, .viz-2d-Skewb {
          display: flex; justify-content: center; align-items: center;
          min-width: 100px; width: 100px; height: 100px;
        }
        .viz-2x2 > div, .viz-3x3 > div, .viz-4x4 > div, .viz-2d-Skewb > div {
          transform: rotateX(-30deg) rotateY(-30deg); transform-style: preserve-3d;
          width: 65%; height: 65%;
        }
        .viz-2x2 > div > div, .viz-3x3 > div > div, .viz-4x4 > div > div, .viz-2d-Skewb > div > div {
          position: absolute; width: 100%; height: 100%;
          display: flex; flex-wrap: wrap; flex-direction: column;
        }
        .viz-2x2 > div > div:nth-child(1), .viz-3x3 > div > div:nth-child(1), .viz-4x4 > div > div:nth-child(1), .viz-2d-Skewb > div > div:nth-child(1) {
          transform: translateY(-50%) rotateX(90deg);
        }
        .viz-2x2 > div > div:nth-child(2), .viz-3x3 > div > div:nth-child(2), .viz-4x4 > div > div:nth-child(2), .viz-2d-Skewb > div > div:nth-child(2) {
          transform: rotateX(90deg) translateY(50%) rotateX(-90deg);
        }
        .viz-2x2 > div > div:nth-child(3), .viz-3x3 > div > div:nth-child(3), .viz-4x4 > div > div:nth-child(3), .viz-2d-Skewb > div > div:nth-child(3) {
          transform: translateX(50%) rotateY(90deg);
        }
        .viz-2x2 > div > div > * { width: 50%; height: 50%; border: solid 1px black; box-sizing: border-box; }
        .viz-3x3 > div > div > * { width: 33.33%; height: 33.33%; border: solid 1px black; box-sizing: border-box; }
        .viz-2x2 > div > div > div, .viz-3x3 > div > div > div { background: gray; }

        .viz-sq1 { min-width: 150px; display: flex; }
        .viz-sq1 svg { width: 100px; height: 100px; stroke: black; }
        .viz-pyraminx { width: 200px; }
      `}</style>

      <div>
        <div className="prose">
          <h1>{displayName} Algorithms</h1>
          {algSet.texts.map((text, i) => (
            <p key={i}>
              {text}
            </p>
          ))}
        </div>

        {showColorScheme && (
          <label
            className="flex items-center gap-2"
          >
            Color scheme (bottom):&nbsp;
            <NativeSelect
              value={bottomColor}
              onChange={(e) => setBottomColor(e.target.value)}
            >
              <NativeSelectOption value="white">White</NativeSelectOption>
              <NativeSelectOption value="yellow">Yellow</NativeSelectOption>
              <NativeSelectOption value="green">Green</NativeSelectOption>
              <NativeSelectOption value="blue">Blue</NativeSelectOption>
              <NativeSelectOption value="orange">Orange</NativeSelectOption>
              <NativeSelectOption value="red">Red</NativeSelectOption>
            </NativeSelect>
          </label>
        )}

        {algSet.subsets && (
          <div className="block lg:hidden mt-8 outline outline-gray-500 rounded-none">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between outline-none rounded-none"
              onClick={() => setSubsetsExpanded(!subsetsExpanded)}
            >
              Subsets
              {subsetsExpanded
                ? <ChevronUpIcon className="size-5 text-gray-400" />
                : <ChevronDownIcon className="size-5 text-gray-400" />}
            </Button>
            {subsetsExpanded && (
              <div className="border-t border-gray-500 rounded-none flex flex-col p-4 gap-2">
                {algSet.subsets.map((s) => (
                  <a
                    key={s}
                    href={`#${s.replace(/ /g, '_')}`}
                    className="text-gray-100 hover:underline hover:text-sky-500"
                  >
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {algSet.subsets
          ? algSet.subsets.map((subset) => {
            const subsetCases = casesEntries.filter(
              ([, c]) => c.subset === subset,
            )
            if (subsetCases.length === 0) return null
            return (
              <div key={subset}>
                <h2
                  id={subset.replace(/ /g, '_')}
                  className="mt-8 text-2xl font-bold"
                >
                  {subset}
                </h2>
                {renderCases(subsetCases)}
              </div>
            )
          })
          : renderCases(casesEntries)}
      </div>

      {algSet.subsets && (
        <div className="hidden lg:flex flex-col w-xs h-fit p-4 gap-2 border border-gray-500">
          <h2 className="text-2xl font-bold">Subsets</h2>
          {algSet.subsets.map((s) => (
            <a
              key={s}
              href={`#${s.replace(/ /g, '_')}`}
              className="text-gray-100 hover:underline hover:text-sky-500"
            >
              {s}
            </a>
          ))}
        </div>
      )}
    </main>
  )
}
