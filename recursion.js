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
  midpoint = Math.floor(array.length/2);
  if (target == array[midpoint]) {
    return midpoint;
  } else if (array.length == 0) {
    return null;
  } else if (target < array[midpoint]) {
    return binarySearch(array.slice(0, midpoint), target);
  } else {
    return midpoint + binarySearch(array.slice(midpoint, array.length), target);
  }
}

//console.log(binarySearch([1,2,3,4,5], 5))


