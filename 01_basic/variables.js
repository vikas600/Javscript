const accountId = 101
let accountEmail = "vikas@gmail.com"
var accountPassword ="1234"
accountCity ="Jaipur"

let accountState;


// accountId =2   // not allowed

accountEmail="hc@gmail.com"
accountPassword="2344"
accountCity= "Pune"

console.log(accountId);
/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
