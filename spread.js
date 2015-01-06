var add = function(x,y) {
    return x + y;
};

console.log(add(1,2,3));

var spread = function(func,args){
    func(args);
};
console.log(spread(function(x,y){return x+y}, [1,2]));
