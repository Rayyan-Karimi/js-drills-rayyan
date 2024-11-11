import years from '../Solutions/4.js'
import inventory from '../cars.js'

try {
    const result = years(inventory)
    console.log(result);
} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}


// Invalid Input: no argument / empty argument
try {
    const result = years();
} catch (err) {
    console.error(err.message);
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    const result = years(arg);
} catch (err) {
    console.error(err.message);
}
