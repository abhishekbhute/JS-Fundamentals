let a = {
    appName: 'google',
    db: {
        host: '123',
        age: '2300',
        c: {
            a: 10
        }
    }
}

// https://medium.com/@nlfernando11/object-freeze-vs-object-seal-vs-object-preventextensions-251ee99d0c47
// Const does not prevents the updating of property values, just freezes the address of object

//1) Prevent Extension
// Cannot create new property at top level, but can update and delete

// let newA = Object.preventExtensions(a)
// newA.appName = 'abc'
// newA.height = '30' // doesnt work
// newA.db.host = '300'
// console.log(newA)


// 2) Seal
// cannot add or delete property, can update values

// let sealed = Object.seal(a)
// sealed.height = 200
// delete sealed.db // fails
// sealed.appName = 'facebook'
// console.log(sealed)


// 3) Freeze
// cannot update further
let freezed = Object.freeze(a)
freezed.a['db']['c']['a'] = 10
freezed.appName = 'googogo'
console.log(freezed)
