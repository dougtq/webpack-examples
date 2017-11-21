// const webpack = require('webpack')
let Extract = require('extract-text-webpack-plugin')
let path = require('path')

module.exports = {
  entry: './ex/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: './bundle.js'
  },
  devServer: {
    port: 3044,
    contentBase: './public'
  },
  plugins: [new Extract('bundle.css')],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.css?$/,
        loader: Extract.extract('style-loader', 'css-loader')
      }
    ]
  }
}
