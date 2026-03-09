import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { eventIdToName, formatResult } from '../utils/event-utils'
import { wcaDb } from '../utils/wca-db'
import { SelectRegionMulti } from '@/components/SelectRegionMulti'
import { CONTINENTS, COUNTRIES } from '@/lib/regions'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Pagination } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Link } from '@/components/ui/link'

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

    // Build where conditions based on region (comma-separated)
    const regions = region.split(',').filter(Boolean)
    let whereConditions = ''
    let rankColumn = 'worldRank'
    const params: string[] = [event]

    const continents = regions.filter((r) => CONTINENTS.includes(r))
    const countries = regions.filter((r) => COUNTRIES.includes(r))

    if (continents.length > 0 && countries.length === 0) {
      const placeholders = continents.map(() => '?').join(',')
      whereConditions = ` AND continentId IN (${placeholders})`
      params.push(...continents.map((c) => '_' + c))
      rankColumn = 'continentRank'
    } else if (countries.length > 0 && continents.length === 0) {
      const placeholders = countries.map(() => '?').join(',')
      whereConditions = ` AND countryId IN (${placeholders})`
      params.push(...countries)
      rankColumn = 'countryRank'
    } else if (continents.length > 0 && countries.length > 0) {
      const cPlaceholders = continents.map(() => '?').join(',')
      const kPlaceholders = countries.map(() => '?').join(',')
      whereConditions = ` AND (continentId IN (${cPlaceholders}) OR countryId IN (${kPlaceholders}))`
      params.push(...continents.map((c) => '_' + c), ...countries)
      rankColumn = 'worldRank'
    }

    // Get total count
    const countQuery = `SELECT COUNT() as count FROM ranks_${type} WHERE eventId = ? ${whereConditions}`
    const countRow = db.query(countQuery).get(...params) as { count: number }
    const totalCount = countRow.count
    const pages = Math.ceil(totalCount / perPage)

    // Validate and clamp page
    const validPage = Math.max(1, Math.min(page, pages))
    const lowerBound = (validPage - 1) * perPage
    const upperBound = lowerBound + perPage

    // Get results
    const query = `SELECT personId, name, best, countryId, ${rankColumn} as rank
      FROM ranks_${type} ranks
      WHERE eventId = ? AND ${rankColumn} >= ${lowerBound} AND ${rankColumn} <= ${upperBound} ${whereConditions}
      ORDER BY worldRank`
    const results = db.query(query).all(...params) as RankResult[]

    db.close()

    return {
      results,
      totalCount,
      pages,
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
    region: search.region || '',
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
  const region = search.region || ''
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
      <SelectRegionMulti
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
                <Link to="/persons" search={{ wcaId: row.personId }}>
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
