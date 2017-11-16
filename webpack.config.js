// const webpack = require('webpack')
let path = require('path')

module.exports = {
  entry: path.join(__dirname, '/ex/index.js'),
  output: path.join(__dirname, '/public'),
  filename: './bundle.js',
  devServer: {
    port: 3044,
    contentBase: './public'
  }
}
