/**
 * @NOTE: Run this test from project root directory using :
 * node Persons/Tests/1-Test_Email_Extraction.test.js
 * 
 */

import printAges from '../Solutions/5-Ages.js'
import arrayOfObjects from '../persons.js'

try {
    printAges(arrayOfObjects)
} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}



// Invalid Input: no argument / empty argument
try {
    printAges();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\nTest argument was not provided.', err.message);
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    printAges(arg);
    console.log("\nUnsupported argument result found.");
} catch (err) {
    console.error('\nUnsupported argument was provided.', err.message);
}
