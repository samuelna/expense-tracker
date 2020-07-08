'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './server.js',
  plugins: [
    // clean dist directory before generating bundled files
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // generate index.html file
    new HtmlWebpackPlugin({
      title: 'Expense Tracker',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
      mobile: true,
      lang: 'en-US',
      /* link to styles, libs, fonts, etc. i.e., 'https://fonts.googleapis.com/css?family=Roboto' */
      links: ['https://fonts.googleapis.com/css?family=Roboto']
    })
  ],
  // module - loading css, images, fonts, and data
  module: {
    rules: [
      // load css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // load iamges
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      },
      // load fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // load data - csv, xml, tsv
      // can load json without module
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loder']
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    // fix can't resolve 'net' error
    net: 'empty',
    // fix can't resolve 'fs' error
    fs: 'empty'
  },
};
