// "use strict";

// ------------------------------------- more dificalt task-----------------------------

function createNewUser() {
  const userFirstName = prompt("Enter your fitst name");
  const userLastName = prompt("Enter your last name");

  const newUser = {};

  Object.defineProperty(newUser, "userFirstName", {
    value: userFirstName,
    writable: false,
    configurable: true,
  });

  Object.defineProperty(newUser, "userLastName", {
    value: userLastName,
    writable: false,
    configurable: true,
  });

  newUser.setFirstName = function (newFirstName) {
    Object.defineProperty(newUser, "userFirstName", {
      value: newFirstName,
    });
  };

  newUser.setLasttName = function (newLasttName) {
    Object.defineProperty(newUser, "userLastName", {
      value: newLasttName,
    });
  };

  newUser.getLogin = function () {
    return `${this.userFirstName[0]}${this.userLastName}`.toLowerCase();
  };
  return newUser;
}

const newUser1 = createNewUser();
console.log(newUser1);
console.log(newUser1.getLogin());

newUser1.userFirstName =
  "TEST_1"; /* При "use strict" видасть помилку, без "use strict" прігнорує "TEST_1" та поверне "TEST_2"  */
newUser1.userLastName = "TEST_1";

newUser1.setFirstName("TEST_2");
newUser1.setLasttName("TEST_2");

console.log(newUser1);
console.log(newUser1.getLogin());

// ------------------------------------- normal task-----------------------------

// const newUser1 = createNewUser();

// console.log(newUser1);
// console.log(newUser1.getLogin());

// function createNewUser() {
//   const userFirstName = prompt("Enter your fitst name");
//   const userLastName = prompt("Enter your last name");

//   const newUser = {
//     userFirstName,
//     userLastName,
//     getLogin() {
//       return `${this.userFirstName[0]}${this.userLastName}`.toLowerCase();
//     },
//   };
//   return newUser;
// }
