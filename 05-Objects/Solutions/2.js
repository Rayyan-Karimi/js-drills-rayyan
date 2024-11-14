function values(obj) {
    if (!obj || typeof obj !== 'object') {
        throw new Error("Send a non empty - object type argument.");
    }
    let res = []
    for (let key in obj) {
        res.push(obj[key]);
    }
    return res;
}
export default values;