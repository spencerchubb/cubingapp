require('esbuild').buildSync({
    entryPoints: [
        './src/scripts/cuble.ts',
        './src/scripts/learn.ts',
        './src/scripts/play.ts',
        './src/scripts/replay.ts',
        './src/scripts/train.ts',
    ],
    bundle: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
    outdir: './public/scripts',
});
