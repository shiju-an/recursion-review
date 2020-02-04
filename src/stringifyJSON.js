// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  var array = [];

  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return '' + obj;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (obj === Infinity || obj === null || obj === NaN) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    obj.forEach(function (element) {
      array.push(stringifyJSON(element));
    });
    return '[' + array + ']';
  }

  if (!Array.isArray(obj) && typeof obj === 'object') {
    for (var key in obj) {
      if (key === 'functions' || key === 'undefined') {
        continue;
      } else {
        var newKey = stringifyJSON(key);
        var newValue = stringifyJSON(obj[key]);
        array.push(newKey + ':' + newValue);
      }
    }
    return '{' + array + '}';
  }

};


