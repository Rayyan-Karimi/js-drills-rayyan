import getBMWAndAudiCars from '../Solutions/6.js'
import inventory from '../cars.js'

try {
    const result = getBMWAndAudiCars(inventory)
    console.log(JSON.stringify(result));

} catch (err) {
    console.error('Test failed for valid input, which was an array. Error is: ', err.message);
}

// Invalid Input: no argument
try {
    const result = getBMWAndAudiCars()
    console.log(JSON.stringify(result));
} catch (err) {
    console.error(err.message);
}
// Invalid Input: invalid argument
let arg = "my string"
try {
    const result = getBMWAndAudiCars(arg)
    console.log(JSON.stringify(result));
} catch (err) {
    console.error(err.message);
}
