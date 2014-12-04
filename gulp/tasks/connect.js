var gulp      = require('gulp');
var connect   = require('gulp-connect');
var config    = require('../config');
var path      = require('path');

//  Connect: sever task
//===========================================
gulp.task('connect', function() {
  connect.server({
    port: config.port,
    root: [path.join(__dirname, '..', '..')],
    livereload: {
      port: config.LIVERELOAD_PORT
    }
  });
});
