console.log('this is a module!');

// module.exports = {
//     a: 123
// }

const bModule = require('./b');

console.log(bModule);

// export const s = {
//     a: 123,
//     b: bModule
// }

module.exports = {
    a: 123,
    b: bModule
}

