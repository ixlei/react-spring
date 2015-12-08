var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
}).listen(8080, 'localhost', function(err, result) {
    if (err) {
        console.log('error');
        return;
    }
    console.log('start server');
});
