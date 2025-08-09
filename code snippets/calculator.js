function Calculator() {

    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,

    }

    this.calulate = function (str) {
        let operands = str.split(' ')
        a = +operands[0]
        op = operands[1]
        b = +operands[2]
        return this.methods[op](a, b)
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func
    }

}

let calc = new Calculator()
calc.addMethod('/', (a, b) => a / b)
calc.addMethod('*', (a, b) => a * b)
console.log(calc.calulate("10 * 2"))