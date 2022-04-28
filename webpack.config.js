const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['@babel/polyfill', './src/client/public/index.js'],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/public/index.html',
			filename: './index.html',
			favicon: './src/client/resources/favicon.png',
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(s*)css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: '[local]___[hash:base64:5]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer()],
						},
					}, 'sass-loader'],
			},
			{
				test: /\.(ttf|png|jpe?g|gif)$/i,
				use: {
					loader: 'file-loader',
					options: {
						esModule: false,
					},
				},
			},
		],
	},
};
