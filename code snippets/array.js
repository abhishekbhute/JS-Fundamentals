// Sum input numbers
// importance: 4
// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses
// “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt("A number please?", 0);
//         // should we cancel?
//         if (value === "" || value === null || !isFinite(value)) break;
//         numbers.push(+value);
//     }
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// alert(sumInput());

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6] .
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.
// For instance:

// function getMaxSubSum(arr) {
//     let maxSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let maxSoFar = 0
//         for (let j = i; j < arr.length; j++) {

//             maxSoFar += arr[j]
//             maxSum = Math.max(maxSoFar, maxSum)
//         }
//     }
//     console.log(maxSum)
// }

function getMaxSubSum2(arr) {
    let maxSum = 0
    let sumSoFar = 0
    for (let ele of arr) {
        sumSoFar += ele
        maxSum = Math.max(sumSoFar, maxSum)
        if (sumSoFar < 0) {
            sumSoFar = 0
        }
    }
    console.log(maxSum)
}
getMaxSubSum2([-2, 1, -3, 4, -1, 2, 1, -5, 4])

