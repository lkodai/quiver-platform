var gulp        = require('gulp');
var config      = require('../config');
var path        = require('path');


gulp.task('default', ['sass', 'reload', 'connect'], function () {
  gulp.watch(path.join(config.paths.sass, '**/*.scss'), ['sass']);
});