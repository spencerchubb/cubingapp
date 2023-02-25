type ShouldRender<T> = (prevState: T, nextState: T) => boolean;

type InitElement = () => HTMLElement;

type StateToElement<T> = (state: T, prevElement: HTMLElement) => HTMLElement;

export class Component<T> {
    private element: HTMLElement;
    private prevState: T;
    private stateToElement: StateToElement<T>;

    constructor(stateToElement: StateToElement<T>) {
        this.stateToElement = stateToElement;
    }

    render(nextState: T): HTMLElement {
        if (!deepEquals(this.prevState, nextState)) {
            this.element = this.stateToElement(nextState, this.element);
        }
        this.prevState = nextState;
        return this.element;
    }
}

// TODO
// function deepCopy(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

function deepEquals(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// export abstract class MyComponent<T> {
//     private element: HTMLElement;
//     private state: T;

//     constructor(initialElement: HTMLElement, initialState: T) {
//         this.element = initialElement;
//         this.state = initialState;
//     }

//     // protected abstract shouldRender(state: T, nextState: T): boolean;

//     private shouldRender(state: T, nextState: T): boolean {
//         return !deepEquals(state, nextState);
//     }

//     protected abstract stateToElement(state: T): HTMLElement;

//     public setState(state: T): void

//     public render(calcNextState: (state: T) => T): HTMLElement {
//         const copy = deepCopy(this.state);
//         const nextState = calcNextState(copy);
//         if (this.shouldRender(this.state, nextState)) {
//             this.element = this.stateToElement(nextState);
//         }
//         this.state = nextState;
//         return this.element;
//     }
// }