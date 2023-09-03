<script>
    import AlgSetPage from "../algSetPage";
    import { algSet } from "../algSets/OLL";
</script>

<AlgSetPage {algSet}>
    <div>
        <h1>OLL Algorithms</h1>
        <p>
            Orientation of Last Layer (also called OLL) is the third step of the CFOP Rubik's Cube method.
            CFOP stands for Cross, F2L, OLL, and PLL.
        </p>
        <p>
            These algorithms are used to orient the last layer of the Rubik's Cube.
            That means if you start by solving the white cross, the goal of OLL is to get all the yellow stickers on top.
        </p>
        <p>
            OLL has 57 algorithms, and that number can sound scary but it's not that bad.
            You may know 9 of the algorithms already if you have learn 2-Look OLL, so that can cut the total down to 48 algorithms.
        </p>
        <p>
            Here are 3 more tips to help you learn the algorithms:
        </p>
        <ol>
            <li>
                Many cases are symmetrical, so you can use mirrors and inverses to learn the algorithms more easily.
                For example, if you know F R U R' U' F', it is easier to learn F U R U' R' F' because it is just the backwards version.
            </li>
            <li>
                Break the algorithms into triggers.
                For example, R U R' U' is a common trigger.
                The algorithm F R U R' U' R U R' U' F' is just F, followed by the trigger twice, followed by F'.
            </li>
            <li>
                Use the <a href="/train.html" class="link">CubingApp algorithm trainer</a>
            </li>
        </ol>
        <h2>Cubers also use</h2>
        <a href="/algdb/F2L.html" class="link also-use">
            F2L
        </a>
        <a href="/algdb/PLL.html" class="link also-use">
            PLL
        </a>
    </div>
</AlgSetPage>