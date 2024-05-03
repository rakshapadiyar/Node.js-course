var fs =  require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user)
console.log(user.username)

fs.appendFile('greetings.txt',"Ki Farak Painda Yaara "+user.username+"\n",()=>{});