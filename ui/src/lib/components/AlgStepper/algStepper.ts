import { type Scene } from "../../scripts/rubiks-viz";

type State = {
    playing: boolean;
    moveIndex: number;
}

export function newAlgStepper(_scene: Scene, _setup: string, _alg: string) {
    let callback;
    let state: State = {
        playing: false,
        moveIndex: 0,
    }

    let interval: NodeJS.Timer;

    let scene = _scene;
    let moves = _alg.split(" ");

    scene.puzzle.performAlg(_setup);

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
                if (state.moveIndex >= moves.length) {
                    state.moveIndex = 0;
                    scene.puzzle.solve();
                    scene.puzzle.performAlg(_setup);
                }

                state.playing = true;
                interval = setInterval(() => {
                    if (state.moveIndex >= moves.length) {
                        clearInterval(interval);
                        state.playing = false;
                    } else {
                        scene.puzzle.performMove(moves[state.moveIndex], true);
                        state.moveIndex++;
                    }

                    callback(state);
                }, 800);
            }
        
            callback(state);
        },
        clickLeft: () => {
            if (state.moveIndex <= 0 || state.playing) return;
            state.moveIndex--;
            scene.puzzle.performMove(moves[state.moveIndex], false);

            callback(state);
        },
        clickRight: () => {
            if (state.moveIndex >= moves.length || state.playing) return;
            scene.puzzle.performMove(moves[state.moveIndex], true);
            state.moveIndex++;

            callback(state);
        }
    }
}