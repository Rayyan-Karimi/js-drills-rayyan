import items from '../arrays.js'
import each from "../Solutions/1.js"

// Prinitng each item
each(items, item => {
    console.log(item);
});


each(items, (item, index) => {
    console.log("Item at index", index, "is:", item);
})


// Performing operations on items using our function, and setting it up elsewhere.
let copy = []
each(items, (item, index) => {
    copy.push([...items][index] *= 2);
});
console.log("copy:", copy);
console.log("original:", items);


// Performing operations on items using our function.
each(items, (item, index) => {
    items[index] *= 2;
});
console.log("original:", items);

