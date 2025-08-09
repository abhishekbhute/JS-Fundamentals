function* generatorSequence(start, end) {
    for (let i = start; i < end; i++) {
        yield i
    }
}

function* generatorPassword() {
    yield* generatorSequence(48, 57)

    yield* generatorSequence(97, 122)
}

// let res = [...generatorSequence(0, 10)]
// console.log(res)

let str = ''
for (let code of generatorPassword()) {
    str += String.fromCharCode(code)
}

console.log(str)

function* simpleGenerator() {
    let result = yield 1;
    console.log(result)
    yield 2;
    yield 3;
    yield 4;
}

let generator = simpleGenerator()
console.log(generator.next().value)
console.log(generator.next(10).value)
generator.throw(new Error("ABC"))