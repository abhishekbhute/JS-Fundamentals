
// let arr = [1, 2, 3, [4, 5], 6, [6, 7, [8, 9, 10]]]

// function flatten(srcArr) {
//     let newArr = []
//     for (let i = 0; i < srcArr.length; i++) {
//         let ele = srcArr[i]
//         let isArray = Array.isArray(ele)
//         if (isArray) {
//             let smallerArr = flatten(ele)
//             newArr.push(...smallerArr)

//         } else {
//             newArr.push(ele)
//         }
//     }
//     return newArr
// }

// console.log(arr.flat())
// console.log(flatten(arr))

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    }
}

function flattenObject(person) {
    let newObj = {}
    for (let prop in person) {
        console.log(person[`${prop}`], prop)
        let isObject = typeof person[prop] === "object" && !Array.isArray(person[prop])
        console.log(isObject)
        if (isObject) {
            let smallerObj = flattenObject(person[prop])
            for (const j in smallerObj) {
                newObj[prop + '.' + j] = smallerObj[j]
            }
        } else {
            newObj[prop] = person[prop]
        }
    }
    return newObj
}

console.log(flattenObject(person))