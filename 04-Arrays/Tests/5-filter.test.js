import items from '../arrays.js'
import filter from "../Solutions/5.js"

console.log("Printiing items greater than 3: ");
let greaterThanThree = filter(items, item => item > 3)
console.log(greaterThanThree);


console.log("Printiing items less than 3: ");
let lessThanThree = filter(items, item => item < 3)
console.log(lessThanThree);


console.log("Printiing positive items: ");
let positive = filter(items, item => item > -1)
console.log(positive);


console.log("Printiing negative items: ");
let negative = filter(items, item => item < 0)
console.log(negative);