/* global __dirname */
const path = require('path');

const basePath = path.join(__dirname, '..', 'app');

module.exports = function buildConfig({
    plugins = [],
    resolve = {},
    devtool = 'eval'
}) {
    const env = process.env.NODE_ENV || 'development';

    return {
        entry: {
            app: path.join(basePath, 'app.js')
        },

        output: {
            path: path.join(basePath, 'assets'),
            publicPath: '/',
            filename: '[name].js'
        },

        devtool,
        plugins,

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
                    test: /\.json$/,
                    loader: 'json-loader'
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