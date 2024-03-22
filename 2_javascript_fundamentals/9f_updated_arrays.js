// pop - last ele removed

// push - add ele to end of array 

// shift - REMOVES FIRST ARRAY ELEMENT

// unshift - adds a new element to the start of array

const a=['test',0,true,"Saurabh",{"Harjyot":"Soni","Albinder":"Dhindsa"}];

a[a.length] = 4;
console.log(a); 
a[a.length] = 5; //keeps adding and array length also increases dynamically

a.push(6); // adds 6 just like prev line
console.log("After push ",a);
let temp = a.pop()
console.log("After pop ", a); //6 gone
console.log("popped ",temp); //popped  6

console.clear();
console.log("Before shift ",a);
a.shift();
console.log("after shift ",a); //"test gone"

a.unshift("i added this through unshift");
console.log("after unshift ",a);
//after unshift  [
//     'i added this through unshift',
//     0,
//     true,
//     'Saurabh',
//     { Harjyot: 'Soni', Albinder: 'Dhindsa' },
//     4,
//     5
//   ]