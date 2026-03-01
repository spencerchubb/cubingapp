import { formatResult } from './event-utils'

export interface KinchResult {
  eventId: string
  single: number | null
  average: number | null
  bestSingle: number | null
  bestAverage: number | null
}

export interface KinchScore {
  eventId: string
  score: number
  result: string | null
  type: 'single' | 'average'
}

// Takes in the encoded integer and returns the score
function mbldScore(value: number | null): number {
  if (!value) return 0

  const seconds = Math.floor(value / 100) % 1e5
  const points = 99 - (Math.floor(value / 1e7) % 100)
  const centiseconds = seconds === 99999 ? null : seconds * 100

  const proportionOfHourLeft = 1 - (centiseconds || 0) / 360000
  const score = points + proportionOfHourLeft
  return Math.max(score, 0)
}

// The kinch score is calculated as follows:
// Compute average ratio for each event, where the ratio is the competitor score divided by world record score.
// Take the better score between:
//     - FMC single and FMC average
//     - 3bld single and 3bld average
//     - 4bld single and 4bld average
//     - 5bld single and 5bld average
// Returns a list of arrays, where each array has eventId, score, result, and type.
export function calcKinch(results: KinchResult[]): KinchScore[] {
  const output: KinchScore[] = []

  for (const result of results) {
    const eventId = result.eventId
    const single = result.single ?? 0
    const average = result.average ?? 0
    const bestSingle = result.bestSingle
    const bestAverage = result.bestAverage

    if (eventId === '333mbf') {
      const personalScore = mbldScore(single)
      const recordScore = mbldScore(bestSingle)

      // If nobody has a score, use 100
      if (!recordScore) {
        output.push({
          eventId,
          score: 100,
          result: null,
          type: 'single',
        })
        continue
      }

      output.push({
        eventId,
        score: (personalScore / recordScore) * 100,
        result: single ? formatResult(eventId, 'single', single) : null,
        type: 'single',
      })
      continue
    }

    if (
      eventId === '333fm' ||
      eventId === '333bf' ||
      eventId === '444bf' ||
      eventId === '555bf'
    ) {
      // If no single use 0. If no single, they also don't have an average.
      if (!single) {
        output.push({
          eventId,
          score: 0,
          result: null,
          type: 'single',
        })
        continue
      }

      // This can happen if a person has multiple countryIds and one of the countries has no result for the event.
      if (!bestSingle || !bestAverage) {
        output.push({
          eventId,
          score: 100,
          result: null,
          type: 'single',
        })
        continue
      }

      // If no average, using single
      if (!average) {
        output.push({
          eventId,
          score: (bestSingle / single) * 100,
          result: formatResult(eventId, 'single', single),
          type: 'single',
        })
        continue
      }

      // If there is an average, use the better of the two
      const singleScore = (bestSingle / single) * 100
      const averageScore = (bestAverage / average) * 100
      if (singleScore > averageScore) {
        output.push({
          eventId,
          score: singleScore,
          result: formatResult(eventId, 'single', single),
          type: 'single',
        })
      } else {
        output.push({
          eventId,
          score: averageScore,
          result: formatResult(eventId, 'average', average),
          type: 'average',
        })
      }
      continue
    }

    if (!average) {
      output.push({
        eventId,
        score: 0,
        result: null,
        type: 'single',
      })
      continue
    }

    // This can happen if a person has multiple countryIds and one of the countries has no result for the event.
    if (!bestAverage) {
      output.push({
        eventId,
        score: 100,
        result: null,
        type: 'single',
      })
      continue
    }

    output.push({
      eventId,
      score: (bestAverage / average) * 100,
      result: formatResult(eventId, 'average', average),
      type: 'average',
    })
  }

  // Round scores and format results
  for (let i = 0; i < output.length; i++) {
    output[i].score = Math.round(output[i].score * 100) / 100
  }

  return output
}

export function calcAverageKinchScore(scores: KinchScore[]): number {
  let sum = 0
  let count = 0
  for (const score of scores) {
    sum += score.score
    count++
  }
  return Math.round((sum / count) * 100) / 100
}
