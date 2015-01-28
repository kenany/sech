var sech = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(sech));
});

test('sech', function(t) {
  t.plan(5);
  t.equal(sech(0), 1);
  t.equal(sech(1), 0.6480542736638855);
  t.equal(sech(2), 0.2658022288340797);
  t.equal(sech(3), 0.0993279274194332);
  t.equal(sech(Math.PI), 0.08626673833405443);
});
