var x = function () {
    return 1;
};

var t = function (a, b, c) {
    return a + b + c;
};


Function.prototype.clone = function () {
    var that = this;
    var clone = function () {
        return that.apply(this, arguments);
    };

    clone.prototype = that.prototype;

    for (item in that) {
        if (that.hasOwnProperty(item) && item !== 'prototype')
            clone[item] = that[item];
    }
    return clone;
};

console.log(x === x.clone());
console.log(x() === x.clone()());

console.log(t === t.clone());
console.log(t(1, 1, 1) === t.clone()(1, 1, 1));
console.log(t.clone()(1, 1, 1));