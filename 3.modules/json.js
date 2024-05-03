obj = {"name":"Raksha","age":24}
var str = JSON.stringify(obj)
console.log(str); //{"name":"Raksha","age":24}
console.log(typeof(str)); // string

str2 = '{"name":"Raksha","age":24}'
var obj2 = JSON.parse(str2);
console.log(obj2); // { name: 'Raksha', age: 24 }
console.log(typeof(obj2)) //object