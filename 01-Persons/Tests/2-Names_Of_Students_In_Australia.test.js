/**
 * @NOTE: Run this test from project root directory using :
 * node Persons/Tests/1-Test_Email_Extraction.test.js
 * 
 */

import namesOfStudentsInAustralia from '../Solutions/2-Names_Of_Students_In_Australia.js'
import arrayOfObjects from '../persons.js'

// Valid input
try {
    const result = namesOfStudentsInAustralia(arrayOfObjects);
    if (typeof result !== typeof (['names'])) {
        throw new Error('Expected namesOfStudentsInAustralia to return an array of objects with an name property, but got ' + JSON.stringify(result));
    }
    console.log('#1 Test passed for valid input');
    console.log(result);

} catch (err) {
    console.error('Test failed for valid input: ', err.message);
}

// Invalid Input: no argument
try {
    const result = namesOfStudentsInAustralia();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\n#2 Test argument was not provided.');
}

// Invalid Input: empty argument
try {
    const emptyArray = []
    const result = namesOfStudentsInAustralia(emptyArray);
    console.log("\n#3 Empty argument result found: " + result);
} catch (err) {
    console.error('\n#3 Test argument provided was empty.');
}

// Invalid Input: no argument
let arg = "my string"
try {
    const result = namesOfStudentsInAustralia(arg);
    console.log("\n##4 Unsupported argument result found: " + result);
} catch (err) {
    console.error('\n#4 Unsupported argument was provided, which was: ->' + arg + '<- havng a typeof: ' + typeof arg);
}
