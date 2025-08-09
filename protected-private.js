class User {
    _name = 'abhishek'; // protected
    #age = 20; // private

    get name() {
        return this._name
    }

    set name(value) {
        if (value.length < 4) {
            console.log('too short')
            return
        }
        this._name = value
    }

    #setAge(value) {
        this.#age = value
    }


}

let user = new User()
console.log(user.setAge(2022))
