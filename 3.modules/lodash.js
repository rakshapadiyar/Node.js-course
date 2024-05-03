var _ = require("lodash");

var redundant = [1,2,1,2,3,"raksha","padi","padi","yar","albinder",2,3,5,"dhindsa"]
var filtered = _.uniq(redundant)
console.log(filtered); //[ 1, 2, 3, 'raksha', 'padi', 'yar', 'albinder', 5, 'dhindsa' ]

console.log(_.isString("Albinder2")); //true
console.log(_.isString(2));//false
console.log(_.isString("2"));//true