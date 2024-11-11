
import lastCar from '../Solutions/2.js'
import inventory from '../cars.js'

try {
    const result = lastCar(inventory)
} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}


// Invalid Input: no argument / empty argument
try {
    const result = lastCar();
} catch (err) {
    console.error('\nTest argument was not provided.');
}


// Invalid Input: invalid argument
let arg = "my string"
try {
    const result = lastCar(arg);
} catch (err) {
    console.error(err.message);
}
