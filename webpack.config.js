var webpack = require('webpack');
var path = require('path')

var SRC_PATH = path.resolve(__dirname, "src/app.ts");
var BUILD_PATH = path.resolve(__dirname, "build");

module.exports = {
    entry: SRC_PATH,
    output: {
        path: BUILD_PATH,
        // publicPath: '/',
        filename: 'bundle.js'
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    // Add minification
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
    // devServer: {
    //     contentBase: "./build", //static server根目录
    // }
}