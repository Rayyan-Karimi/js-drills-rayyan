/**
 * The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
 */
const years = (array) => {
    if (!array)
        throw new Error("No argument provided.")
    if (!Array.isArray(array) || array.length === 0 || !array[0].hasOwnProperty("car_year"))
        throw new Error("Invalid argument.")
    return array.map(object => object.car_year)
};
export default years;