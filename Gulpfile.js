var BROWSERSYNC_PORT = process.env.BROWSERSYNC_PORT || 3000;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var KarmaServer = require('karma').Server;

var PATHS = {
  frontendJs: 'app/scripts/**/*.js',
  frontendTestJs: 'app/**/*Spec.js',
  webpackEntry: 'app/scripts/main.js',
  webpackOutput: 'app/'
};
PATHS.allJsPaths = ['./*.js', 'backend/**/*.js', PATHS.frontendJs];
PATHS.frontendJsWithoutTests = [PATHS.frontendJs, '!' + PATHS.frontendTestJs];

gulp.task('semistandard', function () {
  return gulp.src(PATHS.allJsPaths)
    .pipe($.semistandard())
    .pipe($.semistandard.reporter('default', {
      breakOnError: true
    }));
});

gulp.task('webpack', function () {
  return gulp.src(PATHS.webpackEntry)
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(PATHS.webpackOutput));
});

gulp.task('frontend-test', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('watch', function () {
  gulp.watch(PATHS.allJsPaths, ['semistandard']);
  gulp.watch(PATHS.frontendJsWithoutTests, ['webpack']);
  // gulp.watch(PATHS.frontendTestJs, ['frontend-test']);
});

gulp.task('develop', ['webpack', 'semistandard', 'watch'], function () {
  return $.nodemon({
    script: 'server.js',
    ignore: ['app', 'Gulpfile.js'],
    tasks: ['semistandard']
  }).on('restart', function () {
    console.log('server restarted!');
  });
});

gulp.task('default', ['develop'], function () {
  console.log('launching default browser!');
  setTimeout(function () {
    require('opn')('http://localhost:' + BROWSERSYNC_PORT);
  }, 3000);
});
