<script lang="ts">
    import AlgStepper from "../src/lib/components/AlgStepper";
    import * as pieces from "../src/lib/scripts/rubiks-viz/pieces";
</script>

<main>
    <h1>How to Learn Rubik's Cube F2L</h1>
    <p class="date">May 9, 2023</p>
    <p>
        After learning the beginner method, many cubers strive to learn advanced F2L. It is a rite of passage for any cuber who wants to get faster at the Rubik's Cube.
    </p>
    <p>
        For this tutorial, I will assume that you know the beginner method for the Rubik's Cube and Rubik's Cube notation. If you know those things, then you are ready to learn advanced F2L.
    </p>
    <h2>What is F2L?</h2>
    <p>
        F2L stands for First 2 Layers, and it is the second step of the CFOP method. F2L occurs after solving the cross. In the beginner method, you solve the corners and then the edges. But with advanced F2L, you solve corners and edges at the same time. This allows you to solve the cube with less moves.
    </p>
    <div class="note">
        <h3>Definition: F2L Case</h3>
        <p>
            You may see a few terms that essentially mean the same thing: F2L case, F2L pair, corner-edge pair.
        </p>
        <p>
            An F2L case is a pair of a corner and an edge that get solved into the same slot.
        </p>
    </div>
    <h2>Intuitive approach</h2>
    <p>
        If you have learned other algorithms, such as for the last layer, you probably learned them by rote memorization. However, F2L is a bit different.
    </p>
    <p style="font-style: italic;">
        You should learn F2L intuitively.
    </p>
    <p>
        What do I mean by that? It means you understand how the pieces move instead of memorizing the moves. When you see an F2L case, you should be able to visualize the moves in your head and figure out a solution even if you don't have an algorithm memorized.
    </p>
    <p>
        There are 3 body reasons why you should learn F2L intuitively.
    </p>
    <ol>
        <li>You can get started with advanced F2L sooner</li>
        <li>If you see a case you haven't seen before, you can figure it out on the fly</li>
        <li>You have better lookahead if you understand how the pieces move</li>
    </ol>
    <h2>Solving F2L Pairs</h2>
    <p>
        The body idea of F2L is to solve F2L pairs one at a time. Here is an example. We start with white cross in the example, but any cross color would work.
    </p>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>First pair</h3>
            <p>Here we solve the pair in the front right slot. Note that the pairs can be solved in any order, so the front right slot is kind of an arbitrary choice.</p>
        </div>
        <AlgStepper
            setup="U' L F2 L2 D' L2 R2 F2 R2 D2 U B2 U' B R F2 D L B' D U' F D2 R L F' z2 y'"
            moves="U R' U2' R2 U R'"
            hide={[0, 2, 6, 9, 10, 11, 14, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 47, 50, 51, 52, 53]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Second pair</h3>
            <p>Here we solve the pair in the front left slot.</p>
        </div>
        <AlgStepper
            setup="U' L F2 L2 D' L2 R2 F2 R2 D2 U B2 U' B R F2 D L B' D U' F D2 R L F' z2 y' U R' U2' R2 U R'"
            moves="U' L' U L"
            hide={[0, 2, 9, 10, 11, 14, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 33, 36, 37, 38, 41, 42, 43, 44, 47, 50, 53]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Third pair</h3>
            <p>Here we rotate the cube, then solve the pair in the front right slot.</p>
        </div>
        <AlgStepper
            setup="U' L F2 L2 D' L2 R2 F2 R2 D2 U B2 U' B R F2 D L B' D U' F D2 R L F' z2 y' U R' U2' R2 U R' U' L' U L"
            moves="y2 R U' R'"
            hide={[2, 9, 10, 11, 14, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 30, 33, 38, 41, 42, 43, 44, 47, 50, 53]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Fourth pair</h3>
            <p>Here we solve the pair in the front left slot, and F2L is finished!</p>
        </div>
        <AlgStepper
            setup="U' L F2 L2 D' L2 R2 F2 R2 D2 U B2 U' B R F2 D L B' D U' F D2 R L F' z2 y' U R' U2' R2 U R' U' L' U L y2 R U' R'"
            moves="L' U2 L U2 L' U L"
            hide={[11, 14, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 30, 33, 38, 41, 44, 47, 50, 53]}
        />
    </div>
    <h2>F2L Techniques</h2>
    <p>
        For the rest of this tutorial, we will focus on different techniques for solving F2L pairs. We are not going to cover every case, because there are a lot of cases and we already have a <a href="/algdb/F2L.html" class="link">list of F2L algorithms</a> for that. Instead, we will focus on the basic building blocks of F2L.
    </p>
    <p>
        First you will learn how to solve a free pair and a split pair. For every other F2L case, the goal is to somehow set up a free pair or a split pair, then solve from there. The free pair and split pair are the basic building blocks of F2L.
    </p>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Free pair</h3>
            <p>When you have a free pair, you can insert it in three moves.</p>
        </div>
        <AlgStepper
            setup="z2 R U R'"
            moves="R U' R'"
            hide={[
                ...pieces.LAST_LAYER,
                ...pieces.F2L_BLUE_RED,
                ...pieces.F2L_ORANGE_BLUE,
                ...pieces.F2L_RED_GREEN,
            ]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Split pair</h3>
            <p>When you have a split pair, this can also be inserted in three moves. You can identify a split pair when the corner and the edge across from each other, and they have different colors on top.</p>
        </div>
        <AlgStepper
            setup="z2 R U' R'"
            moves="R U R'"
            hide={[
                ...pieces.LAST_LAYER,
                ...pieces.F2L_BLUE_RED,
                ...pieces.F2L_ORANGE_BLUE,
                ...pieces.F2L_RED_GREEN,
            ]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Forming a pair</h3>
            <p>The first three moves form the pair. First, we hide the corner, then move the top layer, then bring the corner back up. This is a common pattern in F2L, and there are many cases where you can do a few moves to arrive at the "free pair" case.</p>
        </div>
        <AlgStepper
            setup="z2 R U R' U2 R U2 R'"
            moves="R U2 R' U2 R U' R'"
            hide={[
                ...pieces.LAST_LAYER,
                ...pieces.F2L_BLUE_RED,
                ...pieces.F2L_ORANGE_BLUE,
                ...pieces.F2L_RED_GREEN,
            ]}
        />
    </div>
    <div class="alg-stepper-card">
        <div class="alg-stepper-text">
            <h3>Corner facing up</h3>
            <p>Notice that the white corner is facing up. When a corner is facing up, it can't form a free pair or a split pair, so a good strategy is to start by rearranging the corner. These first three moves rearrange the corner and also set up a split pair for a 3-move insertion.</p>
        </div>
        <AlgStepper
            setup="z2 R U' R' U R U2 R'"
            moves="R U2 R' U' R U R'"
            hide={[
                ...pieces.LAST_LAYER,
                ...pieces.F2L_BLUE_RED,
                ...pieces.F2L_ORANGE_BLUE,
                ...pieces.F2L_RED_GREEN,
            ]}
        />
    </div>
    <p>
        That should give you a good start on intuitive F2L. You can learn more cases by experimenting. Remember, the goal is to set up a free pair or a split pair, then solve from there.
    </p>
    <p>
        If you get stuck, check out <a href="/algdb/F2L.html" class="link">the algorithm database</a>. We have F2L algorithms for every case, and every angle.
    </p>
</main>