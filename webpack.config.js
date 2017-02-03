'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var PATHS = {
//   bower: path.join(__dirname, 'bower_components'),
//   dev_scripts: path.join(__dirname, 'app/scripts'),
//   destination: path.join(__dirname, 'app')
// };

module.exports = {
  devtool: 'source-map',
  entry: {},
  // context: PATHS.dev_scripts,
  // resolve: {
  //   root: [
  //     PATHS.bower,
  //     PATHS.dev_scripts
  //   ]
  //   alias: {
  //     lodash: 'lodash',
  //     angular: 'angular'
  //   }
  // },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'ng-annotate-loader!babel-loader',
        exclude: /node_modules|bower_components/ },
      { test: /\.html$/,
        loader: 'raw-loader' },
      { test: /\.css$/,
        loader: 'style!css' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
      inject: 'body',
      hash: true
    }),
    // new webpack.ResolverPlugin(
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    // ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
