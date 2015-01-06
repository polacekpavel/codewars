function digitize(n) {
    n.toString()
        .split('')
        .map(function (x) {
            return parseInt(x, 10);
        });
}

function digitize2(n) {
    return String(n)
        .split('')
        .map(Number);
}

var moje = 123;


console.log(
    moje.toString()
    .split('')
    .map(function (x) {
        return parseInt(x, 10);
    }));