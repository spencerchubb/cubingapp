<script lang="ts">
    import { displayFilePicker, setCallback } from "./app";
    import SideNav from "../lib/components/SideNav.svelte";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import CoolCalculators from "../lib/components/CoolCalculators.svelte";

    let state = setCallback((newState) => {
        state = newState;
    });

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%; overflow-y: auto;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
        <a
            style="align-self: center;"
            class="link"
            href="https://cubingapp.com"
        >CubingApp</a>
        <!-- empty div so the text is centered -->
        <div style="width: 48px;"></div>
    </nav>
    <div class="col" style="width: 100%; padding: 16px; gap: 16px;">
        <div class="col" style="width: 100%; max-width: 600px; gap: 16px;">
            <h2>How do I know if I'm sub-X?</h2>
            <p>
                Have you ever wondered if you are sub-10, sub-15, sub-20, etc?
                Many speedcubers have asked this question over the years.
            </p>
            <p>
                Typically cubers say that an average of 100 solves is enough to know if you are sub-X.
            </p>
            <p>
                Sometimes people debate whether 100 solves is enough, and the number can vary.
                Some say that you really need 500 or even 1000 solves to be sure.
            </p>
            <h2>A better way</h2>
            <p>
                In statistics, there is a concept called 'confidence'.
                It basically means "How sure are we that this is correct?"
            </p>
            <p>
                Instead of saying "100 solves is good enough", we can calculate how confident we are that you are sub-X.
            </p>
            <p>
                In any average, there is a chance that you got lucky or unlucky, so we can never know the "true" average with 100% confidence.
                The confidence score tells us how confident we are that the "true" average is sub-X.
            </p>
            <h2>How to use</h2>
            <p>
                At the moment this only works with csTimer.
                If you want it to work with more timers or have other ideas, let me know!
            </p>
            <ol>
                <li>Go to csTimer</li>
                <li>
                    Click the 'Export' button (kind of looks like a rectangle with an arrow pointing up)
                </li>
                <li>Click 'Export to file'</li>
                <li>Upload that file below</li>
            </ol>
            <button
                on:click={displayFilePicker}
            >
                Upload csTimer data
            </button>
            {#if state.error}
                <p style="color: red;">{state.error}</p>
            {/if}
            {#if state.intervals}
                <table>
                    <thead>
                        <tr>
                            <th>Session</th>
                            <th>80%</th>
                            <th>90%</th>
                            <th>95%</th>
                            <th>99%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each state.intervals as interval}
                            <tr>
                                <td>{interval.name}</td>
                                <td>{interval.eighty}</td>
                                <td>{interval.ninety}</td>
                                <td>{interval.ninetyFive}</td>
                                <td>{interval.ninetyNine}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {/if}
        </div>
        <div style="margin-top: 32px;">
            <CoolCalculators />
        </div>
        <div style="margin-top: 32px;"></div>
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    p {
        align-self: start;
        line-height: 1.5rem;
    }

    h2 {
        margin-top: 32px;
    }
</style>