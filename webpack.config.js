const path = require('path');

module.exports = {
	entry: {
		index: "./scripts/index.js",
		settings: "./scripts/settings.js",
	},
	output: {
		path: path.resolve(__dirname, "public/dist"),
		filename: "[name].js",
	},
	mode: "development",
};
