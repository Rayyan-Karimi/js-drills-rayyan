/**
 * Implement a loop to access and print the ages of all
 *  individuals in the dataset.
 */

function printAges(array) {
    if(!Array.isArray(array))
        throw new Error("This is not an array.")
    for (const element of array) {
        if(!element.hasOwnProperty("age"))
            throw new Error("At least 1 of the elements in the array does not have an 'age' property.")
    }
    for (const element of array) {
        console.log("Age: ", element.age);
    }
}
export default printAges;