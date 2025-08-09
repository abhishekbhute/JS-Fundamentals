let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
};

function superClone(obj) {
    let isArr = Array.isArray(obj)
    let cloning = isArr ? [] : {};
    for (let prop in obj) {
        if (Array.isArray(obj[prop])) {
            cloning[prop] = [...obj[prop]]
            for (let i = 0; i < cloning[prop].length; i++) {
                if (cloning[prop][i] == 'object') {
                    cloning[prop][i] = superClone(obj[prop][i])
                }
            }
        } else if (typeof obj[prop] === 'object') {
            cloning[prop] = superClone(obj[prop])
        } else {
            cloning[prop] = obj[prop]
        }
    }
    return cloning
}

let abc = superClone(person)
abc.lastName = "Odinson";
abc.address.street = "south 1st street";
console.log(abc, person)