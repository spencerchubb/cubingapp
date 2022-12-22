type ElementOptions = {
    children?: Node[],
    className?: string,
    id?: string,
    innerHTML?: string,
    onclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null,
    placeholder?: string,
    style?: string,
    type?: string,
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