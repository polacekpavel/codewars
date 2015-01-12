Array.prototype.reduce = function(callback, initial) {
    var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length == 2) {
      value = arguments[1];
    }
    else {
      while (k < len && ! k in t) {
        k++;
      }

      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
};