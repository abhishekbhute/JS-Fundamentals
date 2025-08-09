// let target = {}
// let proxy = new Proxy(target, {})

// proxy.test = 5
// // console.log(target.test)

// // for (let key in proxy) console.log(key)
// // console.log(target)


// // GET PROXY TRAP

// let dict = {
//     'Hola': 'Hello',
// }
// dict = new Proxy(dict, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop]
//         } else {
//             return prop
//         }
//     }
// })

// console.log(dict['Hola'])
// console.log(dict['Something else'])

// // SET AND HAS TRAP
// let nums = [1, 2, 3, 4]
// nums = new Proxy(nums, {
//     set(target, prop, value) {
//         if (typeof value === 'number') {
//             target[prop] = value
//             return true
//         } else {
//             return false
//         }
//     },
//     has(target, prop) {
//         if (prop in target) {
//             return true
//         } else {
//             return false
//         }
//     }
// })

// nums.push(10)
// // nums.push('acb')
// console.log('here', 4 in nums)


// //WRAPPING FUNCTION WITH APPLY

// function delay(f, ms) {
//     return new Proxy(f, {
//         apply(target, thisArg, args) {
//             setTimeout(() => target.apply(thisArg, args), ms)
//         }
//     })
// }

// function sayHi(user) {
//     console.log(`HELLOOO ${user}`)
// }

// sayHi = delay(sayHi, 1000)
// sayHi('Abhishek')


let map = new Map();
let proxyMap = new Proxy(map, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    }
});
proxyMap.set('test', 1);
console.log(proxyMap.get('test'));


// Accessing private fields using proxies
class User {
    #name = "Guest";
    getName() {
        return this.#name;
    }
}
let user = new User();
user = new Proxy(user, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    }
});
console.log(user.getName()); // Guest



