<script lang="ts">
    import GlManager from "../lib/components/GLManager.svelte";
    import type { Scene } from "../lib/scripts/rubiks-viz";

    let scene: Scene;

    const scram = "F U2 L2 B2 F' U L2 U R2 D2 L' B L2 B' R2 U2";
    function showSampleSolve() {
        // Fun fact: This scramble and solution is Yusheng Du's world record solve.
        scene.puzzle.solve();
        scene.puzzle.performAlg(scram);
        scene.puzzle.performAlgWithAnimation("y x' U R2 U' F' L F' U' L' U' R U R' R' U R U' U' R' U R U R' U' R U' R' U2 R U", () => {});
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
                <div class="blue-to-purple card">
                    <h2>Algorithm Database</h2>
                    <p>3300+ Rubik's Cube algorithms</p>
                </div>
            </a>
            <a href="./recon.html">
                <div class="red-to-orange card">
                    <h2>Reconstruction Tool</h2>
                    <p>Reconstruct solves and share with your friends</p>
                </div>
            </a>
            <a href="./timer.html">
                <div class="blue-to-purple card">
                    <h2>Timer</h2>
                    <p>Time yourself with various puzzles. 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, Pyraminx</p>
                </div>
            </a>
            <a href="./train.html">
                <div class="red-to-orange card">
                    <h2>Train</h2>
                    <p>Memorize algorithms in half the time</p>
                </div>
            </a>
        </div>
        <div class="col" style="
            width: 100%;
            max-width: 500px;
            margin-top: 64px;
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 2px 16px -4px var(--gray-400);
            gap: 16px;">
            <h2>CubingApp Blog</h2>
            <p style="
                font-size: 1.3rem;
                line-height: 1.7rem;
                text-align: center;">
                Recent post:
                <a class="link" href="/blog/deep-dive-on-tony-snyder.html">
                    Deep Dive on Tony Snyder
                </a>
            </p>
            <a
                class="link"
                href="/blog.html"
                style="
                    font-size: 1.3rem;
                    line-height: 1.7rem;
                    text-align: center;">
                See all posts
            </a>
        </div>
    </div>
</div>

<style>
    a {
        width: 100%;
        max-width: 500px;
    }

    .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        border-radius: 16px;
        padding: 16px;
        gap: 4px;
    }

    .card:hover {
        box-shadow: inset 0 0 16px -4px var(--gray-300);
    }
</style>
