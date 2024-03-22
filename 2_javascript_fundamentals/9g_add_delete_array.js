const a=[0,1,2,3,4];

delete a[4];
console.log(a)
// [ 0, 1, 2, 3, <1 empty item> ]

delete a[4];
console.log(a)
// [ 0, 1, 2, 3, <1 empty item> ] Nothing happens actually

delete a[3];
console.log(a)
// [ 0, 1, 2, <2 empty items> ]

console.log(a[3]) //undefined

a[100] = 100;
console.log(a);
console.log(a.length); //101
//[ 0, 1, 2, <97 empty items>, 100 ]
// 101  (101-4 = 97)

console.clear();
//SPLICE -> add elle into the array array.splice(startIndex, how_many_ele_u_wanna_remove)
console.log(a); // [ 0, 1, 2, <97 empty items>, 100 ]
a.splice(0,2); //remove 2 ele from position 0
console.log(a); // [ 2, <97 empty items>, 100 ]

