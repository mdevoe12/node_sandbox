var pry = require('pryjs');

var newArray = new Array()

function insertionSort(array) {
  var length = array.length
  for (var i = 0; i < length; i++) {
    if (newArray.length == 0) {
      newArray.push(array[i]);
    } else if (array[i] > newArray[newArray.length - 1]) {
      newArray.push(array[i]);
    } else if (array[i] < newArray[0]) {
      newArray.unshift(array[i]);
    } else {
      
    }
  }
}

// eval(pry.it)
var sample = new Array(3, 4, 1, 2)
insertionSort(sample)
console.log(newArray)
