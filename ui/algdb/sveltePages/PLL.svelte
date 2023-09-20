<script>
    import AlgSetPage from "../algSetPage";
    import { algSet } from "../../src/lib/scripts/algSets/PLL";
</script>

<AlgSetPage {algSet}>
    <div>
        <h1>PLL Algorithms</h1>
        <p>
            Permutation of Last Layer (also called PLL) is the last step of the CFOP Rubik's Cube method.
            CFOP stands for Cross, F2L, OLL, and PLL.
        </p>
        <p>
            Up to this point, the first two layers should be solved, and the last layer should be oriented.
            After PLL, the entire Rubik's Cube should be solved.
        </p>
        <p>
            PLL has 21 algorithms, so it has less algorithms than OLL.
            Most cubers recommend learning PLL before OLL because you only need to learn 21 algorithms to improve your times.
        </p>
        <p>
            Check out the <a href="/train.html" class="link">CubingApp algorithm trainer</a> if you want to memorize the algorithms as easily as possible.
        </p>
        <p>
            For advanced cubers, there are more technique to learn beyond the standard 21 algorithms.
        </p>
        <ul>
            <li>
                Two-sided PLL recognition: Determine the PLL case only using the two sides that are facing you.
                If you have to look at multiple sides, it will naturally take longer, so advanced cubers prefer to spot the case only using two sides.
            </li>
            <li>
                AUF prediction: Anticipate what the AUF (Adjust U Face) is going to be.
                After executing PLL, you may have to do a U/U'/U2 to adjust the U face.
                Cubers prefer to predict the AUF before or while executing PLL so they don't have to spend time thinking about what it will be.
            </li>
        </ul>
        <h2>Cubers also use</h2>
        <a href="/algdb/F2L.html" class="link also-use">
            F2L
        </a>
        <a href="/algdb/OLL.html" class="link also-use">
            OLL
        </a>
    </div>
</AlgSetPage>