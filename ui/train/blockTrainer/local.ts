export function localGet(key: string): string | null {
    return localStorage.getItem(`${location.pathname}-${key}`);
}

export function localSet(key: string, value: string) {
    localStorage.setItem(`${location.pathname}-${key}`, value);
}