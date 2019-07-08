const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');



const shouldUseDllPlugin = true;


module.exports = function (env) {

  console.log(env.NODE_ENV);
  const isEnvDev = env.NODE_ENV === "dev";
  const isEnvProd = env.NODE_ENV === "prod";

  return {
    mode: isEnvProd ? 'production' : 'development',
    devtool: isEnvProd ? 'source-map' : 'cheap-module-source-map',
    entry: path.resolve(__dirname, '../src/index.js'),
    devServer: isEnvDev ? {
      port: 2333,
      open: true,
      hot: true,
      contentBase: path.resolve(__dirname, '../public')
    } : {},
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?cacheDirectory=true'
        },
        {
          test: /\.css$/,
          loader: [
            "style-loader",
            "css-loader"
          ]
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: '[name].[hash].[ext]',
          },
        },
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    output: {
      filename: isEnvProd ? '[name].[contenthash].js' : '[name].js',
      chunkFilename: isEnvProd ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      path: path.resolve(__dirname, '../dist')
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html')
      }), 
    ].concat(
      isEnvDev ? 
      [ new webpack.HotModuleReplacementPlugin() ]
      .concat(
        shouldUseDllPlugin ? 
        [
          new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../public/vendors.manifest.json')
          })
        ]  : []
      ) : [
        new CleanWebpackPlugin({
          dry: true
        }),
        new CopyWebpackPlugin([{
          from: path.resolve(__dirname, '../public/api'),
          to: path.resolve(__dirname, '../dist/api')
        }]),
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true
        })
      ]
    )
  }
}