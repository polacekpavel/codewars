var x = function() {
    return 1;
};

var t = function(a,b,c) {
    return a+b+c;
};


Function.prototype.clone = function() {
    var tempCopy = this;
    var temp = function temporary() { return tempCopy.apply(this, arguments); };
    for(var key in this) {
        if (this.hasOwnProperty(key)) {
            temp[key] = this[key];
        }
    }
    return temp;
};
console.log(function tempFunc() { return 1; } === function tempFunc() { return 1;}.clone());
console.log(x === x.clone());
console.log(x() === x.clone()());

console.log(t === t.clone());
console.log(t(1,1,1) === t.clone()(1,1,1));
console.log(t.clone()(1,1,1));
