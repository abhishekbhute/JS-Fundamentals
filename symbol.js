// Used to Unique Indentifers
let id = Symbol("id")

let user = { name: "abhishek", [id]: 101 };

// user[id] = 101;

for (let key in user) console.log(key);

// Global symbol 

let global = Symbol.for(123)

user[global] = 30

let g2 = Symbol.for("age")

user[g2] = 302


console.log(Symbol.keyFor(global))
