// console.log('first');

// setImmediate((val)=>{
//     console.log(`immediate ${val}`)
// },'Hello world');
// console.log('last');

 //first
// last
// immediate Hello world

// -------------------'

// console.log('first');

// setImmediate((val)=>{
//     console.log(`immediate ${val}`)
// },'Hello world');
// console.log('last');

// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }
// first
// last
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// immediate Hello world

//-------------------------------------------
console.log('first');

setImmediate((val)=>{
    console.log(`immediate ${val}`)
},'Hello world');

console.log('last');

for(let i=0;i<10;i++)
{
    console.log(i);
}



