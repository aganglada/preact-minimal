/* global __dirname */

const webpack = require('webpack');
const config = require('./webpack.config');

module.exports = config({

    devtool: 'source-map',

    plugins: [

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            }
        })
    ]
});