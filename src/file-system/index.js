// const {readFile, readFileSync} = require('fs');
const {readFile, readFileSync} = require('fs').promise;

// const txt = readFileSync('./hello.txt', 'utf8');

// const txt = readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });

async function hello() {
    const txt = await readFile('./hello.txt', 'utf8');
}

console.log(txt)

console.log('Do this ASAP')