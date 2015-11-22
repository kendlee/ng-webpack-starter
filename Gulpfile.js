var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var PATHS = {
  frontendJs: 'app/scripts/**/*.js',
  webpackEntry: 'app/scripts/main.js',
  webpackOutput: 'app'
};
PATHS.allJsPaths = ['./*.js', 'backend/**/*.js', PATHS.frontendJs];
PATHS.frontendJsWithoutTests = [PATHS.frontendJs, '!app/**/*Spec.js'];

gulp.task('semistandard', function () {
  return gulp.src(PATHS.allJsPaths)
    .pipe($.semistandard())
    .pipe($.semistandard.reporter('default', {
      // breakOnError: true
    }));
});

gulp.task('webpack', function () {
  return gulp.src(PATHS.webpackEntry)
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(PATHS.webpackOutput));
});

gulp.task('watch', function () {
  gulp.watch(PATHS.allJsPaths, ['semistandard']);
  gulp.watch(PATHS.frontendJsWithoutTests, ['webpack']);
});

gulp.task('develop', ['webpack', 'semistandard', 'watch'], function () {
  $.nodemon({
    script: 'server.js',
    ignore: ['app', 'Gulpfile.js'],
    tasks: ['semistandard']
  }).on('restart', function () {
    console.log('server restarted!');
  });
});

gulp.task('default', ['develop'], function () {
  
});
