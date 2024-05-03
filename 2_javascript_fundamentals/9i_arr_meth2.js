const a = ["one","two"];
console.log(a.indexOf("two")) //1
console.log(a.indexOf("three")); //-1
console.log(a.includes("two")); //true
console.log(a.includes("zero")); //false
const val = Array.isArray(a);
console.log(val) //true
let c=0;
console.log(Array.isArray(c)) //false