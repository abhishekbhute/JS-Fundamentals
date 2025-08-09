const fs = require('fs')

function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    })
}

function promisify(f) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, ...results) {
                if (err) {
                    reject(err)
                } else {
                    resolve(results.length === 1 ? results[0] : results)
                }
            }
            args.push(callback)

            f.call(this, ...args)
        })
    }
}


let readFilePromise = promisify(readFile);

readFilePromise('f1.txt').then((data) => {
    console.log(data)
}).catch((err) => console.log(err))
