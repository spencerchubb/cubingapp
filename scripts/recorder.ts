/**
 * This class records solves. It has methods for recording moves, recording the 
 * times of moves, and adding notes to solves.
 */
export class Recorder {
    _isRecording: boolean;
    cubeState: number[]
    moves: Move[];

    constructor() {
        this._isRecording = false;
    }

    start(cubeState: number[]) {
        this._isRecording = true;
        this.cubeState = cubeState;
        this.moves = [];
    }

    /**
     * Valid moves are U, D, L, R, F, B, their inverses, or their 
     * double-turn equivalents.
     */
    addMove(move: string, time: number) {
        if (this._isRecording) {
            this.moves.push({ move, time });
        }
    }
}

type Move = {
    move: string,
    time: number,
}