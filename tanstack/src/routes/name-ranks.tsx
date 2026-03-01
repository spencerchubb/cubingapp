import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { eventIdToName, formatResult } from '../utils/event-utils'
import { wcaDb } from '../utils/wca-db'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export interface NameRankResult {
  personId: string
  name: string
  best: number | null
}

const getNameRanks = createServerFn({ method: 'GET' })
  .inputValidator((d: { name: string; event: string; type: string; nameType: string }) => d)
  .handler(async ({ data }) => {
    const { name, event, type, nameType } = data

    if (!name) {
      return []
    }

    const db = await wcaDb();
    let query = `select personId, name, best
      from ranks_${type}
      where (name like ? or name like ?) and eventId = ?
      limit 1000;`

    if (event === "Kinch") {
      query = `select id as personId, name, worldKinch as best
        from Persons
        where name like ? or name like ?
        order by worldKinch desc
        limit 1000;`
    } else if (event === "Sum of Ranks") {
      query = `select id as personId, name, worldSor${type} as best
        from Persons
        where name like ? or name like ?
        order by best asc
        limit 1000;`
    }

    let namePattern: string
    if (nameType === "first") {
      namePattern = `${name} %`
    } else if (nameType === "last") {
      namePattern = `% ${name}`
    } else if (nameType === "advanced") {
      namePattern = name
    } else {
      namePattern = `%${name}%`
    }

    const stmt = db.query(query)
    let results: NameRankResult[]
    if (event === "Kinch" || event === "Sum of Ranks") {
      results = stmt.all(namePattern, namePattern) as NameRankResult[]
    } else {
      results = stmt.all(namePattern, namePattern, event) as NameRankResult[]
    }

    db.close()

    return results
  })

export const Route = createFileRoute('/name-ranks')({
  component: NameRanks,
  head: () => ({
    meta: [
      {
        title: 'Name Ranks',
      },
    ],
  }),
  validateSearch: (search) => {
    return z.object({
      name: z.coerce.string().optional(),
      event: z.coerce.string().optional(),
      type: z.coerce.string().optional(),
      nameType: z.coerce.string().optional(),
    }).parse(search)
  },
  loaderDeps: ({ search }) => ({
    name: search.name || '',
    event: search.event || '333',
    type: search.type || 'single',
    nameType: search.nameType || 'any',
  }),
  loader: async ({ deps }) => {
    return getNameRanks({ data: deps })
  },
})

function NameRanks() {
  const search = Route.useSearch()
  const results = Route.useLoaderData()
  const navigate = Route.useNavigate()

  // Use defaults if params are not present
  const name = search.name || ''
  const event = search.event || '333'
  const type = search.type || 'single'
  const nameType = search.nameType || 'any'

  const [localName, setLocalName] = useState(name)
  const [localEvent, setLocalEvent] = useState(event)
  const [localType, setLocalType] = useState(type)
  const [localNameType, setLocalNameType] = useState(nameType)

  useEffect(() => {
    setLocalName(name)
    setLocalEvent(event)
    setLocalType(type)
    setLocalNameType(nameType)
  }, [name, event, type, nameType])

  const updateSearch = (updates: Partial<typeof Route.useSearch>) => {
    navigate({
      search: (prev) => ({ ...prev, ...updates }),
      replace: true,
    })
  }

  return (
    <main>
      <h1 className="text-4xl font-bold">Name Ranks</h1>
      <p>
        Who are the fastest cubers with your name?
      </p>

      <Input
        id="name"
        type="text"
        placeholder="Name"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
        onBlur={() => updateSearch({ name: localName })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            updateSearch({ name: localName })
          }
        }}
        className="mt-8 w-full max-w-xs"
      />

      <NativeSelect
        id="event"
        value={localEvent}
        onChange={(e) => {
          setLocalEvent(e.target.value)
          updateSearch({ event: e.target.value })
        }}
        wrapperClassName="mt-4 w-full max-w-xs"
      >
        {Object.entries(eventIdToName).map(([eventId, eventName]) => (
          <NativeSelectOption key={eventId} value={eventId}>
            {eventName}
          </NativeSelectOption>
        ))}
      </NativeSelect>

      <NativeSelect
        id="type"
        value={localType}
        onChange={(e) => {
          setLocalType(e.target.value)
          updateSearch({ type: e.target.value })
        }}
        wrapperClassName="mt-4 w-full max-w-xs"
      >
        <NativeSelectOption value="single">Single</NativeSelectOption>
        <NativeSelectOption value="average">Average</NativeSelectOption>
      </NativeSelect>

      <NativeSelect
        id="nameType"
        value={localNameType}
        onChange={(e) => {
          setLocalNameType(e.target.value)
          updateSearch({ nameType: e.target.value })
        }}
        wrapperClassName="mt-4 w-full max-w-xs"
      >
        <NativeSelectOption value="first">First name exact</NativeSelectOption>
        <NativeSelectOption value="last">Last name exact</NativeSelectOption>
        <NativeSelectOption value="any">Any name part</NativeSelectOption>
        <NativeSelectOption value="advanced">Advanced mode</NativeSelectOption>
      </NativeSelect>

      {name && results && results.length > 0 && (
        <Table className="mt-12 max-w-2xl">
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((row: NameRankResult, index: number) => (
              <TableRow key={`${row.personId}-${index}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <a
                    className="link"
                    href={`https://worldcubeassociation.org/persons/${row.personId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.name}
                  </a>
                </TableCell>
                <TableCell>{formatResult(event, type, row.best)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <div className="prose mt-12">
        <h2>Name type options:</h2>
        <ul>
          <li>
            <b>First name exact:</b> Match if the first name is exactly the same. For
            example, "jon" matches "Jon Doe" but not "Jonathan Doe".
          </li>
          <li>
            <b>Last name exact:</b> Match if the last name is exactly the same. For
            example, "smith" matches "Alice Smith" but not "Alice Smithson".
          </li>
          <li>
            <b>Any name part:</b> Match if any part of the name is the same. For example,
            "son" matches "Jackson Brown".
          </li>
          <li>
            <b>Advanced mode:</b> Use your own SQLite pattern! See{' '}
            <a
              href="https://www.sqlitetutorial.net/sqlite-like/"
              target="_blank"
              rel="noopener noreferrer"
            >
              this tutorial
            </a>{' '}
            to learn how to use SQLite patterns.
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '96px' }}></div>
    </main>
  )
}
