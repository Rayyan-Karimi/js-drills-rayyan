/**
 * @NOTE: Run this test from project root directory using :
 * node Persons/Tests/1-Test_Email_Extraction.test.js
 * 
 */

import getHobbiesByAge from '../Solutions/3-Hobbies.js'
import arrayOfObjects from '../persons.js'

let givenAge = 30;

try {
    const result = getHobbiesByAge(arrayOfObjects, givenAge);
    if (!Array.isArray(result)) {
        throw new Error('Expected getHobbiesByAge to be an array of hobbies, but got ' + JSON.stringify(result));
    } else {
        console.log('#1 Test passed for valid input');
        console.log(result);
    }
} catch (err) {
    console.error('#1 Test failed for valid input: ', err.message);
}



// Invalid Input: no argument / empty argument
try {
    const result = getHobbiesByAge();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\n#2 Test argument was not provided.');
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    const result = getHobbiesByAge(arg);
    console.log("\n##3 Unsupported argument result found: " + result);
} catch (err) {
    console.error('\n#3 Unsupported argument was provided, which was: ->' + arg + '<- havng a typeof: ' + typeof arg);
}
