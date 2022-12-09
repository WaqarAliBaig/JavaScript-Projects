// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList = [`Ahad`, `Arsalan`, `Saad`];

for (let i = 0; i < guestList.length; i++) {
    console.log(`Hi`, guestList[i], `would to like to have dinner at my home?`);
}

console.log(`______________________________`);

console.log(guestList[2] + `can't come due to some work.`);

console.log(`______________________________`);

guestList[2] = `Aamir`;

// Invitation send again.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hi`, guestList[i], `I am throwing a B.B.Q dinner party tonight at my home would you all like to come?`);
}

// Found a bigger table.
console.log(`______________________________`);

// Print Statement:
console.log(`Hey, guys I just found a bigger table so I am going to add some more friends with us for the dinner.`);

console.log(`______________________________`);

guestList.unshift(`Adnan`);
guestList.splice(2, 0, `Sunny`);
guestList.push(`Faizan`);

// Invitation send again.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey`, guestList[i], `and too all new guest we are having a B.B.Q dinner party tonight at my place I'll be waiting for you guys, it will be a lot of fun.`);
}

console.log(`______________________________`);

// Print Statement:
console.log(`Hey, guys I am sorry I ran into some problem so I can only invite two persons for dinner now, so please no heart feelings.`);

console.log(`______________________________`);

// Shrinking guest list.
for (let i = 0; i < 4; i++) {
    console.log(`Sorry`, guestList.pop() + ` I can only invite two people for dinner.`);
}

console.log(`______________________________`);

// Print msg for inviting to people.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey`, guestList[i], `you guys are still invited for dinner.`);
}

delete guestList[0];
delete guestList[1];

console.log(guestList);
