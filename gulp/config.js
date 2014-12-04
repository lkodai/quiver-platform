var path = require('path');

module.exports = {
  port: '1337',
  root: path.resolve('./'),
  paths: {
    sass: 'css/source/'
  },
  LIVERELOAD_PORT: '35729'
};
