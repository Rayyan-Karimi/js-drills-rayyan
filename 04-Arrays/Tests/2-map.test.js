import items from '../arrays.js'
import map from "../Solutions/2-myMap.js"

console.log("Prinitng each item: ");
let itemMap = map(items, (item) => item)
console.log(itemMap);


console.log("Printing squares: ");
let squareArray = map(items, (item) => item * item)
console.log(squareArray);


console.log("Changing items at odd indices: ");
console.log(map(items, (item, index) => index % 2 !== 0 ? item += 10 : item));



console.log("Trying with non-array items.");
let object = {
    name: "Amyra", age: 20, email: "amyra@gmail.com"
};
try {
    console.log(map(object, (item) => item));
} catch (err) {
    console.error(err.message)
}
