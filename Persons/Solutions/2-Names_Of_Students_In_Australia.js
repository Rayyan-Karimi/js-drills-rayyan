/**
 * Create a function that extracts and displays the names of individuals who are students 
 * (`isStudent: true`) and live in Australia.
 */

const namesOfStudentsInAustralia = (arrayOfObjects) => arrayOfObjects.map(student => student.country === 'Australia' ? student.name : null).filter(name => name !== null);

export default namesOfStudentsInAustralia;

