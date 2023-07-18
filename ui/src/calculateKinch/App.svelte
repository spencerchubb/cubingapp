<script lang="ts">
    import { controller, setCallback } from "./app";
    import SideNav from "../lib/components/SideNav.svelte";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";
    import { CONTINENTS, COUNTRIES } from "../lib/scripts/wca";

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
        <h1>Calculate Kinch Rank</h1>
        <form>
            <label for="wcaId">WCA ID</label>
            <input
                name="wcaId"
                type="text"
                placeholder="Enter WCA ID"
                bind:value={state.wcaId}
                on:keypress={(event) => {
                    if (event.code === "Enter") {
                        controller.calculateKinchScore();
                    }
                }}
            />
            <label for="region">Region</label>
            <select
                name="region"
                bind:value={state.region}
            >
                <option value="World">World</option>
                <optgroup label="Continents">
                    {#each CONTINENTS as continent}
                        <option value={continent}>{continent}</option>
                    {/each}
                </optgroup>
                <optgroup label="Countries">
                    {#each COUNTRIES as country}
                        <option value={country}>{country}</option>
                    {/each}
                </optgroup>
            </select>
            <button
                on:click={controller.calculateKinchScore}
            >
                Calculate
            </button>
        </form>
        {#if state.error}
            <p style="align-self: center;">{state.error}</p>
        {/if}
        {#if state.kinchScore !== undefined}
            <p
                style="
                    align-self: center;
                    font-size: 1.3rem;
                    padding: 12px;
                    margin: 8px;
                    border: solid 2px var(--gray-600);
                    border-radius: 8px;"
            >
                Kinch Score - {state.kinchScore}
            </p>
        {/if}
        {#if state.kinchData !== undefined}
            <table id="events-table">
                <th>Event</th>
                <th>Score</th>
                <th>Status</th>
                <tbody>
                    {#each state.kinchData as kinchDataPoint}
                        <tr>
                            <td>{kinchDataPoint.event}</td>
                            <td>{kinchDataPoint.ratio}</td>
                            <td
                                style="background: {kinchDataPoint.color};"
                            >{kinchDataPoint.statusText}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
        <div class="col" style="width: 100%; max-width: 600px; gap: 16px;">
            <h2>What is a Kinch Rank?</h2>
            <p>
                A Kinch Rank is one way of measuring a cuber's overall performance rather than measuring just one event. To compute a Kinch Score, we compute the average of each event ratio, where an event ratio is your personal record divided by the world record.
            </p>
            <p>
                The Multi-blind score is calculated by summing the points and the proportion of the hour left. That means the time is also incorporated into the Kinch Score.
            </p>
            <p>
                There is one more special rule about calculating the Kinch Score. We take your better score between:
            </p>
            <ul>
                <li>FMC single and average</li>
                <li>3BLD single and average</li>
                <li>4BLD single and average</li>
                <li>5BLD single and average</li>
            </ul>
            <h2>What does my Kinch Score mean?</h2>
            <p>
                Higher scores are better. The maximum you can get is 100, assuming you held the world record in every event.
            </p>
            <p>
                For comparison, the best Kinch Score in the world (at the time of writing) is Stanley Chapel with a score of 74.
                <a href="https://wca.cuber.pro/kinch/persons" class="link">
                    Top rankings here
                </a>
            </p>
            <h2>What is the origin of Kinch Ranks?</h2>
            <p>
                It was introduced on speedsolving.com by kinch2002 in
                <a href="https://www.speedsolving.com/threads/all-round-rankings-kinchranks.53353/" class="link">this post</a>
                😊
            </p>
            <h2>Why use Kinch Ranks?</h2>
            <p>
                Kinch Ranks and Sum of Ranks are both ways to measure the all-round performance of a cuber, but there are a few reasons why kinch2002 devised the system.
            </p>
            <ul>
                <li>Kinch Ranks combines the singles and averages</li>
                <li>You are not penalized as heavily for not having competed in an event</li>
                <li>Avoids event biases - For example, you have to be <b>really</b> good at 3x3 to have a good Sum of Ranks</li>
                <li>In Sum of Ranks, there is no incentive for the world record holder to improve that event</li>
            </ul>
            <h2>Alternatives to Kinch Ranks</h2>
            <p>
                As mentioned before, Kinch Ranks is just one way to measure the all-round abilities of a cuber. If you want to know your Sum of Ranks, you can visit our <a class="link" href="/calculate-sum-of-ranks.html">Sum of Ranks Calculator</a> as well.
            </p>
            <p>
                Different aggregation methods will have different tradeoffs, and some will debate which methods are better. That's why we provide multiple ways to measure your all-round abilities.
            </p>
        </div>
        <div style="margin-top: 32px;"></div>
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    label {
        font-weight: bold;
        color: var(--gray-100);
    }

    p, ul {
        align-self: start;
        line-height: 1.5rem;
    }

    h2 {
        margin-top: 32px;
    }

    #events-table th, #events-table td {
        text-align: left;
        border: none;
        border-bottom: solid 1px var(--gray-500);
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form label {
        margin-bottom: 8px;
    }

    form input, form select {
        margin-bottom: 24px;
    }

    form input, form select, form button {
        width: 100%;
    }

    @media (min-width: 600px) {
        form {
            display: grid;
            align-items: center;
            grid-template-rows: auto auto auto;
            gap: 24px 16px;
        }

        form label[for="wcaId"], form input[name="wcaId"] {
            grid-row: 1;
            margin-bottom: 0;
        }

        form label[for="region"], form select[name="region"] {
            grid-row: 2;
            margin-bottom: 0;
        }

        form button {
            grid-row: 3;
            grid-column: 1 / 3;
        }
    }
</style>