/**
 * @NOTE: Run this test from project root directory using :
 * node Persons/Tests/1-Test_Email_Extraction.test.js
 * 
 */

import index3NameCity from '../Solutions/3-Hobbies.js'
import arrayOfObjects from '../persons.js'

try {
    if (arrayOfObjects.length > 3 && arrayOfObjects.hasOwnProperty(city) && arrayOfObjects.hasOwnProperty(name)) {
        console.log('#1 Test passed for valid input');
        index3NameCity(arrayOfObjects);
    } else {
        throw new Error('Expected an array of length > 4, but got length = ' + arrayOfObjects.length);
    }
} catch (err) {
    console.error('#1 Test failed for valid input: ', err.message);
}



// Invalid Input: no argument / empty argument
try {
    index3NameCity();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\n#2 Test argument was not provided.');
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    index3NameCity(arg);
    console.log("\n##3 Unsupported argument result found: " + result);
} catch (err) {
    console.error('\n#3 Unsupported argument was provided, which was: ->' + arg + '<- havng a typeof: ' + typeof arg);
}
