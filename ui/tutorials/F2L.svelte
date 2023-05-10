<script lang="ts">
    import SideNav from "../src/lib/components/SideNav.svelte";
    import NavBarIcon from "../src/lib/components/NavBarIcon.svelte";
    import MenuIcon from "../src/lib/components/icons/MenuIcon.svelte";
    import AlgStepper from "../src/lib/components/AlgStepper/index";
    import NewsletterSignup from "../src/lib/components/NewsletterSignup.svelte";

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
    <nav class="navbar" style="justify-content: space-between;">
        <NavBarIcon on:click={() => (sideNavOpen = true)}>
            <MenuIcon />
        </NavBarIcon>
    </nav>
    <div
        class="col"
        style="width: 100%; padding: 0 16px; overflow-y: auto;"
    >
        <h1>How to Learn Rubik's Cube F2L</h1>
        <p>
            After learning the beginner method, many cubers strive to learn advanced F2L. It is a rite of passage for any cuber who wants to get faster at the Rubik's Cube.
        </p>
        <p>
            For this tutorial, I will assume that you know the beginner method for the Rubik's Cube and Rubik's Cube notation. If you know those things, then you are ready to learn advanced F2L.
        </p>
        <h2>What is F2L?</h2>
        <p>
            F2L stands for First 2 Layers, and it is the second step of the CFOP method. In the beginner method, you solve the corners and then the edges. But with advanced F2L, you solve corners and edges at the same time. This allows you to solve the cube with less moves.
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
            There are 3 main reasons why you should learn F2L intuitively.
        </p>
        <ol>
            <li>You can get started with advanced F2L sooner</li>
            <li>If you see a case you haven't seen before, you can figure it out on the fly</li>
            <li>You have better lookahead if you understand how the pieces move</li>
        </ol>
        <h2>Solving F2L Pairs</h2>
        <p>
            The main idea of F2L is to solve F2L pairs one at a time. Here is an example. We start with white cross in the example, but any cross color would work.
        </p>
        <AlgStepper
            setup="U' L F2 L2 D' L2 R2 F2 R2 D2 U B2 U' B R F2 D L B' D U' F D2 R L F' z2 y'"
            alg="U R' U2' R2 U R'"
        >
            <h3>First pair</h3>
            <p>Here we solve the red-green pair into the front right slot.</p>
        </AlgStepper>
        <AlgStepper
            setup="U' L F2 L2 D' L2 R2 F2 R2 D2 U B2 U' B R F2 D L B' D U' F D2 R L F' z2 y' U R' U2' R2 U R'"
            alg="U' L' U L"
        >
            <h3>Second pair</h3>
            <p>Here we solve the red-blue pair into the front left slot.</p>
        </AlgStepper>
        <AlgStepper
            setup="U' L F2 L2 D' L2 R2 F2 R2 D2 U B2 U' B R F2 D L B' D U' F D2 R L F' z2 y' U R' U2' R2 U R' U' L' U L"
            alg="y2 R U' R'"
        >
            <h3>Third pair</h3>
            <p>Here we rotate the cube, then solve the orange-blue pair into the front right slot.</p>
        </AlgStepper>
        <AlgStepper
            setup="U' L F2 L2 D' L2 R2 F2 R2 D2 U B2 U' B R F2 D L B' D U' F D2 R L F' z2 y' U R' U2' R2 U R' U' L' U L y2 R U' R'"
            alg="L' U2 L U2 L' U L"
        >
            <h3>Fourth pair</h3>
            <p>Here we solve the orange-green pair into the front left slot. This completes F2L!</p>
        </AlgStepper>
        <h2>F2L Techniques</h2>
        <p>
            For the rest of this tutorial, we will focus on different techniques for solving F2L pairs. We are not going to cover every case, because there are too many.
        </p>
        <p>
            First you will learn how to solve a free pair and a split pair. For every other F2L case, the goal is to somehow set up a free pair or a split pair, then solve from there. The free pair and split pair are the basic building blocks of F2L.
        </p>
        <AlgStepper
            setup="F2 L D2 L' U2 R U2 L' B2 L' D L2 F L' B' D B' L2 U' F U D F L' U R' L' U' z2 U' R U R' U' y'"
            alg="R U' R'"
        >
            <h3>Free pair</h3>
            <p>When you have a free pair, you can insert it in three moves.</p>
        </AlgStepper>
        <AlgStepper
            setup="B2 U B2 D L2 B2 U B2 D' R2 D U' R' B2 R2 D2 F' R2 U B' R2 R U B2 F R U' z2 F' U' F U2 y"
            alg="R U R'"
        >
            <h3>Split pair</h3>
            <p>When you have a split pair, this can also be inserted in three moves. You have a split pair when you see the corner and the edge across from each other, and they have different colors on top. In this example, the corner has blue on top and the edge has orange on top.</p>
        </AlgStepper>
        <AlgStepper
            setup="U' B2 D' L' U' L2 B' R U D2 R2 B' R2 B U2 B2 L2 F U2 D2 F' U L F R B U z2 y"
            alg="R U' R' F U2 F'"
        >
            <h3>Forming a pair</h3>
            <p>The first three moves form the green-orange pair. First, we hide the corner, then move the top layer, then bring the corner back. This is a common pattern in F2L. There are many cases where you can do a few moves to arrive at the "Free pair" case.</p>
        </AlgStepper>
        <AlgStepper
            setup="U' B2 D' L' U' L2 B' R U D2 R2 B' R2 B U2 B2 L2 F U2 D2 F' U L F R B U z2 U"
            alg="L' U2' L U L' U' L"
        >
            <h3>Corner facing up</h3>
            <p>Notice that the green-red corner is facing up. When a corner is facing up, it can't form a free pair or a split pair, so a good strategy is to start by rearranging the corner. These first three moves rearrange the corner and also set up a split pair for a 3-move insertion.</p>
        </AlgStepper>
        <p>
            That should give you a good start on intuitive F2L. You can learn more cases by experimenting. Remember, the goal is to set up a free pair or a split pair, then solve from there.
        </p>
        <p>
            If you get stuck, check out <a href="/algdb/F2L.html" class="link">the algorithm database</a>. We have F2L algorithms for every case, and every angle.
        </p>
        <div style="margin: 16px 0;"></div>
        <NewsletterSignup />
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    h1 {
        margin: 0.67em 0;
    }

    h2 {
        margin: 0.83em 0;
    }

    p, h3, .note {
        margin: 1em 0;
    }

    h1, h2, h3 {
        max-width: 600px;
        width: 100%;
        text-align: start;
    }

    p {
        max-width: 600px;
        width: 100%;
        text-align: start;
    }

    ol {
        margin: 0.75rem 0;
    }

    li {
        margin: 0.5rem 0;
    }

    .note {
        border: solid 1px var(--gray-500);
        border-radius: 8px;
        padding: 0 16px;
        margin: 0.75rem 0;
    }
</style>