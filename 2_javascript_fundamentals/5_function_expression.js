//fun1(1, 2, 3); //doing this here we get error ReferenceError: Cannot access 'fun1' before initialization

//function expression
const fun1 = function (a, b, c) {
  const val = a + b + c;
  return val;
};
console.log(fun1(1, 2, 3)); //6

//function declaration
console.log(fun2(1,3)); //3 => no error function declaration-=> due to hoisting

function fun2(a, b) {
    const val = a * b ;
    return val;
  };

  const a=5,b=6,c=7;
  //anonymous function
 (function(a,b,c) // u can assign the returned val here to a variable too
 {
    console.log('This is immediately invoked function',a,b,c);
 })(a,b,c);