const myObj1 = {
    first : "Raksha",
    last : "Padiyar",
    age:24,
    1:2,
    a1:'test1',
    a2:'test2',
    a3:'test3',
    "test 1":"whaaaaat"
}
console.log(myObj1);
console.log(myObj1.first +" "+myObj1.last);
// syntax error console.log(myObj1.1);
// so do
console.log(myObj1[1]) // op 2 
console.log(myObj1['1']) // op 2

for(let i=1;i<5;i++)
{
 console.log(myObj1['a'+i]);
}
//for i =4, undefined

console.log(myObj1["first"]) //myObj1[first] -> error
console.log(myObj1["test 1"])
// myObj1[test 1] and myObj1.test 1 => error