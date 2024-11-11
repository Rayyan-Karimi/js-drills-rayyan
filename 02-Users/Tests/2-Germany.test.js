
import germany from '../Solutions/2-Germany.js'
import users from '../Users.js'

try {
    const result = germany(users)
    console.log(result);
    
} catch (err) {
    console.error('Test failed for valid input, which was an object. Error is: ', err.message);
}



// Invalid Input: no argument / empty argument
try {
    const result = germany();
    console.log("No argument result found: " + result);
} catch (err) {
    console.error('\nTest argument was not provided.', err.message);
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    const result = germany(arg);
    console.log("\nUnsupported argument result found.", result);
} catch (err) {
    console.error('\nUnsupported argument was provided.', err.message);
}
