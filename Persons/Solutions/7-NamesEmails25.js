/**
 * Write a function that accesses and prints the names 
 * and email addresses of individuals aged 25.
 */

function printAged25(array) {
    if (!Array.isArray(array))
        throw new Error("Input is not an array.")
    for (const element of array) {
        if (!element.hasOwnProperty("age") || !element.hasOwnProperty("email") || !element.hasOwnProperty("name"))
            throw new Error("Atleast 1 person's properties are missing.")
    }

    for (const element of array) {
        if(element.age === 25)
        console.log("Name: ", element.name, "Email ID: ", element.email);
    }
}
export default printAged25