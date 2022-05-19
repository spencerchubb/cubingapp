// import * as scene from "./scene";
import { idFromColor } from "./pickId.js";

export function listenToNavButtons() {
    document.querySelector("#learnButton").addEventListener("click", () => {
        document.location = "index.html";
    });
    document.querySelector("#playButton").addEventListener("click", () => {
        document.location = "play.html";
    });
    document.querySelector("#trainButton").addEventListener("click", () => {
        document.location = "train.html";
    });
    document.querySelector("#cubleButton").addEventListener("click", () => {
        document.location = "cuble.html";
    });
    document.querySelector("#settingsButton").addEventListener("click", () => {
        document.location = "settings.html";
    });
}

function posRelativeToCanvas(x: number, y: number, canvas) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: x - rect.left,
        y: y - rect.top,
    };
}

export function addDragEvents(scene) {

    function pointerDown(x: number, y: number) {
        const pos = posRelativeToCanvas(x, y, scene.canvas);
        scene.dragDetector.onPointerDown(pos.x, pos.y);

        // Redraw in order to read the pixels under the pointer coordinates
        // that were just set.
        scene.render();
    }

    function pointerMove(x: number, y: number) {
        const pos = posRelativeToCanvas(x, y, scene.canvas);
        scene.dragDetector.onPointerMove(pos.x, pos.y);

        // If the pointer down event started on a gap between the stickers, then the picking 
        // color will not be a valid picking color. In this case, we want to keep updating
        // pixelX and pixelY until we read a valid picking color.
        let pixels = scene.dragDetector.pixels;
        if (pixels[1] !== 0 || pixels[2] !== 0 || pixels[3] !== 0) {
            scene.dragDetector.pixelX = pos.x * scene.gl.canvas.width / scene.gl.canvas.clientWidth;
            scene.dragDetector.pixelY = scene.gl.canvas.height - pos.y * scene.gl.canvas.height / scene.gl.canvas.clientHeight - 1; // why -1?

            scene.render();
        }
    }

    function pointerUp() {
        const id = idFromColor(scene.dragDetector.pixels);
        if (scene.dragDetector.getNumOfMouseMoves() > 2) {
            if (id == Math.pow(256, 4) - 1) {
                scene.cube.doCubeRotateFromMouseDrag(
                    scene.dragDetector.mouseXOnDown,
                    scene.dragDetector.mouseYOnDown,
                    scene.dragDetector.getDx(),
                    scene.dragDetector.getDy());
                scene.animateTurn();
            } else {
                const dx = scene.dragDetector.getDx();
                const dy = scene.dragDetector.getDy();
                scene.cube.doTurnFromMouseDrag(id, dx, dy);
                scene.animateTurn();
            }
        }
    }

    // touch events are for mobile, pointer events are for desktop
    scene.gl.canvas.addEventListener('touchstart', (event) => {
        const touch = event.touches[0];
        pointerDown(touch.pageX, touch.pageY);
    });

    scene.gl.canvas.addEventListener('touchmove', (event) => {
        const touch = event.touches[0];
        pointerMove(touch.pageX, touch.pageY);
    });

    scene.gl.canvas.addEventListener('touchend', () => {
        pointerUp();
    });

    scene.gl.canvas.addEventListener('pointerdown', (event) => {
        pointerDown(event.pageX, event.pageY);
    });

    scene.gl.canvas.addEventListener('pointermove', (event) => {
        pointerMove(event.pageX, event.pageY);
    });

    scene.gl.canvas.addEventListener('pointerup', () => {
        pointerUp();
    });
}

