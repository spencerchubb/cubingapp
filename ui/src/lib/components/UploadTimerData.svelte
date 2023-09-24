<script lang="ts">
    import { type TimerData, parseTimerData } from "../scripts/timerData";

    export let callback: (data: TimerData) => void;

    let filename: string = "No file chosen";

    function displayFilePicker() {
        const input = document.createElement("input") as HTMLInputElement;
        input.type = "file";
        input.onchange = () => {
            if (!input.files) return;
            const file = input.files[0];
            if (file) {
                filename = file.name;

                const reader = new FileReader();
                reader.onload = () => {
                    const result = reader.result as string;
                    const timerData = parseTimerData(result);
                    console.log(timerData);

                    callback(timerData);
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }
</script>

<div
    class="col"
    style="
        align-items: start;
        padding: 16px;
        border-radius: 8px;
        border: solid 1px var(--gray-600);"
>
    <p>Supported timers:</p>
    <ul style="margin-top: 8px;">
        <li>csTimer</li>
        <li>CubeDesk</li>
        <li>Other (tell me and I'll add it)</li>
    </ul>
    <div class="row" style="gap: 16px; margin-top: 24px;">
        <button on:click={displayFilePicker}> Upload file </button>
        <p>{filename}</p>
    </div>
</div>
