$(function() {

  module('Function#callWith');

  // Simple tests

  test('should respond', function() {
    equal(
      (function() {}).callWith.constructor,
      Function
    );
  });

  var funReturnsTrue = function() { return true; }

  test('should accept two object', function() {
    ok(funReturnsTrue.callWith({}, {}));
  });

  test('should accept nulls', function() {
    ok(funReturnsTrue.callWith(null, null));
  });

  test('should run without argumnets', function() {
    ok(funReturnsTrue.callWith());
  });

  // Functional tests

  test('should return value', function() {
    equal((function() { return 9; }).callWith(), 9);
  });

  var funReturnsSumOfAAndBFromContext = function() { return this.a + this.b; },
      aAndB = { a: 1, b: 2 };

  test('should define context', function() {
    equal(funReturnsSumOfAAndBFromContext.callWith(aAndB), 3);
  });

  var funReturnsSumOfAAndB = function() { return a + b; };

  test('should define local integer variables from object', function() {
    equal(funReturnsSumOfAAndB.callWith(null, aAndB), 3);
  });

  var funReturnsCString = function() { return c; },
      cString = { c: 'Hello cruel world!' };

  test('should define local string variables from object', function() {
    equal(funReturnsCString.callWith(null, cString), 'Hello cruel world!');
  });
});
