let name1 = {
    firstName: 'abhishek',
    lastName: 'bhute',
    fullName: function (city) {
        console.log(this.firstName + " " + this.lastName + " from " + city);
    }
}

let printFullName = function (city) {
    console.log(this.firstName + " " + this.lastName + " from " + city);
}


let name2 = {
    firstName: 'kunal',
    lastName: 'jad',
}

//call
//name1.fullName.call(name2, "hubli")
//printFullName.call(name1, 'usa')


//apply
// name1.fullName.apply(name2, ['mumbai'])
// printFullName.apply(name2, ['ireland'])

//bind
let a = name1.fullName.bind(name2, "russia")
a()
let b = printFullName.bind(name2, 'england')
b()
