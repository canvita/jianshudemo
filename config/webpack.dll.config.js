const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
  entry: {
    vendors: [
      'react',
      'react-dom',
      'styled-components',
      'react-redux',
      'redux',
      'react-router-dom',
      'redux-thunk',
      'redux-immutable',
      'immutable',
      'axios'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].dll.js',
    library: '[name]_dll',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public', '[name].manifest.json'),
      name: '[name]_dll'
    }),
    
  ]
}
