import items from '../arrays.js'
import find from "../Solutions/4.js"

console.log("Printiing 1st item greater than 3: ");
let greaterThanThree = find(items, item => item > 3)
console.log(greaterThanThree);


console.log("Printiing 1st item less than 3: ");
let lessThanThree = find(items, item => item < 3)
console.log(lessThanThree);


console.log("Printiing 1st positive item: ");
let positive = find(items, item => item > -1)
console.log(positive);


console.log("Printiing 1st negative item: ");
let negative = find(items, item => item < 0)
console.log(negative);