const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./index.js', './ejs/index.ejs'],
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname, 'src'),
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-compiled'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?mimetype=image/jpg'
      },
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack2 example',
      template: '../src/ejs/index.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'webpack2 example',
      template: '../src/ejs/detail.ejs',
      filename: 'detail.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
