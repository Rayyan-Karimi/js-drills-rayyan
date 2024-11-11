/**
 * The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
 */
import years from './4.js';
const olderCars = (array) => {
    const yearsArray = years(array).filter(car_year => car_year < 2000)
    console.log("Number of cars older than 2000:", yearsArray.length);
};
export default olderCars;