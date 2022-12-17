require('esbuild').buildSync({
    minify: true,
    entryPoints: [
        './src/scripts/cuble.ts',
        './src/scripts/learn2x2.ts',
        './src/scripts/learn3x3.ts',
        './src/scripts/learnF2L.ts',
        './src/scripts/learnNotation.ts',
        './src/scripts/play.ts',
        './src/scripts/replay.ts',
        './src/scripts/train.ts',
    ],
    bundle: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
    outdir: './public/scripts',
});
