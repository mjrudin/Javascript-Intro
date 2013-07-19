var myUniq = function(array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) == -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

notUniq = [1, 2, 1, 3, 3];
console.log(myUniq(notUniq))

var twoSum = function(array) {
  var newArray = []
  for(var i = 0; i < array.length; i++) {
    for(var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == 0) {
        newArray.push([i,j]);
      }
    }
  }
  return newArray;
}

twoSumArray= [-1, 0, 2, -2, 1]
console.log(twoSum(twoSumArray));

var myTranspose = function(array) {
  var newArray =[];
  for(var i = 0; i < array.length; i++) {
    var newSubArray = [];
    for(var j = 0; j < array[i].length; j++) {
      newSubArray.push(array[j][i]);
    }
    newArray.push(newSubArray);
  }
  return newArray;
}

var rows = [[0, 1, 2],[3, 4, 5],[6, 7, 8]]
console.log(myTranspose(rows))

