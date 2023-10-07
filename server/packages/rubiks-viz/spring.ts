// spring constant
const k = 100;

// friction constant
const f = 15;

/**
 * This class is used to animate a value from one state to another.
 * It is based on the spring physics model.
 */
export class Spring {
    position: number;
    private v: number;
    private a: number;

    // set this to specify the target position
    target: number;

    constructor() {
        this.position = 0;
        this.v = 200;
        this.a = 0;

        this.target = 0;
    }

    update(dt: number) {
        const springF = -k * (this.position - this.target);
        const dampingF = -f * this.v;

        this.a = springF + dampingF;

        // v = v0 + at
        this.v += this.a * dt;

        // x = x0 + vt
        this.position += this.v * dt;
    }
}