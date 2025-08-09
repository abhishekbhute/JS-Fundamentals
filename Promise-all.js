const p1 = Promise.resolve(20)
const p2 = Promise.resolve('yes')
const p3 = Promise.resolve('100')

// Promise.all([p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


Promise.all = function (arrayOfPromises) {
    return new Promise((resolve, reject) => {
        let rejected = arrayOfPromises.length
        const resolved = []

        if (rejected === 0) {
            resolve([])
            return;
        }

        arrayOfPromises.forEach(async (promise) => {
            try {
                const res = await promise;
                resolved.push(res)
                rejected--

                if (rejected === 0) {
                    resolve(resolved)
                }
            } catch (err) {
                reject(err)
            }
        })
    })
}

Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

