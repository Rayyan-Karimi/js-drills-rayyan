/**
 * @NOTE: Run this test from project root directory using :
 * node Persons/Tests/1-Test_Email_Extraction.test.js
 * 
 */

import displayFirstHobby from '../Solutions/6-FirstHobby.js'
import arrayOfObjects from '../persons.js'

try {
    displayFirstHobby(arrayOfObjects)
} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}



// Invalid Input: no argument / empty argument
try {
    displayFirstHobby();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\nTest argument was not provided.', err.message);
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    displayFirstHobby(arg);
    console.log("\nUnsupported argument result found.");
} catch (err) {
    console.error('\nUnsupported argument was provided.', err.message);
}
