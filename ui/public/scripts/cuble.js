(() => {
  // ui/src/scripts/buffers.ts
  function multiply(a, b) {
    const out = Array(4);
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a[0] + b1 * a[4] + b2 * a[8] + b3 * a[12];
    out[1] = b0 * a[1] + b1 * a[5] + b2 * a[9] + b3 * a[13];
    out[2] = b0 * a[2] + b1 * a[6] + b2 * a[10] + b3 * a[14];
    out[3] = b0 * a[3] + b1 * a[7] + b2 * a[11] + b3 * a[15];
    return out;
  }
  var Buffers = class {
    constructor(gl3) {
      this.gl = gl3;
    }
    initBufferData(cube2, showBody3, transformMatrix2) {
      this.cube = cube2;
      let allPositions = showBody3 ? this._concatPositions(1.01, 0.02) : this._concatPositions(1.02, 0.04);
      let allNoGapPositions = this._concatPositions(1, 0);
      let allHintPositions = this._concatPositions(1.5, 0.02);
      this.objects = [];
      for (let i = 0; i < this.cube.numOfStickers; i++) {
        let object = {};
        let positions = [];
        let noGapPos = [];
        let hintPos = [];
        for (let j = 0; j < 12; j++) {
          let index = i * 12 + j;
          positions.push(allPositions[index]);
          noGapPos.push(allNoGapPositions[index]);
          hintPos.push(allHintPositions[index]);
        }
        object.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
        object.noGapPositionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.noGapPositionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(noGapPos), this.gl.STATIC_DRAW);
        object.hintPositionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, object.hintPositionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(hintPos), this.gl.STATIC_DRAW);
        if (transformMatrix2) {
          const homo = [
            ...multiply(
              transformMatrix2,
              [noGapPos[0], noGapPos[1], noGapPos[2], 1]
            ),
            ...multiply(
              transformMatrix2,
              [noGapPos[3], noGapPos[4], noGapPos[5], 1]
            ),
            ...multiply(
              transformMatrix2,
              [noGapPos[6], noGapPos[7], noGapPos[8], 1]
            ),
            ...multiply(
              transformMatrix2,
              [noGapPos[9], noGapPos[10], noGapPos[11], 1]
            )
          ];
          const cart2d = [
            homo[0] / homo[3],
            homo[1] / homo[3],
            homo[4] / homo[7],
            homo[5] / homo[7],
            homo[8] / homo[11],
            homo[9] / homo[11],
            homo[12] / homo[15],
            homo[13] / homo[15]
          ];
          object.cart2d = cart2d;
        }
        const indices = [0, 1, 2, 0, 2, 3];
        object.indexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
        this.objects.push(object);
      }
    }
    _concatPositions(radius, gap) {
      return [
        ...this._topFace(1, radius, gap),
        ...this._frontFace(0, radius, gap),
        ...this._bottomFace(1, -radius, gap),
        ...this._backFace(0, -radius, gap),
        ...this._leftFace(2, -radius, gap),
        ...this._rightFace(2, radius, gap)
      ];
    }
    _topFace(a, n, gap) {
      let coords = [];
      if (this.cube.layersEven) {
        for (let i = 0; i < this.cube.layers; i++) {
          for (let j = 0; j < this.cube.layers; j++) {
            const a2 = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
            const b = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
            coords.push([a2, b, n]);
          }
        }
      } else {
        for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
          for (let j = -this.cube.layersHalf; j <= this.cube.layersHalf; j++) {
            coords.push([2 * j / this.cube.layers, 2 * i / this.cube.layers, n]);
          }
        }
      }
      return this._concatStickers(coords, a, gap);
    }
    _frontFace(a, n, gap) {
      let coords = [];
      if (this.cube.layersEven) {
        for (let i = 0; i < this.cube.layers; i++) {
          for (let j = this.cube.layers - 1; j >= 0; j--) {
            const a2 = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
            const b = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
            coords.push([a2, b, n]);
          }
        }
      } else {
        for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
          for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
            coords.push([2 * i / this.cube.layers, 2 * j / this.cube.layers, n]);
          }
        }
      }
      return this._concatStickers(coords, a, gap);
    }
    _bottomFace(a, n, gap) {
      let coords = [];
      if (this.cube.layersEven) {
        for (let i = 0; i < this.cube.layers; i++) {
          for (let j = this.cube.layers - 1; j >= 0; j--) {
            const a2 = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
            const b = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
            coords.push([a2, b, n]);
          }
        }
      } else {
        for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
          for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
            coords.push([2 * j / this.cube.layers, 2 * i / this.cube.layers, n]);
          }
        }
      }
      return this._concatStickers(coords, a, gap);
    }
    _backFace(a, n, gap) {
      let coords = [];
      if (this.cube.layersEven) {
        for (let i = 0; i < this.cube.layers; i++) {
          for (let j = 0; j < this.cube.layers; j++) {
            const a2 = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
            const b = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
            coords.push([a2, b, n]);
          }
        }
      } else {
        for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
          for (let j = -this.cube.layersHalf; j <= this.cube.layersHalf; j++) {
            coords.push([2 * i / this.cube.layers, 2 * j / this.cube.layers, n]);
          }
        }
      }
      return this._concatStickers(coords, a, gap);
    }
    _leftFace(a, n, gap) {
      let coords = [];
      if (this.cube.layersEven) {
        for (let i = 0; i < this.cube.layers; i++) {
          for (let j = this.cube.layers - 1; j >= 0; j--) {
            const a2 = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
            const b = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
            coords.push([a2, b, n]);
          }
        }
      } else {
        for (let i = -this.cube.layersHalf; i <= this.cube.layersHalf; i++) {
          for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
            coords.push([2 * j / this.cube.layers, 2 * i / this.cube.layers, n]);
          }
        }
      }
      return this._concatStickers(coords, a, gap);
    }
    _rightFace(a, n, gap) {
      let coords = [];
      if (this.cube.layersEven) {
        for (let i = this.cube.layers - 1; i >= 0; i--) {
          for (let j = this.cube.layers - 1; j >= 0; j--) {
            const a2 = -1 + 1 / this.cube.layers + j * 2 / this.cube.layers;
            const b = -1 + 1 / this.cube.layers + i * 2 / this.cube.layers;
            coords.push([a2, b, n]);
          }
        }
      } else {
        for (let i = this.cube.layersHalf; i >= -this.cube.layersHalf; i--) {
          for (let j = this.cube.layersHalf; j >= -this.cube.layersHalf; j--) {
            coords.push([2 * j / this.cube.layers, 2 * i / this.cube.layers, n]);
          }
        }
      }
      return this._concatStickers(coords, a, gap);
    }
    _concatStickers(coords, a, gap) {
      let out = [];
      for (let i = 0; i < this.cube.layersSq; i++) {
        const temp = coords[i];
        out = out.concat(this._sticker(a, temp[0], temp[1], temp[2], gap));
      }
      return out;
    }
    _sticker(a, x, y, n, gap) {
      const s = 1 / this.cube.layers - gap;
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
  };

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
      dt /= 1e3;
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
  var crossPieces = [
    ...UB,
    ...UL,
    ...UR,
    ...UF,
    ...CENTERS
  ];
  var firstLayerPieces = [
    ...crossPieces,
    ...UBL,
    ...URB,
    ...ULF,
    ...UFR
  ];
  var f2lPieces = [
    ...firstLayerPieces,
    ...FL,
    ...FR,
    ...BL,
    ...BR
  ];
  var lastLayerEdges = [
    ...DF,
    ...DL,
    ...DR,
    ...DB
  ];
  var lastLayerPieces = [
    ...lastLayerEdges,
    ...DFL,
    ...DRF,
    ...DLB,
    ...DBR
  ];
  var allPieces = [
    ...f2lPieces,
    ...lastLayerPieces
  ];

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
  function scramble3x3(cube2) {
    let eo = orientation(12, 2);
    let co = orientation(8, 3);
    let cp = permutation(8);
    let ep = permutation(12);
    while (permutationParity(cp) !== permutationParity(ep)) {
      cp = permutation(8);
    }
    const stickers = Array(54);
    for (let i = 0; i < 6; i++) {
      const center = cube2.center(i);
      stickers[center] = i;
    }
    let uCorners = cube2.corners(0, 0);
    let fCorners = cube2.corners(1, 0);
    let dCorners = cube2.corners(2, 0);
    let bCorners = cube2.corners(3, 0);
    let lCorners = cube2.corners(4, 0);
    let rCorners = cube2.corners(5, 0);
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
    let uEdges = cube2.edges(0, 0, 0);
    let fEdges = cube2.edges(1, 0, 0);
    let dEdges = cube2.edges(2, 0, 0);
    let bEdges = cube2.edges(3, 0, 0);
    let lEdges = cube2.edges(4, 0, 0);
    let rEdges = cube2.edges(5, 0, 0);
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
  var WHITE = {
    active: [1, 1, 1, 1],
    inactive: [0.5, 0.5, 0.5, 1]
  };
  var YELLOW = {
    active: [1, 1, 0, 1],
    inactive: [0.5, 0.5, 0, 1]
  };
  var GREEN = {
    active: [0, 1, 0, 1],
    inactive: [0, 0.5, 0, 1]
  };
  var BLUE = {
    active: [0, 0, 1, 1],
    inactive: [0, 0, 0.5, 1]
  };
  var ORANGE = {
    active: [1, 0.5, 0, 1],
    inactive: [0.5, 0.25, 0, 1]
  };
  var RED = {
    active: [1, 0, 0, 1],
    inactive: [0.5, 0, 0, 1]
  };
  var BLACK = {
    active: [0, 0, 0, 1],
    inactive: [0, 0, 0, 1]
  };
  var COLORS = [WHITE, GREEN, YELLOW, BLUE, ORANGE, RED];
  var repeatColorFor4Vertices = (rgba, color, face) => {
    const arr = [
      rgba[0],
      rgba[1],
      rgba[2],
      rgba[3],
      rgba[0],
      rgba[1],
      rgba[2],
      rgba[3],
      rgba[0],
      rgba[1],
      rgba[2],
      rgba[3],
      rgba[0],
      rgba[1],
      rgba[2],
      rgba[3]
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
  };
  var CubeLogic = class {
    constructor(_gl, animateTurns3) {
      gl = _gl;
      this.animationQueue = [];
      this.animateTurns = animateTurns3;
    }
    new() {
      this.axis = 0;
      if (!this.activeStickers) {
        this.activeStickers = [];
      }
      const state = Array(this.numOfStickers);
      this.underStickers = Array(this.numOfStickers);
      this.hintStickers = Array(this.numOfStickers);
      for (let i = 0; i < this.numOfStickers; i++) {
        state[i] = Math.floor(i / this.layersSq);
        this.underStickers[i] = repeatColorFor4Vertices(BLACK.active, BLACK, -1);
      }
      this.setCubeState(state);
      this.setAllAffectedStickers(false);
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
        this.stickers[i] = repeatColorFor4Vertices(color.active, color, state[i]);
      }
      this.commitStickers();
    }
    getStickers() {
      return this.currentStickers;
    }
    commitStickers() {
      this.currentStickers = [...this.stickers];
    }
    getUnderStickers() {
      return this.underStickers;
    }
    getAffectedStickers() {
      return this.affectedStickers;
    }
    setAllAffectedStickers(value) {
      this.affectedStickers = Array(this.numOfStickers);
      for (let i = 0; i < this.numOfStickers; i++) {
        this.affectedStickers[i] = value;
      }
    }
    resetAffectedStickers() {
      this.setAllAffectedStickers(this.layers === 1);
    }
    setActiveStickers(arr) {
      this.activeStickers = arr;
    }
    setDisableTurn(val) {
      this.disableTurn = val;
    }
    activateAllStickers() {
      this.activeStickers = [];
      for (let i = 0; i < this.numOfStickers; i++) {
        this.activeStickers.push(i);
      }
    }
    shiftAnimation() {
      return this.animationQueue.shift();
    }
    pushAnimation(axis, clockwise, prevStickers) {
      if (!this.animateTurns)
        return;
      let x = clockwise ? -1 : 1;
      let rotationAxis;
      if (axis == 0) {
        rotationAxis = [x, 0, 0];
      } else if (axis == 1) {
        rotationAxis = [0, x, 0];
      } else if (axis == 2) {
        rotationAxis = [0, 0, x];
      } else {
        console.error(`Invalid axis '${axis}'`);
      }
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
      this.setAllAffectedStickers(false);
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
  function topRow(cube2, sticker) {
    return cube2.layers - 1 - sticker % cube2.layers;
  }
  function topColumn(cube2, sticker) {
    return cube2.layers - 1 - Math.floor(sticker / cube2.layers);
  }
  function frontRow(cube2, sticker) {
    return sticker % cube2.layers;
  }
  function frontColumn(cube2, sticker) {
    return cube2.layers - 1 - Math.floor((sticker - cube2.layersSq) / cube2.layers);
  }
  function leftRow(cube2, sticker) {
    return sticker % cube2.layers;
  }
  function leftColumn(cube2, sticker) {
    return cube2.layers - 1 - Math.floor((sticker - 4 * cube2.layersSq) / cube2.layers);
  }
  function rightRow(cube2, sticker) {
    return sticker % cube2.layers;
  }
  function rightColumn(cube2, sticker) {
    return Math.floor((sticker - 5 * cube2.layersSq) / cube2.layers);
  }
  var DragDetector = class {
    onPointerDown(x, y, sceneArgs) {
      const { canvas: canvas2, cube: cube2, buffers: buffers2, offsetSelection: offsetSelection2, animateTurn: animateTurn2 } = sceneArgs;
      this.numOfPointerMoves = 0;
      const clipX = xPixelToClip(x, canvas2.width);
      const clipY = yPixelToClip(y, canvas2.width);
      this.xOnDown = clipX;
      this.yOnDown = clipY;
      [this.stickerOnDown, this.cart2dOnDown] = this._coordinatesToSticker(clipX, clipY, cube2, buffers2, offsetSelection2);
      const objects = buffers2.objects;
      const getXY = (objectIndex, xIndex, yIndex) => ({
        x: objects[objectIndex].cart2d[xIndex],
        y: objects[objectIndex].cart2d[yIndex]
      });
      if (this.stickerOnDown === -1) {
        if (offsetSelection2 === 0) {
          const top = getXY(cube2.layers * (cube2.layers - 1), 6, 7);
          const topLeft = getXY(0, 0, 1);
          const bottomLeft = getXY(cube2.layers * (2 * cube2.layers + 1), 0, 1);
          if (clipY > topLeft.y) {
            if (clipX < top.x) {
              cube2.cubeRotate(0, true);
              animateTurn2();
            } else if (clipX > top.x) {
              cube2.cubeRotate(2, true);
              animateTurn2();
            }
          } else if (clipY > bottomLeft.y) {
            cube2.cubeRotate(1, clipX < bottomLeft.x);
            animateTurn2();
          } else {
            if (clipX < top.x) {
              cube2.cubeRotate(2, false);
              animateTurn2();
            } else if (clipX > top.x) {
              cube2.cubeRotate(0, false);
              animateTurn2();
            }
          }
        } else if (offsetSelection2 === 1) {
          const topLeft = getXY(0, 0, 1);
          const topRight = getXY(cube2.layers * (cube2.layers - 1), 6, 7);
          const left = getXY(cube2.layers - 1, 2, 3);
          const right = getXY(cube2.layersSq - 1, 4, 5);
          const bottomLeft = getXY(cube2.layers * (cube2.layers + 1) - 1, 0, 1);
          const bottomRight = getXY(cube2.layersSq * 2 - 1, 2, 3);
          if (clipY > topLeft.y && clipX > topLeft.x && clipX < topRight.x) {
            cube2.cubeRotate(0, true);
            animateTurn2();
          } else if (clipX < topLeft.x && clipY > left.y && clipY < topLeft.y) {
            cube2.cubeRotate(2, false);
            animateTurn2();
          } else if (clipX > topRight.x && clipY > right.y && clipY < topRight.y) {
            cube2.cubeRotate(2, true);
            animateTurn2();
          } else if (clipX < bottomLeft.x && clipY > bottomLeft.y && clipY < left.y) {
            cube2.cubeRotate(1, true);
            animateTurn2();
          } else if (clipX > bottomRight.x && clipY > bottomRight.y && clipY < right.y) {
            cube2.cubeRotate(1, false);
            animateTurn2();
          } else if (clipY < bottomLeft.y && clipX > bottomLeft.x && clipX < bottomRight.x) {
            cube2.cubeRotate(0, false);
            animateTurn2();
          }
        } else if (offsetSelection2 === 2) {
          const top = getXY(0, 0, 1);
          const topLeft = getXY(cube2.layers - 1, 2, 3);
          const bottomLeft = getXY(cube2.layers * (cube2.layers + 1) - 1, 0, 1);
          if (clipY > topLeft.y) {
            if (clipX < top.x) {
              cube2.cubeRotate(2, false);
              animateTurn2();
            } else if (clipX > top.x) {
              cube2.cubeRotate(0, true);
              animateTurn2();
            }
          } else if (clipY > bottomLeft.y) {
            cube2.cubeRotate(1, clipX < bottomLeft.x);
            animateTurn2();
          } else {
            if (clipX < top.x) {
              cube2.cubeRotate(0, false);
              animateTurn2();
            } else if (clipX > top.x) {
              cube2.cubeRotate(2, true);
              animateTurn2();
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
      const { canvas: canvas2, cube: cube2, buffers: buffers2, offsetSelection: offsetSelection2, animateTurn: animateTurn2 } = sceneArgs;
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
      const [stickerOnUp, _] = this._coordinatesToSticker(xClip, yClip, cube2, buffers2, offsetSelection2);
      if (offsetSelection2 === 0) {
        if (cube2.stickerIsOnFace(this.stickerOnDown, 0)) {
          if (cube2.stickerIsOnFace(stickerOnUp, 1)) {
            cube2.turn(0, topColumn(cube2, this.stickerOnDown), false);
          } else if (cube2.stickerIsOnFace(stickerOnUp, 4)) {
            cube2.turn(2, topRow(cube2, this.stickerOnDown), false);
          } else if (slope < 0) {
            cube2.turn(0, topColumn(cube2, this.stickerOnDown), this.xOnDown > xClip);
          } else {
            cube2.turn(2, topRow(cube2, this.stickerOnDown), this.xOnDown < xClip);
          }
        } else if (cube2.stickerIsOnFace(this.stickerOnDown, 1)) {
          if (cube2.stickerIsOnFace(stickerOnUp, 0)) {
            cube2.turn(0, frontColumn(cube2, this.stickerOnDown), true);
          } else if (cube2.stickerIsOnFace(stickerOnUp, 4)) {
            cube2.turn(1, frontRow(cube2, this.stickerOnDown), true);
          } else if (xClip === this.xOnDown) {
            cube2.turn(0, frontColumn(cube2, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube2.turn(0, frontColumn(cube2, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube2.turn(0, frontColumn(cube2, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube2.turn(1, frontRow(cube2, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        } else if (cube2.stickerIsOnFace(this.stickerOnDown, 4)) {
          if (cube2.stickerIsOnFace(stickerOnUp, 0)) {
            cube2.turn(2, leftColumn(cube2, this.stickerOnDown), true);
          } else if (cube2.stickerIsOnFace(stickerOnUp, 1)) {
            cube2.turn(1, leftRow(cube2, this.stickerOnDown), false);
          } else if (xClip === this.xOnDown) {
            cube2.turn(2, leftColumn(cube2, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube2.turn(2, leftColumn(cube2, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube2.turn(2, leftColumn(cube2, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube2.turn(1, leftRow(cube2, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        }
      } else if (offsetSelection2 === 1) {
        if (cube2.stickerIsOnFace(this.stickerOnDown, 0)) {
          if (xClip === this.xOnDown) {
            cube2.turn(0, topColumn(cube2, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube2.turn(0, topColumn(cube2, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube2.turn(0, topColumn(cube2, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube2.turn(2, topRow(cube2, this.stickerOnDown), xClip > this.xOnDown);
            }
          }
        } else if (cube2.stickerIsOnFace(this.stickerOnDown, 1)) {
          if (xClip === this.xOnDown) {
            cube2.turn(0, frontColumn(cube2, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube2.turn(0, frontColumn(cube2, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube2.turn(0, frontColumn(cube2, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube2.turn(1, frontRow(cube2, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        }
      } else if (offsetSelection2 === 2) {
        if (cube2.stickerIsOnFace(this.stickerOnDown, 0)) {
          if (cube2.stickerIsOnFace(stickerOnUp, 1)) {
            cube2.turn(0, topColumn(cube2, this.stickerOnDown), false);
          } else if (cube2.stickerIsOnFace(stickerOnUp, 5)) {
            cube2.turn(2, topRow(cube2, this.stickerOnDown), true);
          } else if (slope < 0) {
            cube2.turn(2, topRow(cube2, this.stickerOnDown), this.xOnDown < xClip);
          } else {
            cube2.turn(0, topColumn(cube2, this.stickerOnDown), this.xOnDown < xClip);
          }
        } else if (cube2.stickerIsOnFace(this.stickerOnDown, 1)) {
          if (cube2.stickerIsOnFace(stickerOnUp, 0)) {
            cube2.turn(0, frontColumn(cube2, this.stickerOnDown), true);
          } else if (cube2.stickerIsOnFace(stickerOnUp, 5)) {
            cube2.turn(1, frontRow(cube2, this.stickerOnDown), false);
          } else if (xClip === this.xOnDown) {
            cube2.turn(0, frontColumn(cube2, this.stickerOnDown), yClip > this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube2.turn(0, frontColumn(cube2, this.stickerOnDown), xClip > this.xOnDown);
            } else if (slope < negSlope) {
              cube2.turn(0, frontColumn(cube2, this.stickerOnDown), xClip < this.xOnDown);
            } else {
              cube2.turn(1, frontRow(cube2, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        } else if (cube2.stickerIsOnFace(this.stickerOnDown, 5)) {
          if (cube2.stickerIsOnFace(stickerOnUp, 0)) {
            cube2.turn(2, rightColumn(cube2, this.stickerOnDown), false);
          } else if (cube2.stickerIsOnFace(stickerOnUp, 1)) {
            cube2.turn(1, rightRow(cube2, this.stickerOnDown), true);
          } else if (xClip === this.xOnDown) {
            cube2.turn(2, rightColumn(cube2, this.stickerOnDown), yClip < this.yOnDown);
          } else {
            if (slope > posSlope) {
              cube2.turn(2, rightColumn(cube2, this.stickerOnDown), xClip < this.xOnDown);
            } else if (slope < negSlope) {
              cube2.turn(2, rightColumn(cube2, this.stickerOnDown), xClip > this.xOnDown);
            } else {
              cube2.turn(1, rightRow(cube2, this.stickerOnDown), xClip < this.xOnDown);
            }
          }
        }
      }
      animateTurn2();
    }
    _coordinatesToSticker(x, y, cube2, buffers2, offsetSelection2) {
      const coordinateIsInSticker = (i) => {
        if (!buffers2.objects[i].cart2d)
          return;
        const cart2d = buffers2.objects[i].cart2d;
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
      for (let i = 0; i < 2 * cube2.layersSq; i++) {
        const output = coordinateIsInSticker(i);
        if (output)
          return output;
      }
      if (offsetSelection2 === 1)
        return [-1, void 0];
      if (offsetSelection2 === 0) {
        for (let i = 4 * cube2.layersSq; i < 5 * cube2.layersSq; i++) {
          const output = coordinateIsInSticker(i);
          if (output)
            return output;
        }
      }
      if (offsetSelection2 === 2) {
        for (let i = 5 * cube2.layersSq; i < 6 * cube2.layersSq; i++) {
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
  }
  function rotate(out, a, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2], len = Math.hypot(x, y, z);
    len = 1 / len;
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
  }
  function translate(m, v) {
    let x = v[0], y = v[1], z = v[2];
    m[12] += m[0] * x + m[4] * y + m[7] * z;
    m[13] += m[1] * x + m[5] * y + m[8] * z;
    m[14] += m[2] * x + m[5] * y + m[9] * z;
    m[15] += m[3] * x + m[6] * y + m[10] * z;
  }

  // ui/src/scripts/store.ts
  var angle = "angle";
  var animateTurns = "animateTurns";
  var hintStickers = "hintStickers";
  var showBody = "showBody";
  var size = "size";
  function getAngle() {
    var _a;
    return (_a = getInt(angle)) != null ? _a : 1;
  }
  function getHintStickers() {
    var _a;
    return (_a = getBool(hintStickers)) != null ? _a : true;
  }
  function getShowBody() {
    var _a;
    return (_a = getBool(showBody)) != null ? _a : true;
  }
  function getSize() {
    var _a;
    return (_a = getFloat(size)) != null ? _a : 1;
  }
  function getAnimateTurns() {
    var _a;
    return (_a = getBool(animateTurns)) != null ? _a : true;
  }
  function getBool(key) {
    const value = localStorage.getItem(key);
    if (value === null)
      return null;
    return value == "1";
  }
  function getInt(key) {
    const value = localStorage.getItem(key);
    if (value === null)
      return null;
    return parseInt(value);
  }
  function getFloat(key) {
    const value = localStorage.getItem(key);
    if (value === null)
      return null;
    return parseFloat(value);
  }

  // ui/src/scripts/scene.ts
  var canvas;
  var gl2;
  var buffers;
  var cube;
  var dragDetector;
  var programInfo;
  var transformMatrix;
  var prefsLoaded = false;
  var numLayers = 3;
  var dragEnabled = true;
  var spring = new Spring();
  var isTurning = false;
  var time = Date.now();
  var animation;
  var sizeMultiplier;
  var offsetSelection;
  var hintStickers2;
  var showBody2;
  var animateTurns2;
  function loadPrefs() {
    if (prefsLoaded)
      return;
    prefsLoaded = true;
    sizeMultiplier = getSize();
    offsetSelection = getAngle();
    hintStickers2 = getHintStickers();
    showBody2 = getShowBody();
    animateTurns2 = getAnimateTurns();
  }
  function setNumLayers(val) {
    numLayers = val;
    renderCanvas();
  }
  function animateTurn() {
    if (!animateTurns2) {
      cube.commitStickers();
      drawScene();
      return;
    }
    if (isTurning) {
      return;
    }
    animation = cube.shiftAnimation();
    if (animation) {
      isTurning = true;
      spring.position = 0;
      time = Date.now();
      render();
    }
  }
  function render() {
    if (numLayers === 0) {
      renderZeroEasterEgg();
      return;
    }
    requestAnimationFrame(() => {
      updateScene();
      drawScene();
    });
  }
  function updateScene() {
    if (!isTurning) {
      return;
    }
    const newTime = Date.now();
    const dt = newTime - time;
    time = newTime;
    spring.target = (cube.animationQueue.length + 1) * 90;
    spring.update(dt);
    if (spring.position >= 90) {
      cube.setAllAffectedStickers(false);
      cube.commitStickers();
      isTurning = false;
      animateTurn();
    }
    render();
  }
  function renderCanvas() {
    loadPrefs();
    canvas = document.createElement("canvas");
    canvas.id = "glCanvas";
    canvas.style.display = "block";
    canvas.style.touchAction = "none";
    const baseSize = 320;
    const size2 = baseSize * sizeMultiplier;
    canvas.width = size2;
    canvas.height = size2;
    const glDiv = document.querySelector("#glDiv");
    glDiv.innerHTML = "";
    glDiv.appendChild(canvas);
    gl2 = canvas.getContext("webgl");
    if (!gl2) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }
    const xOpts = [35, 45, 35];
    const yOpts = [-45, 0, 45];
    let xAxis = xOpts[offsetSelection] * Math.PI / 180;
    let yAxis = yOpts[offsetSelection] * Math.PI / 180;
    transformMatrix = create();
    perspective(
      transformMatrix,
      50 * Math.PI / 180,
      canvas.clientWidth / canvas.clientHeight,
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
    buffers = new Buffers(gl2);
    cube = new CubeLogic(gl2, animateTurns2);
    dragDetector = new DragDetector();
    cube.setNumOfLayers(numLayers);
    cube.activateAllStickers();
    cube.new();
    buffers.initBufferData(cube, showBody2, transformMatrix);
    const sceneArgs = { canvas, cube, buffers, offsetSelection, animateTurn };
    const pointerdown = (offsetX, offsetY) => {
      if (!dragEnabled)
        return;
      dragDetector.onPointerDown(offsetX, offsetY, sceneArgs);
    };
    const pointermove = (offsetX, offsetY) => {
      if (!dragEnabled)
        return;
      dragDetector.onPointerMove(offsetX, offsetY);
    };
    const pointerup = () => {
      if (!dragEnabled)
        return;
      dragDetector.onPointerUp(sceneArgs);
    };
    const calcOffset = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.touches[0].pageX - rect.left;
      const y = event.touches[0].pageY - rect.top;
      return { x, y };
    };
    const addPointerListeners = () => {
      canvas.addEventListener("pointerdown", (event) => pointerdown(event.offsetX, event.offsetY));
      canvas.addEventListener("pointermove", (event) => pointermove(event.offsetX, event.offsetY));
      canvas.addEventListener("pointerup", (event) => pointerup());
    };
    const addTouchListeners = () => {
      canvas.addEventListener("touchstart", (event) => {
        const { x, y } = calcOffset(event);
        pointerdown(x, y);
      });
      canvas.addEventListener("touchmove", (event) => {
        const { x, y } = calcOffset(event);
        pointermove(x, y);
      });
      canvas.addEventListener("touchend", (event) => {
        pointerup();
      });
    };
    if (window.PointerEvent) {
      addPointerListeners();
    } else {
      addTouchListeners();
    }
    initPrograms();
    render();
  }
  function initPrograms() {
    const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uTransformMatrix;
    varying lowp vec4 vColor;
    void main(void) {
        gl_Position = uTransformMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
    `;
    const fsSource = `
    varying lowp vec4 vColor;
    void main(void) {
        gl_FragColor = vColor;
    }
    `;
    const shaderProgram = initShaderProgram(gl2, vsSource, fsSource);
    gl2.useProgram(shaderProgram);
    programInfo = {
      attribLocations: {
        vertexPosition: gl2.getAttribLocation(shaderProgram, "aVertexPosition"),
        vertexColor: gl2.getAttribLocation(shaderProgram, "aVertexColor")
      },
      uniformLocations: {
        transformMatrix: gl2.getUniformLocation(shaderProgram, "uTransformMatrix")
      }
    };
  }
  function bindPosition(positionBuffer) {
    gl2.bindBuffer(gl2.ARRAY_BUFFER, positionBuffer);
    gl2.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      3,
      gl2.FLOAT,
      false,
      0,
      0
    );
    gl2.enableVertexAttribArray(
      programInfo.attribLocations.vertexPosition
    );
  }
  function bindColor(colorBuffer) {
    gl2.bindBuffer(gl2.ARRAY_BUFFER, colorBuffer);
    gl2.vertexAttribPointer(
      programInfo.attribLocations.vertexColor,
      4,
      gl2.FLOAT,
      false,
      0,
      0
    );
    gl2.enableVertexAttribArray(
      programInfo.attribLocations.vertexColor
    );
  }
  function drawElements() {
    gl2.drawElements(
      gl2.TRIANGLES,
      6,
      gl2.UNSIGNED_SHORT,
      0
    );
  }
  function drawScene() {
    gl2.clearDepth(1);
    gl2.enable(gl2.DEPTH_TEST);
    gl2.depthFunc(gl2.LEQUAL);
    gl2.clearColor(0, 0, 0, 0);
    gl2.clear(gl2.COLOR_BUFFER_BIT | gl2.DEPTH_BUFFER_BIT);
    const underStickers = cube.getUnderStickers();
    let listToShow = isTurning ? animation.stickers : cube.currentStickers;
    for (let i = 0; i < cube.numOfStickers; i++) {
      let object = buffers.objects[i];
      const m = create();
      rotate(
        m,
        transformMatrix,
        animation ? animation.stickersToAnimate[i] ? spring.position * Math.PI / 180 : 0 : 0,
        animation ? animation.axis : [1, 0, 0]
      );
      gl2.uniformMatrix4fv(
        programInfo.uniformLocations.transformMatrix,
        false,
        m
      );
      gl2.bindBuffer(gl2.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
      if (showBody2) {
        bindPosition(object.noGapPositionBuffer);
        bindColor(underStickers[i].buffer);
        drawElements();
      }
      bindPosition(object.positionBuffer);
      bindColor(listToShow[i].buffer);
      drawElements();
      gl2.uniformMatrix4fv(
        programInfo.uniformLocations.transformMatrix,
        false,
        transformMatrix
      );
    }
    if (!hintStickers2)
      return;
    gl2.uniformMatrix4fv(
      programInfo.uniformLocations.transformMatrix,
      false,
      transformMatrix
    );
    const drawHints = (starti, endi) => {
      for (let i = starti; i < endi; i++) {
        let object = buffers.objects[i];
        bindPosition(object.hintPositionBuffer);
        bindColor(listToShow[i].buffer);
        drawElements();
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
  function renderZeroEasterEgg() {
    const glDiv = document.querySelector("#glDiv");
    glDiv.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; width: 320px; height: 320px;">
        <p style="color: white; text-align: center;">You can try to solve a 0-layer cube, but that's kinda boring...</p>
    </div>
    `;
  }

  // ui/src/scripts/ui.ts
  function addListenersForLeftModal() {
    const drawer = document.querySelector(".slideRight");
    let isOpen = false;
    function updateDrawer(open) {
      isOpen = open;
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

  // ui/src/scripts/cuble.ts
  function main() {
    renderCanvas();
    addListenersForLeftModal();
    const moveCountEle = document.querySelector("#moveCount");
    let moveCount = 0;
    function resetMoveCount() {
      moveCount = 0;
      moveCountEle.textContent = `Moves: ${moveCount}`;
    }
    function incrementMoveCount() {
      moveCount += 1;
      moveCountEle.textContent = `Moves: ${moveCount}`;
    }
    resetMoveCount();
    document.querySelector("#solve").addEventListener("click", (event) => {
      setNumLayers(3);
    });
    document.querySelector("#scramble").addEventListener("click", (event) => {
      cube.scramble();
      cube.cubleScramble();
      cube.revealCorrectStickers();
      render();
      resetMoveCount();
    });
    document.addEventListener("keydown", (event) => {
      const match = cube.matchKeyToTurn(event);
      if (match) {
        if (match.turn) {
          cube.revealCorrectStickers();
          incrementMoveCount();
        }
        animateTurn();
      }
    });
  }
  main();
})();
//# sourceMappingURL=cuble.js.map
