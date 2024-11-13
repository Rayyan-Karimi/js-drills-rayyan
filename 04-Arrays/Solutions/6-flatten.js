import each from "../Solutions/1.js"
/**
 * Flattens a nested array (the nesting can be to any depth). Hint: You can solve this 
 * using recursion. Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
 */

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements, flatArray = []) {
    if (!Array.isArray(elements))
        throw new Error("Input is not an array");

    each(elements, (item, index) => {
        if (Array.isArray(item)) {
            flatArray.push(flatten(item))
        } else {
            flatArray.push(item)
        }
    })
    return flatArray
}
export { nestedArray, flatten };