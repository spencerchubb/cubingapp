import { Cube, stickers as numStickers } from "./cube";
import { DragDetector } from "./dragDetector";
import * as glMat from "./glMatrix";
import { singleton } from "./singleton";
import { Spring } from "./spring";

export {
    newScene,
    type Scene,
    scenes,
};

let canvas: HTMLCanvasElement = initCanvas();
let gl: WebGLRenderingContext = initGL(canvas);
let programInfo: ProgramInfo = initProgramInfo(gl);

function initCanvas() {
    const canvas = document.createElement("canvas");
    /*
    * This is 'fixed' because if it were 'absolute', then the layout would be broken 
    * when inside a div with position: relative.
    */
    canvas.style.position = "fixed";
    canvas.style.display = "block";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);

    // Add key listener inside this if statement so that it is only added once.
    document.addEventListener("keydown", (e) => {
        scenes.forEach(scene => {
            if (!scene.keysEnabled) return;

            scene.cube.matchKeyToTurn(e);
        });
    });

    return canvas;
}

function initGL(canvas: HTMLCanvasElement): WebGLRenderingContext {
    return canvas.getContext("webgl");
}

type ProgramInfo = {
    attribLocations: {
        vertexPosition: number,
        vertexColor: number,
    },
    uniformLocations: {
        transformMatrix: WebGLUniformLocation,
        rotateMatrix: WebGLUniformLocation,
    },
};

function initProgramInfo(gl: WebGLRenderingContext): ProgramInfo {
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

    const shaderProgram = initShaderProgram(gl, vertexShaderSource, fragmentShaderSource);

    gl.useProgram(shaderProgram);

    return {
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
            transformMatrix: gl.getUniformLocation(shaderProgram, 'uTransformMatrix'),
            rotateMatrix: gl.getUniformLocation(shaderProgram, 'uRotateMatrix'),
        }
    }
}

type Scene = {
    cube: Cube,
    dragEnabled: boolean,
    keysEnabled: boolean,
};

type InternalScene = {
    cube: Cube,
    div: HTMLElement,
    spring: Spring,
};

let scenes: Scene[] = [];
let internalScenes: InternalScene[] = [];

let time: number = Date.now() * 0.001;

let loopStarted = false;
function startLoop() {
    if (loopStarted) return;
    loopStarted = true;
    requestAnimationFrame(render);
}

function newScene(div: HTMLElement, layers: number = 3): Scene {
    let perspectiveMatrix = initPerspective(div);

    let cube = new Cube(gl, perspectiveMatrix);
    cube.setNumOfLayers(layers);

    let spring = new Spring();
    let dragDetector = new DragDetector();

    let scene: Scene = {
        cube,
        dragEnabled: true,
        keysEnabled: true,
    };

    let internalScene: InternalScene = {
        cube,
        div,
        spring,
    }

    const pointerdown = (offsetX, offsetY) => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerDown(offsetX, offsetY, div, scene.cube);
    }

    const pointermove = (offsetX, offsetY) => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerMove(offsetX, offsetY);
    }

    const pointerup = () => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerUp(div, scene.cube);
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
        div.addEventListener("pointerup", () => pointerup());
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
        div.addEventListener("touchend", () => {
            pointerup();
        });
    }

    if (window.PointerEvent) {
        addPointerListeners();
    } else {
        addTouchListeners();
    }

    // We do not want the browser to cancel the pointer during pointermove events on the canvas.
    // See here: https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event 
    div.style.touchAction = "none";

    scenes.push(scene);
    internalScenes.push(internalScene);
    startLoop();
    return scene;
}

function initPerspective(element: HTMLElement) {
    let perspectiveMatrix = glMat.create();

    glMat.perspective(perspectiveMatrix,
        50 * Math.PI / 180, // field of view
        element.clientWidth / element.clientHeight, // aspect
        0.1, // z near
        100.0); // z far

    glMat.translate(perspectiveMatrix,
        [0.0, 0.0, -5.0]);

    glMat.rotate(perspectiveMatrix,
        perspectiveMatrix,
        45 * Math.PI / 180,
        [1, 0, 0],
    );

    glMat.rotate(perspectiveMatrix,
        perspectiveMatrix,
        0,
        [0, -1, 0],
    );

    return perspectiveMatrix;
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

    for (let i = 0; i < scenes.length; i++) {
        const { cube, div, spring } = internalScenes[i];

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
                cube.affectedStickers = Array(numStickers(cube.layers)).fill(false);

                spring.position = 0;
                cube.animationQueue.shift();
            }
        }

        const animation = cube.animationQueue[0];
        let stickers = chooseStickers(cube);

        let _transformSingleton = singleton<number[]>();
        let _rotateSingleton = singleton<number[]>();

        for (let i = 0; i < numStickers(cube.layers); i++) {
            let object = cube.buffers[i];

            // Rotate if the sticker is affected by the animation and if the user wants to animate
            const transform = (animation && animation.stickersToAnimate[i])
                ? _transformSingleton(() => {
                    return glMat.rotate(
                        glMat.create(),
                        cube.perspectiveMatrix,
                        spring.position * Math.PI / 180,
                        animation.axis
                    );
                })
                : cube.perspectiveMatrix;

            gl.uniformMatrix4fv(
                programInfo.uniformLocations.transformMatrix,
                false,
                transform,
            );

            const rotation = (animation && animation.stickersToAnimate[i])
                ? _rotateSingleton(() => {
                    const rotateMat = glMat.create();
                    return glMat.rotate(
                        rotateMat,
                        rotateMat,
                        spring.position * Math.PI / 180,
                        animation.axis,
                    );
                })
                : glMat.create();

            gl.uniformMatrix4fv(
                programInfo.uniformLocations.rotateMatrix,
                false,
                rotation,
            );

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indexBuffer);

            bindPosition(object.positionBuffer, programInfo, gl);
            bindColor(stickers[i].buffer, programInfo, gl);
            drawElements(gl);

            bindPosition(object.noGapPositionBuffer, programInfo, gl);
            bindColor(cube.underStickers[i].buffer, programInfo, gl);
            drawElements(gl);

            bindPosition(object.hintPositionBuffer, programInfo, gl);
            bindColor(stickers[i].buffer, programInfo, gl);
            drawElements(gl);
        }
    }

    requestAnimationFrame(render);
}

function chooseStickers(cube: Cube) {
    // If there is an animation queued, animate the one at the front of the queue
    if (cube.animationQueue[0]) {
        return cube.animationQueue[0].stickers;
    }

    return cube.stickers;
}