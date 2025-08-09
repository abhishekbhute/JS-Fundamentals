let promise = Promise.resolve(20);
promise.then((data) => {
    console.log(data)
    return data * 2
}).then((data) => {
    console.log(data)
    return data + 2
}).then((data) => {
    console.log(data)
    return data
}).then((data) => {
    console.log(data)
}).finally(() => {
    console.log('finally')
})