export function renderModal() {
    const background = document.createElement("div");
    const modal = document.createElement("div");

    background.className = "modal-bg";
    background.addEventListener("click", () => {
        background.remove();
    });

    modal.className = "col modal";
    modal.addEventListener("click", event => {
        // Prevent this click from propogating to the background
        event.stopPropagation();
    });

    background.appendChild(modal);
    document.querySelector("body").appendChild(background);

    return [
        modal,
        () => background.remove(),
    ] as const;
}