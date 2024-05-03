// const a = [1,2,3];
// a= [] assignment gives error, since a is const
// a.length=0;
// console.log(a); // []
const a=[2,3,4]
const b = a.map(val => {return val*2});
console.log(b); //[ 4, 6, 8 ]
console.log(a); //[ 2, 3, 4 ]

console.log(a.map(val =>{
    val = val+"Custard apple"
    return val;
})) //[ '2Custard apple', '3Custard apple', '4Custard apple' ]

console.log(a) //[ 2, 3, 4 ]