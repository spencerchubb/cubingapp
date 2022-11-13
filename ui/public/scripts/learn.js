(() => {
  // ui/src/scripts/colors.ts
  var WHITE = [1, 1, 1, 1];
  var GRAY = [0.5, 0.5, 0.5, 1];
  var YELLOW = [1, 1, 0, 1];
  var DULL_YELLOW = [0.5, 0.5, 0, 1];
  var GREEN = [0, 1, 0, 1];
  var DULL_GREEN = [0, 0.5, 0, 1];
  var BLUE = [0, 0, 1, 1];
  var DULL_BLUE = [0, 0, 0.5, 1];
  var ORANGE = [1, 0.5, 0, 1];
  var DULL_ORANGE = [0.5, 0.25, 0, 1];
  var RED = [1, 0, 0, 1];
  var BLACK = [0, 0, 0, 1];

  // ui/src/scripts/buffers.ts
  function createBuffers(gl3, cube, showBody2, transformMatrix) {
    let allPositions = showBody2 ? _concatPositions(cube, 1.01, 0.02) : _concatPositions(cube, 1.02, 0.04);
    let allNoGapPositions = _concatPositions(cube, 1, 0);
    let allHintPositions = _concatPositions(cube, 1.5, 0.02);
    const objects = Array(cube.numOfStickers);
    for (let i = 0; i < cube.numOfStickers; i++) {
      let object = {
        positionBuffer: gl3.createBuffer(),
        noGapPositionBuffer: gl3.createBuffer(),
        hintPositionBuffer: gl3.createBuffer(),
        indexBuffer: gl3.createBuffer(),
        cart2d: [],
        positions: null
      };
      let positions = Array(12);
      let noGapPos = Array(12);
      let hintPos = Array(12);
      for (let j = 0; j < 12; j++) {
        let index = i * 12 + j;
        positions[j] = allPositions[index];
        noGapPos[j] = allNoGapPositions[index];
        hintPos[j] = allHintPositions[index];
      }
      gl3.bindBuffer(gl3.ARRAY_BUFFER, object.positionBuffer);
      gl3.bufferData(gl3.ARRAY_BUFFER, new Float32Array(positions), gl3.STATIC_DRAW);
      object.positions = positions;
      gl3.bindBuffer(gl3.ARRAY_BUFFER, object.noGapPositionBuffer);
      gl3.bufferData(gl3.ARRAY_BUFFER, new Float32Array(noGapPos), gl3.STATIC_DRAW);
      gl3.bindBuffer(gl3.ARRAY_BUFFER, object.hintPositionBuffer);
      gl3.bufferData(gl3.ARRAY_BUFFER, new Float32Array(hintPos), gl3.STATIC_DRAW);
      if (transformMatrix) {
        const homo = [
          ...multiply(
            transformMatrix,
            [noGapPos[0], noGapPos[1], noGapPos[2], 1]
          ),
          ...multiply(
            transformMatrix,
            [noGapPos[3], noGapPos[4], noGapPos[5], 1]
          ),
          ...multiply(
            transformMatrix,
            [noGapPos[6], noGapPos[7], noGapPos[8], 1]
          ),
          ...multiply(
            transformMatrix,
            [noGapPos[9], noGapPos[10], noGapPos[11], 1]
          )
        ];
        object.cart2d = [
          homo[0] / homo[3],
          homo[1] / homo[3],
          homo[4] / homo[7],
          homo[5] / homo[7],
          homo[8] / homo[11],
          homo[9] / homo[11],
          homo[12] / homo[15],
          homo[13] / homo[15]
        ];
      }
      const indices = [0, 1, 2, 0, 2, 3];
      gl3.bindBuffer(gl3.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
      gl3.bufferData(gl3.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl3.STATIC_DRAW);
      objects[i] = object;
    }
    return objects;
  }
  function multiply(a, b) {
    const out = Array(4);
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a[0] + b1 * a[4] + b2 * a[8] + b3 * a[12];
    out[1] = b0 * a[1] + b1 * a[5] + b2 * a[9] + b3 * a[13];
    out[2] = b0 * a[2] + b1 * a[6] + b2 * a[10] + b3 * a[14];
    out[3] = b0 * a[3] + b1 * a[7] + b2 * a[11] + b3 * a[15];
    return out;
  }
  function _concatPositions(cube, radius, gap) {
    return [
      ..._topFace(cube, 1, radius, gap),
      ..._frontFace(cube, 0, radius, gap),
      ..._bottomFace(cube, 1, -radius, gap),
      ..._backFace(cube, 0, -radius, gap),
      ..._leftFace(cube, 2, -radius, gap),
      ..._rightFace(cube, 2, radius, gap)
    ];
  }
  function _topFace(cube, a, n, gap) {
    let coords = [];
    if (cube.layersEven) {
      for (let i = 0; i < cube.layers; i++) {
        for (let j = 0; j < cube.layers; j++) {
          const a2 = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const b = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords.push([a2, b, n]);
        }
      }
    } else {
      for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
        for (let j = -cube.layersHalf; j <= cube.layersHalf; j++) {
          coords.push([2 * j / cube.layers, 2 * i / cube.layers, n]);
        }
      }
    }
    return _concatStickers(cube, coords, a, gap);
  }
  function _frontFace(cube, a, n, gap) {
    let coords = [];
    if (cube.layersEven) {
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const a2 = -1 + 1 / cube.layers + i * 2 / cube.layers;
          const b = -1 + 1 / cube.layers + j * 2 / cube.layers;
          coords.push([a2, b, n]);
        }
      }
    } else {
      for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
        for (let j = cube.layersHalf; j >= -cube.layersHalf; j--) {
          coords.push([2 * i / cube.layers, 2 * j / cube.layers, n]);
        }
      }
    }
    return _concatStickers(cube, coords, a, gap);
  }
  function _bottomFace(cube, a, n, gap) {
    let coords = [];
    if (cube.layersEven) {
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const a2 = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const b = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords.push([a2, b, n]);
        }
      }
    } else {
      for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
        for (let j = cube.layersHalf; j >= -cube.layersHalf; j--) {
          coords.push([2 * j / cube.layers, 2 * i / cube.layers, n]);
        }
      }
    }
    return _concatStickers(cube, coords, a, gap);
  }
  function _backFace(cube, a, n, gap) {
    let coords = [];
    if (cube.layersEven) {
      for (let i = 0; i < cube.layers; i++) {
        for (let j = 0; j < cube.layers; j++) {
          const a2 = -1 + 1 / cube.layers + i * 2 / cube.layers;
          const b = -1 + 1 / cube.layers + j * 2 / cube.layers;
          coords.push([a2, b, n]);
        }
      }
    } else {
      for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
        for (let j = -cube.layersHalf; j <= cube.layersHalf; j++) {
          coords.push([2 * i / cube.layers, 2 * j / cube.layers, n]);
        }
      }
    }
    return _concatStickers(cube, coords, a, gap);
  }
  function _leftFace(cube, a, n, gap) {
    let coords = [];
    if (cube.layersEven) {
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const a2 = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const b = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords.push([a2, b, n]);
        }
      }
    } else {
      for (let i = -cube.layersHalf; i <= cube.layersHalf; i++) {
        for (let j = cube.layersHalf; j >= -cube.layersHalf; j--) {
          coords.push([2 * j / cube.layers, 2 * i / cube.layers, n]);
        }
      }
    }
    return _concatStickers(cube, coords, a, gap);
  }
  function _rightFace(cube, a, n, gap) {
    let coords = [];
    if (cube.layersEven) {
      for (let i = cube.layers - 1; i >= 0; i--) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const a2 = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const b = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords.push([a2, b, n]);
        }
      }
    } else {
      for (let i = cube.layersHalf; i >= -cube.layersHalf; i--) {
        for (let j = cube.layersHalf; j >= -cube.layersHalf; j--) {
          coords.push([2 * j / cube.layers, 2 * i / cube.layers, n]);
        }
      }
    }
    return _concatStickers(cube, coords, a, gap);
  }
  function _concatStickers(cube, coords, a, gap) {
    let out = [];
    for (let i = 0; i < cube.layersSq; i++) {
      const temp = coords[i];
      out = out.concat(_sticker(cube, a, temp[0], temp[1], temp[2], gap));
    }
    return out;
  }
  function _sticker(cube, a, x, y, n, gap) {
    const s = 1 / cube.layers - gap;
    const coords = [
      [x - s, y - s, n],
      [x + s, y - s, n],
      [x + s, y + s, n],
      [x - s, y + s, n]
    ];
    let out = [];
    const numOfVerticesInSquare = 4;
    const numOfDimensions = 3;
    for (let i = 0; i < numOfVerticesInSquare; i++) {
      const temp = coords[i];
      let appendage = [];
      for (let i2 = 0; i2 < numOfDimensions; i2++) {
        appendage.push(temp[(a + i2) % 3]);
      }
      out = out.concat(appendage);
    }
    return out;
  }

  // ui/src/scripts/common/spring.ts
  var k = 100;
  var f = 15;
  var Spring = class {
    constructor() {
      this.position = 0;
      this._velocity = 200;
      this._acceleration = 0;
      this.target = 0;
    }
    update(dt) {
      const springF = -k * (this.position - this.target);
      const dampingF = -f * this._velocity;
      this._acceleration = springF + dampingF;
      this._velocity += this._acceleration * dt;
      this.position += this._velocity * dt;
    }
  };

  // ui/src/scripts/pieceIndices.ts
  var CENTERS = [4, 13, 22, 31, 40, 49];
  var UBL = [0, 29, 36];
  var URB = [6, 35, 51];
  var ULF = [2, 9, 42];
  var UFR = [8, 15, 45];
  var DFL = [18, 11, 44];
  var DRF = [24, 47, 17];
  var DLB = [20, 38, 27];
  var DBR = [26, 33, 53];
  var UB = [3, 32];
  var UL = [1, 39];
  var UR = [7, 48];
  var UF = [5, 12];
  var FL = [10, 43];
  var FR = [16, 46];
  var DF = [21, 14];
  var DL = [19, 41];
  var DR = [25, 50];
  var DB = [23, 30];
  var BL = [28, 37];
  var BR = [34, 52];
  var layer1Corners = [...UBL, ...URB, ...ULF, ...UFR];
  var layer2Corners = [...DFL, ...DRF, ...DLB, ...DBR];
  var layer1Edges = [...UB, ...UL, ...UR, ...UF];
  var layer2Edges = [...FL, ...FR, ...BL, ...BR];
  var layer3Edges = [...DF, ...DL, ...DR, ...DB];
  var cross = [...CENTERS, ...layer1Edges];
  var firstLayer = [...cross, ...layer1Corners];
  var f2l = [...firstLayer, ...layer2Edges];
  var lastLayer = [...layer3Edges, ...layer2Corners];
  var allPieces = [...f2l, ...lastLayer];

  // ui/src/scripts/common/rand.ts
  function randInt(int) {
    return Math.floor(Math.random() * int);
  }

  // ui/src/scripts/util.ts
  function shuffle(array) {
    let i = array.length;
    while (i != 0) {
      let r = randInt(i);
      i--;
      let temp = array[r];
      array[r] = array[i];
      array[i] = temp;
    }
    return array;
  }

  // ui/src/scripts/scramble.ts
  var U = 0;
  var F = 1;
  var D = 2;
  var B = 3;
  var L = 4;
  var R = 5;
  var corners = [
    [U, B, L],
    [U, R, B],
    [U, L, F],
    [U, F, R],
    [D, F, L],
    [D, R, F],
    [D, L, B],
    [D, B, R]
  ];
  var edges = [
    [U, B],
    [U, L],
    [U, R],
    [U, F],
    [F, L],
    [F, R],
    [D, F],
    [D, L],
    [D, R],
    [D, B],
    [B, L],
    [B, R]
  ];
  function scramble3x3(cube) {
    let eo = orientation(12, 2);
    let co = orientation(8, 3);
    let cp = permutation(8);
    let ep = permutation(12);
    while (permutationParity(cp) !== permutationParity(ep)) {
      cp = permutation(8);
    }
    const stickers = Array(54);
    for (let i = 0; i < 6; i++) {
      const center = cube.center(i);
      stickers[center] = i;
    }
    let uCorners = cube.corners(0, 0);
    let fCorners = cube.corners(1, 0);
    let dCorners = cube.corners(2, 0);
    let bCorners = cube.corners(3, 0);
    let lCorners = cube.corners(4, 0);
    let rCorners = cube.corners(5, 0);
    const fill4C = (cIndices, c1, c2, c3, c4, co1, co2, co3, co4) => {
      const corner = (ci, o) => corners[cp[ci]][(co[ci] + o) % 3];
      stickers[cIndices.topLeft] = corner(c1, co1);
      stickers[cIndices.topRight] = corner(c2, co2);
      stickers[cIndices.bottomLeft] = corner(c3, co3);
      stickers[cIndices.bottomRight] = corner(c4, co4);
    };
    fill4C(uCorners, 0, 1, 2, 3, 0, 0, 0, 0);
    fill4C(fCorners, 2, 3, 4, 5, 2, 1, 1, 2);
    fill4C(dCorners, 4, 5, 6, 7, 0, 0, 0, 0);
    fill4C(bCorners, 6, 7, 0, 1, 2, 1, 1, 2);
    fill4C(lCorners, 0, 2, 6, 4, 2, 1, 1, 2);
    fill4C(rCorners, 3, 1, 5, 7, 2, 1, 1, 2);
    let uEdges = cube.edges(0, 0, 0);
    let fEdges = cube.edges(1, 0, 0);
    let dEdges = cube.edges(2, 0, 0);
    let bEdges = cube.edges(3, 0, 0);
    let lEdges = cube.edges(4, 0, 0);
    let rEdges = cube.edges(5, 0, 0);
    const fill4E = (eIndices, e1, e2, e3, e4, eo1, eo2, eo3, eo4) => {
      const edge = (ei, o) => edges[ep[ei]][(eo[ei] + o) % 2];
      stickers[eIndices.top] = edge(e1, eo1);
      stickers[eIndices.left] = edge(e2, eo2);
      stickers[eIndices.right] = edge(e3, eo3);
      stickers[eIndices.bottom] = edge(e4, eo4);
    };
    fill4E(uEdges, 0, 1, 2, 3, 0, 0, 0, 0);
    fill4E(fEdges, 3, 4, 5, 6, 1, 0, 0, 1);
    fill4E(dEdges, 6, 7, 8, 9, 0, 0, 0, 0);
    fill4E(bEdges, 9, 10, 11, 0, 1, 0, 0, 1);
    fill4E(lEdges, 1, 10, 4, 7, 1, 1, 1, 1);
    fill4E(rEdges, 2, 5, 11, 8, 1, 1, 1, 1);
    return stickers;
  }
  function orientation(pieces, orientations) {
    const o = Array(pieces);
    for (let i = 0; i < pieces; i++) {
      o[i] = randInt(orientations);
    }
    while (!orientationValid(o, orientations)) {
      const randPiece = randInt(pieces);
      o[randPiece] = randInt(orientations);
    }
    return o;
  }
  function orientationValid(pieces, orientations) {
    let sum = 0;
    for (let i = 0; i < pieces.length; i++) {
      sum += pieces[i];
    }
    return sum % orientations === 0;
  }
  function permutation(pieces) {
    const p = Array(pieces);
    for (let i = 0; i < pieces; i++) {
      p[i] = i;
    }
    shuffle(p);
    return p;
  }
  function permutationParity(pieces) {
    const cpy = [...pieces];
    let parity = false;
    while (true) {
      if (cpy[0] === 0) {
        const misplaced = cpy.findIndex((value, index) => value !== index);
        if (misplaced === -1) {
          return parity;
        }
        cpy[0] = cpy[misplaced];
        cpy[misplaced] = 0;
        parity = !parity;
      } else {
        const temp = cpy[0];
        cpy[0] = cpy[temp];
        cpy[temp] = temp;
        parity = !parity;
      }
    }
  }

  // ui/src/scripts/cube.ts
  var gl;
  var COLORS = [WHITE, GREEN, YELLOW, BLUE, ORANGE, RED];
  function makeSticker(color, face) {
    const arr = [
      color[0],
      color[1],
      color[2],
      color[3],
      color[0],
      color[1],
      color[2],
      color[3],
      color[0],
      color[1],
      color[2],
      color[3],
      color[0],
      color[1],
      color[2],
      color[3]
    ];
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
    return {
      color,
      face,
      arr,
      buffer
    };
  }
  var CubeLogic = class {
    constructor(_gl, animateTurns) {
      gl = _gl;
      this.animationQueue = [];
      this.animateTurns = animateTurns;
    }
    new() {
      this.axis = 0;
      const state = Array(this.numOfStickers);
      this.underStickers = Array(this.numOfStickers);
      this.hintStickers = Array(this.numOfStickers);
      for (let i = 0; i < this.numOfStickers; i++) {
        state[i] = Math.floor(i / this.layersSq);
        this.underStickers[i] = makeSticker(BLACK, -1);
      }
      this.affectedStickers = Array(this.numOfStickers).fill(false);
    }
    isSolved() {
      let firstOnFace;
      for (let i = 0; i < this.numOfStickers; i++) {
        if (i % this.layersSq === 0) {
          firstOnFace = this.stickers[i].face;
          continue;
        }
        if (firstOnFace !== this.stickers[i].face) {
          return false;
        }
      }
      return true;
    }
    setColors(colors) {
      this.stickers = [];
      for (let i = 0; i < this.numOfStickers; i++) {
        this.setColor(colors[i], i);
      }
    }
    setColor(color, stickerIndex) {
      const sticker = makeSticker(color, Math.floor(stickerIndex / this.layersSq));
      this.stickers[stickerIndex] = sticker;
    }
    scramble() {
      if (this.layers === 3) {
        this.scramble3x3();
        return;
      }
      this.naiveScramble();
    }
    scramble3x3() {
      const colors = scramble3x3(this);
      this.setCubeState(colors);
    }
    naiveScramble() {
      let numTurns = this.layersSq * 10;
      for (let i = 0; i < numTurns; i++) {
        let axis = Math.floor(Math.random() * 3);
        let layer = Math.floor(Math.random() * this.layers);
        let clockwise = Math.floor(Math.random() * 1) == 0;
        this._matchTurn(axis, layer, clockwise);
      }
      this.commitStickers();
    }
    cubleScramble() {
      for (let i = 0; i < 54; i++) {
        if (!CENTERS.includes(i)) {
          gl.bindBuffer(gl.ARRAY_BUFFER, this.stickers[i].buffer);
          const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
        }
      }
    }
    revealCorrectStickers() {
      for (let i = 0; i < 54; i++) {
        if (0 <= i && i <= 8 && this.stickers[i].color == this.stickers[4].color || 9 <= i && i <= 17 && this.stickers[i].color == this.stickers[13].color || 18 <= i && i <= 26 && this.stickers[i].color == this.stickers[22].color || 27 <= i && i <= 35 && this.stickers[i].color == this.stickers[31].color || 36 <= i && i <= 44 && this.stickers[i].color == this.stickers[40].color || 45 <= i && i <= 53 && this.stickers[i].color == this.stickers[49].color) {
          gl.bindBuffer(gl.ARRAY_BUFFER, this.stickers[i].buffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.stickers[i].arr), gl.STATIC_DRAW);
        }
      }
    }
    setNumOfLayers(num) {
      this.layers = num;
      this.layersSq = num * num;
      this.layersHalf = Math.floor(this.layers / 2);
      this.layersEven = this.layers % 2 == 0;
      this.numOfStickers = this.layersSq * 6;
    }
    getCubeState() {
      return this.currentStickers.map((sticker) => sticker.face);
    }
    setCubeState(state) {
      this.stickers = Array(this.numOfStickers);
      for (let i = 0; i < this.numOfStickers; i++) {
        const color = COLORS[state[i]];
        this.stickers[i] = makeSticker(color, state[i]);
      }
      this.commitStickers();
    }
    getStickers() {
      return this.currentStickers;
    }
    commitStickers() {
      this.currentStickers = [...this.stickers];
    }
    resetAffectedStickers() {
      this.affectedStickers = Array(this.numOfStickers).fill(this.layers === 1);
    }
    pushAnimation(axis, clockwise, prevStickers) {
      if (!this.animateTurns)
        return;
      let x = clockwise ? -1 : 1;
      let rotationAxis = [0, 0, 0];
      rotationAxis[axis] = x;
      this.animationQueue.push({
        axis: rotationAxis,
        stickers: prevStickers,
        stickersToAnimate: this.affectedStickers
      });
    }
    turn(axis, layer, clockwise) {
      this.resetAffectedStickers();
      this.pushAnimation(axis, clockwise, [...this.stickers]);
      this._matchTurn(axis, layer, clockwise);
    }
    sliceTurn(axis, clockwise) {
      this.affectedStickers = Array(this.numOfStickers).fill(false);
      this.pushAnimation(axis, clockwise, [...this.stickers]);
      for (let i = 1; i < this.layers - 1; i++) {
        this._matchTurn(axis, i, clockwise);
      }
    }
    wideTurn(axis, layer, clockwise) {
      this.resetAffectedStickers();
      this.pushAnimation(axis, clockwise, [...this.stickers]);
      this._matchTurn(axis, layer, clockwise);
      for (let i = 1; i < this.layers - 1; i++) {
        this._matchTurn(axis, i, clockwise);
      }
    }
    cubeRotate(axis, clockwise) {
      this.resetAffectedStickers();
      this.pushAnimation(axis, clockwise, [...this.stickers]);
      for (let i = 0; i < this.layers; i++) {
        this._matchTurn(axis, i, clockwise);
      }
    }
    _matchTurn(axis, layer, clockwise) {
      if (axis == 0) {
        this._turnXAxis(layer, clockwise);
        if (layer == 0) {
          this._turnOuter(5, clockwise);
        } else if (layer == this.layers - 1) {
          this._turnOuter(4, !clockwise);
        }
      } else if (axis == 1) {
        this._turnYAxis(layer, clockwise);
        if (layer == 0) {
          this._turnOuter(0, clockwise);
        } else if (layer == this.layers - 1) {
          this._turnOuter(2, !clockwise);
        }
      } else if (axis == 2) {
        this._turnZAxis(layer, clockwise);
        if (layer == 0) {
          this._turnOuter(1, clockwise);
        } else if (layer == this.layers - 1) {
          this._turnOuter(3, !clockwise);
        }
      } else {
        console.error(`Axis ${axis} not recognized`);
      }
    }
    _turnXAxis(layer, clockwise) {
      for (let i = 1; i <= this.layers; i++) {
        this._cycle(
          clockwise,
          0 * this.layersSq + this.layersSq - i - layer * this.layers,
          3 * this.layersSq + this.layersSq - i - layer * this.layers,
          2 * this.layersSq + this.layersSq - i - layer * this.layers,
          1 * this.layersSq + this.layersSq - i - layer * this.layers
        );
      }
    }
    _turnYAxis(layer, clockwise) {
      for (let i = 0; i < this.layers; i++) {
        this._cycle(
          clockwise,
          1 * this.layersSq + i * this.layers + layer,
          4 * this.layersSq + i * this.layers + layer,
          3 * this.layersSq + (this.layers - i - 1) * this.layers + (this.layers - 1) - layer,
          5 * this.layersSq + i * this.layers + layer
        );
      }
    }
    _turnZAxis(layer, clockwise) {
      for (let i = 0; i < this.layers; i++) {
        this._cycle(
          clockwise,
          0 * this.layersSq + (i + 1) * this.layers - 1 - layer,
          5 * this.layersSq + i + this.layers * layer,
          2 * this.layersSq + (this.layers - i - 1) * this.layers + layer,
          4 * this.layersSq + this.layersSq - (i + 1) - layer * this.layers
        );
      }
    }
    _turnOuter(face, clockwise) {
      if (this.layers % 2 != 0) {
        let center = this.center(face);
        this.affectedStickers[center] = true;
      }
      for (let i = 0; i < Math.floor(this.layers / 2); i++) {
        const { topLeft, topRight, bottomLeft, bottomRight } = this.corners(face, i);
        this._cycle(clockwise, topLeft, topRight, bottomRight, bottomLeft);
        let numEdges = this.layers - 2 * (i + 1);
        for (let j = 0; j < numEdges; j++) {
          const { top, left, bottom, right } = this.edges(face, i, j);
          this._cycle(clockwise, top, right, bottom, left);
        }
      }
    }
    _cycle(clockwise, i1, i2, i3, i4) {
      this.affectedStickers[i1] = true;
      this.affectedStickers[i2] = true;
      this.affectedStickers[i3] = true;
      this.affectedStickers[i4] = true;
      if (clockwise) {
        this._cycleHelper(i1, i2, i3, i4);
      } else {
        this._cycleHelper(i4, i3, i2, i1);
      }
    }
    _cycleHelper(i1, i2, i3, i4) {
      let temp = this.stickers[i4];
      this.stickers[i4] = this.stickers[i3];
      this.stickers[i3] = this.stickers[i2];
      this.stickers[i2] = this.stickers[i1];
      this.stickers[i1] = temp;
    }
    matchKeyToTurn(event) {
      if (this.disableTurn)
        return;
      if (event.ctrlKey)
        return;
      const code = event.code;
      switch (code) {
        case "KeyN":
          this.cubeRotate(0, true);
          return { notation: "x", rotate: true };
        case "KeyB":
          this.cubeRotate(0, false);
          return { notation: "x'", rotate: true };
        case "Semicolon":
          this.cubeRotate(1, true);
          return { notation: "y", rotate: true };
        case "KeyA":
          this.cubeRotate(1, false);
          return { notation: "y'", rotate: true };
        case "KeyP":
          this.cubeRotate(2, true);
          return { notation: "z", rotate: true };
        case "KeyQ":
          this.cubeRotate(2, false);
          return { notation: "z'", rotate: true };
        case "KeyJ":
          this.turn(1, 0, true);
          return { notation: "U", turn: true };
        case "KeyF":
          this.turn(1, 0, false);
          return { notation: "U'", turn: true };
        case "KeyS":
          this.turn(1, this.layers - 1, false);
          return { notation: "D", turn: true };
        case "KeyL":
          this.turn(1, this.layers - 1, true);
          return { notation: "D'", turn: true };
        case "KeyH":
          this.turn(2, 0, true);
          return { notation: "F", turn: true };
        case "KeyG":
          this.turn(2, 0, false);
          return { notation: "F'", turn: true };
        case "KeyW":
          this.turn(2, this.layers - 1, false);
          return { notation: "B", turn: true };
        case "KeyO":
          this.turn(2, this.layers - 1, true);
          return { notation: "B'", turn: true };
        case "KeyD":
          this.turn(0, this.layers - 1, false);
          return { notation: "L", turn: true };
        case "KeyE":
          this.turn(0, this.layers - 1, true);
          return { notation: "L'", turn: true };
        case "KeyI":
          this.turn(0, 0, true);
          return { notation: "R", turn: true };
        case "KeyK":
          this.turn(0, 0, false);
          return { notation: "R'", turn: true };
        case "BracketLeft":
          this.sliceTurn(0, false);
          return { notation: "M", turn: true };
        case "Quote":
          this.sliceTurn(0, true);
          return { notation: "M'", turn: true };
        case "KeyC":
          this.sliceTurn(1, false);
          return { notation: "E", turn: true };
        case "Comma":
          this.sliceTurn(1, true);
          return { notation: "E'", turn: true };
        case "KeyY":
          this.sliceTurn(2, true);
          return { notation: "S", turn: true };
        case "KeyT":
          this.sliceTurn(2, false);
          return { notation: "S'", turn: true };
        case "KeyU":
          this.wideTurn(0, 0, true);
          return { notation: "r", turn: true };
        case "KeyM":
          this.wideTurn(0, 0, false);
          return { notation: "r'", turn: true };
        case "KeyV":
          this.wideTurn(0, this.layers - 1, false);
          return { notation: "l", turn: true };
        case "KeyR":
          this.wideTurn(0, this.layers - 1, true);
          return { notation: "l'", turn: true };
      }
      return;
    }
    stepAlgorithm(move, forward) {
      switch (move) {
        case "x":
          this.cubeRotate(0, forward);
          break;
        case "x'":
          this.cubeRotate(0, !forward);
          break;
        case "x2":
          this.cubeRotate(0, forward);
          this.cubeRotate(0, forward);
          break;
        case "y":
          this.cubeRotate(1, forward);
          break;
        case "y'":
          this.cubeRotate(1, !forward);
          break;
        case "y2":
          this.cubeRotate(1, forward);
          this.cubeRotate(1, forward);
          break;
        case "z":
          this.cubeRotate(2, forward);
          break;
        case "z'":
          this.cubeRotate(2, !forward);
          break;
        case "z2":
          this.cubeRotate(2, forward);
          this.cubeRotate(2, forward);
          break;
        case "U":
          this.turn(1, 0, forward);
          break;
        case "U'":
          this.turn(1, 0, !forward);
          break;
        case "U2":
        case "U2'":
          this.turn(1, 0, forward);
          this.turn(1, 0, forward);
          break;
        case "D":
          this.turn(1, this.layers - 1, !forward);
          break;
        case "D'":
          this.turn(1, this.layers - 1, forward);
          break;
        case "D2":
          this.turn(1, this.layers - 1, forward);
          this.turn(1, this.layers - 1, forward);
          break;
        case "F":
          this.turn(2, 0, forward);
          break;
        case "F'":
          this.turn(2, 0, !forward);
          break;
        case "F2":
          this.turn(2, 0, forward);
          this.turn(2, 0, forward);
          break;
        case "B":
          this.turn(2, this.layers - 1, !forward);
          break;
        case "B'":
          this.turn(2, this.layers - 1, forward);
          break;
        case "B2":
          this.turn(2, this.layers - 1, forward);
          this.turn(2, this.layers - 1, forward);
          break;
        case "L":
          this.turn(0, this.layers - 1, !forward);
          break;
        case "L'":
          this.turn(0, this.layers - 1, forward);
          break;
        case "L2":
          this.turn(0, this.layers - 1, forward);
          this.turn(0, this.layers - 1, forward);
          break;
        case "l":
          this.wideTurn(0, this.layers - 1, !forward);
          break;
        case "l'":
          this.wideTurn(0, this.layers - 1, forward);
          break;
        case "R":
          this.turn(0, 0, forward);
          break;
        case "R'":
          this.turn(0, 0, !forward);
          break;
        case "R2":
        case "R2'":
          this.turn(0, 0, forward);
          this.turn(0, 0, forward);
          break;
        case "r":
          this.wideTurn(0, 0, forward);
          break;
        case "r'":
          this.wideTurn(0, 0, !forward);
          break;
        case "r2":
        case "r2'":
          this.wideTurn(0, 0, forward);
          this.wideTurn(0, 0, forward);
          break;
        case "M":
          this.turn(0, 1, !forward);
          break;
        case "M'":
          this.turn(0, 1, forward);
          break;
        case "M2":
          this.sliceTurn(0, forward);
          this.sliceTurn(0, forward);
          break;
        case "E":
          this.sliceTurn(1, !forward);
          break;
        case "E'":
          this.sliceTurn(1, forward);
          break;
        case "S":
          this.sliceTurn(2, forward);
          break;
        case "S'":
          this.sliceTurn(2, !forward);
          break;
        default:
          throw new Error("Invalid turn in algorithm: " + move);
      }
    }
    execAlg(alg) {
      if (!alg)
        return;
      let moves = alg.split(" ");
      for (let i = 0; i < moves.length; i++) {
        this.stepAlgorithm(moves[i], true);
      }
      this.animationQueue = [];
    }
    execAlgReverse(alg) {
      if (!alg)
        return;
      let moves = alg.split(" ");
      for (let i = moves.length - 1; i >= 0; i--) {
        this.stepAlgorithm(moves[i], false);
      }
      this.animationQueue = [];
    }
    stickerIsOnFace(sticker, face) {
      return face * this.layersSq <= sticker && sticker < (face + 1) * this.layersSq;
    }
    center(face) {
      return face * this.layersSq + Math.floor(this.layersSq / 2);
    }
    corners(face, layer) {
      const offset = face * this.layersSq;
      return {
        topLeft: offset + (this.layers + 1) * layer,
        topRight: offset + (this.layers - 1) * (this.layers - layer),
        bottomRight: offset + (this.layers + 1) * (this.layers - layer - 1),
        bottomLeft: offset + (this.layers - 1) * (layer + 1)
      };
    }
    edges(face, corner, edge) {
      const corners2 = this.corners(face, corner);
      let numEdges = this.layers - 2 * (corner + 1);
      return {
        top: corners2.topLeft + this.layers * (edge + 1),
        left: corners2.topLeft + (numEdges - edge),
        right: corners2.topRight + edge + 1,
        bottom: corners2.bottomLeft + this.layers * (numEdges - edge)
      };
    }
  };

  // ui/src/scripts/dragDetector.ts
  function xPixelToClip(val, canvasSize) {
    return val / canvasSize * 2 - 1;
  }
  function yPixelToClip(val, canvasSize) {
    return 1 - val / canvasSize * 2;
  }
  function calcSlope(x1, y1, x2, y2) {
    if (x1 < x2) {
      return (y2 - y1) / (x2 - x1);
    }
    return (y1 - y2) / (x1 - x2);
  }
  function areaTriangle(x1, y1, x2, y2, x3, y3) {
    return Math.abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
  }
  function topRow(cube, sticker) {
    return cube.layers - 1 - sticker % cube.layers;
  }
  function topColumn(cube, sticker) {
    return cube.layers - 1 - Math.floor(sticker / cube.layers);
  }
  function frontRow(cube, sticker) {
    return sticker % cube.layers;
  }
  function frontColumn(cube, sticker) {
    return cube.layers - 1 - Math.floor((sticker - cube.layersSq) / cube.layers);
  }
  function leftRow(cube, sticker) {
    return sticker % cube.layers;
  }
  function leftColumn(cube, sticker) {
    return cube.layers - 1 - Math.floor((sticker - 4 * cube.layersSq) / cube.layers);
  }
  function rightRow(cube, sticker) {
    return sticker % cube.layers;
  }
  function rightColumn(cube, sticker) {
    return Math.floor((sticker - 5 * cube.layersSq) / cube.layers);
  }
  var DragDetector = class {
    onPointerDown(x, y, sceneArgs) {
      const { canvas: canvas2, cube, buffers, offsetSelection: offsetSelection2, animateTurn } = sceneArgs;
      this.numOfPointerMoves = 0;
      const clipX = xPixelToClip(x, canvas2.width);
      const clipY = yPixelToClip(y, canvas2.width);
      this.xOnDown = clipX;
      this.yOnDown = clipY;
      [this.stickerOnDown, this.cart2dOnDown] = this._coordinatesToSticker(clipX, clipY, cube, buffers, offsetSelection2);
      const objects = buffers.objects;
      const getXY = (objectIndex, xIndex, yIndex) => ({
        x: objects[objectIndex].cart2d[xIndex],
        y: objects[objectIndex].cart2d[yIndex]
      });
      if (this.stickerOnDown === -1) {
        if (offsetSelection2 === 0) {
          const top = getXY(cube.layers * (cube.layers - 1), 6, 7);
          const topLeft = getXY(0, 0, 1);
          const bottomLeft = getXY(cube.layers * (2 * cube.layers + 1), 0, 1);
          if (clipY > topLeft.y) {
            if (clipX < top.x) {
              cube.cubeRotate(0, true);
              animateTurn();
            } else if (clipX > top.x) {
              cube.cubeRotate(2, true);
              animateTurn();
            }
          } else if (clipY > bottomLeft.y) {
            cube.cubeRotate(1, clipX < bottomLeft.x);
            animateTurn();
          } else {
            if (clipX < top.x) {
              cube.cubeRotate(2, false);
              animateTurn();
            } else if (clipX > top.x) {
              cube.cubeRotate(0, false);
              animateTurn();
            }
          }
        } else if (offsetSelection2 === 1) {
          const topLeft = getXY(0, 0, 1);
          const topRight = getXY(cube.layers * (cube.layers - 1), 6, 7);
          const left = getXY(cube.layers - 1, 2, 3);
          const right = getXY(cube.layersSq - 1, 4, 5);
          const bottomLeft = getXY(cube.layers * (cube.layers + 1) - 1, 0, 1);
          const bottomRight = getXY(cube.layersSq * 2 - 1, 2, 3);
          if (clipY > topLeft.y && clipX > topLeft.x && clipX < topRight.x) {
            cube.cubeRotate(0, true);
            animateTurn();
          } else if (clipX < topLeft.x && clipY > left.y && clipY < topLeft.y) {
            cube.cubeRotate(2, false);
            animateTurn();
          } else if (clipX > topRight.x && clipY > right.y && clipY < topRight.y) {
            cube.cubeRotate(2, true);
            animateTurn();
          } else if (clipX < bottomLeft.x && clipY > bottomLeft.y && clipY < left.y) {
            cube.cubeRotate(1, true);
            animateTurn();
          } else if (clipX > bottomRight.x && clipY > bottomRight.y && clipY < right.y) {
            cube.cubeRotate(1, false);
            animateTurn();
          } else if (clipY < bottomLeft.y && clipX > bottomLeft.x && clipX < bottomRight.x) {
            cube.cubeRotate(0, false);
            animateTurn();
          }
        } else if (offsetSelection2 === 2) {
          const top = getXY(0, 0, 1);
          const topLeft = getXY(cube.layers - 1, 2, 3);
          const bottomLeft = getXY(cube.layers * (cube.layers + 1) - 1, 0, 1);
          if (clipY > topLeft.y) {
            if (clipX < top.x) {
              cube.cubeRotate(2, false);
              animateTurn();
            } else if (clipX > top.x) {
              cube.cubeRotate(0, true);
              animateTurn();
            }
          } else if (clipY > bottomLeft.y) {
            cube.cubeRotate(1, clipX < bottomLeft.x);
            animateTurn();
          } else {
            if (clipX < top.x) {
              cube.cubeRotate(0, false);
              animateTurn();
            } else if (clipX > top.x) {
              cube.cubeRotate(2, true);
              animateTurn();
            }
          }
        }
      }
    }
    onPointerMove(x, y) {
      this.numOfPointerMoves++;
      this.xOnMove = x;
      this.yOnMove = y;
    }
    onPointerUp(sceneArgs) {
      if (this.numOfPointerMoves < 2)
        return;
      const { canvas: canvas2, cube, buffers, offsetSelection: offsetSelection2, animateTurn } = sceneArgs;
      let posSlope, negSlope;
      if (this.stickerOnDown !== -1) {
        posSlope = calcSlope(this.cart2dOnDown[0], this.cart2dOnDown[1], this.cart2dOnDown[4], this.cart2dOnDown[5]);
        negSlope = calcSlope(this.cart2dOnDown[2], this.cart2dOnDown[3], this.cart2dOnDown[6], this.cart2dOnDown[7]);
        if (posSlope < 0) {
          const temp = posSlope;
          posSlope = negSlope;
          negSlope = temp;
        }
      }
      const xClip = xPixelToClip(this.xOnMove, canvas2.width);
      const yClip = yPixelToClip(this.yOnMove, canvas2.width);
      const slope = calcSlope(xClip, yClip, this.xOnDown, this.yOnDown);
      const [stickerOnUp, _] = this._coordinatesToSticker(xClip, yClip, cube, buffers, offsetSelection2);
      if (offsetSelection2 === 0) {
        if (cube.stickerIsOnFace(this.stickerOnDown, 0)) {
          if (cube.stickerIsOnFace(stickerOnUp, 1)) {
            cube.turn(0, topColumn(cube, this.stickerOnDown), false);
          } else if (cube.stickerIsOnFace(stickerOnUp, 4)) {
            cube.turn(2, topRow(cube, this.stickerOnDown), false);
          } else if (slope < 0) {
            cube.turn(0, topColumn(cube, this.stickerOnDown), this.xOnDown > xClip);
          } else {
            cube.turn(2, topRow(cube, this.stickerOnDown), this.xOnDown < xClip);
          }
        } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
          if (cube.stickerIsOnFace(stickerOnUp, 0)) {
            cube.turn(0, frontColumn(cube, this.stickerOnDown), true);
          } else if (cube.stickerIsOnFace(stickerOnUp, 4)) {
            cube.turn(1, frontRow(cube, this.stickerOnDown), true);
          } else if (xClip === this.xOnDown) {
            cube.turn(0, frontColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube.turn(1, frontRow(cube, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        } else if (cube.stickerIsOnFace(this.stickerOnDown, 4)) {
          if (cube.stickerIsOnFace(stickerOnUp, 0)) {
            cube.turn(2, leftColumn(cube, this.stickerOnDown), true);
          } else if (cube.stickerIsOnFace(stickerOnUp, 1)) {
            cube.turn(1, leftRow(cube, this.stickerOnDown), false);
          } else if (xClip === this.xOnDown) {
            cube.turn(2, leftColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube.turn(2, leftColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube.turn(2, leftColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube.turn(1, leftRow(cube, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        }
      } else if (offsetSelection2 === 1) {
        if (cube.stickerIsOnFace(this.stickerOnDown, 0)) {
          if (xClip === this.xOnDown) {
            cube.turn(0, topColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube.turn(0, topColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube.turn(0, topColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube.turn(2, topRow(cube, this.stickerOnDown), xClip > this.xOnDown);
            }
          }
        } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
          if (xClip === this.xOnDown) {
            cube.turn(0, frontColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube.turn(1, frontRow(cube, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        }
      } else if (offsetSelection2 === 2) {
        if (cube.stickerIsOnFace(this.stickerOnDown, 0)) {
          if (cube.stickerIsOnFace(stickerOnUp, 1)) {
            cube.turn(0, topColumn(cube, this.stickerOnDown), false);
          } else if (cube.stickerIsOnFace(stickerOnUp, 5)) {
            cube.turn(2, topRow(cube, this.stickerOnDown), true);
          } else if (slope < 0) {
            cube.turn(2, topRow(cube, this.stickerOnDown), this.xOnDown < xClip);
          } else {
            cube.turn(0, topColumn(cube, this.stickerOnDown), this.xOnDown < xClip);
          }
        } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
          if (cube.stickerIsOnFace(stickerOnUp, 0)) {
            cube.turn(0, frontColumn(cube, this.stickerOnDown), true);
          } else if (cube.stickerIsOnFace(stickerOnUp, 5)) {
            cube.turn(1, frontRow(cube, this.stickerOnDown), false);
          } else if (xClip === this.xOnDown) {
            cube.turn(0, frontColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube.turn(1, frontRow(cube, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        } else if (cube.stickerIsOnFace(this.stickerOnDown, 5)) {
          if (cube.stickerIsOnFace(stickerOnUp, 0)) {
            cube.turn(2, rightColumn(cube, this.stickerOnDown), false);
          } else if (cube.stickerIsOnFace(stickerOnUp, 1)) {
            cube.turn(1, rightRow(cube, this.stickerOnDown), true);
          } else if (xClip === this.xOnDown) {
            cube.turn(2, rightColumn(cube, this.stickerOnDown), yClip < this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube.turn(2, rightColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
            } else if (slope < negSlope) {
              cube.turn(2, rightColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
            } else {
              cube.turn(1, rightRow(cube, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        }
      }
      animateTurn();
    }
    _coordinatesToSticker(x, y, cube, buffers, offsetSelection2) {
      const coordinateIsInSticker = (i) => {
        if (!buffers[i].cart2d)
          return;
        const cart2d = buffers[i].cart2d;
        const areaQuadrilateral = areaTriangle(cart2d[0], cart2d[1], cart2d[2], cart2d[3], cart2d[4], cart2d[5]) + areaTriangle(cart2d[0], cart2d[1], cart2d[4], cart2d[5], cart2d[6], cart2d[7]);
        const sumAreaTriangles = areaTriangle(x, y, cart2d[0], cart2d[1], cart2d[2], cart2d[3]) + areaTriangle(x, y, cart2d[2], cart2d[3], cart2d[4], cart2d[5]) + areaTriangle(x, y, cart2d[4], cart2d[5], cart2d[6], cart2d[7]) + areaTriangle(x, y, cart2d[6], cart2d[7], cart2d[0], cart2d[1]);
        const EPSILON = 1e-5;
        if (Math.abs(areaQuadrilateral - sumAreaTriangles) < EPSILON) {
          return [
            i,
            cart2d
          ];
        }
        return void 0;
      };
      for (let i = 0; i < 2 * cube.layersSq; i++) {
        const output = coordinateIsInSticker(i);
        if (output)
          return output;
      }
      if (offsetSelection2 === 1)
        return [-1, void 0];
      if (offsetSelection2 === 0) {
        for (let i = 4 * cube.layersSq; i < 5 * cube.layersSq; i++) {
          const output = coordinateIsInSticker(i);
          if (output)
            return output;
        }
      }
      if (offsetSelection2 === 2) {
        for (let i = 5 * cube.layersSq; i < 6 * cube.layersSq; i++) {
          const output = coordinateIsInSticker(i);
          if (output)
            return output;
        }
      }
      return [-1, void 0];
    }
  };

  // ui/src/scripts/glMatrix.ts
  function create() {
    return [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  function perspective(out, fovy, aspect, near, far) {
    const f2 = 1 / Math.tan(fovy / 2);
    out[0] = f2 / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f2;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      const nf = 1 / (near - far);
      out[10] = (far + near) * nf;
      out[14] = 2 * far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -2 * near;
    }
    return out;
  }
  function rotate(out, a, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2], len = 1 / Math.hypot(x, y, z);
    x *= len;
    y *= len;
    z *= len;
    let s = Math.sin(rad), c = Math.cos(rad), t = 1 - c, a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    return out;
  }
  function translate(m, v) {
    let x = v[0], y = v[1], z = v[2];
    m[12] += m[0] * x + m[4] * y + m[7] * z;
    m[13] += m[1] * x + m[5] * y + m[8] * z;
    m[14] += m[2] * x + m[5] * y + m[9] * z;
    m[15] += m[3] * x + m[6] * y + m[10] * z;
    return m;
  }

  // ui/src/scripts/scene.ts
  var canvas = document.querySelector("canvas");
  var gl2 = canvas.getContext("webgl");
  var programInfo = initPrograms();
  var scenes = [];
  var time = Date.now() * 1e-3;
  var numLayers = 3;
  var offsetSelection = 1;
  var hintStickers = true;
  var showBody = true;
  var loopStarted = false;
  function startLoop() {
    if (loopStarted)
      return;
    loopStarted = true;
    requestAnimationFrame(render);
  }
  function newScene(selector) {
    let div = document.querySelector(selector);
    let cube = new CubeLogic(gl2, true);
    let spring = new Spring();
    let transformMatrix = initTransform(div);
    let dragDetector = new DragDetector();
    cube.setNumOfLayers(numLayers);
    cube.new();
    let buffers = createBuffers(gl2, cube, true, transformMatrix);
    let sceneObj = {
      div,
      cube,
      spring,
      buffers,
      transformMatrix,
      dragDetector
    };
    scenes.push(sceneObj);
    return sceneObj;
  }
  function initPrograms() {
    const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uTransformMatrix;
    varying lowp vec4 vColor;
    void main(void) {
        gl_Position = uTransformMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
    `;
    const fragmentShaderSource = `
    varying lowp vec4 vColor;
    void main(void) {
        gl_FragColor = vColor;
    }
    `;
    const shaderProgram = initShaderProgram(gl2, vertexShaderSource, fragmentShaderSource);
    gl2.useProgram(shaderProgram);
    return {
      attribLocations: {
        vertexPosition: gl2.getAttribLocation(shaderProgram, "aVertexPosition"),
        vertexColor: gl2.getAttribLocation(shaderProgram, "aVertexColor")
      },
      uniformLocations: {
        transformMatrix: gl2.getUniformLocation(shaderProgram, "uTransformMatrix")
      }
    };
  }
  function initTransform(element) {
    const xOpts = [35, 45, 35];
    const yOpts = [-45, 0, 45];
    let xAxis = xOpts[offsetSelection] * Math.PI / 180;
    let yAxis = yOpts[offsetSelection] * Math.PI / 180;
    let transformMatrix = create();
    perspective(
      transformMatrix,
      50 * Math.PI / 180,
      element.clientWidth / element.clientHeight,
      0.1,
      100
    );
    translate(
      transformMatrix,
      [0, 0, -5]
    );
    rotate(
      transformMatrix,
      transformMatrix,
      xAxis,
      [1, 0, 0]
    );
    rotate(
      transformMatrix,
      transformMatrix,
      yAxis,
      [0, -1, 0]
    );
    return transformMatrix;
  }
  function bindPosition(positionBuffer, programInfo2, gl3) {
    gl3.bindBuffer(gl3.ARRAY_BUFFER, positionBuffer);
    gl3.vertexAttribPointer(
      programInfo2.attribLocations.vertexPosition,
      3,
      gl3.FLOAT,
      false,
      0,
      0
    );
    gl3.enableVertexAttribArray(
      programInfo2.attribLocations.vertexPosition
    );
  }
  function bindColor(colorBuffer, programInfo2, gl3) {
    gl3.bindBuffer(gl3.ARRAY_BUFFER, colorBuffer);
    gl3.vertexAttribPointer(
      programInfo2.attribLocations.vertexColor,
      4,
      gl3.FLOAT,
      false,
      0,
      0
    );
    gl3.enableVertexAttribArray(
      programInfo2.attribLocations.vertexColor
    );
  }
  function drawElements(gl3) {
    gl3.drawElements(
      gl3.TRIANGLES,
      6,
      gl3.UNSIGNED_SHORT,
      0
    );
  }
  function initShaderProgram(gl3, vsSource, fsSource) {
    const vertexShader = loadShader(gl3, gl3.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl3, gl3.FRAGMENT_SHADER, fsSource);
    const shaderProgram = gl3.createProgram();
    gl3.attachShader(shaderProgram, vertexShader);
    gl3.attachShader(shaderProgram, fragmentShader);
    gl3.linkProgram(shaderProgram);
    if (!gl3.getProgramParameter(shaderProgram, gl3.LINK_STATUS)) {
      alert("Unable to initialize the shader program: " + gl3.getProgramInfoLog(shaderProgram));
      return null;
    }
    return shaderProgram;
  }
  function loadShader(gl3, type, source) {
    const shader = gl3.createShader(type);
    gl3.shaderSource(shader, source);
    gl3.compileShader(shader);
    if (!gl3.getShaderParameter(shader, gl3.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl3.getShaderInfoLog(shader));
      gl3.deleteShader(shader);
      return null;
    }
    return shader;
  }
  function resizeCanvasToDisplaySize() {
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;
    const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;
    if (needResize) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }
    return needResize;
  }
  function render(newTime) {
    newTime *= 1e-3;
    const dt = newTime - time;
    time = newTime;
    resizeCanvasToDisplaySize();
    gl2.enable(gl2.DEPTH_TEST);
    gl2.enable(gl2.SCISSOR_TEST);
    gl2.depthFunc(gl2.LEQUAL);
    gl2.clear(gl2.COLOR_BUFFER_BIT | gl2.DEPTH_BUFFER_BIT);
    canvas.style.transform = `translateY(${window.scrollY}px)`;
    for (let i = 0; i < scenes.length; i++) {
      const { cube, div, spring, buffers, transformMatrix, dragDetector } = scenes[i];
      const rect = div.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > canvas.clientHeight || rect.right < 0 || rect.left > canvas.clientWidth) {
        continue;
      }
      const width = rect.right - rect.left;
      const height = rect.bottom - rect.top;
      const left = rect.left;
      const bottom = canvas.clientHeight - rect.bottom;
      gl2.viewport(left, bottom, width, height);
      gl2.scissor(left, bottom, width, height);
      if (cube.animationQueue[0]) {
        spring.target = cube.animationQueue.length * 90;
        spring.update(dt);
        if (spring.position >= 90) {
          cube.affectedStickers = Array(cube.numOfStickers).fill(false);
          cube.commitStickers();
          spring.position = 0;
          cube.animationQueue.shift();
        }
      }
      const animation = cube.animationQueue[0];
      let listToShow = animation ? animation.stickers : cube.stickers;
      const underStickers = cube.underStickers;
      for (let i2 = 0; i2 < cube.numOfStickers; i2++) {
        let object = buffers[i2];
        const m = animation && animation.stickersToAnimate[i2] ? rotate(
          create(),
          transformMatrix,
          spring.position * Math.PI / 180,
          animation.axis
        ) : transformMatrix;
        gl2.uniformMatrix4fv(
          programInfo.uniformLocations.transformMatrix,
          false,
          m
        );
        gl2.bindBuffer(gl2.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
        if (showBody) {
          bindPosition(object.noGapPositionBuffer, programInfo, gl2);
          bindColor(underStickers[i2].buffer, programInfo, gl2);
          drawElements(gl2);
        }
        bindPosition(object.positionBuffer, programInfo, gl2);
        bindColor(listToShow[i2].buffer, programInfo, gl2);
        drawElements(gl2);
      }
      if (hintStickers) {
        gl2.uniformMatrix4fv(
          programInfo.uniformLocations.transformMatrix,
          false,
          transformMatrix
        );
        const drawHints = (starti, endi) => {
          for (let j = starti; j < endi; j++) {
            let object = buffers[j];
            bindPosition(object.hintPositionBuffer, programInfo, gl2);
            bindColor(listToShow[j].buffer, programInfo, gl2);
            drawElements(gl2);
          }
        };
        if (offsetSelection === 0) {
          drawHints(2 * cube.layersSq, 4 * cube.layersSq);
          drawHints(5 * cube.layersSq, cube.numOfStickers);
        } else if (offsetSelection === 1) {
          drawHints(2 * cube.layersSq, cube.numOfStickers);
        } else if (offsetSelection === 2) {
          drawHints(2 * cube.layersSq, 5 * cube.layersSq);
        }
      }
    }
    requestAnimationFrame(render);
  }

  // ui/src/scripts/ui.ts
  function addListenersForLeftModal() {
    const drawer = document.querySelector(".slideRight");
    let isOpen = false;
    function updateDrawer(open2) {
      isOpen = open2;
      if (isOpen) {
        drawer.classList.add("slideRightOpen");
        return;
      }
      drawer.classList.remove("slideRightOpen");
    }
    document.addEventListener("click", (event) => {
      const ele = event.target;
      if (ele === document.querySelector("#menu")) {
        updateDrawer(true);
        return;
      }
      if (isOpen && !ele.closest(".slideRight")) {
        updateDrawer(false);
      }
    });
    document.querySelector("#closeMenu").addEventListener("click", () => {
      updateDrawer(false);
    });
    document.querySelector("#learnButton").addEventListener("click", () => {
      document.location.href = "learn.html";
    });
    document.querySelector("#playButton").addEventListener("click", () => {
      document.location.href = "play.html";
    });
    document.querySelector("#trainButton").addEventListener("click", () => {
      document.location.href = "train.html";
    });
    document.querySelector("#cubleButton").addEventListener("click", () => {
      document.location.href = "cuble.html";
    });
  }

  // ui/src/scripts/slide.ts
  var NARROW = 725;
  var opened = false;
  function open(ele) {
    opened = true;
    ele.style.display = "flex";
    ele.classList.add("slideLeftOpen");
    if (document.documentElement.clientWidth < NARROW) {
      ele.classList.add("slideLeftClosed");
    } else {
      ele.classList.remove("slideLeftClosed");
    }
  }
  function close(ele) {
    opened = false;
    if (document.documentElement.clientWidth < NARROW) {
      ele.classList.add("slideLeftClosed");
      ele.classList.remove("slideLeftOpen");
      ele.style.display = "flex";
    } else {
      ele.style.display = "none";
    }
  }
  function toggle(ele) {
    if (opened) {
      close(ele);
    } else {
      open(ele);
    }
  }

  // ui/src/scripts/learn.ts
  function parseMovesFromAlg(alg) {
    return (alg || "").split(" ");
  }
  function main() {
    addListenersForLeftModal();
    const lessons = [
      {
        setup: "",
        algorithm: "x x x x y y y y",
        activeStickers: CENTERS,
        move: 0
      },
      {
        setup: "",
        algorithm: "x x x x y y y y",
        activeStickers: [...layer1Corners, ...layer2Corners],
        move: 0
      },
      {
        setup: "",
        algorithm: "x x x x y y y y",
        activeStickers: [...layer1Edges, ...layer2Edges, ...layer3Edges],
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F'",
        algorithm: "y y y y",
        activeStickers: cross,
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F D y x",
        algorithm: "x' y' D' F F",
        activeStickers: cross,
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R F'",
        algorithm: "R' D' R F F",
        activeStickers: cross,
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R F' F'",
        algorithm: "F",
        activeStickers: cross,
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R",
        algorithm: "F'",
        activeStickers: cross,
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z",
        algorithm: "U'",
        activeStickers: [...cross, ...ULF],
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z L' U U L",
        algorithm: "R U R' U'",
        activeStickers: [...cross, ...ULF],
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z U'",
        algorithm: "R U R' U' R U R' U' R U R' U' R U R' U' R U R' U'",
        activeStickers: [...cross, ...ULF],
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z U' R U R' U' R U R' U' R U R' U'",
        algorithm: "R U R' U' R U R' U'",
        activeStickers: [...cross, ...ULF],
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B L' U' L U L' U' L",
        algorithm: "U",
        activeStickers: [...firstLayer, ...FR],
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B L' U' L U L' U' L U",
        algorithm: "U' L' U L y' U R U' R'",
        activeStickers: [...firstLayer, ...FR],
        move: 0
      },
      {
        setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B F U' F' U F U' F'",
        algorithm: "U R U' R' y U' L' U L",
        activeStickers: [...firstLayer, ...FL],
        move: 0
      },
      {
        setup: "z z R' L L F F L L F' L L F' L L F' R U F R U' R' F'",
        algorithm: "F R U R' U' F'",
        activeStickers: [...f2l, ...layer3Edges],
        move: 0
      },
      {
        setup: "z z L L F D D B' R R B D D B' F' U U R' U R U B U L L U",
        algorithm: "F U R U' R' F'",
        activeStickers: [...f2l, ...layer3Edges],
        move: 0
      },
      {
        setup: "z z B' L L F' D F' D R F' D D L L B' R R U U L L D D F F L L",
        algorithm: "F R U R' U' F' U U F U R U' R' F'",
        activeStickers: [...f2l, ...layer3Edges],
        move: 0
      },
      {
        setup: "z z R U R' U' D R R U' R U' R' U R' U R R D' R U U R' U' R U' R'",
        algorithm: "R U R' U R U U R'",
        activeStickers: allPieces,
        move: 0
      },
      {
        setup: "z z R U R' U' D R R U' R U' R' U R' U R R D' R U R' U R U U R' U U",
        algorithm: "R U R' U R U U R' U U R U R' U R U U R'",
        activeStickers: allPieces,
        move: 0
      },
      {
        setup: "z z R U R' U' D R R U' R U' R' U R' U R R D' F R' F' L F R F' L'",
        algorithm: "R U R' U R U U R' U R U R' U R U U R' U U R U R' U R U U R'",
        activeStickers: allPieces,
        move: 0
      },
      {
        setup: "z z R U R' U' D R R U' R U' R' U R' U R R D' U'",
        algorithm: "U R U R' F' R U R' U' R' F R R U' R'",
        activeStickers: allPieces,
        move: 0
      },
      {
        setup: "z z F R U' R' U' R U R' F' R U R' U' R' F R F'",
        algorithm: "R U R' F' R U R' U' R' F R R U' R'",
        activeStickers: allPieces,
        move: 0
      },
      {
        setup: "z z M M U' M' U U M U' M M",
        algorithm: "U U U U M' M' U M' U U M U M' M'",
        activeStickers: allPieces,
        move: 0
      },
      {
        setup: "z z M M U M M U U M M U M M",
        algorithm: "U U U U M' M' U M' U U M U M' M'",
        activeStickers: allPieces,
        move: 0
      }
    ];
    function renderLesson(i) {
      const scene = newScene(`#scene${i}`);
      const cube = scene.cube;
      lessons[i].cube = cube;
      const lesson = lessons[i];
      const colors = Array(54);
      let brights = [WHITE, GREEN, YELLOW, BLUE, ORANGE, RED];
      lesson.activeStickers.forEach((i2) => {
        colors[i2] = brights[Math.floor(i2 / 9)];
      });
      let dulls = [GRAY, DULL_GREEN, DULL_YELLOW, DULL_BLUE, DULL_ORANGE, DULL_ORANGE];
      for (let i2 = 0; i2 < 54; i2++) {
        if (colors[i2])
          continue;
        colors[i2] = dulls[Math.floor(i2 / 9)];
      }
      cube.setColors(colors);
      updateMoveCounter(i);
      const setup = lesson.setup;
      cube.execAlg(setup);
      cube.commitStickers();
    }
    const lessonNavigator = document.querySelector("#lessonNavigator");
    lessonNavigator.addEventListener("click", (event) => {
      const target = event.target;
      if (target.className === "lesson-p") {
        const lessonIndex = parseInt(target.getAttribute("lesson-index"));
        renderLesson(lessonIndex);
        if (document.documentElement.clientWidth < NARROW) {
          close(lessonNavigator);
        }
      }
    });
    function updateMoveCounter(lessonIndex) {
      const lesson = lessons[lessonIndex];
      const moveCounter = document.querySelector(`#moveCounter${lessonIndex}`);
      const parsedAlg = parseMovesFromAlg(lesson.algorithm);
      moveCounter.textContent = `${lesson.move} / ${parsedAlg.length}`;
    }
    for (let i = 0; i < lessons.length; i++) {
      renderLesson(i);
    }
    startLoop();
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target.id.startsWith("leftButton")) {
        const lessonIndex = parseInt(target.id.substring(10));
        const lesson = lessons[lessonIndex];
        if (lesson.move <= 0)
          return;
        lesson.move--;
        const moves = parseMovesFromAlg(lesson.algorithm);
        lesson.cube.stepAlgorithm(moves[lesson.move], false);
        updateMoveCounter(lessonIndex);
      } else if (target.id.startsWith("rightButton")) {
        const lessonIndex = parseInt(target.id.substring(11));
        const lesson = lessons[lessonIndex];
        const moves = parseMovesFromAlg(lesson.algorithm);
        if (lesson.move >= moves.length)
          return;
        lesson.cube.stepAlgorithm(moves[lesson.move], true);
        lesson.move++;
        updateMoveCounter(lessonIndex);
      }
    });
    document.querySelector("#openClose").addEventListener("click", (event) => {
      toggle(lessonNavigator);
    });
    renderBasedOnWidth();
  }
  window.addEventListener("resize", () => {
    renderBasedOnWidth();
  });
  function renderBasedOnWidth() {
    const openClose = document.querySelector("#openClose");
    const drawerEle = document.querySelector("#lessonNavigator");
    if (document.documentElement.clientWidth < NARROW) {
      openClose.style.display = "inline-block";
      close(drawerEle);
      return;
    }
    openClose.style.display = "none";
    open(drawerEle);
  }
  main();
})();
//# sourceMappingURL=learn.js.map
