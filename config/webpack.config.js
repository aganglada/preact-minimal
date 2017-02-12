/* global __dirname */
const webpack = require('webpack');
const path = require('path');
const packageJson = require('../package.json');
const HtmlPlugin = require('html-webpack-plugin');

const basePath = path.join(__dirname, '..', 'app');

module.exports = function buildConfig({
    plugins = [],
    resolve = {},
    devtool = 'eval'
}) {
    const env = process.env.NODE_ENV || 'development';

    console.log('Webpack running in ' + env);

    return {
        entry: {
            app: path.join(basePath, 'app.js'),
            vendor: Object.keys(packageJson.dependencies)
        },

        output: {
            path: path.join(basePath, '..', 'assets'),
            publicPath: env === 'development' ? '/' : '',
            filename: '[name].js'
        },

        devtool,

        plugins: [

            new HtmlPlugin({
                title: 'Preact minimal',
                template: path.join(basePath, 'index.html')
            }),

            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: '[name].js'
            })

        ].concat(plugins),

        resolve: Object.assign({}, {

            modules: [
                'node_modules',
                'app'
            ],

            alias: {
                views: path.join(basePath, 'views'),
                components: path.join(basePath, 'components')
            }

        }, resolve),

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    include: [
                        basePath
                    ]
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                }
            ]
        },

        devServer: {
            noInfo: true,
            port: 4000,
            contentBase: path.join(basePath, 'assets')
        }
    };
};