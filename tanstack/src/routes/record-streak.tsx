import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import SearchElement from '../components/SearchElement'
import { wcaDb } from '../utils/wca-db'

interface RecordStreakData {
  currentStreak: string[]
  longestStreak: string[]
  exportDate: string
}

const getRecordStreak = createServerFn({ method: 'GET' })
  .inputValidator((d: { wcaId: string | null }) => d)
  .handler(async ({ data }): Promise<RecordStreakData | null> => {
    const { wcaId } = data

    if (!wcaId) {
      return null
    }

    const db = await wcaDb()

    // Get export date
    const exportDateStmt = db.query(
      "SELECT value FROM Miscellaneous WHERE key = 'export_date'"
    )
    const exportDateRow = exportDateStmt.get() as { value: string } | undefined
    const exportDate = exportDateRow?.value || ''

    // Query results ordered by competition start date
    const query = `
      SELECT r.competitionId, r.eventId, r.best, r.average
      FROM results r
      JOIN competitions c ON r.competitionId = c.id
      WHERE personId = ?
      ORDER BY c.startDate ASC;
    `
    const stmt = db.query(query)
    const rows = stmt.all(wcaId) as Array<{
      competitionId: string
      eventId: string
      best: number
      average: number
    }>

    db.close()

    // Group results by competition and track order
    const competitions: Record<string, Array<{ eventId: string; best: number; average: number }>> = {}
    const competitionOrder: string[] = []

    for (const row of rows) {
      if (!competitions[row.competitionId]) {
        competitions[row.competitionId] = []
        competitionOrder.push(row.competitionId)
      }
      competitions[row.competitionId].push({
        eventId: row.eventId,
        best: row.best,
        average: row.average,
      })
    }

    // Track best singles and averages
    const bestSingles: Record<string, number> = {}
    const bestAverages: Record<string, number> = {}
    const currentStreak: string[] = []
    const longestStreak: string[] = []

    // Helper function to check if a result is a record
    const isRecord = (eventId: string, result: number, records: Record<string, number>): boolean => {
      if (result === 0 || result === -1) {
        return false
      }

      if (!records[eventId]) {
        return true
      }

      return result <= records[eventId]
    }

    // Iterate over competitions in chronological order
    for (const competitionId of competitionOrder) {
      const results = competitions[competitionId]
      let recordAttained = false

      // Check each result in the competition
      for (const result of results) {
        if (isRecord(result.eventId, result.best, bestSingles)) {
          bestSingles[result.eventId] = result.best
          recordAttained = true
        }

        if (isRecord(result.eventId, result.average, bestAverages)) {
          bestAverages[result.eventId] = result.average
          recordAttained = true
        }
      }

      if (recordAttained) {
        currentStreak.push(competitionId)
        if (currentStreak.length > longestStreak.length) {
          longestStreak.length = 0
          longestStreak.push(...currentStreak)
        }
      } else {
        currentStreak.length = 0
      }
    }

    return {
      currentStreak,
      longestStreak,
      exportDate,
    }
  })

export const Route = createFileRoute('/record-streak')({
  component: RecordStreak,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Tool for speedcubers to calculate their personal record streak at WCA competitions',
      },
      {
        title: 'Record Streak Calculator for Cubing',
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
    return getRecordStreak({ data: { wcaId: deps.wcaId } })
  },
})

function RecordStreak() {
  const search = Route.useSearch()
  const data = Route.useLoaderData()

  return (
    <main>
      <h1 className="text-4xl font-bold">
        Record Streak Calculator
      </h1>
      <SearchElement
        path="/record-streak"
        wcaId={search.wcaId}
        className="mt-8 w-full max-w-xs"
      />
      <div className="prose mt-12">
        {search.wcaId && data && (
          <>
            <h2>Current streak - {data.currentStreak.length}</h2>
            <ul>
              {data.currentStreak.map((compId, i) => (
                <li key={i}>{compId}</li>
              ))}
            </ul>
            <h2>Longest streak - {data.longestStreak.length}</h2>
            <ul>
              {data.longestStreak.map((compId, i) => (
                <li key={i}>{compId}</li>
              ))}
            </ul>
          </>
        )}
        <h2>What is this?</h2>
        <p>
          This tool calculates personal record streaks at WCA competitions. Just search for a WCA
          competitor, and we will calculate the record streak.
        </p>
        <p>We calculate two metrics. In some cases, they may be the same!</p>
        <ul>
          <li>Current streak</li>
          <li>Longest streak</li>
        </ul>
        <h2>How does it work?</h2>
        <p>
          First we fetch all the competitions that a cubers has participated in. Then we go through
          each competition and check: Have they set or tied a personal record in at least one event?
          If so, their streak continues.
        </p>
      </div>
      <div style={{ marginTop: 100 }}></div>
    </main>
  )
}
