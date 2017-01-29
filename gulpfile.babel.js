import gulp from 'gulp';
import serve from 'browser-sync';

let root = 'frontend';

gulp.task('serve', function () {
   serve({
       port: process.env.PORT || 3000,
       server: {
           baseDir: root 
       }
   });
});

gulp.task('default', function () {
  console.log('hello!');
});
