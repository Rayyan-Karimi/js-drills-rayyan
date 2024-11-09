/**
 * @NOTE: Run this test from project root directory using :
 * node Persons/Tests/1-Test_Email_Extraction.test.js
 * 
 */

import emailExtractor from '../Solutions/1-Email_Extraction.js'
import arrayOfObjects from '../persons.js'

// Valid input
try {
    const result = emailExtractor(arrayOfObjects);
    if (typeof result !== typeof (['emails'])) {
        throw new Error('Expected emailExtractor to return an array of objects with an email property, but got ' + JSON.stringify(result));
    }
    console.log('#1 Test passed for valid input');
    console.log(result);

} catch (err) {
    console.error('Test failed for valid input: ', err.message);
}

// @TODO: Invalid Input: no argument
try {
    const result = emailExtractor();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\n#2 Test argument was not provided.');
}

// @TODO: Invalid Input: empty argument
try {
    const emptyArray = []
    const result = emailExtractor(emptyArray);
    console.log("\n##3 Empty argument result found: " + result);
} catch (err) {
    console.error('\n#3 Test argument provided was empty.');
}

// @TODO: Invalid Input: no argument
let arg = "my string"
try {
    const result = emailExtractor(arg);
    console.log("\n##4 Unsupported argument result found: " + result);
} catch (err) {
    console.error('\n#4 Unsupported argument was provided, which was: ->' + arg + '<- havng a typeof: ' + typeof arg);
}
