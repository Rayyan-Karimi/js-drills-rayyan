/**
 * Iterates over a list of elements, yielding each in turn to the `cb` function.
*/
function each(elements, callback) {
    if(!Array.isArray(elements))
        throw new Error("Invalid input - Input must be of type : 'array'");
    for(let index=0; index<elements.length; index++)
        callback(elements[index], index)
}
export default each;