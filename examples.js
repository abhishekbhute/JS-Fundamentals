// Closures


//Block scope
function outer() {
    let arrFn = []
    for (let i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i)
        })
    }
    return arrFn
}
let arrFn = outer()
arrFn[0]()
arrFn[1]()
arrFn[2]()

//Function scope

function outer() {
    let arrFn = [];
    for (var i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn1 = outer();
arrFn1[0]();
arrFn1[1]();
arrFn1[2]();


// Infinite Curring

function counter(args) {
    // write code only inside this function
    let count = 0;
    count++;
    if (args == 0) {
        return count;
    } else {
        return function inner(args) {
            count++;
            if (args == 0) {
                return count;
            } else {
                return inner;
            }
        }
    }
}
console.log(counter(0)); // Output :  1
console.log(counter()(0)); // Output : 2
console.log(counter()()()()(0)); // Output : 5