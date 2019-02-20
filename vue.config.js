const { WebpackWarPlugin } = require('webpack-war-plugin')

module.exports = {
  publicPath: '/dtordini/',
  css: {
    // Enable CSS source maps.
    sourceMap: true
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      // mutate for production...
      return {
        plugins: [
            new WebpackWarPlugin({
                archiveName: 'dtordini',
            })
        ],
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        },
        resolve: {
          alias: require('./aliases.config').webpack
        }   
      }
    } else {
      // mutate for development...
      return {
        devServer: {
          headers: {
              'Access-Control-Allow-Origin': '*',
          }
        },
        resolve: {
          alias: require('./aliases.config').webpack
        }
      }
    }
  }
}