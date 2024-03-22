const arr = [1,"string",true,{1:"raksha"}]
const obj = {1:"rak",2:"padi",3:"yar","naam":"raksha padiyar"}
console.log(arr);
console.log(obj);
console.log(arr[3]);
console.log(obj.naam)// but obj.1 gives syntax error, to access its obj[1]
console.log(obj["naam"])// onj[naam] error

const a = 5+"5"
console.log(a,typeof a);