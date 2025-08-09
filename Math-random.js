function random(min, max) {
    // let rand = min + Math.random() * (max + 1 - min)
    // return Math.floor(rand)
    return Math.floor((Math.random() * 10) + 1)
}

function randomInteger(min, max) {
    // here rand is from min to (max+1) 
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(randomInteger(1, 3))
console.log(randomInteger(1, 3))
console.log(randomInteger(1, 3))
console.log(randomInteger(1, 3))

console.log(randomInteger(1, 3))