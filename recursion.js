var us = require("./underscore.js");

var range = function(start, end) {
  if (start == end) {
    return [start];
  } else {
    return [start].concat(range(start+1, end));
  }
}

//console.log(range(1,4));


var sum = function(array) {
  if (array.length == 1) {
    return array[0]
  } else {
    return array[0] + sum(array.slice(1))
  }
}

// console.log(sum([1,2,3]))

var exponent = function(num, exp) {
  if (exp == 0) {
    return 1;
  } else {
    return num * (exponent(num, exp-1));
  }
}

// console.log(exponent(3,3))

var fibonacci = function(num) {
  if (num == 0) {
    return [];
  } else if (num == 1) {
    return [0]
  } else if (num == 2) {
    return [0,1]
  } else {
    fib = fibonacci(num - 1)
    return fib.concat([fib.slice(-2)[0] + fib.slice(-2)[1]])
  }
}
// console.log(fibonacci(8));

var binarySearch = function(array, target) {
  var midpoint = Math.floor(array.length/2);
  if (target == array[midpoint]) {
    return midpoint;
  } else if (array.length == 0) {
    return null;
  } else if (target < array[midpoint]) {
    return binarySearch(array.slice(0, midpoint), target);
  } else {
    return binarySearch(array.slice(midpoint, array.length), target) + midpoint;
  }
}

// console.log(binarySearch([1,2,3,4,5], 4))

var makeChange = function(amount, coinsArray) {

  if (amount == 0) {
    return []
  }
  else if (amount/coinsArray[0] == 1) {
    return [coinsArray[0]].concat(makeChange(amount - coinsArray[0],coinsArray.slice(-1)));
  }
  else if (Math.floor(amount/coinsArray[0]) == 0) {
    return makeChange(amount, coinsArray.slice(1))
  }
  else {
    return [coinsArray[0]].concat(makeChange(amount - coinsArray[0], coinsArray))
  }
}

// console.log(makeChange(16, [25,10,5,1]))


// var mergeSort = function(array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   var middle = Math.floor(array.length/2);
//   var left = array.slice(0, middle);
//   var right = array.slice(middle);
//   //console.log("LEFT " + left);
//   //console.log("Right " + right);
//   left = mergeSort(left);
//   right = mergeSort(right);
//
//   return merge(left, right);
// }
//
// var merge = function(left, right) {
//    result = [];
//
//   console.log(left, right)
//
//   while (left.length > 0 || right.length > 0) {
//     if (left.length > 0 && right.length > 0) {
//       if (left[0] <= right[0]) {
//         console.log(left[0]);
//         result.concat(left.splice(0, left[0]))
//       } else {
//         console.log(right[0]);
//         result.concat(right.splice(0, right[0]))
//       }
//     } else if (left.length > 0) {
//       result.concat(left.splice(0, left[0]))
//     } else if (right.length > 0) {
//       result.concat(right.splice(0, right[0]))
//     }
//   }
//   console.log("This is the result in merge" + result)
//   return result;
// }
//
// console.log(mergeSort([38,27,43,7,9,82,10]))



// var subsets = function(array) {
//
//   if (array.length == 0) {
//     return [[]]
//   } else if (array.length == 1){
//     return array.concat(subsets(array.slice(1)))
//   } else {
//     return array.concat(subsets(array.slice()))
//
//   }
//
// }

var subsets = function(array) {
  if (array.length == 0) {
    return [[]];
  }
  var lastElement = array.pop();
  var subSubsets = subsets(array)

  var newSubsets = us(subSubsets).map(function(subSubset) {
    return subSubset.concat(lastElement);
  });
  return newSubsets.concat(subSubsets);
}

console.log(subsets([1,2,3]))

