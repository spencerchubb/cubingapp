export function colorFromId(id) {
    if (id >= 4294967295) {
        // Max id allowed 256^4 - 2.
        // 255, 255, 255, 255 is the id for the background which would correspond to id 256^4 - 1.
        console.error("Id is too large for rgba!");
        return;
    }
    const x = 256;
    const y = 256 * 256;
    const z = 256 * 256 * 256;
    let aremainder = id % z;
    let alpha = (id - aremainder) / z;
    let bremainder = aremainder % y;
    let blue = (aremainder - bremainder) / y;
    let gremainder = bremainder % x;
    let green = (bremainder - gremainder) / x;
    let red = gremainder;
    return [red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0];
}

export function idFromColor(rgba) {
    return rgba[0]
        + rgba[1] * 256
        + rgba[2] * 256 * 256
        + rgba[3] * 256 * 256 * 256;
}