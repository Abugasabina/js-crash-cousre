// Declaring a variable
// Keyword identifier or variableName = value

var firstName = "John";
let lastName = "Doe";
let age = 27;
let children = ["Bright", "Simon", "Patrick"];
let other = {
    favouriteColor : "Gold",
    favouriteSport : "Soccer",
    favouriteFruit : "Apple",
};

const fullName = firstName + " " + lastName; // concatenation
const mySelf = `My name is ${firstName} ${lastName}.`; // string interpolation
console.log(mySelf);

//STRING
let sentence = "This story is about how I became professional Web Developer"
console.log(sentence.length);
console.log(sentence.split("became"));
console.log(sentence.replace("professional", "verified"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase);

// STRING BOOLEAN
console.log(sentence.startsWith("That"));
console.log(sentence.endsWith("Developer"));
console.log(sentence.includes("America"));

// ARRAYS
const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.indexOf("Wednesday"));
console.log(days[3]); //retrieving data
days[2] = "Friday"; // change data in the array
console.log(days);

// OBJECT
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
};

console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

