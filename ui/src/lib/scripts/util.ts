export function deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

export function replaceAll(str: string, search: string, replacement: string) {
    return str.split(search).join(replacement);
}