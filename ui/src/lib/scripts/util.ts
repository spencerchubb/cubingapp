export function deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

export function replaceAll(str: string, search: string, replacement: string) {
    return str.split(search).join(replacement);
}

export function range(n: number): number[] {
    const out = Array(n);
    for (let i = 0; i < n; i++) {
        out[i] = i;
    }
    return out;
}