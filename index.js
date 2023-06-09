'use strict';

const cosh = require('cosh');

/**
 * @param {number} x
 * @returns {number}
 */
function sech(x) {
  return 1 / cosh(x);
}

module.exports = sech;
