/**
 * Group users based on their Programming language 
 * mentioned in their designation.
 */

const programmingLanguages = ["Golang", "Javascript", "Python", "Java", "Ruby", "C++"]
function group(objects) {
    if (typeof objects !== 'object' || objects === null)
        throw new Error("Input must be of type 'object', which is non-empty.")
    let result = {}
    for (const user of Object.values(objects)) {
        if (user && typeof user === 'object' && user.hasOwnProperty('desgination')) {
            const language = user.desgination.split(" ").find(word => programmingLanguages.includes(word));
            if (language) {
                result[language] = result[language] || []
                result[language].push(user)
            }
        }
    }
    if (Object.keys(result) === 0)
        throw new Error("No users with programming languages found.")
    return result;
}
export default group;