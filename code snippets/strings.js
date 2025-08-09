// truncate("What I'd like to tell on this topic is:", 20)//= "What I'd like to te…"
// truncate("Hi everyone!", 20) //= "Hi everyone!"
// function truncate(str, len) {
//     if (str.length > 20) {
//         console.log(str.slice(0, len - 1) + '...')
//     } else {
//         console.log(str)
//     }
// }



// console.log(checkSpam('buy ViAgRA now')) //== true
// console.log(checkSpam('free xxxxx')) //== true
// console.log(checkSpam("innocent rabbit")) //== false

// function checkSpam(str){
// let strr = str.toLowerCase()
// if(strr.includes('viagram') || strr.includes('xxxxx')){
// return true
// }
// return false
// }


console.log(extractCurrencyValue('$120') === 120); // tru
function extractCurrencyValue(str) {
    return parseInt(str.slice(1))
}
