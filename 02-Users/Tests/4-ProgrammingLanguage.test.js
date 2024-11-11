
import group from '../Solutions/4-ProgrammingLanguage.js'
import users from '../Users.js'

try {
    const result = group(users)
    console.log("Grouped by languages: ", result);

} catch (err) {
    console.error('Test failed for valid input, which was an object. Error is: ', err.message);
}



// Invalid Input: no argument / empty argument
try {
    const result = group();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\nTest argument was not provided.', err.message);
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    const result = group(arg);
    console.log("\nUnsupported argument result found.", result);
} catch (err) {
    console.error('\nUnsupported argument was provided.', err.message);
}
