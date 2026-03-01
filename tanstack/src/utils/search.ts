import { createServerFn } from '@tanstack/react-start'
import { wcaDb } from './wca-db'

export interface SearchResult {
  wca_id: string
  name: string
}

export const searchPersons = createServerFn({ method: 'GET' })
  .inputValidator((d: { q: string }) => d)
  .handler(async ({ data }): Promise<SearchResult[]> => {
    const { q } = data

    if (!q) {
      return []
    }

    const db = await wcaDb()

    const query = `
      SELECT wca_id, name FROM persons
      WHERE name LIKE ? OR id LIKE ?
      LIMIT 10;
    `

    const stmt = db.query(query)
    const queryPattern = `%${q}%`
    const results = stmt.all(queryPattern, queryPattern) as SearchResult[]

    db.close()
    return results
  })
