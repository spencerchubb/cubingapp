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
    _velocity: number;
    _acceleration: number;

    // set this to specify the target position
    target: number;

    constructor() {
        this.position = 0;
        this._velocity = 200;
        this._acceleration = 0;

        this.target = 0;
    }

    update(dt: number) {
        const springF = -k * (this.position - this.target);
        const dampingF = -f * this._velocity;

        this._acceleration = springF + dampingF;

        // v = v0 + at
        this._velocity += this._acceleration * dt;

        // x = x0 + vt
        this.position += this._velocity * dt;
    }
}