const cosh = require('cosh');

function sech(x) {
  return 1 / cosh(x);
}

module.exports = sech;
