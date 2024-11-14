function defaults(obj, defaultsObject) {
    if (!obj || !defaultsObject || typeof defaultsObject !== 'object' || typeof obj !== 'object')
        throw new Error("Send object pls, (non-empty)")

    for (let key in defaultsObject) {
        if (!obj.hasOwnProperty(key)) {
            obj[key] = defaultsObject[key];
        }
    }
    return obj;
}
export default defaults;