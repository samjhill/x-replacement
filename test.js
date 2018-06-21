let assert = require('assert')
let replace = require('./replace')

let testReplace = function() {
    let replaced = replace('10X10X0', [[]])

    console.log('replaceX() should return an array of numbers with X\'s substituted')

    try {
        assert.equal(replaced.length, 4)

        console.log('Passed.')
    } catch(err) {
        console.error('Failed')
        console.error(err)
    }
}

testReplace()
