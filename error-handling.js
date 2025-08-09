class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

function readUser(json) {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new ValidationError("No field : name")
    }

    if (!user.age) {
        throw new ValidationError("No field : age")
    }

    return user
}

try {
    let user = readUser('{"name":25}')
} catch (err) {
    if (err instanceof ValidationError) {
        console.log(err.name, err.message)
    } else if (err instanceof SyntaxError) {
        console.log("Syntax error : ", err.name, err.message)
    } else {
        console.log(err)
    }
}