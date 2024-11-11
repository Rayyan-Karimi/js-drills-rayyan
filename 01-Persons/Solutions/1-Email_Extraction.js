/**
 * Given the dataset of individuals, write a function that accesses and
 * returns the email addresses of all individuals.
 */

const emailExtractor = (arrayOfObjects) => arrayOfObjects.map(object => object.email);

export default emailExtractor;