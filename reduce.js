let a = [1, 2, 3, 4, 5, -10, 2000, 300, -1000]
let sum = a.reduce((a, b) => a + b, 0)
let max = a.reduce((acc, curr) => {
    if (curr > acc) acc = curr
    return acc
})

// console.log(sum)

function sumLog(acc, ele) {
    return acc + ele
}

function maxLogic(acc, ele) {
    if (ele > acc) {
        acc = ele
    }
    return acc
}
Array.prototype.myReducer = function (callback, defVal) {
    let acc = defVal != undefined ? defVal : this[0];
    let startIndex = defVal != undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        acc = callback(acc, this[i])
    }
    return acc
}

Array.prototype.myRed = function (callback, initialValue) {
    let accumulator;
    let firstIndex;

    if (arguments.length === 1) {
        accumulator = this[0]
        firstIndex = 1
    } else {
        accumulator = initialValue;
        firstIndex = 0;
    }

    for (let i = firstIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i)
    }
    return accumulator
}

let maxP = a.myReducer(maxLogic, 0)
let sumP = a.myReducer(sumLog, 0)
let maxP1 = a.myRed(maxLogic, 0)
let sumP1 = a.myRed(sumLog, 0)
console.log(maxP, sumP, maxP1, sumP1, max, sum)
