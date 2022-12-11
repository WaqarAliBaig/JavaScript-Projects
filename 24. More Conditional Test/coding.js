//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let exclusiveCars = ["Audi R8", "Bugatti La Voiture", "Ferrari Enzo", "Koenigsegg Regera", "Lamborghini Centenario"];

console.log(exclusiveCars);

// • Tests for equality and inequality with strings:
console.log(exclusiveCars[4] === "Lamborghini Centenario");
console.log(exclusiveCars[4] !== "Lamborghini Centenario");

// • Tests using the lower case function
console.log(exclusiveCars[3].toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(exclusiveCars.length === 5);
console.log(exclusiveCars.length !== 5);
console.log(exclusiveCars.length > 5);
console.log(exclusiveCars.length < 5);
console.log(exclusiveCars.length >= 5);
console.log(exclusiveCars.length <= 5);

// • Tests using "&" and "or" operators
console.log(exclusiveCars[0] === "Audi R8" && exclusiveCars.length > 5);
console.log(exclusiveCars[0] === "Audi R8" || exclusiveCars.length > 5);

// • Test whether an item is in a array
console.log(exclusiveCars.includes("Ferrari Enzo"));
console.log(!exclusiveCars.includes("Ferrari Enzo"));
