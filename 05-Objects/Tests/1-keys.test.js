/**
 * Retrieve all the names of the object's properties. 
 * Return the keys as strings in an array. 
 */
import keys from "../Solutions/1.js"
import testObject from "../testObject.js"

console.log("Keys of the object:", keys(testObject));

try {
    console.log("Keys of empty object:", keys({}));
} catch (err) {
    console.error(err.message)
}