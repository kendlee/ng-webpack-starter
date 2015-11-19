'use strict';
var webpack = require('webpack'),
    path = require('path');

var PATHS = {
  bower: path.join(__dirname, 'bower_components'),
  dev_scripts: path.join(__dirname, 'app/scripts'),
  destination: path.join(__dirname, 'app')
}

module.exports = {
  context: PATHS.dev_scripts,
  entry: './main.js',
  output: {
    path: PATHS.destination,
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      PATHS.bower,
      PATHS.dev_scripts
    ],
    alias: {
      // lodash: 'lodash'
      angular: 'angular/angular'
    }
  },
  module: {
    loaders: [
      { test: /[\/]angular\.js$/,
        loader: 'exports?angular' },
      { test: /\.js$/,
        loader: 'babel?presets[]=es2015!semistandard',
        exclude: /node_modules|bower_components/ }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.ProvidePlugin({
    //   _: 'lodash'
    // }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};
