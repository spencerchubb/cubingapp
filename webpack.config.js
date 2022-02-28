const path = require('path');

module.exports = {
	entry: {
		index: "./scripts/index.ts",
		play: "./scripts/play.ts",
		settings: "./scripts/settings.ts",
		train: "./scripts/train.ts",
	},
	output: {
		path: path.resolve(__dirname, "public/dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	mode: "development",
};
