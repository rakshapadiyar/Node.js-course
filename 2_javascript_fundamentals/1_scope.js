//var - global scope
// let const block scope
// block is region betwwen { and }

//VAR
var a = "hello";
console.log(a);
{
    var a="mellow";
    console.log(a);
}
console.log(a); //mellow

//LET
let b="harry"; 
console.log(b); //harry
{
    let b="potter";
    console.log(b); //potter
}
console.log(b); //harry

const c = 10;
//a=12; //error
{
    const  c=13;
    console.log(c)//13
}
console.log(c); //10

