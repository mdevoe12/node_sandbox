const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

// var array = new Array(4, 3, 2, 1)
describe('sorting array of numbers', function() {
  context('with bubblesort', function() {
    it('it can sort an array of numbers', function() {
      assert.equal(bubbleSort([4, 3, 2, 1]), [1, 2, 3, 4])
    })
  })
})
