console.log('A Sync code 1')
// requestAnimationFrame(function () {
//     console.log('B requestAnimationFrame');
// });

setTimeout(() => {
    console.log('normal macrotask')
})

queueMicrotask(() => {
    console.log('A Micro Task')
})

new Promise((resolve, res) => {
    resolve(console.log('promise'))
})

console.log('A sync code 2')