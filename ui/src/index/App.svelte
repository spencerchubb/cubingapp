<script lang="ts">
    import GlManager from "../lib/components/GLManager.svelte";
    import type { Scene } from "../lib/scripts/rubiks-viz";
    import Card from "./Card.svelte";

    let scene: Scene;

    const scram = "D U F2' L2 U' B2 F2 D L2 U R' F' D R' F' U L D' F' D R2";
    const soln = "x2 R' D D R' D L' U L D R' U' R D L U' L' U' R U R' d R' U' R r' U' R U' R' U U r U";
    function showSampleSolve() {
        // Fun fact: This scramble and solution is Max Park's world record solve.
        scene.puzzle.solve();
        scene.puzzle.performAlg(scram);
        scene.puzzle.performAlgWithAnimation(soln, () => {});
    }
</script>

<div style="width: 100%; height: 100%; padding: 32px; overflow-y: auto;">
    <div class="col" style="justify-content: center;">
        <div style="display: flex; flex-wrap: wrap; justify-content: center;">
            <div class="col" style="justify-content: center; gap: 16px;">
                <h1 style="text-align: center;">CubingApp</h1>
                <p style="
                    text-align: center;
                    font-size: 1.4rem;
                    line-height: 1.8rem;
                    font-weight: bold;
                    font-style: italic;
                    color: var(--gray-300);">Take speedcubing to the next level</p>
            </div>
            <div class="col" style="
                box-shadow: 0 0 4px 2px var(--gray-600);
                border-radius: 16px;
                padding-bottom: 16px;
                margin: 16px 32px;">
                <div style="width: 200px; height: 200px;">
                    <GlManager
                        onSceneInitialized={_scene => {
                            scene = _scene;
                            _scene.dragEnabled = false;
                            _scene.enableKey = _ => false;
                            _scene.puzzle.performAlg(scram);
                        }}
                    />
                </div>
                <button on:click={showSampleSolve}>Try me</button>
            </div>
        </div>
        <div class="col" style="margin-top: 32px; gap: 16px;">
            <a href="./algdb.html">
                <Card
                    class="blue-to-purple"
                    title="Algorithm Database"
                    text="Best alternative to speedcubedb. 3700+ Rubik's Cube algorithms"
                />
            </a>
            <a href="./recon.html">
                <Card
                    class="red-to-orange"
                    title="Recon Tool"
                    text="Enter a scramble and a solution, then share the link with your friends"
                />
            </a>
            <a href="./timer.html">
                <Card
                    class="blue-to-purple"
                    title="Timer"
                    text="Time yourself with various puzzles. 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, Pyraminx"
                />
            </a>
            <a href="./train.html">
                <Card
                    class="red-to-orange"
                    title="Train"
                    text="Memorize algorithms in half the time"
                />
            </a>
        </div>
        <div class="col" style="
            align-items:start;
            width: 100%;
            max-width: 500px;
            margin-top: 64px;
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 2px 16px -4px var(--gray-400);
            gap: 16px;">
            <h2>Cool Calculators</h2>
            <ul>
                <li>
                    <a class="link" href="/calculate-kinch.html">
                        Calculate your Kinch Rank
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a class="link" href="/calculate-sum-of-ranks.html">
                        Calculate your Sum of Ranks (SoR)
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<style>
    a {
        width: 100%;
        max-width: 500px;
    }
</style>
