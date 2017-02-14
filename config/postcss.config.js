import postCssNext from 'postcss-cssnext';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import color from '../app/styles/settings/color';

export default {
    plugins: [
        postCssNext({
            features: {
                customProperties: {
                    variables: Object.assign(
                        {},
                        color
                    )
                }
            }
        })
    ]
};

export const getCSSLoaderConfig = (env) => {

    const isProd = env === 'production';

    const cssLoaderOptions = {
        modules: true,
        localIdentName: isProd ? null : '[name]__[local]',
        importLoaders:  1
    };

    const getLoaderUses = env => {

        const environments = {
            development: [
                { loader: 'style-loader' },
                { loader: 'css-loader', options: cssLoaderOptions },
                { loader: 'postcss-loader'}
            ],
            production: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: cssLoaderOptions },
                    { loader: 'postcss-loader' }
                ]
            })
        };

        return environments[env];
    };

    const config = getLoaderUses(env);

    return Object.assign({}, {
        test: /\.(css|pcss)$/,
        use: config
    });
};