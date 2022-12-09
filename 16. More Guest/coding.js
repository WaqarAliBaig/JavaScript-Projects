//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

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

console.log(`Hey, guy I just found a bigger table so I am going to add some more friends with us for the dinner.`);

console.log(`______________________________`);

guestList.unshift(`Adnan`);
guestList.splice(2, 0, `Sunny`);
guestList.push(`Faizan`);

// Invitation send again.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey`, guestList[i], `and too all new guest we are having a B.B.Q dinner party tonight at my place I'll be waiting for you guys, it will be a lot of fun.`);
}
