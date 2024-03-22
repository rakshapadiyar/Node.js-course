const arr = ['test','a',true,"string",{'a': "one",'z':"two"}];
console.log(typeof arr);
console.log(arr);

console.log(arr.length)

arr[0]= 1;
for(let i=0;i<5;i++)
console.log(arr[i]);

console.clear();

console.log(arr[3][1]); //t
console.log(arr[4]['a']); //one