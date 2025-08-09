let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team with members ${mem1} and ${mem2}`);
    }
}
let ironMan = {
    name: "Tony",
    team: "iron man"
}


// CALL POLYFILL
Function.prototype.myCall = function (objectInvolved, ...args) {
    let requiredFn = this;
    objectInvolved.requiredFn = requiredFn;
    objectInvolved.requiredFn(...args)
    delete objectInvolved.requiredFn;
}



cap.petersTeam.call(ironMan, 'captian', 'thanos')
cap.petersTeam.myCall(ironMan, 'captian', 'thanos')


// APPLY POLYFILL
Function.prototype.myApply = function (objectInvolved, args) {
    let requiredFn = this
    objectInvolved.requiredFn = requiredFn
    objectInvolved.requiredFn(...args)
    delete objectInvolved.requiredFn
}



// cap.petersTeam.myApply(ironMan, ['captians from apply', 'thanos'])
// cap.petersTeam.apply(ironMan, ['captians from apply', 'thanos'])


// BIND POLYFILL
Function.prototype.myBind = function (objectInvolved) {
    let requiredFn = this
    return function (...args) {
        requiredFn.call(objectInvolved, ...args)
    }
}

// const bindedFn = cap.petersTeam.myBind(ironMan, 'captian from bounded', 'thanos')
// bindedFn('captian from boundeds', 'thanossss')

// const normalBind = cap.petersTeam.bind(ironMan)
// normalBind('HAHA', 'OOHOHO')