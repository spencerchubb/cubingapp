function invertMove(move: string): string {
  if (move === '/') return '/'
  if (move.includes(',')) {
    const [top, bot] = move.split(',').map((n) => parseInt(n))
    return `${-top},${-bot}`
  }
  if (move.endsWith("'")) return move.slice(0, -1)
  return move + "'"
}

export function invertAlg(alg: string): string {
  if (!alg) return ''
  return alg.split(' ').map(invertMove).reverse().join(' ')
}

function sq(x: number): number {
  return x * x
}

function range(n: number): number[] {
  const out = Array(n)
  for (let i = 0; i < n; i++) out[i] = i
  return out
}

function parseMove(inputString: string) {
  let preNumber = ''
  let middle = ''
  let postNumber = ''
  let prime = false

  const preNumberMatch = inputString.match(/^\d+/)
  if (preNumberMatch) {
    preNumber = preNumberMatch[0]
    inputString = inputString.slice(preNumber.length)
  }

  const postNumberMatch = inputString.match(/\d+/)
  if (postNumberMatch) {
    postNumber = postNumberMatch[0]
    middle = inputString.slice(0, inputString.indexOf(postNumber))
    prime = inputString.endsWith("'")
  } else {
    prime = inputString.endsWith("'")
    middle = prime ? inputString.slice(0, inputString.length - 1) : inputString
  }

  return { preNumber, middle, postNumber, prime }
}

abstract class Puzzle {
  stickers: number[] = []
  affectedStickers: boolean[] = []
  animationQueue: { stickers: number[] }[] = []

  resetAffectedStickers() {
    this.affectedStickers = Array(this.numStickers()).fill(false)
  }

  solve() {
    this.stickers = range(this.numStickers())
  }

  abstract numStickers(): number
  abstract x(forward: boolean, layer?: number): void
  abstract y(forward: boolean, layer?: number): void
  abstract z(forward: boolean, layer?: number): void
  abstract U(forward: boolean, n: number): void
  abstract Uw(forward: boolean, n: number): void
  abstract D(forward: boolean, n: number): void
  abstract Dw(forward: boolean, n: number): void
  abstract F(forward: boolean, n: number): void
  abstract Fw(forward: boolean, n: number): void
  abstract B(forward: boolean, n: number): void
  abstract Bw(forward: boolean, n: number): void
  abstract L(forward: boolean, n: number): void
  abstract Lw(forward: boolean, n: number): void
  abstract R(forward: boolean, n: number): void
  abstract Rw(forward: boolean, n: number): void
  abstract M(forward: boolean): void
  abstract E(forward: boolean): void
  abstract S(forward: boolean): void

  getMoveMap(): Record<string, (forward: boolean, layer?: number) => void> {
    return {
      x: (f, l) => this.x(f, l),
      y: (f, l) => this.y(f, l),
      z: (f, l) => this.z(f, l),
      U: (f, l) => this.U(f, l!),
      Uw: (f, l) => this.Uw(f, l!),
      u: (f, l) => this.Uw(f, l!),
      D: (f, l) => this.D(f, l!),
      Dw: (f, l) => this.Dw(f, l!),
      d: (f, l) => this.Dw(f, l!),
      F: (f, l) => this.F(f, l!),
      Fw: (f, l) => this.Fw(f, l!),
      f: (f, l) => this.Fw(f, l!),
      B: (f, l) => this.B(f, l!),
      Bw: (f, l) => this.Bw(f, l!),
      b: (f, l) => this.Bw(f, l!),
      L: (f, l) => this.L(f, l!),
      Lw: (f, l) => this.Lw(f, l!),
      l: (f, l) => this.Lw(f, l!),
      R: (f, l) => this.R(f, l!),
      Rw: (f, l) => this.Rw(f, l!),
      r: (f, l) => this.Rw(f, l!),
      M: (f) => this.M(f),
      E: (f) => this.E(f),
      S: (f) => this.S(f),
    }
  }

  performMove(move: string, forward: boolean) {
    if (!move) return

    const { preNumber, middle, postNumber, prime } = parseMove(move)
    const moveFunc = this.getMoveMap()[middle]
    if (!moveFunc) return

    const layer = (parseInt(preNumber) - 1) || 0
    const quarterTurns = parseInt(postNumber) || 1

    for (let i = 0; i < quarterTurns; i++) {
      moveFunc(prime ? !forward : forward, layer)
    }
  }

  performAlg(alg: string): number {
    if (!alg) return 0
    const moves = alg.split(' ')
    for (let i = 0; i < moves.length; i++) {
      this.performMove(moves[i], true)
      this.animationQueue = []
    }
    return moves.length
  }
}

export class Cube extends Puzzle {
  layers: number

  constructor(layers: number) {
    super()
    this.layers = layers
    this.resetAffectedStickers()
    this.solve()
  }

  numStickers() {
    return this.layers * this.layers * 6
  }

  x(forward: boolean) { this.cubeRotate(0, forward) }
  y(forward: boolean) { this.cubeRotate(1, forward) }
  z(forward: boolean) { this.cubeRotate(2, forward) }

  U(forward: boolean, n: number) { this.turn(1, n, forward) }
  Uw(forward: boolean, n: number) {
    n = Math.max(n, 1)
    this.wideTurn(1, 0, n, forward)
  }
  D(forward: boolean, n: number) { this.turn(1, this.layers - 1 - n, !forward) }
  Dw(forward: boolean, n: number) {
    n = Math.max(n, 1)
    this.wideTurn(1, this.layers - 1, this.layers - 1 - n, !forward)
  }
  F(forward: boolean, n: number) { this.turn(2, n, forward) }
  Fw(forward: boolean, n: number) {
    n = Math.max(n, 1)
    this.wideTurn(2, 0, n, forward)
  }
  B(forward: boolean, n: number) { this.turn(2, this.layers - 1 - n, !forward) }
  Bw(forward: boolean, n: number) {
    n = Math.max(n, 1)
    this.wideTurn(2, this.layers - 1, this.layers - 1 - n, !forward)
  }
  L(forward: boolean, n: number) { this.turn(0, this.layers - 1 - n, !forward) }
  Lw(forward: boolean, n: number) {
    n = Math.max(n, 1)
    this.wideTurn(0, this.layers - 1, this.layers - 1 - n, !forward)
  }
  R(forward: boolean, n: number) { this.turn(0, n, forward) }
  Rw(forward: boolean, n: number) {
    n = Math.max(n, 1)
    this.wideTurn(0, 0, n, forward)
  }
  M(forward: boolean) { this.sliceTurn(0, !forward) }
  E(forward: boolean) { this.sliceTurn(1, !forward) }
  S(forward: boolean) { this.sliceTurn(2, forward) }

  turn(axis: number, layer: number, clockwise: boolean) {
    this.resetAffectedStickers()
    this.matchTurn(axis, layer, clockwise)
  }

  sliceTurn(axis: number, clockwise: boolean) {
    this.resetAffectedStickers()
    for (let i = 1; i < this.layers - 1; i++) {
      this.matchTurn(axis, i, clockwise)
    }
  }

  wideTurn(axis: number, startLayer: number, endLayer: number, clockwise: boolean) {
    this.resetAffectedStickers()
    const layer1 = Math.min(startLayer, endLayer)
    const layer2 = Math.max(startLayer, endLayer)
    for (let i = layer1; i <= layer2; i++) {
      this.matchTurn(axis, i, clockwise)
    }
  }

  cubeRotate(axis: number, clockwise: boolean) {
    this.resetAffectedStickers()
    for (let i = 0; i < this.layers; i++) {
      this.matchTurn(axis, i, clockwise)
    }
  }

  matchTurn(axis: number, layer: number, clockwise: boolean) {
    if (axis === 0) {
      this.turnXAxis(layer, clockwise)
      if (layer === 0) this.turnOuter(5, clockwise)
      else if (layer === this.layers - 1) this.turnOuter(4, !clockwise)
    } else if (axis === 1) {
      this.turnYAxis(layer, clockwise)
      if (layer === 0) this.turnOuter(0, clockwise)
      else if (layer === this.layers - 1) this.turnOuter(2, !clockwise)
    } else if (axis === 2) {
      this.turnZAxis(layer, clockwise)
      if (layer === 0) this.turnOuter(1, clockwise)
      else if (layer === this.layers - 1) this.turnOuter(3, !clockwise)
    }
  }

  turnXAxis(layer: number, clockwise: boolean) {
    for (let i = 1; i <= this.layers; i++) {
      this.cycle(
        clockwise,
        0 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
        3 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
        2 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
        1 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
      )
    }
  }

  turnYAxis(layer: number, clockwise: boolean) {
    for (let i = 0; i < this.layers; i++) {
      this.cycle(
        clockwise,
        1 * sq(this.layers) + i * this.layers + layer,
        4 * sq(this.layers) + i * this.layers + layer,
        3 * sq(this.layers) + (this.layers - i - 1) * this.layers + (this.layers - 1) - layer,
        5 * sq(this.layers) + i * this.layers + layer,
      )
    }
  }

  turnZAxis(layer: number, clockwise: boolean) {
    for (let i = 0; i < this.layers; i++) {
      this.cycle(
        clockwise,
        0 * sq(this.layers) + (i + 1) * this.layers - 1 - layer,
        5 * sq(this.layers) + i + this.layers * layer,
        2 * sq(this.layers) + (this.layers - i - 1) * this.layers + layer,
        4 * sq(this.layers) + sq(this.layers) - (i + 1) - layer * this.layers,
      )
    }
  }

  turnOuter(face: number, clockwise: boolean) {
    if (this.layers % 2 !== 0) {
      const center = this.center(face)
      this.affectedStickers[center] = true
    }

    for (let i = 0; i < Math.floor(this.layers / 2); i++) {
      const { topLeft, topRight, bottomLeft, bottomRight } = this.corners(face, i)
      this.cycle(clockwise, topLeft, topRight, bottomRight, bottomLeft)

      const numEdges = this.layers - 2 * (i + 1)
      for (let j = 0; j < numEdges; j++) {
        const { top, left, bottom, right } = this.edges(face, i, j)
        this.cycle(clockwise, top, right, bottom, left)
      }
    }
  }

  cycle(clockwise: boolean, ...indices: number[]) {
    indices.forEach((i) => (this.affectedStickers[i] = true))

    if (clockwise) {
      const tmp = this.stickers[indices[indices.length - 1]]
      for (let i = indices.length - 1; i > 0; i--) {
        this.stickers[indices[i]] = this.stickers[indices[i - 1]]
      }
      this.stickers[indices[0]] = tmp
    } else {
      const tmp = this.stickers[indices[0]]
      for (let i = 0; i < indices.length - 1; i++) {
        this.stickers[indices[i]] = this.stickers[indices[i + 1]]
      }
      this.stickers[indices[indices.length - 1]] = tmp
    }
  }

  center(face: number) {
    return face * sq(this.layers) + Math.floor(sq(this.layers) / 2)
  }

  corners(face: number, layer: number) {
    const offset = face * sq(this.layers)
    return {
      topLeft: offset + (this.layers + 1) * layer,
      topRight: offset + (this.layers - 1) * (this.layers - layer),
      bottomRight: offset + (this.layers + 1) * (this.layers - layer - 1),
      bottomLeft: offset + (this.layers - 1) * (layer + 1),
    }
  }

  edges(face: number, corner: number, edge: number) {
    const corners = this.corners(face, corner)
    const numEdges = this.layers - 2 * (corner + 1)
    return {
      top: corners.topLeft + this.layers * (edge + 1),
      left: corners.topLeft + (numEdges - edge),
      right: corners.topRight + edge + 1,
      bottom: corners.bottomLeft + this.layers * (numEdges - edge),
    }
  }

  getSvg(): string {
    const colors = ['x-u', 'x-f', 'x-d', 'x-b', 'x-l', 'x-r', 'div']
    const layersSq = sq(this.layers)
    const sticker = (i: number) => {
      const color = colors[Math.floor(this.stickers[i] / layersSq)]
      return `<${color}></${color}>`
    }
    const stickers: string[] = []

    if (this.layers === 2) {
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(13)); stickers.push(sticker(15))
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(16)); stickers.push(sticker(0)); stickers.push(sticker(2)); stickers.push(sticker(22))
      stickers.push(sticker(18)); stickers.push(sticker(1)); stickers.push(sticker(3)); stickers.push(sticker(20))
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(4)); stickers.push(sticker(6))
      stickers.push('<x-t></x-t>')
    } else if (this.layers === 3) {
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(29)); stickers.push(sticker(32)); stickers.push(sticker(35))
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(36)); stickers.push(sticker(0)); stickers.push(sticker(3)); stickers.push(sticker(6)); stickers.push(sticker(51))
      stickers.push(sticker(39)); stickers.push(sticker(1)); stickers.push(sticker(4)); stickers.push(sticker(7)); stickers.push(sticker(48))
      stickers.push(sticker(42)); stickers.push(sticker(2)); stickers.push(sticker(5)); stickers.push(sticker(8)); stickers.push(sticker(45))
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(9)); stickers.push(sticker(12)); stickers.push(sticker(15))
      stickers.push('<x-t></x-t>')
    } else if (this.layers === 4) {
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(51)); stickers.push(sticker(55)); stickers.push(sticker(59)); stickers.push(sticker(63))
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(64)); stickers.push(sticker(0)); stickers.push(sticker(4)); stickers.push(sticker(8)); stickers.push(sticker(12)); stickers.push(sticker(92))
      stickers.push(sticker(68)); stickers.push(sticker(1)); stickers.push(sticker(5)); stickers.push(sticker(9)); stickers.push(sticker(13)); stickers.push(sticker(88))
      stickers.push(sticker(72)); stickers.push(sticker(2)); stickers.push(sticker(6)); stickers.push(sticker(10)); stickers.push(sticker(14)); stickers.push(sticker(84))
      stickers.push(sticker(76)); stickers.push(sticker(3)); stickers.push(sticker(7)); stickers.push(sticker(11)); stickers.push(sticker(15)); stickers.push(sticker(80))
      stickers.push('<x-t></x-t>')
      stickers.push(sticker(16)); stickers.push(sticker(20)); stickers.push(sticker(24)); stickers.push(sticker(28))
      stickers.push('<x-t></x-t>')
    }

    return stickers.join('')
  }

  getSvg3D(): string {
    const colors = ['x-u', 'x-f', 'x-d', 'x-b', 'x-l', 'x-r', 'div']
    const layersSq = sq(this.layers)
    const stickerToColor = (i: number) => colors[Math.floor(this.stickers[i] / layersSq)]

    const rangeArr = (start: number, end: number) =>
      Array.from({ length: end - start }, (_, k) => k + start)

    return `<div><div>${rangeArr(0, layersSq).map((i) => `<${stickerToColor(i)}></${stickerToColor(i)}>`).join('')}</div><div>${rangeArr(1 * layersSq, 2 * layersSq).map((i) => `<${stickerToColor(i)}></${stickerToColor(i)}>`).join('')}</div><div>${rangeArr(5 * layersSq, 6 * layersSq).map((i) => `<${stickerToColor(i)}></${stickerToColor(i)}>`).join('')}</div></div>`
  }
}

const DARK_GRAY = '#444'
const WHITE = '#fff'

function rotatePoint2d(x: number, y: number, cx: number, cy: number, angle: number): [number, number] {
  const radians = (angle * Math.PI) / 180
  const cos = Math.cos(radians)
  const sin = Math.sin(radians)
  const nx = cos * (x - cx) + sin * (y - cy) + cx
  const ny = cos * (y - cy) - sin * (x - cx) + cy
  return [nx, ny]
}

function rotatePoints2d(points: string, cx: number, cy: number, angle: number): string {
  return points
    .split(' ')
    .map((point) => {
      const [x, y] = point.split(',')
      const [nx, ny] = rotatePoint2d(parseFloat(x), parseFloat(y), cx, cy, angle)
      return `${Math.floor(nx)},${Math.floor(ny)}`
    })
    .join(' ')
}

function cycleSQ(state: Record<string, number> | number[], cycle: (string | number)[], clockwise: boolean) {
  if (!clockwise) cycle = [...cycle].reverse()
  const tmp = (state as any)[cycle[cycle.length - 1]]
  for (let i = cycle.length - 1; i > 0; i--) {
    ;(state as any)[cycle[i]] = (state as any)[cycle[i - 1]]
  }
  ;(state as any)[cycle[0]] = tmp
}

function cyclesSQ(state: Record<string, number> | number[], cycles: (string | number)[][], clockwise: boolean) {
  cycles.forEach((c) => cycleSQ(state, c, clockwise))
}

export class SQ1 {
  top: number[]
  bottom: number[]

  constructor() {
    this.top = [0, 1, 2, 3, 4, 5, 6, 7]
    this.bottom = [8, 9, 10, 11, 12, 13, 14, 15]
  }

  svgTop(): string {
    return this.getSvg(this.top, true)
  }

  svgBottom(mirror = false): string {
    return this.getSvg(this.bottom, false, mirror)
  }

  performAlg(alg: string) {
    const moves = alg.split(' ')
    for (const move of moves) {
      if (move === '/') {
        this.slash()
        continue
      }
      const [top, bottom] = move.split(',')
      this.turnU(parseInt(top))
      this.turnD(parseInt(bottom))
    }
  }

  slash() {
    let topCount = 0
    let bottomCount = 0
    let topIndex = 0
    let bottomIndex = 0

    for (const value of this.top) {
      topCount += value % 2 === 0 ? 2 : 1
      topIndex += 1
      if (topCount === 6) break
    }
    for (const value of this.bottom) {
      bottomCount += value % 2 === 0 ? 2 : 1
      bottomIndex += 1
      if (bottomCount === 6) break
    }

    const top = this.top.slice(topIndex)
    const bottom = this.bottom.slice(bottomIndex)
    this.top = this.top.slice(0, topIndex).concat(bottom.reverse())
    this.bottom = this.bottom.slice(0, bottomIndex).concat(top.reverse())
  }

  turnU(n: number) {
    this.top = this.turnFace(-n, this.top)
  }

  turnD(n: number) {
    this.bottom = this.turnFace(n, this.bottom)
  }

  getTotal(face: number[]): number {
    let total = 0
    for (const value of face) {
      total += value % 2 === 0 ? 2 : 1
    }
    return total
  }

  turnFace(n: number, face: number[]): number[] {
    let count = 0
    let index = 0
    const total = this.getTotal(face)

    if (n < 0) n = total + n

    for (const value of face) {
      count += value % 2 === 0 ? 2 : 1
      index += 1
      if (count === n) break
    }

    const beginning = face.slice(0, index)
    const end = face.slice(index)
    return end.concat(beginning)
  }

  getSvg(face: number[], top: boolean, mirror = false): string {
    const pieces: (string | number[])[][] = [
      [DARK_GRAY, '#00f', '#f00'],
      [DARK_GRAY, '#00f'],
      [DARK_GRAY, '#f80', '#00f'],
      [DARK_GRAY, '#f80'],
      [DARK_GRAY, '#0f0', '#f80'],
      [DARK_GRAY, '#0f0'],
      [DARK_GRAY, '#f00', '#0f0'],
      [DARK_GRAY, '#f00'],
      [WHITE, '#f00', '#00f'],
      [WHITE, '#00f'],
      [WHITE, '#00f', '#f80'],
      [WHITE, '#f80'],
      [WHITE, '#f80', '#0f0'],
      [WHITE, '#0f0'],
      [WHITE, '#0f0', '#f00'],
      [WHITE, '#f00'],
    ]

    const size = 100
    const mid = size / 2
    const pad = 0.15 * size
    const width = 0.1 * size
    const inner = (width + pad - mid) / Math.tan((75 * Math.PI) / 180) + mid
    const outer = (pad - mid) / Math.tan((75 * Math.PI) / 180) + mid

    let corner1 = `${mid},${mid} ${inner},${size - width - pad} ${width + pad},${size - width - pad} ${width + pad},${size - inner}`
    let corner2 = `${pad},${size - pad} ${width + pad},${size - width - pad} ${width + pad},${size - inner} ${pad},${size - outer}`
    let corner3 = `${pad},${size - pad} ${width + pad},${size - width - pad} ${inner},${size - width - pad} ${outer},${size - pad}`
    const edge1 = `${mid},${mid} ${size - inner},${size - width - pad} ${inner},${size - width - pad}`
    const edge2 = `${outer},${size - pad} ${inner},${size - width - pad} ${size - inner},${size - width - pad} ${size - outer},${size - pad}`

    if (!top) {
      ;[corner2, corner3] = [corner3, corner2]
    }

    let angle = 0
    const polygons: { points: string; fill: string }[] = []
    for (let i = 0; i < face.length; i++) {
      const piece = pieces[face[i]]
      if (piece.length === 3) {
        polygons.push({ points: rotatePoints2d(corner1, mid, mid, angle), fill: piece[0] as string })
        polygons.push({ points: rotatePoints2d(corner2, mid, mid, angle), fill: piece[1] as string })
        polygons.push({ points: rotatePoints2d(corner3, mid, mid, angle), fill: piece[2] as string })
        angle -= 60
      } else if (piece.length === 2) {
        polygons.push({ points: rotatePoints2d(edge1, mid, mid, angle - 30), fill: piece[0] as string })
        polygons.push({ points: rotatePoints2d(edge2, mid, mid, angle - 30), fill: piece[1] as string })
        angle -= 30
      }
    }

    let svgContent = polygons
      .map((p) => `<polygon points="${p.points}" fill="${p.fill}"/>`)
      .join('')

    if (mirror) {
      svgContent = `<g transform="translate(0, ${size}) scale(1, -1)">${svgContent}</g>`
    }

    return `<svg viewBox="0 0 ${size} ${size}" stroke-linejoin="round">${svgContent}</svg>`
  }
}

export class Pyraminx {
  state: number[]

  constructor() {
    this.state = [
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 2, 2, 2, 2, 2, 2, 2, 2,
      3, 3, 3, 3, 3, 3, 3, 3, 3,
    ]
  }

  performMove(move: string) {
    const [F1, F2, F3, F4, F5, F6, F7, F8, F9] = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const [L1, L2, L3, L4, , , L7, L8, L9] = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    const [R1, R2, R3, R4, R5, R6, R7] = [18, 19, 20, 21, 22, 23, 24]
    const [D1, D2, D3, D4, , , D7, D8, D9] = [27, 28, 29, 30, 31, 32, 33, 34, 35]

    const U_CYCLES = [[F2, L2, R2], [F3, L3, R3], [F4, L4, R4]]
    const U_TIP_CYCLES = [[F1, L1, R1]]
    const L_CYCLES = [[F2, D4, L7], [F6, D3, L8], [F7, D2, L4]]
    const L_TIP_CYCLES = [[F5, D1, L9]]
    const R_CYCLES = [[F4, R7, D4], [F8, R6, D8], [F7, R2, D7]]
    const R_TIP_CYCLES = [[F9, R5, D9]]

    switch (move) {
      case 'U': cyclesSQ(this.state, U_CYCLES, true); cyclesSQ(this.state, U_TIP_CYCLES, true); break
      case "U'": cyclesSQ(this.state, U_CYCLES, false); cyclesSQ(this.state, U_TIP_CYCLES, false); break
      case 'L':
      case "L2'": cyclesSQ(this.state, L_CYCLES, true); cyclesSQ(this.state, L_TIP_CYCLES, true); break
      case "L'":
      case 'L2': cyclesSQ(this.state, L_CYCLES, false); cyclesSQ(this.state, L_TIP_CYCLES, false); break
      case 'R':
      case "R2'": cyclesSQ(this.state, R_CYCLES, true); cyclesSQ(this.state, R_TIP_CYCLES, true); break
      case "R'":
      case 'R2': cyclesSQ(this.state, R_CYCLES, false); cyclesSQ(this.state, R_TIP_CYCLES, false); break
    }
  }

  performAlg(alg: string) {
    alg = alg.replaceAll('(', '').replaceAll(')', '')
    alg.split(' ').forEach((move) => this.performMove(move))
  }

  getSvg(): string {
    const colors = ['#0f0', '#f00', '#00f', '#ff0']

    const polygons = [
      '500,577 666,673 334,673',
      '500,770 334,673 166,770',
      '500,770 666,673 334,673',
      '500,770 666,673 834,770',
      '10,860 166,770 334,860',
      '500,770 334,860 166,770',
      '500,770 334,860 666,860',
      '500,770 666,860 834,770',
      '990,860 666,860 834,770',
    ]

    let html = "<svg id='svg' viewBox='0 0 1000 870' stroke='black' stroke-width='8' stroke-linejoin='round'>"
    polygons.forEach((points, i) => {
      html += `<polygon fill="${colors[this.state[i]]}" points="${points}" />`
      html += `<polygon fill="${colors[this.state[i + 9]]}" points="${rotatePoints2d(points, 500, 577, 240)}" />`
      html += `<polygon fill="${colors[this.state[i + 18]]}" points="${rotatePoints2d(points, 500, 577, 120)}" />`
    })
    html += '</svg>'
    return html
  }
}

export class Skewb {
  stickers: Record<string, number>

  constructor() {
    this.stickers = {
      U: 0, UBL: 0, URB: 0, UFR: 0, ULF: 0,
      F: 1, FUL: 1, FRU: 1, FDR: 1, FLD: 1,
      R: 2, RUF: 2, RBU: 2, RDB: 2, RFD: 2,
      B: 3, BLU: 3, BUR: 3, BDL: 3, BRD: 3,
      L: 4, LFU: 4, LUB: 4, LDF: 4, LBD: 4,
      D: 5, DFL: 5, DRF: 5, DLB: 5, DBR: 5,
    }
  }

  performMove(move: string) {
    const R_CYCLES = [['U', 'R', 'F'], ['UFR', 'RUF', 'FRU'], ['ULF', 'RBU', 'FDR'], ['FUL', 'URB', 'RFD'], ['LFU', 'BUR', 'DRF']]
    const F_CYCLES = [['U', 'F', 'L'], ['ULF', 'FUL', 'LFU'], ['UFR', 'FLD', 'LUB'], ['FRU', 'LDF', 'UBL'], ['RUF', 'DFL', 'BLU']]
    const Y_CYCLES = [['F', 'L', 'B', 'R'], ['ULF', 'UBL', 'URB', 'UFR'], ['LFU', 'BLU', 'RBU', 'FRU'], ['FUL', 'LUB', 'BUR', 'RUF'], ['DFL', 'DLB', 'DBR', 'DRF'], ['FLD', 'LBD', 'BRD', 'RFD'], ['LDF', 'BDL', 'RDB', 'FDR']]
    const Z_CYCLES = [['U', 'R', 'D', 'L'], ['ULF', 'RUF', 'DRF', 'LDF'], ['LFU', 'UFR', 'RFD', 'DFL'], ['FUL', 'FRU', 'FDR', 'FLD'], ['UBL', 'RBU', 'DBR', 'LBD'], ['BLU', 'BUR', 'BRD', 'BDL'], ['LUB', 'URB', 'RDB', 'DLB']]

    switch (move) {
      case 'R': cyclesSQ(this.stickers, R_CYCLES, true); break
      case "R'": cyclesSQ(this.stickers, R_CYCLES, false); break
      case 'F': cyclesSQ(this.stickers, F_CYCLES, true); break
      case "F'": cyclesSQ(this.stickers, F_CYCLES, false); break
      case 'y': cyclesSQ(this.stickers, Y_CYCLES, true); break
      case 'y2':
      case "y2'": cyclesSQ(this.stickers, Y_CYCLES, true); cyclesSQ(this.stickers, Y_CYCLES, true); break
      case "y'": cyclesSQ(this.stickers, Y_CYCLES, false); break
      case 'z': cyclesSQ(this.stickers, Z_CYCLES, true); break
      case 'z2':
      case "z2'": cyclesSQ(this.stickers, Z_CYCLES, true); cyclesSQ(this.stickers, Z_CYCLES, true); break
      case "z'": cyclesSQ(this.stickers, Z_CYCLES, false); break
    }
  }

  performAlg(alg: string) {
    alg = alg.replaceAll('(', '').replaceAll(')', '')
    alg.split(' ').forEach((move) => this.performMove(move))
  }

  getSvg(): string {
    const colors = ['var(--u-face)', 'var(--f-face)', 'var(--r-face)', 'var(--b-face)', 'var(--l-face)', 'var(--d-face)', '#808080']

    return `<svg id='svg' viewBox='0 0 1000 1000' stroke='black' stroke-width='8' stroke-linejoin='round'>
      <polygon fill="${colors[this.stickers['U']]}" points="500,250 750,500 500,750 250,500" />
      <polygon fill="${colors[this.stickers['UBL']]}" points="250,250 500,250 250,500" />
      <polygon fill="${colors[this.stickers['URB']]}" points="750,250 500,250 750,500" />
      <polygon fill="${colors[this.stickers['UFR']]}" points="750,500 500,750 750,750" />
      <polygon fill="${colors[this.stickers['ULF']]}" points="250,500 500,750 250,750" />
      <polygon fill="${colors[this.stickers['FUL']]}" points="250,750 500,750 250,995" />
      <polygon fill="${colors[this.stickers['F']]}" points="500,750 750,995 250,995" />
      <polygon fill="${colors[this.stickers['FRU']]}" points="750,750 500,750 750,995" />
      <polygon fill="${colors[this.stickers['RUF']]}" points="750,750 750,500 990,750" />
      <polygon fill="${colors[this.stickers['R']]}" points="990,750 990,250 750,500" />
      <polygon fill="${colors[this.stickers['RBU']]}" points="750,250 750,500 990,250" />
      <polygon fill="${colors[this.stickers['BLU']]}" points="250,250 500,250 250,10" />
      <polygon fill="${colors[this.stickers['B']]}" points="500,250 250,10 750,10" />
      <polygon fill="${colors[this.stickers['BUR']]}" points="750,250 500,250 750,10" />
      <polygon fill="${colors[this.stickers['LFU']]}" points="250,750 250,500 10,750" />
      <polygon fill="${colors[this.stickers['L']]}" points="10,750 10,250 250,500" />
      <polygon fill="${colors[this.stickers['LUB']]}" points="250,250 250,500 10,250" />
    </svg>`
  }
}
