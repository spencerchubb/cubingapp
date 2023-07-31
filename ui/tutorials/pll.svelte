<script lang="ts">
    import AlgStepper from "../src/lib/components/AlgStepper";
</script>

<main>
    <h1>Learn PLL for the Rubik's Cube</h1>
    <p>
        This tutorial will teach you everything you need to know about PLL.
        We teach you how to identify PLL cases, how to learn PLL algorithms, and how to practice PLL.
        Keep reading if you are ready to permute some pieces!
    </p>
    <p>Disclaimer: There may be multiple good algorithms for some cases, but we will only show one.</p>
    <h2>Table of contents</h2>
    <ul>
        <li><a class="link" href="#What-is-PLL?">What is PLL?</a></li>
        <li><a class="link" href="#Helpful-resources">Helpful resources</a></li>
        <li><a class="link" href="#U-perms">U perms</a></li>
        <li><a class="link" href="#EPLLs">EPLLs</a></li>
        <li><a class="link" href="#A-perms">A perms</a></li>
        <li><a class="link" href="#Adjacent-corner-swap">Adjacent corner swap</a></li>
        <li><a class="link" href="#Diagonal-corner-swap">Diagonal corner swap</a></li>
        <li><a class="link" href="#G-perms">G perms</a></li>
    </ul>
    <h2 id="What-is-PLL">What is PLL?</h2>
    <p>
        PLL is the last step of the CFOP method for the Rubik's Cube, and it stands for Permute Last Layer.
        In the beginner method, one way of solving last layer is to permute corners and then permute edges.
        PLL is more efficient because you perform one algorithm to permute the entire last layer.
    </p>
    <p>
        Specifcally, PLL has 21 algorithms.
        You may know a couple of them from the beginner method depending on which variation you learned.
    </p>
    <p>
        All of the PLLs have nicknames.
        For example, "U perm" is a permutation that kind of looks like the letter U.
        The nicknames are inspired by the general shape of the permutation, and each is named after a letter.
    </p>
    <h2 id="Helpful-resources">Helpful resources</h2>
    <p>
        The best way to learn algorithms is with <i>spaced repetition</i>.
        The idea is that you learn the algorithms over time instead of all at once.
        The <a href="/train.html" class="link">CubingApp Trainer</a> spaces out the algorithms so you spend more time practicing the ones that need practice.
    </p>
    <p>
        CubingApp also has a page of <a href="/algdb/PLL.html" class="link">PLL algorithms</a> so you can see all of the fastest algorithms.
    </p>
    <h2 id="U-perms">U perms</h2>
    <p>✅ 2 out of 21</p>
    <p>
        The U perms are some of the easiest cases to learn, and you may even know them from the beginner method already.
        U perms occur when all of the corners are solved and you have a solved bar.
    </p>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Ua perm</h3>
            <p>
                The Ua perm has opposites on the right face.
                Notice how there is red-orange-red.
            </p>
        </div>
        <AlgStepper
            setup="z2 M2 U' M U2 M' U' M2"
            moves="M2 U M U2 M' U M2"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Ub perm</h3>
            <p>
                The Ub perm is the mirror or inverse of the Ua perm.
                This algorithm is very similar except you use U instead of U'.
            </p>
        </div>
        <AlgStepper
            setup="z2 M2 U M U2 M' U M2"
            moves="M2 U' M U2 M' U' M2"
            hide={[]}
        />
    </div>
    <h2 id="EPLLs">EPLLs</h2>
    <p>✅ 4 out of 21</p>
    <p>
        EPLL stands for Edge Permute Last Layer.
        The U perms are also considered EPLLs because they permute edges.
        The other 2 EPLLs are the H perm and Z perm, and they are also very easy to learn.
    </p>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>H perm</h3>
            <p>This is a very nice algorithm with M and U moves.</p>
        </div>
        <AlgStepper
            setup="z2 M2 U' M2 U2 M2 U' M2"
            moves="M2 U' M2 U2 M2 U' M2"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Z perm</h3>
            <p>This algorithm also has M and U moves, but it is one of the slower PLLs.</p>
        </div>
        <AlgStepper
            setup="z2 M2 U' M2 U' M' U2 M2 U2 M' U2"
            moves="M2 U' M2 U' M' U2 M2 U2 M' U2"
            hide={[]}
        />
    </div>
    <h2 id="A-perms">A perms</h2>
    <p>✅ 6 out of 21</p>
    <p>At only 9 moves, the A perms are some of the easiest to learn and fastest to execute.
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Aa perm</h3>
            <p>
                Aa and Ab are inverses.
            </p>
        </div>
        <AlgStepper
            setup="z2 R2 B2 R F R' B2 R F' R"
            moves="R' F R' B2 R F' R' B2 R2"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Ab perm</h3>
            <p>
                Aa and Ab are inverses.
            </p>
        </div>
        <AlgStepper
            setup="z2 R' F R' B2 R F' R' B2 R2"
            moves="R2 B2 R F R' B2 R F' R"
            hide={[]}
        />
    </div>
    <h2 id="Adjacent-corner-swap">Adjacent corner swap</h2>
    <p>✅ 11 out of 21</p>
    <p>
        All of the adjacent corner swap cases are quite fast PLL algorithms.
        If you get one of these cases, you should generally be pretty happy.
    </p>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>T perm</h3>
            <p>
                You can remember this algorithm more easily by thinking about the chunks.
                It starts with R U R' U' and ends with R U R' F' which are both common triggers.
            </p>
        </div>
        <AlgStepper
            setup="z2 R U R' U' R' F R2 U' R' U' R U R' F'"
            moves="R U R' U' R' F R2 U' R' U' R U R' F'"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Jb perm</h3>
            <p>
                If you know T perm, it's very easy to remember Jb perm.
                It is a very similar algorithm, except the R U R' F' is moved to the beginning.
            </p>
        </div>
        <AlgStepper
            setup="z2 R U R' F' R U R' U' R' F R2 U' R' U'"
            moves="R U R' F' R U R' U' R' F R2 U' R' U'"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Ja perm</h3>
            <p>
                Ja perm is a mirror of Jb perm.
                If you are comfortable with left-handed turning, you can do the same moves with your left hand.
                There are also other algorithms if you prefer.
            </p>
        </div>
        <AlgStepper
            setup="z2 L' U' L F L' U' L U L F' L2 U L U"
            moves="L' U' L F L' U' L U L F' L2 U L U"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>F perm</h3>
            <p>
                F perm is also very similar to T perm, but there is a modification.
                You put R' U' F' at the beginning of the algorithm, and F U R at the end.
                However, the last move of T perm is an F', so you can cancel the F' and F.
            </p>
        </div>
        <AlgStepper
            setup="z2 R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"
            moves="R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Rb perm</h3>
            <p>
                This algorithm has common triggers like R' U2 R U2 and R U R' U'.
            </p>
        </div>
        <AlgStepper
            setup="z2 R' U2 R U2 R' F R U R' U' R' F' R2 U'"
            moves="R' U2 R U2 R' F R U R' U' R' F' R2 U'"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Ra perm</h3>
            <p>
                This algorithm has common triggers like R U' R' U', R D R', and R D' R'.
            </p>
        </div>
        <AlgStepper
            setup="z2 R U' R' U' R U R D R' U' R D' R' U2 R' U'"
            moves="R U' R' U' R U R D R' U' R D' R' U2 R' U'"
            hide={[]}
        />
    </div>
    <h2 id="Diagonal-corner-swap">Diagonal corner swap</h2>
    <p>✅ 17 out of 21</p>
    <p>
        The diagonal corner swap cases are some of the slowest PLL cases.
        Some cubers even learn alternate OLL algorithms in order to avoid these cases, but only extremely advanced speedcubers should worry about that.
    </p>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Y perm</h3>
            <p>
                You can memorize the Y perm by thinking of it as two sub-algorithms.
            </p>
        </div>
        <AlgStepper
            setup="z2 F R U' R' U' R U R' F' R U R' U' R' F R F'"
            moves="F R U' R' U' R U R' F' R U R' U' R' F R F'"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>E perm</h3>
            <p>
                You can memorize the E perm by thinking of it as 4 chunks.
                Each chunk has an R U trigger and then a D move.
            </p>
        </div>
        <AlgStepper
            setup="z2 x' R U' R' D R U R' D' R U R' D R U' R' D' x"
            moves="x' R U' R' D R U R' D' R U R' D R U' R' D' x"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>V perm</h3>
            <p>
                You can memorize the V perm by remembering it starts with two triggers: R' U R' U' and R D' R' D.
            </p>
        </div>
        <AlgStepper
            setup="z2 R' U R' U' R D' R' D R' U D' R2 U' R2 D R2"
            moves="R' U R' U' R D' R' D R' U D' R2 U' R2 D R2"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Na perm</h3>
            <p>
                Na perm is a lot like Jb perm, except it starts with R U R' U and ends with U' R U' R' (with cancellations of course).
                You can remember the difference between Na and Nb by noticing that Na looks a lot like a Jb perm.
            </p>
        </div>
        <AlgStepper
            setup="z2 R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'"
            moves="R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Nb perm</h3>
            <p>
                Nb perm is the mirror of Na, and there is a lot of debate about the best algorithm for this case.
                My advice, like usual, is to look at the common triggers to learn the algorithm.
            </p>
        </div>
        <AlgStepper
            setup="z2 R' U R U' R' F' U' F R U R' F R' F' R U' R"
            moves="R' U R U' R' F' U' F R U R' F R' F' R U' R"
            hide={[]}
        />
    </div>
    <h2 id="G-perms">G perms</h2>
    <p>✅ 21 out of 21</p>
    <p>
        The G perms are challenging for most cubers to learn, but the algorithms can be executed fairly quickly once you have learned them.
    </p>
    <p>
        There are multiple G perm algorithms you can learn.
        I will show you one way of learning them that takes advantage of the mirrors and inverses so you can learn more easily.
    </p>
    <p>
        It can be difficult to determine which G perm case you have, because each case has a bar and headlights.
        You'll have to memorize where the bar and headlights are to determine which case you have.
    </p>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Ga perm</h3>
            <p>
                Ga and Gb are inverses of each other.
            </p>
        </div>
        <AlgStepper
            setup="z2 R' U' R U D' R2 U R' U R U' R U' R2 D"
            moves="R2 U R' U R' U' R U' R2 D U' R' U R D'"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Gb perm</h3>
            <p>
                Ga and Gb are inverses of each other.
            </p>
        </div>
        <AlgStepper
            setup="z2 R2 U R' U R' U' R U' R2 D U' R' U R D'"
            moves="R' U' R U D' R2 U R' U R U' R U' R2 D"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Gc perm</h3>
            <p>
                Gc is the front-to-back mirror of Ga.
            </p>
        </div>
        <AlgStepper
            setup="z2 R U R' U' D R2 U' R U' R' U R' U R2 D'"
            moves="R2 U' R U' R U R' U R2 D' U R U' R' D"
            hide={[]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Gd perm</h3>
            <p>
                Gd is the front-to-back mirror of Gb.
            </p>
        </div>
        <AlgStepper
            setup="z2 R2 U' R U' R U R' U R2 D' U R U' R' D"
            moves="R U R' U' D R2 U' R U' R' U R' U R2 D'"
            hide={[]}
        />
    </div>
</main>