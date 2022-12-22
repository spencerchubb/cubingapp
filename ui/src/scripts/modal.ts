import { createElement } from "./common/element";

export function renderModal() {
    const modal = createElement("div", {
        className: "col fixed z-20 h-1/2 max-w-xl bg-white rounded-lg m-4 p-4",
        onclick: event => {
            event.stopPropagation();
        },
    });
    const background = createElement("div", {
        className: "col justify-center fixed z-10 w-screen h-screen bg-black bg-opacity-50",
        onclick: event => {
            (event.target as HTMLElement).remove();
        },
        children: [modal],
    });

    return [ modal, background ] as const;
}