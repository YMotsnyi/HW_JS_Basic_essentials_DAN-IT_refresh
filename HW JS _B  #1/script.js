// "use strict";

const userName = prompt("What is your name?");
const age = prompt("How old are you?");

while (
  userName === "" ||
  userName == " " ||
  +userName ||
  userName === null ||
  userName === "null"
) {
  userName = prompt("Enter your name correctly", userName);
}

// do {
//   userName = prompt("What is your name?", userName);
// } while (
//   userName === "" ||
//   // userName == " " ||
//   +userName ||
//   userName === null ||
//   userName === "null"
// );

while (!+age) {
  age = prompt("Enter your age correctly", age);
}

// do {
//   age = prompt("How old are you?", age);
// } while (!+age);

if (age < 18) {
  alert("You are not allowed to visit this website.");
} else if (age >= 18 && age <= 22) {
  let result = confirm("Are you sure you want to continue?");
  if (result) {
    alert("Welcome, " + userName + ".");
  } else {
    alert("You are not allowed to visit this website.");
  }
} else {
  alert("Welcome, " + userName + ".");
}
