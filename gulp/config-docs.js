var path = require('path');

module.exports = {
  port: '1337',
  root: path.resolve('./'),
  paths: {
    templates: './docs/templates/',
    sass: './docs/css/source/'
  },
  LIVERELOAD_PORT: '35729'
};
