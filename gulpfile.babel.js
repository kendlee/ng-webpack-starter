import path from 'path';
import gulp from 'gulp';
import serve from 'browser-sync';
import webpack from 'webpack';
import colorsSupported from 'supports-color';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

let root = 'frontend';
let paths = {
	entry: [
		'babel-polyfill',
		path.join(__dirname, root, 'js/app.js')
	]
};

gulp.task('serve', function () {
	const config = require('./webpack.dev.config');
	config.entry.app = [
		'webpack-hot-middleware/client?reload=true'
	].concat(paths.entry);

	var compiler = webpack(config);
  serve({
	  port: process.env.PORT || 3000,
	  server: {
	  	baseDir: root
	  },
	  middleware: [
	  	webpackDevMiddleware(compiler, {
				stats: {
					colors: colorsSupported,
					chunks: false,
					module: false
				},
				publicPath: config.output.publicPath
			}),
			webpackHotMiddleware(compiler)
	  ]
  });
});

gulp.task('default', function () {
  console.log('hello!');
});
