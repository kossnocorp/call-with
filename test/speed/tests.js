var
    multyplyAAndBStandart = function (a, b) {
        return a + b;
    },

    aAndB = {
        a: 1,
        b: 2
    },

    multyplyAAndBCallWith = function () {
        return a + b;
    };


JSLitmus.test('Standart arguments pass', function () {
    multyplyAAndBStandart(1, 2);
});

JSLitmus.test('Pass arguments via callWith', function () {
    multyplyAAndBCallWith.callWith(null, aAndB);
});
