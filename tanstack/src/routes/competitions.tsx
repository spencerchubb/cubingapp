import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { useState } from 'react'
import { z } from 'zod'
import { eventIdToName } from '../utils/event-utils'
import { wcaDb } from '../utils/wca-db'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Link } from '@/components/ui/link'

interface CompetitionRow {
  id: string
  name: string
  latitude_microdegrees: number
  longitude_microdegrees: number
  event_specs: string
  month: number
  day: number
  end_month: number
  end_day: number
  km?: number
}

interface CompetitionsData {
  rows: CompetitionRow[]
}

const getCompetitions = createServerFn({ method: 'GET' })
  .inputValidator(
    (d: {
      lat: number | null
      lon: number | null
      events: string[]
    }) => d
  )
  .handler(async ({ data }): Promise<CompetitionsData> => {
    const { lat, lon, events } = data

    const db = await wcaDb()
    const currentDate = new Date().toISOString().slice(0, 10)
    const query = `
      SELECT id, name, latitude_microdegrees, longitude_microdegrees, event_specs, month, day, end_month, end_day
      FROM Competitions
      WHERE startDate >= ?;
    `
    const stmt = db.query(query)
    const rows = stmt.all(currentDate) as CompetitionRow[]
    db.close()

    let filteredRows = rows

    if (events.length > 0) {
      filteredRows = filteredRows.filter((row) => {
        const event_specs = row.event_specs.split(' ')
        for (const event of events) {
          if (!event_specs.includes(event)) return false
        }
        return true
      })
    }

    if (lat !== null && lon !== null) {
      filteredRows = filteredRows.map((row) => ({
        ...row,
        // Database stores latitude/longitude as integers with 1e6 precision.
        km: haversineDistanceKm(lat, lon, row.latitude_microdegrees / 1000000, row.longitude_microdegrees / 1000000),
      }))
      filteredRows.sort((a, b) => (a.km ?? 0) - (b.km ?? 0))
    }

    return { rows: filteredRows }
  })

export const Route = createFileRoute('/competitions')({
  component: Competitions,
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'Find cubing competitions near you by entering your location. There are competitions all around the world, and this is the easiest way to find some nearby.',
      },
      {
        title: 'Cubing Competitions Near Me',
      },
    ],
  }),
  validateSearch: (search) =>
    z
      .object({
        name: z.string().optional(),
        lat: z.string().optional(),
        lon: z.string().optional(),
        events: z.coerce.string().optional(),
      })
      .parse(search),
  loaderDeps: ({ search }) => {
    const parsedLat = search.lat ? Number(search.lat) : null
    const parsedLon = search.lon ? Number(search.lon) : null
    const lat = Number.isFinite(parsedLat) ? parsedLat : null
    const lon = Number.isFinite(parsedLon) ? parsedLon : null
    const events = search.events ? search.events.split('-').filter(Boolean) : []

    return {
      lat,
      lon,
      events,
    }
  },
  loader: async ({ deps }) => getCompetitions({ data: deps }),
})

interface PlaceResult {
  lat: string
  lon: string
  display_name: string
}

function Competitions() {
  const search = Route.useSearch()
  const data = Route.useLoaderData()
  const navigate = Route.useNavigate()
  const [placeInput, setPlaceInput] = useState('')
  const [places, setPlaces] = useState<PlaceResult[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const selectedEvents = search.events ? search.events.split('-').filter(Boolean) : []
  console.log(selectedEvents);

  const setUrlParam = (key: 'events', value: string) => {
    navigate({
      search: (prev) => ({
        ...prev,
        [key]: value || undefined,
      }),
    })
  }

  const onClickEventButton = (eventId: string) => {
    const nextEvents = [...selectedEvents]
    if (!nextEvents.includes(eventId)) {
      nextEvents.push(eventId)
    } else {
      nextEvents.splice(nextEvents.indexOf(eventId), 1)
    }
    setUrlParam('events', nextEvents.join('-'))
  }

  const getPlaceUrl = (place: PlaceResult) => {
    const url = new URL(window.location.href)
    url.searchParams.set('lat', place.lat)
    url.searchParams.set('lon', place.lon)
    url.searchParams.set('name', place.display_name)
    return url.toString()
  }

  const findPlaces = async () => {
    setHasSearched(true)
    const res = await fetch(
      `https://geocode.maps.co/search?q=${encodeURIComponent(placeInput)}&api_key=678a635a5efbd709855403bsn03f239`
    )
    const json = (await res.json()) as PlaceResult[]
    setPlaces(json)
  }

  return (
    <main>
      <style>{`
        #placesDiv {
          display: flex;
          flex-direction: column;
          margin-top: 8px;
          gap: 8px;
        }

        #placesDiv a {
          border: solid 1px #555;
          border-radius: 4px;
          padding: 4px;
          background: #181818;
          color: #ddd;
        }

        #placesDiv a:hover {
          background: #444;
        }
      `}</style>

      <h1 className="text-4xl font-bold">
        Cubing Competitions Near Me
      </h1>
      <p style={{ color: '#ccc', fontSize: '15px', marginTop: '8px' }}>
        Your location is: {search.name || 'Unknown'}
      </p>
      {search.name && <p style={{ fontWeight: 'bold', marginTop: '8px' }}>Bookmark to save your location!</p>}

      <div style={{ display: 'flex', gap: '8px', marginTop: '32px' }}>
        <Input
          type="text"
          id="placeInput"
          placeholder="Name of place"
          value={placeInput}
          onChange={(e) => setPlaceInput(e.target.value)}
        />
        <Button id="findButton" onClick={findPlaces}>
          Find
        </Button>
      </div>
      <p style={{ color: '#ccc', fontSize: '15px', marginTop: '8px' }}>
        Give details for best accuracy. Name, Address, City, State/Province, Zip Code, Country
      </p>
      <div id="placesDiv">
        {places.length === 0 && hasSearched ? (
          <p>No places found. 1) Check spelling 2) Try another place 3) Add more details</p>
        ) : (
          places.map((place) => (
            <a key={`${place.lat}-${place.lon}-${place.display_name}`} href={getPlaceUrl(place)}>
              {place.display_name}
            </a>
          ))
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {Object.entries(eventIdToName)
          .filter(([eventId]) => eventId !== 'Kinch' && eventId !== 'Sum of Ranks')
          .map(([eventId, eventName]) => {
            const selected = selectedEvents.includes(eventId);
            return (
              <Button
                key={eventId}
                variant={selected ? 'default' : 'outline'}
                onClick={() => onClickEventButton(eventId)}
              >
                {eventName}
              </Button>
            )
          })}
      </div>

      <Table className="mt-8">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>km</TableHead>
            <TableHead>mi</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.rows.map((row) => {
            const dateRange = formatDateRange(row.month, row.day, row.end_month, row.end_day)
            const km = Math.round(row.km ?? 0)
            const mi = Math.round(km * 0.621371)
            const eventNames = row.event_specs
              .split(' ')
              .map((eventId) => eventIdToName[eventId] || eventId)
              .join(' ')

            return (
              <TableRow key={row.id}>
                <TableCell>{dateRange}</TableCell>
                <TableCell>{km}</TableCell>
                <TableCell>{mi}</TableCell>
                <TableCell>
                  <Link
                    to={`https://www.worldcubeassociation.org/competitions/${row.id}`}
                    target="_blank"
                  >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell className="cubing-icons events-cell">{eventNames}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <div style={{ marginTop: '96px' }}></div>
    </main>
  )
}

function numToMonth(num: number): string {
  return (
    {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec',
    }[num] ?? ''
  )
}

function formatDateRange(month: number, day: number, end_month: number, end_day: number): string {
  if (month === end_month && day === end_day) {
    return `${numToMonth(month)} ${day}`
  }
  return `${numToMonth(month)} ${day}-${numToMonth(end_month)} ${end_day}`
}

function haversineDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const earthRadius = 6371.0

  const lat1Rad = deg2rad(lat1)
  const lon1Rad = deg2rad(lon1)
  const lat2Rad = deg2rad(lat2)
  const lon2Rad = deg2rad(lon2)

  const dLat = lat2Rad - lat1Rad
  const dLon = lon2Rad - lon1Rad

  const angle =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(dLon / 2), 2)
      )
    )
  return angle * earthRadius
}

function deg2rad(value: number): number {
  return value * (Math.PI / 180)
}
