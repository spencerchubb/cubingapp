import { expandDoubleMoves, type Scene } from "../../scripts/rubiks-viz";

type State = {
    playing: boolean;
}

export function newAlgStepper(_scene: Scene, _setup: string, _alg: string) {
    let callback;
    let state: State = {
        playing: false,
    }

    let interval: NodeJS.Timer;

    let scene = _scene;
    let alg = _alg;
    let moves = expandDoubleMoves(alg).split(" ");
    let moveIndex = 0;

    scene.cube.performAlg(_setup);

    return {
        setCallback: (_callback: (s: State) => void): State => {
            callback = _callback;
            return state;
        },
        clickPlayOrPause: () => {
            if (state.playing) {
                state.playing = false;
                clearInterval(interval);
            } else {
                if (moveIndex >= moves.length) {
                    moveIndex = 0;
                    scene.cube.solve();
                    scene.cube.performAlg(_setup);
                }

                state.playing = true;
                interval = setInterval(() => {
                    if (moveIndex >= moves.length) {
                        clearInterval(interval);
                        state.playing = false;
                        callback(state);
                        return;
                    }
                    scene.cube.performMove(moves[moveIndex], true);
                    moveIndex++;
                }, 800);
            }
        
            callback(state);
        },
        clickLeft: () => {
            if (moveIndex <= 0 || state.playing) return;
            moveIndex--;
            scene.cube.performMove(moves[moveIndex], false);
        },
        clickRight: () => {
            if (moveIndex >= moves.length || state.playing) return;
            scene.cube.performMove(moves[moveIndex], true);
            moveIndex++;
        }
    }
}