/**
 * @NOTE: Run this test from project root directory using :
 * node Persons/Tests/1-Test_Email_Extraction.test.js
 * 
 */

import index3NameCity from '../Solutions/4-Index3.js'
import arrayOfObjects from '../persons.js'

try {
    index3NameCity(arrayOfObjects);
    console.log('#1 Test passed for valid input');
} catch (err) {
    console.error('#1 Test failed for valid input: ', err.message);
}



// Invalid Input: no argument / empty argument
try {
    index3NameCity();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\n#2 Test argument was not provided.', err.message);
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    index3NameCity(arg);
    console.log("\n##3 Unsupported argument result found: " + result);
} catch (err) {
    console.error('\n#3 Unsupported argument was provided, which was: ->' + arg + '<- havng a typeof: ' + typeof arg);
}
