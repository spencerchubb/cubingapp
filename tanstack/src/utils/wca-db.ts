import type { Database as DatabaseType } from 'bun:sqlite'

export async function wcaDb(): Promise<DatabaseType> {
  const { Database } = await import('bun:sqlite')
  const { homedir } = await import('os')
  const { join } = await import('path')
  
  const dbPath = join(homedir(), 'wca.db')
  const db = new Database(dbPath)
  return db;
}
