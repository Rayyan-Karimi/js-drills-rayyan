/**
 * Map calls a provided callback function once for each element in an array, in order, 
 * and functionructs a new array from the result. Produces a new array of values by mapping 
 * each value in list through a transformation function (iteratee). Return the new array.
 */
function map(elements, callback) {
  if (!Array.isArray(elements))
    throw new Error("You must provide an array as the argument.")
  if (!callback)
    throw new Error("Please provide the operation which you want to perform to create new map.")

  let res = []
  for (let i = 0; i < elements.length; i++) {
    const iteratee = () => callback(elements[i], i, elements); // Transformation fn.
    res.push(iteratee());
  }
  return res;
}
export default map;
