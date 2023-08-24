export type OrientationOptions = {
    label: string,
    value: string,
}[];

export const cubeOrientationOptions: OrientationOptions = [
    { label: "White bottom", value: "z2" },
    { label: "Yellow bottom", value: "" },
    { label: "Green bottom", value: "x" },
    { label: "Blue bottom", value: "x'" },
    { label: "Orange bottom", value: "z" },
    { label: "Red bottom", value: "z'" },
];

export const pyraOrientationOptions: OrientationOptions = [
    { label: "Yellow bottom", value: "" },
    { label: "Red bottom", value: "z'"},
    { label: "Blue bottom", value: "z"},
    { label: "Green bottom", value: "x'"},
];