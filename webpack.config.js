const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/assets/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modues/',
			},
		],
	},
	resolve: {
		extensions: [ '.ts', '.js' ],
	},
	output: {
		path: path.resolve(__dirname, 'dist/assets'),
		filename: 'index.js',
	},
};
