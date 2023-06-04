import { Shape, getBuffer } from "./buffers";
import { Cube } from "./cube/cube";
import { CubeDragDetector } from "./cube/dragDetector";
import { DragDetector } from "./dragDetector";
import * as glMat from "./glMatrix";
import { Puzzle } from "./puzzle";
import { PyraDragDetector } from "./pyraminx/dragDetector";
import { Pyraminx } from "./pyraminx/pyraminx";
import { singleton } from "./singleton";
import { Spring } from "./spring";

export {
    newCube,
    newPyraminx,
    type Scene,
    scenes,
};

let canvas: HTMLCanvasElement = initCanvas();
let gl: WebGLRenderingContext = initGL(canvas);
let programInfo: ProgramInfo = initProgram(gl);

// IDK why I have to put the number 4 times.
const notHintBuffer = getBuffer(gl, [0, 0, 0, 0]);

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

function initGL(canvas: HTMLCanvasElement): WebGLRenderingContext {
    return canvas.getContext("webgl") as WebGLRenderingContext;
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
    dragEnabled: boolean,
    enableKey: (event: KeyboardEvent) => boolean,
};

type InternalScene = {
    div: HTMLElement,
    puzzle: Puzzle,
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
    let scene: Scene | undefined = scenes.find(s => s.div === div);
    let internalScene: InternalScene | undefined = internalScenes.find(s => s.div === div);
    if (scene && internalScene) {
        const puzzle = new Cube(gl, scene.puzzle.perspective, layers);
        scene.puzzle = puzzle;
        internalScene.puzzle = puzzle;
        return scene;
    }

    let perspective = initPerspective(div);

    let cube = new Cube(gl, perspective, layers);

    let spring = new Spring();
    let dragDetector = new CubeDragDetector();

    scene = {
        div,
        puzzle: cube,
        dragEnabled: true,
        enableKey: (_) => true,
    };

    internalScene = {
        div,
        puzzle: cube,
        spring,
    }

    addDragListeners(div, dragDetector, scene);

    scenes.push(scene);
    internalScenes.push(internalScene);
    startLoop();
    return scene;
}

function newPyraminx(div: HTMLElement): Scene {
    let scene: Scene | undefined = scenes.find(s => s.div === div);
    let internalScene: InternalScene | undefined = internalScenes.find(s => s.div === div);
    if (scene && internalScene) {
        const puzzle = new Pyraminx(gl, scene.puzzle.perspective);
        scene.puzzle = puzzle;
        internalScene.puzzle = puzzle;
        return scene;
    }

    const perspective = initPerspective(div);

    let pyraminx = new Pyraminx(gl, perspective);

    let spring = new Spring();
    let dragDetector = new PyraDragDetector();

    scene = {
        div,
        puzzle: pyraminx,
        dragEnabled: true,
        enableKey: (_) => true,
    };

    internalScene = {
        div,
        puzzle: pyraminx,
        spring,
    }

    addDragListeners(div, dragDetector, scene);

    scenes.push(scene);
    internalScenes.push(internalScene);
    startLoop();
    return scene;
}

function initPerspective(element: HTMLElement) {
    let mat = glMat.create();

    glMat.perspective(mat,
        50 * Math.PI / 180, // field of view
        element.clientWidth / element.clientHeight, // aspect
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
    gl.bindBuffer(gl.ARRAY_BUFFER, position);
    gl.vertexAttribPointer(programInfo.attributes.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programInfo.attributes.vertexPosition);
}

function bindColor(gl: WebGLRenderingContext, color: WebGLBuffer) {
    gl.bindBuffer(gl.ARRAY_BUFFER, color);
    gl.vertexAttribPointer(programInfo.attributes.vertexColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programInfo.attributes.vertexColor);
}

function bindHintType(gl: WebGLRenderingContext, hintType: WebGLBuffer) {
    gl.bindBuffer(gl.ARRAY_BUFFER, hintType);
    gl.vertexAttribPointer(programInfo.attributes.hintType, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programInfo.attributes.hintType);
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
        const { div, puzzle, spring } = internalScenes[i];

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

        let _transformSingleton = singleton<number[]>();
        let _rotateSingleton = singleton<number[]>();

        const shapes = puzzle.getShapes();
        for (let i = 0; i < shapes.length; i++) {
            let sticker = stickers[i];
            let currentBuffer = shapes[sticker];
            let originalBuffer = shapes[i];

            // Rotate if the sticker is affected by the animation and if the user wants to animate
            const transform = (animation && animation.affectedStickers[i])
                ? _transformSingleton(() => {
                    return glMat.rotate(
                        glMat.create(),
                        puzzle.perspective,
                        spring.position * Math.PI / 180,
                        animation.axis
                    );
                })
                : puzzle.perspective;

            gl.uniformMatrix4fv(
                programInfo.uniforms.transformMatrix,
                false,
                transform,
            );

            const rotation = (animation && animation.affectedStickers[i])
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
                programInfo.uniforms.rotateMatrix,
                false,
                rotation,
            );

            bindHintType(gl, notHintBuffer);

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
