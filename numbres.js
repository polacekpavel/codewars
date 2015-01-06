function numbers() {
  return [].every.call(arguments, function(value) {
    return typeof value === "number";
  });
}

console.log(numbers(1,2,3));
console.log(numbers([1,2,3,"b"]));

