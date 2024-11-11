
import alphabetical from '../Solutions/3.js'
import inventory from '../cars.js'

try {
    const result = alphabetical(inventory)
    console.log(result);
} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}


// Invalid Input: no argument / empty argument
try {
    const result = alphabetical();
} catch (err) {
    console.error(err.message);
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    const result = alphabetical(arg);
} catch (err) {
    console.error(err.message);
}
