const accountId = 123 
let accountEmail = "ln@google.com"
var accountPassword = "321"
accountCity = "Jaipur"

let accountState; // undefined 
//const salary; // initialization is mandatory to  const 


// accountId = 2; //not allowed 

accountEmail = "meena@gmail.com"
accountPassword = "456"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer Not to use var ->>> because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

