import arrayOfObjects from '../persons.mjs';

/**
 * Given the dataset of individuals, write a function that accesses and
 * returns the email addresses of all individuals.
 */

const emailExtractor = () => arrayOfObjects.map(object => object.email);

export default emailExtractor;