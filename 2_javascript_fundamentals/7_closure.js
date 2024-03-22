console.log("closure");
//CLOSURE =>
// even after the function has been invoked/run, we have access to what it was doing/functionality of the code.
//
//
function functionMaker(val1) {
  return function (val2) {
    return val1 + val2;
  };
}
const fun1 = functionMaker(5);
console.log(fun1(3)); //op 8 (5+3)
//we have access to val1=5 even after it was executed in previous line.

console.log(fun1(9)); // op 14

const fun2 = functionMaker(10);
console.log(fun2(12)); //op 22)
