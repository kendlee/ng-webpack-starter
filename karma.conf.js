// Karma configuration
// Generated on Thu Nov 19 2015 22:05:20 GMT+0800 (PHT)
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: 'app',
    frameworks: ['jasmine'],

    files: [
      'scripts/main.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '**/*Spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'scripts/main.js': ['webpack'],
      '**/*Spec.js': ['babel']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    reporters: ['nyan'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
