const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./js/app.js",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'js')
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
      }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
