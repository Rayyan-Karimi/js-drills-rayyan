/**
 * A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
 */
const getBMWAndAudiCars = (array) => {
    if (!array)
        throw new Error('No argument provided.');
    if (!Array.isArray(array))
        throw new Error('Argument must be an array.');
    return array.filter(car => car.car_make === 'Audi' || car.car_make === 'BMW');
}
export default getBMWAndAudiCars;