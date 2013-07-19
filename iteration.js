var myUniq = function(array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) == -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


var bubbleSort = function(array) {
  var notSorted = true;
  for ( var j = 0; j < array.length; j++) {
    for ( var i = 0; i < array.length - 1; i++) {
      var t1 = array[i];
      var t2 = array[i+1];
      if (t1 > t2) {
        array[i] = t2;
        array[i+1] = t1;
      }
      continue;
    }
  }
  return array;
}

// console.log(bubbleSort([6,5,3,1,8,7,2,4]))

var substrings = function(string) {
  subs = [];
  for (var i = 0; i <= string.length - 1; i++) {
    for (var j = 1; j <= string.length; j++) {
      if (i == j) {
        continue;
      }
    subs.push(string.substring(i, j));
    }
  }
  return myUniq(subs)
}

console.log(substrings('cat'));