console.log(__dirname);
console.log(__filename);
//console.log(process); // os concepts wala process, pid , ppid...
console.log(process.pid);
console.log(process.ppid);

console.log(process.argv);

//op
// $ node 1.js 'hello' 'hi' 'bye-bye'
// C:\Users\User\Desktop\My Projects\Node.js course
// C:\Users\User\Desktop\My Projects\Node.js course\1.js
// 12672
// 5384
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\User\\Desktop\\My Projects\\Node.js course\\1.js',
//   'hello',
//   'hi',
//   'bye-bye'
// ]

const first = process.argv[2];
const second = process.argv[3];
const third = process.argv[4];
const err = process.argv[5]; // err will just hold undefined, no baadh in program execution.

let message = `${first}, ${second}, ${third}, ${err}`;
console.log(message);
