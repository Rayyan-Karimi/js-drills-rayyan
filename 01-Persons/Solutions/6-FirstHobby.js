/**
 * Create a function to retrieve and display the 
 * first hobby of each individual in the dataset.
 */
function displayFirstHobby(array) {
    if (!Array.isArray(array))
        throw new Error("Input is not an array.")
    for (const element of array) {
        if (!element.hasOwnProperty("hobbies") || !Array.isArray(element.hobbies) || !element.hobbies.length === 0)
            throw new Error("Atleast 1 person's hobbies are missing.")
    }

    for (const element of array) {
        console.log("First hobby: ", element.hobbies[0]);
    }
}
export default displayFirstHobby
