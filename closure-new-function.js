let globalValue = 'abhhy';

function getFunc() {
    let localValue = 'test1';
    // Create a new function that takes two parameters
    let func = new Function('globalVal', 'localVal', 'console.log(globalVal); console.log(localVal);');
    return func;
}

let func = getFunc();
func(globalValue, 'test');  // This will log 'abhhy' and 'test'
