// spread
let arr = [1, 2, 3, 4, 5]
let arr2 = [...arr]
arr2.push(200)
console.log(arr,arr2)


// // rest

// function sum(param1, ...param2) {

//     let sum = param1
//     let a = param2.reduce((a, b) => a + b, 0)
//     console.log(a + sum)
// }

// function sum2(...params) {
//     let nums = [...params]
//     let a = nums.reduce((a, b) => a + b, 0)
//     console.log(a)
// }

// // sum(1, 2, 3, 4, 5)
// // sum2(1, 2, 3, 4, 5)


// let arr = [1, 2, 3, 4, [10, 12]]
// // spreadArray now contains the same elements as arr, but it's a new array with a separate reference.
// let spreadArray = [...arr];
// spreadArray.push(100);
// // spreadArray[4] = 200;
// spreadArray[4].push(300);
// console.log("outputs ", spreadArray, arr); 