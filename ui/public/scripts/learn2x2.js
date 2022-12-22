(() => {
  // src/scripts/colors.ts
  var WHITE = [1, 1, 1, 1];
  var GRAY = [0.5, 0.5, 0.5, 1];
  var YELLOW = [1, 1, 0, 1];
  var GREEN = [0, 1, 0, 1];
  var BLUE = [0, 0, 1, 1];
  var ORANGE = [1, 0.5, 0, 1];
  var RED = [1, 0, 0, 1];
  var BLACK = [0, 0, 0, 1];
  var colors = [WHITE, GREEN, YELLOW, BLUE, ORANGE, RED];
  function faceToColor(face) {
    if (face < 0 || face >= colors.length)
      console.error("Invalid face: " + face);
    return colors[face];
  }

  // src/scripts/common/util.ts
  function stickerToFace(sticker, cube) {
    return Math.floor(sticker / sq(cube.layers));
  }

  // src/scripts/common/rand.ts
  function randInt(int) {
    return Math.floor(Math.random() * int);
  }

  // src/scripts/util.ts
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

  // src/scripts/scramble.ts
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
    const stickers2 = Array(54);
    for (let i = 0; i < 6; i++) {
      const center = cube.center(i);
      stickers2[center] = i;
    }
    let uCorners = cube.corners(0, 0);
    let fCorners = cube.corners(1, 0);
    let dCorners = cube.corners(2, 0);
    let bCorners = cube.corners(3, 0);
    let lCorners = cube.corners(4, 0);
    let rCorners = cube.corners(5, 0);
    const fill4C = (cIndices, c1, c2, c3, c4, co1, co2, co3, co4) => {
      const corner = (ci, o) => corners[cp[ci]][(co[ci] + o) % 3];
      stickers2[cIndices.topLeft] = corner(c1, co1);
      stickers2[cIndices.topRight] = corner(c2, co2);
      stickers2[cIndices.bottomLeft] = corner(c3, co3);
      stickers2[cIndices.bottomRight] = corner(c4, co4);
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
      stickers2[eIndices.top] = edge(e1, eo1);
      stickers2[eIndices.left] = edge(e2, eo2);
      stickers2[eIndices.right] = edge(e3, eo3);
      stickers2[eIndices.bottom] = edge(e4, eo4);
    };
    fill4E(uEdges, 0, 1, 2, 3, 0, 0, 0, 0);
    fill4E(fEdges, 3, 4, 5, 6, 1, 0, 0, 1);
    fill4E(dEdges, 6, 7, 8, 9, 0, 0, 0, 0);
    fill4E(bEdges, 9, 10, 11, 0, 1, 0, 0, 1);
    fill4E(lEdges, 1, 10, 4, 7, 1, 1, 1, 1);
    fill4E(rEdges, 2, 5, 11, 8, 1, 1, 1, 1);
    return stickers2;
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

  // src/scripts/cube.ts
  var canvas = document.querySelector("canvas");
  var gl = canvas.getContext("webgl");
  function setColor(sticker, color) {
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
    gl.bindBuffer(gl.ARRAY_BUFFER, sticker.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
  }
  function sq(x) {
    return x * x;
  }
  function half(x) {
    return Math.floor(x / 2);
  }
  function even(x) {
    return x % 2 == 0;
  }
  function stickers(layers) {
    return layers * layers * 6;
  }
  var Cube2 = class {
    constructor() {
      this.animationQueue = [];
    }
    setColors(colors2) {
      for (let i = 0; i < stickers(this.layers); i++) {
        setColor(this.stickers[i], colors2[i]);
      }
    }
    solve() {
      const arr = Array(stickers(this.layers));
      for (let i = 0; i < stickers(this.layers); i++) {
        const face = stickerToFace(i, this);
        this.stickers[i].face = face;
        arr[i] = faceToColor(face);
      }
      this.setColors(arr);
    }
    scramble() {
      if (this.layers === 3) {
        this.scramble3x3();
        return;
      }
      this.naiveScramble();
    }
    scramble3x3() {
      const state = scramble3x3(this);
      this.setCubeState(state);
    }
    naiveScramble() {
      let numTurns = sq(this.layers) * 10;
      for (let i = 0; i < numTurns; i++) {
        let axis = Math.floor(Math.random() * 3);
        let layer = Math.floor(Math.random() * this.layers);
        let clockwise = Math.floor(Math.random() * 1) == 0;
        this._matchTurn(axis, layer, clockwise);
      }
    }
    setNumOfLayers(num) {
      this.layers = num;
      this.stickers = Array(stickers(num));
      this.underStickers = Array(stickers(num));
      for (let i = 0; i < stickers(num); i++) {
        const face = stickerToFace(i, this);
        this.stickers[i] = {
          face,
          buffer: gl.createBuffer()
        };
        this.underStickers[i] = {
          face,
          buffer: gl.createBuffer()
        };
        setColor(this.underStickers[i], BLACK);
      }
      this.affectedStickers = Array(stickers(num)).fill(false);
    }
    getCubeState() {
      return this.stickers.map((sticker) => sticker.face);
    }
    setCubeState(state) {
      for (let i = 0; i < stickers(this.layers); i++) {
        const color = faceToColor(state[i]);
        this.stickers[i].face = state[i];
        setColor(this.stickers[i], color);
      }
    }
    resetAffectedStickers() {
      const arr = Array(stickers(this.layers));
      this.affectedStickers = arr.fill(this.layers === 1);
    }
    pushAnimation(axis, clockwise, prevStickers) {
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
      const arr = Array(stickers(this.layers));
      this.affectedStickers = arr.fill(false);
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
          0 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
          3 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
          2 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
          1 * sq(this.layers) + sq(this.layers) - i - layer * this.layers
        );
      }
    }
    _turnYAxis(layer, clockwise) {
      for (let i = 0; i < this.layers; i++) {
        this._cycle(
          clockwise,
          1 * sq(this.layers) + i * this.layers + layer,
          4 * sq(this.layers) + i * this.layers + layer,
          3 * sq(this.layers) + (this.layers - i - 1) * this.layers + (this.layers - 1) - layer,
          5 * sq(this.layers) + i * this.layers + layer
        );
      }
    }
    _turnZAxis(layer, clockwise) {
      for (let i = 0; i < this.layers; i++) {
        this._cycle(
          clockwise,
          0 * sq(this.layers) + (i + 1) * this.layers - 1 - layer,
          5 * sq(this.layers) + i + this.layers * layer,
          2 * sq(this.layers) + (this.layers - i - 1) * this.layers + layer,
          4 * sq(this.layers) + sq(this.layers) - (i + 1) - layer * this.layers
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
        case "x2'":
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
        case "y2'":
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
        case "z2'":
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
        case "u":
          this.wideTurn(1, 0, forward);
          break;
        case "u'":
          this.wideTurn(1, 0, !forward);
          break;
        case "u2":
        case "u2'":
          this.wideTurn(1, 0, forward);
          this.wideTurn(1, 0, forward);
          break;
        case "D":
          this.turn(1, this.layers - 1, !forward);
          break;
        case "D'":
          this.turn(1, this.layers - 1, forward);
          break;
        case "D2":
        case "D2'":
          this.turn(1, this.layers - 1, forward);
          this.turn(1, this.layers - 1, forward);
          break;
        case "d":
          this.wideTurn(1, this.layers - 1, !forward);
          break;
        case "d'":
          this.wideTurn(1, this.layers - 1, forward);
          break;
        case "d2":
        case "d2'":
          this.wideTurn(1, this.layers - 1, forward);
          this.wideTurn(1, this.layers - 1, forward);
          break;
        case "F":
          this.turn(2, 0, forward);
          break;
        case "F'":
          this.turn(2, 0, !forward);
          break;
        case "F2":
        case "F2'":
          this.turn(2, 0, forward);
          this.turn(2, 0, forward);
          break;
        case "f":
          this.wideTurn(2, 0, forward);
          break;
        case "f'":
          this.wideTurn(2, 0, !forward);
          break;
        case "f2":
        case "f2'":
          this.wideTurn(2, 0, forward);
          this.wideTurn(2, 0, forward);
          break;
        case "B":
          this.turn(2, this.layers - 1, !forward);
          break;
        case "B'":
          this.turn(2, this.layers - 1, forward);
          break;
        case "B2":
        case "B2'":
          this.turn(2, this.layers - 1, forward);
          this.turn(2, this.layers - 1, forward);
          break;
        case "b":
          this.wideTurn(2, this.layers - 1, !forward);
          break;
        case "b'":
          this.wideTurn(2, this.layers - 1, forward);
          break;
        case "b2":
        case "b2'":
          this.wideTurn(2, this.layers - 1, forward);
          this.wideTurn(2, this.layers - 1, forward);
          break;
        case "L":
          this.turn(0, this.layers - 1, !forward);
          break;
        case "L'":
          this.turn(0, this.layers - 1, forward);
          break;
        case "L2":
        case "L2'":
          this.turn(0, this.layers - 1, forward);
          this.turn(0, this.layers - 1, forward);
          break;
        case "l":
          this.wideTurn(0, this.layers - 1, !forward);
          break;
        case "l'":
          this.wideTurn(0, this.layers - 1, forward);
          break;
        case "l2":
        case "l2'":
          this.wideTurn(0, this.layers - 1, forward);
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
        case "M2'":
          this.sliceTurn(0, forward);
          this.sliceTurn(0, forward);
          break;
        case "E":
          this.sliceTurn(1, !forward);
          break;
        case "E'":
          this.sliceTurn(1, forward);
          break;
        case "E2":
        case "E2'":
          this.sliceTurn(1, forward);
          this.sliceTurn(1, forward);
          break;
        case "S":
          this.sliceTurn(2, forward);
          break;
        case "S'":
          this.sliceTurn(2, !forward);
          break;
        case "S2":
        case "S2'":
          this.sliceTurn(2, forward);
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
      return face * sq(this.layers) <= sticker && sticker < (face + 1) * sq(this.layers);
    }
    center(face) {
      return face * sq(this.layers) + Math.floor(sq(this.layers) / 2);
    }
    corners(face, layer) {
      const offset = face * sq(this.layers);
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

  // src/scripts/buffers.ts
  function createBuffers(gl4, cube, perspectiveMatrix) {
    let allPositions = makePositions(cube, 1.01, 0.02);
    let allNoGapPositions = makePositions(cube, 1, 0);
    let allHintPositions = makePositions(cube, 1.5, 0.02);
    const objects = Array(stickers(cube.layers));
    for (let i = 0; i < stickers(cube.layers); i++) {
      let object = {
        positionBuffer: gl4.createBuffer(),
        noGapPositionBuffer: gl4.createBuffer(),
        hintPositionBuffer: gl4.createBuffer(),
        indexBuffer: gl4.createBuffer(),
        cart2d: [],
        positions: null
      };
      let positions = new Float32Array(12);
      let noGapPos = new Float32Array(12);
      let hintPos = new Float32Array(12);
      for (let j = 0; j < 12; j++) {
        let index = i * 12 + j;
        positions[j] = allPositions[index];
        noGapPos[j] = allNoGapPositions[index];
        hintPos[j] = allHintPositions[index];
      }
      gl4.bindBuffer(gl4.ARRAY_BUFFER, object.positionBuffer);
      gl4.bufferData(gl4.ARRAY_BUFFER, positions, gl4.STATIC_DRAW);
      object.positions = positions;
      gl4.bindBuffer(gl4.ARRAY_BUFFER, object.noGapPositionBuffer);
      gl4.bufferData(gl4.ARRAY_BUFFER, noGapPos, gl4.STATIC_DRAW);
      gl4.bindBuffer(gl4.ARRAY_BUFFER, object.hintPositionBuffer);
      gl4.bufferData(gl4.ARRAY_BUFFER, hintPos, gl4.STATIC_DRAW);
      const homo = Array(16);
      multiply(homo, 0, perspectiveMatrix, [noGapPos[0], noGapPos[1], noGapPos[2], 1]);
      multiply(homo, 4, perspectiveMatrix, [noGapPos[3], noGapPos[4], noGapPos[5], 1]);
      multiply(homo, 8, perspectiveMatrix, [noGapPos[6], noGapPos[7], noGapPos[8], 1]);
      multiply(homo, 12, perspectiveMatrix, [noGapPos[9], noGapPos[10], noGapPos[11], 1]);
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
      const indices = [0, 1, 2, 0, 2, 3];
      gl4.bindBuffer(gl4.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
      gl4.bufferData(gl4.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl4.STATIC_DRAW);
      objects[i] = object;
    }
    return objects;
  }
  function multiply(arr, offset, a, b) {
    const out = Array(4);
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    arr[offset + 0] = b0 * a[0] + b1 * a[4] + b2 * a[8] + b3 * a[12];
    arr[offset + 1] = b0 * a[1] + b1 * a[5] + b2 * a[9] + b3 * a[13];
    arr[offset + 2] = b0 * a[2] + b1 * a[6] + b2 * a[10] + b3 * a[14];
    arr[offset + 3] = b0 * a[3] + b1 * a[7] + b2 * a[11] + b3 * a[15];
  }
  var perSticker = 12;
  var verticesInSquare = 4;
  var dimensions = 3;
  function makePositions(cube, radius, gap) {
    const perFace = sq(cube.layers) * perSticker;
    const out = Array(6 * perFace);
    topFace(out, 0 * perFace, cube, 1, radius, gap);
    frontFace(out, 1 * perFace, cube, 0, radius, gap);
    bottomFace(out, 2 * perFace, cube, 1, -radius, gap);
    backFace(out, 3 * perFace, cube, 0, -radius, gap);
    leftFace(out, 4 * perFace, cube, 2, -radius, gap);
    rightFace(out, 5 * perFace, cube, 2, radius, gap);
    return out;
  }
  function topFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = 0; j < cube.layers; j++) {
          const x = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = -half(cube.layers); j <= half(cube.layers); j++) {
        coords[idx] = [2 * j / cube.layers, 2 * i / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function frontFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const x = -1 + 1 / cube.layers + i * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + j * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = half(cube.layers); j >= -half(cube.layers); j--) {
        coords[idx] = [2 * i / cube.layers, 2 * j / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function bottomFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const x = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = half(cube.layers); j >= -half(cube.layers); j--) {
        coords[idx] = [2 * j / cube.layers, 2 * i / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function backFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = 0; j < cube.layers; j++) {
          const x = -1 + 1 / cube.layers + i * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + j * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = -half(cube.layers); j <= half(cube.layers); j++) {
        coords[idx] = [2 * i / cube.layers, 2 * j / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function leftFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const x = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = half(cube.layers); j >= -half(cube.layers); j--) {
        coords[idx] = [2 * j / cube.layers, 2 * i / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function rightFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = cube.layers - 1; i >= 0; i--) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const x = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = half(cube.layers); i >= -half(cube.layers); i--) {
      for (let j = half(cube.layers); j >= -half(cube.layers); j--) {
        coords[idx] = [2 * j / cube.layers, 2 * i / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function makeFace(arr, offset, cube, coords, a, gap) {
    for (let i = 0; i < sq(cube.layers); i++) {
      const temp = coords[i];
      makeSticker(arr, offset + i * perSticker, cube, temp[0], temp[1], temp[2], a, gap);
    }
  }
  function makeSticker(arr, offset, cube, x, y, r, a, gap) {
    const s = 1 / cube.layers - gap;
    const coords = [
      [x - s, y - s, r],
      [x + s, y - s, r],
      [x + s, y + s, r],
      [x - s, y + s, r]
    ];
    for (let i = 0; i < verticesInSquare; i++) {
      const temp = coords[i];
      arr[offset + i * dimensions] = temp[(a + 0) % dimensions];
      arr[offset + i * dimensions + 1] = temp[(a + 1) % dimensions];
      arr[offset + i * dimensions + 2] = temp[(a + 2) % dimensions];
    }
  }

  // src/scripts/common/spring.ts
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

  // src/scripts/dragDetector.ts
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
    return cube.layers - 1 - Math.floor((sticker - sq(cube.layers)) / cube.layers);
  }
  var DragDetector = class {
    onPointerDown(x, y, div, cube, buffers) {
      this.numOfPointerMoves = 0;
      const clipX = xPixelToClip(x, div.clientWidth);
      const clipY = yPixelToClip(y, div.clientHeight);
      this.xOnDown = clipX;
      this.yOnDown = clipY;
      [this.stickerOnDown, this.cart2dOnDown] = this._coordinatesToSticker(clipX, clipY, cube, buffers);
      function getXY(objectIndex, xIndex, yIndex) {
        return {
          x: buffers[objectIndex].cart2d[xIndex],
          y: buffers[objectIndex].cart2d[yIndex]
        };
      }
      if (this.stickerOnDown !== -1)
        return;
      const topLeft = getXY(0, 0, 1);
      const topRight = getXY(cube.layers * (cube.layers - 1), 6, 7);
      const left = getXY(cube.layers - 1, 2, 3);
      const right = getXY(sq(cube.layers) - 1, 4, 5);
      const bottomLeft = getXY(cube.layers * (cube.layers + 1) - 1, 0, 1);
      const bottomRight = getXY(sq(cube.layers) * 2 - 1, 2, 3);
      if (clipY > topLeft.y && clipX > topLeft.x && clipX < topRight.x) {
        cube.cubeRotate(0, true);
      } else if (clipX < topLeft.x && clipY > left.y && clipY < topLeft.y) {
        cube.cubeRotate(2, false);
      } else if (clipX > topRight.x && clipY > right.y && clipY < topRight.y) {
        cube.cubeRotate(2, true);
      } else if (clipX < bottomLeft.x && clipY > bottomLeft.y && clipY < left.y) {
        cube.cubeRotate(1, true);
      } else if (clipX > bottomRight.x && clipY > bottomRight.y && clipY < right.y) {
        cube.cubeRotate(1, false);
      } else if (clipY < bottomLeft.y && clipX > bottomLeft.x && clipX < bottomRight.x) {
        cube.cubeRotate(0, false);
      }
    }
    onPointerMove(x, y) {
      this.numOfPointerMoves++;
      this.xOnMove = x;
      this.yOnMove = y;
    }
    onPointerUp(div, cube, buffers) {
      if (this.numOfPointerMoves < 2)
        return;
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
      const xClip = xPixelToClip(this.xOnMove, div.clientWidth);
      const yClip = yPixelToClip(this.yOnMove, div.clientHeight);
      const slope = calcSlope(xClip, yClip, this.xOnDown, this.yOnDown);
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
    }
    _coordinatesToSticker(x, y, cube, buffers) {
      const coordinateIsInSticker = (i) => {
        if (!buffers[i].cart2d) {
          console.error("cart2d is undefined");
          return;
        }
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
      for (let i = 0; i < 2 * sq(cube.layers); i++) {
        const output = coordinateIsInSticker(i);
        if (output)
          return output;
      }
      return [-1, void 0];
    }
  };

  // src/scripts/glMatrix.ts
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

  // src/scripts/common/singleton.ts
  function singleton() {
    let instance;
    return (constructor) => {
      if (!instance) {
        instance = constructor();
      }
      return instance;
    };
  }

  // src/scripts/scene.ts
  var canvas2 = document.querySelector("canvas");
  var gl2 = canvas2.getContext("webgl");
  var programInfo = initPrograms();
  var scenes = [];
  var settings = {
    animateTurns: true,
    hintStickers: true,
    showBody: true
  };
  var time = Date.now() * 1e-3;
  var numLayers = 3;
  var loopStarted = false;
  function startLoop() {
    if (loopStarted)
      return;
    loopStarted = true;
    requestAnimationFrame(render);
  }
  function newScene(selector) {
    let div = document.querySelector(selector);
    let cube = new Cube2();
    let spring = new Spring();
    let perspectiveMatrix = initPerspective(div);
    let dragDetector = new DragDetector();
    cube.setNumOfLayers(numLayers);
    let buffers = createBuffers(gl2, cube, perspectiveMatrix);
    let scene = {
      div,
      cube,
      spring,
      buffers,
      perspectiveMatrix
    };
    const pointerdown = (offsetX, offsetY) => {
      if (!scene.dragEnabled)
        return;
      dragDetector.onPointerDown(offsetX, offsetY, scene.div, scene.cube, scene.buffers);
    };
    const pointermove = (offsetX, offsetY) => {
      if (!scene.dragEnabled)
        return;
      dragDetector.onPointerMove(offsetX, offsetY);
    };
    const pointerup = () => {
      if (!scene.dragEnabled)
        return;
      dragDetector.onPointerUp(scene.div, scene.cube, scene.buffers);
    };
    const calcOffset = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.touches[0].pageX - rect.left;
      const y = event.touches[0].pageY - rect.top;
      return { x, y };
    };
    const addPointerListeners = () => {
      div.addEventListener("pointerdown", (event) => pointerdown(event.offsetX, event.offsetY));
      div.addEventListener("pointermove", (event) => pointermove(event.offsetX, event.offsetY));
      div.addEventListener("pointerup", (event) => pointerup());
    };
    const addTouchListeners = () => {
      div.addEventListener("touchstart", (event) => {
        const { x, y } = calcOffset(event);
        pointerdown(x, y);
      });
      div.addEventListener("touchmove", (event) => {
        const { x, y } = calcOffset(event);
        pointermove(x, y);
      });
      div.addEventListener("touchend", (event) => {
        pointerup();
      });
    };
    if (window.PointerEvent) {
      addPointerListeners();
    } else {
      addTouchListeners();
    }
    return scene;
  }
  function initPrograms() {
    const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uTransformMatrix;
    uniform mat4 uRotateMatrix;

    // variables shared between vertex and fragment shaders
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;
    void main(void) {
        gl_Position = uTransformMatrix * aVertexPosition;
        originalPos = aVertexPosition;
        rotatedPos = uRotateMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
    `;
    const fragmentShaderSource = `
    // variables shared between vertex and fragment shaders
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;

    void main(void) {
        gl_FragColor = vColor;

        // low precision float variable
        lowp float max = 1.05;

        // if it is a normal sticker rather than a hint sticker, it should not be discarded
        if (originalPos.x < max && originalPos.x > -max && originalPos.y < max && originalPos.y > -max && originalPos.z < max && originalPos.z > -max) {
            return;
        }

        // if it starts on the right or left, and stays on its side, it should not be discarded
        if (originalPos.x > max && rotatedPos.x > max) return;
        if (originalPos.x < -max && rotatedPos.x < -max) return;

        if (rotatedPos.y < max && rotatedPos.z < max) return;
        discard;
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
        transformMatrix: gl2.getUniformLocation(shaderProgram, "uTransformMatrix"),
        rotateMatrix: gl2.getUniformLocation(shaderProgram, "uRotateMatrix")
      }
    };
  }
  function initPerspective(element) {
    let perspectiveMatrix = create();
    perspective(
      perspectiveMatrix,
      50 * Math.PI / 180,
      element.clientWidth / element.clientHeight,
      0.1,
      100
    );
    translate(
      perspectiveMatrix,
      [0, 0, -5]
    );
    rotate(
      perspectiveMatrix,
      perspectiveMatrix,
      45 * Math.PI / 180,
      [1, 0, 0]
    );
    rotate(
      perspectiveMatrix,
      perspectiveMatrix,
      0,
      [0, -1, 0]
    );
    return perspectiveMatrix;
  }
  function bindPosition(positionBuffer, programInfo2, gl4) {
    gl4.bindBuffer(gl4.ARRAY_BUFFER, positionBuffer);
    gl4.vertexAttribPointer(
      programInfo2.attribLocations.vertexPosition,
      3,
      gl4.FLOAT,
      false,
      0,
      0
    );
    gl4.enableVertexAttribArray(
      programInfo2.attribLocations.vertexPosition
    );
  }
  function bindColor(colorBuffer, programInfo2, gl4) {
    gl4.bindBuffer(gl4.ARRAY_BUFFER, colorBuffer);
    gl4.vertexAttribPointer(
      programInfo2.attribLocations.vertexColor,
      4,
      gl4.FLOAT,
      false,
      0,
      0
    );
    gl4.enableVertexAttribArray(
      programInfo2.attribLocations.vertexColor
    );
  }
  function drawElements(gl4) {
    gl4.drawElements(
      gl4.TRIANGLES,
      6,
      gl4.UNSIGNED_SHORT,
      0
    );
  }
  function initShaderProgram(gl4, vsSource, fsSource) {
    const vertexShader = loadShader(gl4, gl4.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl4, gl4.FRAGMENT_SHADER, fsSource);
    const shaderProgram = gl4.createProgram();
    gl4.attachShader(shaderProgram, vertexShader);
    gl4.attachShader(shaderProgram, fragmentShader);
    gl4.linkProgram(shaderProgram);
    if (!gl4.getProgramParameter(shaderProgram, gl4.LINK_STATUS)) {
      alert("Unable to initialize the shader program: " + gl4.getProgramInfoLog(shaderProgram));
      return null;
    }
    return shaderProgram;
  }
  function loadShader(gl4, type, source) {
    const shader = gl4.createShader(type);
    gl4.shaderSource(shader, source);
    gl4.compileShader(shader);
    if (!gl4.getShaderParameter(shader, gl4.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl4.getShaderInfoLog(shader));
      gl4.deleteShader(shader);
      return null;
    }
    return shader;
  }
  function resizeCanvasToDisplaySize() {
    const displayWidth = canvas2.clientWidth;
    const displayHeight = canvas2.clientHeight;
    const needResize = canvas2.width !== displayWidth || canvas2.height !== displayHeight;
    if (needResize) {
      canvas2.width = displayWidth;
      canvas2.height = displayHeight;
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
    canvas2.style.transform = `translateY(${window.scrollY}px)`;
    for (let i = 0; i < scenes.length; i++) {
      const { cube, div, spring, buffers, perspectiveMatrix } = scenes[i];
      const rect = div.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > canvas2.clientHeight || rect.right < 0 || rect.left > canvas2.clientWidth) {
        continue;
      }
      const width = rect.right - rect.left;
      const height = rect.bottom - rect.top;
      const left = rect.left;
      const bottom = canvas2.clientHeight - rect.bottom;
      gl2.viewport(left, bottom, width, height);
      gl2.scissor(left, bottom, width, height);
      if (cube.animationQueue[0]) {
        spring.target = cube.animationQueue.length * 90;
        spring.update(dt);
        if (spring.position >= 90) {
          cube.affectedStickers = Array(stickers(cube.layers)).fill(false);
          spring.position = 0;
          cube.animationQueue.shift();
        }
      }
      const animation = cube.animationQueue[0];
      let stickers2 = chooseStickers(cube);
      let _transformSingleton = singleton();
      let _rotateSingleton = singleton();
      for (let i2 = 0; i2 < stickers(cube.layers); i2++) {
        let object = buffers[i2];
        const transform = animation && animation.stickersToAnimate[i2] && settings.animateTurns ? _transformSingleton(() => {
          return rotate(
            create(),
            perspectiveMatrix,
            spring.position * Math.PI / 180,
            animation.axis
          );
        }) : perspectiveMatrix;
        gl2.uniformMatrix4fv(
          programInfo.uniformLocations.transformMatrix,
          false,
          transform
        );
        const rotation = animation && animation.stickersToAnimate[i2] && settings.animateTurns ? _rotateSingleton(() => {
          const rotateMat = create();
          return rotate(
            rotateMat,
            rotateMat,
            spring.position * Math.PI / 180,
            animation.axis
          );
        }) : create();
        gl2.uniformMatrix4fv(
          programInfo.uniformLocations.rotateMatrix,
          false,
          rotation
        );
        gl2.bindBuffer(gl2.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
        if (settings.showBody) {
          bindPosition(object.noGapPositionBuffer, programInfo, gl2);
          bindColor(cube.underStickers[i2].buffer, programInfo, gl2);
          drawElements(gl2);
        }
        bindPosition(object.positionBuffer, programInfo, gl2);
        bindColor(stickers2[i2].buffer, programInfo, gl2);
        drawElements(gl2);
        if (settings.hintStickers) {
          bindPosition(object.hintPositionBuffer, programInfo, gl2);
          bindColor(stickers2[i2].buffer, programInfo, gl2);
          drawElements(gl2);
        }
      }
    }
    requestAnimationFrame(render);
  }
  function chooseStickers(cube) {
    if (!settings.animateTurns) {
      return cube.stickers;
    }
    if (cube.animationQueue[0]) {
      return cube.animationQueue[0].stickers;
    }
    return cube.stickers;
  }

  // src/scripts/slide.ts
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

  // src/scripts/ui.ts
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

  // src/scripts/learnBase.ts
  var canvas3 = document.querySelector("canvas");
  var gl3 = canvas3.getContext("webgl");
  function initLearnPage(lessons2, layers) {
    addListenersForLeftModal();
    addLessonNavigatorListener(lessons2, layers);
    addShowSolutionListeners(lessons2);
    for (let i = 0; i < lessons2.length; i++) {
      renderLesson(lessons2, layers, i);
    }
    render2(lessons2);
    startLoop();
    addResizeListener();
    renderBasedOnWidth();
  }
  function renderLesson(lessons2, layers, i) {
    const scene = newScene(`#scene${i}`);
    scenes.push(scene);
    scene.cube.setNumOfLayers(layers);
    scene.buffers = createBuffers(gl3, scenes[0].cube, scenes[0].perspectiveMatrix);
    const lesson = lessons2[i];
    lesson.cube = scene.cube;
    lesson.move = 0;
    if (lesson.practiceProblems) {
      scene.dragEnabled = true;
      randomProblem(lesson);
    } else {
      const colors2 = determineColors(lesson);
      scene.cube.setColors(colors2);
      scene.cube.execAlg(lesson.setup);
    }
  }
  function render2(lessons2) {
    for (let i = 0; i < lessons2.length; i++) {
      const lesson = lessons2[i];
      if (lesson.practiceProblems && lesson.showSolution) {
        const problem = lesson.practiceProblems[lesson.problemIndex];
        document.querySelector(`#problemText${i}`).textContent = problem.explanation;
        document.querySelector(`#leftButton${i}`).style.display = "";
        document.querySelector(`#rightButton${i}`).style.display = "";
        const moveCounter2 = document.querySelector(`#moveCounter${i}`);
        moveCounter2.style.display = "";
        const parsedAlg2 = parseMovesFromAlg(lesson.algorithm);
        moveCounter2.textContent = `${lesson.move} / ${parsedAlg2.length}`;
        continue;
      }
      if (lesson.practiceProblems && !lesson.showSolution) {
        const problem = lesson.practiceProblems[lesson.problemIndex];
        document.querySelector(`#problemText${i}`).textContent = problem.directions;
        document.querySelector(`#leftButton${i}`).style.display = "none";
        document.querySelector(`#rightButton${i}`).style.display = "none";
        document.querySelector(`#moveCounter${i}`).style.display = "none";
        continue;
      }
      const moveCounter = document.querySelector(`#moveCounter${i}`);
      const parsedAlg = parseMovesFromAlg(lesson.algorithm);
      moveCounter.textContent = `${lesson.move} / ${parsedAlg.length}`;
    }
  }
  function randomProblem(lesson) {
    let problemIndex = randInt(lesson.practiceProblems.length);
    while (problemIndex === lesson.problemIndex) {
      problemIndex = randInt(lesson.practiceProblems.length);
    }
    setupProblem(lesson, problemIndex);
  }
  function setupProblem(lesson, problemIndex) {
    const problem = lesson.practiceProblems[problemIndex];
    lesson.problemIndex = problemIndex;
    lesson.algorithm = lesson.practiceProblems[problemIndex].algorithm;
    const colors2 = determineColors(lesson);
    lesson.cube.setColors(colors2);
    lesson.cube.execAlg(problem.setup);
    lesson.move = 0;
  }
  function determineColors(lesson) {
    const colors2 = Array(54);
    lesson.activeStickers.forEach((i) => {
      colors2[i] = faceToColor(stickerToFace(i, lesson.cube));
    });
    for (let i = 0; i < 54; i++) {
      if (colors2[i])
        continue;
      colors2[i] = GRAY;
    }
    return colors2;
  }
  function addLessonNavigatorListener(lessons2, layers) {
    const lessonNavigator = document.querySelector("#lessonNavigator");
    lessonNavigator.addEventListener("click", (event) => {
      const target = event.target;
      if (target.className === "lesson-p") {
        const lessonIndex = parseInt(target.getAttribute("lesson-index"));
        renderLesson(lessons2, layers, lessonIndex);
        if (document.documentElement.clientWidth < NARROW) {
          close(lessonNavigator);
        }
      }
    });
    document.querySelector("#openClose").addEventListener("click", (event) => {
      toggle(lessonNavigator);
    });
    document.querySelector("#close").addEventListener("click", (event) => {
      toggle(lessonNavigator);
    });
  }
  function addShowSolutionListeners(lessons2) {
    const leftButton = "leftButton";
    const rightButton = "rightButton";
    const showSolution = "showSolution";
    const next = "next";
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target.id.startsWith(leftButton)) {
        const lessonIndex = parseInt(target.id.substring(leftButton.length));
        const lesson = lessons2[lessonIndex];
        if (lesson.move <= 0)
          return;
        lesson.move--;
        const moves = parseMovesFromAlg(lesson.algorithm);
        lesson.cube.stepAlgorithm(moves[lesson.move], false);
        render2(lessons2);
      } else if (target.id.startsWith(rightButton)) {
        const lessonIndex = parseInt(target.id.substring(rightButton.length));
        const lesson = lessons2[lessonIndex];
        const moves = parseMovesFromAlg(lesson.algorithm);
        if (lesson.move >= moves.length)
          return;
        lesson.cube.stepAlgorithm(moves[lesson.move], true);
        lesson.move++;
        render2(lessons2);
      } else if (target.id.startsWith(showSolution)) {
        const lessonIndex = parseInt(target.id.substring(showSolution.length));
        const lesson = lessons2[lessonIndex];
        lesson.showSolution = true;
        scenes[lessonIndex].dragEnabled = false;
        setupProblem(lesson, lesson.problemIndex);
        render2(lessons2);
      } else if (target.id.startsWith(next)) {
        const lessonIndex = parseInt(target.id.substring(next.length));
        const lesson = lessons2[lessonIndex];
        lesson.showSolution = false;
        scenes[lessonIndex].dragEnabled = true;
        randomProblem(lesson);
        render2(lessons2);
      }
    });
  }
  function addResizeListener() {
    window.addEventListener("resize", () => {
      renderBasedOnWidth();
    });
  }
  function renderBasedOnWidth() {
    const openClose = document.querySelector("#openClose");
    const close2 = document.querySelector("#close");
    const drawerEle = document.querySelector("#lessonNavigator");
    if (document.documentElement.clientWidth < NARROW) {
      openClose.style.display = "inline-block";
      close2.style.display = "inline-block";
      close(drawerEle);
      return;
    }
    openClose.style.display = "none";
    close2.style.display = "none";
    open(drawerEle);
  }
  function parseMovesFromAlg(alg) {
    return (alg || "").split(" ");
  }

  // src/scripts/learn2x2.ts
  var lessons = [
    {
      activeStickers: [0, 1, 4, 13, 16, 18],
      setup: "",
      algorithm: "y y y y"
    },
    {
      activeStickers: [0, 1, 4, 13, 16, 18],
      practiceProblems: [
        {
          setup: "F",
          algorithm: "F'",
          directions: "Pair the white-orange-green and the white-blue-orange",
          explanation: "This case requires just one move."
        },
        {
          setup: "F2 D'",
          algorithm: "D F' F'",
          directions: "Pair the white-orange-green and the white-blue-orange",
          explanation: "Move the white-orange-green to the side, then pair it."
        },
        {
          setup: "F R'",
          algorithm: "R F'",
          directions: "Pair the white-orange-green and the white-blue-orange",
          explanation: "Move the white-orange-green up, then pair it."
        },
        {
          setup: "B2 R2",
          algorithm: "R R B B",
          directions: "Pair the white-orange-green and the white-blue-orange",
          explanation: "Move the white-blue-orange to the bottom, then pair it."
        },
        {
          setup: "B2 D2",
          algorithm: "D D B B",
          directions: "Pair the white-orange-green and the white-blue-orange",
          explanation: "Bring around the white-blue-orange, then pair it."
        },
        {
          setup: "F' D R",
          algorithm: "R' D' F",
          directions: "Pair the white-orange-green and the white-blue-orange",
          explanation: "Bring down the white-orange-green, then pair it up."
        },
        {
          setup: "F R' D'",
          algorithm: "D R F'",
          directions: "Pair the white-orange-green and the white-blue-orange",
          explanation: "Move the white-orange-green to the side, move it up, then pair it."
        },
        {
          setup: "F2 D R'",
          algorithm: "R D' F' F'",
          directions: "Pair the white-orange-green and the white-blue-orange",
          explanation: "Move the white-orange-green to the bottom, bring it around, then pair it."
        }
      ]
    },
    {
      activeStickers: [0, 1, 3, 4, 6, 13, 16, 18, 20],
      setup: "",
      algorithm: "y y y y"
    },
    {
      activeStickers: [0, 1, 3, 4, 6, 13, 16, 18, 20],
      practiceProblems: [
        {
          setup: "R' D",
          algorithm: "D' R",
          directions: "Solve the white-green-red",
          explanation: "Bring the white-green-red around, then solve it.."
        },
        {
          setup: "R2 D'",
          algorithm: "D R R",
          directions: "Solve the white-green-red",
          explanation: "Move the white-green-red to the side, then solve it."
        },
        {
          setup: "R' D R",
          algorithm: "R' D' R",
          directions: "Solve the white-green-red",
          explanation: "Move the white-green-red down, bring it around, then solve it."
        },
        {
          setup: "R' D'",
          algorithm: "D R",
          directions: "Solve the white-green-red",
          explanation: "Move the white-green-red to the side, then solve it."
        },
        {
          setup: "R2 D' R",
          algorithm: "R' D R R",
          directions: "Solve the white-green-red",
          explanation: "Move the white-green-red down, bring it around, then solve it."
        },
        {
          setup: "R' D R2",
          algorithm: "R' R' D' R",
          directions: "Solve the white-green-red",
          explanation: "Move the white-green-red down, bring it around, then solve it."
        },
        {
          setup: "R2 D' R2",
          algorithm: "R' R' D R R",
          directions: "Solve the white-green-red",
          explanation: "Move the white to the bottom, bring it around, then solve it."
        },
        {
          setup: "R2 D' R'",
          algorithm: "R D R R",
          directions: "Solve the white-green-red",
          explanation: "Move the white to the bottom, bring it around, then solve it."
        }
      ]
    },
    {
      activeStickers: [0, 1, 2, 3, 4, 6, 13, 15, 16, 18, 20, 22],
      setup: "",
      algorithm: "y y y y"
    },
    {
      activeStickers: [0, 1, 2, 3, 4, 6, 13, 15, 16, 18, 20, 22],
      practiceProblems: [
        {
          setup: "R' D' R",
          algorithm: "R' D R",
          directions: "Solve white-green-red",
          explanation: "Insert the white-green-red into its slot"
        },
        {
          setup: "R' D R",
          algorithm: "R' D' R",
          directions: "Solve white-green-red",
          explanation: "Insert the white-green-red into its slot"
        },
        {
          setup: "R' D' R D R' D' R",
          algorithm: "R' D R D' R' D R",
          directions: "Solve white-green-red",
          explanation: "Take the white-green-red out of its slot, then insert"
        },
        {
          setup: "R' D R D' R' D R",
          algorithm: "R' D' R D R' D' R",
          directions: "Solve white-green-red",
          explanation: "Take the white-green-red out of its slot, then insert"
        },
        {
          setup: "R' D R D' R' D2 R",
          algorithm: "R' D' D' R D R' D' R",
          directions: "Solve white-green-red",
          explanation: "Flip the white-green red, then insert"
        }
      ]
    },
    {
      activeStickers: [0, 1, 2, 3, 4, 6, 8, 9, 10, 11, 13, 15, 16, 18, 20, 22],
      setup: "z2 R U2 R' U' R U' R'",
      algorithm: "R U R' U R U U R'"
    },
    {
      activeStickers: [0, 1, 2, 3, 4, 6, 8, 9, 10, 11, 13, 15, 16, 18, 20, 22],
      practiceProblems: [
        {
          setup: "z2 R U2 R' U' R U' R'",
          algorithm: "R U R' U R U U R'",
          directions: "Solve the yellow corners",
          explanation: "If you have 1 yellow on top, bring the yellow to the front left, then do the Sune."
        },
        {
          setup: "z2 y R U R' U R U2 R' U'",
          algorithm: "U' R U R' U R U U R' U U R U R' U R U U R'",
          directions: "Solve the yellow corners",
          explanation: "If you have 1 yellow on top, bring the yellow to the front left, then do the Sune. In this case, you have to do the Sune twice."
        },
        {
          setup: "z2 y2 R U2 R' U' R U R' U' R U' R'",
          algorithm: "R U R' U R U U R' R U R' U R U U R'",
          directions: "Solve the yellow corners",
          explanation: "In this case, there are no yellows on top, and it kind of looks like an H. Do the Sune twice."
        },
        {
          setup: "z2 y' L F R' F' L' F R F' U2",
          algorithm: "R U R' U R U U R' R U R' U R U U R' R U R' U R U U R'",
          directions: "Solve the yellow corners",
          explanation: "In this case, there are 2 yellows diagonal from each other. Do the Sune 3x."
        },
        {
          setup: "z2 F R' F' L F R F' L'",
          algorithm: "R U R' U R U U R' U R U R' U R U U R' U U R U R' U R U U R'",
          directions: "Solve the yellow corners",
          explanation: "In this case, there are two yellows on top and the other yellows are facing opposite directions. This requires doing Sune 3x."
        },
        {
          setup: "z2 y R U2 R D R' U2 R D' R2",
          algorithm: "R U R' U R U U R' U' R U R' U R U U R' U U R U R' U R U U R'",
          directions: "Solve the yellow corners",
          explanation: "In this case, there are two yellows on top and the other yellows are facing the same direction. This requires doing Sune 3x."
        },
        {
          setup: "z2 y2 R U2 R2 U' R2 U' R2 U2 R",
          algorithm: "R U R' U R U U R' U' R U R' U R U U R'",
          directions: "Solve the yellow corners",
          explanation: "In this case, there are no yellows on top. This requires doing Sune 2x."
        }
      ]
    },
    {
      activeStickers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      setup: "z2 R2 B2 R F R' B2 R F' R",
      algorithm: "R' F R' B' B' R F' R' B' B' R R"
    },
    {
      activeStickers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      practiceProblems: [
        {
          setup: "z2 R2 B2 R F R' B2 R F' R",
          algorithm: "R' F R' B' B' R F' R' B' B' R R",
          directions: "Solve the corners",
          explanation: "Hold the matching corners in the back, then use the last layer algorithm."
        },
        {
          setup: "z2 F R U' R' U' R U R' F' R U R' U' R' F R F'",
          algorithm: "R' F R' B' B' R F' R' B' B' R R U R' F R' B' B' R F' R' B' B' R R U U",
          directions: "Solve the corners",
          explanation: "In this case, there are no matching corners on any side. Use the last layer corners algorithm twice."
        }
      ]
    }
  ];
  function main() {
    initLearnPage(lessons, 2);
  }
  main();
})();
//# sourceMappingURL=learn2x2.js.map
