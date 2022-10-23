require('esbuild').buildSync({
    entryPoints: [
        'scripts/cuble.ts',
        'scripts/index.ts',
        'scripts/play.ts',
        'scripts/replay.ts',
        'scripts/train.ts',
    ],
    bundle: true,
    // minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
    outdir: 'public/dist',
});