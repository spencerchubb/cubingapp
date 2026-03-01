import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { eventIdToName, formatResult } from '../utils/event-utils'
import { wcaDb } from '../utils/wca-db'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export interface PersonData {
  name: string
  countryId: string
  worldKinch: number
  continentKinch: number
  countryKinch: number
  worldSorSingle: number
  continentSorSingle: number
  countrySorSingle: number
  worldSorAverage: number
  continentSorAverage: number
  countrySorAverage: number
}

export interface EventRanks {
  singleBest: string | null
  singleWR: number | null
  singleCR: number | null
  singleNR: number | null
  averageBest: string | null
  averageWR: number | null
  averageCR: number | null
  averageNR: number | null
}

export interface PersonRanksData {
  person: PersonData | null
  ranks: Record<string, EventRanks>
}

const getPersonRanks = createServerFn({ method: 'GET' })
  .inputValidator((d: { wcaId: string | null }) => d)
  .handler(async ({ data }): Promise<PersonRanksData> => {
    const { wcaId } = data
    const ranks: Record<string, EventRanks> = {}

    if (!wcaId) {
      return { person: null, ranks }
    }

    const db = await wcaDb()

    // Get person data
    const personStmt = db.query(`
      SELECT name, countryId, worldKinch, continentKinch, countryKinch, 
        worldSorSingle, continentSorSingle, countrySorSingle, 
        worldSorAverage, continentSorAverage, countrySorAverage
      FROM persons 
      WHERE wca_id = ?;
    `)
    const personRow = personStmt.get(wcaId) as PersonData | undefined

    if (!personRow) {
      db.close()
      return { person: null, ranks }
    }

    // Format kinch and sum of ranks values (round to 2 decimal places)
    const person: PersonData = {
      ...personRow,
      worldKinch: Math.round(personRow.worldKinch * 100) / 100,
      continentKinch: Math.round(personRow.continentKinch * 100) / 100,
      countryKinch: Math.round(personRow.countryKinch * 100) / 100,
      worldSorSingle: Math.round(personRow.worldSorSingle * 100) / 100,
      continentSorSingle: Math.round(personRow.continentSorSingle * 100) / 100,
      countrySorSingle: Math.round(personRow.countrySorSingle * 100) / 100,
      worldSorAverage: Math.round(personRow.worldSorAverage * 100) / 100,
      continentSorAverage: Math.round(personRow.continentSorAverage * 100) / 100,
      countrySorAverage: Math.round(personRow.countrySorAverage * 100) / 100,
    }

    // Get single ranks
    const singleStmt = db.query(`
      SELECT * FROM ranks_single 
      WHERE personId = ? 
        AND eventId <> '333ft' 
        AND eventId <> '333mbo' 
        AND eventId <> 'magic' 
        AND eventId <> 'mmagic';
    `)
    const singleRows = singleStmt.all(wcaId) as Array<{
      eventId: string
      best: number
      worldRank: number
      continentRank: number
      countryRank: number
    }>

    for (const row of singleRows) {
      const eventName = eventIdToName[row.eventId] || row.eventId
      if (!ranks[eventName]) {
        ranks[eventName] = {
          singleBest: null,
          singleWR: null,
          singleCR: null,
          singleNR: null,
          averageBest: null,
          averageWR: null,
          averageCR: null,
          averageNR: null,
        }
      }
      ranks[eventName].singleBest = formatResult(row.eventId, 'single', row.best)
      ranks[eventName].singleWR = row.worldRank
      ranks[eventName].singleCR = row.continentRank
      ranks[eventName].singleNR = row.countryRank
    }

    // Get average ranks
    const averageStmt = db.query(`
      SELECT * FROM ranks_average 
      WHERE personId = ? 
        AND eventId <> '333ft' 
        AND eventId <> '333mbo' 
        AND eventId <> 'magic' 
        AND eventId <> 'mmagic';
    `)
    const averageRows = averageStmt.all(wcaId) as Array<{
      eventId: string
      best: number
      worldRank: number
      continentRank: number
      countryRank: number
    }>

    for (const row of averageRows) {
      const eventName = eventIdToName[row.eventId] || row.eventId
      if (!ranks[eventName]) {
        ranks[eventName] = {
          singleBest: null,
          singleWR: null,
          singleCR: null,
          singleNR: null,
          averageBest: null,
          averageWR: null,
          averageCR: null,
          averageNR: null,
        }
      }
      ranks[eventName].averageBest = formatResult(row.eventId, 'average', row.best)
      ranks[eventName].averageWR = row.worldRank
      ranks[eventName].averageCR = row.continentRank
      ranks[eventName].averageNR = row.countryRank
    }

    db.close()

    return { person, ranks }
  })

export const Route = createFileRoute('/persons')({
  component: Persons,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.person
          ? `${loaderData.person.name} | CubingApp`
          : 'Persons | CubingApp',
      },
    ],
  }),
  validateSearch: (search) => {
    return z
      .object({
        wcaId: z.coerce.string().optional(),
      })
      .parse(search)
  },
  loaderDeps: ({ search }) => ({
    wcaId: search.wcaId || null,
  }),
  loader: async ({ deps }) => {
    return getPersonRanks({ data: { wcaId: deps.wcaId } })
  },
})

function Persons() {
  const data = Route.useLoaderData()
  const search = Route.useSearch()

  if (!search.wcaId || !data.person) {
    return <main className="prose">
      <h1>Persons</h1>
      <p>No WCA ID provided or no person found.</p>
    </main>
  }

  return (
    <>
      <style>{`
        th:nth-child(1), 
        td:nth-child(1), 
        th:nth-child(5), 
        td:nth-child(5) {
          border-right: solid 1px var(--gray-500);
        }
      `}</style>
      <main>
        <h1 className="text-4xl font-bold">
          {data.person.name}
        </h1>
        <p className="mt-2">Country: {data.person.countryId}</p>
        <p className="mt-2">WCA ID: {search.wcaId}</p>

        <Table className="mt-8">
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Single</TableHead>
              <TableHead>WR</TableHead>
              <TableHead>CR</TableHead>
              <TableHead>NR</TableHead>
              <TableHead>Average</TableHead>
              <TableHead>WR</TableHead>
              <TableHead>CR</TableHead>
              <TableHead>NR</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(data.ranks).map(([eventName, ranks]) => (
              <TableRow key={eventName}>
                <TableCell>{eventName}</TableCell>
                <TableCell>{ranks.singleBest || ''}</TableCell>
                <TableCell>{ranks.singleWR || ''}</TableCell>
                <TableCell>{ranks.singleCR || ''}</TableCell>
                <TableCell>{ranks.singleNR || ''}</TableCell>
                <TableCell>{ranks.averageBest || ''}</TableCell>
                <TableCell>{ranks.averageWR || ''}</TableCell>
                <TableCell>{ranks.averageCR || ''}</TableCell>
                <TableCell>{ranks.averageNR || ''}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Kinch</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{data.person.worldKinch.toFixed(2)}</TableCell>
              <TableCell>{data.person.continentKinch.toFixed(2)}</TableCell>
              <TableCell>{data.person.countryKinch.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sum of Ranks</TableCell>
              <TableCell></TableCell>
              <TableCell>{data.person.worldSorSingle.toFixed(2)}</TableCell>
              <TableCell>{data.person.continentSorSingle.toFixed(2)}</TableCell>
              <TableCell>{data.person.countrySorSingle.toFixed(2)}</TableCell>
              <TableCell></TableCell>
              <TableCell>{data.person.worldSorAverage.toFixed(2)}</TableCell>
              <TableCell>{data.person.continentSorAverage.toFixed(2)}</TableCell>
              <TableCell>{data.person.countrySorAverage.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div style={{ minHeight: 100 }}></div>
      </main>
    </>
  )
}
