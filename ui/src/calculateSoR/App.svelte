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
        <a
            style="align-self: center;"
            class="link"
            href="https://cubingapp.com"
        >CubingApp</a>
        <!-- empty div so the text is centered -->
        <div style="width: 48px;"></div>
    </nav>
    <div class="col" style="width: 100%; padding: 16px; gap: 16px;">
        <h1>Calculate Sum of Ranks (SOR)</h1>
        <form>
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
            <label for="region">Region</label>
            <select
                name="region"
                bind:value={state.region}
            >
                <option value="World">World</option>
                <option value="Continent">Continent</option>
                <option value="Country">Country</option>
            </select>
            <label for="type">Type</label>
            <select
                name="type"
                bind:value={state.type}
            >
                <option value="Single">Single</option>
                <option value="Average">Average</option>
            </select>
            <button
                on:click={controller.calculate}
            >
                Calculate
            </button>
        </form>
        {#if state.loading}
            <p style="margin: auto;">Fetching data...</p>
            <div class="spinner"></div>
        {/if}
        {#if state.data !== undefined}
            <div style="overflow-x: auto; max-width: 100%;">
                <table id="events-table">
                    <th>#</th>
                    <th>Name</th>
                    <th>Total</th>
                    {#each state.data.content[0].events as event}
                        <th>{event.event.id}</th>
                    {/each}
                    <tbody>
                        {#each state.data.content as person}
                            <tr>
                                <td>{person.regionRank}</td>
                                <td>{person.name}</td>
                                <td>{person.overall}</td>
                                {#each person.events as event}
                                    <td
                                        style={event.regionalRank <= 10
                                            ? "font-weight: bold; color: var(--green-500);"
                                            : event.completed
                                                ? "color: var(--gray-100);"
                                                : "font-weight: bold; color: var(--red-500);"}
                                    >
                                        {event.regionalRank}
                                    </td>
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {/if}
        <div class="col" style="width: 100%; max-width: 600px; gap: 16px;">
            <h2>What is Sum of Ranks (SOR)?</h2>
            <p>
                Sum of Ranks is one way of measuring a cuber's overall performance rather than measuring just one event. To compute a Sum of Ranks, we simply add up the cuber's rank in each event. It is possible to compute a cuber's Sum of Ranks at a global level, continental level, and national level.
            </p>
            <h2>What does my Sum of Ranks mean?</h2>
            <p>
                Lower scores are better. For example, since the world record holder is ranked 1st in the world, their rank for that event is 1.
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

    p {
        align-self: start;
        line-height: 1.5rem;
    }

    h2 {
        margin-top: 32px;
    }

    #events-table {
        border: solid 1px var(--gray-500);
        font-size: 15px;
    }

    #events-table th, #events-table td {
        text-align: left;
        border: none;
        border-bottom: solid 1px var(--gray-500);
        white-space: nowrap;
        padding: 8px;
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

        form label[for="type"], form select[name="type"] {
            grid-row: 3;
            margin-bottom: 0;
        }

        form button {
            grid-row: 4;
            grid-column: 1 / 3;
        }
    }
</style>