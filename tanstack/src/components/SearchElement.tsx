import { useState, useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { searchPersons, type SearchResult } from '../utils/search'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'

interface SearchElementProps {
  path: string
  wcaId?: string
  className?: string
}

export default function SearchElement({ path, wcaId = '', className }: SearchElementProps) {
  const [searchValue, setSearchValue] = useState(wcaId)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const debounceTimeoutRef = useRef<NodeJS.Timeout>(null)

  const DEBOUNCE_TIME = 300

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    if (!searchValue.trim()) {
      setResults([])
      return
    }

    debounceTimeoutRef.current = setTimeout(async () => {
      try {
        const json = await searchPersons({ data: { q: searchValue } })
        setResults(json)
      } catch (error) {
        console.error('Error fetching data:', error)
        setResults([])
      }
    }, DEBOUNCE_TIME)

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
    }
  }, [searchValue])

  return (
    <div
      ref={dropdownRef}
      className={cn("relative inline-block w-full max-w-xs", className)}
    >
      <Input
        type="text"
        placeholder="Search name or WCA ID"
        className={"w-full"}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsVisible(true)}
      />
      {isVisible && results.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            width: '100%',
            zIndex: 1000,
          }}
        >
          {results.map((result) => (
            <Link
              key={result.wca_id}
              to={path}
              search={{ wcaId: result.wca_id }}
              className="search-result"
              style={{
                background: 'var(--gray-900)',
                border: 'solid 1px var(--gray-500)',
                borderTop: 'none',
                borderRadius: '0px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gray-800)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--gray-900)'
              }}
            >
              <h2 style={{ fontSize: '16px', margin: 0, color: 'var(--gray-100)' }}>
                {result.name}
              </h2>
              <p style={{ marginTop: '4px', fontSize: '14px', color: 'var(--gray-300)' }}>
                {result.wca_id}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
