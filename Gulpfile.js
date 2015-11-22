var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('semistandard', function () {
  return gulp.src(['./*.js', 'app/scripts/**/*.js', 'backend/**/*.js'])
    .pipe($.semistandard())
    .pipe($.semistandard.reporter('default', {
      // breakOnError: true
    }));
});

gulp.task('webpack', function () {
  return gulp.src('app/scripts/main.js')
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('app'));
});

gulp.task('develop', ['webpack', 'semistandard'], function () {
  $.nodemon({
    script: 'server.js',
    ignore: ['app'],
    tasks: ['semistandard']
  }).on('restart', function () {
    console.log('server restarted!');
  });
});
