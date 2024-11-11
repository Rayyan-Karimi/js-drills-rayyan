/**
 * @NOTE: Run this test from project root directory using :
 * node Persons/Tests/1-Test_Email_Extraction.test.js
 * 
 */

import printAged25 from '../Solutions/7-NamesEmails25.js'
import arrayOfObjects from '../persons.js'

try {
    printAged25(arrayOfObjects)
} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}



// Invalid Input: no argument / empty argument
try {
    printAged25();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\nTest argument was not provided.', err.message);
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    printAged25(arg);
    console.log("\nUnsupported argument result found.");
} catch (err) {
    console.error('\nUnsupported argument was provided.', err.message);
}
