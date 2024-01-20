<script>
    import AlgSetPage from "../algSetPage";
    import { algSet } from "../../src/lib/scripts/algSets/2x2-EG1";
</script>

<AlgSetPage {algSet}>
    <div>
        <h1>2x2 EG1 Algorithms</h1>
        <p>
            EG1 is commonly learned after CLL. CLL, EG1, and EG2 go hand in hand. These three algorithm sets will allow you to solve the entire cube after solving one face.
        </p>
        <p>
            CLL: First layer is solved. This occurs 1/6th of the time<br>
            EG1: First layer has an adjacent swap. This occurs 4/6th of the time<br>
            EG2: First layer has a diagonal swap. This occurs 1/6th of the time
        </p>
        <h2>Cubers also use</h2>
        <a href="/algorithms/2x2-CLL" class="link also-use">
            2x2 CLL
        </a>
        <a href="/algorithms/2x2-EG2" class="link also-use">
            2x2 EG2
        </a>
    </div>
</AlgSetPage>