
import car33 from '../Solutions/1.js'
import inventory from '../cars.js'

try {
    const result = car33(inventory)
} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}


// Invalid Input: no argument / empty argument
try {
    const result = car33();
} catch (err) {
    console.error('\nTest argument was not provided.');
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    const result = car33(arg);
} catch (err) {
    console.error(err.message);
}
