const account_Id = 987898
let account_Email = "atharv@gmail.com"
var account_Password = "12321"
account_City = "Pune"
let account_State;

// account_Id = 12345       // NOT ALLOWED

console.log(account_Id);

account_Email = 'vaibhav123@gmail.com'
account_Password = 12345
account_City = "Mumbai"

/*
Prefer not to use 'var'
because of issue in block scope and functional scope
*/

// console.log(account_Email);
console.table([account_Id, account_Email, account_Password, account_City, account_State])
