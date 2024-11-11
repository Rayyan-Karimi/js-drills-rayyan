/**
 * Find all users with masters Degree.
 */

function getHobbiesByAge(students, givenAge) {
    // let requiredHobbies = []
    // for (const student of  students) {
    //     if (student.age === givenAge) {
    //         for (const hobbyArray of student.hobbies) {
    //             requiredHobbies.push(hobbyArray);
    //         }
    //     }
    // }
    // return requiredHobbies;
    return students.filter(student => student.age === givenAge).flatMap(student => student.hobbies);
}

export default getHobbiesByAge