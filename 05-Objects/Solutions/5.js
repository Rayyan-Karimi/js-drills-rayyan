function invert(obj) {
    if (!obj || typeof obj !== 'object')
        throw new Error("Send object pls, (non-empty)")

    let result = {};
    for (let key in obj) {
        result[obj[key]] = key;
    }
    return result;
}
export default invert;