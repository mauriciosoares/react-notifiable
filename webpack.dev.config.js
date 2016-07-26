var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './demo/index'
  ],

  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'demo')
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  postcss: function() {
    return [precss, autoprefixer];
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000
  }
};
