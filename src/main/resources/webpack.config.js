"use strict";

var webpack = require('webpack');
var path = require('path');
var commonsPlugin = 
new webpack.HotModuleReplacementPlugin('common.js');

module.exports = {
	entry: {
		customerEntry: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/dev-server',
            './scripts/entry/customerEntry.js',
        ]
	},
	output: {
		filename: '[name].js',
        publicPath: 'http://127.0.0.1:3000/server/public/js',
		path: path.join(__dirname, '/server/public/js')
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
    	loaders: [{
    		test: /\.jsx?$/,
    		exclude: /node_modules/,
            loader: 'react-hot!webpack-module-hot-accept!babel?presets[]=react,presets[]=es2015'
    	},{
    		test: /\.scss$/,
    		exclude: /node_modules/,
    		loaders: ["style", "css", "sass"]
    	}]
    },
    sassLoader: {
        includePaths: path.join(__dirname, 'styles')
    },
    plugins: [commonsPlugin]
};
