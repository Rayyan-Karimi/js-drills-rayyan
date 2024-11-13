/**
 * Similar to `find` but you will return an array of all elements that passed the truth test. 
 * Return an empty array if no elements pass the truth test. 
 */

function filter(elements, cb) {
    if (!Array.isArray(elements))
        throw new Error("You must provide an array as the argument.")
    if (!cb || typeof cb !== "function")
        throw new Error("Callback must be a function and it must be provided.")

    let res = []
    for (let i = 0; i < elements.length; i++) {
        if (cb(elements[i]))
            res.push(elements[i]);
    }
    return res;
}
export default filter;