/**
 * Implement a loop to access and log the city and 
 * country of each individual in the dataset.
 */
function cityCountry(array) {
    if (!Array.isArray(array))
        throw new Error("Input is not an array.")
    for (const element of array) {
        if (!element.hasOwnProperty("city") || !element.hasOwnProperty("country"))
            throw new Error("Atleast 1 person's properties are missing.")
        if (typeof element.city !== 'string' || typeof element.country !== 'string')
            throw new Error("Atleast 1 person's city and country data are not set as string values.")
    }

    for (const element of array) {
        console.log("City:", element.city, "Country:", element.country);
        if (element.city.trim() === "" || element.country.trim() === "")
            console.error(element.name, "'s city/country properties are empty in our database.")
    }
}
export default cityCountry