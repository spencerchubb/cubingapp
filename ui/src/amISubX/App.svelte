<script lang="ts">
    import { handleTimerData, onChangeSolves, setCallback } from "./app";
    import SideNav from "../lib/components/SideNav.svelte";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import CoolCalculators from "../lib/components/CoolCalculators.svelte";
    import UploadTimerData from "../lib/components/UploadTimerData.svelte";

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
    <div class="col" style="width: 100%; padding: 0 16px; margin-bottom: 32px;">
        <div class="col" style="width: 100%; max-width: 600px;">
            <h2>How do I know if I'm sub-X?</h2>
            <p>
                Have you ever wondered if you are sub-10, sub-15, sub-20, etc?
                Typically cubers say that an average of 100 solves is enough to know if you are sub-X.
            </p>
            <p>
                The right number of solves is a matter of opinion.
                Some people say that you need 500 or even 1000 solves to be sure.
            </p>
            <h2>A better way</h2>
            <p>
                This tool uses a statistical formula called 'confidence intervals'.
            </p>
            <p>
                In any average, there is a chance that you got lucky or unlucky, so we can never know the "true" average with 100% confidence.
                The confidence score tells us how confident we are that the "true" average is sub-X.
            </p>
            <div style="margin-top: 32px;"></div>
            <UploadTimerData callback={handleTimerData} />
            <div class="row" style="margin-top: 16px; gap: 16px;">
                <p style="margin: 0; font-weight: bold; align-self: center;">Solves</p>
                <input
                    type="number"
                    min="1"
                    value={state.solves}
                    on:change={onChangeSolves}
                />
            </div>
            {#if state.intervals}
                <div style="margin-top: 32px;"></div>
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

    p {
        margin-top: 16px;
    }
</style>