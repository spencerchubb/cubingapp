type OrientationOption = {
    label: string,
    value: string,
};

export function getInitialOrientation(puzzle: string): string {
    let saved = localStorage.getItem(`${puzzle}-orientation`);
    if (saved !== null) return saved;
    const options = getOrientationOptions(puzzle);
    return options[0].value;
}

export function getOrientationOptions(puzzle: string): OrientationOption[] {
    switch (puzzle) {
        case "2x2":
        case "3x3":
        case "4x4":
        case "5x5":
        case "6x6":
        case "7x7":
            return cubeOrientationOptions;
        case "Pyraminx":
            return pyraOrientationOptions;
        case "SQ1":
            return [];
        default:
            throw new Error("No orientation options for " + puzzle);
    }
}

const cubeOrientationOptions: OrientationOption[] = [
    { label: "White bottom", value: "z2" },
    { label: "Yellow bottom", value: "" },
    { label: "Green bottom", value: "x'" },
    { label: "Blue bottom", value: "x" },
    { label: "Orange bottom", value: "z'" },
    { label: "Red bottom", value: "z" },
];

const pyraOrientationOptions: OrientationOption[] = [
    { label: "Yellow bottom", value: "" },
    { label: "Red bottom", value: "z'"},
    { label: "Blue bottom", value: "z"},
    { label: "Green bottom", value: "x'"},
];