<script>
    import PageSkeleton from "../components/PageSkeleton.svelte";
    import SQ1 from "../components/SQ1.svelte";

    import { algSet } from "../../src/lib/scripts/algSets/SQ1-CSP";
</script>

<PageSkeleton>
    <div style="width: 100%; height: 100%; overflow-y: auto; padding: 16px 16px 64px 16px;">
        <div class="col" style="gap: 32px;">
            <h1>Square-1 CSP Algorithms</h1>
            <p style="max-width: 600px; margin: 0 auto;">
                "Cubeshape Parity, as the name suggests, involves fixing parity errors on the Square-1 during the cubeshape step. The main advantage to this method is that checking for parity occurs during inspection, which isn't factored into your final time."
                - <a href="http://brandonlin.com/cubing/csp.html" class="link">Brandon Lin</a>
            </p>
            <div class="all-cases-div">
                {#each algSet.cases as _case}
                    <div class="case-div">
                        <div class="row">
                            <SQ1 alg={_case.algs[0]} size={100} />
                        </div>
                        <div style="flex: 0 1 700px;">
                            <h3>{_case.name}</h3>
                            <ul>
                                {#each _case.algs as alg}
                                    <li>{alg}</li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</PageSkeleton>

<style>
    h1 {
        width: 100%;
        text-align: center;
    }

    .all-cases-div {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1000px) {
        .all-cases-div {
            display: grid;
            grid-template-columns: auto auto;
            max-width: 1000px;
            margin: auto;
        }
    }

    .case-div {
        border-top: solid 1px gray;
        display: flex;
        flex-wrap: wrap;
        padding: 16px;
        gap: 0 16px;
    }

    .case-div h3,
    .case-div ul {
        margin-top: 8px;
        overflow-wrap: anywhere;
    }
</style>