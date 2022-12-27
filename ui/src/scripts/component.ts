type ShouldRender<T> = (prevState: T, nextState: T) => boolean;

type StateToElement<T> = (state: T) => HTMLElement;

export class Component<T> {
    _element: HTMLElement;
    prevState: T;
    shouldRender: ShouldRender<T>;
    stateToElement: StateToElement<T>;

    constructor(shouldRender: ShouldRender<T>, stateToElement: StateToElement<T>) {
        this.shouldRender = shouldRender;
        this.stateToElement = stateToElement;
    }

    render(nextState: T): HTMLElement {
        if (this.shouldRender(this.prevState, nextState)) {
            this._element = this.stateToElement(nextState);
        }
        this.prevState = nextState;
        return this._element;
    }
}