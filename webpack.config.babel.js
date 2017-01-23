import path from 'path'
import webpack from 'webpack'

const fullPath = path.join(__dirname, '/dist/js/')

module.exports = {
  entry: './js/main.js',

  output: {
    path: fullPath,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
