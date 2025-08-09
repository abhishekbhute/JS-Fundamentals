// Using inheritance, you can define classes that inherit all the functionality of their parents and add new functionality.
// A class can inherit all the methods and properties of another class by using class inheritance.

class User {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hi I am ${this.name}`)
    }
}

class Candidate extends User {

    constructor(name, age) {
        super(name)
        this.age = age
    }

    sayHi() {
        console.log(`Hi I am ${this.name} and my age is ${this.age}`)
    }

}

const cand = new Candidate('abhishek', 20)
cand.greet()
cand.sayHi()