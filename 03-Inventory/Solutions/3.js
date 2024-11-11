/**
 * The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
 */
const alphabetical = (array) => {
    if(!array)
        throw new Error("\nNo argument provided.")
    if (!Array.isArray(array))
        throw new Error("\nUnsupported argument - not an array");
    const sortedArray = [...array].sort((a, b) => {
        if(a.car_model < b.car_model) return -1;
        if(a.car_model > b.car_model) return 1;
        return 0;
    });
    return sortedArray;
};
export default alphabetical;