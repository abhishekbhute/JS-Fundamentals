// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.asyncIterator]() {
//         return {
//             current: this.from,
//             last: this.to,

//             async next() {
//                 await new Promise(resolve => setTimeout(resolve, 1000))

//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++ }
//                 } else {
//                     return { done: true }
//                 }
//             }
//         }
//     }
// }

// async function RangeIterator() {
//     for await (let value of range) { // (4)
//         console.log(value); // 1,2,3,4,5
//     }
// }

// RangeIterator()



async function* fetchRepo(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
        const response = await fetch(url, {
            headers: { 'User-Agent': 'Our Script' }
        })

        const body = await response.json()

        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
        nextPage = nextPage && nextPage[1];

        url = nextPage


        for (let commit of body) {
            yield commit
        }
    }
}

async function getCommits() {
    let count = 0;
    let url = 'javascript-tutorial/en.javascript.info'

    for await (let commit of fetchRepo(url)) {
        console.log(commit.author.login)

        if (++count == 10) {
            break;
        }
    }
}

getCommits()