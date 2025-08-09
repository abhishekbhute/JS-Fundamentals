class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJsons(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

async function loadJson(url) {
    let response = await fetch(url)

    if (response.status == 200) {
        let json = await response.json(); // (3)
        return json;
    }
    throw new Error(response.status);
}

async function demoGithubUser() {
    let user;
    while (true) {
        let name = 'abhishekbhute';
        try {
            user = await loadJson(`https://api.github.com/users/${name}`)
            console.log(`Full name: ${user.name}.`)
            break
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
                return demoGithubUser();
            } else {
                throw err;
            }
        }
    }

    console.log(`Full name: ${user.name}.`);
    return user;
}
demoGithubUser();
