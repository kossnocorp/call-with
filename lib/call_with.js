Function.prototype.callWith = function(context, object) {
  var variablesSet = ['newFun=' + this.toString()],
      returnedValue;

  for(var key in object)
    if(hasOwnProperty.call(object, key)) {
      variablesSet.push(key + '=' + 'object["' + key + '"]');
    }

  (function () {
    eval('var ' + variablesSet.join(',') + '; returnedValue = newFun.apply(context);');
  })();

  return returnedValue;
};
