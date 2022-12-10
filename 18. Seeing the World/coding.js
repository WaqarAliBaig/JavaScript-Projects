// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let dreamPlaces = ["Saudi Arab", "Switzerland", "Japan", "Turkey", "Norway"];

// Location list.
console.log("Dream places array:");
console.log(dreamPlaces);

// Print location in alphabetical order.
console.log("Alphabetical order:");
console.log(dreamPlaces.sort());

// Print array in it's orignal order.
console.log("Orignal order:");
console.log(dreamPlaces);

// Print array in reverse alphabetical order.
console.log("Reverse alphabetical order:");
console.log(dreamPlaces.slice().sort().reverse());

// Print array in it's orignal order again.
console.log("Orignal order again:");
console.log(dreamPlaces);

// Print array in reverse order to show that the order has changed.
console.log("Reverse order:");
console.log(dreamPlaces.reverse());

// Print array reversing the order again to show that the order is in it's original condition.
console.log("Reverse the order again:");
console.log(dreamPlaces.reverse());

//Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical order again:");
console.log(dreamPlaces.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order again:");
console.log(dreamPlaces.sort().reverse());
