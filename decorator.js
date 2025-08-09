// let worker = {
//     slow(min, max) {
//         console.log(min + max)
//         return min + max
//     }
// }

// function hash(x) {
//     return x[0] + ',' + x[1]
// }

// function cachingDecorator(func, hash) {
//     let cache = new Map()

//     return function () {

//         let key = hash(arguments)

//         if (cache.has(key)) {
//             return cache.get(key)
//         }

//         let result = func.call(this, ...arguments)

//         cache.set(key, result)
//         console.log('cache', cache)
//         return result
//     }
// }



// worker.slow = cachingDecorator(worker.slow, hash)
// console.log(worker.slow(3, 5))


let f = debounce(alert, 1000);
f(1); // runs immediately
f(2); // ignored
setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
setTimeout(() => f(4), 1100); // runs
setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run

function debounce(func, delay) {
    let isCoolDown = false;
    return function () {
        if (isCoolDown) return

        func.apply(this, arguments)
        isCoolDown = true
        setTimeout(() => isCoolDown = false, delay)
    }
}

function alert(x) {
    console.log(x)
}