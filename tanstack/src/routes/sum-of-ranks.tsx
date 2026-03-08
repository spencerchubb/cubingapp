import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import SearchElement from '../components/SearchElement'
import { wcaDb } from '../utils/wca-db'
import { SelectRegion } from '@/components/SelectRegion'
import { ChevronRightIcon } from 'lucide-react'
import { Pagination } from "@/components/ui/pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Link } from '@/components/ui/link'

interface PersonDetailRow {
  eventId: string
  worldRank: number
  maxWorldRank: number
  continentRank: number
  maxContinentRank: number
  countryRank: number
  maxCountryRank: number
}

interface PersonDetailData {
  name: string
  rows: PersonDetailRow[]
  worldRank: number
  continentRank: number
  countryRank: number
  worldSum: number
  continentSum: number
  countrySum: number
  exportDate: string
}

interface LeaderboardRow {
  wca_id: string
  name: string
  sum: number
}

interface LeaderboardData {
  results: LeaderboardRow[]
  pages: number
  exportDate: string
}

const getPersonDetail = createServerFn({ method: 'GET' })
  .inputValidator((d: { wcaId: string; type: string }) => d)
  .handler(async ({ data }) => {
    const { wcaId, type } = data

    const db = await wcaDb()

    // Get export date
    const exportDateStmt = db.query(
      "SELECT value FROM Miscellaneous WHERE key = 'export_date'"
    )
    const exportDateRow = exportDateStmt.get() as { value: string } | undefined
    const exportDate = exportDateRow?.value || ''

    // Get person name
    const nameStmt = db.query('SELECT name FROM Persons WHERE wca_id = ?')
    const nameRow = nameStmt.get(wcaId) as { name: string } | undefined
    const name = nameRow?.name || ''

    // Get ranks for all events
    const query = `
      WITH User AS (
        SELECT p.countryId, c.continentId
        FROM Persons p
        JOIN Countries c ON c.id = p.countryId AND p.id = ?
      )
      SELECT
        e.id AS eventId,
        r.worldRank,
        (SELECT COUNT(*) FROM ranks_${type} r WHERE r.eventId = e.id) AS maxWorldRank,
        r.continentRank,
        (SELECT COUNT(*) FROM ranks_${type} r WHERE r.continentId = (SELECT continentId FROM User) AND r.eventId = e.id) AS maxContinentRank,
        r.countryRank,
        (SELECT COUNT(*) FROM ranks_${type} r WHERE r.countryId = (SELECT countryId FROM User) AND r.eventId = e.id) AS maxCountryRank
      FROM Events e
      LEFT JOIN ranks_${type} r ON e.id = r.eventId AND r.personId = ?
      WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
    `

    const stmt = db.query(query)
    const rows = stmt.all(wcaId, wcaId) as PersonDetailRow[]

    let worldSum = 0
    let continentSum = 0
    let countrySum = 0

    const processedRows = rows.map((row) => {
      const processedRow = {
        ...row,
        worldRank: row.worldRank ?? row.maxWorldRank,
        continentRank: row.continentRank ?? row.maxContinentRank,
        countryRank: row.countryRank ?? row.maxCountryRank,
      }
      worldSum += processedRow.worldRank
      continentSum += processedRow.continentRank
      countrySum += processedRow.countryRank
      return processedRow
    })

    // Get user's ranking
    const rankQuery = `
      SELECT
        (SELECT COUNT(*) FROM persons p2
          WHERE countrySor${type} < ? AND p2.countryId = p1.countryId) AS countryCount,
        (SELECT COUNT(*) FROM persons p2
          WHERE continentSor${type} < ? AND p2.continentId = p1.continentId) AS continentCount,
        (SELECT COUNT(*) FROM persons
          WHERE worldSor${type} < ?) AS worldCount
      FROM persons p1 WHERE wca_Id = ?;
    `
    const rankStmt = db.query(rankQuery)
    const rankRow = rankStmt.get(countrySum, continentSum, worldSum, wcaId) as {
      countryCount: number
      continentCount: number
      worldCount: number
    } | undefined

    const countryRank = (rankRow?.countryCount || 0) + 1
    const continentRank = (rankRow?.continentCount || 0) + 1
    const worldRank = (rankRow?.worldCount || 0) + 1

    db.close()

    return {
      name,
      rows: processedRows,
      worldRank,
      continentRank,
      countryRank,
      worldSum,
      continentSum,
      countrySum,
      exportDate,
    } as PersonDetailData
  })

const getLeaderboard = createServerFn({ method: 'GET' })
  .inputValidator(
    (d: { region: string; type: string; page: number }) => d
  )
  .handler(async ({ data }) => {
    const { region, type, page } = data
    const perPage = 20

    const db = await wcaDb()

    // Get export date
    const exportDateStmt = db.query(
      "SELECT value FROM Miscellaneous WHERE key = 'export_date'"
    )
    const exportDateRow = exportDateStmt.get() as { value: string } | undefined
    const exportDate = exportDateRow?.value || ''

    // Build query based on region
    let query = ''
    let params: any[] = []

    const strings = region.split('-')
    if (strings[0] === 'continent') {
      const continentId = '_' + strings[1]
      query = `
        SELECT p.name, p.wca_id, p.continentSor${type} as sum
        FROM Persons p
        JOIN Countries c ON c.id = p.countryId AND c.continentId = ?
        ORDER BY continentSor${type}
        LIMIT ? OFFSET ?;
      `
      params = [continentId, perPage, (page - 1) * perPage]

      // Get total pages
      const countQuery = `
        SELECT COUNT(*) as count
        FROM Persons p
        JOIN Countries c ON c.id = p.countryId AND c.continentId = ?;
      `
      const countStmt = db.query(countQuery)
      const countRow = countStmt.get(continentId) as {
        count: number
      } | undefined
      const totalCount = countRow?.count || 0
      const pages = Math.ceil(totalCount / perPage)

      const stmt = db.query(query)
      const results = stmt.all(...params) as LeaderboardRow[]

      db.close()

      return {
        results,
        pages,
        exportDate,
      } as LeaderboardData
    } else if (strings[0] === 'country') {
      const countryId = strings[1]
      query = `
        SELECT name, wca_id, countrySor${type} as sum
        FROM Persons
        WHERE countryId = ?
        ORDER BY countrySor${type}
        LIMIT ? OFFSET ?;
      `
      params = [countryId, perPage, (page - 1) * perPage]

      // Get total pages
      const countQuery = `
        SELECT COUNT(*) as count
        FROM Persons
        WHERE countryId = ?;
      `
      const countStmt = db.query(countQuery)
      const countRow = countStmt.get(countryId) as {
        count: number
      } | undefined
      const totalCount = countRow?.count || 0
      const pages = Math.ceil(totalCount / perPage)

      const stmt = db.query(query)
      const results = stmt.all(...params) as LeaderboardRow[]

      db.close()

      return {
        results,
        pages,
        exportDate,
      } as LeaderboardData
    } else {
      // World
      query = `
        SELECT name, wca_id, worldSor${type} as sum
        FROM Persons
        ORDER BY worldSor${type}
        LIMIT ? OFFSET ?;
      `
      params = [perPage, (page - 1) * perPage]

      // Get total pages
      const countQuery = `
        SELECT COUNT(*) as count
        FROM Persons;
      `
      const countStmt = db.query(countQuery)
      const countRow = countStmt.get() as { count: number } | undefined
      const totalCount = countRow?.count || 0
      const pages = Math.ceil(totalCount / perPage)

      const stmt = db.query(query)
      const results = stmt.all(...params) as LeaderboardRow[]

      db.close()

      return {
        results,
        pages,
        exportDate,
      } as LeaderboardData
    }
  })

export const Route = createFileRoute('/sum-of-ranks')({
  component: SumOfRanks,
  head: ({ loaderData }) => {
    const title =
      loaderData && 'name' in loaderData && loaderData.name
        ? `Sum of Ranks | ${loaderData.name}`
        : 'Sum of Ranks'
    return {
      meta: [
        {
          name: 'description',
          content:
            'Sum of ranks leaderboard and calculator based on World Cube Association data',
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
        type: z.coerce.string().optional(),
      })
      .parse(search)
  },
  loaderDeps: ({ search }) => ({
    wcaId: search.wcaId,
    region: search.region || 'World',
    page: search.page || 1,
    type: search.type || 'Single',
  }),
  loader: async ({ deps }) => {
    if (deps.wcaId) {
      return getPersonDetail({ data: { wcaId: deps.wcaId, type: deps.type } })
    } else {
      return getLeaderboard({
        data: {
          region: deps.region,
          type: deps.type,
          page: deps.page,
        },
      })
    }
  },
})

function SumOfRanks() {
  const search = Route.useSearch()
  const data = Route.useLoaderData()
  const navigate = Route.useNavigate()

  const wcaId = search.wcaId
  const region = search.region || 'World'
  const page = search.page || 1
  const type = search.type || 'Single'

  const [localRegion, setLocalRegion] = useState(region)
  const [localType, setLocalType] = useState(type)

  useEffect(() => {
    setLocalRegion(region)
    setLocalType(type)
  }, [region, type])

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

  const renderCell = (value: number, maxValue: number) => {
    if (maxValue === 0) {
      return <TableCell>N/A</TableCell>
    }
    const percent = (value / maxValue) * 100
    const textColor = `hsl(${100 - percent}deg 100% 50%)`
    return (
      <TableCell style={{ color: textColor }}>
        {value}
      </TableCell>
    )
  }

  if (wcaId && 'name' in data) {
    const personData = data as PersonDetailData
    return (
      <main>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Link to="/sum-of-ranks">Sum of Ranks</Link>
          <ChevronRightIcon className="size-6 text-gray-400" />
          {personData.name}
        </h1>

        <SearchElement
          path="/sum-of-ranks"
          wcaId={wcaId}
          className="mt-8 w-full max-w-xs"
        />
        <NativeSelect
          value={localType}
          onChange={(e) => {
            setLocalType(e.target.value)
            updateSearch({ type: e.target.value })
          }}
          wrapperClassName="mt-4 w-full max-w-xs"
        >
          <NativeSelectOption value="Single">Single</NativeSelectOption>
          <NativeSelectOption value="Average">Average</NativeSelectOption>
        </NativeSelect>

        <Table className="mt-12 max-w-2xl">
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>World</TableHead>
              <TableHead>Continent</TableHead>
              <TableHead>Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>{personData.worldRank}</TableCell>
              <TableCell>{personData.continentRank}</TableCell>
              <TableCell>{personData.countryRank}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sum</TableCell>
              <TableCell>{personData.worldSum}</TableCell>
              <TableCell>{personData.continentSum}</TableCell>
              <TableCell>{personData.countrySum}</TableCell>
            </TableRow>
            {personData.rows.map((row) => (
              <TableRow key={row.eventId}>
                <TableCell>{row.eventId}</TableCell>
                {renderCell(row.worldRank, row.maxWorldRank)}
                {renderCell(row.continentRank, row.maxContinentRank)}
                {renderCell(row.countryRank, row.maxCountryRank)}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="prose mt-12">
          <h2>What is Sum of Ranks (SoR)?</h2>
          <p>
            Sum of Ranks is one way of measuring a cuber's overall performance
            rather than measuring just one event. To compute a Sum of Ranks, we
            simply add up the cuber's rank in each event. It is possible to
            compute a cuber's Sum of Ranks at a global level, continental level,
            and national level.
          </p>
          <h2>What does my Sum of Ranks mean?</h2>
          <p>
            Lower scores are better. For example, since the world record holder
            is ranked 1st in the world, their rank for that event is 1.
          </p>
          <h2>Alternatives to Sum of Ranks</h2>
          <p>
            Sum of Ranks is just one way to measure the all-round abilities of a
            cuber. If you want to know your Kinch score, you can visit our{' '}
            <Link to="/kinch-ranks">
              Kinch Ranks
            </Link>{' '}
            page as well.
          </p>
          <p>
            Different methods will have different tradeoffs, and not everyone
            agrees on which is better. That's why we provide multiple ways to
            measure your all-round abilities.
          </p>
        </div>

        <div style={{ marginTop: '96px' }}></div>
      </main>
    )
  } else {
    const leaderboardData = data as LeaderboardData
    return (
      <main>
        <h1 className="text-4xl font-bold">
          Sum of Ranks
        </h1>

        <SearchElement
          path="/sum-of-ranks"
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
        <NativeSelect
          value={localType}
          onChange={(e) => {
            setLocalType(e.target.value)
            updateSearch({ type: e.target.value, page: 1 })
          }}
          wrapperClassName="mt-4 w-full max-w-xs"
        >
          <NativeSelectOption value="Single">Single</NativeSelectOption>
          <NativeSelectOption value="Average">Average</NativeSelectOption>
        </NativeSelect>

        <Pagination
          goToPage={goToPage}
          page={page}
          pages={leaderboardData.pages}
          className="mt-4"
        />

        <Table className="mt-12 max-w-2xl">
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Sum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.results.map((row, index) => {
              const rank = (page - 1) * 20 + index + 1
              return (
                <TableRow key={`${row.wca_id}-${index}`}>
                  <TableCell><b>{rank}</b></TableCell>
                  <TableCell>
                    <Link
                      to="/sum-of-ranks"
                      search={{ wcaId: row.wca_id }}
                    >
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell>{Math.round(row.sum * 100) / 100}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        <div className="prose mt-12">
          <h2>What is Sum of Ranks (SoR)?</h2>
          <p>
            Sum of Ranks is one way of measuring a cuber's overall performance
            rather than measuring just one event. To compute a Sum of Ranks, we
            simply add up the cuber's rank in each event. It is possible to
            compute a cuber's Sum of Ranks at a global level, continental level,
            and national level.
          </p>
          <h2>What does my Sum of Ranks mean?</h2>
          <p>
            Lower scores are better. For example, since the world record holder
            is ranked 1st in the world, their rank for that event is 1.
          </p>
          <h2>Alternatives to Sum of Ranks</h2>
          <p>
            Sum of Ranks is just one way to measure the all-round abilities of a
            cuber. If you want to know your Kinch score, you can visit our{' '}
            <Link to="/kinch-ranks">
              Kinch Ranks
            </Link>{' '}
            page as well.
          </p>
          <p>
            Different methods will have different tradeoffs, and not everyone
            agrees on which is better. That's why we provide multiple ways to
            measure your all-round abilities.
          </p>
        </div>

        <div style={{ marginTop: '96px' }}></div>
      </main>
    )
  }
}
