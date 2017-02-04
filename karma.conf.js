// Karma configuration
// Generated on Thu Nov 19 2015 22:05:20 GMT+0800 (PHT)
var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      // 'scripts/main.js',
      // '../bower_components/angular-mocks/angular-mocks.js',
      'spec.bundle.js'
    ],

    exclude: [],
    plugins: [
      require("karma-chrome-launcher"),
      require("karma-jasmine"),
      require("karma-jasmine-html-reporter"),
      require("karma-nyan-reporter"),
      require("karma-sourcemap-loader"),
      require("karma-webpack")
    ],

    preprocessors: {
      // 'scripts/main.js': ['webpack', 'sourcemap'],
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: webpackConfig.module
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['nyan', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};
