var gulp            = require('gulp');
var connect      =  require('gulp-connect');

gulp.task('reload-docs', function () {
  gulp.src(['**/*.html'])
  .pipe(connect.reload());
});
