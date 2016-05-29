'use strict';

let webpack = require('webpack');

module.exports = {
    entry: './js/App',
    output: {
    	filename: "./js/build.js"
    },
    watch: true,
    devtool: 'source-map',
    module: {
	    loaders: [{
		    loader: 'babel-loader',
		    test: /\.js?$/,
		    exclude: /node_modules/,
		    query: {
		           	presets: ['es2015','stage-0', 'react']
		           }
	    }]
    },
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react'
		})
		//new webpack.optimize.UglifyJsPlugin(
		//	{
		//		minimize: true,
		//		compress: {
		//			warnings: false
		//		}
		//	}
		//)
	]
}
