type ElementOptions = {
    children?: Node[],
    className?: string,
    d?: string,
    id?: string,
    innerHTML?: string,
    height?: string,
    onclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null,
    placeholder?: string,
    stroke?: string,
    strokeWidth?: string,
    style?: string,
    type?: string,
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
    ele.onclick = args.onclick;
    for (const key in args) {
        if (key === "children") {
            args.children.forEach(child => {
                ele.appendChild(child);
            });
        } else {
            ele[key] = args[key];
        }
    }
    return ele;
}