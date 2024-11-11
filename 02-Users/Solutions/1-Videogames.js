/**
 * Find all users who are interested in playing video games.
 */
function videoGames(objects) {
    let result = []
    if (typeof objects !== 'object' || objects === null) {
        throw new Error('Input must be an object.')
    }
    for (const key in objects) {
        if (objects.hasOwnProperty(key)) {
            const user = objects[key];
            if (typeof user === 'object' && user.hasOwnProperty("interests") && Array.isArray(user.interests) && user.interests.some(interest => interest.includes("Games")))
                result.push(user);
        }
    }
    if (result.length === 0)
        throw new Error('No users found with the specified interest.')
    return result
}
export default videoGames;