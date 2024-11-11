/**
 * The dealer can't recall the information for a car with
 * an id of 33 on his lot. Help the dealer find out which 
 * car has an id of 33 by calling a function that will 
 * return the data for that car. Then log the car's year, 
 * make, and model in the console log in the format of:
("Car 33 is a *car year goes here* *car make goes here*
 *car model goes here*");
 */

function car33(array) {
    if (!Array.isArray(array))
        throw new Error("\nUnsupported argument for function.")
    for (const car of array) {
        if (car && typeof car === 'object' && car.hasOwnProperty("id") && car.id === 33 && car.hasOwnProperty("car_make") && car.hasOwnProperty("car_model") && car.hasOwnProperty("car_year")) {
            console.log("Car 33 is a", car.car_year, car.car_make, car.car_model);
            return;
        }
    }
    throw new Error("Given ID : 33 is not in our database")
}
export default car33;