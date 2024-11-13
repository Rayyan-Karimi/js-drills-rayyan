/**
 * Look through each value in `elements` and pass each element to `cb`. 
 * If `cb` returns `true` then return that element. 
 * Return `undefined` if no elements pass the truth test. 
 */

function find(elements, cb) {
    if (!Array.isArray(elements))
        throw new Error("You must provide an array as the argument.")
    if (!cb || typeof cb !== "function")
        throw new Error("Callback must be a function and it must be provided.")
    
    let res = ""
    for (let i = 0; i < elements.length; i++) {
        if(cb(elements[i])) {
            res = elements[i];
            break;
        }
    }
    return res === "" ? undefined : res;
}
export default find