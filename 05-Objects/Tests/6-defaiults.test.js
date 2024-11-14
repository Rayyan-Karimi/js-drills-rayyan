/**
 * Fill in undefined properties that match properties on 
 * the `defaultProps` parameter object. Return `obj`.
 */
import defaults from "../Solutions/6.js"
import testObject from "../testObject.js"

console.log("Adding defaults to object: ");
console.log(defaults(testObject, { age: 26, bankAccounts: 10, yearlyTurnover: "10 million" }));