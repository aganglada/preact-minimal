/* global __dirname */
import webpack from 'webpack';
import config from './webpack.config';
import OfflinePlugin from 'offline-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default config({

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
        }),

        new OfflinePlugin({
            caches: {
                main: [
                    'app.css',
                    'app.js',
                    'vendor.js'
                ],
                externals: [
                    'index.html'
                ],
                optional: [
                    ':rest:'
                ]
            },

            AppCache: false,

            ServiceWorker: {
                events: true
            }
        }),

        new ExtractTextPlugin('[name].css')
    ]
});