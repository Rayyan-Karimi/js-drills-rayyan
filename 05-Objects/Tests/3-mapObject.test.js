/**
 * Like map for arrays, but for objects. Transform the 
 * value of each property in turn by passing it to the 
 * callback function.
 */
import mapObject from "../Solutions/3.js"
import testObject from "../testObject.js"

console.log("Manipulating all properties of the object: ");
console.log(mapObject(testObject, (value, key, testObject) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 2;
    } else {
        return "New data type";
    }
}));

