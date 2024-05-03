const a = [1,2,3,4,"five","six"];
const ob = {
    first : "raksha",
    last : "padiyar",
    city : "mumbai"
}

console.log(a.length); //6

for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
// 1
// 2
// 3
// 4

a.forEach((val)=>{
    console.log(val)
})
// 1
// 2
// 3
// 4

console.clear()
for(key in ob)
{
    console.log(key)
}
// first
// last
// city
for(key in ob)
{
    console.log(key," : ",ob[key])
}
// first  :  raksha
// last  :  padiyar
// city  :  mumbai

console.log(Object.entries(ob)) //[ [ 'first', 'raksha' ], [ 'last', 'padiyar' ], [ 'city', 'mumbai' ] ]
console.clear()
console.log(Object.entries(ob).forEach(([val,key]) =>{
   console.log(val," : ",key)
 
}))
// first  :  raksha
// last  :  padiyar
// city  :  mumbai
// undefined


// The undefined output in your code is due to the way the forEach method works.

// The forEach method in JavaScript doesn't return anything, i.e., it returns undefined. So, when you wrap console.log(Object.entries(ob).forEach(...)), you're actually logging the return value of forEach, which is undefined.

// If you simply want to log each key-value pair without undefined, you can remove the outer console.log, like this:

Object.entries(ob).forEach(([val,key]) =>{
    console.log(val," : ",key)
 });
 //first  :  raksha
// last  :  padiyar
// city  :  mumbai

console.log(Object.keys(ob));//[ 'first', 'last', 'city' ]
console.log(Object.values(ob)) //[ 'raksha', 'padiyar', 'mumbai' ]

console.clear();

const arr = (Object.values(ob))
arr.forEach((val,index,arr)=>
{
    console.log(val,index,arr)
})

//raksha 0 [ 'raksha', 'padiyar', 'mumbai' ]
// padiyar 1 [ 'raksha', 'padiyar', 'mumbai' ]
// mumbai 2 [ 'raksha', 'padiyar', 'mumbai' ]