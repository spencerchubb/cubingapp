import * as scene from "./scene";
import { addListenersForLeftModal } from "./ui";
import { AE, addAnalyticsEvent } from "./analytics";
import * as db from "./db";

function main() {
    addAnalyticsEvent(AE.ViewReplay);

    // Initial canvas render
    scene.renderCanvas();

    addListenersForLeftModal();

    const searchParams = new URLSearchParams(window.location.search);
    const solveID = parseInt(searchParams.get("solveID"));
    db.getTime(solveID, time => {
        console.log(time);
        scene.cube.setCubeState(time.initialCubeState);
        scene.render();
    });
}

main();