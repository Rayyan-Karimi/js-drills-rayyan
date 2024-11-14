function mapObject(object, callBack) {
    if (!object || typeof object !== 'object')
        return [];

    let result = {};
    for (let key in object) {
        result[key] = callBack(object[key], key, object);
    }
    return result;
}
export default mapObject;