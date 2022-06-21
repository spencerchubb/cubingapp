export function listenToNavButtons() {
    document.querySelector("#learnButton").addEventListener("click", () => {
        document.location = "index.html";
    });
    document.querySelector("#playButton").addEventListener("click", () => {
        document.location = "play.html";
    });
    document.querySelector("#trainButton").addEventListener("click", () => {
        document.location = "train.html";
    });
    document.querySelector("#cubleButton").addEventListener("click", () => {
        document.location = "cuble.html";
    });
}