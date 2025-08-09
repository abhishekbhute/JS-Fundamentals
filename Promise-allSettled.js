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