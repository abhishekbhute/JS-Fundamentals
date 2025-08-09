const fs = require('fs');


// call back hell
// fs.readFile('./f1.txt', 'utf-8', (error1, data1) => {
//     if (error1) {
//         console.log(error1)
//     } else {
//         fs.readFile('./f1.txt', 'utf-8', (error2, data2) => {
//             if (error2) {
//                 console.log(error1)
//             } else {
//                 console.log(data1, data2)
//             }
//         })
//     }
// })


// solution to callback hell
function f1cb(error, data) {
    if (error) {
        console.log(error)
    } else {
        readFile1()
    }
}

function f2cb(error, data) {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
}

function readFile1() {
    fs.readFile('./f1.txt', 'utf-8', f1cb)
}

function readFile1() {
    fs.readFile('./f1.txt', 'utf-8', f2cb)
}

readFile1()