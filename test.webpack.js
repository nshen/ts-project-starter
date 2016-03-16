var webpack = require('webpack');
var path = require('path')

var SRC_PATH = path.resolve(__dirname, "test/test.ts");
var BUILD_PATH = path.resolve(__dirname, "test");

module.exports = {
    entry: SRC_PATH,
    output: {
        path: BUILD_PATH,
        // publicPath: '/',
        filename: 'testBundle.js'
    },
   
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
  
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
 
}