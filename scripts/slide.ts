/**
 * 725 was chosen because 425 is the width of the main content and 300 is the width of the right panel.
 * 425 + 300 = 725
 */
export const NARROW = 725;

let opened = false;

export function open(ele: HTMLElement) {
    opened = true;
    ele.style.display = "flex";
    ele.classList.add("slideLeftOpen");
    if (document.documentElement.clientWidth < NARROW) {
        ele.classList.add("slideLeftClosed");
    } else {
        ele.classList.remove("slideLeftClosed");
    }
}

export function close(ele: HTMLElement) {
    opened = false;
    if (document.documentElement.clientWidth < NARROW) {
        ele.classList.add("slideLeftClosed");
        ele.classList.remove("slideLeftOpen");
        ele.style.display = "flex";
    } else {
        ele.style.display = "none";
    }
}

export function toggle(ele: HTMLElement) {
    if (opened) {
        close(ele);
    } else {
        open(ele);
    }
}

export function renderHeader(title: string) {
    return `
    <div class="row" style="justify-content: space-between; width: 100%; padding-bottom: 16px;">
        <p style="font-weight: bold; padding-right: 2rem;">${title}</p>
        <svg id="closeDrawer" class="closeDrawer" width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
            <path class="closeDrawer" d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
        </svg>
    </div>
    `;
}