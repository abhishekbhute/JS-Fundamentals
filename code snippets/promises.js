// let names = ['abhishekbhute'];
// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
// Promise.all(requests)
//     .then(responses => {
//         // all responses are resolved successfully
//         for (let response of responses) {
//             console.log(`${response.url}: ${response.status}`); // shows 200 for every url
//         }
//         return responses;
//     })
//     // map array of responses into an array of response.json() to read their content
//     .then(responses => Promise.all(responses.map(r => r.json())))
//     // all JSON answers are parsed: "users" is the array of them
//     .then(users => users.forEach(user => console.log(user)))
//     .catch((err) => console.log(err))

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];




Promise.allSettled = function (promises) {
    let mappedP = promises.map((p) => {
        return p
            .then((value) => { return { status: 'fulfilled', value, } }).catch((reason) => {
                return {
                    status: 'rejected', reason,
                }
            })
    })
    return Promise.all(mappedP)
}




Promise.allSettled(urls.map((url) => fetch(url))).then((responses) => {
    responses.forEach((res) => {
        if (res.status === 'fulfilled') {
            console.log('PASSED')
        }
        if (res.status === 'rejected') {
            console.log(res.reason)
        }
    })
}).catch(err => console.log(err))


// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("INTERNET ERROR")), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(1), 1000))
// ]).then((res) => console.log(res))




