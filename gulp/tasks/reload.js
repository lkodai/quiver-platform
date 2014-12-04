var gulp            = require('gulp');
var connect      =  require('gulp-connect');

gulp.task('reload', function () {
  gulp.src(['**/*.html'])
  .pipe(connect.reload());
});
