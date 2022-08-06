const config = require('./webpack.config');

const testConfig = Object.assign({}, config, {
    entry: {
        cuble: "./test/cuble.ts",
        index: "./test/index.ts",
        play: "./test/play.ts",
        replay: "./test/replay.ts",
        train: "./test/train.ts",
    },
    // https://webpack.js.org/configuration/devtool/
	// Fixes warning: DevTools failed to load source map
	devtool: "eval-cheap-source-map",
	watch: true,
	mode: "development",
});

module.exports = testConfig;