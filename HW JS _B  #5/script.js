"use strict";

const newUser1 = createNewUser();
console.log(newUser1);
console.log(newUser1.getAge());
console.log(newUser1.getLogin());
console.log(newUser1.getPassword());

function createNewUser() {
  const newUser = {};

  newUser.userFirstName = prompt("Enter your fitst name", "");
  newUser.userLastName = prompt("Enter your last name", "");
  newUser.birthday = prompt("Enter your birthday date", "dd.mm.yyyy");
  newUser.getLogin = function () {
    return `Login: ${this.userFirstName[0].toLowerCase()}${this.userLastName.toLowerCase()}`;
  };
  newUser.getAge = function () {
      const dob = this.birthday.split(".").reverse();
      const ageMs = Date.now() - new Date(dob).getTime();
      const ageDt = new Date(ageMs);
      return `Age: ${ageDt.getFullYear() - 1970}`;
    };
  newUser.getPassword = function () {
      return (`Password: ${this.userFirstName[0].toUpperCase()}${this.userLastName.toLowerCase()}${this.birthday.slice(-4)}`
      );
    };
  return newUser;
}
