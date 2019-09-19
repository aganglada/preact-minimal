import config from './webpack.config'
import merge from 'webpack-merge'

export default merge(config, {
  mode: 'development',
})
