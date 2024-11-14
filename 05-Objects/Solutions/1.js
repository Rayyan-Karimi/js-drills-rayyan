function keys(obj) {
    if (!obj || typeof obj !== 'object') {
        throw new Error("Send a non empty - object type argument.");
    }
    let res = []
    for (let key in obj) {
        res.push(key);
    }
    return res;

}
export default keys;