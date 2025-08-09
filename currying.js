let a = 1000;

function firstName(firstName) {
    // console.log('here firtName');
    return function lastName(lastName) {
        // console.log('last name');
        return function greeter() {
            // console.log(`Hi I am ${firstName} ${lastName}`)
            // console.log(a)
        }
    }
}

// firstName('abhishe')('bhu')()

function sum(a, b, c) {
    return a + b + c
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

let cur = curry(sum)
// console.log(cur(1, 2, 3))
// console.log(cur(1)(2)(3))

// Accept infinite parameters

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f
    }

    f[Symbol.toPrimitive] = () => {
        return currentSum
    }

    return f
}

console.log(+sum(1)(2)(3)(4))

// 1. Function Chaining with Closure
// Your sum(a) function returns another function add(b) that keeps adding to currentSum using closures, enabling chaining like sum(1)(2)(3).

// 2. Why It Returns a Function in console.log
// console.log(sum(1)(2)(4)) prints the function itself, because console.log() doesn't trigger automatic coercion (like toString() or valueOf).

// 3. How to Force Output of the Total Sum
// Use coercion methods to trigger the sum:

// console.log(+sum(1)(2)(4))

// console.log(String(sum(1)(2)(4)))

// 4. Best Practice: Use Symbol.toPrimitive
// Add this for cleaner coercion:

// js
// Copy
// Edit
// add[Symbol.toPrimitive] = () => currentSum;
// Now console.log(sum(1)(2)(4)) will directly output 7.