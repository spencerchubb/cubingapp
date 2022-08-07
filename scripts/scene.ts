import { Buffers } from "./buffers";
import { AnimationData, CubeLogic } from "./cube";
import { DragDetector } from "./dragDetector";
import * as store from "./store";
const glMatrix = require("./gl-matrix.js");
const mat4 = glMatrix.mat4;

export let canvas: HTMLCanvasElement;
export let gl: WebGLRenderingContext;

export let buffers: Buffers;
export let cube: CubeLogic;
export let dragDetector: DragDetector;

let programInfo;
let transformMatrix;

let numLayers: number = 3;
let sizeMultiplier: number = store.getSize();
let offsetSelection;
export let xAxisOffset;
export let yAxisOffset;
setAngleOffset(store.getAngle());
export let showBody = store.getShowBody();
export let animateTurns = store.getAnimateTurns();
let dragEnabled = true;

let angle = 0.0;
let velocity = 0.005;
let isRendering = false;
let isTurning = false;
let time = Date.now();
let animation: AnimationData;

export function setNumLayers(val: number) {
    numLayers = val;
    renderCanvas();
}

export function setSizeMultiplier(val: number) {
    sizeMultiplier = val;
}

/**
 * value = 0 --> left
 * value = 1 --> head-on
 * value = 2 --> right
 */
export function setAngleOffset(value: number) {
    offsetSelection = value;
    if (value === 0) {
        xAxisOffset = 35 * Math.PI / 180;
        yAxisOffset = -45 * Math.PI / 180;
    } else if (value === 1) {
        xAxisOffset = 45 * Math.PI / 180;
        yAxisOffset = 0;
    } else { // value === 2
        xAxisOffset = 35 * Math.PI / 180;
        yAxisOffset = 45 * Math.PI / 180;
    }
    renderCanvas();
}

export function setShowBody(val: boolean) {
    showBody = val;
    buffers.initBufferData(cube, showBody, transformMatrix);
    render();
}

export function setAnimateTurns(val: boolean) {
    animateTurns = val;
    cube.animateTurns = val;
}

export function setDragEnabled(val: boolean) {
    dragEnabled = val;
}

export function animateTurn() {
    // If the user has chosen not to animate turns, then just apply the turn
    // instantly and redraw.
    if (!animateTurns) {
        cube.commitStickers();
        drawScene();
        return;
    }

    if (!isTurning) {
        animation = cube.shiftAnimation();

        // If the cube's animationQueue is empty, the shift will return null.
        // Therefore, only render if there is an animation to do.
        if (animation) {
            isTurning = true;
            angle = 0.0;
            time = Date.now();
            render();
        }
    }
}

export function render() {
    if (isRendering) return;
    requestAnimationFrame(() => {
        updateScene();
        drawScene();
    });
}

function updateScene() {
    if (isTurning) {
        const newTime = Date.now();
        const dt = newTime - time;

        // (cube.animationQueue.length + 1)^2
        const equilibriumVelocity = (cube.animationQueue.length + 1) * (cube.animationQueue.length + 1);
        velocity += dt * (equilibriumVelocity - velocity) / 100;
        angle += dt * velocity / 150;

        time = newTime;
        if (angle >= Math.PI / 2) {
            cube.setAllAffectedStickers(false);
            cube.commitStickers();
            isTurning = false;
            animateTurn();
        }

        isRendering = false;
        render();
    }
}

export function renderCanvas() {
    canvas = document.createElement("canvas");
    canvas.id = "glCanvas";

    // Fixes formatting bug where there was extra space under canvas inside glDiv.
    canvas.style.display = "block";

    // We do not want the browser to cancel the pointer during pointermove events on the canvas.
    // See here: https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event
    canvas.style.touchAction = "none";

    const baseSize = 320;
    const size = baseSize * sizeMultiplier;
    canvas.width = size;
    canvas.height = size;

    const glDiv = document.querySelector("#glDiv");
    glDiv.innerHTML = "";
    glDiv.appendChild(canvas);

    gl = canvas.getContext('webgl');

    if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }

    transformMatrix = mat4.create();

    mat4.perspective(transformMatrix,
        45 * Math.PI / 180, // field of view
        gl.canvas.clientWidth / gl.canvas.clientHeight, // aspect
        0.1, // z near
        100.0); // z far

    mat4.translate(transformMatrix,
        transformMatrix,
        [0.0, 0.0, -5.0]);

    mat4.rotate(transformMatrix,
        transformMatrix,
        xAxisOffset,
        [1, 0, 0],
    );

    mat4.rotate(transformMatrix,
        transformMatrix,
        yAxisOffset,
        [0, -1, 0],
    );

    buffers = new Buffers(gl);
    cube = new CubeLogic(gl, animateTurns);
    dragDetector = new DragDetector();

    cube.setNumOfLayers(numLayers);
    cube.activateAllStickers();
    cube.new();

    buffers.initBufferData(cube, showBody, transformMatrix);

    const sceneArgs = { canvas, cube, buffers, offsetSelection, animateTurn };

    canvas.addEventListener("pointerdown", event => {
        if (!dragEnabled) return;
        const x = event.offsetX;
        const y = event.offsetY;
        dragDetector.onPointerDown(x, y, sceneArgs);
    });

    canvas.addEventListener("pointermove", event => {
        if (!dragEnabled) return;
        dragDetector.onPointerMove();
    });

    canvas.addEventListener("pointerup", event => {
        if (!dragEnabled) return;
        const x = event.offsetX;
        const y = event.offsetY;
        dragDetector.onPointerUp(x, y, sceneArgs);
    });

    initPrograms();
    render();
}

export function initPrograms() {
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

    gl.useProgram(shaderProgram);

    // Collect all the info needed to use the shader program.
    // Look up which attributes our shader program is using
    // for aVertexPosition, aVertexColor and also
    // look up uniform locations.
    programInfo = {
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
            transformMatrix: gl.getUniformLocation(shaderProgram, 'uTransformMatrix'),
        }
    };
}

function bindPosition(positionBuffer) {
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        3, // size
        gl.FLOAT, // type
        false, // normalize
        0, // stride
        0); // offset
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
}

function bindColor(colorBuffer) {
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        4, // size
        gl.FLOAT, // type
        false, // normalize
        0, // stride
        0); // offset
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexColor);
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

    const underStickers = cube.getUnderStickers();

    function drawObjects(range, selectBuffers) {
        for (let i = 0; i < range; i++) {
            let object = buffers.objects[i];

            // Matrix specific to this object
            const m = mat4.create();
            mat4.rotate(
                m,
                transformMatrix,
                animation ? animation.stickersToAnimate[i] ? angle : 0 : 0,
                animation ? animation.axis : [1, 0, 0]
            );

            gl.uniformMatrix4fv(
                programInfo.uniformLocations.transformMatrix,
                false,
                m,
            );

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
            const selected = selectBuffers(i);
            bindPosition(selected.position);
            bindColor(selected.color);
            drawElements();
        }
    }

    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    if (showBody) {
        drawObjects(
            cube.numOfStickers,
            (i) => {
                const object = buffers.objects[i];
                return {
                    position: object.noGapPositionBuffer,
                    color: underStickers[i].buffer,
                }
            },
        );
    }

    let listToShow = isTurning ? animation.stickers : cube.currentStickers;
    drawObjects(
        cube.numOfStickers,
        (i) => {
            const object = buffers.objects[i];
            return {
                position: object.positionBuffer,
                color: listToShow[i].buffer,
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