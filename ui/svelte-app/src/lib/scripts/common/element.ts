type ElementOptions = {
    alt?: string,
    checked?: boolean | string,
    children?: Node[],
    className?: string,
    d?: string,
    id?: string,
    innerHTML?: string,
    height?: string,
    onchange?: ((this: GlobalEventHandlers, ev: Event) => any) | null,
    onclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null,
    onselect?: ((this: GlobalEventHandlers, ev: Event) => any) | null,
    placeholder?: string,
    selected?: boolean,
    src?: string,
    stroke?: string,
    strokeWidth?: string,
    style?: string,
    title?: string,
    type?: string,
    value?: string,
    viewBox?: string,
    width?: string,
    xmlns?: string,
};

export function querySelector(selector: string, args: ElementOptions): HTMLElement {
    const ele = document.querySelector(selector) as HTMLElement;
    return setOptions(ele, args);
}

export function createElement(tag: string, args: ElementOptions): HTMLElement {
    const ele = document.createElement(tag) as HTMLElement;
    return setOptions(ele, args);
}

export function setOptions(ele: HTMLElement, args: ElementOptions): HTMLElement {
    for (const key in args) {
        if (key === "children") {
            args.children.forEach(child => {
                if (!child) return;
                ele.appendChild(child);
            });
        } else {
            ele[key] = args[key];
        }
    }
    return ele;
}