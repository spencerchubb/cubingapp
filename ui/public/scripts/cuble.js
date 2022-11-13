(() => {
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

  // ui/src/scripts/scene.ts
  var canvas = document.querySelector("canvas");
  var gl = canvas.getContext("webgl");
  var programInfo = initPrograms();
  var time = Date.now() * 1e-3;
  var numLayers = 3;
  function setNumLayers(val) {
    numLayers = val;
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
    const shaderProgram = initShaderProgram(gl, vertexShaderSource, fragmentShaderSource);
    gl.useProgram(shaderProgram);
    return {
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor")
      },
      uniformLocations: {
        transformMatrix: gl.getUniformLocation(shaderProgram, "uTransformMatrix")
      }
    };
  }
  function initShaderProgram(gl2, vsSource, fsSource) {
    const vertexShader = loadShader(gl2, gl2.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl2, gl2.FRAGMENT_SHADER, fsSource);
    const shaderProgram = gl2.createProgram();
    gl2.attachShader(shaderProgram, vertexShader);
    gl2.attachShader(shaderProgram, fragmentShader);
    gl2.linkProgram(shaderProgram);
    if (!gl2.getProgramParameter(shaderProgram, gl2.LINK_STATUS)) {
      alert("Unable to initialize the shader program: " + gl2.getProgramInfoLog(shaderProgram));
      return null;
    }
    return shaderProgram;
  }
  function loadShader(gl2, type, source) {
    const shader = gl2.createShader(type);
    gl2.shaderSource(shader, source);
    gl2.compileShader(shader);
    if (!gl2.getShaderParameter(shader, gl2.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl2.getShaderInfoLog(shader));
      gl2.deleteShader(shader);
      return null;
    }
    return shader;
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
      resetMoveCount();
    });
    document.addEventListener("keydown", (event) => {
    });
  }
  main();
})();
//# sourceMappingURL=cuble.js.map
