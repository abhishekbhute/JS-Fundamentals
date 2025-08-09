const fs = require('fs/promises')

async function readFileAsync(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return data;
    } catch (error) {
        throw error;
    }
}

// readFile()

async function readFilesSequentially() {
    try {
        const data1 = await readFileAsync('f1.txt');
        console.log('File 1 Contents:', data1);

        const data2 = await readFileAsync('f1.txt');
        console.log('File 2 Contents:', data2);

        const data3 = await readFileAsync('f1.txt');
        console.log('File 3 Contents:', data3);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to read files sequentially
// readFilesSequentially();


// 15
(function () {
    function resolveAfterNSeconds(n, x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, n);
        });
    }

    (async function () {
        let a = await resolveAfterNSeconds(1000, 1);
        let y = await resolveAfterNSeconds(2000, 2);
        let z = await resolveAfterNSeconds(1080, 3);
        let p = await resolveAfterNSeconds(2000, 4);
        let q = await resolveAfterNSeconds(1000, 5);
        // Output, total time
        console.log(a + y + z + p + q);
    })();
})();

