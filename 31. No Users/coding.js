// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let otherUsers = ["Aamir", "Saad", "Admin", "Zeeshan"];

let userName = "Admin";

for (let i = 0; i < otherUsers.length; i++) {

    if (otherUsers[i] === userName) {

        if (userName === "Admin") {
            console.log("Hello admin, would you like to see status report?");
        }
        else {
            console.log("Hello " + otherUsers);
        }
    }     
}

// • Remove all of the usernames from your array, and make sure the correct message is printed.

otherUsers.length = 0;

if (otherUsers.length === 0) {
    console.log("We need to find some users");
}
