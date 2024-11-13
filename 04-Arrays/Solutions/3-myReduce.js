/**
 * A reduce function combines all elements into a single value going from left to right. 
 * Elements will be passed one by one into `cb` along with the `startingValue`. 
 * `startingValue` should be the first argument passed to `cb` and the array element should be the second argument. 
 * `startingValue` is the starting value.  
 * If `startingValue` is undefined then make `elements[0]` the initial value.
 */

function reduce(elements, cb, startingValue) {
    if (!Array.isArray(elements))
        throw new Error("You must provide an array as the argument.")
    if (!cb || typeof cb !== "function")
        throw new Error("Callback must be a function and it must be provided.")

    let res = startingValue;
    for (let i = 0; i < elements.length; i++) {
        res = cb(res, elements[i], i, elements);
    }
    return res;
}
export default reduce;