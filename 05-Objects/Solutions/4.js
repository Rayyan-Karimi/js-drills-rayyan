function pairs(obj) {
    if (!obj || typeof obj !== 'object')
        return [];

    let result = [];
    for (let key in obj) {
        result.push([key, obj[key]])
    }
    return result;
}
export default pairs;