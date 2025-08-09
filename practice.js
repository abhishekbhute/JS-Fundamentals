Array.prototype.myReduce = function (callback, initialValue) {
    // Your implementation
    let res = initialValue ? initialValue : 0;

    let arr = this;
    arr.forEach((ele) => {
        res = callback(ele, res)
    })
    console.log(res)
}
let a = [1, 2, 3]
a.myReduce((a, b) => a + b, 0)