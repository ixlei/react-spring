"use strict";

var webpack = require('webpack');
var path = require('path');
var commonsPlugin = 
new webpack.HotModuleReplacementPlugin('common.js');

module.exports = {
	entry: {
		
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/server/public/js',
		publicPath: 'http://127.0.0.1:8080/server/public/js'
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
    		loader:'style!css!scss'
    	}]
    },
    plugins: [commonsPlugin]
};
