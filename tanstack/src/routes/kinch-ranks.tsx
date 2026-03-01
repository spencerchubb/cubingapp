import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import SearchElement from '../components/SearchElement'
import { eventIdToName } from '../utils/event-utils'
import { calcKinch, calcAverageKinchScore, type KinchResult } from '../utils/kinch'
import { wcaDb } from '../utils/wca-db'
import { ChevronRightIcon } from 'lucide-react'
import { SelectRegion } from '@/components/SelectRegion'
import { Pagination } from "@/components/ui/pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface LeaderboardResult {
  name: string
  id: string
  score: number
}

interface LeaderboardData {
  results: LeaderboardResult[]
  pages: number
}

interface PersonDetailData {
  name: string
  results: KinchResult[]
  rank: number
}

const getPersonKinchData = createServerFn({ method: 'GET' })
  .inputValidator((d: { wcaId: string; region: string }) => d)
  .handler(async ({ data }) => {
    const { wcaId, region } = data
    const db = await wcaDb()

    // Get person name
    const nameStmt = db.query('SELECT name FROM Persons WHERE wca_id = ?')
    const nameRow = nameStmt.get(wcaId) as { name: string } | undefined
    const name = nameRow?.name || ''

    // Build query based on region
    let query = ''
    const strings = region.split('-')
    let regionId: string | null = null

    if (strings[0] === 'continent') {
      regionId = '_' + strings[1]
      query = `
        SELECT
          e.id as eventId,
          rs1.best AS single,
          ra1.best AS average,
          rs2.best AS bestSingle,
          ra2.best AS bestAverage
        FROM Events e
        LEFT JOIN ranks_single rs1 ON e.id = rs1.eventId AND rs1.personId = ?
        LEFT JOIN ranks_average ra1 ON e.id = ra1.eventId AND ra1.personId = ?
        LEFT JOIN ranks_single rs2
          ON e.id = rs2.eventId
            AND rs2.continentId = ?
            AND rs2.continentRank = 1
        LEFT JOIN ranks_average ra2
          ON e.id = ra2.eventId
            AND ra2.continentId = ?
            AND ra2.continentRank = 1
        WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
        GROUP BY e.id;
      `
    } else if (strings[0] === 'country') {
      regionId = strings[1]
      query = `
        SELECT
          e.id as eventId,
          rs1.best AS single,
          ra1.best AS average,
          rs2.best AS bestSingle,
          ra2.best AS bestAverage
        FROM Events e
        LEFT JOIN ranks_single rs1 ON e.id = rs1.eventId AND rs1.personId = ?
        LEFT JOIN ranks_average ra1 ON e.id = ra1.eventId AND ra1.personId = ?
        LEFT JOIN ranks_single rs2
          ON e.id = rs2.eventId
            AND rs2.countryId = ?
            AND rs2.countryRank = 1
        LEFT JOIN ranks_average ra2
          ON e.id = ra2.eventId
            AND ra2.countryId = ?
            AND ra2.countryRank = 1
        WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
        GROUP BY e.id;
      `
    } else {
      query = `
        SELECT
          e.id as eventId,
          rs1.best AS single,
          ra1.best AS average,
          rs2.best AS bestSingle,
          ra2.best AS bestAverage
        FROM Events e
        LEFT JOIN ranks_single rs1 ON e.id = rs1.eventId AND rs1.personId = ?
        LEFT JOIN ranks_average ra1 ON e.id = ra1.eventId AND ra1.personId = ?
        LEFT JOIN ranks_single rs2 ON e.id = rs2.eventId AND rs2.worldRank = 1
        LEFT JOIN ranks_average ra2 ON e.id = ra2.eventId AND ra2.worldRank = 1
        WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
        GROUP BY e.id;
      `
    }

    const stmt = db.query(query)
    let results: KinchResult[]
    if (regionId) {
      if (strings[0] === 'continent') {
        results = stmt.all(wcaId, wcaId, regionId, regionId) as KinchResult[]
      } else {
        results = stmt.all(wcaId, wcaId, regionId, regionId) as KinchResult[]
      }
    } else {
      results = stmt.all(wcaId, wcaId) as KinchResult[]
    }

    // Calculate scores
    const scores = calcKinch(results)
    const averageScore = calcAverageKinchScore(scores)

    // Calculate rank
    let rankQuery = ''
    if (strings[0] === 'continent') {
      rankQuery = `
        SELECT COUNT() AS count FROM Persons p1
        JOIN Persons p2 ON p2.id = ? AND p1.continentId = p2.continentId AND p1.continentKinch > p2.continentKinch;
      `
    } else if (strings[0] === 'country') {
      rankQuery = `
        SELECT COUNT() AS count FROM Persons p1
        JOIN Persons p2 ON p2.id = ? AND p1.countryId = p2.countryId AND p1.countryKinch > p2.countryKinch;
      `
    } else {
      rankQuery = `
        SELECT COUNT() AS count FROM Persons p1
        JOIN Persons p2 ON p2.id = ? AND p1.worldKinch > p2.worldKinch;
      `
    }

    const rankStmt = db.query(rankQuery)
    const rankRow = rankStmt.get(wcaId) as { count: number } | undefined
    const rank = (rankRow?.count || 0) + 1

    db.close()

    return {
      name,
      results,
      rank,
    } as PersonDetailData
  })

const getLeaderboard = createServerFn({ method: 'GET' })
  .inputValidator((d: { region: string; page: number }) => d)
  .handler(async ({ data }) => {
    const { region, page } = data
    const perPage = 20

    const db = await wcaDb()

    // Get total pages
    let pagesQuery = ''
    const strings = region.split('-')
    let regionId: string | null = null

    if (strings[0] === 'continent') {
      regionId = '_' + strings[1]
      pagesQuery = `
        SELECT CEIL(COUNT(*) / ${perPage}) as pages
        FROM Persons p
        JOIN Countries c ON c.id = p.countryId AND c.continentId = ?;
      `
    } else if (strings[0] === 'country') {
      regionId = strings[1]
      pagesQuery = `
        SELECT CEIL(COUNT(*) / ${perPage}) as pages
        FROM Persons
        WHERE countryId = ?;
      `
    } else {
      pagesQuery = `
        SELECT CEIL(COUNT(*) / ${perPage}) as pages
        FROM Persons;
      `
    }

    const pagesStmt = db.query(pagesQuery)
    const pagesRow = regionId
      ? (pagesStmt.get(regionId) as { pages: number })
      : (pagesStmt.get() as { pages: number })
    const pages = pagesRow.pages

    // Get leaderboard results
    let leaderboardQuery = ''
    if (strings[0] === 'continent') {
      leaderboardQuery = `
        SELECT p.name, p.wca_id, p.continentKinch as score
        FROM Persons p
        JOIN Countries c ON c.id = p.countryId AND c.continentId = ?
        ORDER BY continentKinch DESC
        LIMIT ? OFFSET ?;
      `
    } else if (strings[0] === 'country') {
      leaderboardQuery = `
        SELECT name, wca_id, countryKinch as score
        FROM Persons
        WHERE countryId = ?
        ORDER BY countryKinch DESC
        LIMIT ? OFFSET ?;
      `
    } else {
      leaderboardQuery = `
        SELECT name, wca_id, worldKinch as score
        FROM Persons
        ORDER BY worldKinch DESC
        LIMIT ? OFFSET ?;
      `
    }

    const offset = (page - 1) * perPage
    const leaderboardStmt = db.query(leaderboardQuery)
    let results: LeaderboardResult[]
    if (regionId) {
      results = leaderboardStmt.all(regionId, perPage, offset) as LeaderboardResult[]
    } else {
      results = leaderboardStmt.all(perPage, offset) as LeaderboardResult[]
    }

    // Round scores
    results = results.map((r) => ({ ...r, score: Math.round(r.score * 100) / 100 }))

    db.close()

    return {
      results,
      pages,
    } as LeaderboardData
  })

export const Route = createFileRoute('/kinch-ranks')({
  component: KinchRanks,
  head: ({ loaderData }) => {
    const title = loaderData?.personName
      ? `Kinch Ranks | ${loaderData.personName}`
      : 'Kinch Ranks'
    return {
      meta: [
        {
          name: 'description',
          content:
            'Kinch Ranks leaderboard and calculator based on World Cube Association data',
        },
        {
          title,
        },
      ],
    }
  },
  validateSearch: (search) => {
    return z
      .object({
        wcaId: z.coerce.string().optional(),
        region: z.coerce.string().optional(),
        page: z.coerce.number().optional(),
      })
      .parse(search)
  },
  loaderDeps: ({ search }) => ({
    wcaId: search.wcaId,
    region: search.region || 'World',
    page: search.page || 1,
  }),
  loader: async ({ deps }) => {
    if (deps.wcaId) {
      const personData = await getPersonKinchData({ data: { wcaId: deps.wcaId, region: deps.region } })
      return {
        personName: personData.name,
        personData,
      }
    } else {
      const leaderboardData = await getLeaderboard({ data: { region: deps.region, page: deps.page } })
      return {
        leaderboardData,
      }
    }
  },
})

function KinchRanks() {
  const search = Route.useSearch()
  const loaderData = Route.useLoaderData()
  const navigate = Route.useNavigate()

  const wcaId = search.wcaId
  const region = search.region || 'World'
  const page = search.page || 1

  const [localRegion, setLocalRegion] = useState(region)

  useEffect(() => {
    setLocalRegion(region)
  }, [region])

  const updateSearch = (updates: Partial<typeof Route.useSearch>) => {
    navigate({
      search: (prev) => ({ ...prev, ...updates }),
      replace: true,
    })
  }

  const goToPage = (newPage: number, pages: number) => {
    const clampedPage = Math.max(1, Math.min(pages, newPage))
    updateSearch({ page: clampedPage })
  }

  const renderCell = (percent: number) => {
    // This brings h closer to 100 to make the color more green
    const h = 58.5 * Math.log10(0.5 * percent + 1)
    const textColor = `hsl(${h}deg 100% 50%)`
    const roundedPercent = Math.round(percent * 100) / 100
    return (
      <TableCell style={{ color: textColor }}>{roundedPercent}</TableCell>
    )
  }

  return (
    <main>
      {wcaId ? (
        <>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Link to="/kinch-ranks" className="link">Kinch Ranks</Link>
            <ChevronRightIcon className="size-6 text-gray-400" />
            {loaderData?.personName}
          </h2>
          <SearchElement
            path="/kinch-ranks"
            wcaId={wcaId}
            className="mt-8"
          />
          <SelectRegion
            region={localRegion}
            setRegion={(region) => {
              setLocalRegion(region)
              updateSearch({ region })
            }}
            className="mt-4"
          />

          {loaderData.personData && (() => {
            const scores = calcKinch(loaderData.personData.results)
            const averageScore = calcAverageKinchScore(scores)

            return (
              <Table className="max-w-2xl mt-12">
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Result</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>{loaderData.personData.rank}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Overall</TableCell>
                    {renderCell(averageScore)}
                    <TableCell></TableCell>
                  </TableRow>
                  {scores.map((score) => {
                    const eventName = eventIdToName[score.eventId] || score.eventId
                    return (
                      <TableRow key={score.eventId}>
                        <TableCell>{eventName}</TableCell>
                        {renderCell(score.score)}
                        <TableCell>{score.result || ''}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            )
          })()}
        </>
      ) : (
        <>
          <h2 className="text-4xl font-bold">
            Kinch Ranks
          </h2>
          <SearchElement path="/kinch-ranks" className="mt-8" />
          <SelectRegion
            region={localRegion}
            setRegion={(region) => {
              setLocalRegion(region)
              updateSearch({ region })
            }}
            className="mt-4"
          />

          {loaderData.leaderboardData && (() => {
            const { results, pages } = loaderData.leaderboardData

            return (
              <>
                <Pagination
                  goToPage={goToPage}
                  page={page}
                  pages={pages}
                  className="mt-4"
                />

                <Table className="max-w-2xl mt-12">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((row, index) => {
                      const rank = (page - 1) * 20 + index + 1
                      return (
                        <TableRow key={row.wca_id}>
                          <TableCell><b>{rank}</b></TableCell>
                          <TableCell>
                            <Link
                              to="/kinch-ranks"
                              search={{ wcaId: row.wca_id, region }}
                              className="link"
                            >
                              {row.name}
                            </Link>
                          </TableCell>
                          <TableCell>{row.score}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </>
            )
          })()}
        </>
      )}

      <div className="prose mt-12">
        <h2>What is Kinch Ranks?</h2>
        <p>
          The Kinch system is one way of measuring a cuber's overall performance rather than
          measuring just one event. To compute a Kinch Score, we compute the average of each event
          ratio, where an event ratio is 100 times the world record divided by your personal
          record.
        </p>
        <p>
          The Multi-blind score is calculated by summing the points and the proportion of the hour
          left. That means the time is also incorporated into the Kinch Score.
        </p>
        <p>
          There is one more special rule about calculating the Kinch Score. We take your better
          score between:
        </p>
        <ul>
          <li>FMC single and average</li>
          <li>3BLD single and average</li>
          <li>4BLD single and average</li>
          <li>5BLD single and average</li>
        </ul>
        <h2>What does my Kinch Score mean?</h2>
        <p>
          Higher scores are better. The maximum you can get is 100, assuming you hold the world
          record in every event.
        </p>
        <p>
          For example, the best Kinch Score in the world (at the time of writing) is Stanley
          Chapel with a score of 74.
        </p>
        <h2>How did Kinch Ranks start?</h2>
        <p>
          It was introduced on speedsolving.com by kinch2002 in{' '}
          <a
            href="https://www.speedsolving.com/threads/all-round-rankings-kinchranks.53353/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this post
          </a>
          &nbsp;😊
        </p>
        <h2>Why use Kinch?</h2>
        <p>
          Kinch and Sum of Ranks are both ways to measure the all-round performance of a cuber, and
          each has pros and cons. Here are a few reasons why kinch2002 devised the system.
        </p>
        <ul>
          <li>Kinch combines the singles and averages</li>
          <li>You are not penalized as heavily for not having competed in an event</li>
          <li>
            Avoids event biases - For example, you have to be <b>really</b> good at 3x3 to have a
            good Sum of Ranks
          </li>
          <li>In Sum of Ranks, there is no incentive for the world record holder to improve that event</li>
        </ul>
        <h2>Alternatives to Kinch</h2>
        <p>
          As mentioned before, Kinch is just one way to measure the all-round abilities of a
          cuber. If you want to know your Sum of Ranks, you can visit our{' '}
          <Link className="link" to="/sum-of-ranks">
            Sum of Ranks
          </Link>{' '}
          page as well.
        </p>
        <p>
          Different aggregation methods will have different tradeoffs, and some will debate which
          methods are better. That's why we provide multiple ways to measure your all-round
          abilities.
        </p>
      </div>
      <div style={{ marginTop: '96px' }}></div>
    </main>
  )
}
