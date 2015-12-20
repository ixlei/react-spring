var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    headers: { 'Access-Control-Request-Headers': '*' },
    noInfo: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function(err, result) {
    if (err) {
        console.log('error');
        return;
    }
    console.log('start server');
});
