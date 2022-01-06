const test = require('tape');
const isFunction = require('lodash.isfunction');
const almostEqual = require('almost-equal');

const sech = require('../');

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
  t.ok(almostEqual(sech(Math.PI), 0.08626673833405443, 1e-16));
});
