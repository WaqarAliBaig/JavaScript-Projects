//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "WAQAR ALI WEB 3.0 & METAVERSE DEVELOPER";

//convert into lowercase:
console.log(personName.toLOwerCase());


//Convert name into uppercase:
console.log(personName.toUpperCase());


//Convert name into titlecase:
let titleCase = personName.toLowerCase().split(" ");

let titleCaseText = " ";

// Use for loop to covert into titleCase:
for (let i = 0; i < titleCase.length; i++) {
    titleCaseText += titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1) +  " ";
}
console.log(titleCaseText);
