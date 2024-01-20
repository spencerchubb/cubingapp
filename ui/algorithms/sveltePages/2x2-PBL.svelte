<script>
    import AlgSetPage from "../algSetPage";
    import { algSet } from "../../src/lib/scripts/algSets/2x2-PBL";
</script>

<AlgSetPage {algSet}>
    <div>
        <h1>2x2 PBL Algorithms</h1>
        <p>
            PBL stands for Permutation of Both Layers, and it is the third step of the Ortega method.
            Ortega is a good intermediate method for 2x2 solvers who have already learned the beginner method.
        </p>
        <p>
            Here is how the Ortega method works:
        </p>
        <p>
            Typically in the beginner method, you start with the first layer.
            In the Ortega method, you just start with a face, or in other words, the first layer doesn't have to be permuted correctly.
            The second step of Ortega is to orient the last layer, and lastly, you do PBL to finish the 2x2.
        </p>
        <p>
            PBL only has 6 cases, and you may already know 2 of the cases from other methods: J Perm and Y Perm.
            For this reason, PBL is a very easy algorithm set to learn.
        </p>
        <h2>Cubers also use</h2>
        <a href="/algorithms/2x2-CLL" class="link also-use">
            2x2 CLL
        </a>
        <a href="/algorithms/2x2-EG1" class="link also-use">
            2x2 EG1
        </a>
        <a href="/algorithms/2x2-EG2" class="link also-use">
            2x2 EG2
        </a>
    </div>
</AlgSetPage>