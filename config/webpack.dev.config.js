const path = require('path');
const commonConfig = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');

const config = {
  mode: 'development',
  devtool: "cheap-module-source-map",
  devServer: {
    port: 2333,
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, '../public')
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/vendors.manifest.json')
    })
  ]
}

module.exports = merge(config, commonConfig);