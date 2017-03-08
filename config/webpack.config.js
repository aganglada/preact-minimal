/* global __dirname */
import webpack from 'webpack';
import postcss, { getCSSLoaderConfig } from './postcss.config';
import path from 'path';
import packageJson from '../package.json';
import HtmlPlugin from 'html-webpack-plugin';

const basePath = path.join(__dirname, '..', 'app');
const env = process.env.NODE_ENV || 'development';

console.log('Webpack running in ' + env);

export default ({
    plugins = [],
    resolve = {},
    devtool = 'eval'
}) => {
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
            }),

            new webpack.LoaderOptionsPlugin({ options: { postcss } })

        ].concat(plugins),

        resolve: Object.assign({}, {

            modules: [
                'node_modules',
                'app'
            ],

            alias: {
                views: path.join(basePath, 'views'),
                components: path.join(basePath, 'components'),
                styles: path.join(basePath, 'styles')
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
                },

                getCSSLoaderConfig(env)
            ]
        },

        devServer: {
            noInfo: true,
            port: 4000,
            contentBase: path.join(basePath, 'assets')
        }
    };
};