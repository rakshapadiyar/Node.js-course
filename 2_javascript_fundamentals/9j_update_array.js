const a = [1,2,3,1,2,3,1,2,3,22,3,4];

console.log(a.lastIndexOf(3));//10
console.log(a.indexOf(3))//2
console.log(a.sort()) 
//[
//     1,  1, 1, 2, 2,
//     2, 22, 3, 3, 3,
//     3,  4
//   ]
console.log(a) //[ //changed original
//     1,  1, 1, 2, 2,
//     2, 22, 3, 3, 3,
//     3,  4
//   ]
console.log(a.reverse())
// [
//     4, 3, 3, 3, 3,
//    22, 2, 2, 2, 1,
//     1, 1
//  ]
console.log(a)
// [
//     4, 3, 3, 3, 3,
//    22, 2, 2, 2, 1,
//     1, 1
//  ]

//to srot acc to values
console.log(a.sort(function(a,b){
    return a-b;
}));
// [
//     1,  1, 1, 2, 2,
//     2,  3, 3, 3, 3,
//     4, 22
//   ]