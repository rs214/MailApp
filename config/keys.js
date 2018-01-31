if (process.env.NODE_ENV === 'production') {
  require('./prod');
} else {
  module.exports = require('./dev');
}