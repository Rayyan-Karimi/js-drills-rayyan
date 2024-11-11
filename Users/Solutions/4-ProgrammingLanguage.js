/**
 * Group users based on their Programming language mentioned in their designation.
 */

function index3NameCity(array) {
    if (!Array.isArray(array) || !array[3].hasOwnProperty("city") || !array[3].hasOwnProperty("name"))
        throw new Error("Invalid argument provided.")

    let city = array[3].city, name = array[3].name;

    console.log("City at 3rd index: ", city);
    console.log("Name at 3rd index: ", name);
}
export default index3NameCity;