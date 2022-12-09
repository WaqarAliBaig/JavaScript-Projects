//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList = [`Ahad`, `Arsalan`, `Saad`];

for (let i = 0; i < guestList.length; i++) {
    console.log(`Hi`, guestList[i], `would to like to have dinner at my home?`);
}

console.log(`______________________________`);

console.log(guestList[2] + `can't come due to some work.`);

console.log(`______________________________`);

guestList[2] = `Aamir`;

//Invitation send again.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hi`, guestList[i], `I am throwing a B.B.Q dinner party tonight at my home would you all like to come?`);
}
