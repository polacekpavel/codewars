function add(n){
    var sum;

    return function() {
        sum += n;
        return this;
    };
}