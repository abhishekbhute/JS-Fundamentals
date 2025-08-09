let arr = [1, 2, 3, 4, 5, 6]

function squarer(num) {
    return num * num
}

Array.prototype.myMap = function (logic) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        let ele = this[i]
        newArr.push(logic(this[i]))
    }
    return newArr
}

// MAP
let squaredArr = arr.map((ele) => ele * ele)
let squared = arr.map(squarer)
let polySquared = arr.myMap(squarer)
console.log(squaredArr, squared, polySquared)

// POLYFILL


