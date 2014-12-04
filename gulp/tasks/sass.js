var gulp          = require('gulp');
var notify        = require('gulp-notify');
var sass          = require('gulp-sass');
var gutil         = require('gulp-util');
var plumber       = require('gulp-plumber');
var autoprefixer  = require('gulp-autoprefixer');
var path          = require('path');
var config        = require('../config');
var connect       = require('gulp-connect');
var useRubySass   = false;


function handleError(err) {
  gutil.log(err);
  gutil.beep();
}

function runSass() {
  var sassPipe;
  if (!useRubySass) {
    var sass = require('gulp-sass');
    sassPipe = sass({
      style: 'compact',
      sourceComments: 'map',
      errLogToConsole: true
    });
  } else {
    var rubysass = require('gulp-ruby-sass');
    sassPipe = rubysass({
      sourcemap: true,
      noCache: true,
      style: 'compact'
    });
  }

  return gulp.src(path.join(config.paths.sass, '*.scss'))
    .pipe(plumber())
    .pipe(sassPipe)
    .on('error', handleError)
    .pipe(autoprefixer('last 2 version', "> 1%", 'ie 8', 'ie 9'))
    .on('error', handleError)
}

gulp.task('sass', function () {
  var message;
  if (!useRubySass) {
    message = 'libsass compiled';
  } else {
    message = 'rubysass compiled';
  }

  return runSass()
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload())
    .pipe(notify({
      message: message
    }));
});