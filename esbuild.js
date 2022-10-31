require('esbuild').buildSync({
    entryPoints: [
        './ui/src/scripts/cuble.ts',
        './ui/src/scripts/index.ts',
        './ui/src/scripts/play.ts',
        './ui/src/scripts/replay.ts',
        './ui/src/scripts/train.ts',
    ],
    bundle: true,
    // minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
    outdir: './ui/public/scripts',
});