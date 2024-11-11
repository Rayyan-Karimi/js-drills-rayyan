import olderCars from '../Solutions/5.js'
import inventory from '../cars.js'

try {
    olderCars(inventory)
} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}

// Invalid Input: no argument
try {
    olderCars();
} catch (err) {
    console.error(err.message);
}
// Invalid Input: invalid argument
let arg = "my string"
try {
    olderCars(arg);
} catch (err) {
    console.error(err.message);
}
