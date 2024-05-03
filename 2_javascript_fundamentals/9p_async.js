console.log(global)
// $ node 9p_async.js
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [AsyncFunction: fetch],
//   crypto: [Getter]
// }

console.clear();

let a = "hello"

function timer(val)
{
    console.log("Timer ran "+ val+" a is now "+a); //Timer ran I am argument a is now world
}
let counter = 0;
function message(val)
{
    counter++;
    console.log(`${counter}, - ${val}`);
}

for(let i=5;i>0;i--)
{
    setTimeout(message,i*1000,i);
}

setTimeout(timer,2000,"I am argument") //timer 1 is the argument passed to timer function
a="world" ; 

console.clear();


