<script>
    import PageSkeleton from "../components/PageSkeleton.svelte";
    import SQ1 from "../components/SQ1.svelte";

    import { algSet } from "../algSets/SQ1-OBL";
</script>

<PageSkeleton>
    <div style="width: 100%; height: 100%; overflow-y: auto; padding: 16px 16px 64px 16px;">
        <div class="col" style="gap: 32px;">
            <h1>Square-1 OBL Algorithms</h1>
            <p style="max-width: 600px; margin: 0 auto;">
                Square-1 OBL stands for Orient Both Layers, and it is an advanced Square-1 technique.
                The simpler method is to orient corners and then orient edges separately.
                Orienting both layers simultaneously is faster, but it requires a lot more learning.
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
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
    }

    .case-div {
        border: solid 1px gray;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        padding: 16px;
        gap: 0 16px;
        width: 300px;
    }

    .case-div h3,
    .case-div ul {
        margin-top: 8px;
        overflow-wrap: anywhere;
    }
</style>