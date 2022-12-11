//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let mobilePhone = `iPhone`;

// 5 statements evaluate to True:
// Test: 1
console.log("Is mobilePhone == `iPhone`? I predicted true.");
console.log(mobilePhone == `iPhone`);

// Test: 2
console.log("Is mobilePhone === `iPhone`? I predicted true.");
console.log(mobilePhone === `iPhone`);

// Test: 3
console.log("Is mobilePhone.length == 6? I predicted true.");
console.log(mobilePhone.length == 6);

// Test: 4
console.log("Is mobilePhone.length > 3? I predicted true.");
console.log(mobilePhone.length > 3);

// Test: 5
console.log("Is mobilePhone.length > 5 && mobilePhone.charAt(1) === `P? I predicted true.");
console.log(mobilePhone.length > 5 && mobilePhone.charAt(1) === `P`);

console.log("All the test results in True");
console.log("-----------------------------------------------------------------------------------");

// 5 statement evaluate to False:
// Test: 1
console.log("Is mobilePhone != `iPhone`? I predicted false.");
console.log(mobilePhone != `iPhone`);

// Test: 2
console.log("Is mobilePhone === `TV`? I predicted false.");
console.log(mobilePhone === `TV`);

// Test: 3
console.log("Is mobilePhone == 6? I predicted false.");
console.log(mobilePhone == 6);

// Test: 4
console.log("Is typeof(mobilePhone) == `true`? I predicted false.");
console.log(typeof(mobilePhone) == true);

// Test: 5
console.log("Is mobilePhone.length > 8 || mobilePhone.charAt(1) === `P? I predicted false.");
console.log(mobilePhone.length > 8 || mobilePhone.charAt(0) === `P`);

console.log("All the test results in False");
