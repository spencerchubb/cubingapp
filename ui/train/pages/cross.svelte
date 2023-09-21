<script lang="ts">
    import GLManager from "../../src/lib/components/GLManager.svelte";
    import NavBarIcon from "../../src/lib/components/NavBarIcon.svelte";
    import SideNav from "../../src/lib/components/SideNav.svelte";
    import MenuIcon from "../../src/lib/components/icons/MenuIcon.svelte";
    import { type Scene } from "../../src/lib/scripts/rubiks-viz";
    import { scramble_333 } from "../../src/lib/scripts/cstimer/scramble_333";
    import { AlgNew, AlgSimplify, AlgToString } from "../../src/lib/scripts/common/alg";
    import * as solver from "@spencerchubb/solver";

    let scene: Scene;

    let numMoves: number = parseInt(localStorage.getItem("numMoves") ?? "3");

    let scramble: string;
    let solution: string = "";

    function onChangeNumMoves(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        localStorage.setItem("numMoves", value);
        numMoves = parseInt(value);
        newCase();
    }

    function setupCase() {
        scene.puzzle.solve();
        scene.puzzle.performAlg(scramble);
    }

    async function newCase() {
        scramble = "loading...";
        let possibleScram = scramble_333.getRandomScramble();
        let solutions = (await solver.solve({
            alg: possibleScram,
            moves: "U U' D D' L L' R R' F F' B B'",
            disregard: [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 18, 19],
            maxSolutions: 1,
        }));
        let first = solutions[0].split(" ");
        if (first.length < numMoves) {
            newCase();
            return;
        }

        const pre = first.slice(0, first.length - numMoves).join(" ");
        const post = first.slice(first.length - numMoves).join(" ");

        // Add it to the scramble
        scramble = AlgToString(AlgSimplify([...AlgNew(possibleScram), ...AlgNew(pre)]));

        solution = post;
        
        setupCase();
    }

    let sideNavOpen = false;
</script>

<main class="col" style="width: 100%; height: 100%;">
	<nav class="navbar" style="justify-content: space-between;">
		<NavBarIcon on:click={() => (sideNavOpen = true)}>
			<MenuIcon />
		</NavBarIcon>
        <h1>Cross Trainer</h1>
        <!-- empty div so the text is centered -->
        <div style="width: 48px;"></div>
	</nav>
    <div class="col" style="
        width: 100%;
        height: 100%;
        padding: 16px;
        gap: 16px;
        overflow-y: auto;">
        <div class="row" style="gap: 8px;">
            <p>Num Moves</p>
            <select
                on:change={onChangeNumMoves}
                value={numMoves}
            >
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
            </select>
        </div>
        <p>{scramble}</p>
        <div style="border-radius: 8px; box-shadow: 0 0 4px 2px var(--gray-600);">
            <GLManager
                onSceneInitialized={_scene => {
                    scene = _scene;
                    newCase();
                }}
            />
        </div>
        <div class="row" style="gap: 16px;">
            <button
                on:click={() => setupCase()}
            >
                Reset
            </button>
            <button
                on:click={() => newCase()}
            >
                Next
            </button>
        </div>
        <details>
            <summary>Solution</summary>
            <p>{solution}</p>
        </details>
    </div>
    <SideNav bind:open={sideNavOpen} />
</main>

<style>
    details {
        color: var(--gray-100);
        width: 100%;
        max-width: 320px;
    }

    details summary {
        padding: 12px;
        border: solid 1px var(--gray-500);
        border-radius: 8px;
    }

    details summary:hover {
        cursor: pointer;
    }

    details[open] {
        border: solid 1px var(--gray-500);
        border-radius: 8px;
    }

    details[open] summary {
        border: none;
        border-bottom: solid 1px var(--gray-500);
        border-radius: 0;
    }

    details > *:not(summary) {
        padding: 12px;
    }
</style>