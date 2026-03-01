import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { eventIdToName, formatResult } from '../utils/event-utils'
import { wcaDb } from '../utils/wca-db'
import { SelectRegion } from '@/components/SelectRegion'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Pagination } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export interface RankResult {
  personId: string
  name: string
  best: number
  countryId: string
  rank: number
}

interface RanksData {
  results: RankResult[]
  totalCount: number
  pages: number
  exportDate: string
}

const getRanks = createServerFn({ method: 'GET' })
  .inputValidator(
    (d: {
      event: string
      region: string
      type: string
      page: number
    }) => d
  )
  .handler(async ({ data }) => {
    const { event, region, type, page } = data
    const perPage = 100

    const db = await wcaDb()

    // Get export date
    const exportDateStmt = db.query(
      "SELECT value FROM Miscellaneous WHERE key = 'export_date'"
    )
    const exportDateRow = exportDateStmt.get() as { value: string } | undefined
    const exportDate = exportDateRow?.value || ''

    // Build where conditions based on region
    let whereConditions = ''
    let rankColumn = 'worldRank'
    let regionValue: string | null = null

    if (region.startsWith('continent-')) {
      const continentId = '_' + region.substring('continent-'.length)
      whereConditions = ' AND continentId = ?'
      regionValue = continentId
      rankColumn = 'continentRank'
    } else if (region.startsWith('country-')) {
      const countryId = region.substring('country-'.length)
      whereConditions = ' AND countryId = ?'
      regionValue = countryId
      rankColumn = 'countryRank'
    }

    // Get total count
    let countQuery = `SELECT COUNT() as count FROM ranks_${type} WHERE eventId = ? ${whereConditions}`
    const countStmt = db.query(countQuery)
    const countRow = regionValue
      ? (countStmt.get(event, regionValue) as { count: number })
      : (countStmt.get(event) as { count: number })
    const totalCount = countRow.count
    const pages = Math.ceil(totalCount / perPage)

    // Validate and clamp page
    const validPage = Math.max(1, Math.min(page, pages))
    const lowerBound = (validPage - 1) * perPage
    const upperBound = lowerBound + perPage

    // Get results - use the actual rank column name in WHERE clause
    let query = `SELECT personId, name, best, countryId, ${rankColumn} as rank
      FROM ranks_${type} ranks
      WHERE eventId = ? AND ${rankColumn} >= ${lowerBound} AND ${rankColumn} <= ${upperBound} ${whereConditions}
      ORDER BY worldRank`
    const stmt = db.query(query)
    const results = regionValue
      ? (stmt.all(event, regionValue) as RankResult[])
      : (stmt.all(event) as RankResult[])

    db.close()

    return {
      results,
      totalCount,
      pages,
      exportDate,
    } as RanksData
  })

export const Route = createFileRoute('/ranks')({
  component: Ranks,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Ranks based on World Cube Association (WCA) data',
      },
      {
        title: 'Ranks',
      },
    ],
  }),
  validateSearch: (search) => {
    return z
      .object({
        event: z.coerce.string().optional(),
        region: z.coerce.string().optional(),
        type: z.coerce.string().optional(),
        page: z.coerce.number().optional(),
      })
      .parse(search)
  },
  loaderDeps: ({ search }) => ({
    event: search.event || '333',
    region: search.region || 'World',
    type: search.type || 'single',
    page: search.page || 1,
  }),
  loader: async ({ deps }) => {
    return getRanks({ data: deps })
  },
})

function Ranks() {
  const search = Route.useSearch()
  const data = Route.useLoaderData()
  const navigate = Route.useNavigate()

  const event = search.event || '333'
  const region = search.region || 'World'
  const type = search.type || 'single'
  const page = search.page || 1

  const [localEvent, setLocalEvent] = useState(event)
  const [localRegion, setLocalRegion] = useState(region)
  const [localType, setLocalType] = useState(type)

  useEffect(() => {
    setLocalEvent(event)
    setLocalRegion(region)
    setLocalType(type)
  }, [event, region, type])

  const updateSearch = (updates: Partial<typeof Route.useSearch>) => {
    navigate({
      search: (prev) => ({ ...prev, ...updates }),
      replace: true,
    })
  }

  const goToPage = (newPage: number) => {
    updateSearch({ page: newPage })
  }

  return (
    <main>
      <h1 className="text-4xl font-bold">
        Ranks
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: 'var(--gray-300)',
        }}
      >
        WCA data from {data.exportDate}
      </p>

      <NativeSelect
        value={localEvent}
        onChange={(e) => {
          setLocalEvent(e.target.value)
          updateSearch({ event: e.target.value, page: 1 })
        }}
        wrapperClassName="mt-8 w-full max-w-xs"
      >
        {Object.entries(eventIdToName).filter(([eventId, _]) => eventId !== 'Kinch' && eventId !== 'Sum of Ranks').map(([eventId, eventName]) => (
          <NativeSelectOption key={eventId} value={eventId}>
            {eventName}
          </NativeSelectOption>
        ))}
      </NativeSelect>
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
        <NativeSelectOption value="single">Single</NativeSelectOption>
        <NativeSelectOption value="average">Average</NativeSelectOption>
      </NativeSelect>

      <Pagination
        goToPage={goToPage}
        page={page}
        pages={data.pages}
        className="mt-4"
      />

      <Table className="mt-12 max-w-2xl">
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Result</TableHead>
            <TableHead>Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.results.map((row) => (
            <TableRow key={`${row.personId}-${row.rank}`}>
              <TableCell><b>{row.rank}</b></TableCell>
              <TableCell>
                <Link
                  to={`/persons?wcaId=${row.personId}`}
                  className="link"
                >
                  {row.name}  
                </Link>
              </TableCell>
              <TableCell>{formatResult(event, type, row.best)}</TableCell>
              <TableCell>{row.countryId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div style={{ marginTop: 100 }}></div>
    </main>
  )
}
