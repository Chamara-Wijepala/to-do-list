const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
          filename: 'index.html',
          inject: true,
          template: path.resolve(__dirname, 'src', 'index.html'),
      }),
  ],
  module: {
      rules: [{
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};