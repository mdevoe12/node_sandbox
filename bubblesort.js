var pry = require('pryjs');

function bubbleSort(array) {
  var length = array.length
  for (var i = 0; i < length - 1; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j]
        array.splice(j, 1)
        array.splice([j + 1], 0, temp)
      }
    }
  }
  console.log(array);
}


module.exports = bubbleSort
