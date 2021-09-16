import { Buffers } from "./buffers.js";
import { CubeLogic } from "./cube.js";
import { DragDetector } from "./dragDetector.js";

const canvas = document.querySelector('#glCanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

export const buffers = new Buffers();
export const cube = new CubeLogic();
export const dragDetector = new DragDetector();

let programInfo;

let angle = 0.0;
let isTurning = false;
let numTurnsQueued = 0;
let time = Date.now();
let rotationAxis = [1, 0, 0];
let onTurnFinish = () => { }

function setRotationAxis(axis, clockwise) {
    let x = clockwise ? -1 : 1;
    if (axis == 0) {
        rotationAxis = [x, 0, 0];
    } else if (axis == 1) {
        rotationAxis = [0, x, 0];
    } else if (axis == 2) {
        rotationAxis = [0, 0, x];
    } else {
        console.error(`Invalid axis '${axis}'`);
    }
}

export function animateTurn(newOnTurnFinish) {
    setRotationAxis(cube.axis, cube.clockwise);

    angle = 0.0;
    time = Date.now();
    isTurning = true;
    onTurnFinish = newOnTurnFinish;

    numTurnsQueued += 1;

    render();
}

export function render() {
    drawScene();
    requestAnimationFrame(() => {
        updateScene();
    });
}

function updateScene() {
    if (isTurning) {
        const newTime = Date.now();
        angle += (newTime - time) / cube.factor;
        time = newTime;
        if (angle >= Math.PI / 2 || numTurnsQueued > 1) {
            angle = 0.0;
            isTurning = false;
            numTurnsQueued = 0;
            cube.resetAffectedStickers();
            cube.setStickers();
            if (onTurnFinish) onTurnFinish();
        }

        render();
    }
}

export function initScene() {
    if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }

    // Vertex shader program
    const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    varying lowp vec4 vColor;
    void main(void) {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
    `;

    // Fragment shader program
    const fsSource = `
    varying lowp vec4 vColor;
    void main(void) {
        gl_FragColor = vColor;
    }
    `;

    // Initialize a shader program; this is where all the lighting
    // for the vertices and so forth is established.
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    // Collect all the info needed to use the shader program.
    // Look up which attributes our shader program is using
    // for aVertexPosition, aVertexColor and also
    // look up uniform locations.
    programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        }
    };

    render();
}

function bindPosition(positionBuffer) {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
}

function bindColor(colorBuffer) {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexColor);
}

function readPixels() {
    gl.readPixels(
        dragDetector.pixelX, // x
        dragDetector.pixelY, // y
        1, // width
        1, // height
        gl.RGBA, // format
        gl.UNSIGNED_BYTE, // type
        dragDetector.pixels, // array to hold result
    );
}

function drawElements() {
    gl.drawElements(
        gl.TRIANGLES,
        6,
        gl.UNSIGNED_SHORT, // type
        0, // offset
    );
}

function drawScene() {
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Create a perspective matrix, a special matrix that is
    // used to simulate the distortion of perspective in a camera.
    // Our field of view is 45 degrees, with a width/height
    // ratio that matches the display size of the canvas
    // and we only want to see objects between 0.1 units
    // and 100 units away from the camera.

    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const mat4 = glMatrix.mat4;
    const projectionMatrix = mat4.create();

    // note: glmatrix.js always has the first argument
    // as the destination to receive the result.
    mat4.perspective(projectionMatrix,
        fieldOfView,
        aspect,
        zNear,
        zFar);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    const modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to
    // start drawing the square.

    mat4.translate(modelViewMatrix,     // destination matrix
        modelViewMatrix,     // matrix to translate
        [-0.0, 0.0, -5.5]);  // amount to translate

    // Rotate to the starting position such that 3 faces are visible.
    mat4.rotate(
        modelViewMatrix,
        modelViewMatrix,
        Math.PI / 4.5,
        [1, 0, 0],
    );

    gl.useProgram(programInfo.program);

    // Set the shader uniforms
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);

    const stickers = cube.getStickers();
    const affectedStickers = cube.getAffectedStickers();

    function drawObjects(range, selectBuffers) {
        for (let i = 0; i < range; i++) {
            let object = buffers.objects[i];

            // Matrix specific to this object
            const m = mat4.create();
            mat4.rotate(
                m,
                modelViewMatrix,
                affectedStickers[i] ? angle : 0,
                rotationAxis,
            );

            gl.uniformMatrix4fv(
                programInfo.uniformLocations.modelViewMatrix,
                false,
                m,
            );

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
            const selected = selectBuffers(i);
            if (selected.color == undefined) {
                console.log(selected);
            }
            bindPosition(selected.position);
            bindColor(selected.color);
            drawElements();
        }
    }

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    drawObjects(
        cube.layersSq * 2,
        (i) => {
            const object = buffers.objects[i];
            return {
                position: object.noGapPositionBuffer,
                color: object.pickingColorBuffer,
            };
        },
    );

    readPixels();

    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    drawObjects(
        cube.numOfStickers,
        (i) => {
            const object = buffers.objects[i];
            return {
                position: object.positionBuffer,
                color: stickers[i],
            };
        },
    );
}

// Initialize a shader program, so WebGL knows how to draw our data
function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

// Creates a shader of the given type, uploads the source and compiles it.
function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);

    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}