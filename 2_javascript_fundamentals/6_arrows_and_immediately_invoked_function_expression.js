//arrow format for function es6+
//recursion
//function invoking within itself
//use of return

//arrow
const fun4 = (a, b, c) => {
  const sum = a + b + c;
  return sum;
}

console.log("hi")
console.log(fun4(1,2,3))

//IDK, ITS WORKING IN INSTRUCTOR'S AND CHATGPT HAS NO IDEA WHATS WRONG
// (()=>{
//     console.log("hi");
// })()

// (() => {
//     console.log("hi");
// })()

//recursion
let counter = 100;
function loop(val)
{
    if(val==0)
    {
       return;
    }
    console.log(val);
    loop(val-1);
  
}
loop(25);

