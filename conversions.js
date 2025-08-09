let user = {
    name: 'abhi',
    money: 500,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint === "string" ? `{name : ${this.name}}` : this.money
    }
}

console.log(user.valueOf())
console.log(+user); // hint: number -> 1000
console.log(user + 500)