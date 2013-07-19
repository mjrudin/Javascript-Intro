// var multiples = function (array) {
//   for(i = 0; i < array.length; i++) {
//     array[i] = (array[i]*2);
//   }
//   return array;
// }
// console.log(multiples([1,2,3]));


var testArray = [1,2,3,4];
var myEach = function(array, fun) {
  for (var i = 0; i < array.length; i++) {
     fun(array[i]);
  }
  return array;
}
var fun = function(number) {
     return number*2;
}
console.log("this is what my each returns")
console.log(myEach(testArray, fun));


console.log("myMap")

var myMap = function(array, fun) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(fun(array[i]));
  }
  return newArray;
}
console.log(myMap(testArray, fun));

var inject = function(array,fun) {
  var start = array[0]
  for (var i = 1; i < array.length; i++) {
    start = (fun(start, array[i]));
  }
  return start
}

var prod = function(num1, num2) {
  return num1 * num2
}

console.log(inject([3,4,5], prod))