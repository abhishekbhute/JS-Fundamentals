let arr = ['a', '0', 'b', 'c', '0'];

function swapNumbersToLast(arr) {
    let write = 0;

    for (let read = 0; read < arr.length; read++) {
        if (arr[read] !== '0') {
            console.log(arr[read])
            arr[write] = arr[read]
            write++
        }
    }
    console.log(arr)
    while (write < arr.length) {
        arr[write] = '0'
        write++
    }
    return arr
}
console.log(swapNumbersToLast(arr))

function swap(arr) {
    let write = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '0') {
            arr[write] == arr[i]
            write++
        }
    }
    while(write<arr.length){
        arr[write] ="0"
        write
    }
}



// 🎯 Goal:
// Rearrange the array in-place so that:

// All non-'0' values remain in order

// All '0' values go to the end

// ✅ Without creating a new array (O(1) extra space)

// 📌 Key Idea: Two Pointers
// We use:

// read: to scan every element

// write: to track the position where the next non-'0' element should go

// 🧠 Steps:
// 1. Move non-zero characters to the front
// js
// Copy
// Edit
// for (let read = 0; read < arr.length; read++) {
//   if (arr[read] !== '0') {
//     arr[write] = arr[read];
//     write++;
//   }
// }
// We copy every non-'0' we find to the current write position.

// Then we increment write to the next slot.

// This means all the non-zero elements get squashed toward the front of the array.

// 2. Fill the rest of the array with '0'
// js
// Copy
// Edit
// while (write < arr.length) {
//   arr[write] = '0';
//   write++;
// }
// After placing all non-'0's, we just fill the rest with '0'

// Because we already "removed" the old ones by overwriting them in the first pass.

// 🔧 Full Example:
// js
// Copy
// Edit
// let arr = ['a', '0', 'b', 'c', '0']
// moveZerosInPlace(arr) // returns ['a', 'b', 'c', '0', '0']
// Step-by-step:
// Index	read	write	arr	Action
// 0	0	0	['a', '0', 'b', 'c', '0']	arr[0] is 'a' → write 'a' at arr[0], write++
// 1	1	1	['a', '0', 'b', 'c', '0']	arr[1] is '0' → skip
// 2	2	1	['a', 'b', 'b', 'c', '0']	arr[2] is 'b' → write 'b' at arr[1], write++
// 3	3	2	['a', 'b', 'c', 'c', '0']	arr[3] is 'c' → write 'c' at arr[2], write++
// 4	4	3	['a', 'b', 'c', 'c', '0']	arr[4] is '0' → skip

// Now write = 3. Fill from arr[3] onwards with '0':

// js
// Copy
// Edit
// arr[3] = '0';
// arr[4] = '0';
// ✅ Final: ['a', 'b', 'c', '0', '0']



