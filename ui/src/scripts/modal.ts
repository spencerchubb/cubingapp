export function renderModal() {
    const background = document.createElement("div");
    const modal = document.createElement("div");

    background.className = "col justify-center fixed z-10 w-screen h-screen bg-black bg-opacity-50";
    background.addEventListener("click", () => {
        background.remove();
    });

    modal.className = "col fixed z-20 h-1/2 w-5/6 sm:w-1/2 bg-white rounded-lg";
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