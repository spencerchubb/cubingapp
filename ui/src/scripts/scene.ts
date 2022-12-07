import { BufferObject, createBuffers } from "./buffers";
import { Spring } from "./common/spring";
import { CubeLogic, Sticker } from "./cube";
import { DragDetector } from "./dragDetector";
import * as glMat from "./glMatrix";
import { singleton } from "./common/singleton";
import * as store from "./store";

let canvas: HTMLCanvasElement = document.querySelector("canvas");
let gl: WebGLRenderingContext = canvas.getContext("webgl");

type ProgramInfo = {
    attribLocations: {
        vertexPosition: number,
        vertexColor: number,
    },
    uniformLocations: {
        transformMatrix: WebGLUniformLocation,
    },
};

let programInfo: ProgramInfo = initPrograms();

export type Scene = {
    div: HTMLElement,
    cube: CubeLogic,
    spring: Spring,
    buffers: BufferObject[],
    transformMatrix: number[],
    dragEnabled?: boolean,
};
export let scenes: Scene[] = [];

export let settings = {
    animateTurns: true,
    hintStickers: true,
    showBody: true,
}

export function loadSavedSettings() {
    settings.animateTurns = store.getAnimateTurns();
    settings.hintStickers = store.getHintStickers();
    settings.showBody = store.getShowBody();
}

let time: number = Date.now() * 0.001;

let numLayers: number = 3;

let loopStarted = false;
export function startLoop() {
    if (loopStarted) return;
    loopStarted = true;
    requestAnimationFrame(render);
}

export function setNumLayers(val: number) {
    numLayers = val;
}

export function newScene(selector: string): Scene {
    let div = document.querySelector(selector) as HTMLElement;
    let cube = new CubeLogic();
    let spring = new Spring();
    let transformMatrix = initTransform(div);
    let dragDetector = new DragDetector();

    cube.setNumOfLayers(numLayers);
    cube.new();

    let buffers = createBuffers(gl, cube, transformMatrix);

    let scene: Scene = {
        div,
        cube,
        spring,
        buffers,
        transformMatrix,
    };

    const pointerdown = (offsetX, offsetY) => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerDown(offsetX, offsetY, div, cube, buffers);
    }

    const pointermove = (offsetX, offsetY) => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerMove(offsetX, offsetY);
    }

    const pointerup = () => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerUp(div, cube, buffers);
    }

    const calcOffset = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.touches[0].pageX - rect.left;
        const y = event.touches[0].pageY - rect.top;
        return { x, y };
    }

    const addPointerListeners = () => {
        div.addEventListener("pointerdown", event => pointerdown(event.offsetX, event.offsetY));
        div.addEventListener("pointermove", event => pointermove(event.offsetX, event.offsetY));
        div.addEventListener("pointerup", event => pointerup());
    }

    const addTouchListeners = () => {
        div.addEventListener("touchstart", event => {
            const { x, y } = calcOffset(event);
            pointerdown(x, y);
        });
        div.addEventListener("touchmove", event => {
            const { x, y } = calcOffset(event);
            pointermove(x, y);
        });
        div.addEventListener("touchend", event => {
            pointerup();
        });
    }

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
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
            transformMatrix: gl.getUniformLocation(shaderProgram, 'uTransformMatrix'),
        }
    }
}

function initTransform(element: HTMLElement) {
    let transformMatrix = glMat.create();

    glMat.perspective(transformMatrix,
        50 * Math.PI / 180, // field of view
        element.clientWidth / element.clientHeight, // aspect
        0.1, // z near
        100.0); // z far

    glMat.translate(transformMatrix,
        [0.0, 0.0, -5.0]);

    glMat.rotate(transformMatrix,
        transformMatrix,
        45 * Math.PI / 180,
        [1, 0, 0],
    );

    glMat.rotate(transformMatrix,
        transformMatrix,
        0,
        [0, -1, 0],
    );

    return transformMatrix;
}

function bindPosition(positionBuffer: WebGLBuffer, programInfo: ProgramInfo, gl: WebGLRenderingContext) {
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

function bindColor(colorBuffer: WebGLBuffer, programInfo: ProgramInfo, gl: WebGLRenderingContext) {
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

function drawElements(gl: WebGLRenderingContext) {
    gl.drawElements(
        gl.TRIANGLES,
        6,
        gl.UNSIGNED_SHORT, // type
        0, // offset
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

function resizeCanvasToDisplaySize() {
    // Lookup the size the browser is displaying the canvas in CSS pixels.
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Check if the canvas is not the same size.
    const needResize = canvas.width !== displayWidth ||
        canvas.height !== displayHeight;

    if (needResize) {
        // Make the canvas the same size
        canvas.width = displayWidth;
        canvas.height = displayHeight;
    }

    return needResize;
}

function render(newTime: number) {
    newTime *= 0.001; // convert to seconds
    const dt = newTime - time;
    // const fps = 1 / dt;
    // console.log(fps);
    time = newTime;

    resizeCanvasToDisplaySize();

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.SCISSOR_TEST);
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // move the canvas to top of the current scroll position
    canvas.style.transform = `translateY(${window.scrollY}px)`;

    for (let i = 0; i < scenes.length; i++) {
        const { cube, div, spring, buffers, transformMatrix } = scenes[i];

        const rect = div.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > canvas.clientHeight ||
            rect.right < 0 || rect.left > canvas.clientWidth) {
            continue;  // it's off screen
        }

        const width = rect.right - rect.left;
        const height = rect.bottom - rect.top;
        const left = rect.left;
        const bottom = canvas.clientHeight - rect.bottom;

        gl.viewport(left, bottom, width, height);
        gl.scissor(left, bottom, width, height);

        if (cube.animationQueue[0]) {
            // target is measured in degrees
            spring.target = cube.animationQueue.length * 90;
            spring.update(dt);

            if (spring.position >= 90) {
                cube.affectedStickers = Array(cube.numOfStickers).fill(false);

                spring.position = 0;
                cube.animationQueue.shift();
            }
        }

        const animation = cube.animationQueue[0];
        let stickers = chooseStickers(cube);

        let _singleton = singleton<number[]>();

        for (let i = 0; i < cube.numOfStickers; i++) {
            let object = buffers[i];

            // Rotate if the sticker is affected by the animation and if the user wants to animate
            const m = (animation && animation.stickersToAnimate[i] && settings.animateTurns)
                // ? glMat.rotate(
                //     glMat.create(),
                //     transformMatrix,
                //     spring.position * Math.PI / 180,
                //     animation.axis
                // )
                ? _singleton(() => {
                    return glMat.rotate(
                        glMat.create(),
                        transformMatrix,
                        spring.position * Math.PI / 180,
                        animation.axis
                    );
                })
                : transformMatrix;

            gl.uniformMatrix4fv(
                programInfo.uniformLocations.transformMatrix,
                false,
                m,
            );

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);

            if (settings.showBody) {
                bindPosition(object.noGapPositionBuffer, programInfo, gl);
                bindColor(cube.underStickers[i].buffer, programInfo, gl);
                drawElements(gl);
            }

            bindPosition(object.positionBuffer, programInfo, gl);
            bindColor(stickers[i].buffer, programInfo, gl);
            drawElements(gl);
        }

        renderHintStickers(cube, buffers, transformMatrix, stickers);
    }

    requestAnimationFrame(render);
}

function chooseStickers(cube: CubeLogic) {
    // If user doesn't want animations, go straight to the current stickers
    if (!settings.animateTurns) {
        return cube.stickers;
    }

    // If there is an animation queued, animate the one at the front of the queue
    if (cube.animationQueue[0]) {
        return cube.animationQueue[0].stickers;
    }

    return cube.stickers;
}

function renderHintStickers(cube: CubeLogic, buffers: BufferObject[], transformMatrix: number[], stickers: Sticker[]) {
    if (!settings.hintStickers) return;

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.transformMatrix,
        false,
        transformMatrix,
    );

    for (let j = 2 * cube.layersSq; j < cube.numOfStickers; j++) {
        let object = buffers[j];

        bindPosition(object.hintPositionBuffer, programInfo, gl);
        bindColor(stickers[j].buffer, programInfo, gl);
        drawElements(gl);
    }
}