/**
 * Retrieve all the values of the object's properties. 
 * Return the values as strings in an array. 
 */
import values from "../Solutions/2.js"
import testObject from "../testObject.js"

console.log("Values of the object:", values(testObject));

try {
    console.log("Values of empty object:", values({}));
} catch (err) {
    console.error(err.message)
}