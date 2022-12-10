//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList = ["Ahad", "Arsalan", "Saad"];

// Location list.
console.log("Guest list array:");
console.log(guestList);

// Print location in alphabetical order.
console.log("Alphabetical order:");
console.log(guestList.sort());

// Print array in it's orignal order.
console.log("Orignal order:");
console.log(guestList);

// Print array in reverse alphabetical order.
console.log("Reverse alphabetical order:");
console.log(guestList.sort().reverse());

// Print array in it's orignal order again.
console.log("Orignal order again:");
console.log(guestList);

// Print array in reverse order to show that the order has changed.
console.log("Reverse order:");
console.log(guestList.reverse());

// Print array reversing the order again to show that the order is in it's original condition.
console.log("Reverse the order again:");
console.log(guestList.reverse());

//Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical order again:");
console.log(guestList.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order again:");
console.log(guestList.sort().reverse());

// Print message indicating the number of people invited for dinner.
console.log("Number of guests invited");
console.log("I have invited " + guestList.length + " guests for dinner."); 
