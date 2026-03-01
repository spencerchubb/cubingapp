export const eventIdToName: Record<string, string> = {
  "333": "3x3",
  "222": "2x2",
  "444": "4x4",
  "555": "5x5",
  "666": "6x6",
  "777": "7x7",
  "333bf": "3BLD",
  "333fm": "FMC",
  "333oh": "OH",
  "clock": "Clock",
  "minx": "Mega",
  "pyram": "Pyra",
  "skewb": "Skewb",
  "sq1": "SQ1",
  "444bf": "4BLD",
  "555bf": "5BLD",
  "333mbf": "MBLD",
  "Kinch": "Kinch",
  "Sum of Ranks": "Sum of Ranks",
}

export function formatResult(event: string, type: string, result: number | null): string {
  if (result === null) return "N/A"
  
  if (event === "333mbf") {
    return formatMbld(result)
  } else if (event === "333fm" && type.toLowerCase() === "single") {
    return result.toString()
  } else if (event === "Kinch") {
    return result.toFixed(2)
  } else if (event === "Sum of Ranks") {
    return result.toString()
  }
  return timeToStr(result)
}

function timeToStr(centiseconds: number): string {
  const h = 360000
  const m = 6000
  const hours = Math.floor(centiseconds / h)
  const minutes = Math.floor((centiseconds % h) / m)
  const seconds = Math.floor(((centiseconds % h) % m) / 100)
  const milliseconds = centiseconds % 100

  if (hours) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
  } else if (minutes) {
    return `${minutes}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
  }
  return `${seconds}.${String(milliseconds).padStart(2, '0')}`
}

function formatMbld(value: number): string {
  if (!value) return "N/A"

  const missed = value % 100
  const points = 99 - Math.floor(value / 1e7) % 100
  const solved = points + missed
  const attempted = solved + missed
  const seconds = Math.floor(value / 100) % 1e5
  const centiseconds = seconds === 99999 ? null : seconds * 100

  const time = centiseconds !== null ? timeToStr(centiseconds) : "DNF"
  return `${solved}/${attempted} ${time}`
}
