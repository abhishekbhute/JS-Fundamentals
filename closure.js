let a = 1000;

function firstName(firstName) {
    console.log('here firtName');
    return function lastName(lastName) {
        console.log('last name');
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`)
            console.log(a)
        }
    }
}

// let firstFn = firstName('abhi')
// console.log(firstFn)
// let lastFn = firstFn('bhute')
// console.log(lastFn)

// lastFn()

// firstName('abhishe')('bhu')()


function createEvenStack() {
    let items = []
    return {
        push(item) {
            if (item % 2 == 0) {
                items.push(item)
                console.log('it pushed')
            } else {
                console.log('Please enter a even item')
            }
        },
        pop() {
            return items.pop()
        }
    }
}

let stack = createEvenStack()
stack.push(10)
stack.push(5)
stack.items
