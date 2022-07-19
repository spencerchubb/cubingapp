let testIndex = 0;

/** 
 * Register an event listener that listens to the Enter key.
 * Pressing Enter will iterate through the tests.
 */
export function register(tests) {
    document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            if (testIndex >= tests.length) {
                console.log("Tests done!");
                return;
            }
            tests[testIndex]();
            testIndex++;
        }
    });
}

/**
 * Use this function to dispatch click events for any element.
 * Only some elements, such as the button, have a click method.
 */
export function click(ele: HTMLElement) {
    ele.dispatchEvent(new Event("click"));
}

export function setValue(input: HTMLInputElement, calcVal: (number) => number) {
    // Must parseInt and then concatenate with "" to convert back to string.
    const newValue = calcVal(parseInt(input.value));
    input.value = "" + newValue;

    input.dispatchEvent(new Event("change"));
}