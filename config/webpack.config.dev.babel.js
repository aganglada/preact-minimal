/* global __dirname */

const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',

    entry: {
        app: path.join(__dirname, '..', 'app', 'app.js')
    },

    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/',
        filename: '[name].js'
    },

    plugins: [
        new HtmlPlugin({
            title: 'Preact minimal',
            template: path.join(__dirname, '..', '')
        })
    ]
};