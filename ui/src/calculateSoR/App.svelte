<script lang="ts">
    import { controller, setCallback } from "./app";
    import SideNav from "../lib/components/SideNav.svelte";
    import NavBarIcon from "../lib/components/NavBarIcon.svelte";
    import MenuIcon from "../lib/components/icons/MenuIcon.svelte";

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
        <a style="align-self: center;" class="link" href="https://cubingapp.com"
            >CubingApp</a
        >
        <!-- empty div so the text is centered -->
        <div style="width: 48px;" />
    </nav>
    <div class="col" style="width: 100%; padding: 16px; gap: 16px;">
        <h1>Calculate Sum of Ranks (SoR)</h1>
        <form style="display: grid;">
            <label for="wcaId">WCA ID</label>
            <input
                name="wcaId"
                type="text"
                placeholder="Enter WCA ID"
                bind:value={state.wcaId}
                on:keypress={(event) => {
                    if (event.code === "Enter") {
                        controller.calculate();
                    }
                }}
            />
            <button on:click={controller.calculate}>Calculate</button>
        </form>
        {#if state.error}
            <p style="align-self: center;">{state.error}</p>
        {/if}
        {#if state.loading}
            <p style="margin: auto;">Fetching data...</p>
            <div class="spinner" />
        {/if}
        {#if state.wcaPerson && state.totalSingle && state.totalAverage}
            <h2 style="margin: 0;">{state.wcaPerson.person.name}</h2>
            <table>
                <th>Event</th>
                <th>Single</th>
                <th>Average</th>
                <tbody>
                    <tr>
                        <td>Total</td>
                        <td>{state.totalSingle}</td>
                        <td>{state.totalAverage}</td>
                    </tr>
                    {#each Object.entries(state.wcaPerson.personal_records) as [event, record]}
                        <tr>
                            <td>{event}</td>
                            <td>{record.single?.world_rank ?? "N/A"}</td>
                            <td>{record.average?.world_rank ?? "N/A"}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
        <div class="col" style="width: 100%; max-width: 600px; gap: 16px;">
            <h2>What is Sum of Ranks (SoR)?</h2>
            <p>
                Sum of Ranks is one way of measuring a cuber's overall
                performance rather than measuring just one event. To compute a
                Sum of Ranks, we simply add up the cuber's rank in each event.
                It is possible to compute a cuber's Sum of Ranks at a global
                level, continental level, and national level.
            </p>
            <h2>What does my Sum of Ranks mean?</h2>
            <p>
                Lower scores are better. For example, since the world record
                holder is ranked 1st in the world, their rank for that event is
                1.
            </p>
            <h2>Alternatives to Sum of Ranks</h2>
            <p>
                As mentioned before, Sum of Ranks is just one way to measure the
                all-round abilities of a cuber. If you want to know your Kinch
                Score, you can visit our <a
                    class="link"
                    href="/calculate-kinch.html">Kinch Calculator</a
                > as well.
            </p>
            <p>
                Different aggregation methods will have different tradeoffs, and
                some will debate which methods are better. That's why we provide
                multiple ways to measure your all-round abilities.
            </p>
        </div>
        <div style="margin-top: 32px;" />
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    label {
        font-weight: bold;
        color: var(--gray-100);
    }

    p {
        align-self: start;
        line-height: 1.5rem;
    }

    h2 {
        margin-top: 32px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form label {
        margin-bottom: 8px;
    }

    form input {
        margin-bottom: 24px;
    }

    form input, form button {
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

        form button {
            grid-row: 2;
            grid-column: 1 / 3;
        }
    }
</style>
