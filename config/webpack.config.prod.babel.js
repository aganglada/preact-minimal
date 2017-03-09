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

        new ExtractTextPlugin('[name].css'),

        new OfflinePlugin({
            AppCache: false,
            ServiceWorker: {
                events: true
            }
        })
    ]
});