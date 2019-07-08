// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    
    }


module.exports = reverseInt;
var sign = Math.sign(n);
    var absoluteValue = Math.abs(n)
    var stringOfAbsoluteValue = absoluteValue.toString()
    var reverseStringOfAbsoluteValue = stringOfAbsoluteValue.split("").reverse("").join("")
    var integer = parseInt(reverseStringOfAbsoluteValue)* sign
    return integer