export function convertSeconds(seconds: number): string {
    if (seconds >= 60 * 60) {
        const hours = Math.floor(seconds / 60 / 60);
        const minutes = Math.floor((seconds - hours * 60 * 60) / 60);
        const secondsLeft = seconds - hours * 60 * 60 - minutes * 60;

        const minutesStr = minutes.toString().padStart(2, '0');
        const secondsStr = secondsLeft.toFixed(2).padStart(5, '0');
        return `${hours}:${minutesStr}:${secondsStr}`;
    } else if (seconds >= 60) {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds - minutes * 60;

        const secondsStr = secondsLeft.toFixed(2).padStart(5, '0');
        return `${minutes}:${secondsStr}`;
    }
    return seconds.toFixed(2);
}