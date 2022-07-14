const config = require('./webpack.config');

// Change the script files to their corresponding test files.
// This configuration is mostly the same as webpack.config.js
config.entry = {
    cuble: "./test/cuble.ts",
    index: "./test/index.ts",
    play: "./test/play.ts",
    replay: "./test/replay.ts",
    train: "./test/train.ts",
};

module.exports = config;