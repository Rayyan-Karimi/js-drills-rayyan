/**
 * Returns a copy of the object where the keys have become 
 * the values and the values the keys. Assume that all of 
 * the object's values will be unique and string serializable. 
 */
import invert from "../Solutions/5.js"
import testObject from "../testObject.js"

console.log("Inverting key-values of the object: ");
console.log(invert(testObject));
