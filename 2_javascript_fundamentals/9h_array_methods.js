const a = ['one','two',3,true,{one:1,two:2}]
console.log(a);

let val = a.toString(); //converts array to string
console.log(val) //one,two,3,true,[object Object]

//to stringify object, json string
val = JSON.stringify(a);
console.log(val) // ["one","two",3,true,{"one":1,"two":2}]

console.log(typeof val) //string

val = JSON.parse(val);

console.log(typeof val) //object
val[0] = "updated";
console.log(val); //[ 'updated', 'two', 3, true, { one: 1, two: 2 } ]

console.clear();

//JOIN
const a2 = [1,2,3]
val = a2.join();
console.log(val) //1,2,3

val = a2.join("|"); //specify separator
console.log(val) // 1|2|3

console.clear();
//JOIN STRINGS TOGETHER
val = a + a2;
console.log(val) // one,two,3,true,[object Object]1,2,3
val = a.concat(a2)
console.log(val) // [ 'one', 'two', 3, true, { one: 1, two: 2 }, 1, 2, 3 ]

