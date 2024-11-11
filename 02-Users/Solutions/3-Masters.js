/**
 * Find all users with masters Degree.
 */
function masters(objects) {
    let result = []
    if (typeof objects !== 'object')
        throw new Error("Input must be of type 'object'.")
    if (typeof objects === null)
        throw new Error("Objects must not be empty.")
    for (const key in objects) {
        if (objects.hasOwnProperty(key)) {
            const user = objects[key];
            if (typeof user === 'object' && user !== null && user.hasOwnProperty("qualification") && user.qualification ==="Masters")
                result.push(user)
        }
    }
    if (result.length === 0)
        throw new Error("No specified users found.")
    return result
}
export default masters;