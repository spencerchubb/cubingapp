import * as _colors from "./colors";
import { newScene, scenes, startLoop } from "./scene";
import { addListenersForLeftModal } from "./ui";
import * as slide from "./slide";
import { CubeLogic } from "./cube";
import * as pieceIndices from "./pieceIndices";

function parseMovesFromAlg(alg?: string): string[] {
    return (alg || "").split(" ");
}

function main() {
    addListenersForLeftModal();

    interface Lesson {
        setup: string,
        algorithm: string,
        activeStickers: number[],
        cube?: CubeLogic,
        move: number,
    }

    const lessons: Lesson[] = [
        {
            setup: "",
            algorithm: "x x x x y y y y",
            activeStickers: pieceIndices.CENTERS,
            move: 0,
        },
        {
            setup: "",
            algorithm: "x x x x y y y y",
            activeStickers: [...pieceIndices.layer1Corners, ...pieceIndices.layer2Corners],
            move: 0,
        },
        {
            setup: "",
            algorithm: "x x x x y y y y",
            activeStickers: [...pieceIndices.layer1Edges, ...pieceIndices.layer2Edges, ...pieceIndices.layer3Edges],
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F'",
            algorithm: "y y y y",
            activeStickers: pieceIndices.cross,
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F D y x",
            algorithm: "x' y' D' F F",
            activeStickers: pieceIndices.cross,
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R F'",
            algorithm: "R' D' R F F",
            activeStickers: pieceIndices.cross,
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R F' F'",
            algorithm: "F",
            activeStickers: pieceIndices.cross,
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L R' D' R",
            algorithm: "F'",
            activeStickers: pieceIndices.cross,
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z",
            algorithm: "U'",
            activeStickers: [...pieceIndices.cross, ...pieceIndices.ULF],
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z L' U U L",
            algorithm: "R U R' U'",
            activeStickers: [...pieceIndices.cross, ...pieceIndices.ULF],
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z U'",
            algorithm: "R U R' U' R U R' U' R U R' U' R U R' U' R U R' U'",
            activeStickers: [...pieceIndices.cross, ...pieceIndices.ULF],
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z U' R U R' U' R U R' U' R U R' U'",
            algorithm: "R U R' U' R U R' U'",
            activeStickers: [...pieceIndices.cross, ...pieceIndices.ULF],
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B L' U' L U L' U' L",
            algorithm: "U",
            activeStickers: [...pieceIndices.firstLayer, ...pieceIndices.FR],
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B L' U' L U L' U' L U",
            algorithm: "U' L' U L y' U R U' R'",
            activeStickers: [...pieceIndices.firstLayer, ...pieceIndices.FR],
            move: 0,
        },
        {
            setup: "D D R R D' F F L L R R U B B F F U' R R U' L F' D L D D F' U U L B' U U L' U U L F' z z R U' R' R' U U R B' U' B F U' F' U F U' F'",
            algorithm: "U R U' R' y U' L' U L",
            activeStickers: [...pieceIndices.firstLayer, ...pieceIndices.FL],
            move: 0,
        },
        {
            setup: "z z R' L L F F L L F' L L F' L L F' R U F R U' R' F'",
            algorithm: "F R U R' U' F'",
            activeStickers: [...pieceIndices.f2l, ...pieceIndices.layer3Edges],
            move: 0,
        },
        {
            setup: "z z L L F D D B' R R B D D B' F' U U R' U R U B U L L U",
            algorithm: "F U R U' R' F'",
            activeStickers: [...pieceIndices.f2l, ...pieceIndices.layer3Edges],
            move: 0,
        },
        {
            setup: "z z B' L L F' D F' D R F' D D L L B' R R U U L L D D F F L L",
            algorithm: "F R U R' U' F' U U F U R U' R' F'",
            activeStickers: [...pieceIndices.f2l, ...pieceIndices.layer3Edges],
            move: 0,
        },
        {
            setup: "z z R U R' U' D R R U' R U' R' U R' U R R D' R U U R' U' R U' R'",
            algorithm: "R U R' U R U U R'",
            activeStickers: pieceIndices.allPieces,
            move: 0,
        },
        {
            setup: "z z R U R' U' D R R U' R U' R' U R' U R R D' R U R' U R U U R' U U",
            algorithm: "R U R' U R U U R' U U R U R' U R U U R'",
            activeStickers: pieceIndices.allPieces,
            move: 0,
        },
        {
            setup: "z z R U R' U' D R R U' R U' R' U R' U R R D' F R' F' L F R F' L'",
            algorithm: "R U R' U R U U R' U R U R' U R U U R' U U R U R' U R U U R'",
            activeStickers: pieceIndices.allPieces,
            move: 0,
        },
        {
            setup: "z z R U R' U' D R R U' R U' R' U R' U R R D' U'",
            algorithm: "U R U R' F' R U R' U' R' F R R U' R'",
            activeStickers: pieceIndices.allPieces,
            move: 0,
        },
        {
            setup: "z z F R U' R' U' R U R' F' R U R' U' R' F R F'",
            algorithm: "R U R' F' R U R' U' R' F R R U' R'",
            activeStickers: pieceIndices.allPieces,
            move: 0,
        },
        {
            setup: "z z M M U' M' U U M U' M M",
            algorithm: "U U U U M' M' U M' U U M U M' M'",
            activeStickers: pieceIndices.allPieces,
            move: 0,
        },
        {
            setup: "z z M M U M M U U M M U M M",
            algorithm: "U U U U M' M' U M' U U M U M' M'",
            activeStickers: pieceIndices.allPieces,
            move: 0,
        },
    ];

    function renderLesson(i: number) {
        const scene = newScene(`#scene${i}`);
        scenes.push(scene);
        lessons[i].cube = scene.cube;

        const lesson = lessons[i];

        const colors = Array(54); // hardcoded because we are using a 3x3x3 cube

        // Fill in the active stickers with bright colors
        let brights = [_colors.WHITE, _colors.GREEN, _colors.YELLOW, _colors.BLUE, _colors.ORANGE, _colors.RED];
        lesson.activeStickers.forEach(i => {
            colors[i] = brights[Math.floor(i / 9)];
        });

        // Fill in the rest with dull colors
        let dulls = [_colors.GRAY, _colors.DULL_GREEN, _colors.DULL_YELLOW, _colors.DULL_BLUE, _colors.DULL_ORANGE, _colors.DULL_ORANGE];
        for (let i = 0; i < 54; i++) {
            if (colors[i]) continue;
            colors[i] = dulls[Math.floor(i / 9)];
        }

        scene.cube.setColors(colors);

        updateMoveCounter(i);

        const setup = lesson.setup;
        scene.cube.execAlg(setup);
        scene.cube.commitStickers();
    }

    const lessonNavigator: HTMLElement = document.querySelector("#lessonNavigator");

    lessonNavigator.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.className === "lesson-p") {
            const lessonIndex = parseInt(target.getAttribute("lesson-index"));
            renderLesson(lessonIndex);
            if (document.documentElement.clientWidth < slide.NARROW) {
                slide.close(lessonNavigator);
            }
        }
    });

    function updateMoveCounter(lessonIndex: number) {
        const lesson = lessons[lessonIndex];
        const moveCounter = document.querySelector(`#moveCounter${lessonIndex}`);
        const parsedAlg = parseMovesFromAlg(lesson.algorithm);
        moveCounter.textContent = `${lesson.move} / ${parsedAlg.length}`;
    }

    for (let i = 0; i < lessons.length; i++) {
        renderLesson(i);
    }

    startLoop();

    document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.id.startsWith("leftButton")) {
            // take the number after 'leftButton'
            const lessonIndex = parseInt(target.id.substring(10));
            const lesson = lessons[lessonIndex];

            if (lesson.move <= 0) return;

            lesson.move--;
            const moves = parseMovesFromAlg(lesson.algorithm);
            lesson.cube.stepAlgorithm(moves[lesson.move], false);
            updateMoveCounter(lessonIndex);
        } else if (target.id.startsWith("rightButton")) {
            // take the number after 'rightButton'
            const lessonIndex = parseInt(target.id.substring(11));
            const lesson = lessons[lessonIndex];

            const moves = parseMovesFromAlg(lesson.algorithm);
            if (lesson.move >= moves.length) return;

            lesson.cube.stepAlgorithm(moves[lesson.move], true);

            lesson.move++;
            updateMoveCounter(lessonIndex);
        }
    });

    document.querySelector("#openClose").addEventListener("click", (event) => {
        slide.toggle(lessonNavigator);
    });

    renderBasedOnWidth();
}

window.addEventListener("resize", () => {
    renderBasedOnWidth();
});

function renderBasedOnWidth() {
    const openClose: HTMLElement = document.querySelector("#openClose");
    const drawerEle: HTMLElement = document.querySelector("#lessonNavigator");

    if (document.documentElement.clientWidth < slide.NARROW) {
        openClose.style.display = "inline-block";
        slide.close(drawerEle);
        return;
    }
    openClose.style.display = "none";
    slide.open(drawerEle);
}

main();