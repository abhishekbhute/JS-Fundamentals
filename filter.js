let arr = [1, 2, 3, 4, 5]

//FILTER
function oddLogic(num) {
    return num % 2 === 1;
}
let odd = arr.filter((ele) => ele % 2)
let odd1 = arr.filter(oddLogic)
console.log(odd, arr)


// FILTER POLYFILL

Array.prototype.myFilter = function (logic) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        let ele = this[i]
        if (logic(ele)) {
            newArr.push(ele)
        }
    }
    return newArr
}

let oldPoly = arr.myFilter(oddLogic);
console.log(oldPoly)