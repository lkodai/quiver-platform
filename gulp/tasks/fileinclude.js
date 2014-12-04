var gulp          = require('gulp');
var fileinclude   = require('gulp-file-include');
var notify        = require('gulp-notify');
var rename        = require('gulp-rename');
var path          = require('path');
var handleErrors  = require('../util/handleErrors');
var connect       = require('gulp-connect');
var config        = require('../config-docs');


// fileinclude: grab partials from templates and render out html files
// ==========================================
gulp.task('fileinclude', function() {
  return  gulp.src(path.join(config.paths.templates, '*.tpl.html'))
    .pipe(fileinclude())
    .pipe(rename({
      extname: ""
     }))
    .pipe(rename({
      extname: ".html"
     }))
    .pipe(gulp.dest('./docs'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'Includes: included' }))

    .on('error', handleErrors);
});