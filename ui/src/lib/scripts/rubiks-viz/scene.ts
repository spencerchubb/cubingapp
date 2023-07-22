import { Shape, getBuffer } from "./buffers";
import { Cube, CubeDragDetector, makeSquares } from "./cube";
import { DragDetector } from "./dragDetector";
import * as glMat from "./glMatrix";
import { Puzzle } from "./puzzle";
import { makeTriangles, PyraDragDetector, Pyraminx } from "./pyraminx";
import { once } from "./once";
import { Spring } from "./spring";

export {
    newCube,
    newPyraminx,
    setPuzzle,
    type Scene,
    scenes,
};

let canvas: HTMLCanvasElement = initCanvas();
let gl: WebGLRenderingContext | null = canvas.getContext("webgl");

const programInfo = once<WebGLRenderingContext, ProgramInfo>(initProgram);
const notHintBuffer = once<WebGLRenderingContext, WebGLBuffer>(gl => {
    return getBuffer(gl, [0, 0, 0, 0]);
});

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
            if (!scene.enableKey(e)) return;

            scene.puzzle.matchKeyToTurn(e);
        });
    });

    return canvas;
}

type ProgramInfo = {
    attributes: {
        hintType: number,
        vertexPosition: number,
        vertexColor: number,
    },
    uniforms: {
        transformMatrix: WebGLUniformLocation,
        rotateMatrix: WebGLUniformLocation,
    },
};

function initProgram(gl: WebGLRenderingContext): ProgramInfo {

    /* Vertex shader source */
    const vsSource = `
    attribute vec4 aHintType;
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uTransformMatrix;
    uniform mat4 uRotateMatrix;

    varying lowp vec4 hintType;
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;
    void main(void) {
        gl_Position = uTransformMatrix * aVertexPosition;

        hintType = aHintType;
        originalPos = aVertexPosition;
        rotatedPos = uRotateMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
    `;

    /* Fragment shader source */
    const fsSource = `
    varying lowp vec4 hintType;
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;

    void main(void) {
        gl_FragColor = vColor;

        // 0 means not a hint sticker
        if (hintType[0] <= 0.5) return;

        // 1 means it's a cube hint sticker
        else if (hintType[0] <= 1.5) {
            lowp float max = 1.05;

            // Don't discard if it is a normal sticker rather than a hint sticker.
            if (originalPos.x < max && originalPos.x > -max && originalPos.y < max && originalPos.y > -max && originalPos.z < max && originalPos.z > -max) {
                return;
            }

            // Don't discard if it starts on the right or left, and stays on its side.
            if (originalPos.x > max && rotatedPos.x > max) return;
            if (originalPos.x < -max && rotatedPos.x < -max) return;

            if (rotatedPos.y < max && rotatedPos.z < max) return;
        }

        // 2 means it's a pyraminx hint sticker
        else if (hintType[0] <= 2.5) {
            // Define a plane and keep the pixels behind the plane.
            lowp float plane = 0.55 * rotatedPos.y + 1.25 * rotatedPos.z;
            if (plane < 1.0) return;
        }

        discard;
    }
    `;

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    if (!shaderProgram) throw new Error("Failed to create shader program.");
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        throw new Error("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
    }

    gl.useProgram(shaderProgram);

    return {
        attributes: {
            hintType: gl.getAttribLocation(shaderProgram, 'aHintType'),
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniforms: {
            transformMatrix: gl.getUniformLocation(shaderProgram, 'uTransformMatrix') as WebGLUniformLocation,
            rotateMatrix: gl.getUniformLocation(shaderProgram, 'uRotateMatrix') as WebGLUniformLocation,
        }
    }
}

type Scene = {
    div: HTMLElement,
    puzzle: Puzzle,
    shapes: Shape[] | null,
    dragEnabled: boolean,
    enableKey: (event: KeyboardEvent) => boolean,
};

type InternalScene = {
    div: HTMLElement,
    perspective: number[]
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

function newCube(div: HTMLElement, layers: number = 3): Scene {
    if (!gl) {
        renderWebGLError(div);
    }

    let scene: Scene | undefined = scenes.find(s => s.div === div);
    let internalScene: InternalScene | undefined = internalScenes.find(s => s.div === div);
    if (scene && internalScene) {
        const puzzle = new Cube(layers);
        scene.puzzle = puzzle;
        scene.shapes = makeSquares(gl, puzzle, internalScene.perspective);
        return scene;
    }

    let perspective = initPerspective();

    let cube = new Cube(layers);
    let shapes = makeSquares(gl, cube, perspective);

    let spring = new Spring();

    scene = {
        div,
        puzzle: cube,
        shapes,
        dragEnabled: true,
        enableKey: (_) => true,
    };

    internalScene = {
        div,
        perspective,
        spring,
    }

    if (shapes) {
        let dragDetector = new CubeDragDetector(shapes);
        addDragListeners(div, dragDetector, scene);
    }

    scenes.push(scene);
    internalScenes.push(internalScene);
    startLoop();
    return scene;
}

function newPyraminx(div: HTMLElement): Scene | null {
    if (!gl) {
        renderWebGLError(div);
        return null;
    }

    let scene: Scene | undefined = scenes.find(s => s.div === div);
    let internalScene: InternalScene | undefined = internalScenes.find(s => s.div === div);
    if (scene && internalScene) {
        const puzzle = new Pyraminx();
        scene.puzzle = puzzle;
        scene.shapes = makeTriangles(gl, internalScene.perspective);
        return scene;
    }

    const perspective = initPerspective();

    let pyraminx = new Pyraminx();
    let shapes = makeTriangles(gl, perspective);

    let spring = new Spring();

    scene = {
        div,
        puzzle: pyraminx,
        shapes,
        dragEnabled: true,
        enableKey: (_) => true,
    };

    internalScene = {
        div,
        perspective,
        spring,
    }

    if (shapes) {
        let dragDetector = new PyraDragDetector(shapes);
        addDragListeners(div, dragDetector, scene);
    }

    scenes.push(scene);
    internalScenes.push(internalScene);
    startLoop();
    console.log("newPyraminx")
    return scene;
}

function setPuzzle(scene: Scene, puzzle: string): void {
    switch (puzzle) {
        case "2x2":
            newCube(scene.div, 2);
            break;
        case "3x3":
            newCube(scene.div, 3);
            break;
        case "4x4":
            newCube(scene.div, 4);
            break;
        case "5x5":
            newCube(scene.div, 5);
            break;
        case "6x6":
            newCube(scene.div, 6);
            break;
        case "7x7":
            newCube(scene.div, 7);
            break;
        case "Pyraminx":
            newPyraminx(scene.div);
            break;
        default: console.log("Unknown puzzle: " + puzzle);
    }
}

function renderWebGLError(div: HTMLElement) {
    div.innerHTML = `<p style="text-align: center; margin-top: 8px;">Sorry, WebGL isn't working. The 3D visuals may not work in this browser 😢</p>`;
}

function initPerspective() {
    let mat = glMat.create();

    glMat.perspective(mat,
        50 * Math.PI / 180, // field of view
        1, // aspect
        0.1, // z near
        100.0); // z far

    glMat.translate(mat,
        [0.0, 0.0, -5.0]);

    glMat.rotate(mat,
        mat,
        45 * Math.PI / 180,
        [1, 0, 0],
    );

    glMat.rotate(mat,
        mat,
        0,
        [0, -1, 0],
    );

    return mat;
}

function addDragListeners(div: HTMLElement, dragDetector: DragDetector, scene: Scene) {
    const pointerdown = (offsetX, offsetY) => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerDown(offsetX, offsetY, div, (scene.puzzle as Cube));
    }

    const pointermove = (offsetX, offsetY) => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerMove(offsetX, offsetY);
    }

    const pointerup = () => {
        if (!scene.dragEnabled) return;
        dragDetector.onPointerUp(div, (scene.puzzle as Cube));
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
}

function bindPosition(gl: WebGLRenderingContext, position: WebGLBuffer) {
    const _programInfo = programInfo(gl);
    gl.bindBuffer(gl.ARRAY_BUFFER, position);
    gl.vertexAttribPointer(_programInfo.attributes.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_programInfo.attributes.vertexPosition);
}

function bindColor(gl: WebGLRenderingContext, color: WebGLBuffer) {
    const _programInfo = programInfo(gl);
    gl.bindBuffer(gl.ARRAY_BUFFER, color);
    gl.vertexAttribPointer(_programInfo.attributes.vertexColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_programInfo.attributes.vertexColor);
}

function bindHintType(gl: WebGLRenderingContext, hintType: WebGLBuffer) {
    const _programInfo = programInfo(gl);
    gl.bindBuffer(gl.ARRAY_BUFFER, hintType);
    gl.vertexAttribPointer(_programInfo.attributes.hintType, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_programInfo.attributes.hintType);
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

function drawShape(gl: WebGLRenderingContext, shape: Shape, position: WebGLBuffer, color: WebGLBuffer): void {
    bindPosition(gl, position);
    bindColor(gl, color);
    shape.drawElement();
}

function render(newTime: number) {
    if (!gl) return;

    newTime *= 0.001; // convert to seconds
    const dt = newTime - time;
    time = newTime;

    resizeCanvasToDisplaySize();

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.SCISSOR_TEST);
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    for (let i = 0; i < scenes.length; i++) {
        const { puzzle, shapes } = scenes[i];
        const { div, perspective, spring } = internalScenes[i];

        if (!shapes) continue;

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

        if (puzzle.animationQueue.length > 0) {
            const anim = puzzle.animationQueue[0];

            spring.target = puzzle.animationQueue.reduce((acc, cur) => {
                return acc + cur.degrees;
            }, 0);
            spring.update(dt);

            if (spring.position >= anim.degrees) {
                puzzle.affectedStickers = Array(puzzle.numStickers()).fill(false);

                spring.position = 0;
                puzzle.animationQueue.shift();
            }
        }

        const animation = puzzle.animationQueue[0];
        let stickers = puzzle.getStickers();

        const _programInfo = programInfo(gl);

        for (let i = 0; i < shapes.length; i++) {
            let sticker = stickers[i];
            let currentBuffer = shapes[sticker];
            let originalBuffer = shapes[i];

            // Rotate and transform if:
            // 1) the sticker is affected by the animation
            // 2) the user wants to animate
            const transform = (animation && animation.affectedStickers[i])
                ? glMat.rotate(
                    glMat.create(),
                    perspective,
                    spring.position * Math.PI / 180,
                    animation.axis
                )
                : perspective;
            const rotation = (animation && animation.affectedStickers[i])
                ? glMat.rotate(
                    glMat.create(),
                    glMat.create(),
                    spring.position * Math.PI / 180,
                    animation.axis,
                )
                : glMat.create();

            gl.uniformMatrix4fv(
                _programInfo.uniforms.transformMatrix,
                false,
                transform,
            );

            gl.uniformMatrix4fv(
                _programInfo.uniforms.rotateMatrix,
                false,
                rotation,
            );

            bindHintType(gl, notHintBuffer(gl));

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, originalBuffer.indexBuffer);

            drawShape(
                gl,
                originalBuffer,
                originalBuffer.base,
                currentBuffer.black,
            );
            
            drawShape(
                gl,
                originalBuffer,
                originalBuffer.sticker,
                currentBuffer.color,
            );

            bindHintType(gl, puzzle.getHintType(gl));

            drawShape(
                gl,
                originalBuffer,
                originalBuffer.hint,
                currentBuffer.color,
            );
        }
    }

    requestAnimationFrame(render);
}
