Function.prototype.callWith = function (context, object, args) {
    var setDefaultValue = function(value, defaultValue) {
            return typeof value  === 'object' ? value  : defaultValue;
        },
        variablesSet = ['newFun=' + this.toString()],
        returnedValue,
        passObject  = setDefaultValue(object, {}),
        passContext = setDefaultValue(context, {}),
        passArgs    = setDefaultValue(args,   []);

    for (var key in passObject)
        if (passObject.hasOwnProperty.call(passObject, key))
            variablesSet.push(key + '=' + 'passObject["' + key + '"]');

    (function () {
        eval(
            'var ' + variablesSet.join(',') +
            '; returnedValue = newFun.apply(passContext, passArgs);'
        );
    })();

    return returnedValue;
};
