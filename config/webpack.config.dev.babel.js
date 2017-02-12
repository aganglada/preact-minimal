/* global __dirname */

const path = require('path');
const config = require('./webpack.config');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = config({

    plugins: [
        new HtmlPlugin({
            title: 'Preact minimal',
            template: path.join(__dirname, '..', 'app', 'index.html')
        })
    ]
});