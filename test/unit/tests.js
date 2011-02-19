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

  var funMultiplyArguments = function (a, b) { return a + b; };

  test('should pass arguments', function() {
    equal(funMultiplyArguments.callWith(null, null, [1, 2]), 3);
  });

    ////// forkWith spec

    test('any function should respond to forkWith', function() {
        equal(
            (function() {}).forkWith.constructor,
            Function
        );
    });

    //

    test('should fork function with local variables', function () {
        var originFun,
            object = {},
            forkedFun;

        originFun = function () {
            return(a + b);
        };

        forkedFun = originFun.forkWith(null, object);

        object.a = 1;
        object.b = 2;

        equal(forkedFun(), 3);
    });
});
