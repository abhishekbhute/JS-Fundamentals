// In Javascript, prototypal inheritance is used to add methods and properties to objects.
// It allows one object to inherit the properties and methods of another.

let candidate = {
    canFly: true,
    canTalk() {
        return "No"
    }
}

let user = {
    name: 'abhi',
    canCode() {
        return "yes"
    },
    __proto__: candidate
}
console.log(user.canFly, user.canCode(), user.canTalk())


////So we can filter out inherited properties 
let animal = {
    eats: true
}

let rabbit = {
    alertt() {
        alert("Rabbit jumps")
    },
    __proto__: animal,
}

let human = {
    dance() {
        alert('human dancing')
    },
    __proto__: rabbit,
}

for (let prop in human) {
    let isOwn = human.hasOwnProperty(prop)
    if (isOwn) {
        console.log('Own property')
    } else {
        console.log('Inherited Property')
    }
}
