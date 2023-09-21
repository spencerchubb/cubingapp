<script lang="ts">
    import GLManager from "../../src/lib/components/GLManager.svelte";
    import NavBarIcon from "../../src/lib/components/NavBarIcon.svelte";
    import SideNav from "../../src/lib/components/SideNav.svelte";
    import MenuIcon from "../../src/lib/components/icons/MenuIcon.svelte";
    import { type Scene } from "../../src/lib/scripts/rubiks-viz";
    import { scramble_333 } from "../../src/lib/scripts/cstimer/scramble_333";
    import { getRandomMoveScramble, moveset_3 } from "../../src/lib/scripts/common/scramble";
    import { AlgInvert, AlgNew, AlgToString } from "../../src/lib/scripts/common/alg";

    let scene: Scene;

    let numMoves: number = 3;

    let setup: string;
    let scramble: string;
    let solution: string;

    function setupCase() {
        scene.puzzle.solve();
        scene.puzzle.performAlg(setup);
        scene.puzzle.performAlg(scramble);
    }

    function newCase() {
        // Get scramble that leaves cross solved
        setup = scramble_333.getAnyScramble(0xffffffff3210, 0x000000000000, 0xffffffff, 0xffffffff, null, null, null, null);

        scramble = getRandomMoveScramble(moveset_3, numMoves);
        
        let inverted = AlgInvert(AlgNew(scramble));

        // D moves are redundant at the end of a cross solution, so try again.
        if (inverted[inverted.length - 1].face === "D") {
            newCase();
            return;
        }

        solution = AlgToString(inverted);
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
    <div class="col" style="width: 100%; height: 100%; padding: 16px; gap: 16px;">
        <div class="row" style="gap: 8px;">
            <p>Num Moves</p>
            <input
                type="number"
                min="1"
                max="8"
                bind:value={numMoves}
                on:change={() => newCase()}
            />
        </div>
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