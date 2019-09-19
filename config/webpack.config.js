import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'

const basePath = path.join(__dirname, '..', 'src')
const env = process.env.NODE_ENV || 'development'

console.log('Webpack running in ' + env)

export default {
  entry: {
    main: path.join(basePath, 'index.jsx'),
  },

  output: {
    path: path.join(basePath, '..', 'build'),
    publicPath: env === 'development' ? '/' : '',
    filename: '[name].js',
  },

  plugins: [
    new HtmlPlugin({
      title: 'Preact minimal',
      template: path.join(basePath, 'index.html'),
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [basePath],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },

  devServer: {
    noInfo: true,
    port: 4000,
    contentBase: path.join(basePath, 'build'),
  },
}
