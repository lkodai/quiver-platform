var gulp        = require('gulp');
var config      = require('../config-docs');
var path        = require('path');

gulp.task('dev', ['fileinclude', 'sass-docs', 'reload-docs', 'connect'], function () {
  gulp.watch([path.join(config.paths.sass, '**/*.scss'), './css/source/**/*.scss'], ['sass-docs']);
  gulp.watch(path.join(config.paths.templates, '**/*.html'), ['fileinclude']);
});
