function flattenObject(obj) {
    let newObj = {}
    // Your implementation
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            let flat = flattenObject(obj[key])
            for (let key1 in flat) {
                newObj[`${key}.${key1}`] = flat[key1]
            }
        } else {
            console.log(obj[key])
            newObj[key] = obj[key]
        }
    }
    return newObj
}

console.log(flattenObject({ a: null, b: { c: undefined } }));