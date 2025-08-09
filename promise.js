const fs = require('fs').promises;

console.log("before");

// const promise = fs.promises.readFile('./f1.txt', 'utf-8');

// let promise = new Promise(function (resolve, reject) {
//     fs.readFile('./f1.txt', 'utf-8', function (err, data) {
//         if (data) {
//             resolve(data)
//         } else {
//             reject('There is an error')
//         }
//     })

// })
// console.log(promise)

// setTimeout(() => {
//     console.log(promise)
// }, 4000)

// console.log(promise)
// promise.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })

function readFile(filePath) {
    return fs.readFile(filePath, 'utf8');
}

function handleError(error) {
    console.error(error);
}

readFile('f1.txt')
    .then(data1 => {
        console.log('Contents of f1.txt:', data1);
        return readFile('f1.txt');
    })
    .then(data2 => {
        console.log('Contents of f2.txt:', data2);
        return readFile('f1.txt');
    })
    .then(data3 => {
        console.log('Contents of f3.txt:', data3);
    })
    .catch(handleError);