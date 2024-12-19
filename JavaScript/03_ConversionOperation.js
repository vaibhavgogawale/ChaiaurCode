let score = "33"
let age = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(age)

console.log(typeof (valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1;  false => 0 

let isLoggedIn = "Vaibhav"
let boolean_Is_Logged_In = Boolean(isLoggedIn)
console.log(boolean_Is_Logged_In);

// true => 1;  false => 0 
// "" => true
// "Vaibhav" => false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
