"use strict";

var newUser1 = createNewUser();
console.log(newUser1);
console.log(newUser1.getAge());
console.log(newUser1.getLogin());
console.log(newUser1.getPassword());

function createNewUser() {
  var newUser = {};
  newUser.userFirstName = prompt("Enter your fitst name", "");
  newUser.userLastName = prompt("Enter your last name", "");
  newUser.birthday = prompt("Enter your birthday date", "dd.mm.yyyy");

  newUser.getLogin = function () {
    return "Login: ".concat(this.userFirstName[0].toLowerCase()).concat(this.userLastName.toLowerCase());
  };

  newUser.getAge = function () {
    var dob = this.birthday.split(".").reverse();
    var ageMs = Date.now() - new Date(dob).getTime();
    var ageDt = new Date(ageMs);
    return "Age: ".concat(ageDt.getFullYear() - 1970);
  };

  newUser.getPassword = function () {
    return "Password: ".concat(this.userFirstName[0].toUpperCase()).concat(this.userLastName.toLowerCase()).concat(this.birthday.slice(-4));
  };

  return newUser;
}