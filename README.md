# Function.prototype.callWith

Crazy shit.

``` js
a;
//=> ReferenceError: b is not defined

b;
//=> ReferenceError: a is not defined

var fn = function () {
    return a + b;
};

var obj = { a: 1, b: 2 };

var newFn = fn.callWith(obj);

newFn();
//=> 3

obj.a = 10;

newFn();
//=> 12

```

Yes, it works. Yes it's dangerous and slow.
