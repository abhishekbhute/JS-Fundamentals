// Let’s start from the first method. There’s a built-in symbol named Symbol.toPrimitive that
// should be used to name the conversion method, like this:

let user = {
    name: 'john',
    money: 1000,
    // [Symbol.toPrimitive](hint) {
    //     return hint
    // }
}

console.log(user.valueOf())