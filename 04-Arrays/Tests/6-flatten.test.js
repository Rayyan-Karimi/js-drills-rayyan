import { nestedArray, flatten } from "../Solutions/6-flatten.js"

console.log("Original array:", nestedArray);

let res=[]
flatten(nestedArray,res)
console.log("Printing given array as flattened:", res);

