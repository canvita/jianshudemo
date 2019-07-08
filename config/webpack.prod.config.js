const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common.config');
const merge = require('webpack-merge');

const config = {
  mode: 'production',
  devtool: "source-map",
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  }
}

module.exports = merge(config, commonConfig);